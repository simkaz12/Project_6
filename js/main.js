// narsykle: 
// -html variklis
// -css variklis
// -js variklis
// -local storage variklis
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
// console.log([buttonDOM]);

if (buttonDOM !== null) {
    console.log('radom button')
    const titleDOM = document.getElementById('antraste');
    console.log([titleDOM]);
    if (titleDOM !== null) {
        console.log('radom antraste');
        titleDOM.textContent = "Labas Vakaras!";
    } else {
        console.log('neradom');
    }
} else {
    console.log('neradom');
}