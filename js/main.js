// Карта
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.968811, 30.326291],
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