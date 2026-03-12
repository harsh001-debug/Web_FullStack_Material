const text = document.getElementById("quote");


const quotes = [
  "Honesty is the best policy.",
  "Hard work beats talent.",
  "Small steps lead to big success.",
  "Believe in yourself.",
  "Consistency is the key to success.",
  "Learning never stops.",
  "Practice makes progress.",
  "Every day is a new opportunity.",
  "Focus on improvement, not perfection.",
  "Stay positive and work hard.",
  "Success comes from discipline.",
  "Knowledge is power.",
  "Great things take time.",
  "Keep moving forward.",
  "Challenges make you stronger.",
  "Dreams require effort.",
  "Stay curious and keep learning.",
  "Mistakes are part of growth.",
  "Persistence leads to achievement.",
  "Never stop trying."
];


function quote1(){
    const index = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[index];
    
}

setInterval(quote1,2000);
