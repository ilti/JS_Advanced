function cookingByNUmbers(params) {
    let num = params.shift()   
    num=Number(num)
    
    let command = params.shift()
    while(command!=undefined){
        if(command=='chop'){
            num=num/2;
        }
        else if(command=='dice'){
            num=Math.sqrt(num);
        }
        else if(command=='spice'){
            num=num+1;
        }
        else if(command=='bake'){
            num=num*3;
        }
        else if(command=='fillet'){
            num=(num/100)*80
        }

        console.log(num);
        
        command=params.shift();
    }
}
cookingByNUmbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])