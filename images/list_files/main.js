$(function(){$.fn.extend({moduleFixed:function(e){var t={Zindex:2},n=$.extend(t,e),i=$(this),f=i.offset().top,o=i.offset().left,a=i.find(".moFixed"),s=$(".moFixed").height()+15;$(window).on("resize",function(){o=i.offset().left,a.css({left:o,zIndex:n.Zindex})}),$(window).on("scroll",function(){var e;f=i.offset().top,e=$(".gotoppp").length>0?$(".gotoppp").offset().top:$(".Nfooter").offset().top;i.height();$(this).scrollTop()>f?(a.addClass("navFix"),a.css({left:o,zIndex:n.Zindex}),$(this).scrollTop()+s>e?(a.removeClass("navFix"),a.removeAttr("style"),a.css({position:"absolute",top:e-s,left:o,zIndex:n.Zindex})):(a.removeAttr("style"),a.addClass("navFix"),a.css({left:o,zIndex:n.Zindex}))):(a.removeClass("navFix"),a.removeAttr("style"))})},timer:function(e){function t(){if(Diffms=s.getTime()-(l.getTime()+u),u+=1e3,Diffms>0){f=Math.floor(Diffms/r),Diffms-=f*r,o=Math.floor(Diffms/m),Diffms-=o*m,a=Math.floor(Diffms/d),Diffms-=a*d;var e=Math.floor(Diffms/c);f<10&&(f="0"+f),o<10&&(o="0"+o),a<10&&(a="0"+a),e<10&&(e="0"+e);var t=$(i.element).find(".t0"),n=$(i.element).find(".t1"),p=$(i.element).find(".t2"),v=$(i.element).find(".t3");t.html(f),n.html(o),p.html(a),v.html(e),"none"==$(i.element).css("display")&&$(i.element).show()}else{clearInterval(g);var h="<p>活动已结束</p>";$(i.element).html(h),i.timerEnd()}}if(!e.noConflict&&"function"==typeof $.fn.timer)return!1;var n={},i=$.extend(n,e);i.element=$(this);for(var f,o,a,s=new Date(i.endTime),l=new Date(i.starTime),r=864e5,m=36e5,d=6e4,c=1e3,p=new Array(":",":",":",".",""),v="",h=-1,x=5;++h<x;)v+=4==h?'<span class="appw t'+h+'">?</span><span class="cntSeparator">'+p[h]+"</span>":'<span class="appw t'+h+'">??</span><span class="cntSeparator">'+p[h]+"</span>";$(i.element).append(v);var u=0,g="InterValObj"+i.id;g=setInterval(function(){t()},1e3);var w=($(i.element).find(".t4"),9);setInterval(function(){w<=0?w=9:w-=1,$(i.element).find(".t4").text(w)},100)},foucs:function(e){var t=$("#index_b_hero"),n=t.find("li.hero"),i=t.find("a.prev"),f=t.find("a.next"),o={interval:e&&e.interval||3500,animateTime:e&&e.animateTime||500,direction:e&&"right"===e.direction,_imgLen:n.length},a=0,s=function(e){return a+e>=o._imgLen?a+e-o._imgLen:a+e},l=function(e){return a-e<0?o._imgLen+a-e:a-e},r=function(e){n.eq(e?l(2):s(2)).css("left",e?"-1920px":"1920px"),n.animate({left:(e?"+":"-")+"=960px"},o.animateTime),a=e?l(1):s(1)},m=setInterval(function(){r(o.direction)},o.interval);n.eq(a).css("left",0).end().eq(a+1).css("left","960px").end().eq(a-1).css("left","-960px"),t.find(".hero-wrap").add(i).add(f).hover(function(){clearInterval(m)},function(){m=setInterval(function(){r(o.direction)},o.interval)}),i.click(function(){0===$(":animated").length&&r(!1)}),f.click(function(){0===$(":animated").length&&r(!0)})}})});