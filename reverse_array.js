const randomArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function reverseArray(array){
    let tempArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        tempArray.push(array[i]);
    }
    //return tempArray;

    for (let j = 0; j <array.length; j++) {
        array[j] = tempArray[j];
    }
    return array;
}

console.log(reverseArray(randomArray));