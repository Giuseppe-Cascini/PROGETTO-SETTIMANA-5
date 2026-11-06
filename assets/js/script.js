// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.
const btnTemaScuro = document.querySelector('#btnTemaScuro')
const iconaBtnTemaScuro = btnTemaScuro.querySelector('i')

btnTemaScuro.addEventListener('click', (e) => {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')) {
        iconaBtnTemaScuro.classList.replace('fa-moon', 'fa-sun')
    } else {
        iconaBtnTemaScuro.classList.replace('fa-sun', 'fa-moon',)
    }
});