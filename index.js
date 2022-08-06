var randomNumber1 = Math.floor(Math.random()*6 +1) //generates random number btw 1-6

var randomDiceImage1 = "css/images/" + "dice" + randomNumber1 + ".png" // generates random dice btw 1-6



var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage1);


var randomNumber2 = Math.floor(Math.random()*6 + 1);

var randomDiceImage2 = "css/images/" + "dice" + randomNumber2 + ".png";

var images2 = document.querySelectorAll("img")[1];
images2.setAttribute("src", randomDiceImage2);


if(randomDiceImage1> randomDiceImage2){
    document.querySelector("h1").innerHTML = "Player 1 won"
}

else if(randomDiceImage2 > randomDiceImage1){
    document.querySelector("h1").innerHTML ="Player 2 won"
}

else{
    document.querySelector("h1").innerHTML = "We have a draw"
}