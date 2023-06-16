document.querySelectorAll('.card-product__info-size').forEach((card) => {
    card.onclick = () => {
      document.querySelectorAll('.card-product__info-size').forEach((card) => 
      card.classList.remove('active'))
      card.classList.add('active')
    }
  })