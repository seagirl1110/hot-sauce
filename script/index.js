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

const faqColl = document.querySelectorAll('.faq');

faqColl.forEach((elem) => {
  elem.addEventListener('click', (evt) => {
    evt.currentTarget.classList.toggle('faq--active');
  });
});
