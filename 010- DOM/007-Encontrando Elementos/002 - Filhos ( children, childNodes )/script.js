"use strict"

const container = document.querySelector(".container");


// console.log(container.children) //HTML COLLECTION
// console.log(container.childNodes) //NODE LIST

const children = Array.from(container.children)
// console.log(children)
    children.forEach(res=>{
        console.log(res)
    })

    

