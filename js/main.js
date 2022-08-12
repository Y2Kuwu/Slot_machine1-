


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


let row1;
let row2;
let row3;

//setting value tracker as array
const initVal = cred.append = 5;            //setting initial value
const checkVal = [];                        //creating empty array
const init = checkVal.push(initVal);        //pushing initial value 
//alert(checkVal);                            //alert to check 0 index of array
cred.innerHTML = checkVal;
let swap = false;

let spareSomeChange = "OUT OF CREDITS";  // make into element


function customerCreditScore(nt){  
    if(nt === 0){
        
        alert(spareSomeChange);
    }
}
const ops = {
// r1 : [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest],  //created object to contain 3 identical
// r2 : [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest],
// r3 : [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest],
r1 : [shine , rock , coldBlood ,   tri,   ingot , dagger ],  //DELETE AND ADD ABOVE
r2 : [shine , rock , coldBlood   , tri,   ingot , dagger ],
r3 : [shine , rock , coldBlood   , tri,   ingot , dagger ],
//r_1: ["shine" , "rock" , "coldBlood" , "cat" , "tri" , "scope" , "ingot" , "dagger" , "lord" , "lady" , "jest"], // ADD BACK WHEN DONE WITH ASSETS
r_1: [shine1 , rock1 , coldBlood1  , tri1  , ingot1 , dagger1 ] //DELETE 


};
function randSlots(){
    row1 = ops["r1"][Math.floor(Math.random()*ops["r1"].length)]; //calling by random
    row2 = ops["r2"][Math.floor(Math.random()*ops["r2"].length)];
    row3 = ops["r3"][Math.floor(Math.random()*ops["r3"].length)];
    //console.log(row1,row2,row3);    //to show match names in pres
    return row1 , row2 , row3;
}

let randGive = randSlots(); // making universal 

function makeSymbolVis(r1, r2, r3){
    
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
    
}
let vision = makeSymbolVis();  //changing scope

playBtn.addEventListener("click", ()=>{  //arrow function after button push calls back to randSlots()
randSlots();  //calling from within

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


cheater.addEventListener("click", function(){ //+1 regardless of outcome
        checkVal.push(1);
});
