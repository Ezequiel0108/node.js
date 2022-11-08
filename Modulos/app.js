/*
//incluir modulo
//con un ./ indicamos que esta en la misma carpeta
const saludar= require('./saludos.js');
console.log(saludar.saludar('alvaro'));
*/
//incluir unop o más métodos especificos de un modulo "desestructuración"
const {saludarHolaMundo,saludar}=require('./saludos');
console.log(saludarHolaMundo());
console.log(saludar('Ezequiel'));

