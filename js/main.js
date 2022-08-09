let isPlaying = false;
const playBtn = document.getElementById("playButton");
const retryBtn = document.getElementById("retryButton");
const quitBtn = document.getElementById("quitButton")

//let totCred = document.getElementById("credCounter");
let cred = document.querySelector("#balance");

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

const initVal = cred.append = 5;  //setting initial value
const checkVal = []; //creating empty array
const init = checkVal.push(initVal); //pushing initial value 
alert(checkVal); //alert to check 0 index of array

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
        return credArray[1];
       
    }
    else if(row1 == row2 || row1 == row3 || row2 == row3){ //double
        alert("double");
        
        return credArray[0];
    }
    else { //none
        alert("no match");
        
        return credArray[2];
    }

});
function counter(){
    cred.setAttribute("value", 4)
}
counter();


retryBtn.addEventListener("click", function(){

});









//newVal = credArray[2];
        //cred.append(cred + 1);
        //changeVal.value = "4";
        //cred.value = attribute.value;




        //cred.setAttribute("value" + credArray[2]);
        //newVal = credArray[0];
        //cred.append(cred + credArray[count]);





         //newVal = credArray[1];
        //cred.append(cred + credArray[count]);