let sekundy = 4061
let godziny = Math.floor(sekundy / 3600)
let minuty = Math.floor((sekundy % 3600) / 60)
let sek = (sekundy % 3600) % 60

console.log(godziny)
console.log(minuty)
console.log(sek)