'use strict';

const express = require('express');
const router = express.Router();

const knex = require('../knex');

router.get('/notes', (req, res, next) => {
  const searchTerm = req.query.searchTerm ? req.query.searchTerm.toLowerCase() : null;

  knex.select('notes.id', 'title', 'content', 'folder_id', 'folders.name as folder_name')
    .from('notes')
    .leftJoin('folders', 'notes.folder_id', 'folders.id')
    // .where(function () {
    //   if (searchTerm) {
    //     this.where('title', 'like', `%${searchTerm}%`);
    //   }
    // })
    // .orWhere(function () {
    //   if (searchTerm) {
    //     this.orWhere('content', 'like', `%${searchTerm}%`);
    //   }
    // })
    .where(function () {
      if (req.query.folderId) {
        this.where('folder_id', req.query.folderId);
      }
    })
    .orderBy('notes.id')
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.error(err);
    });
});

router.get('/notes/:id', (req, res, next) => {
  const noteId = req.params.id;

  knex.first('notes.id', 'notes.title', 'notes.content', 'notes.created', 'folder_id', 'folders.name as folder_name').from('notes')
    .where('id', noteId)
    .then(item => {
      if (item) {
        res.json(item);
      } else {
        next();
      }
    })
    .catch(err => next(err));
});

module.exports = router;