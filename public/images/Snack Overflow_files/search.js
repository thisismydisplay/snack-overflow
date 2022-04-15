window.addEventListener("DOMContentLoaded", (event) => {
    const input = document.getElementById("searchbar-input");
    input.addEventListener('input', async (event) => {
        const aTagMatches = document.querySelectorAll('.Sresults-drop-down');
        const search = event.target.value;
        aTagMatches.forEach((ele) => ele.remove());

        if (search) {
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
            const dropDown = document.getElementById("sDropDown");
            dropDown.classList.add('show');
            response.forEach((question) => {
                const aTag = document.createElement("a");
                aTag.setAttribute("href", `/questions/${question.id}`);
                aTag.setAttribute("class", `Sresults-drop-down`);
                aTag.innerText = question.title;
                dropDown.appendChild(aTag);
            });
        }
    });
});
