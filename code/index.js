
function menuMain(){
    const menu = document.getElementById("block_menu");
    if(menu.style.display !='block'){
        menu.style.display = 'block';
    }
    else{
        menu.style.display= 'none';
       
    }
    

};
function menuOppgave1(){
    const menu = document.getElementById("oppgave1");
    if(menu.style.display !='block'){
        menu.style.display = 'block';
    }
    else{
        menu.style.display= 'none';
       
    }
    

};
function menuOppgave2(){
    const menu = document.getElementById("oppgave2");
    if(menu.style.display !='block'){
        menu.style.display = 'block';
    }
    else{
        menu.style.display= 'none';
       
    }
    

};
function menuOppgave3(){
    const menu = document.getElementById("oppgave3");
    if(menu.style.display !='block'){
        menu.style.display = 'block';
    }
    else{
        menu.style.display= 'none';
       
    }
    

};
function menuOppgave4(){
    const menu = document.getElementById("oppgave4");
    if(menu.style.display !='block'){
        menu.style.display = 'block';
    }
    else{
        menu.style.display= 'none';
       
    }
    

};
function menuOppgave5(){
    const menu = document.getElementById("oppgave5");
    if(menu.style.display !='block'){
        menu.style.display = 'block';
    }
    else{
        menu.style.display= 'none';
       
    }
    

};

const hamMenu = document.querySelector('.imsk_btnmenu');
const offScreenMenu = document.querySelector('.imsk-off-screen-menu');

hamMenu.addEventListener('click', () => {offScreenMenu.classList.toggle('active')});
document.addEventListener('click',(e) =>{
    if(!offScreenMenu.contains(e.target)  && !hamMenu.contains(e.target)){
        offScreenMenu.classList.remove('active');
    }
} )



