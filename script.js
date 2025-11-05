var guess = document.getElementById("ip")
var result = document.getElementById("res")
var score = document.getElementById("score")

var random_num = Math.floor(Math.random() * 10) + 1
var total_score = 10

// Run check() when Enter key is pressed
guess.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    check();
  }
});

function check(){
    var a = Number(guess.value)
    if (a<1 || a>10 || isNaN(a)){
        alert("Should be the numbers from 1 - 10");
    }
    else{
    var new_num = Number(guess.value)
    if (random_num == new_num){
        console.log("Correct")
        result.textContent = "Yes!! Correct"
        alert("You Won Kiddd 🎉")
        resetgame()
    }
    else{
        total_score = total_score - 1
        score.textContent = "Score : "+total_score
        result.textContent = "No!! Incorrect"
        if(total_score == 0){
            alert("You are Almost done! Try again kid.\nAnswer: " + random_num);
            resetgame()
        }
    }
}
}

function resetgame(){
  total_score = 10; // reset score
  score.textContent = "Score : " + total_score;
  random_num = Math.floor(Math.random() * 10) + 1; // new random number
  guess.value = ""; // clear input
  result.textContent = "";


}



