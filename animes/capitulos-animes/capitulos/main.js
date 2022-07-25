addEventListener('DOMContentLoaded', () => {

    const btn_menu = document.querySelector('.menu-bars');
    if (btn_menu) {
        btn_menu.addEventListener('click' , () =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

})






   
       function myFunction() {
               var x = document.getElementById("myDIV2");
               var g = document.getElementById('myDIV3');
               var i = document.getElementById('myDIV1');
   

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
   
   
       
           function myFunction2() {
               var x = document.getElementById("myDIV2");
               var g = document.getElementById('myDIV3');
               var i = document.getElementById('myDIV1');

               if (x.style.display === "none") {
                   x.style.display = "block";
                   g.style.display="none";
                   i.style.display= "none";
                  

               
                  
               } else {
                x.style.display = "block";
                g.style.display="none";
                i.style.display= "none";       
               }
           }


           function myFunction3() {
            var x = document.getElementById("myDIV2");
            var g = document.getElementById('myDIV3');
            var i = document.getElementById('myDIV1');


            if (g.style.display === "none") {
                x.style.display = "none";
                i.style.display="none";
                g.style.display="block";

             
               

            } else {
                x.style.display = "none";
                i.style.display="none";
                g.style.display="block";
                
        
            }
        }


   
           

           function marks(){
           var x = document.getElementById("myDIV2");
           var g = document.getElementById('myDIV3');
           var i = document.getElementById('myDIV1');
           var marcado = document.getElementById('opcion1');
           var marcado2 = document.getElementById('opcion2');
           var marcado3 = document.getElementById('opcion3');
           if(i.style.display === "none"){ 
            
            marcado.classList.remove('activado');
           }
           else{
           
            marcado.classList.add('activado');
           }
           if(x.style.display === "none"){
          
            marcado2.classList.remove('activado');
           }
           else{
            marcado2.classList.add('activado');
           }
           
           if(g.style.display === "none"){
         
            marcado3.classList.remove('activado');
           }
           else{
            marcado3.classList.add('activado');
           }
           
           
           }

                                   
   
   