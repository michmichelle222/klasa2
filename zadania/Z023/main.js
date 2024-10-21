const wartoscA = document.querySelector("#wartoscA");
const wartoscB = document.querySelector("#wartoscB");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function() {

    let wartA = parseFloat(wartoscA.value);
    let wartB = parseFloat(wartoscB.value);

    let AA = wartA/2;
    let H = Math.sqrt((wartB*wartB)-(AA*AA));


    wynik.innerHTML =
        `
        A = ${wartA} <br>
        B = ${wartB} <br>
        Wynik = ${H}<br>
        
        `

})