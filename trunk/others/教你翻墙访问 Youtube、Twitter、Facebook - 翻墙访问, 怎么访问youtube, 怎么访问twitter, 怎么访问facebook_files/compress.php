//Examine the browser
var userAgent = navigator.userAgent.toLowerCase();
var is_opera  = (userAgent.indexOf('opera') != -1);
var is_saf    = ((userAgent.indexOf('applewebkit') != -1) || (navigator.vendor == 'Apple Computer, Inc.'));
var is_webtv  = (userAgent.indexOf('webtv') != -1);
var is_ie     = ((userAgent.indexOf('msie') != -1) && (!is_opera) && (!is_saf) && (!is_webtv));
var is_ie4    = ((is_ie) && (userAgent.indexOf('msie 4.') != -1));
var is_moz    = ((navigator.product == 'Gecko') && (!is_saf));
var is_kon    = (userAgent.indexOf('konqueror') != -1);
var is_ns     = ((userAgent.indexOf('compatible') == -1) && (userAgent.indexOf('mozilla') != -1) && (!is_opera) && (!is_webtv) && (!is_saf));
var is_ns4    = ((is_ns) && (parseInt(navigator.appVersion) == 4));
var is_mac    = (userAgent.indexOf('mac') != -1);

//Global registers
var currentblogid;
var currentstarid;
var currentcommentid;
var switchcomandmes;
var securitycodejs=null;
var onetimecounter=1;
var smdiv = new Array();

//Get absolute path, fix bug of IE when base path is set
/*var gotourl = location.href;
var absbaseurl;
var abspath;
var r_identifier=gotourl.lastIndexOf("/read.php/");
var r_identifier2=gotourl.lastIndexOf("/post/");
var r_identifier3=gotourl.lastIndexOf("/tag/");
if (r_identifier==-1) {
	r_identifier=r_identifier2;
}
if (r_identifier==-1) {
	r_identifier=r_identifier3;
}
if (r_identifier!=-1) {
	absbaseurl = gotourl.substr(0, r_identifier)+"/";
	var simplegotourl=absbaseurl.replace("http://", '');
	r_identifier2=simplegotourl.indexOf("/");
	abspath=simplegotourl.substr(r_identifier2+1);
} else {
	absbaseurl='';
	abspath=null;
}
*/
//Is Ajax supported?
var shutajax=((is_ie && !is_ie4) || is_moz || is_saf || is_opera) ? 0 : 1;

//For firefox, tell Firefox not to display the content you input in last session
if (is_moz) {
	var tmp_c=document.getElementById('v_content');
	if (tmp_c) tmp_c.value='';
}

//Show/Hide a DIV
function showhidediv(id){
  try{
    var panel=document.getElementById(id);
    if(panel){
      if(panel.style.display=='none'){
        panel.style.display='block';
      }else{
        panel.style.display='none';
      }
    }
  }catch(e){}
}

function addhtml (id, htmlcode, uniqueid) {
	var panel=document.getElementById(id);
	var hiddenpannel=document.getElementById(uniqueid);
	if(panel){
		hiddenpannel.value='';
		hiddenpannel.value=panel.innerHTML;
		panel.innerHTML=hiddenpannel.value+htmlcode;
		hiddenpannel.value+=htmlcode;
	}
}

function showadminreply (divid) {
	switchcomandmes='reply';
	var cleanid=divid.replace('com_', '');
	var inputcontent="<form action='"+absbaseurl+"admin.php?go=reply_addadminreply_"+cleanid+"' method='post' id='formadminreply"+cleanid+"'>";
	inputcontent+=jslang[0]+"<br/><textarea cols='66' rows='3' name='adminreplycontent' id='adminreplycontent"+cleanid+"'></textarea><br/>";
	inputcontent+="<input type='button' onclick=\"ajax_adminreply('"+cleanid+"'); return false;\" value='"+jslang[1]+"' class='button'/> <input type='reset' value='"+jslang[2]+"' class='button'/> <input type='button' value='"+jslang[3]+"' onclick=\"hideadminreply('"+divid+"');\" class='button'/></form>";
	document.getElementById(divid).innerHTML=inputcontent;
	document.getElementById(divid).style.display='block';
}

function showadminreplyformessage (divid) {
	switchcomandmes='message';
	var cleanid=divid.replace('com_', '');
	var inputcontent="<form action='"+absbaseurl+"admin.php?go=message_addadminreply_"+cleanid+"' method='post' id='formadminreply"+cleanid+"'>";
	inputcontent+=jslang[0]+"<br/><textarea cols='66' rows='3' name='adminreplycontent' id='adminreplycontent"+cleanid+"'></textarea><br/>";
	inputcontent+="<input type='button' onclick=\"ajax_adminreply('"+cleanid+"'); return false;\" value='"+jslang[1]+"' class='button'/> <input type='reset' value='"+jslang[2]+"' class='button'/> <input type='button' value='"+jslang[3]+"'  onclick=\"hideadminreply('"+divid+"');\" class='button'/></form>";
	document.getElementById(divid).innerHTML=inputcontent;
	document.getElementById(divid).style.display='block';
}

