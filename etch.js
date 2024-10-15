const container = document.querySelector(".container");

const generate = document.querySelector("button")

generate.addEventListener("click", () => createGrid(parseInt(document.querySelector(".slider").value)));


const createGrid = function(scale){
    
    container.innerHTML = '';
    
    for (let row = 0; row < scale; row++){
        let div = document.createElement("div");
        div.style.cssText = "border: solid 1px black; display: flex; flex: 1;";
        for (let column = 0; column < scale; column++){
            let internal = document.createElement("div");
            internal.style.cssText = "display: flex; border: solid 1px black; flex: 1; height: 100%;"
            div.appendChild(internal);
        }
        
        container.appendChild(div);
    }

}