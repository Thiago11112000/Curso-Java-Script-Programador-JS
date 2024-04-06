/*
O que é uma função?
É um conjunto de instruções que executa uma tarefa ou calcula um valor.
*/

// 1 - Functions declaration

function isValidDeclaration(){
const soma = 1+2;
if(soma === 3){
    return true;
}
  return false

}
// 2 - Functions expression
 const  isValidExpression = function(){
 return false;
}
// 3 - Arrow Functions
const isValidArrow = ()  =>  2*2;
console.log(isValidArrow())

const isValidArrow2 = () =>{
    const multiplicacao = 2*2
    return multiplicacao
}
 console.log(isValidArrow2())
// console.log(isValid())





