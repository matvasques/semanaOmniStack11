const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


//rota de login
routes.post('/sessions', SessionController.create);

//rota para retornar os dados da ong cadastrada
routes.get('/ongs', OngController.index);

//rota para cadastrar ongs
routes.post('/ongs', OngController.create);

//rota dos incidentes/relções
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//rota para exibir somente os casos de uma determinada ong
routes.get('/profile', ProfileController.index);

module.exports = routes;