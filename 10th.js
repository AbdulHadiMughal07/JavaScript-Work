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

