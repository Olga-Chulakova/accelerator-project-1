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

      // ===  НОВЫЙ КОД ДЛЯ ОТКРЫТИЯ ПЕРВОГО АККОРДЕОНА ===
      const firstAccordion = contentTab.querySelector('.accordion__item'); // Находим первый аккордеон в ТЕКУЩЕМ табе
      if (firstAccordion) {
        const accordionContent = firstAccordion.querySelector('.accordion__content'); // Находим контент первого аккордеона

        firstAccordion.classList.add('open'); // Открываем accordion__item
        accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`; // Раскрываем контент
      }
      // =============================================
    }
  });
});
