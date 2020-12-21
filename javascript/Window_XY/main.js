const target = document.querySelector("#target");
const to100 = document.querySelector(".to100");
const down = document.querySelector(".down");
const toTarget = document.querySelector(".toTarget");
const rect = target.getBoundingClientRect();

target.addEventListener("click", (e) => {
    cursorX = e.pageX;
    cursorY = e.pageY;
    clientX = e.clientX;
    clientY = e.clientY;

    console.log(rect);
    console.log(`client: ${clientX},${clientY}`);
    console.log(`page: ${cursorX},${cursorY}`);
});

toTarget.addEventListener("click", () => {
    target.scrollIntoView();
});

to100.addEventListener("click", () => {
    window.scrollTo(0, 100);
});

down.addEventListener("click", () => {
    window.scrollBy(0, 100);
});
