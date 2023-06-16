function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const headerLinks = document.querySelector('.header__main-links')
    const genderLinks = document.querySelector('.gender')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        headerLinks.classList.add('active')
        genderLinks.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        headerLinks.classList.remove('active')
        genderLinks.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        headerLinks.classList.remove('active')
        genderLinks.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)
  
  
  
  const menuItemLinks = document.querySelectorAll('.menu__item-link');
  function deleteClasses() {
    menuItemLinks.forEach(menuItemLink => {
      if (menuItemLink.parentElement.classList.contains('open')) {
        menuItemLink.parentElement.classList.remove('open');
      }
    })
  }
  
  
  function navbarMenu2() {
    menuItemLinks.forEach(menuItemLink => {
      menuItemLink.addEventListener('click', () => {
        deleteClasses();
        menuItemLink.parentElement.classList.toggle('open');
      })
    })
  }
  navbarMenu2()
  
  
  function closeBtnSubmenu() {
    const submenuCloseBtns = document.querySelectorAll('.submenu__item-close');
    const submenus = document.querySelectorAll('.submenu');
    submenuCloseBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        submenus.forEach(submenu => {
          submenu.parentElement.classList.remove('open');
        })
      })
    })
    // submenuCloseBtn.addEventListener('click', () => {
    //   submenu.parentElement.classList.remove('open');
    // })
  }
  closeBtnSubmenu()