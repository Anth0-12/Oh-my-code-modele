// Je séléctionne et stocke
const switchBox = document.querySelector('.switch');
console.log(switchBox);
const btn = document.querySelector('.btn');
console.log(btn);
const icone = document.querySelector('i');
console.log(icone);
const container = document.querySelector('.container');
console.log(container);
const titre = document.querySelector('h1');
console.log(titre);

// Je soumets la div switch à une action au clic
switchBox.addEventListener('click', function() {
    // Je déplace le cercle
   btn.classList.toggle('btn-change');
    // Je déplace l'icone'
    icone.classList.toggle('icone-change');
    // Je change l'icone
    icone.classList.toggle('fa-moon'); // Je désactive la classe "fa-moon"
    icone.classList.toggle('fa-sun'); // J'ajoute et active la classe "fa-sun"
});