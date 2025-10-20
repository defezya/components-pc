const contentEl = document.querySelector(".content");
const btnAdd = document.querySelector(".add");
const btnDel = document.querySelector(".del");
const btnClone = document.querySelector(".clone");
const divEl = document.querySelector(".block");

btnAdd.addEventListener("click", () => {
    const newDivEl = document.createElement("div");
    newDivEl.classList.add ("block");
    newDivEl.textContent = contentEl.children.length + 1;;
    contentEl.appendChild(newDivEl);
})

btnDel.addEventListener("click", () => {
    if (contentEl.children.length > 0) {
        const lastBox = contentEl.lastChild;
        contentEl.removeChild(lastBox);
    }
});

btnClone.addEventListener("click", () => {
   const lastBox = contentEl.lastChild;
   const clone = lastBox.cloneNode (true);
   contentEl.appendChild (clone);
});
