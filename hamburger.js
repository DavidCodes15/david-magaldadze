const btn = document.getElementById("menu");
const icon = document.getElementById("icon");

icon.addEventListener('click', () => {
    btn.classList.toggle("flex");
    btn.classList.toggle("hidden");
});
