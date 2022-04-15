const voteSpans = document.querySelectorAll(".vote-span");
const numAnswerSpans = document.querySelectorAll(".num-answer-span");
document.addEventListener("DOMContentLoaded", async () => {
    numAnswerSpans.forEach((numAnswerSpan) => {
        if (numAnswerSpan.innerText === "undefined") {
            numAnswerSpan.innerText = "0";
        }
        if (numAnswerSpan.innerText == "1") {
            let identifier = numAnswerSpan.id;
            let num = identifier.slice(4);
            let el = document.querySelector(`.num-answer-label${num}`);
            el.innerText = " Answer";
        }
    });
    voteSpans.forEach((voteSpan) => {
        if (voteSpan.innerText === "undefined" || voteSpan.innerText === "") {
            voteSpan.innerText = "0";
        }
    });
})
