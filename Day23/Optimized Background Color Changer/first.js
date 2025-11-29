// const body=document.body;


// function changeBackground(color){
    
//     body.setAttribute("style",`background-color:${color};`);
// }

// //changeBackground("red");

// const red=document.querySelector('#red');
// const blue=document.querySelector('#blue');
// const green=document.querySelector('#green');
// const orange=document.querySelector('#orange');
// const pink=document.querySelector('#pink');

// red.addEventListener('click',()=>{
//     changeBackground('red');
// })

// blue.addEventListener('click',()=>{
//     changeBackground('blue');
// })
// green.addEventListener('click',()=>{
//     changeBackground('green');
// })
// orange.addEventListener('click',()=>{
//     changeBackground('orange');
// })
// pink.addEventListener('click',()=>{
//     changeBackground('pink');
// })

//----------Optimize with help of bubbling
const box=document.getElementById('root');

box.addEventListener('click',(event)=>{
    document.body.style.backgroundColor=event.target.id
},false)