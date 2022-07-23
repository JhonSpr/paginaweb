addEventListener('DOMContentLoaded', () => {

    const btn_menu = document.querySelector('.menu-bars');
    if (btn_menu) {
        btn_menu.addEventListener('click' , () =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

})


addEventListener('DOMContentLoaded', ()=>{
   
        const activado = document.querySelector('.contenedor-list');
        if (activado){
          activado.addEventListener('click' , () =>{
              const marcado1 = document.querySelector('.activado1');
              activado1.addClass('activado');
              const marcado2 = document.querySelector('.activado2');
              activado1.addClass('activado3');
              const marcado3 = document.querySelector('.activado3');
              activado1.addClass('activado3');
          })
        }
      })






   
       function myFunction() {
               var x = document.getElementById("myDIV1");
               var g = document.getElementById('myDIV2');
               var i = document.getElementById('divPrincipal');
               if (i.style.display === "none") {
                   i.style.display = "block";
                   x.style.display="none";
                   g.style.display="none";
                  
                   
                 
   
               } else {
                   i.style.display = "block";
                   x.style.display="none";
                   g.style.display="none";
           
               }
           }
   
   
       
           function myFunction3() {
               var x = document.getElementById("myDIV1");
               var g = document.getElementById('myDIV2');
               var i = document.getElementById('divPrincipal');
               if (x.style.display === "none") {
                   x.style.display = "block";
                   i.style.display="none";
                   g.style.display="none";
                
                  
   
               } else {
                   x.style.display = "block";
                   i.style.display="none";
                   g.style.display="none";
                   
           
               }
           }
      
       
           function myFunction2() {
               var x = document.getElementById("myDIV1");
               var g = document.getElementById('myDIV2');
               var i = document.getElementById('divPrincipal');
               if (g.style.display === "none") {
                   x.style.display = "none";
                   g.style.display="block";
                   i.style.display= "none";
               
                  
               } else {
                x.style.display = "none";
                g.style.display="block";
                i.style.display= "none";       
               }
           }
   
   
   
   