const child = document.getElementById('child');
const parent = document.getElementById('parent');
const grandParent = document.getElementById('grandParent');

child.addEventListener('click',(event)=>{
    //console.log(event.currentTarget.id);
    //console.log(event.target.id);
    console.log("Child Clicked");
},false);

parent.addEventListener('click',(event)=>{
    event.stopPropagation();
    //console.log(event.currentTarget.id);
    //console.log(event.target.id);
    console.log("Parent Clicked");
},false);

grandParent.addEventListener('click',(event)=>{
    //console.log(event.currentTarget.id);
    //console.log(event.target.id);
    console.log("GrandParent Clicked");
},false);