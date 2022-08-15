//button list
const playBtn = document.getElementById("playButton");
const cheater = document.getElementById("cheatButton");
const quitBtn = document.getElementById("quitButton")

//current balance
let cred = document.querySelector("#balance");

//image slots
let os1 = document.querySelector("#openSlot1");
let os2 = document.querySelector("#openSlot2");
let os3 = document.querySelector("#openSlot3");

let gameOver = document.querySelector("#houseAlwaysWins");
gameOver.style.visibility = 'hidden';


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

//img files
const shine1 = document.getElementById("star1").src = "symbols_custom/star_updated.jpg";  // to grab url and id into var
const rock1 = document.getElementById("diamond1").src = "symbols_custom/rock_updated.jpg";  
const coldBlood1 = document.getElementById("snake1").src = "symbols_custom/snek_updated.jpg";  
const tri1 = document.getElementById("pyramid1").src = "symbols_custom/pyramids_updated.jpg";  
const ingot1 = document.getElementById("goldBar1").src = "symbols_custom/gold_bars_updated.jpg";  
const dagger1 = document.getElementById("knife1").src = "symbols_custom/daggers_updated.png";  

//vars for storing ops' obj arrays as random
let row1;
let row2;
let row3;

let i1;
let i2;
let i3;



//setting value tracker as array
const initVal = cred.append = 5;            //setting initial value
const checkVal = [];                        //creating empty array
const init = checkVal.push(initVal);        //pushing initial value 
//alert(checkVal);                            //alert to check 0 index of array
cred.innerHTML = checkVal;


let spareSomeChange = "OUT OF CREDITS";  // make into element


let pull = new Audio("sound_FX/pulling-chain-43770.mp3");
let very_win = new Audio("sound_FX/very_good.m4v");  
let hory = new Audio("sound_FX/hory_shid.m4v");
let lose = new Audio("sound_FX/loser.m4v")

function customerCreditScore(nt){  
    if(nt === 0){
        
        alert(spareSomeChange);
        playBtn.disabled = true;
        gameOver.style.visibility = 'visible';

  
    }
    else if (nt !== 0)
    {
        destroy(i1,i2,i3);
        makeSymbolVis();
        gameOver.style.visibility = 'hidden';

    }
}
const ops = {
// r1 : [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest],  //created object to contain 3 identical
r1 : [shine , rock , coldBlood , tri , ingot , dagger ],  //USE ABOVE WHEN ALL ASSETS COMPLETE
r2 : [shine , rock , coldBlood , tri , ingot , dagger ],
r3 : [shine , rock , coldBlood , tri , ingot , dagger ],
//r_1: ["shine" , "rock" , "coldBlood" , "cat" , "tri" , "scope" , "ingot" , "dagger" , "lord" , "lady" , "jest"], // USE WHEN ALL ASSETS COMPLETE
r_1: [shine1 , rock1 , coldBlood1  , tri1  , ingot1 , dagger1 ]


};
function randSlots(){
    row1 = ops["r1"][Math.floor(Math.random()*ops["r1"].length)]; //calling by random
    row2 = ops["r2"][Math.floor(Math.random()*ops["r2"].length)];
    row3 = ops["r3"][Math.floor(Math.random()*ops["r3"].length)];
    //console.log(row1,row2,row3);    //to show match names in pres
}

let randGive = randSlots(); // making universal 

function makeSymbolVis(r1, r2, r3){
randSlots();  //calling from within
    //slots to change are :os1 os2 os3
    r1 = ops.r1.indexOf(row1);
    r2 = ops.r2.indexOf(row2);
    r3 = ops.r3.indexOf(row3);

    //alert(r1);   //SHOWS INDEX
    
    //alert(ops.r_1[r1]); SHOWS ELEMENT AT r1 VAR INDEX
    
    //alert(ops.r_1[r2]);  //GRABS BY NAME/ PATH

    //set image in place (destroy after use)
    
     const img1 = document.createElement("img");
     const img2 = document.createElement("img");
     const img3 = document.createElement("img");
    

     img1.src = ops.r_1[r1];
     img2.src = ops.r_1[r2];
     img3.src = ops.r_1[r3];
    
     os1.appendChild(img1);
     os2.appendChild(img2);
     os3.appendChild(img3);
     
    
    img1.setAttribute("width" ,50);    //one of my biggest issues was setting size and location
    img1.setAttribute("height" ,50)     //instead of hiding and showing just creates new element in place of slot elements
    img2.setAttribute("width" ,50);    
    img2.setAttribute("height" ,50);
    img3.setAttribute("width" ,50);    
    img3.setAttribute("height" ,50);
    
    i1 = img1;
    i2 = img2;
    i3 = img3;

    return i1,i2,i3;
}
let vision = makeSymbolVis();  //changing scope

function destroy(ii1,ii2,ii3){
    os1.removeChild(ii1);
    os2.removeChild(ii2);
    os3.removeChild(ii3);
};



playBtn.addEventListener("click", ()=>{  //arrow function after button push calls back to randSlots()
pull.play();

    if(row1 == row2 && row2 == row3){ // triple
        alert("triple");
        checkVal.push(5);
        const newTot = checkVal.reduce((prev, curr) => prev + curr, 0);
        cred.innerHTML = newTot;
        hory.play();
        customerCreditScore(newTot);
    }
    else if(row1 == row2 || row2 == row3 || row1 == row3){ //double
        alert("double");
        checkVal.push(1);
        const newTot = checkVal.reduce((prev, curr) => prev + curr, 0);
        cred.innerHTML = newTot;
        very_win.play();
        customerCreditScore(newTot);
    }
    else { //none
        alert("no match");
        checkVal.push(-1);
        const newTot = checkVal.reduce((prev, curr) => prev + curr, 0);
        cred.innerHTML = newTot;
        lose.play();
        customerCreditScore(newTot); 
    }
});



cheater.addEventListener("click", function(){ //+1 regardless of outcome
        checkVal.push(1);
});