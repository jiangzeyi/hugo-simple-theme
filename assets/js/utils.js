function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function formatStr(str, ...args) {
    let i = 0;
    return str.replace(/%s/g, () => args[i++]);
}

function seed(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let seed = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        seed += characters[randomIndex];
    }
    return seed;
}

export {
    randomInt,
    seed,
    formatStr
};
