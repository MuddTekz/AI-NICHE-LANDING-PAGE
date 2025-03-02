
// Search Toggle
const searchContainer = document.querySelector(".search-container");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
    searchContainer.classList.toggle("active");
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("show");
});
