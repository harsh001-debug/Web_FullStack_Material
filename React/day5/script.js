import React from "react"
import ReactDOM from "react-dom/client"


const element = <h1>Hello Coder Army</h1>

//JSX: JS Expression
//JSX: statements are not allowed like {let a : 3}

let obj ={
    name:"Harsh Tiwari",
    age:21,
}

//we are passing array - array,but array should not contain any object

const arr = ["Harsh",2004,21];

// props = { //when we pass arguments in Greet tag- then this goes as an
//     name:"harsh tiwari",
//     age:"23",
// }

//only you can pass these things which produce results like array,string,integer...

function Greet(props){
    return <h2>Ram Ram Bhaiya Jee {props.name} and {props.age} </h2>
}

function meet(arr){
    return <h2>Ram Ram Bhaiya Jee - {arr}</h2>
}

const element2 = <Greet name="Harsh Tiwari" age="21"/>
// <Greet/> : Function Call

const element3 = <h1 id="First" className="Second"></h1>
// <div>, <h1> , <ul> - these are html tags
//<G> - user defined tags - whenever we take capital character
const Root = ReactDOM.createRoot(document.getElementById("root"));
// Root.render(element2);

Root.render(element2);
// Root.render(meet(arr));



