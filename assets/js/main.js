  // SHow menu
  const menuBar = document.getElementById('menu_bar');
  const navToggle = document.getElementById('nav__toggle');
  const navClose = document.getElementById('nav__close');


  if (navToggle) {
      navToggle.addEventListener('click', () => {
          menuBar.classList.add('open-bar')
      })
  }

  if (navClose) {
      navClose.addEventListener('click', () => {
          menuBar.classList.remove('open-bar');
      })
  }

  const navLink = document.querySelectorAll('.nav__item')

  function linkAction() {
      const menuBar = document.getElementById('menu_bar')
          // When we click on each nav__link, we remove the show-menu class
      menuBar.classList.remove('open-bar')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction));