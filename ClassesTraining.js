class MotorCycles {
    static wheels = '2 WHEELS';

    /* constructor(options) {  //а может, деструктуризацию сделать?
        this.model = options.model;
        this.engine = options.engine;
        this.clearance = options.clearance;
    } */

    constructor(model, engine, clearance) {
        this.model = model;
        this.engine = engine;
        this.clearance = clearance;
    }

    sound(){
        console.log('Trtrtrtrtr');
    }

}

class TourEnduro extends MotorCycles {
     /*
     constructor(options){
        super(options);
        this.weight = options.weight;
    }
      */
    constructor(model, engine, clearance, weight){ //прописали всё возможное
        super(model, engine, clearance);           //и ещё продублировали родительские
        this.weight = weight;
    }

    sound() {
        //super.sound();
        console.log('Frfrfrfrfrfr');
    }
}
/*
const africaTwin = new TourEnduro ({
    model: 'AfricaTwin750',
    engine: 'V2-750',
    clearance: 180,
    weight: 230
});

*/

const africaTwin1000 = new TourEnduro(
    'AfricaTwin1000', 'R2-1000',
    175, 215);

africaTwin1000.sound();
console.log(africaTwin1000.weight);
console.log(africaTwin1000.engine);

console.log(MotorCycles.wheels);