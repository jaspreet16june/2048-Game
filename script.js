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
        generate();
        generate();

    }
    createGrid();

    //for generating random number in the grid
    function generate(){
        let randomNumber = Math.floor(Math.random() * squares.length);
        if(squares[randomNumber].innerHTML == 0){
            squares[randomNumber].innerHTML = 2;
        }else generate();
    }

    function moveRight(){
        for(let i = 0 ;i < 16;i++){
            if( i % 4 === 0){
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i+1].innerHTML;
                let totalThree = squares[i+2].innerHTML;
                let totalFour = squares[i+3].innerHTML;

                let row = [parseInt(totalOne) , parseInt(totalTwo) ,parseInt(totalThree) , parseInt(totalFour)];
                
                let filterArray  = row.filter(num => num);
               
                let missing = 4 - filterArray.length;
                let zeros = Array(missing).fill(0);

                let newRow = zeros.concat(filterArray);
                console.log(newRow)
               
                squares[i].innerHTML = newRow[0];
                squares[i+1].innerHTML = newRow[1];
                squares[i+2].innerHTML = newRow[2];
                squares[i+3].innerHTML = newRow[3];

            }
        }
    }
    
    function moveleft(){
        for(let i = 0 ;i < 16;i++){
            if( i % 4 === 0){
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i+1].innerHTML;
                let totalThree = squares[i+2].innerHTML;
                let totalFour = squares[i+3].innerHTML;

                let row = [parseInt(totalOne) , parseInt(totalTwo) ,parseInt(totalThree) , parseInt(totalFour)];
                
                let filterArray  = row.filter(num => num);
               
                let missing = 4 - filterArray.length;
                let zeros = Array(missing).fill(0);

                let newRow = filterArray.concat(zeros);
                console.log(newRow)
               
                squares[i].innerHTML = newRow[0];
                squares[i+1].innerHTML = newRow[1];
                squares[i+2].innerHTML = newRow[2];
                squares[i+3].innerHTML = newRow[3];

            }
        }
    }
    

    function combineRow(){

        for(let i = 0 ;i < 15; i++){
            if(squares[i].innerHTML === squares[i+1].innerHTML){
                let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = combineTotal;
                squares[i+1].innerHTML = 0;
            }
        }
    }
    function moveDown(){
        for(let i = 0 ;i < 4;i++){
            
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i + width].innerHTML;
                let totalThree = squares[i + (width*2)].innerHTML;
                let totalFour = squares[i + (width*3)].innerHTML;

                let column = [parseInt(totalOne) , parseInt(totalTwo) ,parseInt(totalThree) , parseInt(totalFour)];
                
                let filterArray  = column.filter(num => num);
               
                let missing = 4 - filterArray.length;
                let zeros = Array(missing).fill(0);

                let newCol = zeros.concat(filterArray);
               
                squares[i].innerHTML = newCol[0];
                squares[i + width].innerHTML = newCol[1];
                squares[i + (width * 2)].innerHTML = newCol[2];
                squares[i+ (width * 3)].innerHTML = newCol[3];

            
        }
    }

    function moveUp(){
        for(let i = 0 ;i < 4;i++){
            
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i + width].innerHTML;
                let totalThree = squares[i +(width*2)].innerHTML;
                let totalFour = squares[i + (width*3)].innerHTML;

                let column = [parseInt(totalOne) , parseInt(totalTwo) ,parseInt(totalThree) , parseInt(totalFour)];
                
                let filterArray  = column.filter(num => num);
               
                let missing = 4 - filterArray.length;
                let zeros = Array(missing).fill(0);

                let newCol = filterArray.concat(zeros);
               
                squares[i].innerHTML = newCol[0];
                squares[i + width].innerHTML = newCol[1];
                squares[i + (width * 2)].innerHTML = newCol[2];
                squares[i+ (width * 3)].innerHTML = newCol[3];
        }
    }
    
    function combineCol(){

        for(let i = 0 ;i < 12; i++){
            if(squares[i].innerHTML === squares[i+width].innerHTML){
                let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+width].innerHTML)
                squares[i].innerHTML = combineTotal;
                squares[i+width].innerHTML = 0;
            }
        }
    }
    function control(e){
        if(e.keyCode === 39){
            keyRight();
        }else if(e.keyCode === 37){
            keyLeft();
        }else if(e.keyCode === 38){
            keyUp();
        }else if(e.keyCode === 40){
            keyDown();
        }
    }
    document.addEventListener("keyup",control);

    function keyRight(){
        moveRight();
        combineRow();
        moveRight();
        generate();
        }

    function keyLeft(){
        moveleft();
        combineRow();
        moveleft();
        generate();
        }
    function keyUp(){
        moveUp();
        combineCol();
        moveUp();
        generate();
    }
    function keyDown(){
        moveDown();
        combineCol();
        moveDown();
        generate();
    }


})

