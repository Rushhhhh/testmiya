
var $left = $('#left-aside') ;
var $right = $('#right-aside') ;
var $move = $('#move');
var $wx = $('#right-aside').find('ul li.wx');


//滚动出现
$(window).on('scroll',function(){
	if($(window).scrollTop()>200){
		$left.css('display','block');
		$right.css('display','block');
	/*	$move.css('display','block');
		var T = $right.offset().top-$(window).scrollTop()-8;
		$move.css('top',T);
		$move.css('right','100px')*/
	}
	else{
		$left.css('display','none');
		$right.css('display','none');
/*		$move.css('display','none');
*/
	}
	
})


//微信动画
$wx.on('mouseenter',function(){
	$move.animate({opacity:1,right:50},500,'linear')
})
$wx.on('mouseout',function(){
	$move.css('opacity','0');
	$move.css('right','100px');
	$move.css('top','200px');

})

//回到顶部
$top = $('#right-aside').find('li.last');
$top.on('click',function(){
	$(window).scrollTop('0');
})