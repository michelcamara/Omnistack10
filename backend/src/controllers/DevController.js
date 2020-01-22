const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  //Listar os devs
  async index(request, response){
    const devs = await Dev.find();
    return response.json(devs);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;
    //Encontrar um dev passeado no github_username, no banco de dados.
    let dev = await Dev.findOne({ github_username });
    //Se esse dev nao existir;
    if (!dev) {
      //Vai criar o novo dev

      //vai converter as techs que estao separadas por virgula, em um array;
      const techsArray = parseStringAsArray(techs);

      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

      //Se o name nao existir, por padrao ele sera o valor de login
      const { name = login, avatar_url, bio } = apiResponse.data;

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }
    return response.json(dev);
  },

  //Desfio - criar o update e o destroy.
};