document.addEventListener("DOMContentLoaded", () => {
    
})

document.addEventListener("click", (e) => {
    const switcher = document.querySelector(".lang-switcher");
    if(!switcher.contains(e.target)) {
        document.querySelector(".lang-switcher").classList.remove("open")
    }
})

const hamburgerBtn = document.querySelector("#hamburgerBtn"),
      navbarNav = document.querySelector("#navbarNav"),
      icon = hamburgerBtn.querySelector("i")

      hamburgerBtn.addEventListener("click", () => {
        navbarNav.classList.toggle("active");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      })