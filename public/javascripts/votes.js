const voteSpans = document.querySelectorAll(".vote-span");
document.addEventListener("DOMContentLoaded", async () => {

    // set undefined vote counts to 0
    voteSpans.forEach((voteSpan) => {
        if (voteSpan.innerText === "undefined" || voteSpan.innerText === "") {
            voteSpan.innerText = "0";
        }
    });
    // handle plural/singular answer(s)
    const answerVotesEle = document.querySelector(".num-answers");
    if (answerVotesEle.innerText === "1 Answers") {
        answerVotesEle.innerText = "1 Answer";
    }

    //get questionId from element tag
    const thisQuestion = document.querySelector(".question-container");
    const qId = thisQuestion.id.split("-")[2];

    // fetch question vote GET route
    const qRes = await fetch(`/questions/${qId}/vote`);
    const { qType } = await qRes.json();

    // only modify buttons with existing votes
    if (qType !== "none") {
        // restore users stored votes
        if (qType === "upvote") {
            const up = document.querySelector(".question-upvote-button");
            up.style.borderBottom = "30px solid #f48224";
        } else if (qType === "downvote") {
            const down = document.querySelector(".question-downvote-button");
            down.style.borderTop = "30px solid #f48224";
        }
    }

    const answers = document.querySelectorAll(".answer-sidebar-container");
    // display users existing votes
    async function updateAnswerVotes(answer, aId) {
        const aRes = await fetch(`/answers/${aId}/vote`);
        const { aType } = await aRes.json();
        console.log(aRes);
        if (aType !== "none") {
            if (aType === "upvote") {
                const up = answer.querySelector(".answer-upvote-button");
                up.style.borderBottom = "30px solid #f48224";
            } else if (aType === "downvote") {
                const down = answer.querySelector(".answer-downvote-button");
                down.style.borderTop = "30px solid #f48224";
            }
        }
    }

    answers.forEach((answer) => {
        const aId = answer.id.split("-")[3];
        updateAnswerVotes(answer, aId);
    });


    const votes = document.querySelectorAll(".vote-button");
    votes.forEach((vote) => {
        vote.addEventListener("click", async (e) => {
            // question upvote database manipulation
            if (vote.classList.contains("question-upvote-button")) {
                e.preventDefault();
                const questionId = e.target.id.split("-")[2];
                const res = await fetch(`/questions/${questionId}/vote`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        type: "upvote",
                    }),
                });
                const data = await res.json();

                //update content on page
                if (data.message === "Success") {
                    const voteSpan = document.querySelector(".question-votes");
                    let questionVotes = voteSpan.innerText.toString();
                    let parsedQuestionVotes = parseInt(questionVotes, 10);
                    let updatedQuestionVotes = parsedQuestionVotes + 1;
                    voteSpan.innerText = `${updatedQuestionVotes}`;
                    e.target.style.borderBottom = "30px solid #f48224";
                } else if (data.message === "Removed") {
                    const voteSpan = document.querySelector(".question-votes");
                    let questionVotes = voteSpan.innerText.toString();
                    let parsedQuestionVotes = parseInt(questionVotes, 10);
                    let updatedQuestionVotes = parsedQuestionVotes - 1;
                    voteSpan.innerText = `${updatedQuestionVotes}`;
                    e.target.style.borderBottom = "30px solid #696F75";
                } else {
                    //do nothing
                }
            }
            if (vote.classList.contains("question-downvote-button")) {
                e.preventDefault();

                // question downvote database manipulation
                const questionId = e.target.id.split("-")[2];
                const res = await fetch(`/questions/${questionId}/vote`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        type: "downvote",
                    }),
                });
                const data = await res.json();

                // update content on page
                if (data.message === "Success") {
                    const voteSpan = document.querySelector(".question-votes");
                    let questionVotes = voteSpan.innerText.toString();
                    let parsedQuestionVotes = parseInt(questionVotes, 10);
                    let updatedQuestionVotes = parsedQuestionVotes - 1;
                    voteSpan.innerText = `${updatedQuestionVotes}`;
                    e.target.style.borderTop = "30px solid #f48224";
                } else if (data.message === "Removed") {
                    const voteSpan = document.querySelector(".question-votes");
                    let questionVotes = voteSpan.innerText.toString();
                    let parsedQuestionVotes = parseInt(questionVotes, 10);
                    let updatedQuestionVotes = parsedQuestionVotes + 1;
                    voteSpan.innerText = `${updatedQuestionVotes}`;
                    e.target.style.borderTop = "30px solid #696F75";
                } else {
                    //do nothing
                }
            }
            if (vote.classList.contains("answer-upvote-button")) {
                e.preventDefault();

                // answer upvote database manipulation
                const answerId = e.target.id.split("-")[2];
                const res = await fetch(`/answers/${answerId}/vote`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        type: "upvote",
                    }),
                });
                const data = await res.json();

                // update content on page
                if (data.message === "Success") {
                    const voteSpan = document.querySelector(
                        `.answer-${answerId}-vote-span`
                    );
                    let answerVotes = voteSpan.innerText.toString();
                    let parsedAnswerVotes = parseInt(answerVotes, 10);
                    let updatedAnswerVotes = parsedAnswerVotes + 1;
                    voteSpan.innerText = `${updatedAnswerVotes}`;
                    e.target.style.borderBottom = "30px solid #f48224";
                } else if (data.message === "Removed") {
                    const voteSpan = document.querySelector(
                        `.answer-${answerId}-vote-span`
                    );
                    let answerVotes = voteSpan.innerText.toString();
                    let parsedAnswerVotes = parseInt(answerVotes, 10);
                    let updatedAnswerVotes = parsedAnswerVotes - 1;
                    voteSpan.innerText = `${updatedAnswerVotes}`;
                    e.target.style.borderBottom = "30px solid #696F75";
                } else {
                    //do nothing
                }
            }
            if (vote.classList.contains("answer-downvote-button")) {
                e.preventDefault();

                // answer downvote database manipulation
                const answerId = e.target.id.split("-")[2];
                const res = await fetch(`/answers/${answerId}/vote`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        type: "downvote",
                    }),
                });
                const data = await res.json();

                // update content on page
                if (data.message === "Success") {
                    const voteSpan = document.querySelector(
                        `.answer-${answerId}-vote-span`
                    );
                    let answerVotes = voteSpan.innerText.toString();
                    let parsedAnswerVotes = parseInt(answerVotes, 10);
                    let updatedAnswerVotes = parsedAnswerVotes - 1;
                    voteSpan.innerText = `${updatedAnswerVotes}`;
                    e.target.style.borderTop = "30px solid #f48224";
                } else if (data.message === "Removed") {
                    const voteSpan = document.querySelector(
                        `.answer-${answerId}-vote-span`
                    );
                    let answerVotes = voteSpan.innerText.toString();
                    let parsedAnswerVotes = parseInt(answerVotes, 10);
                    let updatedAnswerVotes = parsedAnswerVotes + 1;
                    voteSpan.innerText = `${updatedAnswerVotes}`;
                    e.target.style.borderTop = "30px solid #696F75";
                } else {
                    //do nothing
                }
            }
        });
    });
});
