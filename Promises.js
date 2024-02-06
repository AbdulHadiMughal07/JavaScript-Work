// setTimeout(function(){
//    console.log("HELLO WORLD"); 
// },2000)

// setInterval(function(){
//     document.write("wow"); 
//  },2000)

// PromiseOne
let promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("THIS IS PROMISE");
    },2000)
})


// PromiseTwo
let promiseTwo = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({name : "ali" , email : "ali@gmail.com"})
    },2000)
})

promiseTwo.then(function(user){
    console.log(user);
})