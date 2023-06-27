// Make accordion
let accordion = document.querySelectorAll('.accordionTitle');
console.log(accordion);

accordion.forEach( function(e) {
    e.onclick = () => {
        let AccordionCont = e.closest('.Accordion').querySelector('.accordionContent');;
        console.log(AccordionCont);
        AccordionCont.classList.toggle('Collaps');
        
    }
})