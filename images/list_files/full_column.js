$(function(){$.fn.extend({Column:function(e){function t(){nowDJS=o.getTime()+w,DJSTitle="距开始：";var e=r.getTime()-(o.getTime()+w);if(nowDJS>r.getTime()){var e=s.getTime()-(o.getTime()+starTime1);DJSTitle="距结束："}if(nowDJS>s.getTime()&&(DJSTitle="已结束",clearInterval(D),$(a.element).html(""),g=$(a.element).siblings(),g.parent().css("background","none"),g.html(DJSTitle),a.timerEnd()),w+=1e3,starTime1+=1e3,e>=0){l=Math.floor(e/f),e-=l*f,i=Math.floor(e/T),e-=i*T,m=Math.floor(e/p),e-=m*p;var t=Math.floor(e/c);l<10&&(l="0"+l),i<10&&(i="0"+i),m<10&&(m="0"+m),t<10&&(t="0"+t);var n=$(a.element).find(".t0"),d=$(a.element).find(".t1"),h=$(a.element).find(".t2"),v=$(a.element).find(".t3"),g=$(a.element).siblings();g.html(DJSTitle),n.html(l),d.html(i),h.html(m),v.html(t),"none"==$(a.element).css("display")&&$(a.element).show()}}var n={},a=$.extend(n,e);a.element=$(this);for(var l,i,m,s=new Date(a.endTime),r=new Date(a.starTime),o=new Date(a.nowTime),f=(a.msgtext,864e5),T=36e5,p=6e4,c=1e3,d=new Array("天","时","分","秒",""),h="",v=-1,g=5;++v<g;)h+=4==v?'<span class="appw t'+v+'">?</span><span class="cntSeparator">'+d[v]+"</span>":'<span class="appw t'+v+'">??</span><span class="cntSeparator">'+d[v]+"</span>";$(a.element).append(h);var w=0;starTime1=0,starTime2=0;var D="InterValObj"+a.id;D=setInterval(function(){t()},1e3);var S=($(a.element).find(".t4"),9);setInterval(function(){S<=0?S=9:S-=1,$(a.element).find(".t4").text(S)},100)}})});