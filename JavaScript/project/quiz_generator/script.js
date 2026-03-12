// <! Data to be stored >

// obj1 = {
//     Question : "Who has the most centuries in international cricket?",
//     options : ["Sachin Tendulakar","Virat Kohli","Ricky Pointing","Jacque Kallis"],
//     answer : "Sachin Tendulkar",
// }

// const questionbank = [obj1,obj2,obj3,...obj20];


const questionbank = [
    {
        question: "Who has the most centuries in international cricket?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: "Au"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "Which country is the largest by total land area?",
        options: ["China", "USA", "Canada", "Russia"],
        answer: "Russia"
    },
    {
        question: "How many bones are in the adult human body?",
        options: ["186", "206", "250", "312"],
        answer: "206"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
        answer: "Nile"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
        answer: "Canberra"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Vincent van Gogh"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "How many players are there in a standard football (soccer) team?",
        options: ["9", "10", "11", "12"],
        answer: "11"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Who was the first person to walk on the Moon?",
        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
        answer: "Neil Armstrong"
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "San Marino", "Maldives", "Vatican City"],
        answer: "Vatican City"
    },
    {
        question: "Which organ in the human body produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Heart"],
        answer: "Pancreas"
    },
    {
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        answer: "1945"
    },
    {
        question: "What is the speed of light (approx) in km/s?",
        options: ["1,00,000", "3,00,000", "5,00,000", "9,00,000"],
        answer: "3,00,000"
    },
    {
        question: "Which is the most spoken language in the world?",
        options: ["English", "Hindi", "Spanish", "Mandarin Chinese"],
        answer: "Mandarin Chinese"
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which blood type is known as the universal donor?",
        options: ["A+", "B+", "AB+", "O-"],
        answer: "O-"
    }
];

function RandomQuestion(){

    // const answer = [];
    // const index = Math.floor(Math.random() * 20);


    //Use set for unique objects
    const  data = new Set();

    while(data.size != 5){
        const index = Math.floor(Math.random() * 20);
        data.add(questionbank[index]);
    }
    return [...data];
}

//select the form and insert all the elements into it

const form = document.querySelector("form");
const problem = RandomQuestion();

const original_answer = {};

problem.forEach((obj,index)=>{
    
    const div_element = document.createElement("div");
    div_element.className = "question";
    original_answer[`q${index+1}`] = obj[`answer`];


    const para = document.createElement('p');
    para.textContent = `${index+1}. ${obj['question']}`;
    div_element.appendChild(para);

    //create for options
    obj["options"].forEach((data)=>{
        const label = document.createElement('label');
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${index+1}`;
        input.value = data;
        label.appendChild(input);
        label.appendChild(document.createTextNode(data));
        div_element.appendChild(label);
        div_element.appendChild(document.createElement("br"));
    })

    form.insertBefore(div_element, form.lastElementChild);


    form.addEventListener('submit',(event)=>{
        event.preventDefault();

        console.log("working");

        // let result = 0;
        // for(let [key,value] of data.entries())
        // {
        //     if(value === original_answer[key])
        //         result++;
        // }

        // const out = document.getElementById("result");
        // out.innerText = `${result} out of 5 is correct.`;
        // console.log("done");

    
    })

})




