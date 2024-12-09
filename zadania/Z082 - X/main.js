const A = document.querySelector("#liczbaA")
const B = document.querySelector("#liczbaB")
const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", (e) => {

    let AA = parseFloat(A.value);
    let BB = parseFloat(B.value);

    let result = "";
    for (let i = 0; i < BB; i++) {
        result += "X".repeat(AA) + "<br>";
    }
    wynik.innerHTML = result;
})