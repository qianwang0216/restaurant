// JavaScript Document
var selectedCanvas; // stores the current selected canvas 
var currContext = [0, 0, 0, 0];
var totalImages = 6;
var curRow = 1; // stores the numeric value of the current row, indicating which guess the user is on 
window.onload = function() {
    for (row = 2; row <= 10; row++) {
        for (col = 1; col <= 4; col++) {
            document.getElementById("canvas" + row + "_" + col).className = "waiting";
        }
    }
}

function switchRows() {
    for (col = 1; col <= 4; col++) {
        document.getElementById("canvas" + curRow + "_" + col).className = "deactive";
        document.getElementById("canvas" + (curRow + 1) + "_" + col).className = "active";
    }
}

function canvasClicked(canvasNum) {
    if (curRow == canvasNum.substring(0, canvasNum.indexOf("_"))) {
        selectedCanvas = document.getElementById("canvas" + canvasNum);
        var curCol = canvasNum.substring(canvasNum.indexOf("_") + 1, canvasNum.length) - 1;
        selectedCanvas.onmousedown = function() {
            return false;
        };
        selectedCanvas = selectedCanvas.getContext("2d");
        var foodimg = new Image();
        foodimg.src = "img/" + currContext[curCol] + ".jpg";
        currContext[curCol] = (currContext[curCol] + 1) % (totalImages);
        foodimg.onload = function() {
            selectedCanvas.drawImage(foodimg, 0, 0, 300, 150);
        }
    }
}

function verify() {
    switchRows();
    curRow += 1;	
	var marginValue = 58 + 82*(curRow - 1);  
	document.getElementById("submit_btn").style.marginTop = marginValue.toString() + "px"; 
}
