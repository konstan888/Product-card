let user = null;

const regForm = document.querySelector('#reg-form');
const emailForm = document.querySelector('#email-form');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.header__registration-btn');
const closeBtn = document.querySelector('.modal__close-btn');


function openModal() {
  modal.classList.add('modal-showed');
  overlay.classList.add('overlay-showed');
}

function closeModal() {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('overlay-showed');
}

const passwordInput = regForm.elements.password;
const confirmPasswordInput = regForm.elements.confirm_password;

function resetConfirmPasswordError() {
  confirmPasswordInput.setCustomValidity('');
}

function handleRegFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  form.elements.confirm_password.setCustomValidity('');

  if (!form.checkValidity()) {
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

  const data = Object.fromEntries(new FormData(form).entries());

  data.password = btoa(data.password);
  data.confirm_password = btoa(data.confirm_password)
  
  user = {
    ...data,
    createdOn: new Date(),
  };

  console.table(user);

  closeModal();
  form.reset();
}

function handleEmailFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());
  console.log(data);

  form.reset();
}

regForm.addEventListener('submit', handleRegFormSubmit);
emailForm.addEventListener('submit', handleEmailFormSubmit);

openBtn.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

passwordInput.addEventListener('input', resetConfirmPasswordError);
confirmPasswordInput.addEventListener('input', resetConfirmPasswordError);