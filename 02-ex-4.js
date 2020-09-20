function rotateArr(params) {
       let n = Number(params.pop())

    for (let i = 0; i < n %params.length; i++) {
        let last = params.pop()
        params.unshift(last)
        
    }
    console.log(params.join(' '));
    
}
rotateArr(['1', 
'2', 
'3', 
'4', 
'2']
)