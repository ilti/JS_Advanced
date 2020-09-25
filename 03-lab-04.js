function fromJSONtoHTMLTable(inputJSON) {
    let input = JSON.parse(inputJSON);
    let currentObject = input[0];
    let keys = Object.keys(currentObject);
    let html = `<table><tr>`;
    keys.forEach(element => {
        html += `<th>${element}</th>`;
    });
    html += `</tr>`;

    for (let i = 0; i < input.length; i++) {
        let values = Object.values(input[i]);
        html += `<tr>`;
        values.forEach(el => {
            el = String(el);
            let currentArr = el.split('');
            if (currentArr.includes(`&`)) {
                let index = currentArr.indexOf(`&`);
                currentArr.splice(index, 1, `&amp;`);
            }
            el = currentArr.join('');
            html += `<th>${el}</th>`;
        });
        html += `</tr>`;
    };
    html += `</table>`

    
    console.log(html);
    
}
fromJSONtoHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])