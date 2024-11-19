const kat = document.querySelector('#kat');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {

    let wartosc = parseFloat(kat.value);
    let rad = (Math.PI / 180);

    wynik.innerHTML =
        `
        Wynik dla podanej wartości kątowej ${wartosc}<sup>o</sup> = ${rad} radianów <br>
        
        
        `

})