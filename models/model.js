const Student =  require('./student-schemas/student.schema');
const Module =  require('./module-schemas/module.schema');
const Note =  require('./note-schemas/note.schema');
const Task = require('./task-schemas/task.schema');
const Activity = require('./activity-schemas/activity.schema');
const Report = require('./report-schemas/report.schema');
const Lecturer = require('./lecturer-schemas/lecturer.schema');
const Term = require('./term-schemas/term.schema');
const Session = require('./session-schemas/session.schema');
const Week = require('./week-schemas/week.schema');
const Course = require('./course-schemas/course.schema');
const Location = require('./location-schemas/location.schema');


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
    Location

}