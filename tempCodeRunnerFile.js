const express = require('express');
const { connectToDb, getDb } = require('./db');

const PORT = 3000;

const app = express();

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${err}`);
  }
});

app.get('/movies', (req, res) => {
  const movies = [];
  db.collection('movies')
    .find()
    .forEach((movie) => movies.push(movie));
  console.log(movies);
});
