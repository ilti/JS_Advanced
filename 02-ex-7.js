function magicMatrices(params) {
    let emptyArr=[];

    let n = params.length

    for (let i = 0; i < n; i++) {
        let sum =params[i].reduce((a,x)=>a+x,0)
        emptyArr.push(sum)
        
    }
    
    let sumSecond =emptyArr.reduce((a,x)=>a+x,0)
    let calc = sumSecond/emptyArr.length

    let first = emptyArr.shift()

    if(first == calc){
        console.log(true);
        
    }else{
        console.log(false);
        
    }
    
}
magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )