let x = [10,2];

x.forEach(row => {
    new Array(row).fill('').forEach((v, i) => {
        console.log([
            ...new Array(9-i).fill('.'),
            ...new Array(1+i*2).fill('^'),
            ...new Array(9-i).fill('.')
        ].join(''));
    });
});