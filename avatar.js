const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');


async function getAvatar() {
    const arr = [];
    const response = await fetch('https://api.minimalavatars.com/random-lottie')
    const avatarJson = await response.json()
    console.log('avatarJson');
    arr.push(avatarJson)
}

getAvatar();
