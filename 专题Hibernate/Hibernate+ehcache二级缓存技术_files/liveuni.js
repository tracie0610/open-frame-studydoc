function checkIsIEVodone()
{
  var isIE=false;
  try
  {
	  var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
  }
  catch(e){}	
  return isIE;
}

function checkFlashVerVodone()
{
    try{var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
	if(isIE){var version;var axo;var e;
	try {axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");version = parseInt(axo.FlashVersion()).toString(16);} catch (e) {}
	if (!version){version = -1;}return version;}
	else{var flashVer = -1;if (navigator.plugins != null && navigator.plugins.length > 0) {
	if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
	var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
	var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
	var descArray = flashDescription.split(" ");
	var tempArrayMajor = descArray[2].split(".");			
	var versionMajor = tempArrayMajor[0];
    var flashVer = parseInt(versionMajor)*10000;
	}}return flashVer;} }catch(e){return 0;} 
}  

//获取websitetype
function getWebSiteTypeVodone(str)
{
  var result="1";
  var siteid=(str.split("|")[2]).split(",")[0]; 
  var restr="1,2,4,5,10,13,7,11,31";
  var restrlist=restr.split(",");  
  for(var i=0;i<restrlist.length;i++)
  {
        if(siteid==restrlist[i])
		{		
		  result="0";
		  break;
		}
  }
  return result;
}

//获取HTML对象
function $_vo(_id)
{
	return document.getElementById(_id);
}

//{页面绑定功能开始}
function getSplitURLVodone(str)
{
  //去掉http://,https://,?后的字符
  if(str.indexOf("http://")!=-1)
  {  
   str=str.substring(7,str.length);
  }
  if(str.indexOf("https://")!=-1)
  {  
   str=str.substring(8,str.length);
  } 
  var index=str.indexOf("/");
  var firstpart	="";
  var secondpart="";
  if(index!=-1)
  {
	firstpart=str.substring(0,index);
	secondpart=str.substring(index+1,str.length);	
  }   
  else
  {
    firstpart=str;
  }  
  return firstpart+","+secondpart;  
}

//www.vodone.com与vodone.com可以互相通过
function checkDomainVodone(rd,bd)
{
  if(rd==bd)
  {
	return true;
  }
  if((("www."+rd)==bd)||(("www."+bd)==rd))
  {
  return true;
  }
   //为vodone.com时，允许vodone.com和www.vodone.com
  if(bd.indexOf(rd)!=-1)
  {    
       var str=bd.substring(bd.indexOf(rd),bd.length)      
	   if(str==rd)
	   {
	    return true;	   
	   }          
  }
  return false;
}


function checkBandUrlVodone(rurl,burl)
{
  var l_rurl=rurl.toLowerCase();
  var l_burl=burl.toLowerCase();
  var rurlList=getSplitURLVodone(l_rurl).split(",");
  var burlList=getSplitURLVodone(l_burl).split(",");
  if(checkDomainVodone(rurlList[0],burlList[0]))
  {
	  return true;
   }	
  return false;	
  	
  //不含有文件名
  if(rurlList[1]=="")
  { 	
	 if(checkDomainVodone(rurlList[0],burlList[0]))
	 {
	  return true;
	 }	
	 return false;	
  }
  else
  { 	  
     if(burlList[1]==rurlList[1])
	 {
	   if(checkDomainVodone(rurlList[0],burlList[0]))
	   {
	     return true;
	   }	
	 }   
	 return false;
  }
}

function bindUrlVodone()
{	
	var urlstr="localhost:8080";
	if(typeof(urls)!="undefined")
	{
		urlstr=urls;
	}	
	if(urlstr=="-"){return false;}
	if(urlstr=="|"){return true;}
	var urllist=urlstr.split(",");		
	var localurl="";
	try
	{
		localurl=top.location.href;
	}
	catch(e)
	{
		localurl=document.location.href;
	}    
	if(localurl.indexOf("localhost:8080")!=-1)
	{
		return true;
	}	
	if(localurl.indexOf("vodone.com")!=-1)
	{
		return true;
	}	
		
	for (var i=0;i<urllist.length;i++ )
	{		
	    var ctag=checkBandUrlVodone(localurl,urllist[i]);		
		if(ctag)
		{
		  return true;
		}	
	}
	return false;
}
//{页面绑定功能结束}

//计算任意两个html元素的偏移值
function countHtmlPixelClass(_id1,_id2)
{ 
	var nLt=0; 	
	var nTp=0; 
	var obj1 =$_vo(_id1); 
	var obj2 =$_vo(_id2); 	
	while(obj1!=null && obj1!=obj2)
	{ 
	    nLt+=obj1.offsetLeft;nTp+=obj1.offsetTop; 	
	    parseInt(obj1.style.borderLeftWidth)>0?nLt+=parseInt(obj1.style.borderLeftWidth):""; 
	    parseInt(obj1.style.borderTopWidth)>0?nTp+=parseInt(obj1.style.borderTopWidth):""; 
	    obj1=obj1.offsetParent; 
	}
	this.getoffsetLeft=function(){return nLt;}
	this.getoffsetTop=function() {return nTp;}
}

function showErrorContent(str)
{
    $_vo("FrameWinLayer").innerHTML="<div style=\"width:230px;font-size:12px;color:#FF0000;\">"+str+"</div>";
}
//打开超连接
document.write("<a id=\"mute\"  target=\"_blank\"></a>");
function openurl_vo(url)
{
	$_vo("mute").href=url;
	$_vo("mute").focus();
	$_vo("mute").click();
}

var phref_vo        ="";	//引用页的地址
var rooturl_vo		="http://busjs.vodone.cn/liveuni/";	//页面的根目录地址
var imgurl_vo		="http://busjs.vodone.cn/liveuni/";	//页面的根目录地址
var auto_width_vo	=0;		//视频框的宽度
var auto_height_vo	=0;		//视频框的高度
var isEnable_vo		=0;		//播放器合法性检查结果(1 尺寸不对，2 域名非法，3 不在第一屏)
var ctr_height_vo	=0;	    //播放器下面控制区域的高度
var sysstate_vo		=0;		//当前系统的状态。0，初始值，1，广告缓冲完毕，2，广告播放完毕
var mutestate_vo    =false; //视频静音的标志
var voicenum_vo		=20;    //全局音量大小

//播放器的差异性----
var real_width_vo	=0;   //真实视频框的宽度 
var real_height_vo	=0;   //真实视频框的高度
var margin_top_vo   =0;
var margin_left_vo  =0;  

if(sid_vodone=="p7")
{
	 real_width_vo	=255;   
	 real_height_vo	=198;  
	 margin_top_vo   =23;
	 margin_left_vo  =0;  
}
if(sid_vodone=="p5")
{
	 real_width_vo	=300;   
	 real_height_vo	=228;  
	 margin_top_vo   =25;
	 margin_left_vo  =0;  
}

//{获得引用页的地址}
var phref_vo=escape(document.location.href); 

//{初始化视频框尺寸，并进行合法性检测}
if(typeof(c_width_vodone)!="undefined")
{
	auto_width_vo=c_width_vodone;
}
else
{
    auto_width_vo=320;
}
auto_height_vo=c_height_vodone-ctr_height_vo;
if((auto_width_vo<200)||(auto_width_vo>640))
{
	if((sid_vodone=="p5")||(sid_vodone=="p7"))
	{
		isEnable_vo=1; 
	}
}

//{域名判断}
if(bindUrlVodone()==false)
{
	isEnable_vo=2; 
}

//{路径判断}
function checkJSPathVodone()
{	
  try
  {
	  if(oid_vodone=="38236|43544|99|0|")
	  {
		return true;
	  }	  
	  if(checkIsIEVodone())
	  {		
		var js=document.scripts;		
		var tag1="busjs.vodone.cn/bus/ownerjs/advjs";
		var tag2="www.vodone.com/bus/ownerjs/advjs";
		for(var i=0;i<js.length;i++)
		{
			var jspath=js[i].src;		
			if((jspath.indexOf(tag1)!=-1)||(jspath.indexOf(tag2)!=-1))
			{
			  return true;
			}		
		}
		return false;
	  }
	  return true;
  }
  catch(e)
  {	
	return true;
  }
}

if(checkJSPathVodone()==false)
{
	isEnable_vo=2; 
}

//ifame
function checkIframeVodone()
{
	if(top.location!=self.location)
	{
	   cid_vodone=9;
	}	
}
checkIframeVodone();

//{计算是否在页面的第一屏}
document.writeln("<div id='FrameWinLayer' style='float:left;margin:0px;width:"+auto_width_vo+"px; height:"+(auto_height_vo+ctr_height_vo)+"px;z-index:10000;text-align:left;'></div>");

