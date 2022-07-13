addEventListener('DOMContentLoaded', () => {

    const btn_menu = document.querySelector('.btn_menu');
    if (btn_menu) {
        btn_menu.addEventListener('click' , () =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

})




inputSearch = document.getElementById("inputSearch");
box_search =  document.getElementById("box-search");

document.getElementById('inputSearch').addEventListener('keyup',buscador);

function buscador(){
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName('li');

    
    for (i = 0; i < li.lenght; i++){

        a = li[i].getElementsByTagName('a')(0);
        textValue = a.textContent || a.innerText;


        if (textValue.toUpperCase().indexOf(filter) > -1 ) {
            li[i].style.display = "";
            box_search.style.display = "block";

        }else{
            li[i].style.display = "none";
        }
    }



}

