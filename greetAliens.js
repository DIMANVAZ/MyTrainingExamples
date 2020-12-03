const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

function greetAliens(array){
 for(let name of array){
     console.log(`Oh powerful ${name}, we humans offer our unconditional surrender! `);
 }
}

greetAliens(aliens);
//---------------------------------
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

function convertToBaby(newArray){
 //return newArray.map(name => (`baby ${name}`));
   for(let i = 0; i < newArray.length;i++) {
       newArray[i] = `baby ${newArray[i]}`
   };
   return newArray;
}

console.log(convertToBaby(animals));