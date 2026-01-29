document.addEventListener("DOMContentLoaded", () => {
    // 1. Tu animación de entrada original
    const hero = document.querySelector('.hero-container');
    if(hero) { // Pequeña validación por si acaso
        hero.style.opacity = 0;
        setTimeout(() => {
            hero.style.transition = "opacity 1s ease-in-out";
            hero.style.opacity = 1;
        }, 100);
    }

    // 2. Función para crear el ambiente estelar
    createStars();

    console.log("Oportunautas: Sistema Frontend Iniciado 🚀");
});

function createStars() {
    // Buscamos SOLO el contenedor principal
    const heroSection = document.querySelector('.hero-container');
    
    // Si por alguna razón no existe, frenamos para evitar errores
    if (!heroSection) return;

    const container = document.createElement('div');
    container.className = 'stars-container';
    
    // Lo insertamos al principio del hero
    heroSection.prepend(container); 

    const starCount = 300; // Ajustá la cantidad a tu gusto

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 3 + 2;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;
        
        container.appendChild(star);
    }
}

// Funcionalidad de "Arrastrar para scrollear" (Drag to Scroll) para PC
const sliders = document.querySelectorAll('.scrolling-wrapper');

sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active'); // Opcional: para cambiar cursor
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // El *2 determina la velocidad del scroll
        slider.scrollLeft = scrollLeft - walk;
    });
});