AOS.init();
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuote = document.getElementById("newQuote");
let jsonData = "";


const getNewQuote = () =>{
    let rnum = Math.floor(Math.random()*10);  //generate random number

    quotes.innerText = `${jsonData[rnum].text}`;    //show quotes
    author.innerText = `by ${jsonData[rnum].author}`; //show author name
}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api); //fetch the api and wait until we get the result but do not stop any other process

        jsonData = await data.json();  //convert readable stream into JSON object

        getNewQuote();

    } catch (error) { }
};

newQuote.addEventListener('click', getNewQuote); //call getNewQuote on button click

getQuotes();