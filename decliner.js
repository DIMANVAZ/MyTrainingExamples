const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

function declineEverything(array){
    array.forEach(politelyDecline);
}

declineEverything(veggies);

function acceptEverything(array2) {
    for(let elem of array2){
        console.log(`Ok, I guess I will eat some ${elem}.`)
    }
}

acceptEverything(veggies);
//----------shoutGreetings()----------

function shoutGreetings(array3){
    return array3.map(element => `${element.toUpperCase()}!`);
}

console.log(shoutGreetings(veggies));