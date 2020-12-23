let screenLog = document.querySelector(".screen-log");
let target = document.querySelector(".target");
let horizontal = document.querySelector(".horizontal");
let vertical = document.querySelector(".vertical");

addEventListener("load", () => {
    const targetRect = target.getBoundingClientRect();
    const targetW = targetRect.width / 2;
    const targetH = targetRect.height / 2;

    document.addEventListener("mousemove", (e) => {
        screenLog.innerText = `${e.clientX}, ${e.clientY}`;

        screenLog.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

        target.style.transform = `translate(${e.clientX - targetW}px, ${
            e.clientY - targetH
        }px)`;

        horizontal.style.transform = `translateY(${e.clientY}px)`;
        vertical.style.transform = `translateX(${e.clientX}px)`;
    });
});
