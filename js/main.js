let isPlaying = false;
const playBtn = document.getElementById("playButton");
const retryBtn = document.getElementById("retryButton");
const quitBtn = document.getElementById("quitButton")

//let totCred = document.getElementById("credCounter");
let cred = document.querySelector(".balance");

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

cred.append(5);
let newVal = document.createElement("newVal");
let updatedCred = cred.value + newVal;
//let windowId = win.open("file:///Users/jamesfox/Desktop/slot_machine_project/Slot_machine1-/index.html");
//let winClose = 


function customerCreditScore(cs){ //for 
    if(cred = 0){
        isPlaying = false;
        alert("OUT OF CREDITS");
        
    }
    else{
        isPlaying = true;
    }
}


//three identical arrays 
slot1= [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest];
slot2= [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest];
slot3= [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest];

makeSpace = []; //for resetting

let row1 = slot1[Math.floor(Math.random()*slot1.length)]; //random res
let row2 = slot2[Math.floor(Math.random()*slot2.length)];
let row3 = slot3[Math.floor(Math.random()*slot3.length)];
slotOutput = [row1,row2,row3]; //new array with three above 
//


let updateCred;


playBtn.addEventListener("click", function(){  //find a way to refresh or empty arrays
    const credArray = [1, 5, -1];
    if(row1 == row2 && row3){ // triple
        alert("triple");
        //newVal = credArray[1];
        cred.append(cred.value + credArray[1]);
    }
    else if(row1 == row2 || row1 == row3 || row2 == row3){ //double
        alert("double");
        //cred.setAttribute("value" + credArray[2]);
        //newVal = credArray[0];
        cred.append(cred.value + credArray[0]);
    }
    else { //none
        alert("no match");
        //newVal = credArray[2];
        cred.append(cred -1);
        
    }
});

retryBtn.addEventListener("click", function(){

});