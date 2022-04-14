//check for undefined votes and set to 0
const voteSpans = document.querySelectorAll(".vote-span");
const numAnswerSpans = document.querySelectorAll(".num-answer-span");
document.addEventListener("DOMContentLoaded", async() => {
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
    const answerVotesEle = document.querySelector(".num-answers");

    if (answerVotesEle.innerText === "1 Answers") {
        answerVotesEle.innerText = "1 Answer";
    }

    const votes = document.querySelectorAll("vote-button");
    votes.forEach((vote) => {
        vote.addEventListener("click", async(e) => {
            if (vote.classList.includes("question-upvote-button")) {
                const questionId = e.target.split("-")[2];
                console.log("FETCH!!!");
                const res = await fetch(`/questions/${questionId}/vote`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ vote.value })
                });
                console.log("AFTER FETCH!!!");
                const data = await res.json();

                if (data.message === "Success") {
                    //update content
                    const voteSpan = document.querySelector(".question-votes");
                    let questionVotes = voteSpan.innerText.toString();
                    // console.log(answerVotes)
                    let parsedQuestionVotes = parseInt(questionVotes, 10);

                    let updatedQuestionVotes = parsedQuestionVotes + 1;
                    voteSpan.innerText = `${updatedQuestionVotes}`;
                    e.target.style.backgroundColor = "#f48224";
                } else {
                    // #696F75 grey
                    // #f48224 orange
                    //update content
                    const voteSpan = document.querySelector(".question-votes");
                    let questionVotes = voteSpan.innerText.toString();
                    // console.log(answerVotes)
                    let parsedQuestionVotes = parseInt(questionVotes, 10);

                    let updatedQuestionVotes = parsedQuestionVotes - 1;
                    voteSpan.innerText = `${updatedQuestionVotes}`;
                    e.target.style.backgroundColor = "#696F75";
                }
            }
            if (vote.classList.includes("question-downvote-button")) {
                const questionId = e.target.split("-")[2];
                const res = await fetch(`/questions/${questionId}/vote`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                });
            }
            if (vote.classList.includes("answer-upvote-button")) {
                const answerId = e.target.split("-")[2];
                const res = await fetch(`/answers/${answerId}/vote`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                });
            }
            if (vote.classList.includes("answer-downvote-button")) {
                const answerId = e.target.split("-")[2];
                const res = await fetch(`/answers/${answerId}/vote`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                });
            }
        });
    });
});