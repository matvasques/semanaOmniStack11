const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const {errors} = require('celebrate');

const app = express();

app.use(cors());
//para que todas as requisições sejam recebidas como json
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;
