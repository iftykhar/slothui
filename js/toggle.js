
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-section-bottom-com');
  const answer = item.querySelector('p');
  const icon = item.querySelector('.icon-arrow');

  question.addEventListener('click', () => {
    item.classList.toggle('active');

    // Toggle answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
