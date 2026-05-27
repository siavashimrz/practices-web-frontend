const passLenght = 10;
const characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%&=';
let password;

document.querySelector("button").addEventListener('click', () => {
    password = '';
    for (let i = 0; i < passLenght; i++) {
        let randIndex = Math.floor(Math.random() * characters.length);
        password += characters[randIndex];
    }
    document.querySelector("input").setAttribute("value", password);
});

document.querySelector("span").addEventListener("click", () => {
    if (!password) {
        alert("پسوردی تولید نشده است!")
    } else {
        navigator.clipboard.writeText(password);
        document.querySelector("input").setAttribute("value", "پسورد کپی شد!");
        setTimeout(() => {
            document.querySelector("input").setAttribute("value", password);

        }, 1000)
    }
});


