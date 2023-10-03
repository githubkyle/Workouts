const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedWorkouts: [Workout]
  }

  type Workout {
    _id: ID
    name: String!
    instructions: String
    category: String
    image: String
  }

  type Category {
    _id: ID
    name: String!
    workouts: [Workout]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me(username: String!): User
    category(name: String!): Category
    categories: [Category]
  }

  input WorkoutInput {
    name: String!
    instructions: String
    category: String
    image: String
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveWorkout(workoutData: WorkoutInput!): User
    deleteWorkout(workoutId: ID!): User
  }
`;

// we probably dont need input WorkoutInput 

module.exports = typeDefs;
