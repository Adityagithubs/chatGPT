let p = document.querySelector('#display p')
let btn = document.querySelectorAll('#btns button')
let cont = document.querySelector('#zoom')

console.log(p);
console.log(btn);

btn.forEach(e => {

    if (e.innerText == 'close') {
        e.onclick = () => {
            p.innerText += '*';
        }
    }else if (e.innerText == 'backspace') {
        e.onclick = () => {
            p.innerText = p.innerText.slice(0,-1);
        }
    }else if (e.innerText == 'AC') {
        e.onclick = () => {
            p.innerText = '';
        }
    }else if (e.innerText == '=') {
        e.onclick = () => {
            p.innerText = eval(p.innerText);
        }
    }else{
        e.onclick = () => {
            p.innerText += e.innerText;
        }
    }
})