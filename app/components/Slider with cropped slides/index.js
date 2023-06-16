const howitviewSlider = new Swiper('.howitview-slider', {
    slidesPerView: 3,
    spaceBetween: 32,
    centeredSlides: true,
    initialSlide: 1,
    // If we need pagination
    pagination: {
      el: '.howitview-pagination',
      clickable: true,
    },

  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
  });