// const first=document.getElementById('first');
// const last=document.getElementById('last');
// const age=document.getElementById('age');

// form.addEventListener('input',(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusin',(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value);
// })
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // const first = document.getElementById("first");
  // const last = document.getElementById("last");
  // const age = document.getElementById("age");

  // const result = document.getElementById("result");

  // //Remove hiddne class
  // result.classList.remove("invisible");

  // result.innerText = `${first.value} ${last.value} ${age.value} is a productive boy`;

  // console.log(first.value);
  // console.log(last.value);
  // console.log(age.value);

  const data = new FormData(form);

  for(let [key,value] of data.entries())
    console.log(`${key} : ${value}`);
  console.log(data);
  console.log(Array.from(data.keys()));
  console.log(Array.from(data.values()));
});
