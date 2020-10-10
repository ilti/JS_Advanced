function sortArraywithinObject(arrToBeSorted,params2) {
    let myObj = {
        asc: function (arr){
            return arr.sort((a,b)=>a-b)
        },
        desc: function (arr) {
            return arr.sort((a,b)=>b-a)
        }
    }

    let func = myObj[params2]
    console.log(func(arrToBeSorted));
     
}
sortArraywithinObject([14, 7, 17, 6, 8], 'asc')
