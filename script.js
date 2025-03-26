let logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
    let valueR = window.scrollY % 360;
    logo.style.transform = `rotate(${valueR}deg)`;
});
