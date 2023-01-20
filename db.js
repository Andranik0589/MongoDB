const { MongoClient } = require('mongodb');

const URL =
  'mongodb+srv://admin:wwwwww@cluster0.uhcjino.mongodb.net/moviebox?retryWrites=true&w=majority';
let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(URL)
      .then((client) => {
        console.log('Connected to MongoDB');
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
