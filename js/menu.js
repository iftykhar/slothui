
    const menuOpen = document.querySelector('.mobile-menu-toggle:nth-of-type(1)');
    const menuClose = document.getElementById('menubar');
    const navLinks = document.querySelector('.nav-links');

    menuOpen.addEventListener('click', () => {
        navLinks.classList.add('active');
        menuOpen.style.display = 'none';
        menuClose.style.display = 'block';
    });

    menuClose.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuClose.style.display = 'none';
        menuOpen.style.display = 'block';
    });

    // Initially hide the close button
    menuClose.style.display = 'none';

