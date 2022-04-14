
    //check for undefined votes and set to 0
    const voteSpans = document.querySelectorAll(".vote-span");
    const voteAnswerSpan = document.querySelector(".num-answers")
    document.addEventListener("DOMContentLoaded", async () => {
        voteSpans.forEach((voteSpan) => {
            if (voteSpan.innerText === "undefined") {
                voteSpan.innerText = "0";
            }
        });
        if (voteAnswerSpan.innerText === "1 Answers") {
            voteAnswerSpan.innerText = '1 Answer'
        }
    });

