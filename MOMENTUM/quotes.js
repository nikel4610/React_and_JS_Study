const quotes = [
    {
        quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
        author: "Kent Beck",
    },
    {
        quote: "Programming is a funny thing. If you haven't figured it out yet, you may not have thought it out yet.",
        author: "John Johnson",
    },
    {
        quote: "The only way to learn a new programming language is by writing programs in it.",
        author: "Dennis Ritchie",
    },
    {
        quote: "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
        author: "Alan Kay",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = randomQuotes.quote;;
author.innerText = randomQuotes.author;