const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const dataArray = require('./users.json');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'avatar-by-name.p.rapidapi.com',
        'X-RapidAPI-Key': 'a54439d283msh560a1caf2bc68a4p19cf72jsn7804fdc501d6'
    }
};

function getAvatar() {
    const avatar = await fetch('https://avatar-by-name.p.rapidapi.com/?name=%3CREQUIRED%3E', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
