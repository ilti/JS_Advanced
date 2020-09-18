function negativePositiveNumbers(params) {
    let newArr=[]
    for (let i = 0; i < params.length; i++) {
        if(params[i]>=0){
            newArr.push(params[i])
        }else{
            newArr.unshift(params[i])
        }
        
    }
    console.log(newArr.join('\n'));
    
}

negativePositiveNumbers([7, -2,0, 8, 9])