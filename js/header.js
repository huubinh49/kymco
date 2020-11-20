const nav = document.querySelector("header nav");
const navToggle = document.querySelector(".nav__toggle");
const $logo = $("header .brand")
navToggle.onclick = ()=>{

    nav.classList.toggle("--show");
    navToggle.classList.toggle("--show");
}