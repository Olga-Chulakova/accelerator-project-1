const form = document.querySelector('.form-request__filter');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');

// Функция для очистки ошибок для конкретного поля
function clearFieldError(inputElement) {
  const parentElement = inputElement.closest('.form-request__form-group');
  parentElement.classList.remove('invalid'); // Убираем подсветку
  const errorMessages = parentElement.querySelectorAll('.error-message');
  errorMessages.forEach((error) => error.remove()); // Удаляем сообщения
}

// Обработчики событий для очистки ошибок при вводе
nameInput.addEventListener('focus', () => {
  clearFieldError(nameInput);
});

phoneInput.addEventListener('focus', () => {
  clearFieldError(phoneInput);
});

form.addEventListener('submit', (event) => {
  // Валидируем поля при отправке формы
  const isNameValid = validateField(nameInput);
  const isPhoneValid = validateField(phoneInput);

  if (isNameValid && isPhoneValid) {
    // Если оба поля валидны, то отправляем форму.
    // Ничего не делаем, давая форме отправиться на сервер.
    // event.preventDefault() больше не вызывается.
  } else {
    // Если есть ошибки, то предотвращаем отправку и показываем ошибки.
    event.preventDefault(); // Предотвращаем отправку формы

    clearErrors(); // Очищаем ошибки перед новой валидацией
    highlightInvalidFields(); // Подсвечиваем невалидные поля
  }
});

function validateField(inputElement) {
  const parentElement = inputElement.closest('.form-request__form-group');

  if (!inputElement.validity.valid) {
    parentElement.classList.add('invalid');

    let errorMessage = '';
    if (!inputElement.value.trim()) {
      errorMessage = inputElement.dataset.required;
    } else if (inputElement.validity.patternMismatch) {
      errorMessage = inputElement.dataset.patternMismatch;
    } else if (inputElement.validity.tooShort) {
      errorMessage = inputElement.dataset.minlength;
    }

    // Создаем и добавляем сообщение об ошибке
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = errorMessage;
    parentElement.appendChild(errorDiv);
  }

  return inputElement.validity.valid; // Возвращаем true, если поле валидно
}

function clearErrors() {
  // Удаляем все сообщения об ошибках и убираем подсветку
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((error) => error.remove());

  const invalidInputs = document.querySelectorAll('.form-request__form-group.invalid');
  invalidInputs.forEach((input) => input.classList.remove('invalid'));
}

function highlightInvalidFields() {
  validateField(nameInput); // Валидируем и отображаем ошибки для имени
  validateField(phoneInput); // Валидируем и отображаем ошибки для телефона
}
