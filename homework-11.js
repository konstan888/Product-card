import { Modal } from './Modal.js';
import { Form } from './Form.js';

const regModal = new Modal('reg-modal');

const registrationForm = new Form('reg-form');
const subscribeForm = new Form('email-form');

let user = null;

const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.header__registration-btn');

const passwordInput = registrationForm.form.elements.password;
const confirmPasswordInput = registrationForm.form.elements.confirm_password;

function resetConfirmPasswordError() {
  confirmPasswordInput.setCustomValidity('');
}

function handleRegFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  form.elements.confirm_password.setCustomValidity('');

  if (!registrationForm.isValid()) {
    form.reportValidity();
    return;
  }

  const password = form.elements.password.value;
  const passwordConfirm = form.elements.confirm_password.value;

  if (password !== passwordConfirm) {
    form.elements.confirm_password.setCustomValidity('Пароли не совпадают');
    form.reportValidity();
    return;
  }

  const data = registrationForm.getFormValues();

  data.password = btoa(data.password);
  data.confirm_password = btoa(data.confirm_password);

  user = {
    ...data,
    createdOn: new Date(),
  };

  console.table(user);

  regModal.close();
  registrationForm.resetForm();
}

function handleEmailFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  if (!subscribeForm.isValid()) {
    form.reportValidity();
    return;
  }

  const data = subscribeForm.getFormValues();;
  console.log(data);

  subscribeForm.resetForm();
}

registrationForm.form.addEventListener('submit', handleRegFormSubmit);
subscribeForm.form.addEventListener('submit', handleEmailFormSubmit);

openBtn.addEventListener('click', () => {
  regModal.open();
});

overlay.addEventListener('click', () => {
  regModal.close();
});

passwordInput.addEventListener('input', resetConfirmPasswordError);
confirmPasswordInput.addEventListener('input', resetConfirmPasswordError);
