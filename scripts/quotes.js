
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
    let random = hints[Math.floor(Math.random() * hints.length)];
    quotation.innerText = `"${random.quote}."`;
    localStorage.setItem("quote", `"${random.quote}."`)
    source.innerText = random.source;
    localStorage.setItem("source", random.source);
}