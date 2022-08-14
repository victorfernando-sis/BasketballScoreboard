let homeCounter = 0
let guestCounter = 0

let homeCounterEl = document.getElementById("home-counter-el")
let guestCounterEl = document.getElementById("guest-counter-el")


function increase(value, side) {
    if (side == 'home') {
        homeCounter += value;
        homeCounterEl.textContent = homeCounter
    } else {
        guestCounter += value;
        guestCounterEl.textContent = guestCounter
    }

    highlightWinner()
}

function highlightWinner() {
    if (homeCounter > guestCounter) {
        homeCounterEl.classList.add("highlight");
        guestCounterEl.classList.remove("highlight");
    } else if (homeCounter < guestCounter){
        guestCounterEl.classList.add("highlight");
        homeCounterEl.classList.remove("highlight");
    }else{
        guestCounterEl.classList.remove("highlight");
        homeCounterEl.classList.remove("highlight");
    }
}

function restart() {
    homeCounter = 0
    guestCounter = 0
    homeCounterEl.textContent = 0
    guestCounterEl.textContent = 0
    highlightWinner()
}