const refreshBtn = document.querySelector("#refresh");
const toggleBtn = document.querySelector("#toggle");
const body = document.querySelector("body");
const theme = localStorage.getItem("theme");

if (theme === "dark") {
    body.classList.add("dark");
}

toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark");
    if (theme === "dark") {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
})

refreshBtn.addEventListener("click", function () {
    window.history.go(0);
})
