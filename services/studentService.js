var { getStudentDAO, saveStudentDAO } = require('../dao/studentDAO');

async function getStdents(req) {
    var result = await getStudentDAO();
    // can do some operations on result
    return result;
}

async function saveStudent(req) {
    const data = req.body.data
    // do the data operations
    const result = await saveStudentDAO(data)
    return result
}

function updateStudent() {

}

function deleteStudent() {

}

module.exports = {
    getStdents,
    saveStudent,
    updateStudent,
    deleteStudent
};