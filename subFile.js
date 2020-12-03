    //это файл, откуда мы будем тащить функцию
    function motorcycle(brand) {
        if (brand === 'Honda') return 'Best ever';
        else return 'shit';
    }

    /*---------вместо motorcycleRRR может быть любое слово
    - это имя для вызова в другом месте------------------ */

    module.exports.motorcycleRRR = motorcycle;

    //-----это я из другого файла притащил прямо сюда, и оно и тут работает!!!
    var anotherFile = require('./subFile.js');
    console.log(anotherFile.motorcycleRRR('yamaha'));
    console.log(anotherFile.motorcycleRRR('Honda'));
    //выдаёт shit
    //выдаёт Best ever