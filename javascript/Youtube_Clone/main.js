const titleButton = document.querySelector('.infoAndList .info .metaData .titleAndButton .titleButton');
const title = document.querySelector('.infoAndList .info .metaData .titleAndButton .title');

titleButton.addEventListener('click', () => {
    titleButton.classList.toggle('clicked');
    title.classList.toggle('clamp');
});