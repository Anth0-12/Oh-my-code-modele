// Je séléctionne et je stocke
// Icone contient le premier élément <i> du code HTML
const icone = document.querySelector("i");

//btnButton contient le premier élément avec la classe "btn"
const btnButton = document.querySelector(".btn");
console.log(btnButton);

// Je soumets l'icone à une action au clic
icone.addEventListener("click", function () {
  // Je désactive la classe "fa-face-meh-blank", j'ajoute et active la classe "fa-face-smile-wink"
  icone.classList.toggle("fa-face-meh-blank");
  icone.classList.toggle("fa-face-smile-wink");
  icone.classList.toggle("happy");
});

// Je soumets le bouton à une action au clic
btnButton.addEventListener("click", function () { // Au clic
  if (btnButton.innerText === "Abonné") { // Si le bouton est "Abonné"
      btnButton.innerText = "Abonnez-vous"; // Alors le bouton devient "Abonnez-vous"
  } else { // Sinon (si le bouton est "Abonnez-vous")
      btnButton.innerText = "Abonné"; // Le bouton devient "Abonné"
  } 
btnButton.classList.toggle("abonne"); // Ajoute la classe "abonne" au bouton pour modifier le style
});

