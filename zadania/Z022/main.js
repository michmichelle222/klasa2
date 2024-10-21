const liczbaA = document.querySelector("#liczbaA");
const liczbaB = document.querySelector("#liczbaB");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {

    let liczA = parseFloat(liczbaA.value);
    let liczB = parseFloat(liczbaB.value);
    let liczC = ((liczA^2 + liczB^2)^2);

    let AA = liczA * liczA;
    let BB = liczB * liczB;
    let CC = AA + BB;
    let CCC = Math.sqrt(CC);


    wynik.innerHTML =
        `
        A = ${liczA}<br>
        B = ${liczB}<br>
        Wynik: ${CCC}<br>
        
        
        `



})