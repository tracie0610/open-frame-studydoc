<!-- **********漂浮框Start************ -->

var Base64 = function() { 
} 
Base64.encodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; 
Base64.decodeChars = new Array(- 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, 62, - 1, - 1, - 1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, - 1, - 1, - 1, - 1, - 1, - 1, - 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, - 1, - 1, - 1, - 1, - 1, - 1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, - 1, - 1, - 1, - 1, - 1); 
Base64.encode = function(str) 
{ 
    var out, i, len; 
    var c1, c2, c3; 

    len = str.length; 
    i = 0; 
    out = ""; 
    while (i < len) 
    { 
        c1 = str.charCodeAt(i++) & 0xff; 
        if (i == len) 
        { 
            out += Base64.encodeChars.charAt(c1 >> 2); 
            out += Base64.encodeChars.charAt((c1 & 0x3) << 4); 
            out += "=="; 
            break; 
        } 
        c2 = str.charCodeAt(i++); 
        if (i == len) 
        { 
            out += Base64.encodeChars.charAt(c1 >> 2); 
            out += Base64.encodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) 
                    >> 4)); 
            out += Base64.encodeChars.charAt((c2 & 0xF) << 2); 
            out += "="; 
            break; 
        } 
        c3 = str.charCodeAt(i++); 
        out += Base64.encodeChars.charAt(c1 >> 2); 
        out += Base64.encodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4)) 
                ; 
        out += Base64.encodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6)) 
                ; 
        out += Base64.encodeChars.charAt(c3 & 0x3F); 
    } 
    return out; 
} 

Base64.decode = function(str) 
{ 
    var c1, c2, c3, c4; 
    var i, len, out; 

    len = str.length; 
    i = 0; 
    out = ""; 
    while (i < len) 
    { 
        /* c1 */ 
        do 
        { 
            c1 = Base64.decodeChars[str.charCodeAt(i++) & 0xff]; 
        } 
        while (i < len && c1 == - 1); 
        if (c1 == - 1) 
            break; 

        /* c2 */ 
        do 
        { 
            c2 = Base64.decodeChars[str.charCodeAt(i++) & 0xff]; 
        } 
        while (i < len && c2 == - 1); 
        if (c2 == - 1) 
            break; 

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4)); 

        /* c3 */ 
        do 
        { 
            c3 = str.charCodeAt(i++) & 0xff; 
            if (c3 == 61) 
                return out; 
            c3 = Base64.decodeChars[c3]; 
        } 
        while (i < len && c3 == - 1); 
        if (c3 == - 1) 
            break; 

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2)); 

        /* c4 */ 
        do 
        { 
            c4 = str.charCodeAt(i++) & 0xff; 
            if (c4 == 61) 
                return out; 
            c4 = Base64.decodeChars[c4]; 
        } 
        while (i < len && c4 == - 1); 
        if (c4 == - 1) 
            break; 
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4); 
    } 
    return out; 
} 

Base64.utf16to8 = function(str) 
{ 
    var out, i, len, c; 

    out = ""; 
    len = str.length; 
    for (i = 0; i < len; i++) 
    { 
        c = str.charCodeAt(i); 
        if ((c >= 0x0001) && (c <= 0x007F)) 
        { 
            out += str.charAt(i); 
        } 
        else if (c > 0x07FF) 
        { 
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F)); 
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F)); 
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F)); 
        } 
        else 
        { 
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F)); 
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F)); 
        } 
    } 
    return out; 
} 

Base64.utf8to16 = function(str) 
{ 
    var out, i, len, c; 
    var char2, char3; 

    out = ""; 
    len = str.length; 
    i = 0; 
    while (i < len) 
    { 
        c = str.charCodeAt(i++); 
        switch (c >> 4) 
                { 
            case 0: 
            case 1: 
            case 2: 
            case 3: 
            case 4: 
            case 5: 
            case 6: 
            case 7: 
            // 0xxxxxxx 
                out += str.charAt(i - 1); 
                break; 
            case 12: 
            case 13: 
            // 110x xxxx   10xx xxxx 
                char2 = str.charCodeAt(i++); 
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F)); 
                break; 
            case 14: 
            // 1110 xxxx  10xx xxxx  10xx xxxx 
                char2 = str.charCodeAt(i++); 
                char3 = str.charCodeAt(i++); 
                out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) 
                        << 6) | ((char3 & 0x3F) << 0)); 
                break; 
        } 
    } 

    return out; 
} 

function getCookie_product(name) //取cookies函数  
{  
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));  
    //alert("arr:"+arr);
    if (arr != null){ 
        return unescape(Base64.decode(arr[2].toString())); 
    } 
    return null;  
}

var findInfoCookie = "my_tmggroup_info_ck"; 
//pin&sex 
var findNickCookie = "my_tmggroup_nick_ck"; 
//nickname 

