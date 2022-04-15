document.addEventListener("DOMContentLoaded", (e) => {
    const editBtns = document.querySelectorAll(".edit-answer-btn");

    for (let i = 0; i < editBtns.length; i++) {
        const btn = editBtns[i];
        btn.addEventListener("click", (e) => {
            //get id from btn element id tag
            const answerId = e.target.id.split("-")[3];

            //get form from form element id tag
            const form = document.getElementById(
                `edit-answer-form-${answerId}`
            );

            //create hidden element to hold validation errors and append to form
            const deleteBtn = document.querySelector(
                `#delete-answer-btn-${answerId}`
            );
            deleteBtn.classList.add("hidden");

            // e.target.innerText = 'Cancel';

            const cancelBtn = document.createElement("button");
            cancelBtn.classList.add("edit-button");
            cancelBtn.innerText = "Cancel";
            const btnContainer = form.querySelector(
                ".answer-form-button-container"
            );
            btnContainer.appendChild(cancelBtn);

            const error = document.createElement("p");
            form.appendChild(error);
            error.classList.add("answererror", "hidden");
            // display form on click
            if (form.classList.contains("hidden")) {
                form.classList.remove("hidden");
                e.target.classList.add("hidden"); //?
            } else {
                form.classList.add("hidden");
                deleteBtn.classList.remove("hidden"); //second click hides edit form
                // e.target.innerText = 'Edit';
            }

            const submitBtn = document.getElementById(
                `edit-answer-submit-${answerId}`
            );

            submitBtn.addEventListener("click", async (submitEvent) => {
                submitEvent.preventDefault();
                // cancelBtn.preventDefault();
                //if an error was generated on page followed by a successful edit,
                //this prevents the error element from appearing if another edit
                //is made before refreshing the page
                document.querySelector(".answererror").classList.add("hidden");

                const content = document.getElementById(
                    `${answerId}-edit-answer`
                ).value;
                //fetch answers/:id PUT route to change answer in database
                const res = await fetch(`/answers/${answerId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        content,
                    }),
                });

                const data = await res.json();

                if (data.message === "Success") {
                    //update content
                    const contentElement = document.getElementById(
                        `${answerId}-answer-text`
                    );
                    contentElement.innerHTML = data.answer.content;
                    form.classList.add("hidden");
                    deleteBtn.classList.remove("hidden");
                    e.target.classList.remove("hidden"); //?
                    cancelBtn.remove();
                } else {
                    // create elements with error message
                    const currentError = document.querySelector(".answererror");
                    currentError.classList.remove("hidden");
                    // e.target.classList.remove("hidden") //?

                    currentError.innerHTML = data.message;
                }
            });
        });
    }
});
