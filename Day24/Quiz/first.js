const form = document.getElementById("quizForm");
// const original_answer = ["Nietzshe", "Osho", "Jung", "Kierkegaard", "Nietzshe"];

const original_answer = {
  q1: "Nietzsche",
  q2: "Camus",
  q3: "Jung",
  q4: "Kierkegaard",
  q5: "Nietzsche",
};

const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const answer = Array.from(data.values());
  console.log(original_answer);
  console.log(answer);

  //Now check
  let res = 0;
  //   for (let i = 0; i <= answer.length; i++) {
  //     if (original_answer[i] === answer[i]) res++;
  //   }

  for (let [key, value] of data.entries()) {
    if (value === original_answer[key]) res++;
  }

  result.innerText = `${res} out of 5`;

  console.log(res);
});
