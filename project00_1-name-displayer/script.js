const btnElement = document.getElementById("btnClick");
const spanElements = document.getElementById("updateContent");
const titleElement = document.getElementsByClassName("title")[0];

btnElement.onclick = function () {
    const yourName = prompt("لطفاً نام خود را وارد کنید:");
    if (yourName) {
        spanElements.textContent = yourName + "!";
    }
    else {
        spanElements.textContent = "بی‌نام!";
    }

    titleElement.classList.add("underline");
}