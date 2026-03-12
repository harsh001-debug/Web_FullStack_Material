let arr = [0,1,2];


// for(let i=0;i<3;i++){
//     console.log(Math.floor(Math.random() * 3));
// }
// console.log(Math.random());

const button = document.querySelector(".start-btn");
console.log(button)

//use eventLishner
const game = ["rock","paper","scissor"];

function checkWinner(p1,p2){ //function is used to check the winner

    //arr[0] = "rock", arr[1] = "paper", arr[2] = "scissor"


    //if both player have same move then draw
    if(p1===p2){
        return "It's a tie";
    }

    //if player1 is rock, then rock can lose from paper only otherwise win
    else if(p1===0){
        if(p2===1){
            return "p2 wins"
        }
        else{
            return "p1 wins"
        }
    }
    //if player1 is paper, then paper can lose from scissor only otherwise win
    else if(p1===1){
        if(p2===2){
            return "p2 wins"
        }
        else{
            return "p1 wins"
        }
    }
    //if player1 is scissor, then scissor can lose from rock only otherwise win
    else if(p1===2){
        if(p2===0){
            return "p2 wins"
        }
        else{
            return "p1 wins"
        }
    }
    

}


button.addEventListener('click',()=>{
    // console.log("This is the start button")
    const p1 = Math.floor(Math.random() * 3);
    console.log()
    const p2 = Math.floor(Math.random() * 3);
    console.log(p1,p2)

    const player1 = document.querySelector("#player1");
    player1.innerHTML = game[p1];

    const player2 = document.querySelector("#player2");
    player2.innerHTML = game[p2];

    const winner = checkWinner(p1,p2);
    // console.log(winner);
    // console.log(typeof winner); -- string datatype

    //now change the innerHTML 
    const result = document.getElementById("result");
    result.textContent = 'Result : ' + winner + "&#128540;";
    
    // result.appendChild(<p style="font-size:100px">&#128540;</p>);

    
})