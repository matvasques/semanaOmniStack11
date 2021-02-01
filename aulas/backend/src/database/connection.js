const knex = require('knex');
const configuration = require('../../knexfile'); //importando o knexfile

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;


const connection = knex(config); //acessando o devlopment que esta no knexfile, que nos permite acessa o db.sqlite criado anteriormente


module.exports = connection;