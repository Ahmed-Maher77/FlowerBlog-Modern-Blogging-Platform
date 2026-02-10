// ========== LOADER ==========
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("fade-out");
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 500);
});

// ========== COPYRIGHT YEAR ==========
const copyrightYear = document.getElementById("copyright-year");
if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}

// ========== SCROLL ANIMATIONS ==========
let scrollAnimationsEnabled = false;

setTimeout(() => {
    scrollAnimationsEnabled = true;
    initScrollAnimations();
}, 1000);

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(".scroll-animate");

    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        if (!scrollAnimationsEnabled) return;

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach((element) => {
        observer.observe(element);
    });
}

// ========== THEME TOGGLER ==========
const themeTogglers = document.querySelectorAll(".theme-toggler");

themeTogglers.forEach((btn) => {
    btn.onclick = () => {
        document.documentElement.setAttribute(
            "data-bs-theme",
            document.documentElement.getAttribute("data-bs-theme") === "dark"
                ? "light"
                : "dark",
        );
    };
});
