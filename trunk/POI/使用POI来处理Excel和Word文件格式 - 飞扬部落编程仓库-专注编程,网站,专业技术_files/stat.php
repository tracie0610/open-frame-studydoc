function cnzz_hf(str){var b=37851;var a=63689;var h=0;var i=0;
for(i=0;i<str.length;i++){var tp=h+(a*(str.charAt(i).charCodeAt()))>>2;if(tp){h=tp;a+=b;}}
return  h+'';}
function gv_cnzz(of){
	var es = document.cookie.indexOf(";",of);
	if(es==-1) es=document.cookie.length;
	return unescape(document.cookie.substring(of,es));
}
function gc_cnzz(n){
	var arg=n+"=";
	var alen=arg.length;
	var clen=document.cookie.length;
	var i=0;
	while(i<clen){
	var j=i+alen;
	if(document.cookie.substring(i,j)==arg) return gv_cnzz(j);
	i=document.cookie.indexOf(" ",i)+1;
	if(i==0)	break;
	}
	return -1;
}
var ed=new Date();
var now=parseInt(ed.getTime());
var data='&r='+escape(document.referrer.substr(0,512))+'&lg='+escape(navigator.systemLanguage)+'&ntime=0.83524800 1248830422';
var cnzz_a=gc_cnzz("cnzz_a658962");
if(cnzz_a!=-1) cnzz_a=parseInt(cnzz_a)+1;
else cnzz_a=0;
var rt=parseInt(gc_cnzz("rtime"));
var lt=parseInt(gc_cnzz("ltime"));
var st = parseInt((now-lt)/1000);
var sin = gc_cnzz("sin658962");
if(sin==-1) sin='none';
if( document.referrer.split('/')[2]!=document.domain ) sin=document.referrer;
var h=cnzz_hf(document.location.href);
var vw=gc_cnzz("vw658962");
var res=0;
if(vw!=-1&&vw.length<1024){if(vw.indexOf(':'+h+':')>-1){res=1;}else{vw+=h+':'}}else{vw=':'+h+':';}
var eid=gc_cnzz("cnzz_eid");
if(eid==-1) eid=Math.floor(Math.random()*100000000)+"-"+1248830422+"-"+document.referrer.substr(0,64);
if(lt<1000000){rt=0;lt=0;}
if(rt<1) rt=0;
if(((now-lt)>500*86400)&&(lt>0)) rt++;
data=data+'&repeatip='+cnzz_a+'&rtime='+rt+'&cnzz_eid='+escape(eid)+'&showp='+escape(screen.width+'x'+screen.height)+'&st='+st+'&sin='+escape(sin.substr(0,512))+'&res='+escape(res);
document.write('<a href="http://www.cnzz.com/stat/website.php?web_id=658962" target=_blank title="վ��ͳ��">վ��ͳ��</a>');
document.write('<img src="http://b78.cnzz.com/stat.htm?id=658962'+data+'" border=0 width=0 height=0>');
var et=(86400-ed.getHours()*3600-ed.getMinutes()*60-ed.getSeconds());
ed.setTime(now+1000*(et-ed.getTimezoneOffset()*60));
document.cookie="cnzz_a658962="+cnzz_a+";expires="+ed.toGMTString()+ "; path=/";
document.cookie="vw658962="+escape(vw)+ ";expires="+ed.toGMTString()+";path=/";
document.cookie="sin658962="+escape(sin)+ ";expires="+ed.toGMTString()+";path=/";
ed.setTime(now+1000*86400*182);
document.cookie="rtime="+rt+";expires="+ed.toGMTString()+ ";path=/";
document.cookie="ltime="+now+";expires=" + ed.toGMTString()+ ";path=/";
document.cookie="cnzz_eid="+escape(eid)+ ";expires="+ed.toGMTString()+";path=/";
