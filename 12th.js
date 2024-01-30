let btn = document.getElementById('add-btn');
btn.addEventListener('click' , addFood)
    function addFood(e){
        let currentbtn = e.currentTarget;
        console.log(currentbtn);
        let currentInp = currentbtn.previousElementSibling;
        console.log(currentInput.value);
        let currentFoodName = currentInput.value;
        let newLi = document.createElement('li');
        newLi.className = `list-group-item d-flex justify-content-between`;
        newLi.innerHTML = `
        <h3 class="flex-grow-1">BURGER</h3>
                <button class=" btn btn-dark mx-2">Read</button>
                <button class=" btn btn-danger ">Delete</button>
        `

        let peranList = document.getElementById('parentList');
        peranList.appendChild(newLi);
        
    }
