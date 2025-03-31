const firstAccordion = document.querySelector('.accordion__item');
const faqContents = document.querySelectorAll('.faq-tab__content');

faqContents.forEach((tabContent) => {
  const accordions = tabContent.querySelectorAll('.accordion__item');

  accordions.forEach((accordion) => {
    const control = accordion.querySelector('.accordion__control');
    const content = accordion.querySelector('.accordion__content');

    control.addEventListener('click', (e) => {
      e.preventDefault();


      accordion.classList.toggle('open');

      if (accordion.classList.contains('open')) {
        content.style.maxHeight = `${content.scrollHeight}px`;
        content.classList.add('active');
      } else {
        content.style.maxHeight = null;
        content.classList.remove('active');
      }
    });
  });
});


const openedFirstAccordion = () => {
  if (firstAccordion) {
    const content = firstAccordion.querySelector('.accordion__content');
    firstAccordion.classList.add('open');
    content.style.maxHeight = `${content.scrollHeight}px`;
    content.classList.add('active');
  }
};

openedFirstAccordion();

window.addEventListener('resize', () => {
  if (firstAccordion && firstAccordion.classList.contains('open')) {
    const content = firstAccordion.querySelector('.accordion__content');
    content.style.maxHeight = `${content.scrollHeight}px`;
  }
});
