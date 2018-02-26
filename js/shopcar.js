$minus = $('#con2').find('.w .minus');
$count = $('#con2').find('.w .count');
$plus = $('#con2').find('.w .plus');

$number = $('#con3').find('.w .number');
$num = $('#con2').find('.w>li');
$realnum = $num.length -1;
// console.log($realnum);


$nav = $('#con3');


//xiaoji
$xiaoji = $('#con2 .money span');

	var $xjvalue ;
	var $xjvalue1 ;
	var $xjvalue2 ;


$plus.on('click',function(){

	 $xjvalue = $(this).parent().next();
	 $xjvalue1 = $xjvalue.find('span').html();
	 $xjvalue2 = $xjvalue.find('span');
	/* $xjvalue = $(this).parent().next().find('span');
	 $xjvalue1 = $xjvalue.html();*/

	$value = $(this).prev().val();

	$value++;
	$(this).prev().val($value);
	/*$xiaoji.html($xjvalue * $value)*/
	$xjvalue2.html($xjvalue1/($value-1)*$value);
})

$minus.on('click',function(){
	 $xjvalue = $(this).parent().next();
	 $xjvalue1 = $xjvalue.find('span').html();
     $xjvalue2 = $xjvalue.find('span');

	$value = $(this).next().val();
	if($value==1){
		$(this).next().val('1');
		$xjvalue2.html($xjvalue1);
	}
	else{
		$value--;
		 $(this).next().val($value);
		 $xjvalue2.html($xjvalue1/($value+1)*($value));
	}

	
})


$number.html($realnum);



//吸顶
var T = $nav.offset().top;
/*console.log(T);
console.log($(window).scrollTop());*/

$(window).on('scroll',function(){
	if(T>($(window).scrollTop()+500)){
		$nav.css('position','fixed');
		$nav.css('bottom','0');
		$nav.css('background','white');
		$nav.css('height','60px');
		$nav.css('z-index','3');
		$nav.css('padding-bottom','0');
		$nav.css('margin-bottom','0');
		$nav.css('margin-left','130px');
	}
	else{
		$nav.css('position','');
		$nav.css('margin-top','20px');
		$nav.css('margin-bottom','20px');
		$nav.css('margin-left','-1px');



	}
})


//全选
$cb = $('[type=checkbox]');
$btn = $('.btn');
console.log($btn.length);
var onoff = true;
$btn.on('click',function(){
	if(onoff){
		for(var i=0;i<$cb.length;i++){
			$cb[i].checked = true;
		}
	}
	else{
		for(var i=0;i<$cb.length;i++){
			$cb[i].checked = false
		}
	}
	onoff = !onoff;
})

