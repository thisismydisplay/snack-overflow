//check for undefined votes and set to 0
const voteSpans = document.querySelectorAll(".vote-span");
document.addEventListener("DOMContentLoaded", async () => {
    voteSpans.forEach(voteSpan => {
        if (voteSpan.innerText === 'undefined'){
            voteSpan.innerText = '0';
        }
    })
})
