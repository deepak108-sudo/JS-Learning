// const first=document.getElementById('first');
// const last=document.getElementById('last');
// const age=document.getElementById('age');

const form = document.querySelector("form");

// form.addEventListener('input',(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusin',(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value);
// })

form.addEventListener("submit", (event) => {
    event.preventDefault();
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const age = document.getElementById("age");

  const result=document.getElementById('result');
  
    result.innerText=`${first.value } ${last.value} ${age} is a productive boy`;

  console.log(first.value);
  console.log(last.value);
  console.log(age.value);
});
