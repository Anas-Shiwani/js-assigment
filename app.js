alert ("welcome to the javascript function");
alert ("Are you ready to check your percentage?")

var a = +prompt("How many marks did you score in Physics?");
var b = +prompt("How many marks did you score in Math's?");
var c = +prompt("How many marks did you score in English?");
var d = +prompt("How many marks did you score in Computer?");
var e = +prompt("How many marks did you score in Urdu?");

var f = 500;
var percentage = ((a+b+c+d+e)/f)*100;

alert (percentage);