let loadBtn = document.querySelector('#loadBooks');
let tbody = document.querySelector("body > table > tbody");
let submitBtn = document.querySelector('#submit');
let titleField = document.querySelector('#title');
let authorField = document.querySelector('#author');
let isbnField = document.querySelector('#isbn');
let formEl = document.querySelector("body > form");

submitBtn.addEventListener('click', submitFunction);

loadBtn.addEventListener('click', loadFunction);

function loadFunction() {
    let url = 'https://books-exercise-23750.firebaseio.com/Books/.json';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            tbody.innerHTML = ''
            let workArr = Object.entries(data)

            for (const kvp of workArr) {
                console.log(workArr);
                let trEl = document.createElement('tr');
                trEl.setAttribute('data-id', `${kvp[0]}`)

                tbody.appendChild(trEl)

                let result =
                    `<td>${kvp[1].title}</td>` +
                    `<td>${kvp[1].author}</td>` +
                    `<td>${kvp[1].isbn}</td>`

                trEl.insertAdjacentHTML('beforeEnd', result)
                let newTdEl = document.createElement('td');
                let edtiBtn = document.createElement('button');
                edtiBtn.innerHTML = 'Edit';

                let deleteBtn = document.createElement('button');
                deleteBtn.innerHTML = 'Delete'

                trEl.appendChild(newTdEl);
                newTdEl.appendChild(edtiBtn);
                newTdEl.appendChild(deleteBtn)

                deleteBtn.addEventListener('click', deleteFunction);
                edtiBtn.addEventListener('click', editFUnction);
            }
        })
}

function deleteFunction(e) {
    e.preventDefault();
    let parent = e.target.parentElement.parentElement
    let currentID = parent.getAttribute('data-id');

    let url = `https://books-exercise-23750.firebaseio.com/Books/${currentID}.json`

    let deleteWait = fetch(url, {
        method: 'DELETE',
    })

    Promise.all([deleteWait])
        .then(data => {
            loadFunction()
            alert('Success!')
        })
}

function editFUnction(e) {
    e.preventDefault();

    let parent = e.target.parentElement.parentElement

    let newDiv = document.createElement('div');
    formEl.appendChild(newDiv)
    let h3El = document.createElement('h3');
    h3El.innerHTML = 'NEW FORM'
    newDiv.appendChild(h3El)

    let inputTitle = document.createElement('input');
    inputTitle.value = `${parent.getElementsByTagName('td')[0].innerHTML}`;
    
    newDiv.appendChild(inputTitle)

    let inoutAuthor = document.createElement('input');
    inoutAuthor.value = `${parent.getElementsByTagName('td')[1].innerHTML}`;
    newDiv.appendChild(inoutAuthor)

    let inputIsbn = document.createElement('input');
    inputIsbn.value = `${parent.getElementsByTagName('td')[2].innerHTML}`;
    newDiv.appendChild(inputIsbn)

    let confirmBtn = document.createElement('button')
    confirmBtn.innerHTML = 'CONFIRM'
    newDiv.appendChild(confirmBtn)

    let newparent = e.target.parentElement.parentElement
    let currentID = newparent.getAttribute('data-id')
    
    confirmBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let url = `https://books-exercise-23750.firebaseio.com/Books/${currentID}.json`
        let confWait = fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                'title': inputTitle.value,
                'author': inoutAuthor.value,
                'isbn': inputIsbn.value
            })
        })
        newDiv.style.display='none'
        Promise.all([confWait])
            .then(data=>{
                loadFunction()
                alert('Success')
            })

    })
}

function submitFunction(e) {
    e.preventDefault()
    let url = 'https://books-exercise-23750.firebaseio.com/Books/.json';
    let submitWait = fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            'title': titleField.value,
            'author': authorField.value,
            'isbn': isbnField.value
        })      
    })
    Promise.all([submitWait])
    .then(data=>{
        loadFunction()
    })
    titleField.value = '';
    authorField.value = '';
    isbnField.value = '';
}