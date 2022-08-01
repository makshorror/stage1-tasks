let hints = [];
const hint = 'scripts/hints.json';
fetch (hint)
    .then (resp => {
        return resp.json ();
    })
    .then (data => hints = data);



function randomQuote() {
    let quotation = document.getElementById("quote");
    let source = document.getElementById("author");
    let random = hints[Math.floor(Math.random() * hints.length)];
    quotation.innerText = `“${random.quote}.”`;
    source.innerText = random.source;

}