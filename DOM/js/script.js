//element attributes
const textType = document.getElementById("textType");
const inputText = document.getElementById("inputText");
const button = document.getElementById("addButton");
//page attributes
const fontType = document.getElementById("fontType");
const fontSize = document.getElementById("fontSize");
const fontColor = document.getElementById("fontColor");
const backgroundColor = document.getElementById("backgroundColor");

//element form handler
button.addEventListener("click", function(event) {
    event.preventDefault();
    const tagName = textType.value.trim();
    const textContent = inputText.value.trim();

    if (tagName && textContent) {
        const newElement = document.createElement(tagName);
        const newContent = document.createTextNode(textContent);
        newElement.classList.add("removable");
        newElement.appendChild(newContent);

        const division = document.getElementById("break");
        document.body.insertBefore(newElement, division);
    } else {
        alert("Please enter both text type and text content.");
    }
});

//page attribute eventlisteners
document.addEventListener("DOMContentLoaded", function() {
backgroundColor.addEventListener("input", () => {
    document.body.style.backgroundColor = backgroundColor.value.trim();
});

fontColor.addEventListener("input", () => {
    document.body.style.color = fontColor.value.trim();
});

fontSize.addEventListener("input", () => {
    document.body.style.fontSize = fontSize.value.trim();
});
fontType.addEventListener("input", () => {
    document.body.style.fontFamily = fontType.value.trim();
});
});

//element deleter
document.addEventListener("dblclick", (event) => {
    const target = event.target;
    if (target.closest(".removable")) {
    target.parentNode.removeChild(target);
    }
});
