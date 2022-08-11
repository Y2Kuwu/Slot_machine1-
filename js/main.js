

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
const shine1 = document.getElementById("star1").src = "symbols_custom/star.jpg";  // to grab url and id into var
const rock1 = document.getElementById("star1").src = "symbols_custom/diamon.jpg";  // to grab url and id into var
const coldBlood1 = document.getElementById("star1").src = "symbols_custom/snek.jpg";  // to grab url and id into var
const tri1 = document.getElementById("star1").src = "symbols_custom/pyramids.jpg";  // to grab url and id into var
const ingot1 = document.getElementById("star1").src = "symbols_custom/goldBars.jpg";  // to grab url and id into var
const dagger1 = document.getElementById("star1").src = "symbols_custom/daggers.jpg";  // to grab url and id into var

// const shine1 = document.querySelector("star1");
// const rock1 = document.querySelector("diamond1");
// const coldBlood1 = document.querySelector("snake1");
// const cat1 = document.querySelector("sphnix1");
// const tri1 = document.querySelector("pyramid1");       //KEEP
// const scope1 = document.querySelector("eye1");
// const ingot1 = document.querySelector("goldBar1");
// const dagger1 = document.querySelector("knife1");
// const lord1 = document.querySelector("king1");
// const lady1 = document.querySelector("queen1");
// const jest1 = document.querySelector("jester1");
//
let row1;
let row2;
let row3;


//img.

//setting value tracker as array
const initVal = cred.append = 5;            //setting initial value
const checkVal = [];                        //creating empty array
const init = checkVal.push(initVal);        //pushing initial value 
//alert(checkVal);                            //alert to check 0 index of array
cred.innerHTML = checkVal;

const checkSym = [];


let spareSomeChange = "OUT OF CREDITS";  // make into element


function customerCreditScore(nt){  
    if(nt === 0){
        
        alert(spareSomeChange);
    }
    else if(nt !== 0){
    }
}
const ops = {
// r1 : [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest],  //created object to contain 3 identical
// r2 : [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest],
// r3 : [shine , rock , coldBlood , cat , tri, scope , ingot , dagger , lord , lady , jest],
r1 : [shine , rock , coldBlood ,   tri,   ingot , dagger ],  //DELETE AND ADD ABOVE
r2 : [shine , rock , coldBlood   , tri,   ingot , dagger ],
r3 : [shine , rock , coldBlood   , tri,   ingot , dagger ],
//r_1: ["shine" , "rock" , "coldBlood" , "cat" , "tri" , "scope" , "ingot" , "dagger" , "lord" , "lady" , "jest"],
r_1: [shine1 , rock1 , coldBlood1  , tri1  , ingot1 , dagger1 ] //DELETE AND ADD ABOVE
//r_2: ["shine" , "rock" , "coldBlood" , "cat" , "tri" , "scope" , "ingot" , "dagger" , "lord" , "lady" , "jest"],
//r_3: ["shine" , "rock" , "coldBlood" , "cat" , "tri" , "scope" , "ingot" , "dagger" , "lord" , "lady" , "jest"],

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
    //alert(r1);   //shows index
    //alert(r2);
    //alert(r3);
    //alert(ops.r_1[r1]); shows element at r1 var index
    //alert(ops.r_1[r1]);
    //alert(ops.r_1[r2]);
    //alert(ops.r_1[r3]);
   // os2.setAttribute("style", "background-color:red;");
    alert(ops.r_1[r2]);  //now grabbing by link


    // const img2 = new Image(50,50);
    // img2.src = ops.r_1[r2];
    // document.appendChild(img2);

     const img2 = document.createElement("img");
     img2.src = ops.r_1[r2];
     document.body.appendChild(img2);
    

    // let source1 = document.createElement("img"),
    // containIt = document.getElementById(im2)

    // let i1 = ops.r_1[r2];
    // const img2 = document.createElement("img");
    // img2.id = "imgSlot2";
    // const img2AddContent = document.createTextNode(i1);
    // img2.appendChild(img2AddContent);
    // const parentSpace2 = os2.parentNode;
    // parentSpace2.replaceChild(img2, os2);
    



   // img1.src = ops.r_1[r2];
   // os2.appendChild(img2);

    //const rowReplace1 = document.createElement("img");
    //rowReplace1.src = ""
}
makeSymbolVis(row1 , row2, row3);

// let showSyms = rowManager.map(show => {
// let li = document.createElement("li");  //createLiX3
// li.textContent = show;
// return li;
// });
//rowManager.append();

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
cheater.addEventListener("click", function(){ //allows for loss without point reduction
        checkVal.push(1);
});

// quitBtn.addEventListener("click", function(){

// });