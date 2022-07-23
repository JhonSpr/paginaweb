addEventListener('DOMContentLoaded', () => {

    const btn_menu = document.querySelector('.menu-bars');
    if (btn_menu) {
        btn_menu.addEventListener('click' , () =>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

})



// $('ul.tabs li a:first').addClass('active');
// 	$('.contenedor_iframe iframe').hide();
// 	$('.contenedor_iframe iframe:first').show();

// 	$('ul.tabs li a').click(function(){
// 		$('ul.tabs li a').removeClass('active');
// 		$(this).addClass('active');
// 		$('.contenedor_iframe iframe').hide();

// 		var activeTab = $(this).attr('href');
// 		$(activeTab).show();
// 		return false;
// 	});




var colocarClass = ('.tabs li a:first').addClass('active');
	let esconder = ('.contenedor_iframe iframe').hide();
    esconder.style.display="none";
	let mostrar = ('.contenedor_iframe iframe:first').show();
    mostrar.style.display="block";

	('ul.tabs li a').click(function(){
		removerClass=('ul.tabs li .menu-tabs').removeClass('active');
		colocarClass = (this).addClass('active');
		esconder = ('.contenedor_iframe iframe').hide();

		var activeTab = colocarClass=(this).attr('href');
		mostrar = (activeTab).show();
		return false;
	});
