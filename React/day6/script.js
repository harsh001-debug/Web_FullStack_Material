import React,{useState} from "react"
import ReactDOM from "react-dom/client"


function Counter(){
    let [count, setCount] = useState(0); //returns an array
    function incrementnumber(){
        count ++;
        setCount(count);
        console.log(count);
        // document.querySelector('h1').innerText = `Count is : ${count}`;

    }
    
    function decrementnumber(){
        count --;
        setCount(count);
        // document.querySelector('h1').innerText = `Count is : ${count}`;
    }

    return(
        <div className="first"> 
            <h1>Count is : {count}</h1>
            <button onClick={incrementnumber}>Increment {count}</button>
            <button onClick={decrementnumber}>Decrement {count}</button>

        </div>
        
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<Counter/>);