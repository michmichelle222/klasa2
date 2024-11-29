const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {

    let A = parseFloat(liczba.value);

    for (let i = 0; i < A; i++) {
        let AA =  i +";"
    }
    wynik.innerHTML =
        `
        ${i} ;
        
        `






})