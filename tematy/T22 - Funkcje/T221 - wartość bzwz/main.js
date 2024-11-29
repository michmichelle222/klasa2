let liczba = prompt('Podaj liczbe: ', 0)

function wartosc_bzw(a){

    if (a > 0) return a;
    else return a*(-1);
}
function wartosc_bzw2(a){
    let wynik = (a>0) ? a: -a;
    return wynik;
}

document.write('twoja liczba wynosi: ' + liczba + '<br>');
document.write('wartosc bezwzgledna wynosi: ' + wartosc_bzw2(liczba));
