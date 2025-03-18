const buttons = document.querySelectorAll('.nav-button');

buttons.forEach(button => {
    let text = buttons.textContent.trim();
    button.innerText = "";

    text.split("").forEach(button => {
        let span = document.createElement("span");
        span.textContent = char;
        button.appendChild(span);
        console.log("yes")
    });
    buttons.addEventListener("mousemove", (e) => {
        let react = buttons.getBoundingClientRect();
        let x = e.clientX - react.left;
        let y = e.clientY - react.top;

        button.querySelectorAll(".letter").forEach(letter => {
            let letterReact = letter.getBoundingClientRect()
            let letterX = letterReact- react.left;
            let letterY =  letterReact - react.top;
            let deltaX  = letterX - x;
            let deltaY = letterY - y;
            let moveX = (deltaX / distance) * 20;
            let moveY = (deltaY / distance) * 20;

            letter.style.transform = `transflater(${moveX}px, ${moveY}px)`;

        })
    })

    buttons.addEventListener("mouseleave", (e) => {
        buttons.querySelectorAll('.letter').forEach(letter => {
            letter.style.transform = "translate(0, 0)";
        })
    })
})

