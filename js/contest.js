// JavaScript Document
var selectedCanvas; // stores the current selected canvas 
var currContext = [-1, -1, -1, -1];  // the index number of which image is being displayed in the four canvases in the current row 
var startGame = false; 
var time = 0;  
var totalImages = 6;
var curRow = 1; // stores the numeric value of the current row, indicating which guess the user is on 
var correctAnswer = new Array(); 
var timer; 

window.onload = function() {
    for (row = 2; row <= 10; row++) {
        for (col = 1; col <= 4; col++) {
            document.getElementById("canvas" + row + "_" + col).className = "waiting";
        }
    }
}

function switchRows() {
	document.getElementById("submit" + curRow).style.visibility = "hidden"; 
    for (col = 1; col <= 4; col++) {
        document.getElementById("canvas" + curRow + "_" + col).className = "deactive";
        document.getElementById("canvas" + (curRow + 1) + "_" + col).className = "active";
		currContext[col - 1] = -1; 
    }
	curRow += 1;
}

function startGameNow()
{
	timer = setInterval (function() { 
	   time += 1;
	   var timeDisplay = document.getElementById("time"); 
	   var min = Math.floor(time / 60); 
	   var sec = time - min * 60; 
	   timeDisplay.innerHTML = "00:"; 
	   if (min <= 9)
	   {
		      timeDisplay.innerHTML += "0" + min + ":";
	   } else {
		  timeDisplay.innerHTML += min + ":"; 
	   }
	   if (sec <= 9)
		  {
			  timeDisplay.innerHTML += "0" + sec; 
		  } else {
			  timeDisplay.innerHTML += sec;
		  };
	    
	}, 1000);
	for (i = 0; i <= 3; i++)
	{
		var randomnumber=Math.floor(Math.random()*6);
		correctAnswer.push(randomnumber); 
	}
}

function canvasClicked(canvasNum) {
	if (startGame == false)
	{
		startGame = true; 
		startGameNow(); 
	}
	
    if (curRow == canvasNum.substring(0, canvasNum.indexOf("_"))) {
        selectedCanvas = document.getElementById("canvas" + canvasNum);
        var curCol = canvasNum.substring(canvasNum.indexOf("_") + 1, canvasNum.length) - 1;
        selectedCanvas.onmousedown = function() {
            return false;
        };
        selectedCanvas = selectedCanvas.getContext("2d");
        var foodimg = new Image();
		currContext[curCol] = (currContext[curCol] + 1) % (totalImages);
        foodimg.src = "img/contest/" + currContext[curCol] + ".jpg";
        foodimg.onload = function() {
            selectedCanvas.drawImage(foodimg, 0, 0, 300, 150);
        }
    }
}

function verify() {
	var validated = true; 
	for (i=0; i <=3; i++)
	{
		if (currContext[i] == -1)
		{
			validated = false;  
		}
	}
	if (validated == true)
	{
      document.getElementById("guess" + curRow).innerHTML = checkAnswer(); 
	  switchRows();	
	} else {
		document.getElementById("guess" + curRow).innerHTML = "Guess " + curRow + " Must make a valid guess!"; 
	}
}

function checkAnswer()
{
	var rightSpot = 0;
	var rightSelection = 0; 
	for (i = 0; i <=3; i++)
	{
	  if ((correctAnswer[i]) == (currContext[i]))
	  {
		  rightSpot++; 
	  } else {
		 rightSelection += checkRightSelectionWrongSpot(i); 
	  }
	}
	if (rightSpot == 4)
	{
	   endGame(); 	
	} else if (curRow == 10)
	{
	   restartGame(); 	
	}
	return "Guess " + curRow + "<br />" + rightSpot + ": item(s) that are correct and in the right spot.  " + 
	  "<br />" + rightSelection + ": item(s) that are correct but in the wrong spot.";  
}

function checkRightSelectionWrongSpot(number)
{
	for (j = 0; j<=3; j++)
		{
		if ((correctAnswer[number]) == currContext[j])
		      {
			    return 1; 
		      }   
		}
	return 0; 
}

function endGame()
{
	alert ("Congrats!  You've guessed correctly!  however, in the time it has take you to guess the combo, we have recieved new orders." + 
	    "Unfortunately your guess is no longer correct, but try your luck again, and be quick this time!");
    location.reload(); 
}

function restartGame()
{
	alert ("Sorry, you are out of moves!  Try again"); 
    location.reload(); 
}
