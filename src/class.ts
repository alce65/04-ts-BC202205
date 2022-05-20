/* eslint-disable no-unused-vars */
class Person {
    static hasBrain = true;

    static isAlive = function () {
        return 'Estoy vivo';
    };

    // protected _name: string;
    // private age: number;
    public mascota!: Mascota;
    constructor(protected _name: string, private age: number) {
        // this._name = _name;
        // this.age = age;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    planet = 'Tierra';
    greetings() {
        console.log(
            `Hola soy ${this._name}, y tengo ${this.age} años y ` +
                Person.isAlive()
        );
    }
}

const p1 = new Person('Pepe', 23);
const p2 = new Person('Luisa', 25);

p1.greetings();
p2.greetings();

console.log(p1.planet);
console.log(p2);
console.log(Person.hasBrain);

class Alumno extends Person {
    // course;
    constructor(name: string, age: number, public course: string) {
        super(name, age);
        // this.course = course;
    }
    greetings() {
        super.greetings();
        console.log('Soy el alumno ', this._name);
        console.log('Estudio ' + this.course);
    }
}

const a1 = new Alumno('Luisa', 25, 'FullStack');
console.log(a1);
a1.greetings();
a1.name;
a1.name = 'Luis';

export class Mascota {
    //public name;
    constructor(public name: string) {
        // this.name = name
    }
}

a1.mascota = new Mascota('Piolin');
console.log(a1.mascota.name);
