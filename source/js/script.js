$(document).ready(function () {
  $('.teachers__slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    center: true,
    navText: [" "],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1366: {
        items: 4,
        nav: true,
        center: false
      }
    }
  });

  const onShowModal = () => {
    $('.modal-menu').removeClass('d-none');
    $('.modal-overlay').removeClass('d-none');
  }

  const onRemoveModal = () => {
    $('.modal-menu').addClass('d-none');
    $('.modal-overlay').addClass('d-none');
  }

  $('.header__button-menu').click(onShowModal);
  $('.modal-manu__close').click(onRemoveModal);

  $(window).resize(function () {
    const win = $(this);
    if (win.width() >= 1384) {
      onRemoveModal();
    }
  });
});

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

