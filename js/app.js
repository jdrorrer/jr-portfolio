// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Show active link on navigation
$('.main-nav ul li a').click(function() {
	//Remove class from prior active link
	$('.selected').removeClass('selected');
	//"this" is current link clicked
	$(this).addClass('selected');
});

// Show Home as active link when logo clicked
$('.logo a').click(function() {
   	$('.selected').removeClass('selected');
   	$('.main-nav ul li a[href="#home-section"]').addClass('selected');
});


//On window resize
$(window).resize(function() {
	//If hamburger menu icon is NOT displayed
	if($('.fi-list').css('display') === 'none') {
		//That means the window is greater than 768px and the nav menu should show
		$('.main-nav').removeClass('menu-hidden');	
	} else {
		//Otherwise the window is <= 768px and the nav menu should be hidden
		$('.main-nav').addClass('menu-hidden');
	}
});

//Show and hide nav menu when hamburger icon clicked
$('a.hamburger').click(function() {
	$('.main-nav').toggleClass('menu-hidden');
	//Hide the nav menu when a link is clicked and the window is <= 768px
	if($('.fi-list').css('display') != 'none') {
		$('.main-nav ul li a').click(function() {
			$('.main-nav').addClass('menu-hidden');
		});
	}
});
