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



// PromiseThree
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


// PromiseFour
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


let promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "Mike" , password : "1451"})
        }
        else{
            reject("ERROR IN JS : THE SOMTHING WENT WRONG")
        }
    },1000)
})

async function consumedPromiseFive(){
    try{
        let response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumedPromiseFive()

let promiseSix = new Promise(function(resolve , reject){
    setTimeout(function(){
        let errorOne = false;
        if(!errorOne){
            resolve({name : "Sameer" , email : "Ibrahim@gmail.com"})
        }
        else{
            reject("ERROR SOMETHING WENT WRONG HERE!");
        }
    },3000)
})

promiseSix.then(function(userOne){
    return userOne.email;
})
.then(function(xyz){
    console.log(xyz);
})
.catch(function(errorOne){
    console.log(errorOne);
})
.finally(function(){
    console.log("THE PROMISE HAS BEEN RESOLVE OR REJECTED!");
})

let promiseSeven = new Promise(function(resolve , reject){
    setTimeout(function(){
    let error = false;
    if(!error){
        resolve("This Is WOW")
    }
    else{
        reject("YE EK ERROR HAI")
        }
    },1000)
})

async function consumedPromiseSeven(){
    try{
        let data = await promiseSeven;
        console.log(data)
    }
     catch(error){
        console.log(error);
     }
}

consumedPromiseSeven()