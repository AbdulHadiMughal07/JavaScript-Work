let btn = document.getElementById('toggleBtn');
let body = document.getElementById('body');
let para = document.getElementById('para');


btn.addEventListener('click' , theam);
function theam(){
    if(btn.textContent.includes('Dark')){
        body.style.backgroundColor = "black"
        btn.textContent = "Light"
        para.style.color = "white"
        btn.className = "btn btn-outline-success"
        btn.style.boxShadow = '3px 3px 4px 4px green'
        bulb.style.boxShadow = '3px 3px 4px 4px green'

}else{
    body.style.backgroundColor = "white"
    btn.textContent = "black"
    btn.textContent = "Dark"
    para.style.color = "black"
    btn.className = "btn btn-warning"
    btn.style.boxShadow = '3px 3px 4px 4px red'
    bulb.style.boxShadow = '3px 3px 4px 4px red'
    
}
}
// btn.addEventListener('click' , togglebtn);
//     function togglebtn(){
//         if(btn.textContent.includes('On') && mq.textContent.includes('On')){
//             bulb.src = "on.png";
//             btn.textContent = "Turn Off"
//             mq.textContent = "Turn Off"
//             btn.className = "btn btn-outline-success"
//             btn.style.boxShadow = '3px 3px 4px 4px green'
//             bulb.style.boxShadow = '3px 3px 4px 4px green'
//             mq.style.color = "yellow"
//             mq.style.boxShadow = '3px 3px 4px 4px green'

//         }else{
//             bulb.src = "off.png";
//             btn.textContent = "Turn On"
//             mq.textContent = "Turn On"
//             btn.className = "btn btn-outline-danger"
//             btn.style.boxShadow = '3px 3px 4px 4px red'
//             bulb.style.boxShadow = '3px 3px 4px 4px red'
//             mq.style.color = "red"
//             mq.style.boxShadow = '3px 3px 4px 4px red'
//         }
//     }