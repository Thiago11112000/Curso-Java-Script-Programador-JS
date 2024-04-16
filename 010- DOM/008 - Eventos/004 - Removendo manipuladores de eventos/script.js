"use strict"

const btn = document.querySelector("button");


const actionAlert =  () =>{
    let validador  = false;
    alert(123)
    validador = true;
    if(validador){
        btn.removeEventListener('click',actionAlert)
    }
}

btn.addEventListener("click", actionAlert)
