/*
Create an alert that displays "You must log in to do that"
that appears when a logged-out user clicks the "Ask a question" button.
*/

window.addEventListener('load', function () {
    const button = document.getElementsByClassName('ask-button')[0];
    button.addEventListener('click', function () {
        alert('Sorry. You must be logged in to do that');
    });
}
);
