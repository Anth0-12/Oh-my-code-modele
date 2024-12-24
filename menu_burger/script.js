// Je séléctionne et je stocke
// L'icone du menu burger
const icone = document.querySelector(".fa-bars");
console.log(icone);
// La div modal
const modal = document.querySelector(".modal");
console.log(modal);

// Je soumets l'icone à une action
icone.addEventListener("click", function() {
    console.log("click");
    // Je toggle la classe "change-modal" sur la div modal
    modal.classList.toggle("change-modal");
    icone.classList.toggle("fa-times");
    console.log(modal);
    console.log(icone);
});