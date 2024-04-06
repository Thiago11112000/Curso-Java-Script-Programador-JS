// function QualSeuNome(name){
// const msg = `O seu nome é: `
// function yourName(){
//     return `${msg} ${name}` 
// }
// return yourName();
// }

// console.log(QualSeuNome("Thiago"))


function calculadora(num1,num2){
    const msg = "Resultado";
    const soma = () =>{
      return `${msg} ${num1 + num2}`;
    }
    const subtracao = () =>{
        return `${msg} ${num1 - num2}`;
      }
      const multiplicao = () =>{
        return `${msg} ${num1 * num2}`;
      }
      const divisao = () =>{
        return `${msg} ${num1 / num2}`;
      }
      return {
        soma:soma() ,
        subtracao:subtracao(),
        multiplicao:multiplicao(),
        divisao:divisao()
    
      };
}

console.log(calculadora(10,5).soma)