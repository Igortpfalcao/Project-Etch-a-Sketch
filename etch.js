const container = document.querySelector(".container");

const generate = document.querySelector("button")

generate.addEventListener("click", () => createGrid(parseInt(document.querySelector(".slider").value)));

const colors = [];
const generatecolors = function(){
    for (let white = 0; white <= 255; white += 51){
        colors.unshift("rgb(" + white + ", " + white + ", " + white + ")");
    }
}

generatecolors();

let currentindex = 0;

const createGrid = function(scale){
    
    container.innerHTML = '';
    currentindex = 0;
    
    for (let row = 0; row < scale; row++){
        let div = document.createElement("div");
        div.style.cssText = "border: solid 1px black; display: flex; flex: 1;";
        for (let column = 0; column < scale; column++){
            let internal = document.createElement("div");
            internal.style.cssText = "display: flex; border: solid 1px black; flex: 1; height: 100%;"
            internal.addEventListener("mouseover", () => hovering(internal));
            div.appendChild(internal);
        }
        
        container.appendChild(div);
    }

}

const hovering = function(square){
    if (currentindex < 6){
        square.style.backgroundColor = colors[currentindex];
        currentindex += 1;
    }
    else{
        currentindex = 0
        square.style.backgroundColor = colors[currentindex];
    }
}