let menubtn = document.getElementById('new')
let btn = document.getElementById('button')


menubtn.addEventListener('click', ToggleMenu)

    function ToggleMenu(){
        btn.classList.toggle('active');
    }