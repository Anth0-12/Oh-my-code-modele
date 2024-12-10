// Je sélectionne et stock
const btnRed = document.getElementById("btn-red");
const btnBlue = document.getElementById("btn-blue");

let compteur = 0;
console.log(compteur, "compteur initial");

// Je soumets le cercle rouge à une action
btnRed.addEventListener("click", function () {
  console.log("Clique sur le cercle rouge");

  // Ici l'action

  // Incrémenter le compteur de 1 avec la fonction
  add();
});

// Je soumets le cercle bleu à une action
btnBlue.addEventListener("click", function () {
  console.log("Clique sur le cercle rouge");

  // Ici l'action

  // Incrémenter le compteur de 1 avec la fonction
  add();
});

function add() {
  compteur = compteur + 1;
  console.log(compteur, "compteur incrementé");
}