function hideadminreply (divid) {
	document.getElementById(divid).innerHTML='';
	document.getElementById(divid).style.display='none';
}

function showdelblog(blogid) {
	var urldel=absbaseurl+"admin.php?go=entry_deleteblog_"+blogid+'&returnurl='+escape(location.href);
	if(confirm(jslang[4])){
		window.location=urldel;
	}
	else {
		return;
	}
}

function comfirmurl(urldel) {
	if(confirm(jslang[5])){
		window.location=absbaseurl+urldel;
	}
	else {
		return;
	}
}

function showdeladminreply(repid) {
	var urldel=absbaseurl+"admin.php?go=reply_deladminreply_"+repid+'';
	if(confirm(jslang[6])){
		if (shutajax==1) window.location=urldel;
		else {
			urldel+="&ajax=on";
			currentcommentid=repid;
			makeRequest(urldel, 'quickdeladminreply', 'GET', null);
		}
	}
	else {
		return;
	}
}

function showdeladminreplyformessage(repid) {
	var urldel=absbaseurl+"admin.php?go=message_deladminreply_"+repid+'';
	if(confirm(jslang[7])){
		if (shutajax==1) window.location=urldel;
		else {
			urldel+="&ajax=on";
			currentcommentid=repid;
			makeRequest(urldel, 'quickdeladminreply', 'GET', null);
		}
	}
	else {
		return;
	}
}

function showdelreply(repid, blogid) {
	var urldel=absbaseurl+"admin.php?go=reply_delreply_"+repid+'-'+blogid;
	if(confirm(jslang[8])){
		if (shutajax==1) window.location=urldel;
		else {
			urldel+="&ajax=on";
			currentcommentid=repid;
			makeRequest(urldel, 'quickdelreply', 'GET', null);
		}
	}
	else {
		return;
	}
}

function showdelreplyformessage(repid) {
	var urldel=absbaseurl+"admin.php?go=message_delreply_"+repid;
	if(confirm(jslang[9])){
		if (shutajax==1) window.location=urldel;
		else {
			urldel+="&ajax=on";
			currentcommentid=repid;
			makeRequest(urldel, 'quickdelreply', 'GET', null);
		}
	}
	else {
		return;
	}
}

function showblockreply(repid, blogid) {
	var urldel=absbaseurl+"admin.php?go=reply_block_"+repid+'-'+blogid;
	if (shutajax==1) window.location=urldel;
	else {
		urldel+="&ajax=on";
		currentcommentid=repid;
		makeRequest(urldel, 'quickdelreply', 'GET', null);
	}
}

function showblockmessage(repid) {
	var urldel=absbaseurl+"admin.php?go=message_block_"+repid;
	if (shutajax==1) window.location=urldel;
	else {
		urldel+="&ajax=on";
		currentcommentid=repid;
		makeRequest(urldel, 'quickdelreply', 'GET', null);
	}
}

/* -- AJAX RELATED FUNCTIONS -- */
//Starring
function dostar(blogid) {
	if (shutajax==0) {
		gourl=absbaseurl+"admin.php?go=star&ajax=on&blogid="+blogid;
		currentblogid=blogid;
		currentstarid="starid"+blogid;
		makeRequest(gourl, 'starblog', 'GET', null);
	} else {
		gourl=absbaseurl+"admin.php?go=star&ajax=off&blogid="+blogid;
		window.location=gourl;
	}
}

//Comment and Message
function ajax_submit (job) {
	var stat_html = document.getElementById('stat_html').checked ? 1 : 0;
	var stat_ubb = document.getElementById('stat_ubb').checked ? 1 : 0;
	var stat_emot = document.getElementById('stat_emot').checked ? 1 : 0;
	var stat_property = document.getElementById('stat_property').checked ? 1 : 0;
	var openid_url = (document.getElementById('openid_url')) ? document.getElementById('openid_url').value : '';
	var v_replier = document.getElementById('v_replier').value+' ';
	var v_repurl = document.getElementById('v_repurl').value;
	var v_repemail = document.getElementById('v_repemail').value;
	var v_content = document.getElementById('v_content').value+' ';
	var v_password = document.getElementById('v_password').value;
	var v_id = document.getElementById('v_id').value;
	var v_reppsw = (document.getElementById('v_reppsw')) ? document.getElementById('v_reppsw').value : '';
	var v_security_plus;
	if (document.getElementById('v_security')) {
		var v_security = document.getElementById('v_security').value;
		if (v_security=='') {
			alert(jslang[10]);
			return false;
		}
		v_security_plus="&v_security="+v_security;
	} else {
		v_security_plus='';
	}

	if (openid_url) {
		if (v_content=='' || v_content==' ') {
			alert(jslang[11]);
			return false;
		}
		document.getElementById('visitorinput').action="visit.php?ajax=off&job=openid"+job;
		document.getElementById('visitorinput').submit();	
	}

	else {
		if (v_replier=='' || v_content==''|| v_replier==' ' || v_content==' ' ) {
			alert(jslang[11]);
			return false;
		}
		document.getElementById('btnSubmit').value=jslang[12];
		document.getElementById('btnSubmit').disabled='disabled';
		if (shutajax==0) { //Currently for IE, Safari, Mozilla and Opera
			v_replier = blogencode(v_replier);
			v_repurl = blogencode(v_repurl);
			v_repemail = blogencode(v_repemail);
			v_content = blogencode(v_content);
			v_password = blogencode(v_password);
			v_id = blogencode(v_id);
			v_reppsw = blogencode(v_reppsw);
			var postData = "unuse=unuse&onetimecounter="+onetimecounter+"&v_id="+v_id+"&v_replier="+v_replier+"&v_password="+v_password+"&v_repurl="+v_repurl+"&v_repemail="+v_repemail+"&v_content="+v_content+"&stat_html="+stat_html+"&stat_ubb="+stat_ubb+"&stat_emot="+stat_emot+"&v_reppsw="+v_reppsw+"&stat_property="+stat_property+v_security_plus;
			var gourl=absbaseurl+"visit.php?ajax=on&job="+job;
			makeRequest(gourl, 'quickreply', 'POST', postData);
		} else {
			document.getElementById('visitorinput').action=absbaseurl+"visit.php?job="+job;
			document.getElementById('visitorinput').submit();
		}
	}
}

