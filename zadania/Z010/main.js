const iks = document.querySelector('#iks');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let ikswartosc = parseFloat(iks.value);
    let ikswynik = (ikswartosc*ikswartosc) / ((1+ikswartosc)*(1+ikswartosc));

    wynik.innerHTML =
        `
        x = ${ikswartosc} <br>
        wartosc wyrazenia = ${ikswynik} <br>
        `

})