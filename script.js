function goToImportancia() {
    window.location.href = 'importancia.html';
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.transition-link');
    const overlay = document.getElementById('transition-overlay');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');

            overlay.classList.add('active');

            setTimeout(() => {
                window.location.href = href;
            }, 3290); // Duración de la animación en milisegundos
        });
    });

    window.addEventListener('load', () => {
        overlay.classList.remove('active');
    });
});
