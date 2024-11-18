const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let liczbaA = parseFloat(liczba.value);
    let dzien = 0;

    switch (liczbaA) {
        case 1:
            dzien = "poniedzialek"
        break
        case 2:
            dzien = "wtorek"
        break
        case 3:
            dzien = "sroda"
        break
        case 4:
            dzien = "czwartek"
        break
        case 5:
            dzien = "piatek"
            break
        case 6:
            dzien = "sobota"
            break
        case 7:
            dzien = "niedziela"
            break
        default:
            dzien = "nie miesci sie w przedziale"
            break
    }
    wynik.innerHTML =
        `
        podana liczba to: ${liczbaA}<br>
        nazwa dnia tygodnia: ${dzien}<br>
        
        `


})