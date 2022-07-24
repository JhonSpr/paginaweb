addEventListener('DOMContentLoaded', () => {

    const btn_menu = document.querySelector('.menu-bars');
    if (btn_menu) {
        btn_menu.addEventListener('click' , () =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

})


function marks(){
    var x = document.getElementById("myDIV1");
    var g = document.getElementById('myDIV2');
    var i = document.getElementById('divPrincipal');
    var marcado = document.getElementById('opcion1');
    var marcado2 = document.getElementById('opcion2');
    var marcado3 = document.getElementById('opcion3');
    if(i.style.display === "block"){
        marcado.classList.add('activado');
    }
    else{
        marcado.classList.remove();
    }
    if(x.style.display === "block"){
        marcado2.classList.add('activado');
    }
    else{
        marcado2.classList.remove();
    }

    if(g.style.display === "block"){
        marcado3.classList.add('activado');
    }
    else{
        marcado3.classList.remove();
    }
    

   }
   

        
     






   
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
   
   
   
   