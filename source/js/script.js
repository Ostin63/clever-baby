/* eslint-disable no-undef */
const body = document.querySelector('body');
const modalMenu = body.querySelector('.modal-menu');
const overlay = body.querySelector('.modal-overlay');
const buttonMenu = body.querySelector('.header__button-menu');
const menuClose = modalMenu.querySelector('.modal-menu__close');
const menuLinks = modalMenu.querySelectorAll('.modal-menu__nav-link');
const languageButtonLink = body.querySelector('.language__button-link');
const groupButtons = body.querySelectorAll('.group__button');
const recordingLink = body.querySelector('.recording__link');
const modalForm = body.querySelector('.modal-form');
const formClose = modalForm.querySelector('.modal-form__close');
const form = modalForm.querySelector('#sign-up');

const dataSabmitUrl = 'https://echo.htmlacademy.ru/';

const getTemplateContent = (block, item) =>
  block.querySelector(`#${item}`)
    .content
    .querySelector(`.${item}`);

const success = getTemplateContent(body, 'alert__success');
const errorLoading = getTemplateContent(body, 'alert__error-loading');

const successElement = success.cloneNode(true);
const successErrorLoading = errorLoading.cloneNode(true);

const map = L.map('map')
  .setView({
    lat: 59.938667,
    lng: 30.323073,
  }, 17);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/stack.svg#pin',
  iconSize: [32, 39],
  iconAnchor: [16, 39],
});

const mainPinMarker = L.marker(
  {
    lat: 59.938667,
    lng: 30.323073,
  },
  {
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const onAddForm = () => {
  modalForm.classList.remove('d-none');
  overlay.classList.remove('d-none');
};

const onRemoveForm = () => {
  modalForm.classList.add('d-none');
  overlay.classList.add('d-none');
};

const onShowModal = () => {
  modalMenu.classList.remove('d-none');
  overlay.classList.remove('d-none');
};

const onRemoveModal = () => {
  modalMenu.classList.add('d-none');
  overlay.classList.add('d-none');
};

const checkWidth = () => {
  if (window.innerWidth >= 1367) {
    onRemoveModal();
  }
};

const onEscRemoveModal = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    onRemoveModal();
  }
};

const onEscRemoveForm = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    onRemoveForm();
  }
};

const onSuccessRemove = () => {
  successElement.remove();
  document.removeEventListener('click', onSuccessRemove);
};

const onElementEscRemove = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    onSuccessRemove();
    document.removeEventListener('keydown', onElementEscRemove);
  }
};

const alertSuccess = () => {
  body.append(successElement);
  document.addEventListener('keydown', onElementEscRemove);
  document.addEventListener('click', onSuccessRemove);
};

const onErrorRemove = () => {
  successErrorLoading.remove();
  document.removeEventListener('click', onErrorRemove);
};

const onErrorEscRemove = () => {
  if (isEscEvent) {
    onErrorRemove();
    document.removeEventListener('keydown', onErrorEscRemove);
  }
};

const alertError = () => {

  onRemoveForm();
  body.append(successErrorLoading);
  document.addEventListener('keydown', onErrorEscRemove);
  document.addEventListener('click', onErrorRemove);
};

const alertForm = () => {
  alertSuccess();
  onRemoveForm();
};

const sendData = (url, bodyForm, alertSucces, error) => {
  fetch(url, {
    method: 'POST',
    body: bodyForm,
  })
    .then((response) => {
      if (response.ok) {
        alertSucces();
      } else {
        error();
      }
    })
    .catch(() => {
      error();
    });
};

const onFormSend = (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(dataSabmitUrl, formData, alertForm, alertError);
};

for (const groupButton of groupButtons) {
  groupButton.addEventListener('click', onAddForm);
}

form.addEventListener('submit', onFormSend);
document.addEventListener('keydown', onEscRemoveModal);
document.addEventListener('keydown', onEscRemoveForm);
recordingLink.addEventListener('click', onAddForm);
languageButtonLink.addEventListener('click', onAddForm);
formClose.addEventListener('click', onRemoveForm);
window.addEventListener('resize', checkWidth);
buttonMenu.addEventListener('click', onShowModal);
menuClose.addEventListener('click', onRemoveModal);

for (const menuLink of menuLinks) {
  menuLink.addEventListener('click', onRemoveModal);
}

/* eslint-disable no-undef */
$(document).ready(() => {
  $('.teachers__slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    center: true,
    navText: [' '],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1366: {
        items: 4,
        nav: true,
        center: false,
      },
    },
  });
});
