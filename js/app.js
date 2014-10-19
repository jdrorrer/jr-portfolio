// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Show active link on navigation
// $('.main-nav ul li a').click(function() {
// 	//Remove class from prior active link
// 	$('.selected').removeClass('selected');
// 	//"this" is current link clicked
// 	$(this).addClass('selected');
// });

// Show Home as active link when logo clicked
$('.logo a').click(function() {
   	$('.selected').removeClass('selected');
   	$('.main-nav ul li a[data-scroll="home-section"]').addClass('selected');
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

//Scroll animation to proper section when a link in main header is clicked
$('.main-nav ul li a').on('click', function() {
	var scrollAnchor = $(this).attr('data-scroll'),
    	scrollPoint = $('h1[data-anchor="' + scrollAnchor + '"]').offset().top;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;
});

//Scroll animation to home section when logo image is clicked
$('.logo a').click(function() {
	var scrollAnchor = $(this).attr('data-scroll'),
		scrollPoint = $('h1[data-anchor="home-section"]').offset().top; 

	$('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;
});

//Change active link based on scroll position
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 138) {
        $('h1[id$="section"]').each(function(i) {
        	var offset = $(this).offset();
        	// console.log(offset, offset.top, windscroll+1);
            if (offset.top <= windscroll + 1) {
                $('.selected').removeClass('selected');
                $('.main-nav ul li a').eq(i).addClass('selected');
            }
        });
    } else {
        $('.selected').removeClass('selected');
        $('.main-nav ul li a:first').addClass('selected');
    }

}).scroll();

//Shrink main header when scrolling down
$(window).scroll(function() {
	var windscroll = $(window).scrollTop();
	if (windscroll >= 138) {
		$('.main-header').addClass('shrink-header');
	} else {
		$('.main-header').removeClass('shrink-header');
	}
}).scroll();


//Code to implement Magnific Popup Lightbox
$('.img-box').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
  gallery:{enabled:true}
});




