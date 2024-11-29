let liczba = prompt('Podai liczbe: ',0);
let potega = prompt('Podai potege: ',0);

function potega(x,y) {

    let wynik = x ^ y;
    return wynik;
}

document.write('x =  ' + liczba + '<br>');
document.write('y =  ' + potega + '<br>');
document.write('xy = ' + potega(liczba, potega));