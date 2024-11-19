const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click',function () {



    let liczbaA = parseFloat(liczba.value);
    let ocena = 0;

    switch (liczbaA) {
        case 0:
            ocena = "nieklasyfikowany"
            break
        case 1:
            ocena = "poprawny"
            break
        case 2:
            ocena = "poprawny"
            break
        case 3:
            ocena = "poprawny"
            break
        case 4:
            ocena = "dobry"
            break
        case 5:
            ocena = "dobry"
            break
        case 6:
            ocena = "wyróżniający"
            break
        default:
            ocena = "niewłaściwa liczba";
    }
    wynik.innerHTML =
        `
        podana liczba to : ${liczbaA}<br>
        nazwa oceny: ${ocena}<br>
        
        `
})