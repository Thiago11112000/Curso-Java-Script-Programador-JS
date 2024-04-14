"use strict"

const h1 = document.querySelector("h1")

h1.classList.add('active', "1234")

h1.classList.toggle("Teste2")
if(h1.classList.contains('active')){
    alert("existe a classe active")
}
console.log(h1);
