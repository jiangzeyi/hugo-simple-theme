function randomInt(max) {
    return Math.floor(Math.random() * (max))
}

function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}

function generateSeed(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let seed = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        seed += characters[randomIndex];
    }
    return seed;
}

module.exports = {
    randomInt: randomInt,
    generateSeed: generateSeed,
    parse: parse,
};