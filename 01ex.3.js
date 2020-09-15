function sameNumbersProgram(params) {
    let srt = params.toString()
    
    let num = srt.split('')
    let flag = true;
    let sum = 0

    let arrLength = num.length

    for (let i = 0; i < arrLength-1; i++) {
        let current = num[i]
        if(current==num[i+1]){
        
        }else{
            flag=false
        }
        sum=sum+Number(current)
        if(i==arrLength-2){
            sum=sum+Number(num[i+1])
        }
        
    }
    console.log(flag);
    console.log(sum); 
    
}
sameNumbersProgram(2222222)
sameNumbersProgram(221)