const A = document.querySelector("#liczbaA")
const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", (e) => {

    let AA = parseFloat(A.value);

    for (let i = 0; i < AA; i++){
        let row = '';
        for (let j = 0; j < AA; j++){
            if (j === AA - i - 1){
                row += '1';
            }
            else {
                row += '0'
            }
        }
    }
    wynik.innerHTML = `${row} `
})