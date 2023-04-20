const connection = require('../config/connection');
const { Thought, User } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts and users
  await Thought.deleteMany({});
  await User.deleteMany({});

  // Create arrays to hold the users and thoughts
  const users = [
    {
        username: 'useroo',
        email: 'email@email.com'
    },
    {
        username: 'stellar',
        email: 'emailmail@email.com'
    },
    {
        username: 'helloku',
        email: 'helloku@email.com'
    },
    {
        username: 'meme',
        email: 'memeemail@email.com'
    },
  ];
//   const thoughts = [];

  // Add users and thoughts to their collections and await the results
  await User.collection.insertMany(users);
//   await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});