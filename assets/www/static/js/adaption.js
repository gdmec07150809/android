window.onload = function(){
	
	adapt();
	
	
	
	
	function adapt(){
		var dpr = window.devicePixelRatio;//获取设备像素比
//		console.log(dpr)
		var sca = dpr>1 ? 1/dpr:1;//动态改变viewport的缩放比例
		var meta = document.createElement("meta");
		meta.name = "viewport";
		//viewport的内容动态缩放
		meta.content = "width=device-width,user-scalable=no,initial-scale="+sca;
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(meta);
		
		//设置html的字体大小,求rem的基准值，默认设置100px(其他值也行)
		var winWidth = document.documentElement.clientWidth;
		var html = document.getElementsByTagName('html')[0];
		var remRoot = winWidth*100/750;//720为设计稿尺寸，100为自定义的比例
		html.style.fontSize  = remRoot+"px";
		console.log(remRoot);
		}
		window.onresize = function(){
			adapt();
		}
}

