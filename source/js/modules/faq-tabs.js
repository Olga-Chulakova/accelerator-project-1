const faqButtons = document.querySelectorAll('.faq-tab__button');
const faqContents = document.querySelectorAll('.faq-tab__content');

faqButtons.forEach((faqButton) => {
  faqButton.addEventListener('click', () => {
    const tabId = faqButton.dataset.tab;
    const contentTab = document.getElementById(tabId);

    faqButtons.forEach((button) => button.classList.remove('faq-tab__button--active'));
    faqContents.forEach((content) => content.classList.remove('faq-tab__content--active'));

    faqButton.classList.add('faq-tab__button--active');

    if (contentTab) {
      contentTab.classList.add('faq-tab__content--active');

      const firstAccordion = contentTab.querySelector('.accordion__item');
      if (firstAccordion) {
        const accordionContent = firstAccordion.querySelector('.accordion__content');

        firstAccordion.classList.add('open');
        accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
      }
    }
  });
});
