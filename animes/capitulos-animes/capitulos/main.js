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



$('.tabs li a:first').addClass('active');
	$('.contenedor_iframe article').hide();
	$('.contenedor_iframe article:first').show();

	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.contenedor_iframe iframe').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});