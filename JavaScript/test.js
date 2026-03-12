function change(arr) {
    // let length = arr.size;
    for(let i = 0;i<3;i++){
        let index = Math.floor(Math.random() * (8 - i));
        console.log(arr[index]);
        let temp = arr[index];
        arr[index] = arr[8-i];
        arr[8-i] = temp;
        
    }
}

let arr = [12,32,2,45,37,10,39,18];
change(arr);