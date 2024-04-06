// const StringArray = ["A","C","D","W", "L","B"]


// console.log(StringArray.sort())
// console.log(StringArray.reverse())

// const numberArray = [10,20,30,40,50,1000,1,55,15];
// console.log(numberArray.sort((a,b ) =>  a-b))
// console.log(numberArray.sort((a,b ) =>  b-a))

// console.log(numberArray.sort((a,b ) =>  a-b).reverse())



const objArray = [
    {
      nome: "Dener Troquatte",
    },
    {
      nome: "Nay Troquatte",
    },
    {
      nome: "José Troquatte",
    },
    {
      nome: "Isabel Troquatte",
    },
    {
      nome: "Marcio Troquatte",
    },
    {
      nome: "Valentina Troquatte",
    },
  ];

  console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome)))
