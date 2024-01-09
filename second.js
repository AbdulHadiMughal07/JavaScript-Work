// OBJACT
let myDATA = {
    name: "Hadi",
    hadiage:16
}
console.log(myDATA);
// First Method Get Value Print In Object 
console.log(myDATA.name);
// Second Method Get Value Print In Object 
console.log(myDATA["hadiage"]);

// Ager Me Cons Ke Ander Srif i assing Kardo Ga To vo Os Object Ki Sari Key Print Karde Ga
// for(let i in myDATA){
//     console.log(i);
// }


// Ager Me Cons Ke Ander Srif (myDATA[i]) assing Kardo Ga To vo Os Object Ki Sari Value Print Karde Ga
// for(let i in myDATA){
//     console.log(myDATA[i]);
// }

// Ager Me Cons Ke Ander Srif (myDATA[i]) assing Kardo Ga To vo Os Object Ki Sari Value Print Karde Ga
for(let i in myDATA){
    console.log(i ,myDATA[i]);
}