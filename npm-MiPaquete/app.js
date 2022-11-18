

//recorrer objeto
(()=>{
    const fileJson=require('./file.json');
  for (const key in fileJson) {
  console.log(key + fileJson[key])
  }
    
    



});

//convertir objeto a json
(()=>{
    let fileObject= {
        "titulo":"Aprendiendo node.js",
        "numVistas":20,
        "numLikes":30,
        "temas":["js","node.js"],
        "publico":true
        
        }

        let fileJson= JSON.stringify(fileObject);
        console.log(typeof fileJson);

});
//convertir json a objeto
(()=>{
    let fileJson= `
        {
        "titulo":"Aprendiendo node.js",
        "numVistas":20,
        "numLikes":30,
        "temas":["js","node.js"],
        "publico":true 
        }`
     let objeto= JSON.parse(fileJson);
     console.log( objeto.titulo); 



});

