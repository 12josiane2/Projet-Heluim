
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.style.position = "fixed"; 
        navbar.style.top = "0";
        navbar.style.width = "100%";
        navbar.style.backgroundColor = "#000"; 
        navbar.style.transition = "background-color 0.3s ease"; 
    } else {
        navbar.style.position = "relative"; 
        navbar.style.backgroundColor = "aqua"; 
    }
});
