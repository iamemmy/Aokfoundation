const toggleBtn = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.nav-container');
let body = document.querySelector('body');


toggleBtn.addEventListener('click', e => {

    mobileMenu.classList.toggle('show')
    
    const isOpen = mobileMenu.classList.contains('show');
    if (isOpen) {
        body.style.overflowY = 'hidden'
        toggleBtn.classList.add('fa-times')
    } else {
        body.style.overflowY = 'scroll'
        toggleBtn.classList.remove('fa-times')
    }
})