console.log("hello i am new first");

setTimeout(()=>{
    console.log("This is callback function");
},10);

let timer = 0;
function greet(){
    console.log("Hello everyone");
    timer++;
    console.log(timer);
}

setInterval(greet,2000);
console.log("This is last");