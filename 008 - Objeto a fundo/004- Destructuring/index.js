const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas:  [
        {nome: "Nike"},   {nome:"Adidas"} ],
        secret: 123456,
        m: 5,
        link:  {a: "a é = a", b: {c: "C"}}
    };
       
    const
     {link:{b:{c}},
} = Tenis
    console.log(c)


    // const {tamanho,estoque,marcas = "Não possui marcas"} = Tenis;
    
    //     console.log(tamanho,estoque,marcas)

//     const {secret: randomNumber, m: avaliacoes} = Tenis;
// //    console.log(secret)
//     console.log(randomNumber)
//     console.log(avaliacoes)


