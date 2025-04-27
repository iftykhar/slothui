document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-counter h1');
    const speed = 150; // Adjust speed: lower = faster

    const animateCounter = (counter) => {
        const targetText = counter.innerText.trim();
        let target = parseFloat(targetText.replace(/[^\d.]/g, ''));
        let suffix = targetText.replace(/[0-9.%+]/g, '').trim();

        if (targetText.includes('M')) {
            target = target * 1000000;
        }

        let count = 0;
        const increment = target / speed;

        const updateCount = () => {
            if (count < target) {
                count += increment;
                if (targetText.includes('%') || targetText.includes('+')) {
                    counter.innerText = Math.ceil(count) + (suffix ? suffix : '');
                } else if (targetText.includes('M')) {
                    counter.innerText = (count / 1000000).toFixed(2) + 'M';
                } else {
                    counter.innerText = Math.ceil(count);
                }
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = targetText;
            }
        };

        updateCount();
    };

    let countersAnimated = false;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                counters.forEach(counter => animateCounter(counter));
                countersAnimated = true;
            }
        });
    }, { threshold: 0.5 }); // 50% visible

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
});

