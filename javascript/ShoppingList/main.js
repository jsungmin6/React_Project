const body = document.querySelector(".body");
const input = document.querySelector(".input");
const plus = document.querySelector(".plus");
plus.addEventListener("click", create);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        create();
    }
});

function create() {
    const inputText = input.value;
    if (inputText == false) {
        input.focus();
        return;
    }
    const list = document.createElement("div");
    const trash = document.createElement("button");
    trash.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    trash.setAttribute("class", "trash");
    list.setAttribute("class", "sList");
    list.textContent = inputText;
    list.appendChild(trash);
    body.appendChild(list);
    list.scrollIntoView({ block: "center" });
    input.value = "";
    input.focus();

    trash.addEventListener("click", (e) => {
        body.removeChild(list);
    });
}
