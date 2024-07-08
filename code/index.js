

const hamMenu = document.querySelector('.imsk_btnmenu');
const offScreenMenu = document.querySelector('.imsk-off-screen-menu');

hamMenu.addEventListener('click', () => {offScreenMenu.classList.toggle('active')});
document.addEventListener('click',(e) =>{
    if(!offScreenMenu.contains(e.target)  && !hamMenu.contains(e.target)){
        offScreenMenu.classList.remove('active');
    }
} )




