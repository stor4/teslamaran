const scrollToTopBtn = document.getElementById('back-top')

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
        scrollToTopBtn.style.visibility = "visible";
    } else {
        scrollToTopBtn.style.visibility = "hidden"; 
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.onclick = scrollToTop