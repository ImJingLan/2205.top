navbar = document.getElementById("navbar");

btt_span = document.getElementById("back-to-top");

if (window.scrollY > 0) {
    btt_span.style.opacity = "1";
} else {
    btt_span.style.opacity = "0";
}

addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled");
        //btt_span.style.display = "block";
        btt_span.style.opacity = "1";
    } else {
        navbar.classList.remove("navbar-scrolled");
        //btt_span.style.display = "none";
        btt_span.style.opacity = "0";
    }
});

function back_to_top() {}
