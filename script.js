// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    let logoSpawn = document.getElementById("LogoIMG");

    // Vérifier si l'élément existe
    if (!logoSpawn) {
        console.error("L'élément LogoIMG n'existe pas dans le document.");
        return; // Arrêter l'exécution si l'élément n'existe pas
    }

    function createRandomLogo(event) {
        // Cloner le logo
        let logoClone = logoSpawn.cloneNode(true);

        // Calculer les dimensions maximales
        const maxX = window.innerWidth - (logoSpawn.width || 50);
        const maxY = window.innerHeight - (logoSpawn.height || 50);

        // Générer position aléatoire
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Appliquer les styles de position
        logoClone.style.position = 'absolute';
        logoClone.style.left = randomX + 'px';
        logoClone.style.top = randomY + 'px';

        // Ajouter le logo au body
        document.body.appendChild(logoClone);
        console.log("Logo clone créé à", randomX, randomY);
    }
    let throttled = false;
    document.addEventListener('mousemove', function(event) {
        if (!throttled) {
            createRandomLogo(event);
            throttled = true;
            setTimeout(() => { throttled = false; }, 0.00001);
        }
    });
});


let floattext = document.getElementById("float-text")

floattext
