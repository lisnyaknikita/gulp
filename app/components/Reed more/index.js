const dots = document.getElementById('dots');
const more = document.getElementById('more');
const readBtn = document.getElementById('read-btn');
function readMore() {

    if (dots.style.display === "none") {
        dots.style.display = 'inline';
        readBtn.innerHTML = "Читать дальше";
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        readBtn.innerHTML = "Скрыть";
        more.style.display = 'inline';
    }
}
readBtn.addEventListener('click', readMore);