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
      performer
      instrument
      location
      website
      description
      dateCreated
      date
    }
}
`

export const GET_ME = gql `
query Query {
  me {
    _id
    firstName
    performerName
    password
    instrument
    email
    about
    lastName
    events {
      _id
      performer
      instrument
      location
      website
      description
      dateCreated
      date
    }

  }
}
`



