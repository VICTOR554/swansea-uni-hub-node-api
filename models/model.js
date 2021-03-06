const mongoose = require('mongoose');
const connectDB = require('../config/db');
require('dotenv').config({ path: '.env' })

//Connect to the database
connectDB();


    const db = mongoose.connection;

const Activity = db.model('Activity', require('./activity-schemas/activity.schema'), 'activities');
const Book = db.model('Book', require('./book-schemas/book.schema'), 'books');
const Booking = db.model('Booking', require('./booking-schemas/booking.schema'), 'bookings');
const Building = db.model('Building', require('./building-schemas/building.schema'), 'buildings');
const Campus = db.model('Campus', require('./campus-schemas/campus.schema'), 'campuses');
const Course = db.model('Course', require('./course-schemas/course.schema'), 'courses');
const Coursework = db.model('Coursework', require('./coursework-schemas/coursework.schema'), 'courseworks');
const Event = db.model('Event', require('./event-schemas/event.schema'), 'events');
const Finance = db.model('Finance', require('./finance-schemas/finance.schema'), 'finances');
const Lecturer = db.model('Lecturer', require('./lecturer-schemas/lecturer.schema'), 'lecturers');
const Location = db.model('Location', require('./location-schemas/location.schema'), 'locations');
const Module = db.model('Module', require('./module-schemas/module.schema'), 'modules');
const Note = db.model('Note', require('./note2-schemas/note.schema'), 'notes');
const Notification = db.model('Note', require('./notification-schemas/notification.schema'), 'notifications');
const Report = db.model('Report', require('./report-schemas/report.schema'), 'reports');
const Room = db.model('Room', require('./room-schemas/room.schema'), 'rooms');
const Session = db.model('Session', require('./session-schemas/session.schema'), 'sessions');
const Society = db.model('Society', require('./society-schemas/society.schema'), 'socities');
const Sport = db.model('Sport', require('./sport-schemas/sport.schema'), 'sports');
const Student = db.model('Student', require('./student-schemas/student.schema'), 'students');
const Task = db.model('Task', require('./task-schemas/task.schema'), 'tasks');
const Term = db.model('Term', require('./term-schemas/term.schema'), 'terms');
const Week = db.model('Week', require('./week-schemas/week.schema'), 'weeks');

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
  Notification,
  Report,
  Room,
  Session,
  Society,
  Sport,
  Student,
  Task,
  Term,
  Week,
};
