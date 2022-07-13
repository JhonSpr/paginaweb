addEventListener('DOMContentLoaded', () => {

    const btn_menu = document.querySelector('.btn_menu');
    if (btn_menu) {
        btn_menu.addEventListener('click' , () =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

})



// JavaScript code
function search_animal() {
    let input = document.getElementById('inputSearch').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animes');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}