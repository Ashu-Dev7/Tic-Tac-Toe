let boxes=document.querySelectorAll(".box");  
let resetButton=document.querySelector("#resetButton");
let newGameButton=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-container");// no need of hide keyword
let p=document.querySelector("#msg");
let changeThemeButton=document.querySelector("#changeTheme");
let turnO=true; 
const winPattern=[  
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,4,6],
[2,5,8],
[3,4,5],
[6,7,8]];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";  
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO){  
        box.innerText="O";  
        box.style.color="#BB86FC";
        turnO=false;
    }
    else{
        box.innerText="X";  
        box.style.color="#03DAC6";
        turnO=true;
    }
   
    box.disabled=true;
    
    checkWinner();
    });
});
const showWinner=(winner)=>{  
    p.innerText=`Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    for(let box of boxes){  
        box.disabled=true;
    }
}
const checkDraw=()=>{   
    for( let box of boxes){  
        if(box.innerText===""){  
            return false;
        }
    }
    return true; 
}
const checkWinner=()=>{
    for(let pattern of winPattern){
    let pos1Value=boxes[pattern[0]].innerText;
    let pos2Value=boxes[pattern[1]].innerText;
    let pos3Value=boxes[pattern[2]].innerText;
    
    if(pos1Value!="" && pos2Value!="" &&pos3Value!=""){
        if(pos1Value===pos2Value && pos2Value===pos3Value){
        console.log("winner",pos1Value);
        showWinner(pos1Value); 
        }
    }
}
if(checkDraw()){
    p.innerText="It's a draw! Well played both sides";
    msgContainer.classList.remove("hide");
    for(box of boxes){
        box.disabled=true;
    }
}
};
resetButton.addEventListener("click",resetGame);
newGameButton.addEventListener("click",resetGame);
let currMode="white";
changeThemeButton.addEventListener("click",()=>{
    if(currMode==="white"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currMode="white";
        document.querySelector("body").style.backgroundColor="#E0F7FA";
    }
});
