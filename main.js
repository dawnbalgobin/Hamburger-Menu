$(function() {

	// jQuery Goes here!

	// when we click on the hamburger
	

	$('.fa-bars').on('click', function (){
		//we need to display flex the main nav
		console.log('Hi!');
		$('.mainNav').toggleClass('show');
	});

});