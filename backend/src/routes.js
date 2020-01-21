const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//Métodos HTTP: get, post, put, delete

//Tipos de parametros:
//Query Params: request.quey(Filtro, ordenaçao, paginacao ...)
//Route Params: request.params (Identificar um recurso na ateraçao ou remoçao)
//Body: request.body (Dados para criaçao ou alteraçao de um registro)
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;