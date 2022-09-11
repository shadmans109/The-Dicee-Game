var randomNumber1 = Math.floor(Math.random()*6) +1;
var genImage = "dice" + randomNumber1 + ".png";
var iamgeSource = "images/" + genImage;
document.querySelectorAll("img")[0].setAttribute("src", iamgeSource);


var randomNumber2 = Math.floor(Math.random()*6) +1;
var genImage = "dice" + randomNumber2 + ".png";
var iamgeSource = "images/" + genImage;
document.querySelectorAll("img")[1].setAttribute("src", iamgeSource);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🎖Player 1 Wins!";
} else if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent = "Draw!";
} else{
    document.querySelector("h1").textContent = "Player 2 Wins! 🎖";
}

