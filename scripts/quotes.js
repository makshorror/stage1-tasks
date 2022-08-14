
let hints = [];
const hint = 'scripts/hints.json';
fetch (hint)
    .then (resp => {
        return resp.json ();
    })
    .then (data => hints = data)
    .then ((data) => {
        randomQuote();
    })
const btn_ref = document.getElementById("change-quote");
btn_ref.addEventListener("click", randomQuote);


function randomQuote() {
    let quotation = document.getElementById("quote");
    let source = document.getElementById("author");
    let random = hints.EN[Math.floor(Math.random() * hints.EN.length)];
    quotation.innerText = `"${random.text}."`;
    source.innerText = random.author;
}