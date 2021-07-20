// Retorna o dobro de um numer:
const dobro = (x) => x * 2

// Uma PROMESSA;
// Retorna um valor após 5 segundos:
function depoisDeCincoSegundos(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x)
        }, 5000)
    })
}

// Recebe uma lista de numeros e retorna o dobro da som apos 5 segundos:
const dobroDaSoma = async (...nums) => {
    try {
        let result = await depoisDeCincoSegundos(
            nums.reduce((acum, num) => {
                return acum += dobro(num);
            }, 0)
        )

        console.log(result);
    } catch (err) {
        console.log(err)
    }
}


dobroDaSoma(1, 2, 3);