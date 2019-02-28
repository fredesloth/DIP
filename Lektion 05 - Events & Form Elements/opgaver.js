// Tilføj kode for opgave 4.1 - 4.5 her!

// opgave 4.1 - Giv alle afsnit en rød tekstfarve ved brug af opgaver.css
function redText(){
    let pp = document.querySelectorAll('p');
    for (let p of pp){
        p.style.color = 'red';
    }
}
window.addEventListener("load", redText);

// Opgave 4.2 - Giv det andet element efter hver overskrift en brun farve
function  brownText(){
    let h1h = document.querySelectorAll('h1');
    for (let h1 of h1h){
        let tmp = h1.nextElementSibling.nextElementSibling;
        tmp.style.color = 'brown';
    }
}
window.addEventListener("load", brownText);

// Opgave 4.3 - Giv hver anden element i listen en lysegrå baggrundsfarve.
function grayBackground(){
    let li2 = document.querySelectorAll('li');
    for(let i = 0 ; i < li2.length ; i++){
        if(i % 2 === 0){
            li2[i].style.backgroundColor = 'grey';
        }
    }
}
window.addEventListener("load", grayBackground());

// Opgave 4.4 - Find første afsnit efter hver overskrift og gør det til en underoverskrift.
function subHeadline(){
    let h1t = document.querySelectorAll('h1');
    for (h1 of h1t){
        let tmp = h1.nextElementSibling;
        tmp.style.color = 'blue';
    }
}
window.addEventListener("load", subHeadline);

function hideTekst() {
    console.log("test");
    let x = document.querySelector("ul");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function button(){
    console.log("test2");
    let button = document.createElement("button");
    button.innerHTML = "Abscondam/Ostende";
    document.body.prepend(button);

    button.onclick = hideTekst;
}
window.addEventListener("load", button);






