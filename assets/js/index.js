let menu = document.querySelector(".menu")

if (window.outerWidth < 900) {
    menu.addEventListener("click", () => {
        if (document.querySelector(".home__left").style.display == "none") {
            document.querySelector(".home__left").style.display = "block"
            document.querySelector(".home__right").style.display = "none"
        } else {
            document.querySelector(".home__left").style.display = "none"
            document.querySelector(".home__right").style.display = "block"
        }
    })
}