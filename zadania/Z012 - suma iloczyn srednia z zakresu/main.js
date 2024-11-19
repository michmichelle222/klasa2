const minimum = document.querySelector('#minimum');
const maximum = document.querySelector('#maximum');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click',function () {

    let min = parseInt(minimum.value);
    let max = parseInt(maximum.value);

    let p1 = Math.floor(Math.random() * (max - min)) + min + 1;
    let p2 = Math.floor(Math.random() * (max - min)) + min + 1;
    let p3 = Math.floor(Math.random() * (max - min)) + min + 1;
    let p4 = Math.floor(Math.random() * (max - min)) + min + 1;
    let p5 = Math.floor(Math.random() * (max - min)) + min + 1;

    let suma = p1 + p2 + p3 + p4 + p4 + p5;
    let iloczyn = p1 * p2 * p3 * p4 * p5;
    let srednia = (p1 + p2 + p3 + p4 + p4 + p5) / 5;

    wynik.innerHTML =
        `
        wylosowane liczby:<br>
        ${p1}<br>
        ${p2}<br>
        ${p3}<br>
        ${p4}<br>
        ${p5}<br>
        
        Suma liczb: ${suma}<br>
        Iloczyn liczb: ${iloczyn}<br>
        Średnia liczb: ${srednia}<br>
        

        `
})