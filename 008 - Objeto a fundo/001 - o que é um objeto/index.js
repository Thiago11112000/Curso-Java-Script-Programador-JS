let Tenis = {
    tipo: "Tênis de corrida",
    cardaco: "G",
    estoque: false,
    tamanho: {
     palmilha: 39,
     tenis: 40,
     caixa:{
        altura: 35,
        largura:40,
        profundidade: 10,
     },
    },
  marcaArraydeValores: ["Nike", "Adidas", "etc"],
marcaArrayObj:[
    {
    nome: "nike"
},
{
    nome: "adidas"
},
{
    nome: "puma"
}
],
getMarcaArrayValores: function(param){
    return this.marcaArrayObj[param]
},
getMarcaArrayObj: function(param){
     return this.marcaArrayObj[param].nome
}
} ;

console.log(Tenis)
console.log(Tenis.tipo)
console.log(Tenis.cardaco)
console.log(Tenis.tamanho)