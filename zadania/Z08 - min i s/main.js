const sekundy = document.querySelector('#sekundy');
const godziny = document.querySelector('#godziny');
const minuty = document.querySelector('#minuty');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let sekund = parseFloat(sekundy.value);


    let go = Math.floor(sekund/3600);
    let mi = Math.floor((sekund%3600) / 60);
    let se = (sekund % 3600) % 60;

    wynik.innerHTML =
        `
        Wynik = ${go} g ${mi} m ${se} s
        
        `
})