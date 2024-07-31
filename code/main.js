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
const op1 = document.querySelector('.op1');
const op1_list = document.querySelector('.oppgave1');
const op2 = document.querySelector('.op2');
const op2_list = document.querySelector('.oppgave2');
const op4 = document.querySelector('.op4');
const op4_list = document.querySelector('.oppgave4');
const op5 = document.querySelector('.op5');
const op5_list = document.querySelector('.oppgave5');

op3.addEventListener('click', ()=>{
    if (op3_list.style.display !='block'){
        op3_list.style.display ='block';
        
    }
})
op1.addEventListener('click', ()=>{
    if (op1_list.style.display !='block'){
        op1_list.style.display ='block';
        
    }
})
op2.addEventListener('click', ()=>{
    if (op2_list.style.display !='block'){
        op2_list.style.display ='block';
        
    }
})
op4.addEventListener('click', ()=>{
    if (op4_list.style.display !='block'){
        op4_list.style.display ='block';
        
    }
})
op5.addEventListener('click', ()=>{
    if (op5_list.style.display !='block'){
        op5_list.style.display ='block';
        
    }
})
document.addEventListener('click', (ex)=>{
    if(!op3_list.contains(ex.target)&& !op3.contains(ex.target)){
        op3_list.style.display ='none';
    }
    if(!op1_list.contains(ex.target)&& !op1.contains(ex.target)){
        op1_list.style.display ='none';
    }
    if(!op2_list.contains(ex.target)&& !op2.contains(ex.target)){
        op2_list.style.display ='none';
    }
    if(!op4_list.contains(ex.target)&& !op4.contains(ex.target)){
        op4_list.style.display ='none';
    }
    if(!op5_list.contains(ex.target)&& !op5.contains(ex.target)){
        op5_list.style.display ='none';
    }
})


if (window.matchMedia('screen and (max-width: 768px)').matches){

    document.addEventListener('scroll', ()=>{
        const elements = document.getElementById('sites_lan');
        const scrolling = window.scrollY;
        const halvsize = window.innerHeight / 2
        console.log(halvsize);
        console.log(scrolling);


        if(elements){
           
            let cos = elements.offsetTop;
            console.log("this is the value of component" +cos);
            if(cos ===halvsize){
                elements.addEventListener('scroll', ()=>{
                    elements.style.width =halvsize;
                })
            }
          
            

            console.log(cos);
        }
      
        
    })
    
}