var chp_vodone=new countHtmlPixelClass("FrameWinLayer","body");
if(chp_vodone.getoffsetTop()>(650-auto_height_vo))
{	  
	if((sid_vodone=="p5")||(sid_vodone=="p7"))
	{
		if(checkIsIEVodone())
		{
			isEnable_vo=3;
		}
	}
}

//检测Flash版本是否符合要求
if(checkFlashVerVodone()<80000)
{
	isEnable_vo=4;
}

//{初始化主层}
function initFrameWinLayer_vo()
{
   var insertstr="";
   insertstr+="<div id=\"BackImgLayer\"  style=\"position:absolute;z-index:10000;margin:0px;display:block;\"></div>"; 
   insertstr+="<div id=\"FlashPlayerDiv\" style=\"position:absolute;z-index:10003;margin-top:0px;margin-left:0px;display:block;\"></div>";
   insertstr+="<div id=\"MainPlayerDiv\"  style=\"position:absolute;z-index:10004;margin-top:0px;margin-left:1px;display:none;background-color:#fff;\"></div>";
   insertstr+="<div id=\"BottomDiv\" style=\"position:absolute;z-index:10005;width:"+auto_width_vo+"px;margin-top:"+auto_height_vo+"px;margin-left:0px;display:block;\"></div>";  
   $_vo("FrameWinLayer").innerHTML=insertstr; 
}

//{初始化广告播放层}
function initFlashPlayer_vo()
{  
   var _url="http://busjs.vodone.cn/liveuni/flv/flv_n.swf";
   if((sid_vodone=="p10")||(sid_vodone=="p12"))
   {
      _url="http://busjs.vodone.cn/liveuni/flv/flv_d.swf";
   } 
   var rNum=95;
   var urls="http://u3.vodone.com/webunion/flvdispatch2&channelId="+cid_vodone+"&ad_other="+oid_vodone+"&phref="+phref_vo+"&rNum="+rNum;   
   var insertstr="<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0\" id=\"FPVodone\" width=\""+auto_width_vo+"\" height=\""+auto_height_vo+"\" style=width:"+auto_width_vo+";height:"+auto_height_vo+" align=\"bottom\">"
				+"<param name=\"allowScriptAccess\" value=\"always\"/><param name=\"FlashVars\" value=\"urls="+urls+"\" />"
				+"<param name=\"Movie\" value=\""+_url+"\" /><param name=\"src\" value=\""+_url+"\" />"
				+"<param name=\"wmode\" value=\"Opaque\"><param name=\"allowFullScreen\" value=\"true\"><param name=\"quality\" value=\"high\" /><param name=\"bgcolor\" value=\"#000000\" />"
				+"<embed src=\""+_url+"\" wmode=\"Opaque\" FlashVars=\"urls="+urls+"\" quality=\"high\"  bgcolor=\"#00000\" width=\""+auto_width_vo+"\" height=\""+auto_height_vo+"\" swLiveConnect=true id=\"FPVodone\" name=\"FPVodone\" align=\"bottom\" allowScriptAccess=\"always\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />"
				+"</object>";
   $_vo("FlashPlayerDiv").innerHTML=insertstr;   
}

function initMainPlayer_vo()
{	
  var websitetype=getWebSiteTypeVodone(oid_vodone);   
  var websitetypeid=(oid_vodone.split("|")[2]).split(",")[0]; 
  var textadurl=rooturl_vo+"endpages/"+websitetype+"/"+real_width_vo+".html";
  var insertstr="<iframe  src=\""+textadurl+"\" width=\""+(real_width_vo-2)+"\" height=\""+(real_height_vo-margin_top_vo)+"\"   scrolling=\"no\" frameborder=\"0\"></iframe>";
  $_vo("MainPlayerDiv").innerHTML=insertstr;
}

//抽屉开始
function thisMovie_vo(movieName)
{	
	if (navigator.appName.indexOf("Microsoft") != -1)
	{
		return document.all[movieName];
	}
	else 
	{ 
		return document[movieName];
	}		
}

function drawerMsg(msg,value)
{
	switch(msg)
	{
		case "inOver":
			thisMovie_vo('drawerSwf').style.height="5px";  
			break;
		case "outOver":
			showDrawer();
			break;
		case "outShowOver": 
			thisMovie_vo("FPVodone").isShowDrawer();
			break;
		case "video":			
			thisMovie_vo("FPVodone").playVideo(value);
			break;
	}
}

