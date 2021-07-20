// calcula o mmc entre dois números:

function calcMmc(n1, n2) {
    let mmc = 1;
    let divisor = 2;
    let breakPoint = true;

    while (breakPoint) {
        breakPoint = n1 != 1 || n2 != 1;

        if (n1 % divisor == 0 && n2 % divisor == 0) {
            mmc *= divisor;
            n1 /= divisor;
            n2 /= divisor;
        }
        else if (n1 % divisor == 0) {
            mmc *= divisor;
            n1 /= divisor;
            divisor++
        }
        else if (n2 % divisor == 0) {
            mmc *= divisor;
            n2 /= divisor;
            divisor++
        }
        else divisor++;

        divisor = 2

    }
    return mmc;

}

console.log(calcMmc(2, 4));


// calcula o mmc entre uma lista de números:
function mmcList(...args) {
    let numsList=new Array(...args)
    let testList = new Array(numsList.length).fill(false);
    let mmc = 1;
    let divisor = 2;
    let breakPoint = true;

    while (breakPoint) {

        console.log(testList.includes(false));
        while (testList.includes(false)) {

            numsList=numsList.map((n,i) => {

                if (n % divisor == 0) {
                    testList[i]=true;
                    return n /= divisor;
                } else {
                    testList[i]=false;
                    return n
                }

            });

            
            divisor++;

        }

        if (testList.includes(true)) mmc * divisor;

        let defineBreakPoint = numsList.filter(n => n != 1);

        if (defineBreakPoint.length != numsList.length) breakPoint = true;

        divisor = 2;
        testList = [false];
    }

    return mmc

}

console.log(mmcList(2, 4));