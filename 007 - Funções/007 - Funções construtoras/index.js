// function Name (nome){
//     this.nome = nome
// }

//     const thiago  = new Name("Thiago") 
//     const joao = new Name("jOÃO")
//     const caio = new Name("Caio Jorge")
// console.log(thiago.nome)
// console.log(joao.nome)
// console.log(caio.nome)


// function  Calculadora(num1,num2){
//     this.soma = () => {
//      return  `${num1 + num2}`;
//     }
// this.subtracao = ()=> {
//     return  `${num1 - num2}`;

// }
// }

// const calculadora = new  Calculadora(1,2);
// console.log(calculadora.soma());
// console.log(calculadora.subtracao());

function  Calculadora(){
    this.soma = (num1,num2) => {
     return  `${num1 + num2}`;
    }
this.subtracao = (num1,num2)=> {
    return  `${num1 - num2}`;

}
}


const calculadora = new  Calculadora();
console.log(calculadora.soma(1,5));
console.log(calculadora.subtracao(5,1));














