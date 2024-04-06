"use strict"

const  p = document.getElementsByClassName("paragrafo")
console.log(p)

// Array.from(p).forEach((element) => {
//    console.log(element)
// });

for(let item of p){
    console.log(item)
}