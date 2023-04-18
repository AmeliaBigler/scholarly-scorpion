const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
      try {
        const users = await User.find();
        const userObj = {
          users
        };
        return res.json(userObj);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    // Create a new user
    async createUser(req, res) {
        try {
          const user = await User.create(req.body);
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },
}