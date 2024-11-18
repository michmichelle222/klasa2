const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {

    let liczbaA = parseFloat(liczba.value);
    let dni = 0;

    switch (liczbaA) {
        case 1:
            dni = 31;
            break
        case 3:
            dni = 31;
            break
        case 5:
            dni = 31;
            break
        case 7:
            dni = 31;
            break
        case 8:
            dni = 31;
            break
        case 10:
            dni = 31;
            break
        case 12:
            dni = 31;
            break
        case 4:
            dni = 30;
            break
        case 6:
            dni = 30;
            break
        case 9:
            dni = 30;
            break
        case 11:
            dni = 30;
            break
        case 2:
            dni = 28;
            break
        default:
            dni = "liczba nie mieści się w przedziale"
            break
    }
    wynik.innerHTML =
        `
        Podana liczba to: ${liczbaA}<br>
        Ilość dni w miesiącu: ${dni}
        
        `


})