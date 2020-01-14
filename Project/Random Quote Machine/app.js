var btnColor = [
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-danger",
    "btn-warning",
    "btn-info",
    "btn-light",
    "btn-dark",
    "btn-link"
];

$(function () {
    // 页面第一次进来后初始化
    GetInfo();

    //点击 get again 重新执行
    $('#get').click(function () {
        GetInfo();
    });
});

//随机获取一个短语 采用一言免费 API
function GetInfo() {
    var color = getColor();
    $.ajax({
        type: "GET",
        url: "https://v1.hitokoto.cn/?c=f&encode=json",
        dataType: "json",
        beforeSend: function (XMLHttpRequest) {
            $("body").removeClass("animated");
            $("body").removeClass("bounceInLeft");
            $("body").css("background-color", color);
            $("#icon-view").hide();
            $("#context").html("");
            $("#author").html("");
        },
        success: function (result, textStatus) {
            $("#context").html(result.hitokoto);
            $("#author").html(result.creator)
        },
        complete: function (XMLHttpRequest, textStatus) {
            $("body").addClass("animated");
            $("body").addClass("bounceInLeft");
            $("#icon-view").show();
            $("#get").removeClass();
            var color = Math.floor(Math.random() * btnColor.length);
            $("#get").addClass("btn " + btnColor[color]);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

        }
    });
}

//随机生成颜色代码
function getColor() {
    //定义十六进制颜色值
    var colorValue = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
    //以","为分隔符
    var colorArray = colorValue.split(",");
    var color = "#";
    //循环随机生成六位十六进制值
    for (var i = 0; i < 6; i++) {
        //colorArray[Math.floor(Math.random()*16)]随机取出
        //拼接后得出随机颜色值
        color += colorArray[Math.floor(Math.random() * 16)];
    }
    return color;
}


function shareWeibo(title, url, picurl) {
    title = $("#context").html();
    url = "https://www.xwltz.top/";
    var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url;
    window.open(sharesinastring, 'newwindow', 'height=400,width=400,top=100,left=100');
}


function shareQQSpace(title, url, picurl) {
    title = $("#context").html();
    url = "https://www.xwltz.top/";
    var shareqqzonestring = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + title + '&url=' + url;
    window.open(shareqqzonestring, 'newwindow', 'height=400,width=400,top=100,left=100');
}