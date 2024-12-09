let waga = document.querySelector('#waga')
let wzrost = document.querySelector('#wzrost')
let wynik = document.querySelector('#wynik')
let btn = document.querySelectorAll('button')

function klakulatorBmi(Waga, Wzrost) {
    let bmi = Waga/ (Wzrost * Wzrost);
    return bmi;
}
function klasyfikacja(bmi) {
    if (bmi < 16)
        document.write('Twoje bmi wynosi: ' + bmi + '<br>' + 'Oznacza to wygłodzenie')
    else if (bmi >= 16 && bmi <= 16.99)
        document.write('Twoje bmi wynosi: ' + bmi + '<br>' + 'Oznacza to wychudzenie')
    else if (bmi >= 17 && bmi <= 18.49)
        document.write('Twoje bmi wynosi: ' + bmi + '<br>' + 'Oznacza to niedowage')
    else if (bmi >= 18.5 && bmi <= 24.99)
        document.write('Twoje bmi wynosi: ' + bmi + '<br>' + 'Oznacza to optimum')
    else if (bmi >= 25 && bmi <= 29.99)
        document.write('Twoje bmi wynosi: ' + bmi + '<br>' + 'Oznacza to nadwage')
    else if (bmi >= 30 && bmi <= 34.99)
        document.write('Twoje bmi wynosi: ' + bmi + '<br>' + 'Oznacza to otyłość I stopnia')
    else if (bmi >= 35 && bmi <= 39.99)
        document.write('Twoje bmi wynosi: ' + bmi + '<br>' + 'Oznacza to otyłość II stopnia')
    else if (bmi >= 40)
        document.write('Twoje bmi wynosi: ' + bmi + '<br>' + 'Oznacza to otyłość III stopnia')
    return bmi;
}

btn.addEventListener('click', function (){

    let Waga = parseFloat(waga.value)
    let Wzrost = parseFloat(wzrost.value)
    wynik.innerHTML =
        `
        
        ${klasyfikacja(Waga,Wzrost)}<br>
        
        `

})
