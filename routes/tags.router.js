
'use strict';

const express = require('express');

const router = express.Router();
const knex = require('../knex');
const { UNIQUE_VIOLATION } = require('pg-error-constants');

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
router.delete('/tags/:id', (req, res, next) => {
  const id = req.params.id;

  knex('tags').where('id', `${id}`)
    .del()
    .then(count => {
      if (count) {
        res.status(204).end();
      } else {
        next();
      }
    })
    .catch(err => next(err));
});

// UPDATE a tag



// POST a tag
router.post('/tags', (req, res, next) => {
  const { name } = req.body;
  /***** Never trust users. Validate input *****/
  if (!name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  const newItem = { name };

  knex.insert(newItem)
    .into('tags')
    .returning(['id', 'name'])
    .then(([result]) => {
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch(err => {
      if (err.code === UNIQUE_VIOLATION && err.constraint === 'tags_name_key') {
        err = new Error('Tags name is already taken');
        err.status = 409;
      }
      next(err);
    });
});


module.exports = router;
// Added require and app.use to server.js!