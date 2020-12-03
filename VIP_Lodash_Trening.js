//----пробуем Лодаш----------
const _ = require('lodash');
/*
//================================_.clamp()==============================
/* clamp берет число и ниж-верх пределы. Если число укладывается в них - пишет само число.
если оно меньше нижнего - вернёт нижний предел, больше верхнего - вернёт верхний

function superClamp(number, botLimit, topLimit) {
    if(number > botLimit && number < topLimit) return number;
    else if (number <= botLimit) return botLimit;
    else if (number >= topLimit) return topLimit;
}

console.log(_.clamp(-15, -13, 7));
console.log(_.clamp(2, 7, 13));
console.log(superClamp(-15, -13, 7));
console.log(superClamp(2, 7, 13));

//================================_.inRange()==============================
/* берет число и ниж-верх пределы. Если число укладывается в них - пишет true
если нет - false. Если ниж предел пропущен, то это 0.
//функция принимает 3 аргумента: число, нижПредел, верхПредел.
//если ниж предел пропущен, то он будет = 0.
function superInRange(number, botLimit, topLimit) {
    if (topLimit == undefined) {
        topLimit = botLimit;
        botLimit = 0;
    }

    if(topLimit < botLimit) {
        let tL = topLimit;
        topLimit = botLimit;
        botLimit = tL;
    }
    //console.log(`number = ${number}, botLimit =  ${botLimit}, topLimit = ${topLimit}`);
    if(number > botLimit && number < topLimit) return true;
    else if (number < botLimit) return false;
    else if (number >= topLimit) return false;
}

console.log(superInRange(1, 2, -7));
console.log(superInRange(7, 6));
console.log(_.inRange(1, 2, -7));
console.log(_.inRange(7, 6));

//===================================.words()===============================================
//Splits string into an array of its words.
var mm = require('./massiveMethods.js');
const symbolsToRemove = ['.',',','"',':',';','!',];
function superWords(string) {
    let massive1 = string.split(/[ -]+/);
    return massive1.map(element => mm.supObrez(element));
}

console.log(superWords('жила-была курочка ряба и была у них баба'));
console.log(_.words('жила-была курочка ряба и была у них баба'));

//===================================.pad()===============================
/* дополняет строку пробелами до нужной длины с обеих сторон равномерно.
Если на нечётное количество, то справа на 1 больше */
function superPad(stroka, nuzhnayaDlina) {
    let nado = nuzhnayaDlina - stroka.length;
    let probel = ' ';
    for (let i = 1; i <nado/2; i++) {
        probel = probel.concat(" ");
        //console.log(probel.length);
    }
    if (nado%2==0) return probel.concat(stroka,probel);
    else return probel.slice(0,probel.length-1).concat(stroka,probel);
}
console.log(_.pad('al',16));
console.log(superPad('ka',16));

//=======================.has()===============================================
const objecta = {a:'aaa', b:3, c:true, d:undefined};

function superHas(obj, key) {
    return Object.keys(obj).includes(key);
}
console.log(_.has(objecta, 'a'));
console.log(superHas(objecta, 'a'));

//=======================.invert()=============================================

        const obiJect = {'a':5, 'b':3, 'c':1,'d':9};

para =  Object.entries(obiJect)[0] // [a,5] - пара - первый элемент массива
kluch = Object.entries(obiJect)[0][0] // a - ключ - первый элемент первого элемента
znach = Object.entries(obiJect)[0][1] // 5 - значение - второй элемент первого элемента



function superInvert(obj){
 // назначение объекту ключей и значений
    const newObj = {};
    Object.entries(obj).forEach(element => {
    //  newObj      key    = value
        newObj[element[1]] = element[0];

    });


    return newObj;
}
console.log(_.invert(obiJect));
console.log(superInvert(obiJect));

//=======================.findKey======================!!!!!!!!!!!!!!!!========================

var users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }};

function superFindKey(object, checker) {
    console.log('-----------------------')
    console.log(Object.entries(object));

    const [trueKey] = Object.entries(object).find(([propusk,value]) => { //деструктуризация
        if(checker(value)) return true;  //find почитать
        return false;
    });
    return trueKey;
}

console.log(superFindKey(users, function (o) {
    return o.age < 40;
}));

console.log(_.findKey(users, ['active',true]));

//=======================.drop=======================================
//отрезать массив после указанной позиции и вернуть отрезок. По умолчанию позиция = 1
const massive3 = ['a','b','c','d','e'];

function superDrop(array, position = 1) {
    return array.slice(position);
}
console.log(_.drop(massive3, 1));
console.log(superDrop(massive3));

//===============================.dropWhile()============!!!=================
console.log('----dropWhileLeonid-------')
var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
];
//отдельно пропишем итератор: он берёт объект и возвращает значение его active
const iterator = function(o) {
    return o.active; };
//пропишем дропВайл: берёт массив и функцию
const dropWhile = (arr, func) => {
    //когда в массиве нашлось первое значение, в котором функция выдает не true...
    const value = arr.find((value) => !func(value));

    //находим индекс этого элемента во входном массиве
    const index = arr.indexOf(value);

    //и отрезаем массив с этого места (с индекса):
    return arr.slice(index);
};

console.log(dropWhile(users, iterator) +'\n'+'---------------------');

//=================================.chunk()===================================
//делит массив на более короткие массивы указанной длины и загоняет их в массив
const massive4 = ['a','b','c','d','e','f','g'];

function superChunk(massiv, dlina) {
    const bigMassiv = [];
    massiv.reverse();

    while(massiv.length > 0) {
        //console.log(`massiv length = ${massiv.length}`);
        let tempArray = [];
        for (let i = 0; i < dlina; i++) {
            if(massiv.length != 0) {
            tempArray.push(massiv.pop()); }
            //console.log(tempArray);
        }
        bigMassiv.push(tempArray);
        //console.log(bigMassiv);
    }
        return bigMassiv;
}

console.log(_.chunk(massive4, 4));
console.log(superChunk(massive4,4));
