// What is DOM Content Loaded?
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
document.addEventListener("DOMContentLoaded",()=>{
    const gridDisplay = document.querySelector(".grid");
    const scoreCont = document.querySelector(".score-container");
    const scoreDisplay = document.querySelector(".score");
    let squares = [];
    let width = 4;
    function createGrid(){
        for(let  i = 0; i < width*width ;i++){
            let square = document.createElement('div');
            square.innerHTML = 0;
            square.classList.add("small-square")
            gridDisplay.append(square);
            squares.push(square);
        }
    }
    createGrid();

})