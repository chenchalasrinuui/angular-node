var mongo = require('mongodb')
async function getDB() {
    var mongoClient = mongo.MongoClient;
    var server = await mongoClient.connect(process.env.DB_URL)
    var db = server.db('sms')
    return db;
}

module.exports = getDB