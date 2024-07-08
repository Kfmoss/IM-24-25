const hamMenu_main = document.querySelector('.main_btnmenu');
const offscreenMenu_main = document.querySelector('.main-off-screen-menu');
const backbtn = document.querySelector('.tilbake_main');

hamMenu_main.addEventListener('click', () => {offscreenMenu_main.classList.toggle('active')});
document.addEventListener('click',(e) =>{
    if(!offscreenMenu_main.contains(e.target)  && !hamMenu_main.contains(e.target)){
        offscreenMenu_main.classList.remove('active');
    }
    if(backbtn.contains(e.target)){
        offscreenMenu_main.classList.remove('active');

    }
    
} )
const op3 = document.querySelector('.op3');
const op3_list = document.querySelector('.oppgave3');
op3.addEventListener('click', ()=>{
    if (op3_list.style.display !='block'){
        op3_list.style.display ='block';
        
    }
})
document.addEventListener('click', (ex)=>{
    if(!op3_list.contains(ex.target)&& !op3.contains(ex.target)){
        op3_list.style.display ='none';

    }
})

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