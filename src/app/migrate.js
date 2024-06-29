const mongoose = require('mongoose');
const Event = require('./models/Event.ts');

mongoose.connect('mongodb://localhost:27017/jdanseasso', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const updateEvents = async () => {
  const events = await Event.find({});

  for (const event of events) {
    if (event.time) {
      const [startTime, endTime] = event.time.split('-');
      event.startTime = startTime.trim();
      event.endTime = endTime.trim();
      delete event.time;
      await event.save();
    }
  }
  console.log('Migration terminée');
  mongoose.connection.close();
};

updateEvents().catch(err => {
  console.error(err);
  mongoose.connection.close();
});
