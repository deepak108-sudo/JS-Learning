const first = document.getElementById("first");
const second = document.getElementById("second");

const result = document.getElementById("result");

let a = Number(first.value);
let b = Number(second.value);

result.textContent = a + b;

const button=document.querySelector('button');
addEventListener("click", () => {
  let a = Number(first.value);
  let b = Number(second.value);

  result.value = a + b;
});
