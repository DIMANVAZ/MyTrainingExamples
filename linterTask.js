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

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];//их всего 6

let massiv = story.split(' ');
console.log(`Длина первичного массива: ${massiv.length}`);
console.log(massiv);
//============================================================
let sentenceCount = 0;

function sentencesCounter(word){ //если слово заканчивается на точку или воскл знак, засчитывает это за предложение
    if (word[word.length - 1]==="."||
        word[word.length - 1]==="!")
    {sentenceCount++;}
};

massiv.forEach(sentencesCounter);
console.log(`В тексте всего ${sentenceCount} предложений`);
//=============================================================
function obrezka(word){ //если слово заканчивается на точку или запятую, отрезает эту точку или запятую
    if (word[word.length - 1]==="."||
        word[word.length - 1]===",")
        return word.slice(0, word.length-1);
    else return word; //если слово резать не надо, возвращает его неизменным
};
//а если элементов много? не прописывать же сравнение с каждым

let cuttedMassiv = massiv.map(element => obrezka(element)); //массив, где слова уже без точек и запятых
//console.log(`Длина массива с обрезанными словами: ${cuttedMassiv.length}`);

//===============================================================
function massivCompareAndCut(word){ //если в массиве ненужных слов нашлось наше слово,
    if(unnecessaryWords.includes(word,0)) return true;
    else return false;
}

let betterWords = cuttedMassiv.filter(word => massivCompareAndCut(word)==false); //без точек, запятых и ненужных слов
console.log(`Длина массива без ненужных слов: ${betterWords.length}`);

let count = 0;
function overuseCounter(word){ //если в массиве частых слов нашлось наше слово, счётчик наращивается
    if(overusedWords.includes(word,0)) {
        //console.log(word);
        count++};
}

betterWords.forEach(overuseCounter); //посчитаем кол-во частых слов в массиве
console.log(`В массиве без ненужных слов есть ${count} часто используемых слов`);
//===============

console.log(betterWords.join(''));