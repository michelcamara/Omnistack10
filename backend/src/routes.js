const {Router} = require('express');
const axios = require('axios');

const routes = Router();

//Métodos HTTP: get, post, put, delete

//Tipos de parametros:
//Query Params: request.quey(Filtro, ordenaçao, paginacao ...)
//Route Params: request.params (Identificar um recurso na ateraçao ou remoçao)
//Body: request.body (Dados para criaçao ou alteraçao de um registro)

routes.post('/devs', async(request, response) => {
  const { github_username } = request.body;
  const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
  
  //Se o name nao existir, por padrao ele sera o valor de login
  const { name = login, avatar_url, bio } = apiResponse.data;

  console.log(name, avatar_url, bio, github_username);

  return response.json({ message: 'Hello world' });
});

module.exports = routes;