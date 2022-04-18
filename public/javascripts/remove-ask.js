const title = document.querySelector("#header-title");
const askBtn = document.querySelector('.ask-button')

// remove ask question button on login and register page

document.addEventListener("DOMContentLoaded", async () => {
    if (title.innerText === 'Register' || title.innerText === 'Login'){
        askBtn.remove();
    }
})