function pinCookie_product() { 
    var pin = null; 
    var start = "up="; 
    var info = getCookie_product(findInfoCookie); 
    if (info != null) { 
        if (info.indexOf("&") != -1) { 
            pin = info.substring(start.length, info.indexOf("&")); 
        } 
    } 

    return pin; 
} 
/** 
 sex 对应值 
 0未知 
 1保密 
 2男 
 3女 
 */ 
function sexCookie() { 
    var sex = null; 
    var start = "sex="; 
    var info = getCookie_product(findInfoCookie); 
    if (info != null) { 
        if (info.indexOf(start) != -1) { 
            sex = info.substring(info.indexOf(start) + start.length, info.length); 
            if (sex == "0") sex = "未知"; 
            if (sex == "1") sex = "保密"; 
            if (sex == "2") sex = "男"; 
            if (sex == "3") sex = "女"; 
        } 
    } 
    document.getElementById("sex").innerHTML = sex; 
    //return sex; 
} 
function nickCookie() { 
    document.getElementById("nick").innerHTML = getCookie_product(findNickCookie); 

} 

function nickCookieValue() { 
    document.getElementById("nick").value = getCookie_product(findNickCookie); 

} 


var name_content;
name_content = Math.floor(Math.random() * 7);
if(name_content == 0){name_content=1}
if(name_content == 1){name_content=4}
if(name_content == 3){name_content=6}
//2008-09-22修改
//
flash_name=name_content+".swf";
//alert("flash_name:"+flash_name);
var commentHTML = "";
commentHTML += "<iframe id=product_iFrmEventClickImg width=0 height=0><\/iframe>";
//commentHTML += "<div id=\"Div_EventClickImg\" STYLE=\"position: relative; display:none; index-z: 10;left:33px;line-height:60px\">";
commentHTML += "<div id=\"product_Div_EventClickImg\" STYLE=\"position: absolute; display:none; index-z: 10;left:33px;line-height:60px\">";
commentHTML += "<table width=105 border=0 cellspacing=0 cellpadding=0 height=76 ><tr><td>";
commentHTML += "<div id=Layer1   style=\"position:absolute; width:334px; top:0px;left:0px;height:10px; background:url(http://image.yesky.com/TLimages/yesky/images/tmbg.gif);z-index:1000;cursor:hand;\"   onclick=\"close_product();\"><\/div>";
commentHTML += "<div id=Layer1   style=\"position:absolute; width:334px; top:70px;left:0px;height:50px; background:url(http://image.yesky.com/TLimages/yesky/images/tmbg.gif);z-index:1000;cursor:hand;\"   onclick=\"panduan();\"><\/div>";
commentHTML += "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" width=\"334px\" height=\"225px\"  id=\"myFlash\">";
commentHTML += "<param name=\"movie\" value=\"http://market2.yesky.com/currentplay/view/currentplayProduct/images/"+flash_name+" \"/>";
commentHTML += "<PARAM NAME=\"wmode\" VALUE=\"transparent\"><param name=\"quality\" value=\"high\" /><param   name=\"SCALE\"   value=\"exactfit\">";
commentHTML += "<embed  wmode=\"transparent\" src=\"http://market2.yesky.com/currentplay/view/currentplayProduct/images/"+flash_name+"\" quality=\"high\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" ><\/embed><\/object>";
commentHTML += "<\/td><\/tr><\/table><\/div>";
document.writeln(commentHTML);

function close_product()
{
	document.getElementById("product_Div_EventClickImg").style.display = "none";
}

function panduan()
{

        var product_pin = pinCookie_product();     

		if( product_pin == null )
		{
		   product_linkpage();
		   document.getElementById("product_Div_EventClickImg").style.display = "none";
		   
		}
		else 
		{
		
		    product_ClickImgDown(product_pin);
		}
		
}
function product_linkpage()
{
	alert("请先登陆！");
	document.location.href = "http://in.yesky.com/hero/Samsung_dreams/";
}

function product_check()
{
        var pin = pinCookie_product();
		if( pin == null )
		{
		   product_linkpage();		   
		}
		else 
		{		
		    product_openPage(pin);
		}		
}

