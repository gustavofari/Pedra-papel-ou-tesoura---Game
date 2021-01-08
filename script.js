let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result = document.querySelector(".result");

const rock_div = document.getElementById("rock");
const scissors_div = document.getElementById("scissors"); 
const paper_div = document.getElementById("paper");

const choice_win = document.getElementsByClassName("choice-hand");


function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.round(Math.random() * 2);
    return choices[randomNumber];
}



function game(userChoice){

    const computerChoice = getComputerChoice();
    const userChoice_div = document.getElementById(userChoice);


    function firstLetter(letter){ // First letter in Upper case.
        return letter[0].toUpperCase() + letter.substr(1);
    }


    function win(){

        userScore++; 
        userScore_span.innerHTML = userScore;

        result.innerHTML = `You Win! ${firstLetter(userChoice)} beats ${firstLetter(computerChoice)}`;
        
        userChoice_div.classList.add("green-glow");
        
        
        setTimeout(() => userChoice_div.classList.remove("green-glow"), 500);

   };


   function lose(){
       computerScore++;
   
       computerScore_span.innerHTML = computerScore;
       result.innerHTML = `You Lose! ${firstLetter(computerChoice)} beats ${firstLetter(userChoice)}`;
  

       userChoice_div.classList.add("red-glow");
        
       setTimeout(() => userChoice_div.classList.remove("red-glow"), 500)
    };



    switch(userChoice + computerChoice){
       
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            
            win(); /* function winner*/
            break;
        

        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":

            lose();
            break;
        

        case "rockrock":
        case "paperpaper":  
        case "scissorsscissors":

            result.innerHTML = "Draaaaaw!"
            break;
    }

    
    
    
/*  if(   userChoice == "rock" && computerChoice == "scissors"
       || userChoice == "paper" && computerChoice == "rock" 
       || userChoice == "scissors" && computerChoice == "paper"){

        userScore += 1; 

        userScore_span.innerHTML = userScore;
        result.innerHTML = `You Win! ${userChoice} X ${computerChoice}`
    }

    else if(userChoice == computerChoice){
        result.innerHTML = `Empate!`
    }

    else{
        computerScore += 1;

        computerScore_span.innerHTML = computerScore;
        result.innerHTML = `You Lose! ${userChoice} X ${computerChoice}`
    }
 */


};


function main() {

    rock_div.addEventListener("click", () => game("rock"));

    scissors_div.addEventListener("click", () => game("scissors"));

    paper_div.addEventListener("click", () => game("paper")); 
};

main();




