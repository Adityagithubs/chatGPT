let Name = document.getElementById('in1');
let Name2 = document.getElementById('in2');
let Name3 = document.getElementById('in3');
let para = document.getElementById('input1');
let para2 = document.getElementById('input2');
let para3 = document.getElementById('input3');

Name.onkeyup = () => {
    para.innerText = Name.value;
}
Name.onblur = () => {
    para.innerText = '';
}
Name2.onkeyup = () => {
    para2.innerText = Name2.value;
}
Name2.onblur = () => {
    para2.innerText = '';
}
Name3.onkeyup = () => {
    para3.innerText = Name3.value;
}
Name3.onblur = () => {
    para3.innerText = '';
}


