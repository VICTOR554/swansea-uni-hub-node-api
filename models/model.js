const mongoose = require('mongoose')

const Student =  mongoose.model('Student', require('./student-schemas/student.schema'));
const Module =  mongoose.model('Module',require('./module-schemas/module.schema'));
const Note =  mongoose.model('Note',require('./note-schemas/note.schema'));
const Task = mongoose.model('Task',require('./task-schemas/task.schema'));
const Activity = mongoose.model('Activity',require('./activity-schemas/activity.schema'));
const Report = mongoose.model('Report',require('./report-schemas/report.schema'));
const Lecturer = mongoose.model('Lecturer',require('./lecturer-schemas/lecturer.schema'));
const Term = mongoose.model('Term',require('./term-schemas/term.schema'));
const Session = mongoose.model('Session',require('./session-schemas/session.schema'));
const Week = mongoose.model('Week',require('./week-schemas/week.schema'));
const Course = mongoose.model('Course',require('./course-schemas/course.schema'));
const Coursework = mongoose.model('Coursework',require('./coursework-schemas/coursework.schema'));
const Finance = mongoose.model('Finance',require('./finance-schemas/finance.schema'));
const Location = mongoose.model('Location',require('./location-schemas/location.schema'));


module.exports = {
    Student,
    Module,
    Note,
    Task,
    Activity,
    Report,
    Lecturer,
    Term,
    Session,
    Week,
    Course,
    Location,
    Coursework,
    Finance
}