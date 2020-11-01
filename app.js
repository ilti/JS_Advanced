function getInfo() {
    let inputField = document.querySelector('#stopId');
    let validBuses = [`1287`, `1308`, `1327`, `2334`]
    let stopInfo = document.querySelector('#stopName')
    let bussesList = document.querySelector(`#buses`);//ul
    bussesList.innerHTML='' //to clear ul if already populated

    let url = `https://judgetests.firebaseio.com/businfo/${inputField.value}.json `

    if (!validBuses.includes(inputField.value)) {
        stopInfo.innerHTML = 'Error';
        return
    }

    fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            stopInfo.innerHTML=data.name

            let workArr = Object.entries(data.buses)

            for (const kvp of workArr) {
                let li = document.createElement('li')
                li.innerHTML=`Bus ${kvp[0]} arrives in ${kvp[1]} minutes`
                bussesList.appendChild(li)     
            }
        })
        inputField.value=''
}