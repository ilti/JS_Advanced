function addOrRemove(params) {
    let emptyArr = []
    let innitial = 1;
    let command = params.shift();

    while (command != undefined) {
        if (command == 'add') {
            emptyArr.push(innitial);

        } else {
            emptyArr.pop()
        }
        innitial++

        command = params.shift()



    }

    if (emptyArr.length > 0) {
        console.log(emptyArr.join('\n'));

    }
    else {
        console.log('Empty');

    }

}
addOrRemove(['add',
    'add',
    'remove',
    'add',
    'add']
)