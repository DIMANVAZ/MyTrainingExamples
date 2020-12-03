const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(value=> value[0]);

animals.ma

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(value => value/100);

console.log(smallNumbers);
//[ 1, 2, 3, 4, 5 ]

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const naTri = randomNumbers.filter(number => number%3==0);
console.log(naTri); //[ 375, 852 ]


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey',
                    'salamander', 'elephant'];

const foundAnimal = animals.findIndex(value =>value==='elephant');
console.log(foundAnimal);// 7

const startsWithS = animals.findIndex(value =>value[0]==='s');
console.log(startsWithS);// 3

let x = 12;

const Numbers = [1, 3, 5, 7];

function simpleFunctionDeclaration(value1,value2){
    console.log(`++The value of accumulator: ${value1}`);
    console.log(`==The value of currentValue: ${value2}`);
    return value2 + value1;
};

const dva = Numbers.reduce(simpleFunctionDeclaration, 13);
console.log(dva);

const Summa = Numbers.reduce((accumulator,value) =>{
    console.log(`The value of accumulator: ${accumulator}`);
    console.log(`The value of currentValue: ${value}`);
    return value + accumulator;
},20);

console.log(Summa);

function four(salat, pervoe, vtoroe) {
    return `salat: ${salat}, pervoe: ${pervoe}, vtoroe: ${vtoroe}`
};

console.log(four(1, 2, 3, 4));