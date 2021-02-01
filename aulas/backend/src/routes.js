const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate'); //lib para validações

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


//rota de login ***fazer depois
routes.post('/sessions', SessionController.create);

//rota para retornar os dados da ong cadastrada
routes.get('/ongs', OngController.index);

//rota para cadastrar ongs + validações
routes.post('/ongs', celebrate({
    //criando as validações necessarias para cadastrar uma ong
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })

}), OngController.create);

//rota dos incidentes/relções
routes.get('/incidents', IncidentController.index);

routes.post('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),

    })
}), IncidentController.delete);


//rota para exibir somente os casos de uma determinada ong
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),

    }).unknown(),
}), ProfileController.index);

module.exports = routes;