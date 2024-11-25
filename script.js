
const hamburger = document.getElementById('hamburger');
const backDrop = document.getElementById('backdrop');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', toggleMenu)

function toggleMenu() {
    hamburger.classList.toggle('open')
    backDrop.classList.toggle('h-screen')
    menu.classList.toggle('h-0')
    menu.classList.toggle('h-max')
}
