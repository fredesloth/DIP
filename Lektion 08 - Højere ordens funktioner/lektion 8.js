// opgave 2.4 (bruge til 8.2)
let p1 = {name: "zebra", email: "fre@gmail.com", mobile: "+4525465501"};
let p2 = {name: "odense", email: "sis@gmail.com", mobile: "+3012345678"};
let p3 = {name: "aeb", email: "ju@gmail.com", mobile: "+4560173533"};
let p4 = {name: "Torben", email: "tor@gmail.com", mobile: "+2587654321"};
//Opgave 8.2
let persons = [p1, p2, p3, p4];

// Sorterer persons efter navn
// se: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/* persons.sort(function(a, b) {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
}); */

//sorterer via navn
persons.sort((a,b) => (a.name).localeCompare(b.name));

// Tager alle navnene fra persons. og putter det ind i en string med et komma, mellem hvert navn
let names = " ";
persons.forEach(e => names += e.name  + ", ");
console.log(names);


let callMe = [];
//hvis de første 3 tegn har +45, pusher den navnet og mobilnummeret til det nye array
persons.forEach(e => e.mobile.substring(0, 3) == "+45" ? callMe.push({name: e.name, mobile: e.mobile}) : null);
console.log(callMe);

// 8.2 (confirmed af Erik)
function compareSort(compareFunc) {
    return compareFunc;
}

console.log("\n") //bare til at få det til at se pænere ud
//Opgave 8.2
let sortFunc = compareSort((a, b) => a-b);

let arr = [0, 2, 6, 4, 8, 2, 1, 5, 9, 11];
arr.sort(sortFunc);
console.log(arr);