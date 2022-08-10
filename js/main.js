
//let isPlaying = false;          //bool for player validity
//button list
const playBtn = document.getElementById("playButton");
const cheater = document.getElementById("cheatButton");
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
let row1;
let row2;
let row3;

//setting value tracker as array
const initVal = cred.append = 5;            //setting initial value
const checkVal = [];                        //creating empty array
const init = checkVal.push(initVal);        //pushing initial value 
alert(checkVal);                            //alert to check 0 index of array
cred.innerHTML = checkVal;

let spareSomeChange = "OUT OF CREDITS";  // make into element


function customerCreditScore(nt){  
    if(nt === 0){
        
        alert(spareSomeChange);
    }
    else if(nt !== 0){
    }
}
const ops = {
r1 : [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest],  //created object to contain 3 identical
r2 : [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest],
r3 : [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest]
};
function randSlots(){
    row1 = ops["r1"][Math.floor(Math.random()*ops["r1"].length)]; //calling by random
    row2 = ops["r2"][Math.floor(Math.random()*ops["r2"].length)];
    row3 = ops["r3"][Math.floor(Math.random()*ops["r3"].length)];
    return row1 , row2 , row3;
}
let randGive = randSlots(); // making universal 


playBtn.addEventListener("click", ()=>{  //find a way to refresh or empty arrays
randSlots();
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

// cheater.addEventListener("click", function(){
        
// });

// quitBtn.addEventListener("click", function(){

// });