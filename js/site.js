// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

const colorBox = document.getElementById('color-box');

function changeColor() {
  const colors = ['red', 'green', 'blue'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  colorBox.style.backgroundColor = randomColor;
}

setInterval(changeColor, 10000);
