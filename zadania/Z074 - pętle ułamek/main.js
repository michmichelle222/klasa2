const A = document.querySelector("#A")
const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", (e) => {

    AA = parseFloat(liczba.value);
    let result = "";
    if (!Number.isInteger(AA) || AA <= 0){
        result = "liczba musi byc liczba calkowita!"
    }
    else{
        let i = 1;
        while(i <=AA){
            let fraction = `1/${i}`
            let decimal = (1/i).toFixed(6);
            document.write(`${fraction} = ${decimal}` + '<br>');
            i++;
        }
    }
    wynik.innerHTML = result;

})