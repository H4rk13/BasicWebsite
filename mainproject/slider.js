const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.pages');
    const navLinks = document.querySelectorAll('.pages li');

    // Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.75}s`;
            }
        });

        // Toggle burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();
