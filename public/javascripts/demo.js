window.addEventListener("onLoad", async (event) => {
    const demoBtn = document.getElementById('demo-btn')
    demoBtn.addEventListener('click', async (event) => {
        document.getElementById('demo-btn').innerHTML = 'Loading...'

    })
})
