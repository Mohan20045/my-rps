var userScore=0;
var compScore=0;

let choices=document.querySelectorAll(".choice");
let userCount=document.querySelector("#user-score");
let compCount=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
let refreshBtn=document.querySelector("#btn");

function getCompChoice(){
    const options=["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3);
    return options[index];
}

function printwinner(user,comp){
    if(user==comp){
        msg.innerText=`it's draw. Both choose ${user}`;
        msg.style.backgroundColor="rgb(31, 29, 29)";

    }
    else if(user=="rock" && comp=="scissor" || user=="paper" && comp=="rock" || user=="scissor" && comp=="paper"){
        userScore++;
        userCount.innerText=userScore;
        msg.innerText=`You Win! your ${user} beats ${comp}`;
        msg.style.backgroundColor="green";
        
    }
    else{
        compScore++;
        compCount.innerText=compScore;
        msg.innerText=`You Lose! ${comp} beats your ${user}`;
        msg.style.backgroundColor="red";
    }
}

function playGame(userChoice){
    console.log(`User choice:${userChoice}`);
    const compChoice=getCompChoice();
    console.log(`Computer choice:${compChoice}`);
    printwinner(userChoice,compChoice);
}

for( let choice of choices){
        choice.addEventListener("click",()=>{
            const userChoice=choice.getAttribute("id");
            playGame(userChoice);
        });
}

refreshBtn.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    userCount.innerText=userScore;
    compCount.innerText=compScore;
    msg.innerText="Play your move";
    msg.style.backgroundColor="rgb(31, 29, 29)";
})
