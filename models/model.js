const mongoose = require('mongoose')
const dotenv = require('dotenv');

// Connect to Database
const user = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const Activity = mongoose.user('Activity', require('./activity-schemas/activity.schema'), 'activities');
const Book = mongoose.user('Book', require('./book-schemas/book.schema'), 'books');
const Booking = mongoose.user('Booking', require('./booking-schemas/booking.schema'), 'booking');
const Building = mongoose.user('Building', require('./building-schemas/building.schema'), 'buildings');
const Campus = mongoose.user('Campus', require('./campus-schemas/campus.schema'), 'campuses');
const Course = mongoose.user('Course', require('./course-schemas/course.schema'), 'courses');
const Coursework = mongoose.user('Coursework', require('./coursework-schemas/coursework.schema'), 'courseworks');
const Event = mongoose.user('Event', require('./event-schemas/event.schema'), 'events');
const Finance = mongoose.user('Finance', require('./finance-schemas/finance.schema'), 'finances');
const Lecturer = mongoose.user('Lecturer', require('./lecturer-schemas/lecturer.schema'), 'lecturers');
const Location = mongoose.user('Location', require('./location-schemas/location.schema'), 'locations');
const Module =  mongoose.user('Module', require('./module-schemas/module.schema'), 'modules');
const Note =  mongoose.user('Note', require('./note-schemas/note.schema'), 'notes');
const Report = mongoose.user('Report', require('./report-schemas/report.schema'));
const Room = mongoose.user('Room', require('./room-schemas/room.schema'), 'rooms');
const Session = mongoose.user('Session', require('./session-schemas/session.schema'), 'sessions');
const Society = mongoose.user('Society', require('./society-schemas/society.schema'), 'socities');
const Sport = mongoose.user('Sport', require('./sport-schemas/sport.schema'), 'sports');
const Student =  mongoose.user('Student', require('./student-schemas/student.schema'), 'students');
const Task = mongoose.user('Task', require('./task-schemas/task.schema'), 'tasks');
const Term = mongoose.user('Term', require('./term-schemas/term.schema'), 'terms');
const Week = mongoose.user('Week', require('./week-schemas/week.schema'), 'weeks');





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
    Week,
}