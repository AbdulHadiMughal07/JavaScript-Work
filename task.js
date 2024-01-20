// let num = 50;
// for(let i =0; i<=num; i++){
//     if(i%2 ==0){
//         console.log(`${i} is even`)
//     }else{
//         console.log(`${i} is od`)
//     }
// }

let Value = prompt("Enter Your Name");
let subject1 =parseInt( prompt("Enter English Subject Number"));
let subject2 =parseInt( prompt("Enter Islamiat Subject Number"));
let subject3 =parseInt( prompt("Enter Physices Subject Number"));
let subject4 =parseInt( prompt("Enter Urdu Subject Number"));
let subject5 =parseInt( prompt("Enter Math Subject"));
let obtainedMark = subject1 + subject2 + subject3 + subject4 + subject5;
    console.log(obtainedMark);

let per = obtainedMark/500*100
console.log(per);
if(per >=90 && per <=100){
    console.log("YOUR GRADE IS A+");
}else if(per >=80 && per <=90){
    console.log("YOUR GRADE IS A");
}else if(per >=70 && per <=80){
    console.log("YOUR GRADE IS B");
}else if(per >=60 && per <=70){
    console.log("YOUR GRADE IS B+");
}else if(per >=50 && per <=60){
    console.log("YOUR GRADE IS C");
}else if(per >=40 && per <=50){
    console.log("YOUR GRADE IS D");
}else{"YOUR GARDE IS FAIL!"}

// if(per <=100){
//     console.log("A+");
// }if(per <90){
//     console.log("A");
// }if(per <80){
//     console.log("B+");
// }if(per <70){
//     console.log("B");
// }if(per <60){
//     console.log("C");
// }if(per <50){
//     console.log("D");
// }else{console.log("fail");}

    


























