const A = parseFloat(prompt('Podaj A: '));
const B = parseFloat(prompt('Podaj B: '));
const wynik = document.querySelector('#wynik')
let Y = 0
    if (A <= 0 && B <=0){
        Y = 0
        document.write('I = 1')
    }
    else if (A <= 0 && B >= 0){
        Y = 1
        document.write('I = 2')
    }
    else if (A > 0 && B <= 0){
        Y = 3
        document.write('I = 3')
    }
    else{
        document.write('I = 4')
        Y = 3
    }
    wynik.innerHTML = `
    
    Y = ${Y} <br>`
