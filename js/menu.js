// Переключение мобильного меню по бургер-кнопке
(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('main-nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });
})();
