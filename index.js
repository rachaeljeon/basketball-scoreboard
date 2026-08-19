let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

homeScore.textContent = 0
guestScore.textContent = 0

function increase1Home() {
    homeScore.textContent = Number(homeScore.textContent) + 1
}

function increase2Home() {
    homeScore.textContent = Number(homeScore.textContent) + 2
}

function increase3Home() {
    homeScore.textContent = Number(homeScore.textContent) + 3
}

function increase1Guest() {
    guestScore.textContent = Number(guestScore.textContent) + 1
}

function increase2Guest() {
    guestScore.textContent = Number(guestScore.textContent) + 2
}

function increase3Guest() {
    //let result = Number(guestScore.textContent) + 3
    guestScore.textContent = Number(guestScore.textContent) + 3
}