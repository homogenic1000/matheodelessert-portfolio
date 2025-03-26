let logo = document.getElementById("logo");
let valueR = Math.floor(Math.random() * 360);

window.addEventListener("scroll", () => {
    logo.style.transform = `rotate(${valueR}deg)`;
})


