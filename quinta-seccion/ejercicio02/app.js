const contactForm = document.querySelector('#contact-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const successMessage = document.querySelector('#success-message');
const errorName = document.querySelector('#error-name');
const errorEmail = document.querySelector('#error-email');
const errorMessage = document.querySelector('#error-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  errorName.textContent = '';
  errorEmail.textContent = '';
  errorMessage.textContent = '';
  successMessage.textContent = '';
  name.classList.remove('error');
  email.classList.remove('error');
  message.classList.remove('error');
  successMessage.classList.remove('success');

  let isValid = true;

  if (name.value.trim().length < 3) {
    errorName.textContent = 'El nombre debe tener al menos 3 caracteres';
    name.classList.add('error');
    isValid = false;
  }

  if (!email.value.includes('@') || !email.value.includes('.')) {
    errorEmail.textContent = 'El email debe tener un formato válido';
    email.classList.add('error');
    isValid = false;
  } else {
    email.classList.remove('error');
  }

  if (message.value.trim() === '') {
    errorMessage.textContent = 'Por favor, ingresa un mensaje';
    message.classList.add('error');
    isValid = false;
  } else if (message.value.trim().length < 10) {
    errorMessage.textContent = 'El mensaje debe tener al menos 10 caracteres';
    message.classList.add('error');
    isValid = false;
  } else {
    message.classList.remove('error');
  }

  if (isValid) {
    successMessage.textContent = 'Formulario enviado correctamente';
    successMessage.classList.add('success');
  }
});