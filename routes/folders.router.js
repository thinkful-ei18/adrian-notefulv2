'use strict';

const express = require('express');
const router = express.Router();

const knex = require('../knex');

router.get('/folders', (req, res, next) => {
  knex.select('id', 'name')
    .from('folders')
    .then(results => {
      res.json(results);
    })
    .catch(next);
});

router.get('/folders/:id', (req, res, next) => {
  const folderId = req.params.id;

  knex.first('id', 'name').from('folders')
    .where('id', folderId)
    .then(folder => {
      if (folder) {
        res.json(folder);
      } else {
        next();
      }
    })
    .catch(err => next(err));
});



module.exports = router;