document.addEventListener("DOMContentLoaded", (e) => {
    const deleteBtns = document.querySelectorAll(".delete-answer-btn");

    for (let i = 0; i < deleteBtns.length; i++) {
        const btn = deleteBtns[i];
        btn.addEventListener("click", async (e) => {
            console.log(e.target.id);
            const answerId = e.target.id.split("-")[3];
            const res = await fetch(`/answers/${answerId}`, {
                method: "DELETE"
            });

            const data = await res.json();
            if (data.message === "Success") {
                const answerContainer = document.getElementById(
                    `answer-${answerId}`
                );
                answerContainer.remove();
                const answerVotesEle = document.querySelector('.num-answers')
                let answerVotes = answerVotesEle.innerText.toString().split('')[0]
                // console.log(answerVotes)
                let parsedAnswerVotes = parseInt(answerVotes, 10);
                console.log(parsedAnswerVotes)
                let updatedAnswerVotes = parsedAnswerVotes - 1;
                answerVotesEle.innerText = `${updatedAnswerVotes} Answers`;
                if (answerVotesEle.innerText === "1 Answers") {
                    answerVotesEle.innerText = '1 Answer'
                }
            }
        });
    }
});
