const startQuizBtn = document.querySelector(".btn button");
const rules = document.querySelector('.rulesBox');

startQuizBtn.onclick = () => {
    rules.classList.add("activeInfo");
    // rules.setAttribute("style", "opacity: 1; z-index: 59999; pointer-events: auto;");
}