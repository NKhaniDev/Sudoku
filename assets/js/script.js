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

// generating 3 span elemnt including life class

let LivesContainer=document.getElementById("lives");
for(let j=0; j<3;j++){
    let span =document.createElement("span");
    span.className="life";
    LivesContainer.appendChild(span);
    
}


