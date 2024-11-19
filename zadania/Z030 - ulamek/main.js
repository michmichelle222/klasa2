const licznik = document.querySelector('#licznik');
const mianownik = document.querySelector('#mianownik');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let licz = parseInt(licznik.value);
    let mian = parseInt(mianownik.value);

    if (mian === 0){
        wynik.innerHTML = `nie mogę podzielić przez 0.`
    }
    else {
        let cal = Math.floor(licz / mian)
        if (cal === 0){
            cal = " ";
        }
        let licz2 = licz % mian
        wynik.innerHTML =
            `
            licznik = ${licz}<br>
            mianownik = ${mian}<br>
            ułamek właściwy to: ${cal}<sup>${licz2}</sup>/<sub>${mian}</sub>
         
         
            `
    }


})