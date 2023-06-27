let Input = document.querySelector("#display input");
let Buttons = document.querySelectorAll("#buttons button");
console.log(Input);
console.log(Buttons);

Buttons.forEach( e => {
    
    // let lastValue = Input.value.slice(-2);
    // console.log(lastValue.charAt(0));
    // let carAry = ['*', "+", "-", "/", "%", "."];
    // if (carAry.find(checkAge)) {
    //     console.log("Matched");
    // } 
    if (e.innerText == "X") {
        e.onclick = () => {
            Input.value += "*"; 
        }
    } else if(e.innerText == "="){
        e.onclick = () => {
            Input.value = eval(Input.value)
        }
    } else if(e.innerText == "C"){
        e.onclick = () => {
            Input.value = "";
        }
    } else if(e.innerText == "backspace"){
        e.onclick = () => {
            Input.value = Input.value.slice(0,-1);
        }
    }
    else{
        e.onclick = () => {
            Input.value += e.innerText; 
        }
    }
})