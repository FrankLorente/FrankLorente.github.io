document.addEventListener('DOMContentLoaded', function() {
    // Efecto de máquina de escribir para el título
    const title = document.querySelector('header h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 100);

    // Animación de botones
    const buttons = document.querySelectorAll('.pixel-button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'translate(2px, 2px)';
            button.style.boxShadow = 'none';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = 'translate(-2px, -2px)';
            button.style.boxShadow = '4px 4px 0 var(--primary)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
            button.style.boxShadow = '';
        });
    });

    // Smooth scrolling para enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efecto parallax básico
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const hero = document.querySelector('.hero');
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

});