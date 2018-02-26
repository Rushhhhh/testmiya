<?php

	header('Access-Control-Allow-Origin:*');
	header('Content-Type:text/html;charset=utf-8');
	$con = mysqli_connect('localhost','root','','1707');
	mysqli_query($con,'set names utf8');

	$username = $_GET['name'];
	$sql = "select * from reg where username='$username'";
	$query = mysqli_query($con,$sql);
	if($query && mysqli_num_rows($query)){
		echo '此号码已注册 请直接登陆';
	}	
	else{
		echo '号码验证合格';
	}
?>