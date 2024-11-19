const a = document.querySelector("#a");
const b = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let min = parseInt(a.value);
    let max = parseInt(b.value);

    let losowa1 = Math.floor(Math.random() * (max - min +1)  + min);
    let losowa2 = Math.floor(Math.random() * (max - min +1)  + min);
    let odp = '';
    if (losowa1 > losowa2){
         odp = `${losowa1} > ${losowa2}`;
    }
    else if (losowa1 < losowa2){
         odp = `${losowa1} < ${losowa2}`;
    }
    else{
         odp = `${losowa1} = ${losowa2}`;
    }

    wynik.innerHTML =
        `
        liczby losowane z zakresu : ${min} do ${max} <br>
        liczba losowa 1: ${losowa1} <br>
        liczba losowa 2: ${losowa2} <br>
        ${odp}<br>
        `






})