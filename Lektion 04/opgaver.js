// Tilføj kode for opgave 4.1 - 4.5 her!

// opgave 4.1 - Giv alle afsnit en rød tekstfarve ved brug af opgaver.css
let pp = document.querySelectorAll('p');
for (let p of pp){
    p.style.color = 'red';
}

// Opgave 4.2 - Giv det andet element efter hver overskrift en brun farve
let h1h = document.querySelectorAll('h1');
for (let h1 of h1h){
    let tmp = h1.nextElementSibling.nextElementSibling;
    tmp.style.color = 'brown';
}

// Opgave 4.3 - Giv hver anden element i listen en lysegrå baggrundsfarve.
let li2 = document.querySelectorAll('li');
for(let i = 0 ; i < li2.length ; i++){
    if(i % 2 === 0){
        li2[i].style.backgroundColor = 'grey';
    }
}

// Opgave 4.4 - Find første afsnit efter hver overskrift og gør det til en underoverskrift.
let h1t = document.querySelectorAll('h1');
for (h1 of h1t){
    let tmp = h1.nextElementSibling;
    tmp.style.color = 'blue';
}

