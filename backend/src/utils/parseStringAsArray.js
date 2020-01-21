module.exports = function parseStringAsArray(arrayAsString){
   //remove espaçamento antes/depois de uma string e identifica cada tecnologia através da virgula
   return arrayAsString.split(',').map(tech => tech.trim());
}