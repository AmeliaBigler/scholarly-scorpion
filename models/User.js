const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
        type: String,
        unique: true,
        //   match valid email address using mongoose validation
        validate: {
            validator: function(v) {
            return /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
        required: [true, 'User email required']
    },
    thoughts: [],
    friends: [],
  },
  {
    toJSON: {
        // TODO
    },
  }
);

const User = model('user', userSchema);

module.exports = User;