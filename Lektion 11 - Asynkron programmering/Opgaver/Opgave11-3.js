/*
Bruger Promise.all til at hente og udskrive navnet på den tredje user og titlen på den anden post fra user
med id = 3.
Prøv både med og uden async.
Hvis fejl eller exception, udskrives denne.
Afprøv programmet med alle 9 kombinationer af de tre forskellige usersUrls og postsUrls.
 */
const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=2';

/* Promise.all(
   fetch(usersUrl)
        .then(response => response.json())
        .then(array1 => console.log("Name: " + array1[1].name));
    fetch(postUrl)
        .then(response => response.json())
        .then(array2 => console.log("Title: " +  array2[2].title));
);
*/

console.log("I make no promises at all, but I think i made Promise.all: ");
Promise.all([
    fetch(usersUrl)
        .then(result => result.json())
        .then(data => console.log("Name: " + data[2].name)),
    fetch(postUrl)
        .then(result => result.json())
        .then(data => console.log("Title: " + data[1].title)),
    ]);



