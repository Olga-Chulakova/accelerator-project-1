const form = document.querySelector('.form-request__filter');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');

function clearFieldError(inputElement) {
  const parentElement = inputElement.closest('.form-request__form-group');
  parentElement.classList.remove('invalid'); // Убираем подсветку
  const errorMessages = parentElement.querySelectorAll('.error-message');
  errorMessages.forEach((error) => error.remove()); // Удаляем сообщения
}

nameInput.addEventListener('focus', () => {
  clearFieldError(nameInput);
});

phoneInput.addEventListener('focus', () => {
  clearFieldError(phoneInput);
});

form.addEventListener('submit', (event) => {
  const isNameValid = validateField(nameInput);
  const isPhoneValid = validateField(phoneInput);

  if (isNameValid && isPhoneValid) {
    form.submit();
  } else {
    event.preventDefault();
    clearErrors();
    highlightInvalidFields();
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

    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = errorMessage;
    parentElement.appendChild(errorDiv);
  }

  return inputElement.validity.valid;
}

function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((error) => error.remove());

  const invalidInputs = document.querySelectorAll('.form-request__form-group.invalid');
  invalidInputs.forEach((input) => input.classList.remove('invalid'));
}

function highlightInvalidFields() {
  validateField(nameInput);
  validateField(phoneInput);
}
