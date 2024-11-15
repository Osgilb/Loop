
document.querySelector(".hamburger").addEventListener("click", toggleMenu);
let menuLink = document.querySelector(".hamburger");

function toggleMenu() {
    menuLink.classList.toggle("open")
}
