const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
// require('dotenv').config()


// Connect to Database
// const user = mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
const user = mongoose.createConnection(process.env.URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const Activity = user.model('Activity', require('./activity-schemas/activity.schema'), 'activities');
const Book = user.model('Book', require('./book-schemas/book.schema'), 'books');
const Booking = user.model('Booking', require('./booking-schemas/booking.schema'), 'booking');
const Building = user.model('Building', require('./building-schemas/building.schema'), 'buildings');
const Campus = user.model('Campus', require('./campus-schemas/campus.schema'), 'campuses');
const Course = user.model('Course', require('./course-schemas/course.schema'), 'courses');
const Coursework = user.model('Coursework', require('./coursework-schemas/coursework.schema'), 'courseworks');
const Event = user.model('Event', require('./event-schemas/event.schema'), 'events');
const Finance = user.model('Finance', require('./finance-schemas/finance.schema'), 'finances');
const Lecturer = user.model('Lecturer', require('./lecturer-schemas/lecturer.schema'), 'lecturers');
const Location = user.model('Location', require('./location-schemas/location.schema'), 'locations');
const Module = user.model('Module', require('./module-schemas/module.schema'), 'modules');
const Note = user.model('Note', require('./note-schemas/note.schema'), 'notes');
const Report = user.model('Report', require('./report-schemas/report.schema'));
const Room = user.model('Room', require('./room-schemas/room.schema'), 'rooms');
const Session = user.model('Session', require('./session-schemas/session.schema'), 'sessions');
const Society = user.model('Society', require('./society-schemas/society.schema'), 'socities');
const Sport = user.model('Sport', require('./sport-schemas/sport.schema'), 'sports');
const Student = user.model('Student', require('./student-schemas/student.schema'), 'students');
const Task = user.model('Task', require('./task-schemas/task.schema'), 'tasks');
const Term = user.model('Term', require('./term-schemas/term.schema'), 'terms');
const Week = user.model('Week', require('./week-schemas/week.schema'), 'weeks');

module.exports = {
  Activity,
  Book,
  Booking,
  Building,
  Campus,
  Course,
  Coursework,
  Event,
  Finance,
  Lecturer,
  Location,
  Module,
  Note,
  Report,
  Room,
  Session,
  Society,
  Sport,
  Student,
  Task,
  Term,
  Week
};
