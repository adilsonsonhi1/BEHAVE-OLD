document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.querySelector('.offcanvas-open-btn');
  const closeBtn = document.querySelector('.offcanvas-close-btn');
  const offcanvas = document.querySelector('.offcanvas');
  const overlay = document.querySelector('.overlay');

  openBtn.addEventListener('click', function() {
    offcanvas.classList.add('open');
    overlay.style.display = 'block';
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";
  });

  closeBtn.addEventListener('click', function() {
    offcanvas.classList.remove('open');
    overlay.style.display = 'none';
    document.body.style.overflowY = "initial";
    document.documentElement.style.overflowY = "initial";
  });

  overlay.addEventListener('click', function() {
    offcanvas.classList.remove('open');
    overlay.style.display = 'none';
    document.body.style.overflowY = "initial";
    document.documentElement.style.overflowY = "initial";
  });
});
