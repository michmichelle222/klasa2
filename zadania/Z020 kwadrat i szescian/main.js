const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {

    let liczbaa = parseFloat(liczba.value);
    let kwadrat = liczbaa * liczbaa;
    let szescian = liczbaa * liczbaa * liczbaa;

    wynik.innerHTML =
        `
        ${liczbaa}<sup>2</sup> = ${kwadrat}<br>
        ${liczbaa}<sup>3</sup> = ${szescian}<br>
        
        
        
        
        `




})