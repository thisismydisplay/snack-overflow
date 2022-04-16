const voteSpans = document.querySelectorAll(".vote-span");
const numAnswerSpans = document.querySelectorAll(".num-answer-span");
const updatedSpans = document.querySelectorAll(".updated-span");
document.addEventListener("DOMContentLoaded", async () => {

    numAnswerSpans.forEach((numAnswerSpan) => {
        // check for undefined vote counts and change to 0
        if (numAnswerSpan.innerText === "undefined") {
            numAnswerSpan.innerText = "0";
        }
        // check for listings with 1 answer and change 'Answers' to 'answer'
        if (numAnswerSpan.innerText == "1") {
            let identifier = numAnswerSpan.id;
            let num = identifier.slice(4);
            let el = document.querySelector(`.num-answer-label${num}`);
            el.innerText = " Answer";
        }
    });
    voteSpans.forEach((voteSpan) => {
        // set undefined vote counts to 0
        if (voteSpan.innerText === "undefined" || voteSpan.innerText === "") {
            voteSpan.innerText = "0";
        }
    });
    // updatedSpans.forEach((updatedSpan) => {
    //     // set undefined vote counts to 0
    //     if (updatedSpan.innerText === "undefined") {
    //         updatedSpan.innerText = "never";
    //     }
    // });
})
