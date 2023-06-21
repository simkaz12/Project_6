import { renderHeader } from "./header.js";
renderHeader(false);
console.clear();

const formDOM = document.querySelector('form');
const plus1DOM = formDOM.querySelector('button:first-child');
const plus3DOM = formDOM.querySelector('button:nth-child(2)');
const numberDOM = formDOM.querySelector('div');
const minus1DOM = formDOM.querySelector('button:nth-child(4)');
const minus3DOM = formDOM.querySelector('button:nth-child(5)');

console.log(formDOM)
let counter = 0;

plus1DOM.addEventListener('click', (event) => {
    event.preventDefault();
    
    numberDOM.textContent = ++counter;
})
plus1DOM.addEventListener('click', (event) => {
    event.preventDefault();
    
    numberDOM.textContent = ++counter;
})
minus1DOM.addEventListener('click', (event) => {
    event.preventDefault();
    
    numberDOM.textContent = --counter;
})
