let mainEl = document.getElementById("main")
let toggle = document.getElementById("toggle")

toggle.addEventListener("change", () => {
    mainEl.classList.toggle("light")
    document.body.classList.toggle("dark")
})