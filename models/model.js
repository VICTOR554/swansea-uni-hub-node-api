const mongoose = require('mongoose')

const Activity = mongoose.model('Activity',require('./activity-schemas/activity.schema'));
const Book = mongoose.model('Book',require('./book-schemas/book.schema'));
const Booking = mongoose.model('Booking',require('./booking-schemas/booking.schema'));
const Building = mongoose.model('Building',require('./building-schemas/building.schema'));
const Campus = mongoose.model('Campus',require('./campus-schemas/campus.schema'));
const Course = mongoose.model('Course',require('./course-schemas/course.schema'));
const Coursework = mongoose.model('Coursework',require('./coursework-schemas/coursework.schema'));
const Event = mongoose.model('Event',require('./event-schemas/event.schema'));
const Finance = mongoose.model('Finance',require('./finance-schemas/finance.schema'));
const Lecturer = mongoose.model('Lecturer',require('./lecturer-schemas/lecturer.schema'));
const Location = mongoose.model('Location',require('./location-schemas/location.schema'));
const Module =  mongoose.model('Module',require('./module-schemas/module.schema'));
const Note =  mongoose.model('Note',require('./note-schemas/note.schema'));
const Report = mongoose.model('Report',require('./report-schemas/report.schema'));
const Room = mongoose.model('Room',require('./room-schemas/room.schema'));
const Session = mongoose.model('Session',require('./session-schemas/session.schema'));
const Society = mongoose.model('Society',require('./society-schemas'));
const Sport = mongoose.model('Sport',require('./sport-schemas/sport.schema'));
const Student =  mongoose.model('Student', require('./student-schemas/student.schema'));
const Task = mongoose.model('Task',require('./task-schemas/task.schema'));
const Term = mongoose.model('Term',require('./term-schemas/term.schema'));
const Week = mongoose.model('Week',require('./week-schemas/week.schema'));





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