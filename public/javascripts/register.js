/*
Create an alert that displays "You must log in to do that"
that appears when a logged-out user clicks the "Ask a question" button.
*/

window.addEventListener('load', function () {
    const loggedOutAskBtn = document.getElementById('logged-out-ask-btn');
    if (loggedOutAskBtn) {
        loggedOutAskBtn.addEventListener('click', function () {
            alert('Sorry. You must be logged in to do that');
        });
    }
});

window.addEventListener('load', function () {
    const loggedOutPostBtn = document.getElementById('logged-out-post-answer');
    if (loggedOutPostBtn) {
        loggedOutPostBtn.addEventListener('click', function () {
            alert('Sorry. You must be logged in to do that');
        });
    }
});
