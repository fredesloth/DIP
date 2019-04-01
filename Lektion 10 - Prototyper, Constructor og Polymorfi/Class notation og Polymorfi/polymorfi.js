class Kat {
    constructor(navn) {
        this.navn = navn;
        if (Kat._antal) Kat._antal++; else Kat._antal = 1;
    }
    toString() { return this.constructor.name + ': ' + this.navn; };
    static antal() { return Kat._antal; }
}

function Person(navn) {
    this.navn = navn;
    Person._antal++
}

Person.prototype.toString = function () {
    return this.constructor.name + ': ' + this.navn;
};

Person._antal = 0;
Person.antal = function () {
    return Person._antal;
};

let kat = new Kat('Garfield');
let person = new Person('Harald Jensen');

for (o of [kat, person])
    console.log(o + " #" + o.constructor.antal());
// => Kat: Garfield #1
// => Person: Harald Jensen #1
