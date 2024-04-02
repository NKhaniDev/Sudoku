//modal section for how to play- w3 school
document.addEventListener("DOMContentLoaded", function(){
   let modal = document.getElementById("my-modal");
   let myButton = document.getElementById("my-button");
   let span = document.getElementsByClassName("close")[0];

    myButton.onclick= function(){
       modal.style.display="block";
    };

    span.onclick=function(){
       modal.style.display="none";
    };

    window.onclick= function(event){
      if(event.target== modal){
          modal.style.display="none";
       }
    };

});

// populating 3 span elemnt including life class

let LivesContainer=document.getElementById("lives");
for(let j=0; j<3;j++){
    let span =document.createElement("span");
    span.className="life";
    LivesContainer.appendChild(span);

}

var errors =0;
var numSelected = null;
var tileSelected = null;

// initial numbers and the solution for puzzle
var board = '6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------';
var solution ='685329174971485326234761859362574981549618732718293465823946517197852643456137298';

// function to change the series of numbers to the array of rows

function convertToSudokuRows(puzzleString){
    let size= 9;
    let rows=[];
    for (let i = 0; i<puzzleString.length; i+=size ){
        rows.push(puzzleString.substring(i , i + size));
    }
    return rows;
}

var board = convertToSudokuRows(board)
var solution = convertToSudokuRows(solution)

// starting the game-credit to: https://www.youtube.com/watch?v=S4uRtTb8U-U&t=648s

window.onload = function(){
    setGame();
}

//cleaning the board(for reset function to work properly)
document.getElementById("digits").innerText="";
document.getElementById("board").innerText="";



function setGame(){

    //cleaning the board(for reset function to work properly)
    document.getElementById("digits").innerText="";
    document.getElementById("board").innerText="";

    // adding the digits(1-9)-credit to: https://www.youtube.com/watch?v=S4uRtTb8U-U&t=648s
    // populating a div including id="digits"
    for (let i = 1; i<=9; i++){
        
        let number = document.createElement("div");
        number.id=i;
        number.innerText= i;
        number.addEventListener("click",selectNumber);// when the numbers clicked the selectNumber function will activate
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // making board -credit to: https://www.youtube.com/watch?v=S4uRtTb8U-U&t=648s
    // populating a div including id="numbers"

   for (let r=0; r<9; r++){
       for (let c=0; c<9; c++){
          let tile= document.createElement("div");
          tile.id =r.toString()+"-"+c.toString();
          // fill the predefined numbers
          if (board[r][c] != "-"){
             tile.innerText=board[r][c];
             //adding class to change the color of the container for predefined numbers 
             tile.classList.add("tile-start")
          }

          //adding class for the 3rd and 6th row to make the lines thicker
          if (r===2 || r===5){
            tile.classList.add("horizontal-line");
          }
          //adding class for the 3rd and 6th column to make the lines thicker
          if (c===2 || c===5){
            tile.classList.add("vertical-line");
          }
          tile.addEventListener("click",selectTile);
          tile.classList.add("tile");
          document.getElementById("board").append(tile);
       }
    }

}


// function for toggle numbers-credit to: https://www.youtube.com/watch?v=S4uRtTb8U-U&t=648s

function selectNumber(){
    if (numSelected != null){
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

// function for adding the selected number to the board-credit to: https://www.youtube.com/watch?v=S4uRtTb8U-U&t=648s

function selectTile(){
    if (numSelected){
        if(this.innerText !=""){
            return
        }
        // making a coordinate for the tiles for comparing with the solution
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        //comparison

        if (solution[r][c] === numSelected.id){
            this.innerText = numSelected.id;
        }
        // if is not match with the solution, change the color of the spans(.life) and increase the error
        else{

            if(errors<3){
                const lives =document.querySelectorAll(".life");
                lives[errors].style.backgroundColor = "rgb(146, 7, 7)";
                errors++;
                // game over
                if (errors===3){
                    gameOver();
                }
            }
        }



    }
}

// game over function

function gameOver(){
    let modal = document.getElementById("gameOverModal");
    modal.style.display = "block";

    // adding timer- after gameover move to index.html

    setTimeout(function() {
        window.location.href = "index.html"; 
    }, 2000);
}


//adding event listner for different actions inside exit modal

document.getElementById("exitGameBtn").addEventListener("click",showExitModal);
document.getElementById("resumeBtn").addEventListener("click",closeExitModal);
document.getElementById("resumeCross").addEventListener("click",closeExitModal);
document.getElementById("resetBtn").addEventListener("click",resetGame);
document.getElementById("exitBtn").addEventListener("click", function() {
    window.location.href = "index.html";
});

//appearing exit modal
function showExitModal(){
    document.getElementById("exitModal").style.display="block";
}

//closing the modal(resume)

function closeExitModal(){
    document.getElementById("exitModal").style.display="none";
}

//reset the game

function resetGame(){
    closeExitModal();
    setGame();
    errors = 0;
    const lives =document.querySelectorAll(".life");
    lives[errors].style.backgroundColor = "rgb(29, 74, 46)";
    errors =1;
    lives[errors].style.backgroundColor = "rgb(29, 74, 46)";
    errors= 0;
}