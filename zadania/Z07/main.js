const celsjusz = document.querySelector('#c');
const Fahrenheit = document.querySelector('#f');
const Kelwin = document.querySelector('#k');
const wynik =  document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){

    let c = parseFloat(celsjusz.value);
    let f = parseFloat(Fahrenheit.value);
    let k = parseFloat(Kelwin.value);

    let Fw = c * 1.8 + 32;
    let kw = c + 273.15;

    wynik.innerHTML =
        `
        Wyniki obliczeń dla: T <sub>Celsjusza</sub> = ${c}
        
        T <sub>Kelwin</sub> = ${kw}
        T <sub>Fahrenheit</sub> = ${Fw}
        
        
        `


})