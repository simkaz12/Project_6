import { renderHeader } from "./header.js";
renderHeader(false);

const formDOM = document.getElementById('input');
 
formDOM.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const inputValue = document.getElementById('inputValue');
    const size = parseInt(inputValue.value);
    createChessBoard();
    renderChessBoard(size);
})

function createChessBoard() {
    const boardHTML = `<div class="board"></div>`;
    formDOM.insertAdjacentHTML('afterend', boardHTML);
}

function renderChessBoard(size = 8) {
    const boardDOM = document.getElementsByClassName('board')[0];
    const cellWhiteHTML = `<div class="cell white"></div>`;
    const cellBlackHTML = `<div class="cell black"></div>`;
    for (let i=0; i<size*size;i++) {
        if (i%2 === 0) {
            boardDOM.insertAdjacentHTML('afterbegin', cellWhiteHTML);
        } else {
            boardDOM.insertAdjacentHTML('afterbegin', cellBlackHTML);
        }
    }
}