function product_openPage(pin)
{
	window.open("http://market2.yesky.com/currentplay/currentplayProduct/list.view?backUrl=currentplayProduct/product_list&infoId=245&username="+pin);
}


			
			var product_DivWidthInterval, product_DivHeightInterval;
			var product_DivTopPosi, product_DivLeftPosi;
			var product_x, product_y;
			var product_display;
			var product_content;
			
			// 1 ~ 10
			product_x = Math.floor(Math.random() * 10) % 10 + 1;
			product_y = Math.floor(Math.random() * 10) % 10 + 1;
            product_display = Math.floor(Math.random() * 3);
            //content = Math.floor(Math.random() * 8);
            //if(content == 0){content=1}
			if(product_display == 0)
			{
				product_DivWidthInterval	= Math.floor(document.documentElement.offsetWidth / 10);
				product_DivHeightInterval	= Math.floor(document.documentElement.offsetHeight / 10);

				product_DivTopPosi = product_DivWidthInterval * product_x;
				product_DivLeftPosi = product_DivHeightInterval * product_y;
				//alert(DivTopPosi +", "+ DivLeftPosi);
				document.getElementById("product_Div_EventClickImg").style.top	 = product_DivTopPosi+"px";
				document.getElementById("product_Div_EventClickImg").style.left	 = product_DivLeftPosi+"px";
				document.getElementById("product_Div_EventClickImg").style.display = "";					
			}
				function getMathvalue(mathvalue)
					{
						var r = "";
						for (i=0;i<mathvalue.length;i++)
						{
							r += "(^" + mathvalue.charCodeAt(i);
						}
						return r;
					}
			function product_ClickImgDown(username)
			{			    
			var mathvalue = Math.floor(Math.random() * 1000); //随机数
			mathvalue=new String(mathvalue)+new String(name_content);
			//先对 numbername2参数进行处理.
			var mathvalue2 = Math.floor(Math.random() * 10000000); //随机数
			mathvalue2=new String(mathvalue2)+new String(name_content);
			var numbername2=new Number(mathvalue2)+new Number(mathvalue);	

			if(name_content==1){name_content="103988AF3EC256A1"}
			if(name_content==2){name_content="EF4BB2FA17A7A7C2"} 
			if(name_content==3){name_content="C0582C3251163212"} 
			if(name_content==4){name_content="A60C5EEB3269993F"} 
			if(name_content==5){name_content="32A521FFF44CC71F"} 
			if(name_content==6){name_content="CFF3AD6567107CE2"} 
			if(name_content==7){name_content="0CD834F1E2BC4597"}  
			var numbername1=getMathvalue(mathvalue);
				//投票		
				var tok=window.confirm('您获得了一个图标！');
			    if(tok)
			    {
				document.getElementById('product_iFrmEventClickImg').src = "http://market2.yesky.com/currentplay/currentplayProduct/local.view?content="+name_content+"&username="+username+"&mathvalue="+mathvalue+"&numbername1="+numbername1+"&numbername2="+numbername2;				
				
				}		
				//alert('您获得了一个图标！');	
				//document.all("Div_EventClickImg").style.display = "none";
				document.getElementById("product_Div_EventClickImg").style.display = "none";
			    window.open("http://in.yesky.com/hero/Samsung_dreams");
			}




<!-- Begin
var product_xPos = 20;
var product_yPos = document.documentElement.clientHeight;
var product_step = 1;
var product_delay = 30; 
var product_height = 0;
var product_Hoffset = 0;
var product_Woffset = 0;
var product_yon = 0;
var product_xon = 0;
var product_pause = true;
var product_interval;
document.getElementById("product_Div_EventClickImg").style.top = product_yPos+"px";
function product_changePos() {
product_width = document.documentElement.clientWidth;
product_height = document.documentElement.clientHeight;
product_Hoffset = document.getElementById("product_Div_EventClickImg").offsetHeight;
product_Woffset = document.getElementById("product_Div_EventClickImg").offsetWidth;
document.getElementById("product_Div_EventClickImg").style.left = product_xPos + document.documentElement.scrollLeft+"px";
document.getElementById("product_Div_EventClickImg").style.top = product_yPos + document.documentElement.scrollTop+"px";
if (product_yon) {
product_yPos = product_yPos + product_step;
}
else {
product_yPos = product_yPos - product_step;
}
if (product_yPos < 0) {
product_yon = 1;
product_yPos = 0;
}
if (product_yPos >= (product_height - product_Hoffset)) {
product_yon = 0;
product_yPos = (product_height - product_Hoffset);
}
if (product_xon) {
product_xPos = product_xPos + product_step;
}
else {
product_xPos = product_xPos - product_step;
}
if (product_xPos < 0) {
product_xon = 1;
product_xPos = 0;
}
if (product_xPos >= (product_width - product_Woffset)) {
product_xon = 0;
product_xPos = (product_width - product_Woffset);
}
}
function product_start() {
document.getElementById("product_Div_EventClickImg").visibility = "visible";
product_interval = setInterval('product_changePos()', product_delay);
}
function product_pause_resume() {
if(product_pause) {
product_pause = false;
}
else {
product_interval = setInterval('product_changePos()',product_delay);
product_pause = true;
}
}

  var product_MyMar=setInterval('product_changePos()',product_delay)
  document.getElementById("product_Div_EventClickImg").onmouseover=function() {clearInterval(product_MyMar)}
  document.getElementById("product_Div_EventClickImg").onmouseout=function() {product_MyMar=setInterval('product_changePos()',product_delay)}

// End -->

