document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const indicators = document.querySelectorAll('.indicator');
    const slides = document.querySelectorAll('.carousel-track img');

    let index = 0;
    const total = slides.length;

    function updateCarousel() {
        // Si volvemos al inicio, quitamos la transición un momento para que no se vea el "rebobinado"
        if (index === 0) {
            track.style.transition = 'none';
            track.style.transform = `translateX(0%)`;
            // Forzamos un reflow para que el navegador note el cambio sin animar
            track.offsetHeight; 
            track.style.transition = 'transform 0.5s ease-in-out';
        } else {
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        // Actualizar indicadores (mantenemos tus clases originales)
        indicators.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        index = (index + 1) % total;
        updateCarousel();
    }

    setInterval(nextSlide, 3500);
});
// Función para copiar la IP al portapapeles
    document.getElementById("copy-ip").addEventListener("click", function() {
    const ip = "135.148.136.225:20010 ";

    navigator.clipboard.writeText(ip).then(() => {
        alert("IP copiada: " + ip);
    });
    });
// FUNCION PARA EL SELECTOR TABS DEL CARRUSEL 2do
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 1. Desactivar todos los botones y contenidos
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // 2. Activar el botón clicado
            tab.classList.add('active');

            // 3. Activar el contenido correspondiente
            const targetId = tab.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});