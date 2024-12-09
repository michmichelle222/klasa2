const A = document.querySelector("#A")
const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", (e) => {

    let AA = parseFloat(liczba.value);
    let result = "";
    for (let i = 2; i <= AA; i +=2){
        result += i + ";"
        if (i +2 <=A) {
            result += ";"
        }
    }
    wynik.innerHTML =
        `
        ${result}
        
        
        
        `









})