class Media {
    constructor(title){
            this._title = title;
            this._isCheckedOut = false;
            this._ratings = [];
        };

        get title(){
        return this._title;
        };

        get isCheckedOut(){
        return this._isCheckedOut;
        };

        get ratings(){
        return this._ratings;
        };

        set isCheckedOut(yesOrNo) {
        this._isCheckedOut = yesOrNo;
        };

        toggleCheckOutStatus(){
            this._isCheckedOut = !this._isCheckedOut;
        };

        getAverageRating(){
            return (this._ratings.reduce((accumulator, value)=> accumulator+value)) / this._ratings.length;
        };

        addRating(value) {
            if(value >= 1 && value <= 5)
            {this._ratings.push(value);}
            else console.log('Digit from 1 to 5');
        };
 }


class Book extends Media {
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    };

    get author(){
        return this._ratings;
    };

    get pages(){
        return this._pages;
    };
}

class Movie extends Media {
    constructor(director, title, runtime){
        super(title);
        this._director = director;
        this._runtime = runtime;
    };

    get director(){
        return this._director;
    }

    get runtime(){
        return this._runtime;
    }
}

class CD extends Media {
    constructor(artist, title, songs = []){
        super(title);
        this._artist = artist;
        this._songs = songs;
    };

    get artist(){
        return this._artist;
    }

    get songs(){
        return this._songs;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(5);
historyOfEverything.addRating(4);
historyOfEverything.addRating(7);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

console.log((new CD).songs); //[]
console.log((new CD('Kirkorov', 'Zaika Moya', [12,6,9])).songs); //[ 12, 6, 9 ]