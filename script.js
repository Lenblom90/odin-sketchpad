const container = document.querySelector(".container");
let squares = 16;

for(i=0; i<squares*squares; i++){
    let div = document.createElement("div");
    div.classList.add("gridDiv");
    div.addEventListener('mouseenter', () => div.style.backgroundColor="#ffffff");
    container.appendChild(div);
}