//Ctrl+Enter key submitting (Textarea)
function ctrlenterkey (eventobject){
	if(eventobject.ctrlKey && eventobject.keyCode==13) {
		document.getElementById("btnSubmit").click();
	}
}

//Admin reply
function ajax_adminreply (commentid) {
	if (shutajax==0) {
		var admid='adminreplycontent'+commentid;
		var adminreplycontent = blogencode(document.getElementById(admid).value);
		var postData = "unuse=unuse&adminreplycontent="+adminreplycontent;
		var gourl=absbaseurl+"admin.php?ajax=on&go="+switchcomandmes+"_addadminreply_"+commentid;
		currentcommentid=commentid;
		makeRequest(gourl, 'quickadminreply', 'POST', postData);
	} else {
		var admid='formadminreply'+commentid;
		document.getElementById(admid).submit();
	}
}

function ajax_adminreply_edit (commentid, rptype) {
	switchcomandmes=rptype;
	ajax_adminreply(commentid);
}

function ajax_editcomment(repid, submitaction, onetimecounter) {
	var editjob=(submitaction=='reply') ? 'editreply' : 'editmessage';
	if (shutajax==0) {
		var admid='editcomcontent'+repid;
		var v_content = blogencode(document.getElementById(admid).value);
		var postData = "unuse=unuse&onetimecounter="+onetimecounter+"&v_content="+v_content;
		var gourl=absbaseurl+"visit.php?ajax=on&go="+editjob+"&repid="+repid;
		currentcommentid=repid;
		makeRequest(gourl, 'quickeditcomment', 'POST', postData);
	} else {
		var admid='formeditcomment'+repid;
		document.getElementById(admid).action=absbaseurl+"visit.php?go="+editjob+"&repid="+repid;
		document.getElementById(admid).submit();
	}
}


//encode string
function blogencode (str) {
	str=encodeURIComponent(str);
	if (is_moz) str=str.replace(/%0A/g, "%0D%0A"); //In IE, a new line is encoded as \r\n, while in Mozilla it's \n
	return str;
}

//Avatar Selection
function changeavatar (slname, area) {
	var current=document.getElementById(slname);
	var realvalue=current.options[current.selectedIndex].value;
	var areashow=document.getElementById(area);
	if (areashow) {
		if (realvalue!='' && realvalue!=null) {
			areashow.innerHTML="<img src='images/avatars/"+realvalue+"' alt=''/>";
		}
		else {
			areashow.innerHTML=jslang[13];
		}
	}
}

//Insert Emots
function insertemot (emotcode) {
	var current=document.getElementById('v_content');
	var emot="[emot]"+emotcode+"[/emot]";
	if (current) {
		if (current.value!='' && current.value!=null) {
			current.value+=emot;
		}
		else {
			current.value=emot;
		}
		document.getElementById('v_content').focus();
	}
}

// Show/Hide Sidebar
function showHideSidebar(){
  try{
    var objSidebar=document.getElementById("sidebar");
    var objContent=document.getElementById("content");
    if(objSidebar.className!="sidebar-hide"){
      objSidebar.className="sidebar-hide";
      objSidebar.style.display="none";
      objContent.className="content-wide";
	  setCookie('sidebaroff', 1,null, null, null, false);
    }else{
      objSidebar.className="sidebar";
      objSidebar.style.display="block";
      objContent.className="content";
	  setCookie('sidebaroff', 0,null, null, null, false);
    }
  }catch(e){}
}

