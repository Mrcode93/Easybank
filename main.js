let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");
let openCloseBtn = document.querySelector(".hamburger");
let menu = document.querySelector("header ul");
let layout = document.querySelector(".layout");
openCloseBtn.onclick = function() {
    menu.classList.toggle("active");
    layout.classList.toggle("active");
    closeBtn.classList.toggle("active");
    openBtn.classList.toggle("active");
};
////////////////////////////////