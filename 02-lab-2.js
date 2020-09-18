function evenPositionElement(params) {
    let filetered = params.filter((x,y) => y % 2 == 0);
    console.log(filetered.join(' '));
    
}
evenPositionElement(['20', '30', '40'])