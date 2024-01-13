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
};

// Arthmetic Logic Opretar
console.log("Arthmetic Logic Opretar:-");
let x = 30;
let y = 20;

console.log("The Sum Of x+y is " , x+y);
console.log("The Sub Of x+y is " , x-y);
console.log("The mul Of x+y is " , x*y);
console.log("The div Of x+y is " , x/y);
console.log("The modulus Of x+y is " , x%y);

// Pre & Post Increment:-
console.log("Pre & Post Increment:-");
let h = 70;
console.log(h);
// Pre Increment direct add kar ke print karduga
console.log(++h); // 70 + 1 + 71
// Post Increment phle print karoga same value ko phir add karo ga 
console.log(h++); 
console.log(h); // 71 + = 72