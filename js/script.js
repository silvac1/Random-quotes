/******************************************
project 1 - A Random Quote Generator
******************************************/


//This is my array of objects containing all the Quotes

let quotes = [
  { quote: "I'm so fly, when i driveby!", source: "Celso" },
  { quote: "Bum, bum bum ..bum ..bum", source: "Salman", citation: 'Twitter', year: 2000 },
  { quote: "On top of the world", source: "Celso" },
  { quote: "Night time takes so long", source: "Muhammad" },
  { quote: "Baba", source: "jannaat", citation: "Facetime", year: 1990 },
  { quote: "Honey, your so sweet", source: "Majida", citation: "WhatsApp", year: 2019 },
  { quote: "Nothing is impossible, the word itself says “I’m possible”!", source: " Audrey Hepburn" },
  { quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.", source: "Vince Lombardi", citation: 'Google', year: 2019 },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", source: "Stephen Covey" },
  { quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", source: "Amelia Earhart" },
  { quote: "The quickest way to double your money is to fold it over and put it back in your pocket.", source: "Will Rogers", citation: "Facebook", year: 2017 },
  { quote: "The only person you are destined to become is the person you decide to be.", source: "Ralph Waldo Emerson", citation: "WhatsApp", year: 2019 }
];

//Will return a random quote selection

function getRandomQuote() {
    let i = Math.floor(Math.random() * quotes.length);
    let ranNum = quotes[i];
    return ranNum;
}

//Produces and random quote and in new html format while checking if specific property exists

function printQuote() {
  var ranQuote = getRandomQuote();
  var htmlString = '<p class="quote">' + ranQuote.quote + '</p>' + '<p class="source">' + ranQuote.source;
    if ( ranQuote.hasOwnProperty('citation') ) {
      htmlString += '<span class="citation">' + ranQuote.citation + '</span>';
     }
    if ( ranQuote.hasOwnProperty('year') ) {
      htmlString += '<span class="year">' + ranQuote.year + '</span>';
     }
     htmlString + '</p>';

     document.getElementById('quote-box').innerHTML = htmlString;
}

//event addEventListener on the show another qoute button

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
