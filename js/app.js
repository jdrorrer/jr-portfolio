// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Show active link on navigation
$('.inline-list a').click(function(){
   //remove class from prior active link
   $('.selected').removeClass('selected');
   //"this" is current link clicked
   $(this).addClass('selected');
});