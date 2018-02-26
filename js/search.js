
var $con = $('#logo').find('.w .search .l');
var $logo = $('#logo');
var searchList;
searchList = document.createElement('ul');
		document.body.appendChild(searchList);
		searchList.style.position='absolute';
		searchList.style.width='200px';
		searchList.style.height='300px';
		searchList.style.background='rgba(250,255,255,0)';
		searchList.style.left='510px';
		searchList.style.top='115px';
		searchList.style.fontSize='16px';


$con.on('input',function(){
	var val = this.value.trim();
	
	getJSON('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ val +'&json=1&p=3&sid=1438_22534_21107_17001_20930&req=2&csor=1&cb=foo',function(data){
		/*console.log(data);*/
		

		searchList.innerHTML = '';
		searchList.style.display="none";
		if(data.status == '0'){
			console.log(data);
			searchList.style.background='rgba(250,255,255,1)';

			searchList.style.display="block";

			var list = data.s;
			for(var i=0;i<list.length;i++){
				var li = document.createElement('li');
				li.innerHTML = list[i];
				searchList.appendChild(li);
			}
			
		}
		else{
			searchList.style.display="none";
		}
		
	})
})





function getJSON(url,cbFn){
		var script = document.createElement('script');
		var re = /cb=(\w+)/;
		url = url.replace( re , function(arg){
			return arg + String(Math.random()).replace(/\./,'');
		});
		var fnName = url.match(re)[1];
		window[fnName] = cbFn;
		script.src = url;
		script.onload = function(){
			document.body.removeChild(script);
			delete window[fnName];
		};
		document.body.appendChild(script);
	}
