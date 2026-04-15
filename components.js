(function () {
  function initHamburger() {
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('navMenu');
    if (!hamburger || !navMenu) return;
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  function loadComponent(placeholderId, url, callback) {
    var el = document.getElementById(placeholderId);
    if (!el) return;
    fetch(url)
      .then(function (r) { return r.text(); })
      .then(function (html) {
        el.outerHTML = html;
        if (callback) callback();
      })
      .catch(function (err) {
        console.warn('Failed to load component:', url, err);
      });
  }

  loadComponent('nav-placeholder', '/_nav.html', initHamburger);
  loadComponent('footer-placeholder', '/_footer.html');
})();
