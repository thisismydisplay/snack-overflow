window.addEventListener("DOMContentLoaded", (event) => {
    const input = document.getElementById("searchbar-input");
    input.addEventListener('input', async (event) => {
        const search = event.target.value;

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
            const dropDown = document.getElementById("mySDropDown");
            response.forEach((question) => {
                const aTag = document.createElement("a");
                aTag.setAttribute("href", `/questions/${question.id}`);
                aTag.innerText = question.title;
                dropDown.appendChild(aTag);
            });
        }
    });
});