function loadSidebar(){
  try{
    var objSidebar=document.getElementById("sidebar");
    var objContent=document.getElementById("content");
	var sidebaroff=getCookie ('sidebaroff');
    if(sidebaroff==1){
      objSidebar.className="sidebar-hide";
      objSidebar.style.display="none";
      objContent.className="content-wide";
    }else{
      objSidebar.className="sidebar";
      objSidebar.style.display="block";
      objContent.className="content";
    }
  }catch(e){}
}




//Media Link
function playmedia(strID,strType,strURL,intWidth,intHeight) {
	var objDiv=document.getElementById(strID);
	if (!objDiv) return false;
	if (objDiv.style.display!='none') {
		objDiv.innerHTML='';
		objDiv.style.display='none';
	} else {
		objDiv.innerHTML=makemedia(strType,strURL,intWidth,intHeight,strID);
		objDiv.style.display='block';
	}
}

//Media Build
function makemedia (strType,strURL,intWidth,intHeight,strID) {
	var strHtml;
	switch(strType) {
		case 'wmp':
			strHtml="<object width='"+intWidth+"' height='"+intHeight+"' classid='CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6'><param name='url' value='"+strURL+"'/><embed width='"+intWidth+"' height='"+intHeight+"' type='application/x-mplayer2' src='"+strURL+"'></embed></object>";
			break;
		case 'swf':
			strHtml="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='"+intWidth+"' height='"+intHeight+"'><param name='movie' value='"+strURL+"'/><param name='quality' value='high' /><embed src='"+strURL+"' quality='high' type='application/x-shockwave-flash' width='"+intWidth+"' height='"+intHeight+"'></embed></object>";
			break;
		case 'flv':
			strHtml="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='"+intWidth+"' height='"+intHeight+"'><param name='movie' value='images/others/mediaplayer.swf?file="+strURL+"&bufferlength=10'/><param name='quality' value='high' /><param name='allowFullScreen' value='true' /><embed src='images/others/mediaplayer.swf?file="+strURL+"&bufferlength=10' quality='high' allowFullScreen='true' type='application/x-shockwave-flash' width='"+intWidth+"' height='"+intHeight+"'></embed></object>";
			break;
		case 'real':
			strHtml="<object classid='clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA' width='"+intWidth+"' height='"+intHeight+"'><param name='src' value='"+absbaseurl+"inc/realplay.php?link="+strURL+"' /><param name='controls' value='Imagewindow' /><param name='console' value='clip1' /><param name='autostart' value='true' /><embed src='"+absbaseurl+"inc/realplay.php?link="+strURL+"' type='audio/x-pn-realaudio-plugin' autostart='true' console='clip1' controls='Imagewindow' width='"+intWidth+"' height='"+intHeight+"'></embed></object><br/><object classid='clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA' width='"+intWidth+"' height='44'><param name='src' value='"+absbaseurl+"inc/realplay.php?link="+strURL+"' /><param name='controls' value='ControlPanel' /><param name='console' value='clip1' /><param name='autostart' value='true' /><embed src='"+absbaseurl+"inc/realplay.php?link="+strURL+"' type='audio/x-pn-realaudio-plugin' autostart='true' console='clip1' controls='ControlPanel' width='"+intWidth+"' height='44'></embed></object>";
			break;
	}
	return strHtml;
}

//Font size control
function doZoom(size) {
	document.getElementById('zoomtext').style.fontSize=size+'px';
}


//Cookie
function setCookie(name,value,expiry,path,domain,secure) {
	var nameString = name + "=" + value;
	var expiryString = (expiry == null) ? "" : " ;expires = "+ expiry.toGMTString();
	var pathString = (path == null) ? "" : " ;path = "+ path;
	var domainString = (path == null) ? "" : " ;domain = "+ domain;
	var secureString = (secure) ?";secure" :"";
	document.cookie = nameString + expiryString + pathString + domainString + secureString;
}

function getCookie (name) {
	var CookieFound = false;
	var start = 0;
	var end = 0;
	var CookieString = document.cookie;
	var i = 0;

	while (i <= CookieString.length) {
		start = i ;
		end = start + name.length;
		if (CookieString.substring(start, end) == name){
			CookieFound = true;
			break;
		}
		i++;
	}

	if (CookieFound){
		start = end + 1;
		end = CookieString.indexOf(";",start);
		if (end < start) end = CookieString.length;
		return unescape(CookieString.substring(start, end));
	}
	return "";
}

function deleteCookie(name) {
	var expires = new Date();
	expires.setTime (expires.getTime() - 1);
	setCookie( name , "Delete Cookie", expires,null,null,false);
}

function refreshsecuritycode(areaid, inputid) {
	if (document.getElementById(areaid)) {
		var rnds=Math.random();
		document.getElementById(areaid).innerHTML="<img src='inc/securitycode.php?rand="+rnds+"' alt=''/>";
	}
	if (document.getElementById(inputid)) document.getElementById(inputid).value='';
}

