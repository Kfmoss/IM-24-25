const hamMenu_main = document.querySelector('.main_btnmenu');
const offscreenMenu_main = document.querySelector('.main-off-screen-menu');

hamMenu_main.addEventListener('click', () => {offscreenMenu_main.classList.toggle('active')});
document.addEventListener('click',(e) =>{
    if(!offscreenMenu_main.contains(e.target)  && !hamMenu_main.contains(e.target)){
        offscreenMenu_main.classList.remove('active');
    }
} )


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