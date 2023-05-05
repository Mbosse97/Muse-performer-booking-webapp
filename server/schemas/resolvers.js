const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
const { signToken } = require('../utils/auth');
// const bcrypt = require('bcrypt');
const { GraphQLJSON } = require('graphql-type-json');

const resolvers = {
    JSON: GraphQLJSON,

    Query: {
        users: async () => {
            return await User.find({});
        },
        events: async () => {
            return await Event.find({});
        },
        getEvent: async (parent, {eventId}, context) => {
            return await Event.findOne({_id: eventId});
        }
    },

    Mutation: {
        addUser: async (parent,
            {
                firstName, lastName, performerName, password, instrument, phone, email, about
            }, context, info ) => {
            
            const user = await User.create({ firstName, lastName, performerName, password, instrument, phone, email, about});
            const token = signToken(user);

            return {token, user};
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if(!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
              }
        
              const token = signToken(user);
        
              return { token, user };
        },
        updateUser: async (parent, { input }, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(input.userId, input, { new: true, runValidators: true, });
            }
            throw new AuthenticationError('Not logged in');
        },
        addEvent: async (parent, {input}, context) => {
            if(context.user) {
                const event = await Event.create(input);
        
                await User.findOneAndUpdate(
                  { _id: { $in: input.events} }, 
                  { $addToSet: { events: event._id } },
                  { new: true }
                );
            
                return event;
              }
              throw new AuthenticationError('Not logged in');
        },


    }
};

module.exports = resolvers;

