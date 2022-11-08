/*let mostrarTema=(tema)=>{
    console.log(`Estoy aprendiendo ${tema}`)
}
*/

/*los valores que recibe setTimeout son:
setTimeout(NameFunction,TimeOfWaiting,ArgumentThatNeedFunction)
*/
(()=>{
    setTimeout((tema,tema2)=>{
        console.log(`Estoy aprendiendo ${tema} y también ${tema2}`)
        },2000,'node.js','angular')
        

});

/*se ejecuta inmediatamente despues de codigo sincrono, los valores que recibe setImmediate son:
setTimeout(NameFunction,ArgumentThatNeedFunction)
*/
(()=>{
    console.log('se escribió antes de setIanmmediate');
    setImmediate((tema)=>{
        console.log(`Estoy aprendiendo ${tema}`)
        },'node.js')

    console.log('se escribió despues de setIanmmediate');
});

/*
se va a ejecutar la función cada cierto invervalo de tiempo
setInterval(function,intervaloTime,arg1,arg2)

*/
(()=>{
    setInterval((tema)=>{
console.log(`Estoy aprendiendo ${tema}`);
    },1000,'node.js')
})();
