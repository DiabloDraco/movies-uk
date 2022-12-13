let menu = document.querySelectorAll(".menu")
let video = document.querySelector(".teasers__video")
let play = document.querySelector(".teasers__start-btn")
let playImg = document.querySelector(".teasers__play-img")
let play2 = document.querySelector(".teasers__play-btn")
let progress = document.querySelector(".teasers__video-progress")
let time = document.querySelector(".video__current-time")
let range = document.querySelector(".teasers__video-range")
let white = document.querySelectorAll(".white")
let black = document.querySelectorAll(".black")
let navText = document.querySelectorAll(".navigation__item-text")

if (window.outerWidth < 900) {
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener("click", () => {
            if (document.querySelector(".home__left").style.display == "none") {
                document.querySelector(".home__left").style.display = "block"
                document.querySelector(".home__right").style.display = "none"
                document.querySelector(".home__container").style.overflowX = "hidden"
                if (white) {
                    for (let i = 0; i < white.length; i++) {
                        white[i].style.display = "none"
                        black[i].style.display = "inline-block"
                        navText[i].style.color = "black"
                    }
                }
            } else {
                document.querySelector(".home__left").style.display = "none"
                document.querySelector(".home__right").style.display = "block"
                if (white) {
                    for (let i = 0; i < white.length; i++) {
                        white[i].style.display = "inline-block"
                        black[i].style.display = "none"
                        navText[i].style.color = "white"
                    }
                }
            }
        })
    }
}

function playVideo() {
    if (video.paused) {
        video.play()
        play.style.display = "none"
        playImg.src = "./assets/images/pause.png"
    } else {
        video.pause()
        play2.style.display = "block"
        play.style.display = "inline-block"
        playImg.src = "./assets/images/play__teasers.svg"
    }
}


function progressVideo() {
    progress.style.width = `${(video.currentTime / video.duration) * 100}%`
    range.value = 0
    let minutes = Math.floor(video.currentTime / 60)

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    let seconds = Math.floor(video.currentTime % 60)


    if (seconds < 10) {
        seconds = "0" + seconds
    }

    time.textContent = `${minutes}:${seconds}`
}


function changeRange() {
    video.currentTime = (range.value * video.duration) / 100
}

if (video) {
    video.src = `${video.src}#t=0.1`
    range.addEventListener("change", changeRange)
    video.addEventListener("timeupdate", progressVideo)
    play.addEventListener("click", playVideo)
    video.addEventListener("click", playVideo)
    play2.addEventListener("click", playVideo)
}

function clearInput() {
    document.querySelector(".stars__search-input").value = null
}

if (document.querySelector(".stars__search-cancel")) {
    document.querySelector(".stars__search-cancel").addEventListener("click", clearInput)
}

let rangeTickets = document.querySelector(".tickets__range")

function setDots() {
    let vals = document.querySelectorAll(".range__val")
    if (rangeTickets.value == "25") {
        vals[0].classList.add("after__off")
        vals[1].classList.remove("after__off")
        vals[2].classList.remove("after__off")
        document.querySelector(".range__val-0").classList.remove("after__off")
        document.querySelector(".range__val-100").classList.remove("after__off")
        vals[0].textContent = "25"
        vals[1].textContent = null
        vals[2].textContent = null
    }
    if (rangeTickets.value == "50") {
        vals[0].classList.remove("after__off")
        vals[1].classList.add("after__off")
        vals[2].classList.remove("after__off")
        document.querySelector(".range__val-0").classList.remove("after__off")
        document.querySelector(".range__val-100").classList.remove("after__off")
        vals[1].textContent = "50"
        vals[0].textContent = null
        vals[2].textContent = null
    }
    if (rangeTickets.value == "75") {
        vals[0].classList.remove("after__off")
        vals[1].classList.remove("after__off")
        vals[2].classList.add("after__off")
        document.querySelector(".range__val-0").classList.remove("after__off")
        document.querySelector(".range__val-100").classList.remove("after__off")
        vals[2].textContent = "75"
        vals[0].textContent= null
        vals[1].textContent = null
    }
    if (rangeTickets.value == "0" ) {
        vals[0].classList.remove("after__off")
        vals[1].classList.remove("after__off")
        vals[2].classList.remove("after__off")
        document.querySelector(".range__val-0").classList.add("after__off")
        document.querySelector(".range__val-100").classList.remove("after__off")
        vals[2].textContent = null
        vals[0].textContent = null
        vals[1].textContent = null
    }
    if (rangeTickets.value == "100") {
        vals[0].classList.remove("after__off")
        vals[1].classList.remove("after__off")
        vals[2].classList.remove("after__off")
        document.querySelector(".range__val-0").classList.remove("after__off")
        document.querySelector(".range__val-100").classList.add("after__off")
        vals[2].style.display = null
        vals[0].style.display = null
        vals[1].style.display = null
    }
}

if (rangeTickets) {
    rangeTickets.addEventListener("change" , setDots)
}
