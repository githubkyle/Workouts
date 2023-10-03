import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Auth from "../utils/auth";
import { saveWorkoutIds, getSavedWorkoutIds } from "../utils/localStorage";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { SAVE_WORKOUT } from "../utils/mutations";
import { QUERY_CATEGORIES, QUERY_CATEGORY } from "../utils/queries";
import "./index.css";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchedWorkouts, setSearchedWorkouts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [savedWorkoutIds, setSavedWorkoutIds] = useState(getSavedWorkoutIds());

  const [
    getCategory,
    { loading: categoryLoading, data: data_category }
  ] = useLazyQuery(QUERY_CATEGORY);
  const [saveWorkout, { error }] = useMutation(SAVE_WORKOUT);
  const { loading: categoriesLoading, data: data_categories } = useQuery(
    QUERY_CATEGORIES
  );

  // console.log(data_categories);
  // console.log(data_category);

  // set up useEffect hook to save `savedWorkoutIds` list to localStorage on component unmount
  useEffect(() => {
    return () => saveWorkoutIds(savedWorkoutIds);
  });

  const handleSaveWorkout = async (name, category, instructions, image, id) => {
    const workoutData = { name, category, instructions, image };
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveWorkout({
        variables: { workoutData }
      });

      console.log(data);
      // if workout successfully saves to user's account, save workout id to state
      setSavedWorkoutIds([...savedWorkoutIds, id]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="text-light bg-dark pt-5 text-center">
        <Container>
          <h1>Welcome to Workout Customizer</h1>
          <h2>Select a category below</h2>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Workout Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {data_categories?.categories.map(category => (
                <Dropdown.Item
                  key={category._id}
                  value={category.name}
                  onClick={() =>
                    getCategory({ variables: { name: category.name } })
                  }
                >
                  {category.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </div>

      {/* Display the workouts from the selected category */}
      <div className="bg-dark pt-3 pb-3">
        <Container>
          <Row>
            {data_category?.category?.workouts.map(workout => (
              <Col key={workout._id} md="4">
                <Card border="dark">
                  {workout.image ? (
                    <Card.Img
                      src={workout.image}
                      alt={`The cover for ${workout.name}`}
                      variant="top"
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title className="text-center">
                      {workout.name}
                    </Card.Title>
                    <p className="small text-center">
                      {data_category.category.name}
                    </p>
                    <Card.Text>{workout.instructions}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedWorkoutIds?.some(
                          savedWorkoutId => savedWorkoutId === workout._id
                        )}
                        className="btn-block btn-info hovering"
                        onClick={() =>
                          handleSaveWorkout(
                            workout.name,
                            workout.category,
                            workout.instructions,
                            workout.image,
                            workout._id
                          )
                        }
                      >
                        {savedWorkoutIds?.some(
                          savedWorkoutId => savedWorkoutId === workout._id
                        )
                          ? "This workout has been saved!"
                          : "Save this Workout!"}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
