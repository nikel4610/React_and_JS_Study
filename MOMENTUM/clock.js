const clock = document.querySelector("h2#clock")

function sayHello() {
    console.log("hello");
}

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0"); // 두글자, 아닐시 0추가해서 두글자로 만들어야함
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);