/* 1 Определение текущего размера окна браузера */
window.onresize = () => {
    console.log(`width = ${window.innerWidth}px\nHeight = ${window.innerHeight}px`)
};
/* 2 Подтверждение закрытия страницы */
window.onbeforeunload = (evt) => {
    evt.preventDefault();
};
/* 3 Управление историей переходов */
const backButton = document.querySelector('.backButton');
const forwardButton = document.querySelector('.forwardButton');
backButton.addEventListener('click', () => {
    window.history.back();
});
forwardButton.addEventListener('click', () => {
    window.history.forward();
});