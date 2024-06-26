
// This file will handle all our User Queries

import { gql } from '@apollo/client';

export const GET_USERS = gql`
query GetUsers {
    users {
        id
        username
        email
    }
}
`;

export const GET_USER = gql`
query GetUser($id: ID!) {
    user(id: $id) {
        id
        username
        email
        projects {
            id
            title
        }
    }
}
`;

export const GET_ME = gql`
query GetMe {
    me {
      id
      username
      email
      currentProjects {
        id
        title
        description
        techSelection {
          category
          technologies
        }
        comments
        dateStamp
      }
    }
  }
`;