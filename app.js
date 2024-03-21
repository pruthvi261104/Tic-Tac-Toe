let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let messageContainer=document.querySelector(".message-container");
let msg=document.querySelector("#msg");
let turno=true;
let count =0;
const WinPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];
const resetGame=()=>{
   turno=true;
   enableBoxes();
   messageContainer.classList.add("hide");
};
boxes.forEach((box)=>{
 box.addEventListener("click",()=>{
  if(turno){
    box.innerText="O";
    box.style.color="green";
    turno=false;
  }else{
    box.innerText="X";
    box.style.color="red";
    turno=true;
  }
  count++;
  box.disabled=true;
  let isWinner=checkWinner();
  if(count===9 &&!isWinner){
    gameDraw();
  }
 });
});
const gameDraw=()=>{
  msg.innerText=`Tie`;
  messageContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true
  }
};
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};
const showWinner=(winner)=>{
  msg.innerText=`Congratulations, Winner is ${winner}`;
  messageContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner=()=>{
   for(let pattern of WinPatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!=""){
      if(pos1val===pos2val && pos2val===pos3val){
        console.log("Winner is :",pos1val);
        showWinner(pos1val);
      }
    }
   }
};
reset_btn.addEventListener("click",resetGame);