function showDrawer()
{ 	
	thisMovie_vo('drawerSwf').style.height="237px";
	thisMovie_vo('drawerSwf').glideOut();
}

function mainFlvPlayerMsg(){ 
	thisMovie_vo("FPVodone").onmouseover=showDrawer;
	thisMovie_vo("FPVodone").onmouseout=hideDrawer;
	thisMovie_vo("drawerSwf").onmouseover=showDrawer;
	thisMovie_vo("drawerSwf").onmouseout=hideDrawer;
}

function hideDrawer(){ 
	thisMovie_vo('drawerSwf').glideIn();
}

function autoShowDrawer()
{ 
	thisMovie_vo('drawerSwf').style.height="237px";
	thisMovie_vo('drawerSwf').autoGlideOut();
}

function setBottomDivContent_vo()
{  
   var _url="http://busjs.vodone.cn/liveuni/flv/drawer_n.swf";  
   var height=237;
   var urls="http://u3.vodone.com/webunion/flvdispatch2&channelId="+cid_vodone+"&ad_other="+oid_vodone+"&phref="+phref_vo;   
   var insertstr="<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" style='background-color:transparent' codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0\" id=\"drawerSwf\"  width=\""+auto_width_vo+"\" height=\""+height+"\"  align=\"bottom\">"
				+"<param name=\"allowScriptAccess\" value=\"always\"/><param name=\"FlashVars\" value=\"urls="+urls+"\" />"
				+"<param name=\"src\" value=\""+_url+"\" />"
				+"<param name=\"wmode\" value=\"transparent\"><param name=\"quality\" value=\"high\" />"
				+"<embed src=\""+_url+"\" wmode=\"transparent\" FlashVars=\"urls="+urls+"\" quality=\"high\"   width=\""+auto_width_vo+"\" height=\""+height+"\" swLiveConnect=true  name=\"drawerSwf\"  align=\"bottom\" allowScriptAccess=\"always\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />"
				+"</object>";
   $_vo("BottomDiv").innerHTML=insertstr;   
}

//抽屉结束

//{广告监控和层切换代码}
function completeBuf()
{ 
     sysstate_vo=1;   
}
function flvadcompete()
{			
	sysstate_vo=2;	
	//initMainPlayer_vo();	
	//$_vo("MainPlayerDiv").style.display="block";	
}
//{总的流程开始....}

if(isEnable_vo==1)
{
  initFrameWinLayer_vo();	 
  showErrorContent("<a href=\"http://u.vodone.com\" style=\"text-decoration:none;font-weight:bold;font-size:12px;color:#FF0000;cursor:hand\" target=\"_blank\">对不起，您的播放器尺寸不对，无法正常显示，请与第一视频联播网联系！</a>");  
}
else if(isEnable_vo==2)
{  
   initFrameWinLayer_vo();
   showErrorContent("<a href=\"http://u.vodone.com\" style=\"text-decoration:none;font-weight:bold;font-size:12px;color:#FF0000;cursor:hand\" target=\"_blank\">您的域名与放置的代码不相符或尚未通过第一视频联播网审核！</a>"); 
}
else if(isEnable_vo==3)
{
  initFrameWinLayer_vo();	
  showErrorContent("<a href=\"http://u.vodone.com\" style=\"text-decoration:none;font-weight:bold;font-size:12px;color:#FF0000;cursor:hand\" target=\"_blank\">对不起，您的播放器没有按照第一视频联播网的要求放置在距页面顶部600像素以内，所以无法正常显示！</a>");   
}
else if(isEnable_vo==4)
{
  initFrameWinLayer_vo();	
  showErrorContent("对不起，您没有安装Flash播放器,或者播放器版本过低.<br><br>&nbsp;&nbsp;<a href=\"http://www.vodone.com/software/GetFlash9.exe\" target=\"_blank\">IE用户点击下载</a><br><br>&nbsp;&nbsp;<a href=\"http://www.vodone.com/software/GetFlash9Fox.exe\" target=\"_blank\">FireFox用户点击下载</a><br><br>安装完毕后,请重新启动IE浏览器!");   
}
else
{	
	initFrameWinLayer_vo();		
	initFlashPlayer_vo();
	if((sid_vodone=="p5")||(sid_vodone=="p7"))
	{
	   setBottomDivContent_vo();	
	}		
}
