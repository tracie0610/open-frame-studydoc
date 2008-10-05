/* change ++ */
var c_hasPost = false;
var floor = 0;
var c_submitNum = 0;
var postNum = 0;
var re = /(\[s(\d{1,2})\])/ig;
var ree =/\./g;
var inited = false;
var tempContent = "";
if(typeof(referId) == "undefined") referId="0";
if(typeof(channelId) == "undefined") channelId="0";
if(typeof(site) == "undefined") site="";
if(typeof(type) == "undefined") type="";
var commentHTML = "";
commentHTML += "<style style=\"type\/css\">";
commentHTML += "#wordNum{font-size:12px;float:right;padding-right:10px}";
commentHTML += ".noteBoxStyle {line-height:30px;background:#C1D3FB;border:1px solid #999;text-align:center;font-size:16px;color:#000;filter:Alpha(opacity=100);-moz-opacity:1;opacity:1;}";
commentHTML += "#comments {width:99%}";
commentHTML += "#comments .viewmore {padding-top:16px;margin-bottom:16px;text-align:right}";
commentHTML += "#comments .viewmore a{color:#000;text-decoration:underline;font-size:12px}";
commentHTML += "#comments .titleRow {width:100%;background:#C1D3FB;height:30px;line-height:30px;margin-bottom:10px}";
commentHTML += "#comments .titleRow b{font-size:14px;padding-left:10px;float:left}";
commentHTML += "#comments .titleRow a:link , .titleRow a:visited{float:right;font-size:12px;padding-right:10px;text-decoration:underline;color:#000}";
commentHTML += "#comments .titleRow a:hover {text-decoration:none}";
commentHTML += "#comments #commentList ,#comments #commentList dt ,#comments #commentList dd {margin:0;padding:0}";
commentHTML += "#comments #commentList {width:97%;padding:10px 0 15px 0;font-size:12px;background:url(http:\/\/image.yesky.com\/TLimages\/images\/loading.gif) no-repeat center center}";
commentHTML += "#comments #commentList dt {height:28px;line-height:28px}";
commentHTML += "#comments #commentList dt span {float:left}";
commentHTML += "#comments #commentList dt b {float:right;font-weight:normal;color:#999;font-size:11px;font-family:Arial,Verdana}";
commentHTML += "#comments #commentList dd {overflow:hidden;clear:both;text-align:left;width:100%;padding-bottom:5px;border-bottom:1px dashed #ccc;line-height:20px;text-indent:2em;margin-bottom:5px;word-break:break-all;word-wrap:break-word}";
commentHTML += "#comments #postForm {margin-top:-5px}";
var postURLDomian = "http://comment.yesky.com/"
if(window.location.href.indexOf("yesky") != -1 ) {
	commentHTML += "#comments #postForm textarea#content {cursor:text;padding:2px 1px;width:99%;height:75px;vertical-align:top;font-size:14px;border:1px solid #A3B9CD;background:url(http:\/\/image.yesky.com\/TLimages\/yesky\/images\/notebook_640.jpg) no-repeat center center #fff;font-size:13px;white-space:pre}";
}else if(window.location.href.indexOf("chinabyte") != -1){
	commentHTML += "#comments #postForm textarea#content {cursor:text;padding:2px 1px;width:99%;height:75px;vertical-align:top;font-size:14px;border:1px solid #A3B9CD;background:url(http:\/\/image.yesky.com\/TLimages\/images\/cb_alpha_logo.gif) no-repeat center center #fff;font-size:13px;white-space:pre}";
}else{ 
	commentHTML += "#comments #postForm textarea#content {cursor:text;padding:2px 1px;width:99%;height:75px;vertical-align:top;font-size:14px;border:1px solid #A3B9CD;background:#fff;font-size:13px;white-space:pre}";
}
commentHTML += "#comments #postForm .fTtile {float:left;font-size:12px;margin-top:13px;font-weight:bold;height:18px;line-height:18px;}";
commentHTML += "#comments #postForm .nickName {float:left;margin-top:10px;width:112px;height:18px;border:1px solid #A3B9CD;line-height:18px;font-size:12px}";
commentHTML += "#comments #postForm .submit {float:left;border:1px solid #A3B9CD;height:22px;padding:1px 2px;margin:10px 0 0 10px;font-size:12px;background:#C8D8FB;color:#000}";
commentHTML += "<\/style>";
commentHTML +="		<div id=\"comments\">";
commentHTML += "        	<div class=\"titleRow\"><a href=\"#pls\" id=\"pls\" name=\"pls\" > </a>  ";
commentHTML += "            	<b>网友评论<\/b>";
commentHTML += "           <a target=\"_blank\" href=\""+postURLDomian+"more.htm?site="+site+"&referId="+referId+"&type="+type+"&channelId="+channelId+"\" >共有 <span id=\"postFloor\"><\/span>&nbsp;条评论<\/a>";
commentHTML += "            <\/div>";
commentHTML += "            ";
commentHTML += "            <center>";
commentHTML += "            <dl id=\"commentList\">";
commentHTML += "                ";
commentHTML += "            <\/dl>";
commentHTML += "            <\/center>";
commentHTML += "            <div id=\"moreLink\" ><\/div>";
commentHTML += "            <div class=\"titleRow\">";
commentHTML += "            	<b>发表评论<\/b><span id=\"wordNum\">您还能输入300字<\/span>";
commentHTML += "            <\/div>";
commentHTML += "            ";
commentHTML += "            <form id=\"postForm\" name=\"postForm\" action=\"javascript:void(0)\" method=\"post\">";
commentHTML += "            	<textarea id=\"content\" name=\"content\"  onkeyup=\"countCommentsContWord()\"><\/textarea>";
commentHTML += "                ";
commentHTML += "                <div style=\"float:left\">";
if(window.location.href.indexOf("yesky") != -1 ) {
	commentHTML += "                	<div class=\"fTtile\">昵称：<\/div><input id=\"nickName\" name=\"nickName\" type=\"text\" value=\"天极网友\" class=\"nickName\" onfocus=\"this.value=\'\'\" \/><input id=\"submitButton\" type=\"button\" onclick=\"handleSubmit(\'postForm\')\" value=\"发表评论\" class=\"submit\"\/>";
}else if(window.location.href.indexOf("chinabyte") != -1 ){
	commentHTML += "                	<div class=\"fTtile\">昵称：<\/div><input id=\"nickName\" name=\"nickName\" type=\"text\" value=\"比特网友\" class=\"nickName\" onfocus=\"this.value=\'\'\" \/><input id=\"submitButton\" type=\"button\" onclick=\"handleSubmit(\'postForm\')\"  value=\"发表评论\" class=\"submit\"\/>";
}else commentHTML += "                	<div class=\"fTtile\">昵称：<\/div><input id=\"nickName\" name=\"nickName\" type=\"text\" value=\"匿名\" class=\"nickName\" onfocus=\"this.value=\'\'\" \/><input id=\"submitButton\" type=\"button\" onclick=\"handleSubmit(\'postForm\')\"  value=\"发表评论\" class=\"submit\"\/>";
commentHTML += "                <\/div>";
document.writeln("  <input name=\"site\" id=\"site\" value=\""+site+"\" type=\"hidden\"> ");
document.writeln("	<input name=\"referId\" id=\"referId\" value=\""+referId+"\" type=\"hidden\">");
document.writeln("	<input name=\"type\" id=\"type\" value=\""+type+"\" type=\"hidden\"> ");
document.writeln("	<input name=\"channelId\" id=\"channelId\" value=\""+channelId+"\" type=\"hidden\"> ");
commentHTML += "            <\/form>";
commentHTML += "<\/div>";
commentHTML += "<div id=\"noteBox\" class=\"noteBoxStyle\" onclick=\"closeNote()\" style=\"filter:alpha(opacity=90);-moz-opacity:0.9;opacity: 0.9;width:230px;height:60px;line-height:60px;font-weight:bold;z-index:1001;position:absolute;left:600px;top:300px;display:none\">恭喜，信息提交成功！<\/div>";
document.writeln(commentHTML);
var noteBox = $("noteBox");
function writePostList() {
	if( typeof(latest_comments_poster) == "object" && latest_comments_poster.length && latest_comments_poster.length > 0) { 
		postNum = latest_comments_poster.length;
		c_hasPost = true;
		floor = latest_comments_floorno[0]; 
	}
	if(c_hasPost){
		$("postFloor").innerHTML = floor.toString();
		$("moreLink").innerHTML = "<div class=\"viewmore\" ><a target=\"_blank\" href=\""+postURLDomian+"more.htm?site="+site+"&referId="+referId+"&type="+type+"&channelId="+channelId+"\" > >>查看更多评论 <\/a><\/div>";
		var postList="";
		for(var i=0;i<postNum;i++){ 
			postList += "            	<dt><span>"+latest_comments_floorno[i]+"楼 "+latest_comments_poster[i]+"<\/span><b>"+latest_comments_postdate[i].substring(0,17).replace(ree,":")+"<\/b><\/dt>";
			postList += "                <dd>"+latest_comments_contents[i]+"<\/dd>";
		}
		$("commentList").innerHTML = postList + $("commentList").innerHTML;
	}else{
		$("commentList").innerHTML = "<center id=\"no_comment\" style=\"display:block\">欢迎评论！<\/center>";
		$("postFloor").innerHTML = "0";
	}
	$("commentList").style.background = "none";
	inited = true;
}
function addPostList(){
	if( ! $("moreLink") ) $("moreLink").innerHTML = "<div class=\"viewmore\" ><a target=\"_blank\" href=\""+postURLDomian+"more.htm?site="+site+"&referId="+referId+"&type="+type+"&channelId="+channelId+"\" > >>查看更多评论 <\/a><\/div>";
	if( $("no_comment") ) $("no_comment").style.display = "none";
	var postList="";
	postList += "            	<dt><span>"+(++floor)+"楼 "+toTXT($("nickName").value)+"<\/span><b>"+parseDate(new Date())+"<\/b><\/dt>";
	postList += "                <dd>"+toTXT(tempContent).replace(re,"<img src=http:\/\/image.yesky.com\/TLimages\/smile\/face$2.gif border=0 align=absmiddle> ")+"<\/dd>";
	$("commentList").innerHTML = postList + "\n" + $("commentList").innerHTML;
	tempContent = "";
	$("postFloor").innerHTML = floor.toString();
	countCommentsContWord();
	showNote();
}
function $(id){
	if ( typeof (document.getElementById(id)) != "undefined" ) {
		return document.getElementById(id);
	}else return false;
}

