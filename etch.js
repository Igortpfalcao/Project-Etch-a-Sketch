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



const createGrid = function(scale){
    
    container.innerHTML = '';
    
    
    for (let row = 0; row < scale; row++){
        let div = document.createElement("div");
        div.style.cssText = "border: solid 1px black; display: flex; flex: 1;";
        for (let column = 0; column < scale; column++){
            let internal = document.createElement("div");
            internal.style.cssText = "display: flex; border: solid 1px black; flex: 1; height: 100%;"
            internal.style.backgroundColor = colors [0];
            internal.addEventListener("mouseover", () => hovering(internal));
            div.appendChild(internal);
        }
        
        container.appendChild(div);
    }

}

const hovering = function(square){
    let current = currentcolor(square);
    if (current == 5){
        square.style.backgroundColor = colors[0];
    }
    else{
        square.style.backgroundColor = colors[current + 1];
    }
    
}

const currentcolor = function(square){
    for (let color = 0; color < 6; color++ ){
        if (square.style.backgroundColor == colors[color]){
            return color;
        }
    }
    return "ERROR";
}