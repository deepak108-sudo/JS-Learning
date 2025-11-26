//----------------Create element--------------
function attach(content){
    const element=document.createElement('li');
    element.innerHTML=content;
    
    
    const parent=document.getElementById('root');
    //parent.appendChild(element); It take only one child
    parent.append(element); //multiple seperated by comma
}

attach("Socrates");
attach("Plato");
attach("Aristotle");

//-----------------Create a text node--------
const textNode=document.createTextNode("Hello All Philosphers");
const parent=document.getElementById("root");
parent.append(textNode);

//-------------Create Attribute--------------
const curr_list=document.createAttribute("id");
curr_list.value="second";

//Accessing firs element
// const sel=document.querySelector('li');
// sel.setAttributeNode(curr_list);

//Accessing second element
const par=document.getElementById("root");
par.children[1].setAttributeNode(curr_list)


//Remove element
document.querySelector('li').remove();
par.children[1].remove();


