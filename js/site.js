// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

const button =
document.querySelector ('.button');
const submit =
document.querySelector ('.submit');

function toggleClass() {
  this.classList.toogle('active');
}

function addClass() {
  this.class.add('finished');
}
button.addEventListener('click', toggleClass);
button.addEventListener('transitionend', toggleClass);
button.addEventListener('transitionend', addClass);