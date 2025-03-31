const buttonTabs = document.querySelectorAll('.tabs__button');
const contents = document.querySelectorAll('.tabs__content');

buttonTabs.forEach((buttonTab) => {
  buttonTab.addEventListener('click', function() {
    const tabId = this.dataset.tab;
    const contentTab = document.getElementById(tabId);

    // Убираем активные классы у всех кнопок и контентов
    buttonTabs.forEach((button) => button.classList.remove('tabs__button--active'));
    contents.forEach((content) => content.classList.remove('tabs__content--active'));

    // Добавляем активные классы текущей кнопке и контенту
    this.classList.add('tabs__button--active');
    if (contentTab) {
      contentTab.classList.add('tabs__content--active');
    }
  });
});

