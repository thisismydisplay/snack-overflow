window.addEventListener("DOMContentLoaded", (event) => {
    const input = document.getElementById("searchbar-input");
    const matchedContainer = document.querySelector('.sDropDown')
    // on input create list of search results, update results as input is given
    input.addEventListener('input', async (event) => {
        const aTagMatches = document.querySelectorAll('.Sresults-drop-down');
        const search = event.target.value;
        aTagMatches.forEach((ele) => ele.remove());

        if (search) {
            matchedContainer.classList.remove('hidden')
            const res = await fetch('/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: search
                })
            });
            const response = await res.json();
            console.log(response);
            const dropDown = document.getElementById("mySDropDown");
            response.forEach((question) => {
                const aTag = document.createElement("a");
                aTag.setAttribute("href", `/questions/${question.id}`);
                aTag.setAttribute("class", `Sresults-drop-down`);
                aTag.innerText = question.title;
                dropDown.appendChild(aTag);

            });
        } else {
            matchedContainer.classList.add('hidden');
        }

    });
});
