/* eslint-disable no-unused-vars */
import { add } from './helpers.js';

let str: string;
str = 'Hello world';
console.log(str);

console.log(add(22, 34));

// Posibles tipos primitivos

let foo: null | undefined | string | number | boolean | bigint | symbol;

foo = null;
foo = undefined;
foo = 'pepe';
foo = 22;
foo = true;
foo = 22n;

console.log(foo);

// Tipo any (explicito)

let x: any;
x = 78;

// Inferencia de tipos
let z: number = 23;
let y;
y = 23;
y = 'pepe';

// Array Types

let data: Array<any> = []; //data2: [];
let numbers: Array<number | null> = []; // numbers2: number[]

numbers[3] = 22;
numbers[4] = null;
console.log(numbers);

add(2, <number>numbers[0]);
// add(2, numbers[0] as number)

// Object Type
type Name = string;

type User = {
    name: Name;
    age?: number;
};

let obj: User;
obj = { name: 'Pepe' };
obj.age = 9;
