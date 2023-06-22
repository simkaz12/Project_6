function renderHeader(isHomePage) {
    const bodyDOM = document.body;
    const url = isHomePage ? '' : '.';
    const HTML = `
    <header>
          <nav>
            <a href="${url}./clicker/">Clicker</a>
            <a href="${url}./list/">List</a>
            <a href="${url}./">Home</a>
            <a href="${url}./chess">Chess</a>
          </nav>
    </header>
    `;
    
    //bodyDOM.innerHTML = headerHTML + bodyDOM.innerHTML;
    
    bodyDOM.insertAdjacentHTML("afterbegin", HTML);

}
export {renderHeader};

