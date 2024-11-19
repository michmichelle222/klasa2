const A = document.querySelector('#A')
const B = document.querySelector('#B')
const C = document.querySelector('#C')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {

    let liczbaA = parseFloat(A.value);
    let liczbaB = parseFloat(B.value);
    let liczbaC = parseFloat(C.value);
    let trojkat = 0;

    if (liczbaA + liczbaB > liczbaC && liczbaA + liczbaC > liczbaB && liczbaB + liczbaC > liczbaA)
        if (liczbaA == liczbaB && liczbaC == liczbaA)
            trojkat = "rownoboczny"
        else if (liczbaA == liczbaB || liczbaB == liczbaC || liczbaC == liczbaA)
            trojkat = "rownoramienny"
        else if ((liczbaA * liczbaA + liczbaB * liczbaB ) == liczbaC * liczbaC)
            trojkat = "prostokatny"
        else
            trojkat = "dowolny"
    else
        trojkat = "nie mozna zbudowac"
    wynik.innerHTML =
        `
        A = ${liczbaA}<br>
        B = ${liczbaB}<br>
        C = ${liczbaC}<br>
        Trójkąt jest ${trojkat}<br>
        
        `

})