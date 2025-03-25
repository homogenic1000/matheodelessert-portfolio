let CText = document.getElementById("changing-text");

let ListCText = ["Mathéo Delessert", "un interactive media designer", "super sympa"];
let index = 0;

function TextChange() {
    CText.textContent = ListCText[index];
    index = (index + 1) % ListCText.length;
}

// Commencer le changement de texte une fois le DOM chargé
document.addEventListener('DOMContentLoaded', () => {
    setInterval(TextChange, 2000);
});
