const rok = document.querySelector("#rok")
const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {



    let ROK = parseInt(rok.value);
    let przestepny = '';
    if (ROK % 4 === 0 && ROK % 100 != 0 || ROK % 400 === 0){
        przestepny = `rok jest przestepny`
    }
    else {
        przestepny = `rok nie jest przestepny`
    }
    wynik.innerHTML =
        `
        rok ${ROK}: ${przestepny}
        
        
        
        `

})