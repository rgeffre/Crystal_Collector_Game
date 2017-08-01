$(document).ready(function() {

//declare required global variables
var winCount
var lossCount
var scoreNum
//create random number between 19 and 100
var computerChoice = Math.floor(Math.random() * 81) +19;
$("#randomNum").html(computerChoice)
  //console.log(computerChoice)


// Each button generates a number between 1 and 12.  These numbers will change
// when the app is reset.
$("#buttonAmethyst").on("click", function() {
  var purplebtn = Math.floor(Math.random() * 12) +1;
  console.log("#buttonAmethyst")
});

});

//$("#buttonPeridot").click(function() {
//var greenbtn = Math.floor(Math.random() * 12) + 1;
//});

//$("#buttonZircon").click(function() {
//var goldbtn = Math.floor(Math.random() * 12) + 1;
//});

//$("#buttonAquamarine").click(function() {
//var bluebtn = Math.floor(Math.random() * 12) + 1;
//});

// Add an on click listener to all elements that have the class "number"
//$(".crystal").on("click", function() {
//});

//Add code to validate the number against the computers total score

//If the numbers are equal increments wins and reset game

//If the user score is less than the computer score allow another choice and repeat validation

//if the user score is greater than the computer score increment losses and reset game.



       


