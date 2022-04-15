//check for undefined votes and set to 0
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
    const answerVotesEle = document.querySelector(".num-answers");

    if (answerVotesEle.innerText === "1 Answers") {
        answerVotesEle.innerText = "1 Answer";
    }
    const thisQuestion = document.querySelector(".question-container");
    const qId = thisQuestion.id.split("-")[2];

    const res = await fetch(`/questions/${qId}/vote`);
    console.log(res)
    const {type} = await res.json();
    if (type !== "none") {
        if (type === "upvote") {
            const up = document.querySelector(".question-upvote-button");
            up.style.borderBottom = "30px solid #f48224";
        } else if (type === "downvote") {
            const down = document.querySelector(".question-downvote-button");
            down.style.borderTop = "30px solid #f48224";
        }
    }

    const votes = document.querySelectorAll(".vote-button");
    votes.forEach((vote) => {
        vote.addEventListener("click", async (e) => {
            if (vote.classList.contains("question-upvote-button")) {
                const questionId = e.target.id.split("-")[2];
                console.log("FETCH!!!");
                const res = await fetch(`/questions/${questionId}/vote`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        type: "upvote",
                    }),
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
                    e.target.style.borderBottom = "30px solid #f48224";
                } else if (data.message === "Removed") {
                    // #696F75 grey
                    // #f48224 orange
                    //update content
                    const voteSpan = document.querySelector(".question-votes");
                    let questionVotes = voteSpan.innerText.toString();
                    // console.log(answerVotes)
                    let parsedQuestionVotes = parseInt(questionVotes, 10);

                    let updatedQuestionVotes = parsedQuestionVotes - 1;
                    voteSpan.innerText = `${updatedQuestionVotes}`;
                    e.target.style.borderBottom = "30px solid #696F75";
                } else {
                    //do nothing
                }
            }
            if (vote.classList.contains("question-downvote-button")) {
                const questionId = e.target.id.split("-")[2];
                const res = await fetch(`/questions/${questionId}/vote`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        type: "downvote",
                    }),
                });
                console.log("AFTER FETCH!!!");
                const data = await res.json();

                if (data.message === "Success") {
                    //update content
                    const voteSpan = document.querySelector(".question-votes");
                    let questionVotes = voteSpan.innerText.toString();
                    // console.log(answerVotes)
                    let parsedQuestionVotes = parseInt(questionVotes, 10);

                    let updatedQuestionVotes = parsedQuestionVotes - 1;
                    voteSpan.innerText = `${updatedQuestionVotes}`;
                    e.target.style.borderTop = "30px solid #f48224";
                } else if (data.message === "Removed") {
                    // #696F75 grey
                    // #f48224 orange
                    //update content
                    const voteSpan = document.querySelector(".question-votes");
                    let questionVotes = voteSpan.innerText.toString();
                    // console.log(answerVotes)
                    let parsedQuestionVotes = parseInt(questionVotes, 10);

                    let updatedQuestionVotes = parsedQuestionVotes + 1;
                    voteSpan.innerText = `${updatedQuestionVotes}`;
                    e.target.style.borderTop = "30px solid #696F75";
                } else {
                    //do nothing
                }
            }
            if (vote.classList.contains("answer-upvote-button")) {
                const answerId = e.target.split("-")[2];
                const res = await fetch(`/answers/${answerId}/vote`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                });
            }
            if (vote.classList.contains("answer-downvote-button")) {
                const answerId = e.target.split("-")[2];
                const res = await fetch(`/answers/${answerId}/vote`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                });
            }
        });
    });
});
