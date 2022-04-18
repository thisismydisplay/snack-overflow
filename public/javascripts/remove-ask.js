const title = document.querySelector("#header-title");
const askBtn = document.querySelector('.ask-button')
document.addEventListener("DOMContentLoaded", async () => {
    if (title.innerText === 'Register' || title.innerText === 'Login'){
        askBtn.remove();
    }
})
