const el = document.getElementById(`day${new Date().getDay()}`);
if (el) {
    el.style.backgroundImage = "linear-gradient(to top, yellow, blue)";
}