function parseDate(d){
   var s = "";
   s += d.getUTCFullYear()+"-";               
   s += fillLeftZero(d.getMonth() + 1) + "-";            
   s += fillLeftZero(d.getDate()) + " ";                  
   s += fillLeftZero(d.getHours()) + ":";
   s += fillLeftZero(d.getMinutes());        
   return(s);                          
}
function fillLeftZero(v){
	return ""+v<10?("0"+v):v;
}					
function getCookie_commentVal_comment(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1)
        endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}
function getCookie_comment(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return getCookie_commentVal_comment(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}
function setCookie_comment(name, value, expireTime) { 
    var argv = setCookie_comment.arguments;
    var argc = setCookie_comment.arguments.length;
    var expireTime = expireTime;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
	var expires=new Date();
	expires.setTime(expires.getTime()+expireTime);
    document.cookie = name + "=" + escape(value) +
                      ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
                      ((path == null) ? "" : ("; path=" + path)) +
                      ((domain == null) ? "" : ("; domain=" + domain)) +
                      ((secure == true) ? "; secure" : "");
}
function deleteCookie_comment(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie_comment(name);
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
function validateForm(f) {
    with(f) {
	if(nickName.value.length ==  0) {
		alert("请输入您的昵称！");
		nickName.focus();
		return;
	}
	if(nickName.value.length > 20) {
		alert("昵称太长，字数不能超过20！");
		nickName.focus();
		return;
	}
	if(content.value.length ==  0) {
		alert("请输入评论内容");
		content.focus();
		return;
	}
	if(content.value.length > 300) {
		alert("内容太长，字数不能超过300");
		content.focus();
		return;
	}	
	if(getCookie_comment("submitted") == null){
		setCookie_comment("submitted",1,1000*60*1);
	}else{
	
		var submitted = parseInt(getCookie_comment("submitted"));
		if(submitted < 3){
			setCookie_comment("submitted",++submitted,1000*60*1);
		}else{
			alert("对不起，您发帖速度太快了，请稍后再试！");
			return false;
		}
	}
	return true;
    }

}
function toTXT(str){ 
     var RexStr = /\<|\>|\"|\'|\&/g 
     var str = str.replace(RexStr, 
         function(MatchStr){ 
             switch(MatchStr){ 
                 case "<": 
                     return "&lt;"; 
                     break; 
                 case ">": 
                     return "&gt;"; 
                     break; 
                 case "\"": 
                     return "&quot;"; 
                     break; 
                 case "'": 
                     return "&#39;"; 
                     break; 
                 case "&": 
                     return "&amp;"; 
                     break; 
                 default : 
                     break; 
             } 
         } 
     ) 
     return str; 
} 
function lockInput(){
	tempContent = $("content").value;
	$("content").disabled = "disabled";
	$("submitButton").value = "信息提交中...";
	$("submitButton").disabled = "disabled";
}
function unlockInput(){
	$("content").disabled = "";
	$("content").value = "";
	$("submitButton").disabled = "";
	$("submitButton").value = "发表评论";
}
function postBack(_post_success){

	if(_post_success){
	    unlockInput();
  		addPostList();
    }else{
  	  alert('对不起，内容不合法或者该IP被禁止发言。');
  	  unlockInput();
  	}
}
function addComments(f){
	var f = document.getElementById(f);
	if( validateForm(f) && inited){
		commentPost('postBack');
		lockInput();
		
	}
}
function handleSubmit(f){
	addComments(f);             
}

function closeNote(){
	noteBox.style.display = "none";
}

function showNote(){
	var win_width = document.documentElement.clientWidth;
	var win_height =document.documentElement.clientHeight;
	var win_scrollLeft = document.documentElement.scrollLeft;
	var win_scrollTop = document.documentElement.scrollTop;
	
	var chat_width = (noteBox.style.width).substring(0,noteBox.style.width.indexOf("px"));
	var chat_height = (noteBox.style.height).substring(0,noteBox.style.height.indexOf("px"));
	noteBox.style.left = (parseInt(win_width) / 2 - parseInt(chat_width) / 2 + win_scrollLeft)+"px";
	noteBox.style.top = (parseInt(win_height) / 2 - parseInt(chat_height) / 2 + win_scrollTop)+"px";
	noteBox.style.display = "";
	setTimeout("closeNote()",2000);
}
function countCommentsContWord(){
	var leaveWord = 300 - $("content").value.length;
	if (leaveWord >= 0)
	{
		$("wordNum").innerHTML = "您还能输入" + leaveWord +"个字";
	}else{
		$("wordNum").innerHTML = "<font color=red>文字输入过多!<\/font>";
	}
}

setTimeout("writePostList()",2000);
function addScript(){

	var url_1 = "http://image.yesky.com/TLimages/comment/js/asyncCall.js";
	var url_2 = "http://image.yesky.com/TLimages/comment/js/post.js";
	var head = document.getElementsByTagName("head").item(0);
	oScript1 = document.createElement("script");
	oScript2 = document.createElement("script");
	oScript1.setAttribute("src", url_1);
	oScript2.setAttribute("src", url_2);
	head.appendChild(oScript1);
	head.appendChild(oScript2);
}
addScript();