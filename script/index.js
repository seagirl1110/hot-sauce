const cookies = document.querySelector('.cookies');
const btnCookies = cookies.querySelectorAll('.cookies__btn');

btnCookies.forEach((btn) => {
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
