let MenuBtn = document.getElementById('MenuIcon');
let MenuBar = document.getElementById('Buttons');
console.log(MenuBtn);

MenuBtn.addEventListener('click', ToggleMenu);

function ToggleMenu(){
    MenuBar.classList.toggle('Active');
}

