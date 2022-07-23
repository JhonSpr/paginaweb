addEventListener('DOMContentLoaded', () => {

    const btn_menu = document.querySelector('.menu-bars');
    if (btn_menu) {
        btn_menu.addEventListener('click' , () =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

})




function activado(){
                           
    if (i.style.display === "block"){
        e.style.background="#c47005";
    }
       else{
           e.style.background="#fa0"
       }
       if(x.style.display === "block"){
           e3.style.background="#c47005";
       }
       else{
           e3.style.background="#fa0"
       }
       if(g.style.display === "block"){
           e2.style.background="#c47005"
       }
       else{
           e2.style.background="#fa0"
       }
      }
   
       function myFunction() {
               var e = document.getElementById('opcion1');
               var e2 = document.getElementById('opcion2');
               var e3 = document.getElementById('opcion3');
               var x = document.getElementById("myDIV1");
               var g = document.getElementById('myDIV2');
               var i = document.getElementById('divPrincipal');
               if (i.style.display === "none") {
                   i.style.display = "block";
                   x.style.display="none";
                   g.style.display="none";
                   e.style.background="#c47005"
                   e2.style.background="transparent"
                   e3.style.background="transparent"
                 
   
               } else {
               
                   i.style.display = "block";
                   x.style.display="none";
                   g.style.display="none";
           
               }
           }
   
   
       
           function myFunction3() {
               var e = document.getElementById('opcion1');
               var e2 = document.getElementById('opcion2');
               var e3 = document.getElementById('opcion3');
               var x = document.getElementById("myDIV1");
               var g = document.getElementById('myDIV2');
               var i = document.getElementById('divPrincipal');
               if (x.style.display === "none") {
                   x.style.display = "block";
                   i.style.display="none";
                   g.style.display="none";
                   e.style.background="transparent"
                   e2.style.background="transparent"
                   e3.style.background="#c47005"
   
               } else {
               
                   x.style.display = "block";
                   i.style.display="none";
                   g.style.display="none";
                   
           
               }
           }
      
       
           function myFunction2() {
               var e = document.getElementById('opcion1');
               var e2 = document.getElementById('opcion2');
               var e3 = document.getElementById('opcion3');
               var x = document.getElementById("myDIV1");
               var g = document.getElementById('myDIV2');
               var i = document.getElementById('divPrincipal');
               if (g.style.display === "none") {
                   x.style.display = "none";
                   g.style.display="block";
                   i.style.display= "none";
                   e.style.background="transparent"
                   e2.style.background="#c47005"
                   e3.style.background="transparent"
                  
               } else {
                   
                   x.style.display = "none";
                   g.style.display="block";
                   i.style.display= "none";       
               }
           }
   
   
   
   