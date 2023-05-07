import { gql } from '@apollo/client';

export const GET_USERS = gql `
query Query {
    users {
      _id
      firstName
      lastName
      performerName
      password
      instrument
      email
      about
    }
  }
`

export const GET_EVENTS = gql `
query Query {
    events {
      _id
      performer {
        performerName _id 
      }
      instrument {
        instrument
      }
      location
      website
      description
      dateCreated
      date
    }
}
`



