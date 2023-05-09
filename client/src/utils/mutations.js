import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`

export const ADD_USER = gql ` 
mutation Mutation ($firstName: String!, $lastName: String!, $performerName: String!, $password: String!, $instrument: String!, $email: String!, $about: String!) {
    addUser(firstName: $firstName, lastName: $lastName, performerName: $performerName, password: $password, instrument: $instrument, email: $email, about: $about) {
      token
      user {
        _id
        email
      }
    }
  }
`

export const CREATE_EVENT = gql `
mutation Mutation($location: String!, $description: String!, $website: String, $date: String) {
  createEvent(location: $location, description: $description, website: $website, date: $date){
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

