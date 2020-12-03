const menu = {
    _courses:{
        appetizers:[],
        mains:[],
        desserts:[]
    },
    get appetizers(){},
    set appetizers(incomingAppetizer){},

    get mains(){},
    set mains(incomingMain){},

    get desserts(){},
    set deserts(incomingDesert){},

    get courses(){
        return {
            appetizers:this._courses.appetizers,
            mains:this._courses.mains,
            desserts:this._courses.desserts};
    },

    addDishToCourse (courseName, name, price) {
        const dish = {
            name: name,
            price: price
        };

        this._courses[courseName].push(dish);
        console.log(`Добавлен ${dish.name} по цене ${dish.price}`);
        },

    getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal(){
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let mains = this.getRandomDishFromCourse('mains');
        let desserts = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + mains.price + desserts.price;
        return `Appetizer: ${appetizer.name}, main: ${mains.name}, dessert: ${desserts.name}, total price = ${totalPrice}`;
    },

};

menu.addDishToCourse('appetizers','пикантная закуска',0.7);
menu.addDishToCourse('appetizers','салат сельдь',1.2);
menu.addDishToCourse('appetizers','фруктег',0.8);

menu.addDishToCourse('mains','плов',1.8);
menu.addDishToCourse('mains','лагман',1.5);
menu.addDishToCourse('mains','бешбаааармак',1.4);

menu.addDishToCourse('desserts','морожка',1);
menu.addDishToCourse('desserts','наполэон',1.1);
menu.addDishToCourse('desserts','морковный тарт',1,2);

let meal = menu.generateRandomMeal();
console.log(meal);
