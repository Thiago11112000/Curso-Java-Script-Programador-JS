// function nomeFunc(){
//     return "Thiago Martins"
// }

// console.log(nomeFunc())

// const nomeFunc2 = (()=> "Thiago" )
// console.log(nomeFunc2())

// const nomeFunc3 = () =>{
//     return "Thiag"
// }
// console.log(nomeFunc3())

// const nomeFunarrowParams = (param )=> param

// console.log(nomeFunarrowParams(teste))


const lanches = {

    cardapio: [
        {nome: "x-salada",  preco:  "R$ 25"},
        {nome: "x-bolovo", preco: "R$ 30"}
    ],
    meuPedidoFunc: function(select){
      return console.log(this.cardapio[select])

    },
    meuPedidoFuncTimeOut: function(){
        setTimeout(function() {
          console.log(this.cardapio)
          console.log(this);
        }.bind(this),
         1000) ;
    },
    meuPedidoArrowFunc: (select) =>{
    this.cardapio = [
        {nome: "x-salada",  preco:  "R$ 25"},
        {nome: "x-bolovo", preco: "R$ 30"},
    ]
       return console.log(this.cardapio[select])
    },
} ;
lanches.meuPedidoFunc(0)
lanches.meuPedidoArrowFunc(1)
lanches.meuPedidoFuncTimeOut()

