//events retorna una clase que se llama EventEmitter
const EventEmitter=require('events');

const emitterProducts=new EventEmitter();

emitterProducts.on('compra',(total)=>{
    //cuando ocurra el evento compra harás esto
    console.log('Se realizó una compra por '+total);
})

emitterProducts.emit('compra',200);






