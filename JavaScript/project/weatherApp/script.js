const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=e420763c472e426ca58163259260803&q=London&aqi=yes`);

promises.then((response)=>{
    const prop2 = response.json();
    prop2.then((data)=>{
        console.log(data.location.name);
    })
})
console.log(promises.then((response)));




