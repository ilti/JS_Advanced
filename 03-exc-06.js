function systemComponents(params) {
    let obj = {};
    let command = params.shift();
    while (command != undefined) {
        command = command.split(' | ');
        let system = command[0];
        let component = command[1];
        let sub = command[2];
        if (!(obj.hasOwnProperty(system))) {
            obj[system] = {};
            obj[system][component] = [];
            obj[system][component].push(sub)
        } else if (!(obj[system].hasOwnProperty(component))) {
            obj[system][component] = [];
            obj[system][component].push(sub)
        } else if (!(obj[system][component].includes(sub))) {
            obj[system][component].push(sub)
        }
        command = params.shift()
    }
    let workArr = Object.entries(obj);
    let sorted = workArr.sort((a, b) => Object.entries(b[1]).length - Object.entries(a[1]).length
        || a[0].localeCompare(b[0]))
    for (const kvp of sorted) {
        console.log(kvp[0]);
        let kvpArr = Object.entries(kvp[1])
        let sortedKvp = kvpArr.sort((a, b) => Object.entries(b[1]).length - Object.entries(a[1]).length || a[0].localeCompare(b[0]));
        for (const kvp of sortedKvp) {
            console.log(`|||${kvp[0]}`);
            console.log(`||||||${kvp[1].join('\n||||||')}`);
        }
    }
}
systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
)