// Карта
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.968811, 30.326991],
      zoom: 15
    }),

    myPlacemark = new ymaps.Placemark([59.968322, 30.317359], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/map-icon.svg',
      iconImageSize: [80, 140],
      iconImageOffset: [-40, -140]
    });

  myMap.geoObjects
    .add(myPlacemark)
});

// Попап

const feedbackLink = document.querySelector('.feedback-link');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupOverlay = document.querySelector('.popup__overlay');
const feedbackForm = popup.querySelector('.feedback-form');
const feedbackUserName = popup.querySelector('.feedback-user-name');
const feedbackEmail = popup.querySelector('.feedback-email');
const feedbackComment = popup.querySelector('.feedback-comment');


feedbackLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup--show');
  feedbackUserName.focus();
});

popupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup--show');
  popup.classList.remove('popup--error');
});

popupOverlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup--show');
  popup.classList.remove('popup--error');
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackUserName.value || !feedbackEmail.value || feedbackComment.value) {
    evt.preventDefault();
    popup.classList.remove('popup--error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('popup--error');
    console.log(0);
  } else {
    popup.classList.remove('popup--error');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('popup--show')) {
      evt.preventDefault();
      popup.classList.remove('popup--show');
      popup.classList.remove('popup--error');
    }
  }
});

// Слайдер

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
  let i;
  let bodyBackground = document.querySelector('.page-body');
  let slides = document.getElementsByClassName('slide');
  let dots = document.getElementsByClassName('slider-controls__button');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add('slide__hidden');
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList = dots[i].className.replace(' is-active', '');
  }

  slides[slideIndex - 1].classList.remove('slide__hidden');
  dots[slideIndex - 1].classList += ' is-active';

  bodyBackground.classList.remove('first-slide', 'second-slide', 'third-slide');
  switch (slideIndex) {
  case 1:
    bodyBackground.classList.add('first-slide');
    break;
  case 2:
    bodyBackground.classList.add('second-slide');
    break;
  case 3:
    bodyBackground.classList.add('third-slide');
    break;
  default:
    bodyBackground.classList.add('first-slide');
  }
}