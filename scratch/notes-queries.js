'use strict';

const knex = require('../knex');

const express = require('express');
const router = express.Router();


// knex.select(1).then(res => console.log(res));

// GET ALL NOTES AND CHECK THE SEARCHBOX
// const { searchTerm } = req.query;

// if (searchTerm) {
//   // return the list with the search term(s)
//   knex.select('title', 'content')
//     .from('notes')
//     .where(`${searchTerm}`)
//     .then(results => console.log(results));
// } else {
//   // return the entire list
//   knex.select('title', 'content').from('notes')
//     .then(results => console.log(results));
// }

// GET NOTE BY ID
// const noteId = req.params.id;
// const noteId = 1003;

// knex.select('title', 'content').from('notes')
//   .where('id', `${noteId}`)
//   .then(results => console.log(results));

// UPDATE A NOTE
// const noteId = req.params.id;
// const noteId = 1002;
// const updateObj = {title: 'don\'t blame cats', content: 'cats are great!'};
// knex('notes').where('id', `${noteId}`)
//   .update(updateObj)
//   .then(results => console.log(results));

// const { title, content } = req.body;
// const newItem = { title, content };
// const newItem = {title: 'Cats are cool', content: 'Ice cold!' };
// knex('notes')
//   .insert(newItem)
//   .then(results => console.log(results));


// DELETE A NOTE
// const noteId = req.params.id;
// const noteId = 1010;
// knex('notes').where('id', `${noteId}`)
//   .del()
//   .then(results => console.log(results));




// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});