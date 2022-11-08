let saludar=(nombre)=>{
    return `Hola ${nombre}`;
}

let saludarHolaMundo=()=>{
    return "¡Hola, Mundo!";
}
/*
//ejecutar codigo js en node:
node app.js 
//exportar solo un modeulo:
module.exports.saludar=saludar;

//exportar modulos

*/
module.exports={
    saludar:saludar,
    saludarHolaMundo:saludarHolaMundo
};
