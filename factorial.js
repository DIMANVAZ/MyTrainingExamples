//==========факториал====================
function factorial(number) {
    let res  =number;
    for (let i = 1; i < number; i++) {
        res = res*(number-i);
        console.log(res);
    }
   return res;
}

console.log(factorial(6));

//=============sublength======================
function subLength(word, letter){
    let bukv = [];
    for(let i=0; i<word.length; i++){
        if (word[i] === letter) bukv.push(i);
    }
    console.log(bukv);
    if(bukv.length!=2) return 0;
    else return bukv[1]-bukv[0]+1;
}

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0

//==========groceries()============================
//вывести только названия еды через запятую, а между последними двумя - слово and
const  eatArray1 = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}];
const eatArray2 = [{item: 'Bread'}, {item: 'Butter'}];
const eatArray3 = [{item: 'Cheese Balls'}];

function groceries(eatArray){
    if (eatArray.length > 1) {
        eatArray.splice(-1,0,{item:'and'});
    }
    let zamena = ', and,';
    let kuku = eatArray.map(element => element.item).join(', ');
    return kuku.replace(zamena,' and');
}

console.log(groceries(eatArray1));
console.log(groceries(eatArray2));
console.log(groceries(eatArray3));

