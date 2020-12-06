// Возвращает рандомную букву
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Возвращает массив из рандомных букав, используя команду выше
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//======функция-генератор нового объекта-существа==============================
function pAequorFactory(uniqueNumber) {
  return {
    name:`Ex${uniqueNumber}`,
    dnaStrand: mockUpStrand(),
    mutate() {
      let newDna;
      let rndIndex = Math.floor(Math.random() * this.dnaStrand.length);

      do {
        newDna = returnRandBase(); //сгенерировалось рандомное А / T / C / G и записалось
          } while (newDna === this.dnaStrand[rndIndex]);  // крутим, пока они равны (если равны вообще)

      this.dnaStrand[rndIndex] = newDna; // присвоили элементу массива новое значение
      },

    //===функция сравнения ДНК данного объекта-существа  с другим================
    compareDNA(objectIndex) {
        let counter = 0;
        const a = [];
        for (let i = 0; i <this.dnaStrand.length; i++) {
            if (this.dnaStrand[i] === population[objectIndex].dnaStrand[i]) {
                    counter++;
                    a.push(`${i}: ${this.dnaStrand[i]}`);
                }
            }
        //console.log(counter);
        //console.log(a);
        //return `these 2 creatures have ${Math.round((counter/15)*100)} percent common DNA`;
        return Math.round((counter/15)*100);
    },

    //===проверяет жизнеспособность данного объекта-существа путём поиска количества сильных аминокислот====
    willLikelySurvive() {
        let Z = this.dnaStrand.filter(elem => (elem === "G"||elem === "C"));
        if ((Z.length/15)>= 0.6) return true;
        else return false;
    },

   //===создаёт цепь ДНК, комплементарную ДНК данного существа=======================
    complementStrand() {
        const compDNA = [];
         for (let i = 0; i <this.dnaStrand.length; i++) {
             switch (this.dnaStrand[i]) {
                 case "G": compDNA[i] = 'C';
                    break;
                 case "C": compDNA[i] = 'G';
                    break;
                 case "T": compDNA[i] = 'A';
                    break;
                 case "A": compDNA[i] = 'T';
                    break;
                 default: console.log('WTF');
             }
         }
         return compDNA;
     },
    //===поиск ближайшего родственика из популяции(массива существ)===================
    siblingFinder(objectsArray) {
       let maxShot = 0;
       let maxIndex = 0;
          for (let i = 0; i <objectsArray.length; i++) {
              if (this.compareDNA(i) > maxShot) {
                  maxShot = this.compareDNA(i);
                  maxIndex = i;
              };
          }
          return [maxIndex, maxShot];
       //return `Вашей особи наиболее родственен экземпляр ${population[maxIndex].name} при совпадении ДНК ${maxShot}%`;
      }
    }
  };

//===генерация нужного количества животных-существ-объектов============================
function getMassObjects(howManyBeastsDoYouNeed) {
    let storage = [];
    for (let i = 0; i < howManyBeastsDoYouNeed; i++) {
        storage.push(pAequorFactory(i));
    }
    return storage;
}

const population = getMassObjects(12000);
const X = pAequorFactory(1);
let answer = X.siblingFinder(population);
console.log(`Вашей особи наиболее родственен экземпляр ${population[answer[0]].name} при совпадении ДНК ${answer[1]}%`);
console.log(`Вот ДНК вашей особи: ${X.dnaStrand}`);
console.log(`А вот ДНК ближайшего родственника из популяции: ${population[answer[0]].dnaStrand}`);

