import { gql } from "@apollo/client";

export const QUERY_ME = gql`
    query me($username: String!) {
        me(username: $username) {
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

export const QUERY_CATEGORIES = gql`
    query categories {
        categories {
            _id
            name
            workouts {
                _id
                name
                instructions
                category
                image
            }
        }
    }
`;

export const QUERY_CATEGORY = gql`
    query category($name: String!) {
        category(name: $name) {
            _id
            name
            workouts {
                _id
                name
                instructions
                category
                image
            }
        }
    }
`;
