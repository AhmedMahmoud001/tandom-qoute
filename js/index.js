var arrayQuotes = [
    {'person': ' Frank Zappa', 
     'aphorism': 'So many books, so little time.'
    },
    {'person': ' Albert Einstein', 
     'aphorism': 'Two things are infinite: the universe and human stupidity'
    },
    {'person': ' Marcus Tullius Cicero', 
     'aphorism': 'A room without books is like a body without a soul.'
    },
    {'person': 'Bernard M. Baruch', 
     'aphorism': 'Be who you are and say what you feel, because those who mind'
    },
    {'person': 'Dr. Seuss', 
     'aphorism': 'You know your fall asleep because reality is finally better than your dreams.'
    },
    {'person': 'Mae West', 
     'aphorism': 'You only live once, but if you do it right, once is enough.'
    },
];

function QuoteButton(){
    var random= Math.floor(Math.random()*6,arrayQuotes.length + 1);
    document.querySelector('#p1').textContent = `${arrayQuotes[random].aphorism}`;
    document.querySelector('#p2').textContent = `${arrayQuotes[random].person}`;
    
};