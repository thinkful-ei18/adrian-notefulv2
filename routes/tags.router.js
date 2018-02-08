
'use strict';

const express = require('express');

const router = express.Router();
const knex = require('../knex');

// GET all tags
router.get('/tags', (req, res, next) => {
  knex.select('id', 'name')
    .from('tags')
    .then(results => {
      res.json(results);
    })
    .catch(next);
});

//GET by tag id
router.get('/tags/:id', (req, res, next) => {
  const tagsID = req.params.id;

  knex.first('id', 'name').from('tags')
    .where('id', tagsID)
    .then(tag => {
      if (tag) {
        res.json(tag);
      } else {
        next();
      }
    })
    .catch(err => next(err));
});

// Delete a tag name

// Post a tag

// Update tag name




module.exports = router;
// Added require and app.use to server.js!