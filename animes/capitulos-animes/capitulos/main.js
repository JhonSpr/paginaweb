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
               var x = document.getElementById("myDIV2");
               var g = document.getElementById('myDIV3');
               var i = document.getElementById('divPrincipal');


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
      
       
           function myFunction2() {
               var x = document.getElementById("myDIV2");
               var g = document.getElementById('myDIV3');
               var i = document.getElementById('divPrincipal');

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



           function pausarVideo(){
            if(i.style.display === "none"){
                window.frames['divPrincipal'].location.reload()
             
            }
            else{
                window.frames['myDIV2'].location.reload();
                window.frames['myDIV2'].location.reload();
            }
            if (x.style.display === "none") {
                
               
                window.frames['myDIV2'].location.reload()
                
            }
            else{
                window.frames['divPrincipal'].location.reload()
                window.frames['myDIV3'].location.reload()
            }
            if (g.style.display === "none") {
               
                window.frames['myDIV3'].location.reload()
            }
            else{
                window.frames['divPrincipal'].location.reload()
                window.frames['myDIV2'].location.reload()
            }
             
           }

   
   
   
   