addEventListener('DOMContentLoaded', () => {

    const btn_menu = document.querySelector('.btn_menu');
    if (btn_menu) {
        btn_menu.addEventListener('click' , () =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

})




document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".anime").forEach(animes =>{
  
            animes.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?animes.classList.remove("filtro")
              :animes.classList.add("filtro")
        })
  
    }
  
  
  })