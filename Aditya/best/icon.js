let button = document.querySelector('.btn');

button.onclick = () => {
    button.classList.toggle('dark');
    document.querySelector('body').classList.toggle('black');
    document.querySelector('span').classList.toggle('white');
}
