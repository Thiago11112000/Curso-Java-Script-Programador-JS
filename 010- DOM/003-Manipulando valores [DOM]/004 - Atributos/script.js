"use strict"

const  div = document.querySelector("div")
div.setAttribute('id','teste')
div.setAttribute('class', 'active')
div.setAttribute('class', ` ${div.getAttribute("class")}  background-red`)
console.log(div.getAttribute("id"))