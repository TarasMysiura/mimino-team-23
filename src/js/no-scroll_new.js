document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('#overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close'),
    bodyNoScroll = document.querySelector('body');

  /* открытие окон. */
  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add('active');
      overlay.classList.add('active');
      // bodyNoScroll.classList.add('no-scroll');
      document.body.style.overflow = 'hidden'; //выключает скролл
    }); // end click
  }); // end foreach

  document.body.style.overflow = ''; //включает скролл
  /* закрытие окон */
  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
      bodyNoScroll.classList.remove('no-scroll');
    });
  }); // end foreach

  /* закрытие по ESC */
  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay.active').classList.remove('active');
        document.querySelector('body.no-scroll').classList.remove('no-scroll');
      }
    },
    false
  );

  /* скрытие окна при клике на подложку */
  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    document.querySelector('body.no-scroll').classList.remove('no-scroll');
    this.classList.remove('no-scroll');
  });
}); // end ready
