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

router.put('/folders/:id', (req, res, next) => {
  const folderId = req.params.id;
  /***** Never trust users - validate input *****/
  const updateObj = {};
  const updateableFields = ['name'];

  updateableFields.forEach(field => {
    if (field in req.body) {
      updateObj[field] = req.body[field];
    }
  });

  /***** Never trust users - validate input *****/
  if (!updateObj.name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  knex('folders').where('id', `${folderId}`)
    .update(updateObj)
    .returning((['id', 'name']))
    .then(([folder]) => {
      if (folder) {
        res.json(folder);
      } else {
        next();
      }
    })
    .catch(err => next(err));
});

router.post('/folders', (req, res, next) => {
  const { name } = req.body;

  const newFolder = { name };
  /***** Never trust users - validate input *****/
  if (!newFolder.name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  knex('folders')
    .insert(newFolder)
    .returning(['id', 'name'])
    .then(([result]) => res.location(`${req.originalUrl}${result.id}`).status(201).json(result))
    .catch(err => next(err));
});

router.delete('/folders/:id', (req, res, next) => {
  const id = req.params.id;

  knex('folders').where('id', `${id}`)
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


module.exports = router;