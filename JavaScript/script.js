console.log ("Test123")

let afbeeldingvoor = document.getElementById("voorkantauto");
let knopjeblauw =document.getElementById("knopjeblauw")
let knopjewit = document.getElementById("knopjewit")
let knopjegroen = document.getElementById("knopjegroen")
let knopjeoranje = document.getElementById("knopjeoranje")
let knopjepaars = document.getElementById("knopjepaars")

let knopjegelelampen = document.getElementById("knopjegelelampen")
let knopjeledlampen = document.getElementById("knopjeledlampen")

function wordtWit() { 
    afbeeldingvoor.src = 'autotjes/car_white/auto=wit,lamp=geel.svg'
}

function wordtBlauw() {
    afbeeldingvoor.src = 'autotjes/car_blue/auto=blauw,lamp=geel.svg'
}

function wordtGroen() {
    afbeeldingvoor.src = 'autotjes/car_green/auto=groen,lamp=geel.svg'
}

function wordtOranje() {
    afbeeldingvoor.src = 'autotjes/car_orange/auto=oranje,lamp=geel.svg'
}

function wordtPaars() {
    afbeeldingvoor.src = 'autotjes/car_purple/auto=paars,lamp=geel.svg'
}


knopjeblauw.addEventListener("click", wordtBlauw );
knopjewit.addEventListener("click", wordtWit);
knopjegroen.addEventListener("click", wordtGroen);
knopjeoranje.addEventListener("click", wordtOranje);
knopjepaars.addEventListener("click", wordtPaars)

