const btn = document.querySelector('.btn');
const toast = document.querySelector('.toast');

btn.addEventListener('click', function() {
    const notification = document.createElement('div');
    notification.innerText = 'Votre message a bien été envoyé !';
    toast.appendChild(notification);
    notification.classList.add('active');
    console.log('toast');
    setTimeout(() => {
        notification.classList.add('transition');
        
        // Attendre la fin de l'animation avant de supprimer l'élément
            setTimeout(() => {
                notification.remove();    
            }, 500);  // Temps de l'animation de disparition

    }, 500); // L'animation commence après 0.5 seconde
});