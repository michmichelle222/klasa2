const a1 = document.querySelector("#ajeden")
const a2 = document.querySelector("#a2")
const b1 = document.querySelector("#b1")
const b2 = document.querySelector("#b2")
const c1 = document.querySelector("#c1")
const c2 = document.querySelector("#c2")
const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button");

addEventListener("click", function () {

    let A1 = parseFloat(a1.value);
    let A2 = parseFloat(a2.value);
    let B1 = parseFloat(b1.value);
    let B2 = parseFloat(b2.value);
    let C1 = parseFloat(c1.value);
    let C2 = parseFloat(c2.value);

    let y = ((C2 * A1) - (C1 * A2))/ ((B2 * A1) - (A2 * B1));
    let x = (C1 - (B1 * y)) / A1;

    wynik.innerHTML =
        `
        A1 = ${A1} <br>
        B1 = ${B1} <br>
        C1 = ${C1} <br>
        A2 = ${A2} <br>
        B2 = ${B2} <br>
        C2 = ${C2} <br>
        x = ${x} <br>
        y = ${y} <br>
  
        
        `



})