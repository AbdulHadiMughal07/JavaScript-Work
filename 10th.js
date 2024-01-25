// DOM -> DOCUMENT OBJECT MODULE
let elem = document.getElementById('one');
// console.log(elem);
// elem.innerHTML = "ONCE UPON A TIME!";

// STYLING WITH JS
elem.textContent = "ONCE UPON A TIME!";
elem.style.backgroundColor = "yellow";
elem.style.Color = "black";
elem.style.textAlign = "center";
elem.style.padding = "10px";
elem.style.fontSize = "30px";

// ID KE ANDER CLASS ADD & REMOVE & REPLACE
elem.classList.add('hello');
elem.classList.remove ('hello');

elem.className = ('ReplaceClassName');

let myDiv = document.getElementsByClassName('container');
console.log(myDiv);
myDiv[0].innerHTML = "APPLE";
myDiv[0].style.color = "Purple"
myDiv[0].style.fontSize = "40px"
myDiv[0].id = "first";

let newElem = document.createElement('h4')

myDiv[0].appendChild(newElem);

let myimage = document.createElement('img')
newElem.appendChild(myimage);
myimage.src = "images.jfif"

let myTag = document.getElementsByTagName('h5')
myTag[0].style.backgroundColor = "cyan"
myTag[0].style.fontSize = "40px"
