function printArr(params) {
    let deli = params.pop()
    console.log(params.join(deli));
    
    
}
printArr(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
)