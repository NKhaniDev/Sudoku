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

    windows.onclick= function(event){
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


