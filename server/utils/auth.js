const jwt = require('jsonwebtoken');
// const {SECRET_KEY} = require('../uti')
const {AuthenticationError} = require('apollo-server-express');
require('dotenv').config();

const secret = process.env.SECRET_KEY;
const expiration = '2h';

// module.exports = (context) => {
//   const authHeader = context.req.headers.authorization;

//   if (authHeader){
//     const token= authHeader.split('Bearer ')[1];
//     if(token){
//       try{
//         const user = jwt.verify(token,secret);
//         return user;
//       } catch(err) {
//           throw new AuthenticationError('invalid/expired token');
//       }
//     }
//     throw new Error('Authentication token must be \'Bearer [token]');
//   }
//   throw new Error('Authentication header must be provided');
  
// }

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
      console.log(req.user);
    } catch {
      console.log('Invalid token');
    }

    return req;
  },

  signToken: function ({ email, _id, firstName, lastName, about, instrument, performerName }) {
    const payload = { email, _id, firstName, lastName, about, instrument, performerName };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  checkAuth: function (context) {
    const authHeader = context.req.headers.authorization;

  if (authHeader){
    const token= authHeader.split('Bearer ')[1];
    if(token){
      try{
        const user = jwt.verify(token,secret);
        return user;
      } catch(err) {
          throw new AuthenticationError('invalid/expired token');
      }
    }
    throw new Error('Authentication token must be \'Bearer [token]');
  }
  throw new Error('Authentication header must be provided');
  }
  
};
