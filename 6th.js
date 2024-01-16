// ARRAY
let cars = [ "BMW" , "SUPRAMK4" ,  "CIVIC" , "LEGENDER" ];  
console.log(cars);
// ARRAY Ki First Value Prnt Karwane Ka  Tariqa
console.log(cars[1]);
// ARRAY Ke Ander Con Se Value Is Tariqe Se Print Kar Wate Hai
console.log(cars.push("AUDI"));
console.log(cars);
// Pop Apka Array Ke Ander Last Index Ki Value Remove Karta Hai
console.log(cars.pop());
console.log(cars);
// Pop Apka Array Ke Ander First Index Ki Value Remove Karta Hai
console.log(cars.shift());
console.log(cars);
// Unshift Apka Array Ke First Index Ke Ander Is Value Ko Add
console.log(cars.unshift("TESLA"));
console.log(cars);

// SLICE
// Slice Ke Ander Jo AP index Ka number Do ge us se Phlee Walay Tk Index Print Kar wa De GA 
console.log(cars.slice(1,4));
// Splice Ki First index SE Hum Val Targer Karte hai & Second Se Us Ko Remove Karte Hai OR Third Se Jo Value Remove Ki Hoti Hai Uski Jagah Dusri Val Add Karwa Dete Hai
console.log(cars.splice(1,2,"LAMBO"));
console.log(cars);

// Concat Method
let bbq = ["Tikka", "Bihari Boti", "Seekh Kabab", "Chapli Kabab"];
let seafood = ["FISH", "PRAWNS", "LOBSTER"];
let sweetDish = ["Icecream", "Ice Cake", "Gulab jamun"];

let menu = bbq.concat(seaFood , sweetDish);
console.log(menu);



