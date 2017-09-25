var chapterOpen=false;
var chapterClosed=true;

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
	if(!formOpen){
		openForm();
	}else{
		closeForm();
	}
}
$( document ).ready(function() {
	$( "div[id^='p']" ).css("display", "none");
		$("#theoryLink").addClass("cursortext");
});
//expand boxes whhen selected
$( "a[id^='c']").click(function() {
	if(chapterClosed){
		chapterClosed=false;
		var chapNum=$(this).attr('id').substr(1, $(this).attr('id').length).toString();
		
		$( "#apps>h3" ).animate({
			width: 0,
			padding: 0,
			display:'none'
		}, 1000);
	
		
		$( "#websites>h3" ).animate({
			width: 0,
			padding: 0,
			display:'none'
		}, 1000);
		$( "#apps" ).animate({
			width: 0,
			padding: 0,
			display:'none'
		}, 1000);
		
		$("#p"+chapNum).delay(1000).fadeIn(1000);
		$( "#websites" ).animate({
			width: 0,
			padding: 0,
			display:'none'
		}, 1000, function() {
			$("#websites>h3, #apps>h3").css("display", "none");
			setTimeout(
			function(){
				chapterOpen=true;
			}, 1000);
		});
		$("#theory").animate({
			width: '100%',
			margin: 'auto',
		}, 1000);
		$("#c"+chapNum).parent().addClass("no-underline");
		$("#theoryLink").addClass("cursorpointer");
		$("#theoryLink").removeClass("cursortext");
		$( "a[id^='c']" ).parent().slideToggle();
		$("#c"+chapNum).parent().slideToggle();
	}
});
//close theory
$("#theoryLink").click(function(){
	if(chapterOpen){
		chapterOpen=false;
		var chapNum=$("a[id^='c']:visible").attr('id').substr(1, $(this).attr('id').length).toString();
		$("#websites>h3, #apps>h3").css("display", "block");
		$( "#apps" ).animate({
			width: "33.33333%",
			display:'block'
		}, 1000);
		
		$("#p"+chapNum).fadeOut(300);
		$( "#websites, #apps" ).animate({
			width: "33.33333%",
			padding : "0px 15px 0px 15px",
			display:'block'
		}, 1000, function() {
			//so you cant click to open while animating
			setTimeout(
			  function() 
			  {
						chapterClosed=true;
			  }, 1000);
		});
		$( "#websites>h3, #apps>h3" ).animate({
			display: "block",
			width: "100%"
		}, 1000);
		$( "#theory").animate({
			width: "33.33333%",
		}, 1000);
		
		$("#p"+chapNum).animate({
			display:'none'
		}, 1000);
		$( "a[id^='c']" ).parent().slideToggle();
		$("#theoryLink").addClass("cursortext");
		$("#theoryLink").removeClass("cursorpointer");
		$("#c"+chapNum).parent().removeClass("no-underline");
		$("#c"+chapNum.toString()).parent().slideToggle();
	}
});
//fix contact button when scrollerd past form
$(window).scroll(function(){
	if(!formOpen){
		//$(".contact-dropdown").css("bottom", 0)
	}else{
		var scrollBottom=Math.abs($(document).scrollTop()-$( document ).height()+$( window ).height());
		console.log(Math.abs($(document).scrollTop()-$( document ).height()+$( window ).height()));
		if($("#contact").outerHeight()-scrollBottom<0){
			$(".contact-dropdown").css("bottom", 0)
		}else{
		$(".contact-dropdown").css("bottom", $("#contact").outerHeight()-scrollBottom);
		}
	}
});
$( window ).resize(function() {
if(!formOpen){
		//$(".contact-dropdown").css("bottom", 0)
	}else{
		var scrollBottom=Math.abs($(document).scrollTop()-$( document ).height()+$( window ).height());
		console.log(Math.abs($(document).scrollTop()-$( document ).height()+$( window ).height()));
		if($("#contact").outerHeight()-scrollBottom<0){
			$(".contact-dropdown").css("bottom", 0)
		}else{
		$(".contact-dropdown").css("bottom", $("#contact").outerHeight()-scrollBottom);
		}
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