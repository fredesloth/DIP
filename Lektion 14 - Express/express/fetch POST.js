const fetch = require('node-fetch');

let url = 'http://localhost:8080/';
let data = { id: 1, navn: 'Viggo' };

fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(resultat => {
        if (resultat.status >= 400)
            throw new Error(resultat.status);
        else
            return resultat.json();
    })
    .then(resultat => console.log(`Resultat: %o`, resultat))
    .catch(fejl => console.log('Fejl: ' + fejl));
