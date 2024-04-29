document.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".menu");
  var didScroll = false;
  var lastScrollTop = 0;
  var delta = 5;

  window.addEventListener("scroll", function () {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = window.scrollY;

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop) {
      // Role para baixo
      menu.classList.add("menu-hidden");
    } else {
      // Role para cima
      menu.classList.remove("menu-hidden");
    }

    lastScrollTop = st;
  }
});
