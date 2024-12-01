const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },

  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },

  {
    text: "Success is not final, Failure is not fatal: It's the courage to continue that counts.",
    author: "Winston Churchhill",
  },

  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Happiness is not something ready-made,it comes from your own action.",
    author: "Dalai Lama",
  },

  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomIndex].text;
  document.getElementById(
    "Author"
  ).innerText = `- ${quotes[randomIndex].author}`;
}

document.getElementById("new-quote").addEventListener("click", newQuote);
newQuote();
