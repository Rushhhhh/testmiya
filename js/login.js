
$btn = $('#main').find('.w .r .btn');
$btn.on('click',function(){
	var $val = $btn.val();
	var num = 6;
	$val = num +'s';
	$btn.val($val);
	var timer = setInterval(function(){
		num--;
		$val = num +'s';
		$btn.val($val);
		console.log($val)
		if(num==-1){
			clearInterval(timer);
			$btn.val('获取验证码');
		}
	}, 1000)
})