function ajax_login () {
	if (shutajax==0) {
		var username = blogencode(document.getElementById('username').value);
		var password = blogencode(document.getElementById('password').value);
		var tmpSavecookie;
		for (var i=1; i<=5; i++) {
			tmpSavecookie='savecookie'+i;
			if (document.getElementById(tmpSavecookie).checked) {
				var savecookie = blogencode(document.getElementById(tmpSavecookie).value);
				break;
			}
		}
		var postData = "unuse=unuse&username="+username+"&password="+password+"&savecookie="+savecookie;
		if (document.getElementById('securitycode')) postData+="&securitycode="+blogencode(document.getElementById('securitycode').value);
		var gourl=absbaseurl+"login.php?ajax=on&job=ajaxverify";
		makeRequest(gourl, 'quicklogin', 'POST', postData);
	}
}

function quicklogout() {
	setCookie ('userid','',null,null, null, false);
	setCookie ('userpsw','',null,null, null, false);
}

function quickremember() {
	var v_replier = blogencode(document.getElementById('v_replier').value);
	var v_repurl = blogencode(document.getElementById('v_repurl').value);
	var v_repemail = blogencode(document.getElementById('v_repemail').value);
	var dateObjexp= new Date();
	dateObjexp.setSeconds(3600*24*365);
	if (document.getElementById('stat_rememberme').checked) {
		setCookie ('rem_v_replier', v_replier, dateObjexp, null, null, false);
		setCookie ('rem_v_repurl', v_repurl, dateObjexp, null, null, false);
		setCookie ('rem_v_repemail', v_repemail, dateObjexp, null, null, false);
		setCookie ('rem_v_rememberme', '1', dateObjexp, null, null, false);
	} else {
		setCookie ('rem_v_replier', '', dateObjexp, null, null, false);
		setCookie ('rem_v_repurl', '', dateObjexp, null, null, false);
		setCookie ('rem_v_repemail', '', dateObjexp, null, null, false);
		setCookie ('rem_v_rememberme', '0', dateObjexp, null, null, false);
	}
}

function decodetburl (str, ishidden, uniqueid) {
	var resultstr='';
	if (ishidden==1) { //Hidden!
		var randomnumber1=Math.floor(Math.random()*10+1);
		var randomnumber2=Math.floor(Math.random()*10+1);
		resultstr="<span id=\"showtbq"+uniqueid+"\">"+jslang[66]+" <span id=\"qa"+uniqueid+"\">"+randomnumber1+"</span> <strong>+</strong> <span id=\"qb"+uniqueid+"\">"+randomnumber2+"</span> <strong>=</strong> <input type='text' id='ans"+uniqueid+"' maxlength='2' size='2'/> <input type='button' onclick='submithiddentbanswer(\""+uniqueid+"\");' value='"+jslang[1]+"'/><span id=\"answertb"+uniqueid+"\" style=\"display: none;\">"+str+"</span></span>";
	}
	else {
		resultstr="<span id=\"showtbfinal"+uniqueid+"\">"
		var codestr;
		codestr=str.split('%');
		var seed=codestr[0];
		for (var i=1; i<codestr.length; i++) {
			resultstr+=String.fromCharCode(codestr[i]-seed);
		}
		resultstr+="</span> <span onclick=\"CopyText('showtbfinal"+uniqueid+"');\" style=\"cursor: pointer;\">["+jslang[71]+"]</span>";
	}
	return resultstr;
}

function submithiddentbanswer(uniqueid) {
	var randomnumber1=(document.getElementById("qa"+uniqueid)) ? parseInt(document.getElementById("qa"+uniqueid).innerHTML) : 0;
	var randomnumber2=(document.getElementById("qb"+uniqueid)) ? parseInt(document.getElementById("qb"+uniqueid).innerHTML) : 0;
	var anssubmited=(document.getElementById("ans"+uniqueid)) ? parseInt(document.getElementById("ans"+uniqueid).value) : 0;
	if (randomnumber1+randomnumber2!=anssubmited) alert (jslang[67]);
	else {
		var resultstr=(document.getElementById("answertb"+uniqueid)) ? document.getElementById("answertb"+uniqueid).innerHTML : null;
		resultstr=decodetburl (resultstr, 0, 0);
		if (document.getElementById("showtbq"+uniqueid)) document.getElementById("showtbq"+uniqueid).innerHTML=resultstr;
	}
}

function getprotectedblog (blogid, way) {
	var blogpsw=blogencode(document.getElementById('entrypsw'+blogid).value);
	currentblogid=blogid;
	var postData = "unuse=unuse&job=getcontentonly&way="+way+"&blogid="+blogid+"&blogpsw="+blogpsw;
	if (shutajax==0) {
		var gourl=absbaseurl+"visit.php?ajax=on";
		makeRequest(gourl, 'quickgetprotectedblog', 'POST', postData);
	}
}

function promptreppsw () {
	var pswproperty=document.getElementById('stat_property');
	if (!pswproperty) return;
	else if (pswproperty.checked) {
		var pswtxt=prompt(jslang[69],'');
		if (pswtxt==null || pswtxt=='') {
			pswproperty.checked='';
			return;
		} else {
			if (pswtxt.length>12) {
				alert(jslang[70]);
				promptreppsw();
			}
			document.getElementById('v_reppsw').value=pswtxt;
		}
	} else {
		document.getElementById('v_reppsw').value='';
	}
}

