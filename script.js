document.addEventListener("DOMContentLoaded", () => {
    // ANIMACION
    const hero = document.querySelector('.hero-container');
    if(hero) { // Validacion
        hero.style.opacity = 0;
        setTimeout(() => {
            hero.style.transition = "opacity 1s ease-in-out";
            hero.style.opacity = 1;
        }, 100);
    }

    // CREA el Ambiente
    createStars();

    console.log("Oportunautas: Sistema Frontend Iniciado 🚀");
});

function createStars() {
    // CONT. Principal del Hero
    const heroSection = document.querySelector('.hero-container');
    
    // Por CUALQUIER Error 
    if (!heroSection) return;

    const container = document.createElement('div');
    container.className = 'stars-container';
    
    heroSection.prepend(container); 

    const starCount = 300; // SE AJUSTA A GUSTO

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

// DRAG SCROLLING
const sliders = document.querySelectorAll('.scrolling-wrapper');

sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active'); 
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
        const walk = (x - startX) * 2; 
        slider.scrollLeft = scrollLeft - walk;
    });
});