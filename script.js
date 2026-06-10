const btnSwitch = document.querySelector(".switch");
const body = document.body;

btnSwitch.addEventListener("click", () => {
    body.classList.toggle("on");
});