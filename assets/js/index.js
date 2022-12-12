let menu = document.querySelector(".menu")
let video = document.querySelector(".teasers__video")
let play = document.querySelector(".teasers__start-btn")
let playImg = document.querySelector(".teasers__play-img")
let play2 = document.querySelector(".teasers__play-btn")
let progress = document.querySelector(".teasers__video-progress")
let time = document.querySelector(".video__current-time")
let range = document.querySelector(".teasers__video-range")

if (window.outerWidth < 900) {
    menu.addEventListener("click", () => {
        if (document.querySelector(".home__left").style.display == "none") {
            document.querySelector(".home__left").style.display = "block"
            document.querySelector(".home__right").style.display = "none"
            document.querySelector(".home__container").style.overflowX = "hidden"
        } else {
            document.querySelector(".home__left").style.display = "none"
            document.querySelector(".home__right").style.display = "block"
        }
    })
}

play.addEventListener("click", playVideo)
video.addEventListener("click", playVideo)
play2.addEventListener("click", playVideo)

function playVideo() {
    if (video.paused) {
        video.play()
        play.style.display = "none"
        playImg.src = "./assets/images/pause.png"
    }else{
        video.pause()
        play2.style.display = "block"
        play.style.display = "inline-block"
        playImg.src = "./assets/images/play__teasers.svg"
    }
}

video.addEventListener("timeupdate", progressVideo)

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

range.addEventListener("change" , changeRange)