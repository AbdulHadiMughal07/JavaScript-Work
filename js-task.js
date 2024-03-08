let btn = document.getElementById('add-btn');
btn.addEventListener('click' , addFood)
    function addFood(e){
        let currentbtn = e.currentTarget;
        console.log(currentbtn);
        let currentInp = currentbtn.previousElementSibling;
        console.log(currentInp.value);
        let currentFoodName = currentInp.value;
        let newLi = document.createElement('li');
        newLi.className = `list-group-item d-flex justify-content-between`;
        newLi.innerHTML = `
        <h3 class="flex-grow-1">${currentFoodName}</h3>
                <button class=" btn btn-dark mx-2">Read</button>
                <button class=" btn btn-danger ">Delete</button>
        `

        let peranList = document.getElementById('parentList');
        peranList.appendChild(newLi);
        
    };

    // PROMISES
    let thirdPromise = new Promise (function (resolve , reject) {
        setTimeout(function () {
            resolve({ username : "john" , age:15 , car:"aston martin", colour:"yellow"})
        },2000)
    })

    thirdPromise.then(function (user) {
    return user.username;
}).then(function (output) {
    console.log(output)
})
