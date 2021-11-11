const startQuizBtn = document.querySelector(".btn button");
const rules = document.querySelector('.rulesBox');
const exitBtn = document.querySelector(".exitBtn");
const continueBtn = document.querySelector(".continueBtn");
const ques = document.querySelector(".questions");

const nextBtn = document.querySelector(".nextBtn");
const totalQue = document.querySelector(".totalQue");

startQuizBtn.onclick = () => {
    rules.classList.add("activeInfo");
    // rules.setAttribute("style", "opacity: 1; z-index: 59999; pointer-events: auto;");
}

exitBtn.onclick = () => {
    rules.classList.remove("activeInfo");
}

continueBtn.onclick = () => {
    rules.classList.remove("activeInfo");
    ques.classList.add("activeInfo");
    showQuestion(0);
}


function showQuestion(index) {
    const questionText = document.querySelector(".questionText");
    const allOptions = document.querySelector(".allOptions");

    let optionTag = '<div class="options">' + questions[index].options[0] + "</div>"
                   +'<div class="options">' + questions[index].options[1] + "</div>"
                   +'<div class="options">' + questions[index].options[2] + "</div>"
                   +'<div class="options">' + questions[index].options[3] + "</div>"
    let quesTag = "<span>" + questions[index].num + ". " + questions[index].question + "</span>";

    questionText.innerHTML = quesTag;
    allOptions.innerHTML = optionTag;
    console.log(optionTag);

    let totalQuesTag = `<p>${questions[index].num} of 5 questions</p>`;
    totalQue.innerHTML = totalQuesTag;
}



let queCount = 0;
nextBtn.onclick = () => {
    if (queCount < questions.length - 1) {
        queCount++;
        showQuestion(queCount);
    } else {
        document.write("<h1>Quiz Completed</h1>");
    }
}