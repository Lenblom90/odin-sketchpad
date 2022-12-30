const container = document.querySelector(".container");

function setSquares(){  
    while (container.lastChild){
        container.removeChild(container.lastChild);
    }
    let userSquares = prompt("How many squares do you want?");
    userSquares = userSquares < 101 ? userSquares : 100;
    drawSquares(userSquares);
}

function drawSquares(squares){
    for(i=0; i<squares; i++)
    {
    let row = document.createElement("div");
    for(j=0; j<squares; j++){
        let div = document.createElement("div");
        div.style.width = `${window.innerWidth / squares}px`;
        div.style.height = `${window.innerHeight / squares}px`;     
        div.classList.add("gridDiv");
        div.addEventListener('mouseenter', () => div.style.backgroundColor="#ffffff");
        row.appendChild(div);
    }
    row.classList.add('row')
    container.appendChild(row);
    };
}

drawSquares(10);