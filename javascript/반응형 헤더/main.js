const toggleBtn = document.querySelector(".toogle");
const menu = document.querySelector(".menus");
const icons = document.querySelector(".icons");

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})