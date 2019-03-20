/******************************************
project 1 - A Random Quote Generator
******************************************/


//Array of objects

let quotes = [
  { quote: "I'm so fly, when i driveby!", source: "Celso" },
  { quote: "Bum, bum bum ..bum ..bum", source: "Salman", citation: 'Twitter', year: 2000, tags: 'Funny quote' },
  { quote: "On top of the world", source: "Celso" },
  { quote: "Night time takes so long", source: "Muhammad" },
  { quote: "Baba", source: "jannaat", citation: "Facetime", year: 1990 },
  { quote: "Honey, your so sweet", source: "Majida", citation: "WhatsApp", year: 2019 },
  { quote: "Nothing is impossible, the word itself says “I’m possible”!", source: " Audrey Hepburn" },
  { quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.", source: "Vince Lombardi", citation: 'Google', year: 2019, tags: 'Inspirational quote' },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", source: "Stephen Covey" },
  { quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", source: "Amelia Earhart" },
  { quote: "The quickest way to double your money is to fold it over and put it back in your pocket.", source: "Will Rogers", citation: "Facebook", year: 2017, tags: 'Inspirational quote' },
  { quote: "The only person you are destined to become is the person you decide to be.", source: "Ralph Waldo Emerson", citation: "WhatsApp", year: 2019 }
];

//Random quote function

function getRandomQuote() {
    var i = Math.floor(Math.random() * quotes.length);
    var ranNum = quotes[i];
    return ranNum;
}

function randomBackground() {
  var ranColor = Math.floor(Math.random() * 256)
  return ranColor;
  console.log(ranColor);
}

//Print function

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

//EventHandler function

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
