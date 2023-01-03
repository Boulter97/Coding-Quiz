var timer = 60;
var score = 0;
setInterval(function() {
timer--;
document.getElementById("timer").innerHTML = timer;}, 1000);

document.getElementById("quiz-form").addEventListener("submit", function(event) {event.preventDefault();
alert("You scored " + score + " points in " + timer + " seconds");
window.location.href = "http://127.0.0.1:5500/develop/question-1.html?l";
});

document.getElementById("quiz-form").style.backgroundColor = "lightgreen";
document.getElementById("quiz-form").style.padding = "25px";
document.getElementById("quiz-form").style.margin = "auto";
document.getElementById("quiz-form").style.width = "500px";

localStorage.setItem("timer", 60);