// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Cursor Effects
const cursor = document.createElement("div");
const cursorFollower = document.createElement("div");
cursor.classList.add("cursor");
cursorFollower.classList.add("cursor-follower");
document.body.appendChild(cursor);
document.body.appendChild(cursorFollower);

document.addEventListener("mousemove", e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Hover Effects for Cursor
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(1.5)";
        cursorFollower.style.transform = "scale(2)";
    });
    link.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursorFollower.style.transform = "scale(1)";
    });
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        themeToggle.textContent =
            document.body.classList.contains("light-mode") ? "🌞" : "🌙";
    });
}

// Animation on Scroll Initialization
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Animation occurs only once per element
});