function getprotectedreply (repid, way, onetimecounter) {
	var reppsw=blogencode(document.getElementById('reppsw'+repid).value);
	currentcommentid=repid;
	var postData = "unuse=unuse&job=getreplyonly&way="+way+"&reppsw="+reppsw+"&repid="+currentcommentid+"&onetimecounter"+onetimecounter;
	if (shutajax==0) {
		var gourl=absbaseurl+"visit.php?ajax=on";
		makeRequest(gourl, 'quickeditcomment', 'POST', postData);
	}
}


function turnsmileygroup (id) {
	if (document.getElementById('smileygroup')) document.getElementById('smileygroup').innerHTML=emotgroup[id];
}

function smileypreview(ctrl) {

}


//===============================Copy to clipboard=================================//

function CopyText(id) { 
	//copyToClipboard(document.getElementById(id).value); 
	if (document.getElementById(id)) 	{
		var tocopy=document.getElementById(id).innerHTML;
		tocopy=tocopy.replace(/&amp;/g, "&"); 
		copy(tocopy);
	}
}

function copy(text2copy) {
	if (window.clipboardData) { 
		window.clipboardData.setData("Text",text2copy); 
	} else {
		var flashcopier = 'flashcopier'; 
		if(!document.getElementById(flashcopier)) { 
			var divholder = document.createElement('div'); divholder.id = flashcopier; 
			document.body.appendChild(divholder); 
		} 
		document.getElementById(flashcopier).innerHTML = ''; 
		var divinfo = '<embed src="'+absbaseurl+'images/others/_clipboard.swf" FlashVars="clipboard='+escape(text2copy)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>'; 
		document.getElementById(flashcopier).innerHTML = divinfo;
		alert(jslang[72]);
	} 
}


