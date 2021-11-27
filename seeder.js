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
const students = JSON.parse(fs.readFileSync(`${__dirname}/data/students.json`, 'utf-8'));
const modules = JSON.parse(fs.readFileSync(`${__dirname}/data/modules.json`, 'utf-8'));
const courses = JSON.parse(fs.readFileSync(`${__dirname}/data/courses.json`, 'utf-8'));


//Import into DB
const importData = async () => {
  try {
    await Model.Student.create(students);
    await Model.Module.create(modules);
    await Model.Course.create(courses);

    console.log('Data Imported....'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

//Delete into DB
const deleteData = async () => {
  try {
    await Model.Student.deleteMany();
    await Model.Module.deleteMany();
    await Model.Course.deleteMany();

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
