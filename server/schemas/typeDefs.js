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
    phone: Int!
    email: String!
    about: String!
    enquiries: [Enquiry]
    events: [Event]
}

type Event {
    _id: ID!
    performer: [User]!
    instrument: [User]!
    location: String!
    website: String
    description: String!
    dateCreated: String!
    date: String!
}

type Enquiry {
    _id: ID!
    enquiryText: String!
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
    phone: Int!
    email: String!
    about: String!
}

input UpdateUserInput{
    firstName: String!
    lastName: String!
    performerName: String!
    password: String!
    instrument: String!
    phone: Int!
    email: String!
    about: String!
}

input EventInput{
    location: String!
    wesbite: String
    description: String!
    dateCreated: String!
    date: String!
}

type Query {
    users: [User]
    events: [Event]
    getEvent(eventId: ID!): Event

}

type Mutation {
    addUser(firstName: String!,
        lastName: String!,
        performerName: String!,
        password: String!,
        instrument: String!,
        phone: Int!,
        email: String!,
        about: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(input: UpdateUserInput): User
    addEvent(input: EventInput!): Event!
    deleteEvent(EventId: ID!): String!
}
`

module.exports = typeDefs;
