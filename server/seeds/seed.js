const db = require('../config/connection');
const { User, Event} = require('../models');
const userSeeds = require('./userSeeds.json');
const eventSeeds = require('./eventSeeds.json');

db.once('open', async () => {
    await Event.deleteMany({});
    await User.deleteMany({});

    await User.insertMany(userSeeds);
    await Event.insertMany(eventSeeds);

  console.log('all done!');
  process.exit(0);
});
