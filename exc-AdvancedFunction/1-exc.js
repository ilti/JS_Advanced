function sortArray(params, params2) {
    if(params2 =='asc'){
        params.sort((a,b)=> a-b)
    }
    if(params2 =='desc'){
        params.sort((a,b)=> b-a)
    }

    return params
    
    
}
sortArray([14, 7, 17, 6, 8], 'desc')