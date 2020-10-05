function solve() {
    let clearBtnElement = document.getElementsByClassName('clear')[0];
    let expressionOutputElement = document.getElementById('expressionOutput');
    let resultOutputElement = document.getElementById('resultOutput');

    let currentStr = '';
    let result

    let allBtnElements = document.querySelectorAll("#calculator > div.keys button");
    for (let i = 0; i < allBtnElements.length; i++) {
        allBtnElements[i].addEventListener('click', function (e) {
            console.log(e.target.value);
            let current = e.target.value
            if (current == 1 || current == 2 || current == 3 || current == 4 || current == 5 || current == 6 || current == 7 || current == 8 || current == 9 || current == 0 || current == '.') {
                currentStr += `${current}`
                expressionOutputElement.innerHTML = currentStr
            }
            if (current == '/' || current == '*' || current == '-' || current == '+') {
                currentStr += ` ${current} `
                expressionOutputElement.innerHTML = currentStr
            }
            if (current == '=') {
                let arr = currentStr.split(' ');
                let firstDigit = Number(arr[0]);
                let operand = arr[1];
                let secondDigit = Number(arr[2])
                if (operand == '+') {
                    result = firstDigit + secondDigit;
                } else if (operand == '-') {
                    result = firstDigit - secondDigit
                } else if (operand == '*') {
                    result = firstDigit * secondDigit
                } else if (operand == '/') {
                    result = firstDigit / secondDigit
                }
                resultOutputElement.innerHTML = result
            }
        })
    }
    clearBtnElement.addEventListener('click', ()=>{
        expressionOutputElement.innerHTML='';
        resultOutputElement.innerHTML=''
    })
}