var dmlist= [];

//发送弹幕
$("#btnSend").click(function() {
	var text = $("#danmutxt").val();
	if(text == "") { $("#msg").fadeIn(); return; };
	
	$("#msg").fadeOut();
	
	var obj = { txt: text, color: getRandomColor() }
	
	dmlist.push(obj);
	
	init_Danmu();
	
	$("#danmutxt").val("");
});

//清空弹幕
$("#btnClear").click(function() {
	dmlist = [];
	init_Danmu();
});

//初始化弹幕
function init_Danmu() {
	var _top = 0;
	$.each(dmlist, function(index, item) {
		var textObj = $("<div>" + item.txt + "</div>");
		$(".danmu").append(textObj.fadeIn());
		
		// 计算空白范围值
		var _width = $(window).width() / 15; 
		//显示范围的最大宽度
		var _left = $(window).width() - textObj.width() - _width;
		//显示范围的最大高度
		var _height = 480;
		
		//随机显示位置
		_top += RandomNumBoth(0, _height); 

		if(_top >= (_height - 20)) { _top = 30; }
		
		//给弹幕添加样式
		textObj.css({ left: _left, top: _top, color: getRandomColor() }); 

		//随机弹幕漂浮时间
		var time = RandomNumBoth(5000, 10000);
		
		//弹幕动画
		textObj.animate({ left: (_width - 30) + "px" }, time, function() { textObj.remove(); });
		
		//完成但幕后 移除该弹幕
		dmlist.remove(item);
	});
}

//随机颜色
function getRandomColor() {
	return '#' + (function(h) {
		return new Array(7 - h.length).join("0") + h
	})((Math.random() * 0x1000000 << 0).toString(16))
}

//随机函数
function RandomNumBoth(Min,Max){
	var Range = Max - Min;
	var Rand = Math.random();
	var num = Min + Math.round(Rand * Range);
	return num;
}