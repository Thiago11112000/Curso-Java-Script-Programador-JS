"use strict";

/**
 * textContent => Retorna o text Com formatações, mas sem os elementos Html
 * innerText => Retorna somente o texto, sem formatações ou elementos
 */

const p = document.querySelector('p')


console.log(p.textContent);
console.log(p.innerText)

p.textContent =  "Thiago Martins"
//p.innerText = "Thiago Martins"