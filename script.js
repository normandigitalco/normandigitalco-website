(function() {
  var mobileNav = document.getElementById('mobile-nav');
  var mobileNavClose = document.getElementById('mobile-nav-close');
  var nav = document.getElementById('main-nav');

  document.addEventListener('click', function(e) {
    if (e.target.closest('.mobile-menu-btn')) {
      if (mobileNav) mobileNav.classList.toggle('open');
    }
    if (e.target.closest('#mobile-nav a')) {
      if (mobileNav) mobileNav.classList.remove('open');
    }
  });

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', function() {
      mobileNav.classList.remove('open');
    });
  }

  window.addEventListener('scroll', function() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
  });
})();
