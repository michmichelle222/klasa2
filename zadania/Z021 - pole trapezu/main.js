const liczbaA = document.querySelector("#liczbaA");
const liczbaB = document.querySelector("#liczbaB");
const liczbaH = document.querySelector("#liczbaH");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {

    let liczbaAA = parseFloat(liczbaA.value);
    let liczbaBB = parseFloat(liczbaB.value);
    let liczbaHH = parseFloat(liczbaH.value);

    let pole =  (liczbaAA + liczbaBB) / 2 * liczbaHH;

    wynik.innerHTML =
        `
        a = ${liczbaAA}<br>
        b = ${liczbaBB}<br>
        h = ${liczbaHH}<br>
        Pole tego trapezu to: ${pole.toFixed(2)}<br>
        
        `



})