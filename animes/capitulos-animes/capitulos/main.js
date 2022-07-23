addEventListener('DOMContentLoaded', () => {

    const btn_menu = document.querySelector('.menu-bars');
    if (btn_menu) {
        btn_menu.addEventListener('click' , () =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

})


const option = document.getElementById('#option1');
if (option){
    option.addEventListener('click' , () => {
        const video = document.querySelector('#option1')
        video.click.toggle('show')
    })
}