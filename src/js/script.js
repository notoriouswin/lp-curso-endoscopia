function menu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");

    const hamburger = document.getElementById("hamburger")
    hamburger.classList.toggle("hamburger-active")

    const body = document.getElementById("body")
    body.classList.toggle("active")
}
