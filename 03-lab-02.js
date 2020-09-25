function sumByTown(params) {
    let towns ={};
    for (let i = 0; i < params.length; i++) {
        if (i % 2 == 0) {
            if(towns.hasOwnProperty(params[i])){
                towns[params[i]]+=Number(params[i+1])
            }else{
                towns[params[i]] = Number(params[i + 1]);
            }
            
        }
    }
    let str = JSON.stringify(towns)
    console.log(str);
}
sumByTown(['Sofia','20','Varna','3','sofia','5','Varna','4'])