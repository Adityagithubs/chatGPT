let title = document.querySelectorAll('.title')

title.forEach( function(a) {
    a.onclick = function() {
        let detail = a.closest('.acord').querySelector('.detail');;
        detail.classList.toggle('data');
    }
})