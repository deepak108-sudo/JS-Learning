const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
  { text: "Your life is as good as your mindset.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Stay hungry. Stay foolish.", author: "Steve Jobs" },
  { text: "Great things never come from comfort zones.", author: "Anonymous" },
  { text: "Small steps every day lead to big results.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Wesley Snipes" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "Be stronger than your excuses.", author: "Unknown" },
  { text: "Success doesn’t come to you; you go to it.", author: "Marva Collins" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Consistency is what transforms average into excellence.", author: "Unknown" },
  { text: "Winners are not people who never fail, but people who never quit.", author: "Unknown" },
  { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "If you’re going through hell, keep going.", author: "Winston Churchill" },
  { text: "Your only limit is you.", author: "Unknown" },
  { text: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw" },
  { text: "Well done is better than well said.", author: "Benjamin Franklin" },
  { text: "Big journeys begin with small steps.", author: "Unknown" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "You become what you believe.", author: "Oprah Winfrey" }
];

generateQuote();

function generateQuote(){
    const idx=Math.floor(Math.random()*quotes.length);
    const element=document.getElementById('quote');
    element.textContent=quotes[idx].text;
    const author=document.getElementById('author');
    author.textContent="~ "+quotes[idx].author;
}

setInterval(generateQuote,2000);