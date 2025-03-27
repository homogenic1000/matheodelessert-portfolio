let logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
    let valueR = window.scrollY % 360;
    logo.style.transform = `rotate(${valueR}deg)`;
});

document.addEventListener("DOMContentLoaded", () => {
    let darkMode = document.getElementById("dark-mode");
    if (darkMode) {
        darkMode.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            document.button.classList.toggle("dark-mode");
            console.log("dark-mode");
        });
    } else {
        console.error("L'élément #dark-mode est introuvable !");
    }

    });

