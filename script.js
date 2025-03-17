let FallIntro = document.getElementById("introduction");

function displayFallIntro() {
    let prepareText = FallIntro.innerText;

    for (let i = 0; i < prepareText.length; i++) {
        const char = prepareText[i]
        const span = document.createElement("span");
        span.className = "letter"
        span.innerText = char;
        prepareText.appendChild(span)
        letter.addEventListener("mouseenter", () => {
            const randomX = Math.random() * 30 - 10;
            const randomY = Math.random() * 20 -10;
            const randomDEG = Math.random() * Math.PI * 20 - 10;
            letter.style.transform = `translate(${randomX},${randomY})`;
        })

    }

    displayFallIntro();


}


