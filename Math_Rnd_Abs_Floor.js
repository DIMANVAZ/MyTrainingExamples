function rndz(x) {
    const ra = [];
    for (let i = 0; i < x; i++) {
        ra.push(Math.floor(Math.random() * 15));
    }
    return ra;
};

console.log(rndz(100));