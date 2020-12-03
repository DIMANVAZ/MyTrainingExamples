//дана строка. Сделать из неё массив слов. Найти самое часто встречающееся.

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called ' +
    '"The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, ' +
    'New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically ' +
    'took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. ' +
    'It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very ' +
    'popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  ' +
    'The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  ' +
    'An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  ' +
    'Something that was very surprising to me was that near the end of the route you actually cross back into New York! ' +
    'At this point, you are very close to the end.';

let massiv = story.split(' ');
console.log(`Длина первичного массива: ${massiv.length}`);
//               console.log(massiv);
//============================================================

const symbolsToRemove = ['.',',','"',':',';','!',];
function superObrezka(word) { //если слово начинается и(или) заканчивается ненужным символом - отрежем его
    let nakedWord = word;
    //если слово начинается со знака - вернуть слово, которое минус 1-й символ; записываем его во временное слово

    if(symbolsToRemove.includes(word[0])){
        nakedWord = word.slice(1);
    }
    //далее проверяем, не заканчивается ли это временное слово знаком.
    if (symbolsToRemove.includes(nakedWord[nakedWord.length-1])){
        nakedWord = nakedWord.slice(0,nakedWord.length-1);
    }
    //если да - отрежем.
    //в финале, слово, прошедшее все нет
    return nakedWord;
};

let superCut = massiv.map(element => superObrezka(element)); //массив, где слова уже без знаков лишних в начале и в конце
console.log(`Длина до удаления слов-пробелов: ${superCut.length}`);
superCut = superCut.filter(word => word!=='-'&&word!=='');
console.log(`Длина ПОСЛЕ удаления слов-пробелов: ${superCut.length}`);
//      console.log(superCut); //наш главный массив

console.log('---------------------------');
/*==========итак, у нас есть массив superCut
надо посчитать частоту встречаемости каждого слова в нём и вывести чемпиона */

const map = {}; //пустой объект для хранения
let i = 5; //врЕменная проверяемая
let counter = 0;
function compar(element) {

    for (let j = 0; j <superCut.length; j++) {
        if (element === superCut[j]) {
            counter++;
            map[element] = counter;
        }
    }
    counter = 0; //тут коунтер мы обнулили, а в объекте он остался, а всё почему??
                 //потому что не ссылочный тип данных!!
    return map;
}

superCut.forEach(compar);
console.log(map);

console.log(Object.values(map)); //массивчик

//---------эта штука ищет максимум в массиве--------------
function maxOfMassiv (massiv) {
    let max = 0;
    for(let element of massiv){
        if (element > max) {
            max = element;
        }
    }
    return max;
}
    //--поиск ключа по значению в Объекте----------------------------

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

// getKeyByValue(map, maxOfMassiv(Object.values(map)));
console.log(`В вашем тексте чаще всего (${maxOfMassiv(Object.values(map))} раз)
встречается слово "${getKeyByValue(map, maxOfMassiv(Object.values(map)))}"`);

