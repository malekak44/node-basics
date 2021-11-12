const https = require('https');
const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com';

// GET Request
const req = https.request(`${url}/todos/1`, res => {
    let data = '';
    res.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    res.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

// POST Request
const data = {
    "title": "HTTPS Module",
    "body": "HTTPS module is nodejs is so cool",
}

axios
    .post(`${url}/posts`, data)
    .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data);
    })
    .catch(error => {
        console.error(error);
    });

req.on('error', error => {
    console.error(error);
});

req.end();