let isPlaying = false;
const playBtn = document.getElementById("playButton");
const retryBtn = document.getElementById("retryButton");
const quitBtn = document.getElementById("quitButton")

let totCred = document.getElementById("credCounter");
let cred = document.getElementById("balance");

const shine = document.getElementById("star");
const rock = document.getElementById("diamond");
const coldBlood = document.getElementById("snake");
const cat = document.getElementById("sphnix");
const tri = document.getElementById("pyramid");
const scope = document.getElementById("eye");
const ingot = document.getElementById("goldBar");
const dagger = document.getElementById("knife");
const lord = document.getElementById("king");
const lady = document.getElementById("queen");
const jest = document.getElementById("jester");


 
retryBtn.addEventListener("click", function(){

});

//retryBtn.addEventListener("click", y);  //init screen
//quitBtn.addEventListener("click", ); //close page

slot1= [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest];
slot2= [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest];
slot3= [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest];
slotOutput = [];
makeSpace = [];

let row1 = slot1[Math.floor(Math.random()*slot1.length)];
let row2 = slot2[Math.floor(Math.random()*slot2.length)];
let row3 = slot3[Math.floor(Math.random()*slot3.length)];
slotOutput = [row1,row2,row3];

const initVal = cred;
const credArray = [1, 5, -1];
const updateCred = [];

cred.append







playBtn.addEventListener("click", function(){  //find a way to refresh or empty arrays
    if(row1 == row2 && row3){ // triple
        alert("triple");
        cred.innerHTML = (cred).value + credArray[2];
    }
    else if(row1 == row2 || row1 == row3 || row2 == row3){ //double
        alert("double");
        cred.innerHTML = (cred).value + credArray[2];
    }
    else { //none
        alert("no match");
        cred.innerHTML = cred + credArray[2];
    }
});





// function checkCredits(){
//     totCred.innerHTML += 1;
// }
// function checkForWin(){
//     //if win totCred.innerHTML
// }
// function randSpin(){

// }
// function winSeq(){

// }
// function loseSeq(){

// }
// class symbols{


//}
//symbols:
//star, eye, snake, pyramid, diamond