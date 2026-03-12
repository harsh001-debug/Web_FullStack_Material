const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

//event bubbling and even capturing
//by default bubbling runs
// addEventListener(first_event,useCallback,capture)


// //event bubbling :- child->parent->groundparent
// grandParent.addEventListener('click',()=>{
//     console.log("GrandParent Clicked")
// },false);

// parent.addEventListener('click',()=>{
//     console.log("Parent Clicked")
// },false);

// child.addEventListener('click',()=>{
//     console.log("Child Clicked")
// },false);


// //capturing :- grandparent->parent->child
// grandParent.addEventListener('click',()=>{
//     console.log("GrandParent Clicked")
// },true);

// parent.addEventListener('click',()=>{
//     console.log("Parent Clicked")
// },true);

// child.addEventListener('click',()=>{
//     console.log("Child Clicked")
// },true);