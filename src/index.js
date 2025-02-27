// index.js
import img from "./asset/burgerImg.jpg";
import "./styles.css";
import { homePage } from "./homePage";
import { menuPage } from "./menuPage.js";
import { abboutPage } from "./aboutPage.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const imgContainer = document.createElement("img");
imgContainer.src = img;
imgContainer.width = 300;
content.appendChild(imgContainer);

content.innerHTML = "";
homePage(content);
homeBtn.classList.add("active");
homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    homePage(content);
    homeBtn.classList.add("active");
    menuBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
});
menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    menuPage(content);
    menuBtn.classList.add("active");
    homeBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
});
aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    abboutPage(content);
    aboutBtn.classList.add("active");
    menuBtn.classList.remove("active");
    homeBtn.classList.remove("active");
})

console.log("ok")