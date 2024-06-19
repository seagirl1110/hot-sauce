// cookies

const cookies = document.querySelector('.cookies');
const cookiesBtnColl = cookies.querySelectorAll('.cookies__btn');

cookiesBtnColl.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    const status = evt.target.dataset.cookies;
    if (status === 'reject') {
      console.log('Cookies reject');
    } else if (status === 'accept') {
      console.log('Cookies accept');
    }
    cookies.style.display = 'none';
  });
});

// faq

const faqColl = document.querySelectorAll('.faq');

faqColl.forEach((elem) => {
  elem.addEventListener('click', (evt) => {
    evt.currentTarget.classList.toggle('faq--active');
  });
});

// form

const subscribeForm = document.querySelector('.subscribe-form');

const firstNameInput = subscribeForm.querySelector('#firstName');
const lastNameInput = subscribeForm.querySelector('#lastName');
const emailInput = subscribeForm.querySelector('#email');
const subscribeInput = subscribeForm.querySelector('#subscribe');

const subscribeStatus = subscribeForm.querySelector('.subscribe-form__status');

const isValidateForm = () => {
  return (
    firstName.value.length &&
    lastName.value.length &&
    email.value.length &&
    subscribe.checked
  );
};

const clearForm = () => {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  subscribe.checked = false;
};

subscribeForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  subscribeStatus.textContent = '';
  if (isValidateForm()) {
    subscribeStatus.textContent = `${firstName.value} ${lastName.value}, you have successfully subscribed. The newsletter will be sent by email ${email.value}`;
    clearForm();
  }
});
