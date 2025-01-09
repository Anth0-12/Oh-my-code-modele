const questions = document.querySelectorAll(".question");

questions.forEach((item) => {
    item.addEventListener("click", () => {
        const reponse = item.nextElementSibling;
        reponse.classList.toggle("visible");
        icone = item.lastElementChild;
        icone.classList.toggle("fa-chevron-down");
        icone.classList.toggle("fa-chevron-up");
    });
    
});