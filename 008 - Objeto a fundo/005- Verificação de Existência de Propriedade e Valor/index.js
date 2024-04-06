const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    secret: 123456,
    n: 5,
    link: { a: "a é = a", b: { c: "c é = c" } },
};

// hasOwnProperty | propertyName in Tenis

//console.log(Tenis.hasOwnProperty("tamanho"))


// if(Tenis.hasOwnProperty("tamanho")){
// console.log("Existe tênis")
// }else{
//     console.log("Não existe tênis")
// }

console.log(Tenis.hasOwnProperty("tamanho"))
console.log("tamanho" in Tenis);