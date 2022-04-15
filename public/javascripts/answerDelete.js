document.addEventListener("DOMContentLoaded", (e) => {
    const deleteBtns = document.querySelectorAll(".delete-answer-btn");

    for (let i = 0; i < deleteBtns.length; i++) {
        const btn = deleteBtns[i];
        btn.addEventListener("click", async (e) => {
            // get answerId from delete button tag
            const answerId = e.target.id.split("-")[3];

            // have user confirm delete:
            const confirmModal = document.querySelector(
                `.confirm-modal-${answerId}`
            );
            const modifyAnswerBtns = document.querySelectorAll(
                `.modify-answer-btns-${answerId}`
            );
            confirmModal.classList.remove("hidden");
            modifyAnswerBtns.forEach(button=>{
                button.classList.add('hidden')
            })
            // confirmModal.style.display = "block";

            const confirmBtn = confirmModal.querySelector(`.modal-confirm`);
            confirmBtn.addEventListener("click", async (e) => {
                //delete answer from database
                const res = await fetch(`/answers/${answerId}`, {
                    method: "DELETE",
                });

                const data = await res.json();

                // on delete, change number of answers on page to reflect deletion
                if (data.message === "Success") {
                    const answerContainer = document.getElementById(
                        `answer-${answerId}`
                    );
                    answerContainer.remove();
                    const answerVotesEle =
                        document.querySelector(".num-answers");
                    let answerVotes = answerVotesEle.innerText
                        .toString()
                        .split("")[0];
                    // console.log(answerVotes)
                    let parsedAnswerVotes = parseInt(answerVotes, 10);
                    console.log(parsedAnswerVotes);
                    let updatedAnswerVotes = parsedAnswerVotes - 1;

                    // handle plural/singular answer(s)
                    answerVotesEle.innerText = `${updatedAnswerVotes} Answers`;
                    if (answerVotesEle.innerText === "1 Answers") {
                        answerVotesEle.innerText = "1 Answer";
                    }
                }
            });
            const cancelBtn = confirmModal.querySelector(`.modal-cancel`);
            cancelBtn.addEventListener("click", async (e) => {
                confirmModal.classList.add("hidden");
                modifyAnswerBtns.forEach(button=>{
                    button.classList.remove('hidden')
                })
            })
        });
    }
});
