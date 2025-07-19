var getDB = require('../dbconn/getDB')

async function getStudentDAO() {
    const db = await getDB()
    var students = db.collection('students')
    var result = await students.find({}).toArray()
    return result;
}

async function saveStudentDAO(data) {
    var db = await getDB()
    var collection = db.collection('students')
    var result = await collection.insertOne(data)
    return result
}

function updateStudentDAO() {

}

function deleteStudentDAO() {

}

module.exports = {
    getStudentDAO,
    saveStudentDAO,
    updateStudentDAO,
    deleteStudentDAO
};