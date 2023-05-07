const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
const { signToken, checkAuth } = require('../utils/auth');
// const bcrypt = require('bcrypt');
const { GraphQLJSON } = require('graphql-type-json');

const resolvers = {
    JSON: GraphQLJSON,

    Query: {
        users: async () => {
            return await User.find({}).populate('events');
        },
        events: async () => {
            return await Event.find({});
        },
        getEvent: async (parent, {eventId}, context) => {
            return await Event.findOne({_id: eventId});
        },
        getUser: async (parent, {userId}, context) => {
            return await User.findOne({_id: userId}).populate('events');
        }
    },

    Mutation: {
        addUser: async (parent,
            {
                firstName, lastName, performerName, password, instrument, email, about
            }, context, info ) => {
            
            const user = await User.create({ firstName, lastName, performerName, password, instrument, email, about});
            
            const errors = {};

            if(email.trim() === ''){
                throw new AuthenticationError('Email field must not be empty')
            }


            if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                throw new AuthenticationError("Email must be a valid and unique email address")
            }

            if(!password.trim() === '') {
                throw new AuthenticationError("Password must be at least 7 characters")
            }
            
            const token = signToken(user);
            
            
            return {token, user, errors};
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
        createEvent: async (parent, {input}, context) => {
            const user = checkAuth(context);
            console.log(user);
            console.log(user.email);

            // if(context.user) {
                const event = await Event.create(input);
        
                await User.findOneAndUpdate(
                  { _id: { $in: input.users} }, 
                  { $addToSet: { events: event._id } },
                  { new: true },
                );
            
                return {event};
            //   }
            //   throw new AuthenticationError('Not logged in');
        },
        // createEvent: async (parent, {input}, context) => {
        //     const user = checkAuth(context);
        //     console.log(user);

        //     const newEvent = new Event({
        //         input,
        //         performer: user._id,
        //         instrument: user.instrument,
        //         dateCreated: new Date().toISOString()
        //     });

        //     const event = await newEvent.save();

        //     return event
        // }
        // createEvent: async (parent, {input}, context) => {
        //     const user = checkAuth(context);

        //     const newEvent = new Event({
        //         input, 
        //         performer: user._id,
        //         instrument: user.instrument,
        //     });
        //     const event = await newEvent.findOneAndUpdate();

        //     return event
        // }
        deleteEvent: async (parent, {eventId}, context) => {
            const user = checkAuth(context);

            try{
                const event = await Event.findById(eventId);
                if(user.email === event.email) {
                    await event.delete();
                    return 'Post Deleted Successfully'
                } else {
                    throw new AuthenticationError('Action not allowed');
                }
            } catch (err) {
                throw new Error(err);
            }
        },

    }
};

module.exports = resolvers;

