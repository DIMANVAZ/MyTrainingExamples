const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num;

function squareNums(array){
     return array.map(element => toSquare(element));
}

console.log(squareNums(numbers));

//---------------------
function sortYears(massiva) {
    return massiva.sort().reverse();
}
console.log(sortYears([1,3,4,5,6,12,3,99,5]));

//====================общие элементы в 2х массивах===============================
array1 = [1,2,3,4,5,6,7,8,9,10];
array2 = [2,4,6,8,12,15];

function justCoolStuff(array, anotherArray) {
    const commonArray = [];
    for(let arrayElement of array) {
        for(let anotherArrayElement of anotherArray) {
            if (anotherArrayElement === arrayElement)
             commonArray.push(arrayElement);
        }
    }
    return commonArray;
}

console.log(justCoolStuff(array1, array2));
//---вариант 2 - с инклюдесом------------------------------------
function justCoolStuff2(array, anotherArray) {
    let commonArray = [];
    for(let arrayElement of array) {
        if (anotherArray.includes(arrayElement)) {
            commonArray.push(arrayElement);
        }
    }
    return commonArray;
}
console.log(justCoolStuff2(array1, array2));

//---вариант 3 - с инклюдесом и филтером------------------------------------
    //---прога сравнивает 2 массива и выдаёт массив из общих элементов-------
    array3 = [1,2,3,4,5,6,7,8,9,10];
    array4 = [2,4,6,8,12,15];
    function justCoolStuff3(array, anotherArray) {

        return array.filter(element => anotherArray.includes(element)==true);
                                    //^если элемент есть во втором массиве^
    }
    console.log(justCoolStuff3(array3, array4)); // [ 2, 4, 6, 8 ]


