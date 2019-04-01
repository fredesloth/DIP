/*
Hent data om users og udskriver navnet på den anden user i arrayet.
Prøv både med og uden async.
Hvis fejl eller exception, udskrives denne.
Afprøv programmet med de 3 forskellige usersUrls vist i opgaver11.js.
 */

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

function logData(url) {
    console.log("Uden Async");
    fetch(url)
        .then(response => response.json())
        .then(array1 => console.log("Name: " + array1[1].name));
}

async function logDataAsync(url) {
    try {
        const response = await fetch(url);
        const array = await response.json();
        console.log("") //Bare for at skabe mellemrum for at se pæn ud
        console.log("Med Async");
        console.log("Name: " + array[1].name);
    }catch (e) {
        console.log("Exceptions " + e);
    }

}

logData(usersUrl);
logDataAsync(usersUrl);
