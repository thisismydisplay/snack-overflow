window.addEventListener("DOMContentLoaded", async (event) => {
    const demoBtn = document.getElementsByClassName('demo-btn')[0];

    demoBtn.addEventListener('click', async (event) => {
        console.log('CLICKED DEMO BUTTON');
        document.getElementById('login-email').value = 'leo@leo.com';
        document.getElementById('login-password').value = 'password';
        // document.getElementById('login-submit').click();
        document.querySelector('.login-form').submit();

    });
});
// const response = await res.json();
// document.getElementById('demo-btn').innerHTML = 'Loading...'
