//================ДЕСТРУКТУРИЗАЦИЯ=========================

//================1. Для массивов============
function calcValues(a, b) {
    return [
        a + b,
        a - b,
        undefined, // в примере пропустим
        a * b,
        a / b
    ];
};

//можно присвоить отдельной переменной конкретный элемент массива
const summa = calcValues(3,4)[0];

//а можно наприсваивать сразу массиву переменных >> массив функций
const [sum, sub,  , mult, div]  = calcValues(9,7); //3-ю переменную не объявили

//...назначили 3-й переменной деф. значение
const [sum1, sub1, must = 'default', mult1, div1] = calcValues(9, 7)

//================2. Для Объектов=============

const Machina = {
    brand: 'Honda',
    model: 'CRZ',
    weight: 1200,
    isRaceCar: true,
    produced: {
        country: 'Japan',
        plant: 'Kanto',
        year: 2000
    }
}

                     const {brand} = Machina; //одно свойство первого уровня
const {produced: {country, plant}} = Machina; //вложенные свойства
                      const {year} = Machina.produced; //иной способ присвоения вложенного свойства
        const {weight: massOfAuto} = Machina; //переназначение в другую переменную

//------для функций---------------------------------------

//классическая запись: в функцию передаётся объект
function printer1(Object){
    return `${Object.brand} + ${Object.model}`
}

//деструкто-запись: в функцию передаётся объект
function printer2({brand, model}){
    return `${brand} + ${model}`
}
//===^ результат идентичный ^===========

function oneMorePrinter({brand, model, color = 'default RED'}) {
                    //значение по умолчанию ^^^ если нету у объекта
    return `${brand} + ${model} + ${color}`
}

