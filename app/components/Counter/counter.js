function cartCount() {
    const cartCounts = document.querySelectorAll('.item-left__count');
    // const countMinus = document.querySelectorAll('.minus');
    // const countPlus = document.querySelectorAll('.plus');
    // const countInput = document.querySelectorAll('.item-left__count-input');
    cartCounts.forEach(count => {
      count.querySelector('.item-left__count-input').value = 1;
      count.addEventListener('click', (event) => {
        if (event.target.classList.contains('minus')) {
          count.querySelector('.item-left__count-input').value--;
        }
        if (event.target.classList.contains('plus')) {
          count.querySelector('.item-left__count-input').value++;
        }
      })
    })
  }
  cartCount()