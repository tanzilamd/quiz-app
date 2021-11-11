let questions = [
    {
        num: 1,
        questions: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessors",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        num: 2,
        questions: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        options: [
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets"
        ]
    },
    {
        num: 3,
        questions: "Which HTML attribute is used to define inline styles?",
        answer: "Style",
        options: [
            "Class",
            "Style",
            "Font",
            "Styles"
        ]
    },
    {
        num: 4,
        questions: "Inside which HTML element do we put the JavaScript?",
        answer: "<script>",
        options: [
            "<js>",
            "<javascript>",
            "<scripting>",
            "<script>"
        ]
    },
    {
        num: 5,
        questions: "What is the correct HTML element for the largest heading?",
        answer: "Cascading Style Sheets",
        options: [
            "<heading>",
            "<h6>",
            "<head>",
            "<h1>"
        ]
    },
];

questions.forEach(i => {
    console.log(i.options);
});