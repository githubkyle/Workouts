import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_WORKOUT = gql`
  mutation saveWorkout($workoutData: WorkoutInput!) {
    saveWorkout(workoutData: $workoutData) {
      _id
      username
      email
      savedWorkouts {
        _id
        name
        instructions
        category
        image
      }
    }
  }
`;

export const DELETE_WORKOUT = gql`
  mutation deleteWorkout($workoutId: ID!) {
    deleteWorkout(workoutId: $workoutId) {
      _id
    }
  }
`;
