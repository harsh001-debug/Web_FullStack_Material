const timer = document.getElementById("root");
function timing(){
    
    const now = new Date();
    const IndianTime = now.toLocaleTimeString() + " PM" ;
    timer.innerHTML = IndianTime;
    

}

setInterval(timing,1000);

timer.style.fontSize = "100px";
timer.style.display = "flex";
timer.style.height = "80vh";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
timer.style.background = " rgb(24, 7, 52)";