
const bugNum= () =>{
 try {
    const  number = "123";
    if(number === 123){
    }
    throw new Error ("Deu Ruim");
}
catch (error) {
   // throw error; 
//    return error; Continua executando 
}
 }
console.log(bugNum())
console.log("Continua executando")