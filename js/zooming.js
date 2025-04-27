const boxes = document.querySelectorAll('.testimonial-grid-box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transition = 'transform 0.4s ease';
        box.style.transform = 'scale(1.2)'; // Changed from 2 to 1.5
        box.style.zIndex = '10';
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
        box.style.zIndex = '1';
    });
});
