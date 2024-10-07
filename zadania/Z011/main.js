const wartosc = document.querySelector("#wartosc");
const procent = document.querySelector("#procent");
const btn = document.querySelector("button");
const wynik = document.querySelector("#wynik");

btn.addEventListener("click", function () {

    let war = parseFloat(wartosc.value);
    let pro = parseFloat(procent.value);

    let wynikk = (pro/war) *100;

    wynik.innerHTML =
        `
        ${pro} % z ${war} to: ${wynikk}
        `



})