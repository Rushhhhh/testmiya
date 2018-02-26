
var $ulLi = $('#banner').find('ul li');
var $olLi = $('#banner').find('ol li');
var iNow = 0;
var timer;

$olLi.on('mouseover',function(){
		$(this).attr('class','active').siblings().attr('class','');
		$ulLi.eq( $(this).index() ).animate({opacity:1},500).siblings().animate({opacity:0},500);
		iNow = $(this).index();
	});

$('#banner').on('mouseover',function(){
		clearInterval(timer);
	});
	$('#banner').on('mouseout',function(){
		timer = setInterval(run,2000);
	});

timer = setInterval(run, 2000);

function run(){

	if(iNow == $olLi.length-1){
		iNow = 0;
	}
	else{
		iNow ++;
	}
	$olLi.eq(iNow).attr('class','active').siblings().attr('class','');
	$ulLi.eq(iNow).animate({opacity:1},500).siblings().animate({opacity:0},500);
}


 