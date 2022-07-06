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
  
        document.querySelectorAll(".imagen-mask").forEach(anime =>{
  
            anime.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?anime.classList.remove("filtro")
              :anime.classList.add("filtro")
        })
  
    }
  
  
  })