// je selectionne et stock
const modal = document.querySelector('.modal-container');
// console.log(modal);
const btn = document.querySelector('.btn-success');

const code = document.querySelector('.code');

const icone = document.querySelector('.fa-times');


// j'ajoute un event listener au scroll sur la fenêtre du navigateur qui met en place la fonction 
// displayModal
window.addEventListener('scroll', displayModal); 

// la fonction affiche le modal si la hauteur de défilement de la fenêtre est supérieur à 400
function displayModal() {
    let hauteur = document.documentElement.scrollTop;
    // console.log(hauteur, "nombre de pixels de défilement de la fenêtre");
    if (hauteur > 400) {
        // console.log("modal affiché");
        modal.style.display = 'flex';
    }
};

// au clic sur le bouton
btn.addEventListener('click', function() {
    // console.log("click sur le bouton");
    code.style.display = 'block'; // afficher le code
    btn.style.display = 'none'; // cacher le bouton
});

// au clic sur la croix
icone.addEventListener('click', function() {
    // console.log("click sur la croix");
    modal.style.display = 'none'; // cacher le modal
    
    window.removeEventListener('scroll', displayModal); // j'enlève la fonction qui affiche le modal au sroll
});
