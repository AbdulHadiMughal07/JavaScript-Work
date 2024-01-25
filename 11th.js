let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "Hello World";
elem[0].style.background = ('tomato');
elem[0].style.height = ('400px');
elem[0].style.width = ('800px');

// let newElem = document.createElement('button');
// newElem.innerHTML = "Click Here"

// elem[0].appendChild(newElem);
// newElem.style.display = "block";
// newElem.className = "btn btn-dark";
// newElem.style.boxShadow = "3px 3px 4px 4px yellow";
// newElem.style.fontSize = "40px"
// newElem.style.letterSpacing = "10px";

// newElem.addEventListener('click' , pencil );
//     function pencil(){
//         console.log("The button is clicked!");
//         newElem.textContent = "WOW"
//     }

let newInp = document.createElement('input');
newInp.className = "form-control , mt-3"
elem[0].appendChild(newInp);

newInp.addEventListener('keyup' , keyboard);
    function keyboard(){
        console.log("Key Press");
    }

    let newElem = document.createElement('button');
    newElem.innerHTML = "Clean"
    
    elem[0].appendChild(newElem);
    newElem.style.display = "block";
    newElem.className = "btn btn-dark";
    newElem.style.boxShadow = "3px 3px 4px 4px yellow";
    newElem.style.fontSize = "40px"
    newElem.style.letterSpacing = "10px";

    newElem.addEventListener('click' , pencil );
    function pencil(){
        newInp.value = "";
        newElem.textContent = "wow"
    }







