addEventListener('DOMContentLoaded', () => {

    const btn_menu = document.querySelector('.menu-bars');
    if (btn_menu) {
        btn_menu.addEventListener('click' , () =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

})


let iframe = document.getElementById('option1');
window.onmessage = function(e){
if (e.data == 'message'){
document.getElementById("option1").style.display="block";
}
}


<script>
function send() {
    window.top.postMessage('message', '*');
}