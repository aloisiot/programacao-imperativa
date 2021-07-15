// Uma Promise é um objeto que representa o sucesso ou a falha de uma operação ASSÍNCRONA

// Estados: 
//     pending: estado inicial(pemdemte)
//     fulfilled: houve sucesso na operação, a Promise está realizada
//     reject: a operação foi rejeitada
//     setlled: A promise foi finalizada (rejeitada ou realizada)

const fs=require('fs')
const promessa = file => new Promise((resolve, reject)=>{
    fs.readFile(file,(err, cont)=>{
        if(err){
            reject(err);
        } else {
            resolve(cont)
        }
    })
})

// consumindo a Promise
//                         se realizada..
promessa('./arquivo.txt').then(cont=>console.log(String(cont)))
//      se rejeitada
    .catch(err=>console.log(err));