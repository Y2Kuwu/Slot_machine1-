let isPlaying = false;
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
const initVal = cred.append = 5;  //setting initial value
const checkVal = []; //creating empty array
const init = checkVal.push(initVal); //pushing initial value 
alert(checkVal); //alert to check 0 index of array
cred.innerHTML = checkVal;
//

//three identical arrays      //moved into function to set    and reset


makeSpace = []; //for resetting length  NOT IMPLEMENTED YET DOES NOT CLEAR

//if(newTot > 0) // << adding preliminary to check or call a function// will add more or remove

//checking for zero value
function customerCreditScore(nt){  
    if(nt === 0){
        isPlaying = false;
        alert("OUT OF CREDITS");
    }
    else{
        isPlaying = true;
    }
}

let slotVal = 
{
slot1: [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest],
slot2: [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest],
slot3: [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest],

//row1 : slot1[Math.floor(Math.random()*slot1.length)], //random res
//row2 : slot2[Math.floor(Math.random()*slot2.length)],
//row3 : slot3[Math.floor(Math.random()*slot3.length)]   << move x1 of these to a seperate function?
};
let slotDeval =
{
slot1: makeSpace,
slot2: makeSpace,
slot3: makeSpace
}
// slot1= [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest];
// slot2 = slot1; 
// slot3 = slot1;

// let row1 = slot1[Math.floor(Math.random()*slot1.length)]; //random res
// let row2 = slot2[Math.floor(Math.random()*slot2.length)];
// let row3 = slot3[Math.floor(Math.random()*slot3.length)];
function randomVal(slotVal){
const randSlot1 = slotVal.slot1;
const randSlot2 = slotVal.slot2;
const randSlot3 = slotVal.slot3;

return randSlot1 , randSlot2, randSlot3[Math.floor(Math.random()*slot3.length)];
}


//slotOutput = [row1,row2,row3]; //new array with three from above    //pull by name of element, display
//row1 , row2, row3 = makeSpace;

playBtn.addEventListener("click", ()=>{  //find a way to refresh or empty arrays

    if(row1 == row2 && row3){ // triple
        alert("triple");
        checkVal.push(5);
        const newTot = checkVal.reduce((prev, curr) => prev + curr, 0);
        alert(newTot);
        cred.innerHTML = newTot;
        customerCreditScore(newTot);
        //customerCreditScore(newTot);    //auto resets but does not count past one loop
        
    }
    else if(row1 == row2 || row1 == row3 || row2 == row3){ //double
        alert("double");
        checkVal.push(1);
        const newTot = checkVal.reduce((prev, curr) => prev + curr, 0);
        alert(newTot);
        cred.innerHTML = newTot;
        customerCreditScore(newTot);
        //customerCreditScore(newTot);
        
    }
    else { //none
        alert("no match");
        checkVal.push(-1);
        const newTot = checkVal.reduce((prev, curr) => prev + curr, 0);
        alert(newTot);
        cred.innerHTML = newTot;
        customerCreditScore(newTot);
       // customerCreditScore(newTot);
        //alert(checkVal);
        
    }
    
});



// retryBtn.addEventListener("click", ()=>

//     row1 , row2, row3 = makeSpace;
// });

