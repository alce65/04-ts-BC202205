/* eslint-disable no-unused-vars */
export interface iPerson {
    name: string;
    age: number;
    greetings(): void;
}

interface iCitizen {
    dni: string;
}

class Alumni implements iPerson, iCitizen {
    constructor(public name: string, public age: number, public dni: string) {}
    greetings() {}
}

class Teacher implements iPerson, iCitizen {
    constructor(public name: string, public age: number, public dni: string) {}
    greetings() {}
}

class Child implements iPerson {
    constructor(public name: string, public age: number) {}
    greetings() {}
}

let z: iPerson;
let g: Teacher;

g = new Alumni('', 24, '');
z = { name: '', age: 8, greetings: () => {} };
