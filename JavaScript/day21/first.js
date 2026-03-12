//<li>TS</li>

//create any element
// function attach(content){
//     const element = document.createElement('li');
//     element.innerHTML = content;

//     const parent = document.getElementById("root");
//     parent.appendChild(element);
// }

// attach("React");
// attach("Frontend");


//attaching only text node - not included in any tag

// const element = document.createTextNode("Hello this is Harsh Tiwari");
// const parent = document.getElementById("root");

// parent.append(element);



//---------------------------------------------------------------
//Create attribute Node

// const element = document.createAttribute("id");
// element.value = "first";

// const curr_list = document.querySelector("li");

// curr_list.setAttributeNode(element);

// curr_list.style.background = "blue";

//---------------------------------------------------------------
//access to any of the list from the parent

// const parent = document.getElementById("root");
// const second_child = parent.children[1];
// const element = document.createAttribute("id");
// element.value = "second list";
// second_child.setAttributeNode(element);

//-----------------------------------------------------------------
//access attribute of a element

// const element = document.getElementById("root");
// console.log(element.getAttribute("id"));
// console.log(element.getAttribute("class"));
// console.log(element.getAttribute("style"));


// element.setAttribute("class","only list");
// console.log(element.getAttribute("class"));

//-----------------------------------------------------------------
//<! Add Nodes to the DOM >

// //consider it as array
// const parent = document.getElementById("root");

// //consider it as data
// const element = document.createElement("li");
// element.innerHTML = "TS";

// //add to the first
// parent.prepend(element);

// const child2 = parent.children[1];
// parent.insertBefore(element,child2);

// //replace child by another
// const new_element = document.createElement("li");
// element.innerHTML = "GitHub";

// parent.replaceChild(child2,new_element)

// const parent = document.getElementById("root");
// parent.innerHTML += "<li>TS</li>";

// const element = document.createElement("div");
// element.innerHTML = "Hello Coder Army";

// parent.insertAdjacentElement("beforebegin",element);


//Delete a node or element
document.querySelector("li").remove();







