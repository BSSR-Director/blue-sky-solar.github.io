
$(document).ready(function() {
    const hamburger = document.querySelector(".header-hamburger");
    const hamburgerDropdown = document.querySelector(".header-hamburger-dropdown");
    hamburger.addEventListener("click", mobileMenu);
    function mobileMenu() {
        hamburger.classList.toggle("active");
        hamburgerDropdown.classList.toggle("active");
    }
});
