const firstAccordion = document.querySelector('.accordion__item');
// const accordions = document.querySelectorAll('.accordion__item');
const faqContents = document.querySelectorAll('.faq-tab__content');

// accordions.forEach((accordion) => {
//   accordion.addEventListener('click', (e) => {
//     const self = e.currentTarget;
//     const control = self.querySelector('.accordion__control');
//     const content = self.querySelector('.accordion__content');

//     self.classList.toggle('open');

//     if (self.classList.contains('open')) {
//       content.style.maxHeight = `${content.scrollHeight }px`;
//     } else {
//       content.style.maxHeight = null;
//     }
//   });
// });

faqContents.forEach((tabContent) => {
  const accordions = tabContent.querySelectorAll('.accordion__item');

  accordions.forEach((accordion) => {
    const control = accordion.querySelector('.accordion__control'); // Обработчик на control
    const content = accordion.querySelector('.accordion__content');

    control.addEventListener('click', (e) => { // Слушаем клик на control
      e.preventDefault(); // Предотвращаем переход по ссылке, если control - ссылка


      accordion.classList.toggle('open'); // Добавляем/удаляем 'open' у accordion__item

      if (accordion.classList.contains('open')) {
        content.style.maxHeight = `${content.scrollHeight}px`;
        content.classList.add('active'); // Добавляем класс active для отображения (если необходимо)
      } else {
        content.style.maxHeight = null;
        content.classList.remove('active'); // Удаляем класс active (если необходимо)
      }
    });
  });
});

// const firstAccordion = document.querySelector('.accordion__item');
// if (firstAccordion) {
//   const content = firstAccordion.querySelector('.accordion__content');
//   firstAccordion.classList.toggle('open');
//   content.style.maxHeight = `${content.scrollHeight }px`;
// }

const openedFirstAccordion = () => {
  if (firstAccordion) {
    const content = firstAccordion.querySelector('.accordion__content');
    firstAccordion.classList.toggle('open');
    content.style.maxHeight = `${content.scrollHeight }px`;
  }
};

openedFirstAccordion();
