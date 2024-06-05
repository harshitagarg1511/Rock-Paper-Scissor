let userScore=0;
let compScore=0;
let user_score_span=document.getElementById("user");
let comp_score_span=document.getElementById("computer");
let result=document.getElementById("winner");
let stone_img=document.getElementById("s");
let paper_img=document.getElementById("p");
let scissor_img=document.getElementById("r");

function getCompChoice(){
    const choices=["s","p","r"];
    let number =Math.floor(Math.random()*3);
    let compChoice=choices[number];
    return compChoice;
}
function convertWord(letter){
    if(letter==="s") return "Stone";
    if(letter==="p") return "Paper";
    else {
        return "Scissor";
    }
}

function Game(userChoice){
 let computerChoice =getCompChoice();
 switch( userChoice+ computerChoice){
    case "sr" :
    case "ps" :
    case "rp" : 
        win(userChoice,computerChoice);
        break;
    case "sp" :
    case "pr" :
    case "rs" :
        lose(userChoice,computerChoice);
        break;
    case "rr" :
    case "pp" :
    case "ss" :
        draw(userChoice,computerChoice);       
      break;
 }
    
}

function win(userChoice,computerChoice){
    userScore++;
    user_score_span.innerHTML=userScore;
    comp_score_span.innerHTML=compScore;
   setTimeout (() => {document.getElementById(userChoice).classList.add("green-glow");},50);
    result.innerHTML=` ${convertWord(userChoice)}(you) beats ${convertWord(computerChoice)}(comp).You Win! `;
    setTimeout (() => {document.getElementById(userChoice).classList.remove("green-glow");},1000);
}

function lose(userChoice,computerChoice){
   compScore++;
    user_score_span.innerHTML=userScore;
    comp_score_span.innerHTML=compScore;
    setTimeout (() => {document.getElementById(userChoice).classList.add("red-glow");},50);
    result.innerHTML=` ${convertWord(userChoice)}(you) lose to ${convertWord(computerChoice)}(comp).You lose :) `;
    setTimeout (() => {document.getElementById(userChoice).classList.remove("red-glow");},1000);
}


function draw(userChoice,computerChoice){
    setTimeout (() => {document.getElementById(userChoice).classList.add("grey-glow")},50);

    result.innerHTML=` ${convertWord(userChoice)}(you) draws with ${convertWord(computerChoice)}(comp).It's a draw.... `;
    setTimeout (() => {document.getElementById(userChoice).classList.remove("grey-glow");},1000);
}

    


finaluserScore();
function finaluserScore(){
    stone_img.addEventListener("click",()=>{
   Game("s");
})
paper_img.addEventListener("click",()=>{
   Game("p");
})
scissor_img.addEventListener("click",()=>{
 Game("r");
})
}
