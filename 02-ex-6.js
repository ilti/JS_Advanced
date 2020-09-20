function sortArrby2Criteria(params) {
    let sorted = params.sort((a,b)=> (a.length-b.length) || (a.localeCompare(b)))

    console.log(sorted.join('\n'));
    
    
}
sortArrby2Criteria(['alpha', 
'beta', 
'gamma']
)

sortArrby2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
)

sortArrby2Criteria(['test', 
'Deny', 
'omen', 
'Default']
)