function copyToClipboard(meintext)
{
     if (window.clipboardData) 
       {
       alert("ie");
       // the IE-manier
       window.clipboardData.setData("Text", meintext);
       
       // waarschijnlijk niet de beste manier om Moz/NS te detecteren;
       // het is mij echter onbekend vanaf welke versie dit precies werkt:
       }
       else if (window.netscape) 
       { 
       
       // dit is belangrijk maar staat nergens duidelijk vermeld:
       // you have to sign the code to enable this, or see notes below 
       netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
       
       // maak een interface naar het clipboard
       var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
       if (!clip) return;
       alert("mozilla");
       // maak een transferable
       var trans = Components.classes['@mozilla.org/widget/transferable;1']
                      .createInstance(Components.interfaces.nsITransferable);
       if (!trans) return;
       
       // specificeer wat voor soort data we op willen halen; text in dit geval
       trans.addDataFlavor('text/unicode');
       
       // om de data uit de transferable te halen hebben we 2 nieuwe objecten 
       // nodig om het in op te slaan
       var str = new Object();
       var len = new Object();
       
       var str = Components.classes["@mozilla.org/supports-string;1"]
                    .createInstance(Components.interfaces.nsISupportsString);
       
       var copytext=meintext;
       
       str.data=copytext;
       
       trans.setTransferData("text/unicode",str,copytext.length*2);
       
       var clipid=Components.interfaces.nsIClipboard;
       
       if (!clip) return false;
       
       clip.setData(trans,null,clipid.kGlobalClipboard);
       
       }
       alert("Following info was copied to your clipboard:\n\n" + meintext);
       return false;
}


 
 
 
//Current Language: 简体中文
var jslang = new Array ();
jslang[0]='回复：';
jslang[1]='提交';
jslang[2]='清空';
jslang[3]='取消';
jslang[4]='确定删除这篇日志吗？包括回复和引用在内的一切都将被删除且不可恢复！';
jslang[5]='这步操作将消除一些数据且不可恢复！是否继续？';
jslang[6]='确定删除对这条评论的回复吗？这步操作不可恢复！';
jslang[7]='确定删除对这条留言的回复吗？这步操作不可恢复！';
jslang[8]='确定删除这条评论吗？这步操作不可恢复！';
jslang[9]='确定删除这条留言吗？这步操作不可恢复！';
jslang[10]='请填写验证码！';
jslang[11]='请填写昵称或内容！';
jslang[12]='正在提交，请稍候';
jslang[13]='无头像';
jslang[14]='未加星标';
jslang[15]='已加星标';
jslang[16]='确定删除这个项目吗？这步操作不可恢复！';
jslang[17]='确定删除这个天气吗？删除后，标注了此天气的日志的天气位置将显示为“未指定”。此操作不会同时删除该天气的图片。';
jslang[18]='位置：';
jslang[19]='左对齐';
jslang[20]='普通';
jslang[21]='右对齐';
jslang[22]='插入';
jslang[23]='Email 地址';
jslang[24]='文字将被变粗';
jslang[25]='文字将变斜体';
jslang[26]='文字';
jslang[27]='文字将加下划线';
jslang[28]='被引用的文字';
jslang[29]='为选中文字添加超级链接';
jslang[30]='链接文本显示';
jslang[31]='如果不想使用, 可以为空, 将只显示超级链接地址';
jslang[32]='超级链接';
jslang[33]='图片的 URL';
jslang[34]='没有可以挽回的数据！';
jslang[35]='大小 ';
jslang[36]='请输入自定义的字体名';
jslang[37]='要设置字体的文字';
jslang[38]='请输入自定义颜色的代码';
jslang[39]='颜色';
jslang[40]='Email 地址';
jslang[41]='文件下载地址';
jslang[42]='为选中文字添加注释';
jslang[43]='请输入文字';
jslang[44]='请输入注释';
jslang[45]='文字将加删除线';
jslang[46]='文字将作为下标';
jslang[47]='文字将作为上标';
jslang[48]='对齐样式';
jslang[49]="输入 'center' 表示居中, 'left' 表示左对齐, 'right' 表示右对齐.";
jslang[50]='错误!';
jslang[51]="类型只能输入 'center' 、 'left' 或者 'right'.";
jslang[52]='要对齐的文本';
jslang[53]='为选中文字添加超级链接';
jslang[54]="链接文本显示.\n如果不想使用, 可以为空, 将只显示超级链接地址. ";
jslang[55]='超级链接';
jslang[56]="输入 'm' 表示居中, 'l' 表示左对齐, 'r' 表示右对齐";
jslang[57]="类型只能输入 'm' 、 'l' 或者 'r'.";
jslang[58]="限定图片的尺寸（格式：宽,高，例：400,300）\n不限定则留空\n未知的高宽可用*代替，比如 400,* 或 *,200";
jslang[59]='该多媒体文件的地址';
jslang[60]='该多媒体文件的宽度';
jslang[61]='该多媒体文件的高度';
jslang[62]='输入代码';
jslang[63]=' 秒后自动保存';
jslang[64]='正在保存...';
jslang[65]='已自动保存。';
jslang[66]='请输入答案：';
jslang[67]='对不起，答案错误！';
jslang[68]='警告：如果转换编辑器，此次所做的更改都将全部失效！是否继续？';
jslang[69]='请为您的评论/留言设一个密码，只能是字母和数字。\n只有输入此密码才能看到内容以及管理员作出的回复。';
jslang[70]='密码最多只能包含12个字符。';
jslang[71]='复制';
jslang[72]='地址已经复制到剪贴板！';
jslang[73]='自动保存已禁用';
jslang[74]='自动保存失败。';
jslang[75]='出错信息如下：';
jslang[76]='警告：如果现在载入自动存档，此次所做的更改将全部失效！是否继续？';
jslang[77]='清除失败。';

 
 
 
var http_request = false;
function makeRequest(url, functionName, httpType, sendData) {

	http_request = false;
	if (!httpType) httpType = "GET";

	if (window.XMLHttpRequest) { // Non-IE...
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			http_request.overrideMimeType('text/plain');
		}
	} else if (window.ActiveXObject) { // IE
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}

	if (!http_request) {
		alert('Cannot send an XMLHTTP request');
		return false;
	}

	var changefunc="http_request.onreadystatechange = "+functionName;
	eval (changefunc);
	//http_request.onreadystatechange = alertContents;
	http_request.open(httpType, url, true);
	http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	http_request.send(sendData);
}

function getReturnedText () {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var messagereturn = http_request.responseText;
			return messagereturn;
		} else {
			alert('There was a problem with the request.');
		}
	}
}


function starblog() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var messagereturn = http_request.responseText;
			if (messagereturn == 'ok') {
				var staridcon=document.getElementById(currentstarid);
				if (staridcon.innerHTML.indexOf("/starred.gif")!=-1) {
					staridcon.innerHTML="<a href=\"javascript: dostar('"+currentblogid+"');\"><img src=\""+moreimagepath+"/others/unstarred.gif\" alt=\"\" title=\""+jslang[14]+"\" border=\"0\"/></a>";
				} else {
					staridcon.innerHTML="<a href=\"javascript: dostar('"+currentblogid+"');\"><img src=\""+moreimagepath+"/others/starred.gif\" alt=\"\" title=\""+jslang[15]+"\" border=\"0\"/></a>";
				}
			}
			else alert(messagereturn);
		} else {
			alert('There was a problem with the request.');
		}
	}
}

function quickreply () {
	var new_addnew=document.getElementById('addnew');
	var new_btnSubmit=document.getElementById('btnSubmit');
	var new_vcontent=document.getElementById('v_content');
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var messagereturn = http_request.responseText;
			if (messagereturn.indexOf("<boblog_ajax::error>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::error>", '');
				new_btnSubmit.value=jslang[1];
				new_btnSubmit.disabled='';
				refreshsecuritycode('securityimagearea', 'v_security');
				alert(messagereturn);
			} else if (messagereturn.indexOf("<boblog_ajax::success>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::success>", '');
				messagereturn=messagereturn.replace(/\\/g, '');

				new_addnew.innerHTML=messagereturn+new_addnew.innerHTML;
				new_btnSubmit.value=jslang[1];
				new_btnSubmit.disabled='';
				new_vcontent.value='';
				onetimecounter+=1;
				refreshsecuritycode('securityimagearea', 'v_security');
				window.location.hash="topreply";
			} else {
				alert(messagereturn);
			}
		}  else {
			alert('There was a problem with the request.');
		}
	}
}

