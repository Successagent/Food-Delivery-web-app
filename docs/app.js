let navToggle = document.querySelector(".nav-list")

let navButton = document.querySelector(".nav-btn")

navButton.addEventListener("click", () => {
    let visibility = navToggle.getAttribute("data-visible")

    if(visibility === "false") {
        navToggle.setAttribute("data-visible", true)
    } else {
        navToggle.setAttribute("data-visible", false)
    }
    


})