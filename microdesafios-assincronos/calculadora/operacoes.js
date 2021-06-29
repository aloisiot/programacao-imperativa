module.exports = {
    soma: (a, b) => a + b,
    sub: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => {
        if (a != 0 && b != 0)
            return a / b;
        else
            return 'Impossivel dividir por zero!';
    }
}