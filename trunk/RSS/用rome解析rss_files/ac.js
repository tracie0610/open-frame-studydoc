if(typeof(fcookieSwfLoaded)=="undefined"){
	//如果修改下面一行必须同步修改mmadvert中相应的部分
	document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' id='acswf' width='0' height='0' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab' ><param name='movie' value='http://a.alimama.cn/js/ac.swf' /><param name='allowScriptAccess' value='always' /><embed src='http://a.alimama.cn/js/ac.swf' quality='high' width='0' height='0' name='acswf' play='true' loop='false' allowScriptAccess='always' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer'></embed></object>");
}

var jsReady = false;
function isReady() {
return jsReady;
}

function pageInit() {
jsReady = true;
}

if(!document.body.attachEvent){
window.addEventListener("load",pageInit,false);
}else{
window.attachEvent("onload",pageInit);
}

function thisMovie(movieName) {
if (navigator.appName.indexOf("Microsoft") != -1) {
return window[movieName];
} else {
return document[movieName];
}
}

function getAcookie()
{
return getCookie("cna");
}

function setAcookie(cookie)
{
cookie = unescape(cookie);
setCookie("cna", cookie);       
}

function syncAcookie(cookie)
{
cookie = unescape(cookie);
var cnaImg = document.createElement("img");
cnaImg.src = "http://hz.mmstat.com/s?cna="+encodeURIComponent(cookie);
cnaImg.width = "0px";
cnaImg.height = "0px";
cnaImg.style.display = "none";
document.body.appendChild(cnaImg);
}

function setCookie(sName, sValue)
{
document.cookie = sName + "=" + escape(sValue) + "; expires=Fri, 31 Dec 2037 23:59:59 GMT;path=/;domain="+getRootDomain();
}

function getCookie(sName)
{
var allCookie = document.cookie.split("; ");
for (var i=0; i < allCookie.length; i++)
{
var aCrumb = allCookie[i].split("=");
if (sName == aCrumb[0])
return unescape(aCrumb[1]);
}
return "";
}

function getRootDomain() {
var d = document.domain.split(".");
var n = d.length;
var t = d[n-2] + "." + d[n-1];
if (d[n-1].length > 2) return t;
else return d[n-3] + "." + t;
}
