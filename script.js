// Animación suave al cargar
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero-container');
    hero.style.opacity = 0;
    
    setTimeout(() => {
        hero.style.transition = "opacity 1s ease-in-out";
        hero.style.opacity = 1;
    }, 100);

    console.log("Oportunautas: Sistema Frontend Iniciado 🚀");
});