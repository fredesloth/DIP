class t {
    constructor(name, CPR, age){
        this.name = name;
        this.CPR = CPR;
        this.age = age;
    }

    toString() {return "Name: " + this.name + " CPR: " + this.CPR + " Age: " + this.age}

    valueOf(){
        return this.CPR;
    }

    equals(p){return p.constructor === Person && this.cpr === p.cpr};

    // Lang version af compare
    comparePerson(p2){
        p1 = this;
        if(p1.name === p2.name){
            return true;
        }else{
            return false;
        }
    }

    // Kort version af compare
    comparePersonv2(p2){
        p1 = this;
        return p1.name === p2.name;
    }
}

let p1 = new Person("Frederik", 23120000, 25);
let p2 = new Person("Jesus Kristus", 24120000, 24);

console.log(p1.toString());
console.log(p1.valueOf());
console.log(p1.equals(p2));
console.log(p1.comparePerson(p2));
console.log((p1.comparePersonv2(p1)));

let Persons = [];
Persons.push(p2);
Persons.push(p1);

console.log(Persons);
Persons.sort((a,b) => (a.name).localeCompare(b.name));
console.log();
console.log(Persons);