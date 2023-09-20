


var start = document.querySelector('#start');
var livesLeft = document.querySelector('.lives');
var inputGuess= document.querySelector('#inputGuess');
var result = document.querySelector('.result');
var guess = document.querySelector('#Guess');

//starting game here
start.addEventListener("click", ()=>startGame());


var random;
var lives;


function startGame(){
    alert('start button clicked ');
    console.log('button clicked');


    //creating the random number

    var randm = Math.random()*15;
   random= Math.round(randm);
    alert(random);


    lives =3

    //taking input from the player
  

}
//add a button saying guess

guess.addEventListener('click',()=>checkresult());


function checkresult(){
    var val = inputGuess.value;
     
    lives--;
     if(lives>=0)
{   
    
    livesLeft.innerHTML="Number of lives  left "+lives;

    if(random==val)
    {
        result.innerHTML="HURRAH YOU'VE WON";

    }
    else{
        result.innerHTML="TRY AGAIN";
    }

}
else{
    alert("You've expended all your lives start game again")
}


   

    
   








}


