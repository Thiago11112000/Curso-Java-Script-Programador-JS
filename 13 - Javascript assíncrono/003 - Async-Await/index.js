const pedido = (pedido) =>{
    return new Promise((resolve, reject) =>{
       if(pedido === "pizza") {
       return   reject(`Não temos o seu pedido: [${pedido}] `)
       }
        setTimeout(() =>{
           resolve(`Chegou o seu pedido [${pedido}]`)
        }, 5000)
    })
   };

   const reservarPedido =  async () => {
    try {
     console.log(await pedido("Arroz"));
     console.log(await pedido("pizza"))
     console.log(await pedido("carninha"))
    } catch (error) {
        console.log(error);
    }
   };
   reservarPedido()