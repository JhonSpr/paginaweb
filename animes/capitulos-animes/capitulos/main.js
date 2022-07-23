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
    const activado1 = document.getElementById('opcion1')
    activado1.classList.add('activo1');
    const activado2 = document.getElementById('opcion2')
    activado2.classList.add('activo2');
    const activado3 = document.getElementById('opcion3')
    activado3.classList.add('activo3');
    var i = document.getElementById('divPrincipal');
    var g = document.getElementById('myDIV2');
    var x = document.getElementById("myDIV1");

    if (i.style.display === "block") {
        opcion1.style.background=" #c47005";
        activado2.style.background=" #fa0"; 
        activado3.style.background=" #fa0";          
    }
    else{
        activado1.style.background="#fa0"
    }
    if (x.style.display === "block") {
        activado1.style.background=" #fa0";
        activado2.style.background=" #fa0"; 
        activado3.style.background=" #3A3A4C";          
    }
    else{
        activado3.style.background="#fa0"
    }
    if (g.style.display === "block") {
        activado1.style.background=" #fa0";
        activado2.style.background=" #3A3A3C"; 
        activado3.style.background=" #fa0";          
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
   
   
   
   