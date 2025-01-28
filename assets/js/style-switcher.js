/*============ Toggle style switcher ============*/
const menuStyleSwitcher = document.querySelector(".style-switcher"),
      styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

document.addEventListener("click", (event) => {
    if (!menuStyleSwitcher.contains(event.target)) {
        menuStyleSwitcher.classList.remove("open");
    }
});

styleSwitcherToggle.addEventListener("click", () => {
    menuStyleSwitcher.classList.toggle("open");
})

/*============ hide style switcher on  scroll  ============*/
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});


/*============ Theme colors ============*/
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach(style => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");

        }
    }); 
}

/*============ Theme light and Dark mode ============*/
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("light");
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("light")) {
        dayNight.querySelector("i").classList.add("fa-moon");
    } else { 
        dayNight.querySelector("i").classList.add("fa-sun");

    }
});