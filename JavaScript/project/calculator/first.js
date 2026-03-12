const num1 = document.getElementById("first");
const num2 = document.getElementById("second");

console.log(num1.value);

const button = document.querySelector("button");

button.addEventListener("click",()=>{
    const input1 = document.getElementById("first");
    const input2 = document.getElementById("second");
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);

    const result = number1 + number2;
    const re = document.getElementById("result");
    re.textContent = "Result: " + result;

    console.log(result);
})