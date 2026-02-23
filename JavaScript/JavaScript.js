document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const indicators = document.querySelectorAll('.indicator');
    const slides = document.querySelectorAll('.carousel-track img');

    let index = 0;
    const total = slides.length;
    const interval = 3500;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((dot, i) =>
        dot.classList.toggle('active', i === index)
        );
    }

    function nextSlide() {
        index = (index + 1) % total;
        updateCarousel();
    }

    setInterval(nextSlide, interval);

    document.getElementById("copy-ip").addEventListener("click", function() {
    const ip = "135.148.136.225:20010 ";

    navigator.clipboard.writeText(ip).then(() => {
        alert("IP copiada: " + ip);
    });
    });
});
