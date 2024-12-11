const navBtn = document.getElementById("nav-mobile-toggle");
const navLinks = document.getElementById("mobile-nav-list");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


function About(){
    window.open(`about.html` , `_self`);
}

function Service(){
    window.open(`service.html` , `_self`);
}

function Career(){
    window.open(`WorkOfUs.html` , `_self`);
}0

function Contact(){
    window.open(`contact.html` , `_self`);
}