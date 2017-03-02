// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}
var formOpen=true;

$(window).scroll(collapseNavbar);
$(document).ready(function(){
	closeForm();
	formOpen=false;
	collapseNavbar();
});
function toggleForm(){
	if(formOpen){
		closeForm();
	}else{
		openForm();
	}
}


function openForm() {
	if(!formOpen){
		formOpen=true;
		$(".contact-dropdown").removeClass("atbottom", 1000, 'swing');
		$('form').slideToggle();
		$('html, body').animate({
			scrollTop: $("#submit").offset().top
		}, 400);
	}
}
function closeForm() {
	if(formOpen){
		formOpen=false;
		$('form').slideToggle();
		$(".contact-dropdown").addClass("atbottom", 400, 'swing');
	}
}
loop();
function loop(){
	setTimeout(function(){
        loop();
    }, 300);
}

function contactPressed(){
		if(formOpen){
			formOpen=false;
			$(".contact-dropdown").addClass("atbottom", 400, 'swing');
			$('form').slideToggle();
		}
		else{
			formOpen=true;
			$(".contact-dropdown").removeClass("atbottom", 1000, 'swing');
			$('form').slideToggle();
		}
}
//expand boxes whhen selected
$( "#c10" ).click(function() {
	$( "#apps" ).toggle( "slide", 500 );
	$( "#websites" ).toggle( "slide", 500 );
	$("#theory").animate({
    right: $("#theory").parent().width() / 2 - $("#theory").width() / 2
}, 2000);
});
//fix contact button when scrollerd past form
$(window).scroll(function(){
	if(!formOpen){
		//$(".contact-dropdown").css("bottom", 0)
	}else{
		$(".contact-dropdown").css("bottom", Math.max(0, $(window).height()+$(this).scrollTop()-2355));
	}
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});