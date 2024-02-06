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


let promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : "peter" , email : "peter@gmail.com"})
    },2000)
})

promiseThree.then(function(user){
        console.log(user);
    return user.username;
}).then(function(user){
    console.log(user);
})

let promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "Jake" , password : "4567"})
        }
        else{
            reject("ERROR : SOMTHING WENT WRONG")
        }
    },3000)
})

promiseFour.then(function(myvalue){
    console.log(myvalue);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("FINALLY");
})

