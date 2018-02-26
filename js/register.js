//验证码
$btn = $('#main .w .r .btn');
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

//ajax
//1
/*var number = document.getElementById('number');
var tips = document.getElementById('tips');
number.onblur = function(){
		var name = number.value.trim();
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4&&xhr.status==200){
				tips.innerHTML = xhr.responseText;
				console.log(tips.innerHTML)
			}
		}
		xhr.open('GET','http://localhost/111/project-miya/src/php/ajaxReg.php?name='+name,true);
		xhr.send(null);
	}*/
//2
/*var number = document.getElementById('number');
var tips = document.getElementById('tips');
 number.onblur = function(){
	var name = number.value.trim();
	getAjax('http://localhost/111/project-miya/src/php/ajaxReg.php','name='+name,function(data){
		tips.innerHTML = data;
	})
}

	function getAjax(url , data , cbFn){
		data = data ? '?'+data : '';
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				cbFn(xhr.responseText);
			}
		};
		xhr.open('GET',url+data,true);
		xhr.send(null);
	}
*/


//3
$number = $('#number');
$tips = $('#tips');

$number.on('blur',function(){
	var $name = $number.val();
	$.ajax({
		url:'http://localhost/111/project-miya/src/php/ajaxReg.php',
		type:'GET',
		data:{name:$name},
		dataType:'json',
		asnyc:false,
		success:function(data){
			console.log(data.responseText);
			$tips.html(data.responseText);
		},
		error:function(err){
			console.log(err.responseText);
			$tips.html(err.responseText);
		}

	});
})

