/******************************************
project 1 - A Random Quote Generator
******************************************/


//Array of objects

let quotes = [
  { quote: "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.", source: "Francis of Assisi" },
  { quote: "If you cannot do great things, do small things in a great way.", source: "Napoleon Hill", citation: "Brainyquote", year: "2000", tags: "Inspirational quote" },
  { quote: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.", source: "Princess Diana" },
  { quote: "Night time takes so long, my son protesting sleep", source: "Rayyan" },
  { quote: "Honesty is the first chapter in the book of wisdom.", source: "Thomas Jefferson", citation: "Goggle", year: "1990" },
  { quote: "Honesty is the best policy", source: "Celso", citation: "WhatsApp", year: "2019" },
  { quote: "Nothing is impossible, the word itself says “I’m possible”!", source: " Audrey Hepburn" },
  { quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.", source: "Vince Lombardi", citation: "Google", year: "2019", tags: "Inspirational quote" },
  { quote: "I am not a product of my circumstances. I am a product of my decisions.", source: "Stephen Covey" },
  { quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", source: "Amelia Earhart" },
  { quote: "The quickest way to double your money is to fold it over and put it back in your pocket.", source: "Will Rogers", citation: "Facebook", year: "2017", tags: "Inspirational quote" },
  { quote: "The only person you are destined to become is the person you decide to be.", source: "Ralph Waldo Emerson", citation: "WhatsApp", year: "2019" }
];

//Random quote function

function getRandomQuote() {
    var i = Math.floor(Math.random() * quotes.length);
    var ranNum = quotes[i];
    return ranNum;
}

// Random background color function

function randomBackground() {
  var ranColor = Math.floor(Math.random() * 256)
  return ranColor;
}

//Print function

function printQuote() {

setInterval(printQuote, 7000);
  var a = randomBackground();
  var b = randomBackground();
  var c = randomBackground();
  var abcOfColors = "rgb(" + a + "," + b + "," + c + ")";

  var ranQuote = getRandomQuote();
  var htmlString = '<p class="quote">' + ranQuote.quote + '</p>' + '<p class="source">' + ranQuote.source;
  //conditional checking citation property
    if ( ranQuote.hasOwnProperty('citation') ) {
      htmlString += '<span class="citation">' + ranQuote.citation + '</span>';
     }
  //conditional checking year property
    if ( ranQuote.hasOwnProperty('year') ) {
      htmlString += '<span class="year">' + ranQuote.year + '</span>';
     }
  //conditional checking tags property
    if ( ranQuote.hasOwnProperty('tags') ) {
       htmlString += '<span class="tags">' + ranQuote.tags + '</span>';
     }
      htmlString + '</p>';
  //formatted html string inside the body element
     document.getElementById('quote-box').innerHTML = htmlString;
  //random color assigned
     document.body.style.backgroundColor = abcOfColors;
}
printQuote();
//EventHandler function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
