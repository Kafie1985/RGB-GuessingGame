var newGame = document.getElementById("newGame");
var modebuttons = document.querySelectorAll(".mode");
var square = document.querySelectorAll(".square");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var numSquares = 6;
var colors = [];
var pickedColor;

init();


function init(){
    //Mode Buttons
   setupmodebuttons();
    setupsquares();
    reset();
}

function setupsquares(){
    for (var i = 0; i < square.length; i++) {
        //add colors to squares
        square[i].style.backgroundColor = colors[i];
        // add click events 
        square[i].addEventListener("click", function(){
            // grab color and compare color
          var clickedColor = this.style.backgroundColor;
          // compare colors
          if( clickedColor === pickedColor){
            message.textContent= "Correct";
            changeColors(clickedColor)
            h1.style.backgroundColor =clickedColor;
            newGame.textContent = "Play Again?";
    
            }
          else {
              this.style.backgroundColor = "#232323";
              message.textContent= "Try Agian";
            }
    
        })
    }
}

function setupmodebuttons(){
    for(var i = 0; i < modebuttons.length; i++){
        modebuttons[i].addEventListener("click", function(){
            modebuttons[0].classList.remove("difficulty");
            modebuttons[1].classList.remove("difficulty");
            this.classList.add("difficulty");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
           reset();
    
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
        }else{
            square[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    newGame.textContent = "New Colors";
}



newGame.addEventListener("click", function() {
	reset();
});

function generateRandomColors(num){
    //Loop through all squares and change them when correct color is clicked
    var arr = [];
    for(var i = 0 ;i < num; i++)
    arr.push(randomColor());

    return arr;
}

function randomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColors(colors){
    for (var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = colors;
    }
}


function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];


}






