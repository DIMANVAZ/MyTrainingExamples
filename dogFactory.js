function dogFactory(_name, _breed, _weight) {
    return {
        _name,
        set name(newName) {
            if (typeof newName === 'string') {
                this._name = newName;
            }
            else console.log('Name should be String!');
        },
        get name(){
            return this._name;
        },
        _breed,
        set breed(newBreed) {
            if (typeof newBreed === 'string') {
                this._breed = newBreed;
            }
            else console.log('Breed should be String!');
        },
        get breed(){
            return this._breed;
        },
        _weight,
        set weight(newWeight) {
            if (typeof newWeight === 'number') {
                this._breed = newWeight;
            }
            else console.log('Weight should be Number!');
        },
        get weight(){
            return this._weight;
        },
        bark() {return "ruff! ruff!";},
        eatTooManyTreats() {this._weight++;}

    }
};
const joe = dogFactory('Joe', 'Pug', 23);
console.log (joe.bark());
console.log(joe._weight);
joe.eatTooManyTreats();
console.log(joe._weight);
joe.weight = '4';
console.log(joe.name);