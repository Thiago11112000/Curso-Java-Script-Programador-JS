const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj =  [
  {
    nome: "Thiago",
    sobreNome: "Martins"
  },
  {
    nome: "Jóse",
    sobreNome: "Silva"
  },
  {
    nome: "Caio",
    sobreNome: "Jorge"
  },
]
// for ([inicialização]; [condição]; [expressão final])

// for (let i = 0; i < myArray.length; i++){
//   console.log(myArray[i])
// }
// for (let i = 0; i < myArrayObj.length; i++){
//      console.log(myArrayObj[i].nome)
// }

//for of 

// for(let item of myArray ){
//   console.log(item)
// }

//for in

const obj  =  {nome: "Thiago",  sobreNome: "Silva"}
   for(let item in obj){
    console.log(item)
   }


