
$smimg = $('#main').find('.w .l .down li span');
$bgimg = $('#main').find('.w .l .up img');

$minus = $('#main').find('.w .r .fig .minus');
$count = $('#main').find('.w .r .fig .count');
$plus = $('#main').find('.w .r .fig .plus');

$nav = $('#mdnav');



$smimg.on('mouseover',function(){
	$(this).attr('class','active').siblings().attr('class','');
	var val = $(this).index('span');
	$bgimg.attr('src','../images/detail_files/bg'+(val-3)+'.jpg')
})

$plus.on('click',function(){

	$value = $count.val();

	$value++;
	$count.val($value);
})

$minus.on('click',function(){
	$value = $count.val();
	if($value==1){
		$count.val('1');
	}
	else{
		$value--;
		$count.val($value);
	}

	
})



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
