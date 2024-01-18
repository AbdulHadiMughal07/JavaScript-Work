// LOOPS

// For Loop
for(let i=0; i<=10; i++){
    console.log("PJS" , i);
}

for(let a=1; a<=10; a++){
    console.log("5 x", a ,"=", 5*a);
}

let num = 10
// WHILE LOOP
while(num<=15){
    console.log("This Is While Loop" , num);
    num++
}

// let Value = prompt("Enter Number")
//  for(let x=1; x<=10; x++){
//     console.log(`${Value} x ${x} = ${Value*x}`);
// }    

// let Value = prompt("Enter Number")
//  for(let x=1; x<=10; x++){
//     console.log(Value , "x" ,x , "=" ,Value*x);
// }    

 let o = 10;

 do{
    console.log("This Is Do While Loop", o);
    o++
 }while(o<=15);

 let student = {
    Myname : "Hadi",
    Class :"9th",
    city : "Karachi",
    country : "Pakistan",
 }

 for(let z in student){
    console.log(z, student[z]);
 }
