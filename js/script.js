// $(document).ready(function(){
// 	$('.button_burger').click(function(event) {
// 		$('.button_burger,.header_menu').toggleClass('active');
// 	});
// });

$('.button_burger').click(function(){
        $('.button_burger, .header_menu').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.header_menu').click(function(){
       $('.button_burger, .header_menu').removeClass('active');
       $('body').removeClass('lock');
});