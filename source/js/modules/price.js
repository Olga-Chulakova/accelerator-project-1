const buttonTabs = document.querySelectorAll('.tabs__button');
const contents = document.querySelectorAll('.tabs__content');

buttonTabs.forEach((buttonTab) => {
  buttonTab.addEventListener('click', function() { // Исправлено: function вместо =>, чтобы this работал
    const tabId = this.dataset.tab; // Получаем ID из data-атрибута
    const content = document.getElementById(tabId); // Находим нужный content

    // Убираем активные классы у всех кнопок и контентов
    buttonTabs.forEach((button) => button.classList.remove('tabs__button--active'));
    contents.forEach((content) => content.classList.remove('tabs__content--active'));

    // Добавляем активные классы текущей кнопке и контенту
    this.classList.add('tabs__button--active');
    if (content) { // Проверяем, что content найден
      content.classList.add('tabs__content--active');
    } else {
      console.error(`Элемент с id "${tabId}" не найден.`); // Выводим ошибку, если content не найден
    }
  });
});

