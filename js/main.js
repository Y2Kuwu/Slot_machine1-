
let isPlaying = false;          //bool for player validity
//button list
const playBtn = document.getElementById("playButton");
const retryBtn = document.getElementById("retryButton");
const quitBtn = document.getElementById("quitButton")

//let totCred = document.getElementById("credCounter");
let cred = document.querySelector("#balance");

//attached symbols to be called/checked
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
//

//setting value tracker as array
const initVal = cred.append = 5;            //setting initial value
const checkVal = [];                        //creating empty array
const init = checkVal.push(initVal);        //pushing initial value 
alert(checkVal);                            //alert to check 0 index of array
cred.innerHTML = checkVal;

function customerCreditScore(nt){  
    if(nt === 0){
        isPlaying = false;
        
        alert("OUT OF CREDITS");
    }
    else if(nt > 0){
        isPlaying = true;
        
    }
}
function giveSlotVals(){
//three identical arrays      //moved into function to set    and reset

slot1 = [];
slot1.push(shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest);
slot2 = [];
slot2.push(shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest);
slot3 = [];
slot3.push(shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest);



return slot1 , slot2, slot3;
//row1 = 0, row2 = 0 , row3 = 0;

}
let give = giveSlotVals();
let setter = set();
let resetter = reset();

function set(){
row1 = slot1[Math.floor(Math.random()*slot1.length)]; 
row2 = slot2[Math.floor(Math.random()*slot2.length)];
row3 = slot3[Math.floor(Math.random()*slot3.length)];
return row1 , row2, row3;
}
function reset(){
    row1 = slot1 = [];
    row2 = slot2 = [];
    row2 = slot3= [];
    return row1 , row2, row3;
}


//slotOutput = [row1,row2,row3]; //new array with three from above    //pull by name of element, display
//row1 , row2, row3 = makeSpace;

playBtn.addEventListener("click", ()=>{  //find a way to refresh or empty arrays
reset();
set();
    if(row1 == row2 && row3){ // triple
        alert("triple");
        checkVal.push(5);
        const newTot = checkVal.reduce((prev, curr) => prev + curr, 0);
        cred.innerHTML = newTot;
        customerCreditScore(newTot);
    }
    else if(row1 == row2 || row1 == row3 || row2 == row3){ //double
        alert("double");
        checkVal.push(1);
        const newTot = checkVal.reduce((prev, curr) => prev + curr, 0);
        cred.innerHTML = newTot;
        customerCreditScore(newTot);
    }
    else { //none
        alert("no match");
        checkVal.push(-1);
        const newTot = checkVal.reduce((prev, curr) => prev + curr, 0);
        cred.innerHTML = newTot;
        customerCreditScore(newTot);
    }
});

retryBtn.addEventListener("click", function(){
        
});