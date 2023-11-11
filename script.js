document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const menuLinks = document.querySelector(".menu-links");

    hamburgerIcon.addEventListener("click", toggleMenu);

    function toggleMenu() {
        menuLinks.classList.toggle("open");
        hamburgerIcon.classList.toggle("open");
    }
});