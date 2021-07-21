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


// calcula o mmc de uma lista de números:
function mmcList(...args) {
    let divisor = 2;
    let nums = args;
    let mmc=1

    nums.forEach((_, i)=>{
        
        while(nums[i]!=1){
            if(nums[i]%divisor==0){
                mmc*=divisor;
                nums=nums.map((n)=>{
                    if(n%divisor==0){
                        return n/divisor;
                    }else{
                        return n;
                    };
                })
            } else {
                divisor++;
            }
        }
        divisor=2
    })

    return mmc;

}

console.log(mmcList(2,4,6))