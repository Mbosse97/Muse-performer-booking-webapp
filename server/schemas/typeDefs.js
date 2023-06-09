 const { gql } = require('apollo-server-express');

const typeDefs = gql`
scalar JSON  

type User {
    _id: ID!
    firstName: String!
    lastName: String!
    performerName: String!
    password: String!
    instrument: String!
    email: String!
    about: String!
    events: [Event]
}

type Event {
    _id: ID!
    performer: String!
    instrument: String!
    location: String!
    website: String
    description: String!
    dateCreated: String!
    date: String
}

type Enquiry {
    _id: ID!
    enquiryText: String!
    performername: [User!]
}

type Auth {
    token: ID!
    user: User
}

input RegisterUser{
    firstName: String!
    lastName: String!
    performerName: String!
    password: String!
    instrument: String!
    email: String!
    about: String!
}

input UpdateUserInput{
    firstName: String!
    lastName: String!
    performerName: String!
    password: String!
    instrument: String!
    email: String!
    about: String!
}

input EventInput{
    location: String!
    website: String
    description: String!
    date: String
}

type Query {
    me: User
    users: [User]
    events: [Event]
    getEvent(eventId: ID!): Event 
    getUser(userId: ID!): [User]
}

type Mutation {
    addUser(firstName: String!,
        lastName: String!,
        performerName: String!,
        password: String!,
        instrument: String!,
        email: String!,
        about: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(input: UpdateUserInput): User
    createEvent(location: String!
        website: String
        description: String!
        date: String): Event!
    deleteEvent(eventId: ID!): String!
}
`

module.exports = typeDefs;
