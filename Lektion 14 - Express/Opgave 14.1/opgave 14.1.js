let userUrl = 'https://jsonplaceholder.typicode.com/users';

const express = require ('express');
const app = express();
const fetch = require('node-fetch');

app.get('/', (request, response) => {
    fetch(userUrl)
        .then(resultat => {
            console.log('Der sker noget her....')

        })
        .catch(fejl => console('Fejl: ' + fejl));
})

console.log('Lytter på port 8080 ... ');