let courses = ["JS", "MYSQL", "LARAVEL", "DJANGO", "FLUTTER", "REACT"]
console.log(courses);
courses[3] = "PHP"
console.log(courses);

// Functions
function hello () {
    console.log("Hello World");
}

hello();

// Functions With Parameter
function person (name, age, number){
    return "My Name Is" + " " +  name+ " " + "My Age Is" + " " + age+ " " + "My Phone Number Is"+ " " + " " + number;
}

let userValue = person("Harry", 16, 76563);
    console.log(userValue);

function user (name , age , userClass , Courses){
    return "My Name Is" + " " + name + " " + "My age is" + " " + age + " " + "My Class Is" + " " + userClass + " "  + Courses;
}

let choice = user ("Jake", 12, 10, `"PHP" , "MYSQL", "DJANGO", "FLUTTER", "REACT"` );
console.log(choice);

// let grade = prompt("enter your garde");
// let result = grade == "A"  || garde == "B" || grade == "C" ? "PASS" : "FAIL";
// console.log(result); 

// Turnary Opretars
let grade = prompt("enter your garde");
let per = prompt("enter your persentage");
let result = grade == "A+" && per == 90 || grade == "A" && per == 80 || grade == "C" && per == 70 ? "PASS" : "FAIL";
console.log(result); 


