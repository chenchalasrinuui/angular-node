var express = require('express')
var router = express.Router();
var { getStdents, saveStudent } = require('../services/studentService')
router.get('/get-student', async function (req, res, next) {
    try {
        var result = await getStdents(req);
        res.send(result)
    } catch (error) {
        res.send(error)
    }

})

router.post('/save-student', async function (req, res, next) {
    try {
        var result = await saveStudent(req)
        res.send(result)
    } catch (ex) {
        res.send(ex)
    }

})

module.exports = router;