function quickadminreply() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var messagereturn = http_request.responseText;
			if (messagereturn.indexOf("<boblog_ajax::error>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::error>", '');
			} else if (messagereturn.indexOf("<boblog_ajax::success>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::success>", '');
				var newcomid="blogcomment"+currentcommentid;
				document.getElementById(newcomid).innerHTML=messagereturn;
			}
		}  else {
			alert('There was a problem with the request.');
		}
	}
}

function quickdeladminreply() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var messagereturn = http_request.responseText;
			if (messagereturn.indexOf("<boblog_ajax::error>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::error>", '');
				alert(messagereturn);
			} else if (messagereturn.indexOf("<boblog_ajax::success>")!=-1) {
				var admrpid="replied_com_"+currentcommentid;
				document.getElementById(admrpid).innerHTML='';
				document.getElementById(admrpid).style.display='none';
			}
		}  else {
			alert('There was a problem with the request.');
		}
	}
}

function quickdelreply() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var messagereturn = http_request.responseText;
			if (messagereturn.indexOf("<boblog_ajax::error>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::error>", '');
				alert(messagereturn);
			} else if (messagereturn.indexOf("<boblog_ajax::success>")!=-1) {
				var rpid="blogcomment"+currentcommentid;
				document.getElementById(rpid).innerHTML='';
				document.getElementById(rpid).style.display='none';
			}
		}  else {
			alert('There was a problem with the request.');
		}
	}
}

function quicklogin() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var messagereturn = http_request.responseText;
			if (messagereturn.indexOf("<boblog_ajax::error>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::error>", '');
				refreshsecuritycode('securityimagearea', 'securitycode');
				alert(messagereturn);
			} else if (messagereturn.indexOf("<boblog_ajax::success>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::success>", '');
				var cookieset=messagereturn.split('-');
				var dateObjexp= new Date();
				if (cookieset[2]==0) var dateObjexp=null;
				else dateObjexp.setSeconds(cookieset[2]);
				setCookie ('userid',cookieset[0],dateObjexp,null, null, false);
				setCookie ('userpsw',cookieset[1],dateObjexp,null, null, false);
				window.location="login.php?job=ajaxloginsuccess";
			}
		}  else {
			alert('There was a problem with the request.');
		}
	}
}

function quickaddcategory() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var messagereturn = http_request.responseText;
			if (messagereturn.indexOf("<boblog_ajax::error>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::error>", '');
				alert(messagereturn);
			} else if (messagereturn.indexOf("<boblog_ajax::success>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::success>", '');
				document.getElementById('cateselarea').innerHTML=messagereturn;
			}
		}  else {
			alert('There was a problem with the request.');
		}
	}
}

function quickgetprotectedblog () {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var messagereturn = http_request.responseText;
			if (messagereturn.indexOf("<boblog_ajax::error>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::error>", '');
				alert(messagereturn);
			} else if (messagereturn.indexOf("<boblog_ajax::success>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::success>", '');
				document.getElementById('protectedentry'+currentblogid).innerHTML=messagereturn;

			}
		}  else {
			alert('There was a problem with the request.');
		}
	}
}

function quickeditcomment () {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var messagereturn = http_request.responseText;
			if (messagereturn.indexOf("<boblog_ajax::error>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::error>", '');
				alert(messagereturn);
			} else if (messagereturn.indexOf("<boblog_ajax::success>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::success>", '');
				document.getElementById('blogcomment'+currentcommentid).innerHTML=messagereturn;
			}
		}  else {
			alert('There was a problem with the request.');
		}
	}
}


function adminSubmitAjaxRun() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var messagereturn = http_request.responseText;
			if (messagereturn.indexOf("<boblog_ajax::error>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::error>", '');
				adminAjaxAlert(messagereturn, 1);
			} else if (messagereturn.indexOf("<boblog_ajax::success>")!=-1) {
				messagereturn=messagereturn.replace("<boblog_ajax::success>", '');
				if (messagereturn.indexOf("<boblog_ajax::fetch>")!=-1) {
					var tmpmsg=messagereturn.split("<boblog_ajax::fetch>");
					messagereturn=tmpmsg[0];
					ajaxURL=tmpmsg[1]+"&ajax=on";
					makeRequest(ajaxURL, 'adminFetchAjaxRun', 'GET', null);
				}
				adminAjaxAlert(messagereturn, 0);
			}
		}  else {
			adminAjaxAlert('There was a problem with the request.', 1);
		}
	}
}

function adminFetchAjaxRun() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			var messagereturn = http_request.responseText;
			if (document.getElementById('admininner')) {
				document.getElementById('admininner').innerHTML=messagereturn;
			}
		}
	}
}

 
 
 
/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;
 
 
 
