
let names = document.querySelector(".name");

names.addEventListener("input", function (){
    setLocalStorage("name", names.value);
})

if (names.value !== getLocalStorage("name")) names.value = getLocalStorage("name");





// LocalStorage //
function setLocalStorage(name,input) {
    localStorage.setItem(name, input);
}
function getLocalStorage(name) {
    return localStorage.getItem(name);
}



