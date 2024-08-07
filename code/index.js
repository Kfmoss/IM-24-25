

const hamMenu = document.querySelector('.imsk_btnmenu');
const offScreenMenu = document.querySelector('.imsk-off-screen-menu');
const closeMenuDesk = document.querySelector('.closeMenu');


hamMenu.addEventListener('click', () => {offScreenMenu.classList.toggle('active')});
document.addEventListener('click',(e) =>{
    if(!offScreenMenu.contains(e.target)  && !hamMenu.contains(e.target) || closeMenuDesk.contains(e.target)){
        offScreenMenu.classList.remove('active');
    }
    
} )




