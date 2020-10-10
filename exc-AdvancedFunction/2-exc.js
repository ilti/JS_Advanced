function solve () {
    let result = [];//array of objects
    let count = {};//obj to hold counts

    [...arguments].forEach(args => {
        let type = typeof(args)
        
        result.push({type:type, 
                    value: args});
    
        

        if(!count[type]){
            count[type] = 0;
        }
        count[type]++
        
        
    })
    result.forEach(r=> console.log(`${r.type} : ${r.value}`)) //accessing objects in Arr

    let sort = Object.entries(count).sort((a,b)=> b[1] - a[1])
   for (const kvp of sort) {
       console.log(`${kvp[0]} = ${kvp[1]}`);
       
   }
    
}
solve('cat', 42, function () { console.log('Hello world!'); })