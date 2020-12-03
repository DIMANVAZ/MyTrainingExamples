//=====всё ли для веганов ??============
const meal = [
    {name: 'arugula', source: 'plant'},
    {name: 'tomatoes', source: 'plant'},
    {name: 'lemon', source:'plant'},
    {name: 'olive oil', source: 'plant'},
    {name: 'butter', source: 'cow'}
    ];
//--проверяем, всё ли веганское в массиве-->--способ 1---------
function isTheDinnerVegan(someArray) {
    const newArr = someArray.filter(vegetable => vegetable.source === 'plant');
    if (newArr.length != someArray.length) return false;
    else return true;
}
console.log(isTheDinnerVegan(meal));
//--проверяем, всё ли веганское в массиве-->--способ 2---------
function isTheDinnerVegan2(someArray) {
    return someArray.every(element => element.source==='plant');
}
console.log(isTheDinnerVegan2(meal));

//=====отсортировать виды животных по количеству зубов========
    const speciesArray = [
        {speciesName:'shark', numTeeth:50},
        {speciesName:'dog', numTeeth:42},
        {speciesName:'alligator', numTeeth:80},
        {speciesName:'human', numTeeth:32}];

    function sortSpeciesByTeeth(arrayOfObjects){
        //---в sort() вписываем функцию. И реально отсоритрует по кол-ву зубов!---
        return arrayOfObjects.sort((a,b) => a.numTeeth - b.numTeeth);
    }
    console.log(sortSpeciesByTeeth(speciesArray));
    /* [
        { speciesName: 'human', numTeeth: 32 },
        { speciesName: 'dog', numTeeth: 42 },
        { speciesName: 'shark', numTeeth: 50 },
        { speciesName: 'alligator', numTeeth: 80 }
       ] */

/*----усложнённая функция((((--------------------
function sortSpeciesByTeeth(array) {
    let speciTemp = [];
    //----от каждого элемента массива зверей пуляем в массив speci только их зубы
    array.forEach(vid => speciTemp.push(vid.numTeeth));
    speciTemp = speciTemp.sort();
    return speciTemp;
}
------усложнена лично мной-----*/

