// Imprime 25 termos da série 11 - 22 - 33 - 44, etc.

let list = new Array(25);

let n = 11;

for(i = 0; i < list.length; i++) {
    list[i]= n;
    n += 11;
}

console.log(list);