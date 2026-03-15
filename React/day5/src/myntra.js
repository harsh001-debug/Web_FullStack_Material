import React from "react"
import ReactDOM from "react-dom/client"
import Card from "./components/card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import arr from "./utils/dummy"
import {greet as goa,meet as meo} from "./utils/dummy"




function App(){
    return(<>
        
        <Header/>
        
        <div className = "middle"style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
            <div id="sort">
            <button>Sort Price</button>
            </div>

            {/* document.getElementById("sort"). */}
            {/* <Card cloth="T-shirt" offer="20-80%off"/>
            <Card cloth="Jeans" offer="20-80%off"/>
            <Card cloth="Pajama" offer="20-80%off"/>
            <Card cloth="Kurta" offer="20-80%off"/>
            <Card cloth="Shirt" offer="20-80%off"/>
            <Card cloth="T-shirt" offer="20-80%off"/>
            <Card cloth="T-shirt" offer="20-80%off"/>
            <Card cloth="T-shirt" offer="20-80%off"/>
            <Card cloth="T-shirt" offer="20-80%off"/>
             */}

            {
                // it will an array
                arr.map((value,index) => <Card key={index} cloth = {value.cloth} offer = {value.Offer}/>)
            }
            
        </div>
        <Footer/>
        
    </>
        
    )
        
    
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);




