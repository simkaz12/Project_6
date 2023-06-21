// narsykle: 
// -html variklis
// -css variklis
// -js variklis
// -local storage variklis

import { renderHeader } from "./header.js";
renderHeader(true);
console.clear();

// paspaudus <button> 
// h1 pasikeicia tekstas

// 1. susirasti <button>
// 2. je button yra:
//    susirandam <h1>
//      jei <h1> yra 
//          uzregistruojam ivikio stebejima:
//              kai/if paspaudzia button 
//              <h1> keiciam tekta
//      jei ne nedarom 
//    jei nera nedarom.

const buttonDOM = document.getElementById('mygtukas');
const titleDOM = document.getElementById('antraste');
// console.log([buttonDOM]);

function kaDaryti() {
    console.log('eik pakeisk teksta'); 
    titleDOM.textContent = "Labas Vakaras!";
}

buttonDOM.addEventListener('click', kaDaryti);

