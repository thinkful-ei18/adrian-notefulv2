'use strict';

const knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'dev',
    database: 'noteful-app'
  },
});



knex.select(1).then(res => console.log(res));