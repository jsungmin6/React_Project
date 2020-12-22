let screenLog = document.querySelector(".screen-log");
let target = document.querySelector(".target");
let horizontal = document.querySelector(".horizontal");
let vertical = document.querySelector(".vertical");
document.addEventListener("mousemove", logKey);

function logKey(e) {
    screenLog.innerText = `${e.clientX}, ${e.clientY}`;

    screenLog.style.top = e.clientY + "px";
    screenLog.style.left = e.clientX + "px";

    target.style.top = e.clientY + "px";
    target.style.left = e.clientX + "px";

    horizontal.style.top = e.clientY + "px";
    vertical.style.left = e.clientX + "px";
}
