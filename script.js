
/*let stuff= document.createElement("div");
stuff.setAttribute("id", 15);
stuff.style.width = "100px";
stuff.style.height = "100px";
stuff.style.background = "red";
stuff.style.color = "white";
stuff.innerHTML = "Hello";
document.getElementById("grid").appendChild(stuff);
document.getElementById("15").style.height= "200";
*/
/*
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
*/
let color = "blue";
let w = 1;
let r = 0;
let pixelNumb = 640000;
let SideLength = 16;

//etch(color,0,1,16);

var selectElement = document.getElementById('colors');
selectElement.selectedIndex = 0;

etch(color, w, r, SideLength);

selectElement.addEventListener("click", function(){
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedValue = selectedOption.value;
    var selectedText = selectedOption.text;
    color = selectedValue;
    console.log(selectedValue)
    etch(color, w, r, SideLength);
})

var cleanSheet = document.getElementById('cleansheet');
cleanSheet.addEventListener('click', function(){
    w = 1;
    r = 0;
    etch(color, w,r, SideLength);
    console.log("white")
})

var randomizeSheet = document.getElementById('randomizesheet');
randomizeSheet.addEventListener('click', function(){
    w = 0;
    r = 1;
    etch(color, w,r, SideLength);
    console.log("randomize")
})

var selectSize = document.getElementById('size');
selectSize.selectedIndex = 1;

selectSize.addEventListener("click", function(){
    var selectedOption = selectSize.options[selectSize.selectedIndex];
    var selectedValue = selectedOption.value;
    var selectedText = selectedOption.text;
    SideLength = selectedValue;
    console.log(SideLength);
    etch(color,w,r, SideLength);
})


function etch(color1,w,r, SideLength1){

let parentElement = document.getElementById('grid');     
parentElement.innerHTML = "";

let a = 0;
let mousedownCounter = 0;
let counterX = SideLength1;
let counterY = SideLength1;
let SizeXY = (pixelNumb/SideLength1/SideLength1)**0.5;
let counter = 0;
for ( let i = 0; i < counterX; i++){
    for(let j = 0; j <counterY; j++){
        let cell= document.createElement("div");
        cell.style.width = SizeXY+"px";
        cell.style.height = SizeXY + "px";
        
        
        cell.style.boxSizing = "border-box";
        counter++;  
        cell.setAttribute("id", counter);
        cell.setAttribute("class", "innerDiv");
        document.getElementById("grid").appendChild(cell);

        var tile = document.getElementById(counter);
        tile.style.cursor = 'pointer';

        if(w == 1){
            tile.style.background = "white";
        }
        if(r == 1){
            tile.style.background = "#" + randomColor();  
        }

        tile.onclick = function() {
            //this.style.backgroundColor = 'blue';
        };

        tile.onmousedown = function(){
            console.log("mousedown")
            this.style.background = color1;
            mousedownCounter = 1;
        }
        
        tile.onmouseup = function(){
            console.log("mouseup")
            mousedownCounter = 0;
        }
        tile.onmouseover = function(){
            this.style.border = '1px solid black';
        

            if(a == 1 || mousedownCounter == 1){
                this.style.backgroundColor = color1;
            }
        }

        tile.onmouseout = function(){
            this.style.border = '0px solid black';
        }
        
        tile.ondragstart = () => {
            return false;
        }

        tile.addEventListener("mousedown", function(){
            //this.style.backgroundColor = 'yellow';
        })
        
    }
}
}


window.addEventListener("keydown", function(e){
    if(e.key == "a"){
        
        if(a == 0){
            a = 1;
            
    }
}})

window.addEventListener("keyup", function(e){
    if(e.key == "a"){
        if (a == 1){
            a = 0;
        }
    }
})


/*
$('#grid .innerDiv').on('mousedown mouseup', function mouseState(e) {
    if (e.type === "mousedown") {
        console.log("Hold started");
        $(this).text();
        $(this).css('background-color', 'yellow');
        $(this).addClass("active");
    } else {    
        console.log("Hold released");
        $(this).text();
        $(this).removeClass("active");
    }
});
*/


function randomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}
/*let grid = document.querySelector(".grid");
let counterX = 16;
let counterY = 16;
let i = 5;
let j = 5;
let stuff= document.createElement("stuff");
const newContent = document.createTextNode("Hi there and greetings!");
stuff.appendChild(newContent);
        stuff.setAttribute("id", i + j);
        let test = document.querySelector(".item1");
      document.getElementById("10").style.height= "200";
        //document.getElementById("10").style.width= "200";


for ( let i of counterX){
    for(let j of counterY){
        let stuff= document.createElement("stuff");
        stuff.setAttribute("id", i + j);
        let test = document.querySelector(".item1");
        document.getElementById("item1").style.height= "200";
        document.getElementById("item1").style.width= "200";
    }

}

/*
let item1 = document.querySelector(".item1");


let stuff= document.createElement("stuff");
stuff.setAttribute("id", "23");
setTimeout(() => {
    document.getElementById("23").style.backgroundColor = "red";
}, 2000);



grid.appendChild(stuff);

*/