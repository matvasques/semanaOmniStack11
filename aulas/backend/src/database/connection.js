const knex = require('knex');
const configuration = require('../../knexfile'); //importando o knexfile

const connection = knex(configuration.development); //acessando o devlopment que esta no knexfile, que nos permite acessa o db.sqlite criado anteriormente
module.exports = connection;