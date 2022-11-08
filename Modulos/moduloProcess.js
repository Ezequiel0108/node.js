

//console.log(process.argv);
/*cada valor ingresado en la terminal se le denomida un indice poor ejemplo cuando ponemos
(pero node te da la dirección de donde esta "node.exe" y lo mismo con el archivo)
node moduloProcess.js este se convierte en un array= ['node','moduloProcesss'] si agregas 
mas datos como:  node moduloProcess.js 1 2 3 entonces array=['node','moduloProcesss','1','2','3']*/


//este codigo recorre todos los datos ingresados en la terminal
for (i=2; i<process.argv.length;i++){
    console.log(process.argv[i]);
}