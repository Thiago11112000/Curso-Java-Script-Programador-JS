(function(num1,num2){
    const  calc = num1 + num2  
    console.log(calc)
})(1,2);  // IIFE


((num1,num2) => {
    const  calc = num1 + num2  
    console.log(calc)
})(1,2);  // IIFE com arrow function


(function (num1,num2){
    const calc = num1 + num2
    console.log(calc)
})(5,5);
