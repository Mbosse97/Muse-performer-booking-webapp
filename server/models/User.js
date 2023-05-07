const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    performerName: {
        type: String,
        required: true,
    },
    instrument: {
        type: String,
        required: true,
        trim: true,
    },
    // phone: {
    //     type: Number,
    //     trim: true, 
    // },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid and unique email address']
    },
    about: {
        type: String, 
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    enquiries: {
        type: String
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
    },
    events: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Event',
        },
      ],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;

