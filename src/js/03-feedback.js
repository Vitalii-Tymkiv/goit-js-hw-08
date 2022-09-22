import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

import { save, load, remove } from './partials/locale-storage-methods';

startPage();

formRef.addEventListener('input', throttle(formInputter, 500));
formRef.addEventListener('submit', formSubmiter);

function formInputter(event) {
  const { name, value } = event.target;

  let savedData = load(STORAGE_KEY);
  savedData = savedData ? savedData : {};

  savedData[name] = value;
  save(STORAGE_KEY, savedData);
}

function startPage() {
  const savedData = load(STORAGE_KEY);

  if (!savedData) {
    return;
  }
  Object.entries(savedData).forEach(([key, value]) => {
    formRef.elements[key].value = value;
  });
}

function formSubmiter(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  remove(STORAGE_KEY);
}
