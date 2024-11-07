var containerheader = document.querySelector('.container-header');
var body = document.querySelector('body');
var cntMenu = document.querySelector('.content-menu');
var forSlide = document.querySelector('.for-sld');
var productSection = document.querySelector('.product-section');
var toggler = document.querySelector('.toggler');
var navBar = document.querySelector('.nav-bar');
var toggleButton = document.querySelectorAll('.button_absolute');

toggler.addEventListener('click', function () {
  toggler.classList.toggle('change');
  navBar.classList.toggle('hide-show');
});

var more = document.querySelectorAll('.lng-lmore');
more.forEach((more) => {
  const lMore = more.innerText;
});

toggleButton.forEach(function (button, index) {
  button.addEventListener('click', function () {
    var description = document.querySelectorAll('.description')[index]; // Находим соответствующий description по индексу
    var toggle = description.classList.toggle('description_show'); // Переключаем видимость
    if (toggle) {
      toggleButton[index].innerText = 'Меньше';
    } else {
      toggleButton[index].innerText = 'Узнать больше';
    }
  });
});

window.addEventListener('resize', updateLayout);
updateLayout();
