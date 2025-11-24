// document.getElementById("second").innerHTML = "No topic covered";
// document.getElementById("first").innerHTML = "Syllabus";

// const obj = document.getElementById("first");
// const obj1 = document.getElementsByClassName("header1");
// obj1[1].style.background("pink");

// const obj2 = document.getElementById("first");
// obj2.style.fontSize = "60px";

//Query selector can select any of either class or id
const id = document.querySelector('#first');
//id.innerHTML = "Helllo Money";

const id2=document.querySelector('.header2');
//console.log(id2);

const obj1=document.querySelector('.header1');
console.log(obj1);

const obj=document.querySelectorAll('.header1');
console.log(obj);

//Iterate
obj.forEach((val)=>{
    console.log(val);
})

//Iterate through for of
for(let val of obj)
    console.log(val);

const ob2=document.getElementsByTagName('h1');
console.log(ob2);

const team=document.getElementsByTagName('li');
console.log(team);

//Select with tag name
for(let i=0;i<team.length;i++)
    team[i].style.color='red'

const team1=Array.from(team);
team1.forEach((val)=>
console.log(val));

//Convert into array
Array.from(team).forEach((val)=>{
    console.log(val);
})

const list=document.querySelector('li');
console.log(list.parentNode);   //Give parent node
console.log(list.parentElement);

//Diff b/w parentNode and parentElement
const par=document.querySelector('ul');
console.log(par);
console.log(par.childNodes);    //consider \n as text
console.log(par.children);
console.log(par.firstChild);
console.log(par.firstElementChild);



//diff between innerHtml. innerText
console.log(obj);

const header=document.querySelector('.header1');
console.log(header.innerHTML); //Shows whole html
console.log(header.innerText);  //Only shows the text on screen
console.log(header.textContent); //Shows also display none element
