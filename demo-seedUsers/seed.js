const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const dataArray = require('./users.json');


async function userData(num) {
    const results = []
    for (let i = 0; i < num; i++) {
        const users = await fetch('https://random-data-api.com/api/users/random_user');
        const usersJson = await users.json();
        results.push(usersJson);
    }
    fs.writeFileSync(path.join(__dirname, '/users.json'), JSON.stringify(results));
}

function identification() {
    const results = [];
    dataArray.forEach((ele) => {
        results.push({
            email: ele.email,
            username: ele.username,
            password: ele.password
        });
    })
    fs.writeFileSync(path.join(__dirname, '/userDatabase.json'), JSON.stringify(results));
}

identification();
