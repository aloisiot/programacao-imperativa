//      Crie uma função que receba um array composto por números e retorna uma nova
//      matriz (array) com todos os valores divididos pela soma de toda a matriz,
//      usando map() e reduce().

function divideByLength (arrayNums) {

    return arrayNums.map((element)=>{
        return element/arrayNums.reduce((acum, e)=> acum+e);
    })
}

console.log(divideByLength([1,2,3]));