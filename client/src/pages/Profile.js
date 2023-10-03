import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Auth from "../utils/auth";
import {
  removeWorkoutId,
  saveWorkoutIds,
  getSavedWorkoutIds
} from "../utils/localStorage";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { DELETE_WORKOUT } from "../utils/mutations";

const Profile = () => {
  const userData = Auth.getProfile().data;
  const me = userData.username;
  // console.log(me);
  // console.log(userData);
  const { loading: loadingData, data: dataMe } = useQuery(QUERY_ME, {
    variables: { username: me }
  });
  // console.log("dataMe", dataMe);
  // console.log("email", dataMe.me.email);
  // console.log("savedWorkouts", dataMe.me.savedWorkouts);

  const [deleteWorkout, { error }] = useMutation(DELETE_WORKOUT);
  const [savedWorkoutIds, setSavedWorkoutIds] = useState(getSavedWorkoutIds());
  // create function that accepts the book's mongo _id value as param and deletes the workout from the database
  const handleDeleteWorkout = async Id => {
    const workoutId = { Id };
    console.log("workoutId", workoutId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await deleteWorkout({
        variables: { workoutId }
      });

      // upon success, remove workout's id from localStorage
      removeWorkoutId(workoutId);
      // Update the state to reflect the deleted workout ID
      setSavedWorkoutIds(savedWorkoutIds.filter(id => id !== workoutId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="text-light bg-dark pt-5">
        <Container className="text-center">
          <h2>Welcome, {me}!</h2>
          <h3>Here's a list of your saved workouts:</h3>
        </Container>
      </div>

      {/* Display the saved workouts */}
      <div className="bg-dark">
        <Container>
          <h2 className="pt-5">
            {dataMe?.me.savedWorkouts.length
              ? `Viewing ${dataMe?.me.savedWorkouts.length} saved ${
                  dataMe?.me.savedWorkouts.length === 1 ? "workout" : "workouts"
                }:`
              : "You have no saved workouts!"}
          </h2>
          <Row>
            {dataMe?.me.savedWorkouts?.map(workout => {
              return (
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
                      <p className="small"> {workout.category}</p>
                      <Card.Text>{workout.instructions}</Card.Text>
                      <Button
                        className="btn-block btn-danger"
                        onClick={() => handleDeleteWorkout(workout._id)}
                      >
                        {" "}
                        Delete this Workout!{" "}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Profile;
