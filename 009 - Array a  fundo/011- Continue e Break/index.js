
const myArrayObj =  [
  {
    nome: "Thiago",
    sobreNome: "Martins"
  },
  {
    nome: "José0",
    sobreNome: "Silva"
  },
  {
    nome: "Nay",
    sobreNome: "Silva"
  },
  {
    nome: "José 1",
    sobreNome: "Silva"
  },
  {
    nome: "Caio",
    sobreNome: "Jorge"
  },
]

for(let item of myArrayObj ){
  if(item.nome === "Thiago"){
 console.log(`${item.nome} está te esperando`)
 continue;
}  
if(item.nome === "José 1"){
  console.log(`${item.nome} está lhe esperando pra te dar uma surra`)
  break;
}
console.log(item)
}
