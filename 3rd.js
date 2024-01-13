// Condition Statement With Age
let age = prompt("Enter Your Age")

if(age >= 18){
    console.log("You Can Drive A Car");
}
if(age < 18){
 console.log("You Can Not Drive A car");
}

// Condition Statement With Mode
let mode = prompt(`Enter Your Fav Color
1) DARK
2) LIGHT`);
let color;

if(mode === "DARK"){
    color = "BLACK"
}if(mode = "LIGHT"){
    color = "WHITE"
}

console.log(color);