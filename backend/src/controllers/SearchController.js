const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports={
  async index(request, response){
    //Buscar todos os devs em um raio de 10KM
    //Filtrar por tecnologias
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs:{
        //Filtro. Encontra devs que trabalham somente nas techs contidas em techsArray
        $in: techsArray,
      },
      location:{
        //Encontrar objetos perto de uma localizacao
        $near:{
          $geometry:{
            type:'Point',
            coordinates: [longitude, latitude],
          },
          //Maximo de distancia que eu quero retornar os objetos
          $maxDistance: 10000,
        },
      },
    });

    return response.json({devs});
  }
}