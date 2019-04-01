/*
Hent data om users og udskriver titlen på den anden users tredje post.
Prøv både med og uden async.
Hvis fejl eller exception, udskrives denne.
Afprøv programmet med alle 9 kombinationer af de 3 usersUrls og 3 postsUrls vist i opgaver11.js.
 */
const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=2';


function logData(url1, url2) {
    console.log("Uden Asycn")
    fetch(url1)
        .then(response => response.json())
        .then(array => console.log("Name: " + array[1].name));
    fetch(url2)
        .then(response => response.json())
        .then(array => console.log("Title: " +  array[2].title))
}


async function logDataAsync(url1, url2) {
    try {
        const response = await fetch(url1);
        const response2 = await fetch(url2);
        const array = await response.json();
        const array2 = await response2.json();
        console.log(""); //Til at skabe mellemrum for at se pænere ud
        console.log("Med Async")
        console.log("Name: " + array[1].name);
        console.log("Title: " + array2[2].title)
    }catch (e) {
        console.log("Exceptions " + e);
    }

}

logData(usersUrl, postUrl);
logDataAsync(usersUrl, postUrl);
