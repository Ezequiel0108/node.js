/*todos los metodos se ejecutan de manera asincrona es decir se demoran un tiempo al ejecutarse, y continua normal leyendose
codigo. Puedes convertirlos a asincronas dejando la palabra Sync al final:*/
const fs= require('fs');

/*leer archivo aqui asignare que el leer sea de manera sincrona, osea que se ejecute dependiendo en que posicion esta
como si escribieramos codigo normal, sigue el flujo del programa*/

(()=>{

    console.log('antes de ejecutar el leer posicion1');
    //al ser sincrono, si sucede un fallo automanticamente detiene el programa por lo que no necesitamos validar el error
    let readFile= fs.readFileSync('index.html','utf-8');
    console.log(readFile+'Este deberia ir en la posicion 2')
    

//esto deberia ejecutarse de manera normal, siguiendo el flujo del programa
console.log('despues de ejecutar el codigo posicion 3');

})();


//Editar nombre de archivo
(()=>{
    fs.rename('index.html','NombreEditado.html',(error)=>{
        if(error){
            //Este para la ejecución del codigo, si quisieras que siga, puedes imprimir el error con console.log
            throw error;
        }
         //si existe un error pues no llegará a ejecutar el codigo de aqui en adelante
        console.log('Nombre cambiado exitosamente')
    })

});
//si no existe elarchivo, lo crea
//Agregar contenido al final del archivo es decir al final del ultimo caracter
(()=>{
   fs.appendFile('index.html','<p>Agregado</p>',(error)=>{
    if(error){
        throw error;
    }

    console.log('Archivo actualizado')
   }) 

});
//si no existe elarchivo, lo crea
//Remplazar todo el contenido de archivo 
(()=>{

    fs.writeFile('index.html','Contenido nuevo ',(error)=>{
        if(error){
            throw error;
        }
        console.log('contenido remplazado')
    })

});

//Eliminar archivo 
(()=>{
    fs.unlink('index.html',(error)=>{
        if(error){
            throw error;
        }
        console.log('Has eliminado satisfactoriamente tu archivo')
    })
});