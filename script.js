const contenantChoixOrdinateur = document.getElementById('choix_ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix_utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur;
let resultat;
let choixOrdinateur; // Correction du nom de la variable

// Ajout d'un écouteur d'événements click pour chaque bouton
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (o) => {
    // Récupération de l'ID du bouton cliqué
    choixUtilisateur = o.target.id;
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`; // Utilisation de backticks pour l'interpolation de chaînes
    generer_choix_ordinateur();
    verification();
}));

function generer_choix_ordinateur() {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        choixOrdinateur = "pierre";
    } else if (random === 2) { // Utilisation de else if pour éviter les conditions redondantes
        choixOrdinateur = "papier";
    } else if (random === 3) {
        choixOrdinateur = "ciseaux";
    }
    // Ajout de l'image qui correspond au choix de l'ordinateur
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`; // Correction de la variable utilisée ici
}

function verification() {
    if (choixUtilisateur === choixOrdinateur) {
        resultat = "Egalite!";
    } else if ((choixUtilisateur === "pierre" && choixOrdinateur === "ciseaux") ||
               (choixUtilisateur === "papier" && choixOrdinateur === "pierre") ||
               (choixUtilisateur === "ciseaux" && choixOrdinateur === "papier")) {
        resultat = "Gagné !"; // Simplification des conditions pour déterminer le résultat
    } else {
        resultat = "Perdu !"; // Si ce n'est pas une égalité et que les autres conditions ne sont pas remplies, le joueur a perdu
    }
    contenantResultat.innerHTML = resultat;
}
