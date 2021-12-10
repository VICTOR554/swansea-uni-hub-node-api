const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

//Load config vars
dotenv.config({ path: './config/config.env' });

//Load models
const Model = require('./models/model');

// Connect to Database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//read JSON files
const activities = JSON.parse(fs.readFileSync(`${__dirname}/data/activities.json`, 'utf-8'));
const books = JSON.parse(fs.readFileSync(`${__dirname}/data/books.json`, 'utf-8'));
const buildings = JSON.parse(fs.readFileSync(`${__dirname}/data/buildings.json`, 'utf-8'));
const campus = JSON.parse(fs.readFileSync(`${__dirname}/data/campus.json`, 'utf-8'));
const courses = JSON.parse(fs.readFileSync(`${__dirname}/data/courses.json`, 'utf-8'));
const coursework = JSON.parse(fs.readFileSync(`${__dirname}/data/courseworks.json`, 'utf-8'));
const events = JSON.parse(fs.readFileSync(`${__dirname}/data/events.json`, 'utf-8'));
const finances = JSON.parse(fs.readFileSync(`${__dirname}/data/finances.json`, 'utf-8'));
const lecturers = JSON.parse(fs.readFileSync(`${__dirname}/data/lecturers.json`, 'utf-8'));
const locations = JSON.parse(fs.readFileSync(`${__dirname}/data/locations.json`, 'utf-8'));
const modules = JSON.parse(fs.readFileSync(`${__dirname}/data/modules.json`, 'utf-8'));
const rooms = JSON.parse(fs.readFileSync(`${__dirname}/data/rooms.json`, 'utf-8'));
const session = JSON.parse(fs.readFileSync(`${__dirname}/data/session.json`, 'utf-8'));
const societies = JSON.parse(fs.readFileSync(`${__dirname}/data/societies.json`, 'utf-8'));
const sports = JSON.parse(fs.readFileSync(`${__dirname}/data/sports.json`, 'utf-8'));
const students = JSON.parse(fs.readFileSync(`${__dirname}/data/students.json`, 'utf-8'));
const tasks = JSON.parse(fs.readFileSync(`${__dirname}/data/tasks.json`, 'utf-8'));
const terms = JSON.parse(fs.readFileSync(`${__dirname}/data/terms.json`, 'utf-8'));


//Import into DB
const importData = async () => {
  try {
    await Model.Activity.create(activities);
    await Model.Book.create(books);
    await Model.Building.create(buildings);
    await Model.Campus.create(campus);
    await Model.Course.create(courses);
    await Model.Coursework.create(coursework);
    await Model.Event.create(events);
    await Model.Finance.create(finances);
    await Model.Lecturer.create(lecturers);
    await Model.Location.create(locations);
    await Model.Module.create(modules);
    await Model.Room.create(rooms);
    await Model.Session.create(session);
    await Model.Society.create(societies);
    await Model.Sport.create(sports);
    await Model.Student.create(students);
    await Model.Task.create(tasks);
    await Model.Term.create(terms);

    console.log('Data Imported....'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

//Delete into DB
const deleteData = async () => {
  try {
    await Model.Activity.deleteMany();
    await Model.Book.deleteMany();
    await Model.Building.deleteMany();
    await Model.Campus.deleteMany();
    await Model.Course.deleteMany();
    await Model.Coursework.deleteMany();
    await Model.Event.deleteMany();
    await Model.Finance.deleteMany();
    await Model.Lecturer.deleteMany();
    await Model.Location.deleteMany();
    await Model.Module.deleteMany();
    await Model.Room.deleteMany();
    await Model.Session.deleteMany();
    await Model.Society.deleteMany();
    await Model.Sport.deleteMany();
    await Model.Student.deleteMany();
    await Model.Task.deleteMany();
    await Model.Term.deleteMany();

    console.log('Data Destroyed....'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
