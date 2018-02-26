$nav = $('#pick2').find('.w');
var T = $nav.offset().top;
console.log(T);
console.log($(window).scrollTop());

$(window).on('scroll',function(){
	if($(window).scrollTop()>T){
		$nav.css('position','fixed');
		$nav.css('top','0');
		$nav.css('z-index','4');
		$nav.css('left','81px');
		$nav.css('margin-top','0');
		$nav.css('border','1px solid #eee')
	}
	else{
		$nav.css('position','');
		$nav.css('margin-top','20px');

	}
})
