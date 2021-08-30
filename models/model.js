const Student = user.model('Student', require('./student-schemas/student.schema'), 'students')


module.exports = {
    Student,
}