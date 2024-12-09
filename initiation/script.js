// Je sélectionne et stock
const btnRed = document.getElementById("btn-red");
let compteur = 0;
console.log(compteur, "compteur initial");

// Je soumets le cercle rouge à une action
btnRed.addEventListener("click", function () {
  console.log("Clique sur le cercle rouge");

  // Ici l'action

  // Incrémenter le compteur de 1
  compteur = compteur + 1;
  console.log(compteur, "compteur incrementé");
});
