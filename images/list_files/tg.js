try {
    (function(a,b,c,d){
    a[c]=function(){a[c]['ar']=a[c]['ar']||[];a[c]['ar'].push(arguments);};
    var s=b.createElement('script');s.async = 1;s.src='//static.t.agrant.cn/ag_track-2.38.js';
    var r=b.getElementsByTagName('script')[0];r.parentNode.insertBefore(s,r);
    })(window,document,'_agtjs','script');
    _agtjs('init','AG_635532_PVKL','$website$');
    _agtjs('noTrack','cm')
    _agtjs('trackPv');
    
    var agtGetTopUrl = function() {
        var win=window;
        var doc=document;
        var topwin=window.top || window.parent || window;
    
        var localUrl = "";
        try{
            localUrl=topwin.location.href;
        }catch(err){
            localUrl=doc.referrer || win.location.href;
        }
        return localUrl;
    };
    var agtTopUrl = agtGetTopUrl();
    
    var agtCheckString = function(regular, str) {
        var re = new RegExp(regular);
        return re.test(str);
    };
    
    var agtBindClick = function(element,fn){
        if(element.attachEvent){
            element.attachEvent('onclick',fn);
        }else if(element.addEventListener){
            element.addEventListener('click',fn);
        }
    };
    
    var agtBindEventByTimer = function(selector,fn){
        var interval=setInterval(function(){
        	if(!_agtjs.Sizzle){return}
            var elements=_agtjs.Sizzle(selector);
            if(elements && elements.length>0){
                clearInterval(interval);
                for(var i in elements){
                	agtBindClick(elements[i],fn);
                }
            }
        },1000);
    };
    
    function agt_102(){
        _agtjs('loadEvent',{atsev:102,'atssum':google_tag_params.agt_atssum,'atsnum':(function(){var index=agtTopUrl.indexOf("/order/success");if(index==-1){return google_tag_params.agt_atsnum}else{var orderNumber=agtTopUrl.substr(agtTopUrl.indexOf("/order/success")+15,19);if(orderNumber==""){orderNumber=google_tag_params.agt_atsnum}return orderNumber}})(),'atsftb':google_tag_params.isolduser});
    }
    if (agtCheckString('/order/success',agtTopUrl)) {
        agt_102();
    }

    function agt_204(){
        _agtjs('loadEvent',{atsev:204,'atsguk':'$领取成功次数$'});
    }

    function agt_207(){
        _agtjs('loadEvent',{atsev:207,'atsveu':(function(){var index=agtTopUrl.indexOf("/order/success");if(index==-1){return google_tag_params.agt_atsnum}else{var orderNumber=agtTopUrl.substr(agtTopUrl.indexOf("/order/success")+15,19);if(orderNumber==""){orderNumber=google_tag_params.agt_atsnum}return orderNumber}})(),'atsbcg':google_tag_params.agt_atssum,'atsikp':google_tag_params.isolduser});
    }

    function agt_206(){
        _agtjs('loadEvent',{atsev:206,'atspst':'$手机号$'});
    }

    function agt_101(){
        _agtjs('loadEvent',{atsev:101,'atsusr':getcookie('sid')});
    }
    if (agtCheckString('/register/success',agtTopUrl)) {
        agt_101();
    }

    function agt_201(){
        _agtjs('loadEvent',{atsev:201,'atsowp':'$下载次数$'});
    }
    if (agtCheckString('m',agtTopUrl)) {
        agtBindEventByTimer('#down_app',agt_201);
    }
    if (agtCheckString('m',agtTopUrl)) {
        agtBindEventByTimer('.btn',agt_201);
    }
    if (agtCheckString('mia.com',agtTopUrl)) {
        agtBindEventByTimer('.downApp',agt_201);
    }
    if (agtCheckString('mia.com',agtTopUrl)) {
        agtBindEventByTimer('[class="modelimg"]',agt_201);
    }
    if (agtCheckString('mia.com',agtTopUrl)) {
        agtBindEventByTimer('[class="semTagA"]',agt_201);
    }
    if (agtCheckString('mia.com',agtTopUrl)) {
        agtBindEventByTimer('[class="hotspot semTagA"]',agt_201);
    }
    if (agtCheckString('mia.com',agtTopUrl)) {
        agtBindEventByTimer('[href*="https://itunes.apple.com/cn/app/mi-ya-bao-bei-zhong-guo-zui/id973366293?mt=8"]',agt_201);
    }
    if (agtCheckString('mia.com',agtTopUrl)) {
        agtBindEventByTimer('[href*="http://download.miyabaobei.com/Miababy_localhost_V3.3.0.apk"]',agt_201);
    }
    if (agtCheckString('mia.com',agtTopUrl)) {
        agtBindEventByTimer('[class="androiddown"]',agt_201);
    }
    if (agtCheckString('mia.com',agtTopUrl)) {
        agtBindEventByTimer('[class="iosdown"]',agt_201);
    }
    if (agtCheckString('mia.com',agtTopUrl)) {
        agtBindEventByTimer('[class="downBtn"]',agt_201);
    }
	
	
    function agt_200(){
        _agtjs('loadEvent',{atsev:200,'atssse':google_tag_params.agt_atssum,'atsade':(function(){var index=agtTopUrl.indexOf("/order/success");if(index==-1){return google_tag_params.agt_atsnum}else{var orderNumber=agtTopUrl.substr(agtTopUrl.indexOf("/order/success")+15,19);if(orderNumber==""){orderNumber=google_tag_params.agt_atsnum}return orderNumber}})()});
    }
	if (agtCheckString('m',agtTopUrl)) {
        agtBindEventByTimer('button.ipt-btn.J_form_getcoupon',agt_203);
    }
    function agt_203(){
		var phoneNum = "";
		try{
			var ele = document.getElementById("mobile");
			phoneNum = ele.value;
		}catch(e){}
		if(phoneNum !== null && phoneNum !== undefined && phoneNum !== '')
			_agtjs('loadEvent',{atsev:203,'atsyil':phoneNum});
    }

    function agt_202(){
        _agtjs('loadEvent',{atsev:202,'atsxam':'$访问次数$'});
    }

    function agt_999(){
        _agtjs('loadEvent',{atsev:999,'atsxgo':'$激活$'});
    }

    function agt_104(){
        _agtjs('loadEvent',{atsev:104,'atsbas':'$URL$'});
    }
    if (agtCheckString('m',agtTopUrl)) {
        agtBindEventByTimer('.addToCart',agt_104);
    }
	if (agtCheckString('m',agtTopUrl)) {
        agtBindEventByTimer('#addToCart',agt_104);
    }
	if (agtCheckString('m',agtTopUrl)) {
        agtBindEventByTimer('.add.dp_jia',agt_104);
    }
    if (agtCheckString('m',agtTopUrl)) {
        agtBindEventByTimer('.Fbutton',agt_104);
    }
    if (agtCheckString('m',agtTopUrl)) {
        agtBindEventByTimer('.Fbutton btn-cart addShoppingCart',agt_104);
    }
    if (agtCheckString('m',agtTopUrl)) {
        agtBindEventByTimer('#itemProcess',agt_104);
    }



} catch (err) {
    console.log('err:' + err);
}
