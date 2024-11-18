const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function()  {

    let liczbaA = parseFloat(liczba.value);
    let Ocena = Math.floor(liczbaA / 10);
    let ocena = 0;
    switch (Ocena) {
        case 10:
            ocena = 5;
        break;
        case 9:
            ocena = 5;
            break;
        case 8:
            ocena = 4.5;
            break;
        case 7:
            ocena = 4;
            break;
        case 6:
            ocena = 3.5;
            break;
        case 5:
            ocena = 3;
            break;
        default:
            ocena = 2;
    }
    wynik.innerHTML =
        `
        Dla wartosci procentowej ${liczbaA} ocena liczbowa wynosi: ${ocena}
        
        
        `

})