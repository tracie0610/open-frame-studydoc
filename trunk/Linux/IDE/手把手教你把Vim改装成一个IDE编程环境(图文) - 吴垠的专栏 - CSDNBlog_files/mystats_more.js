
function weaGetDate(){var $a=new Date();var $b=$a.getFullYear();var $c=$a.getMonth()+1;if($c<10)$c="0"+$c;var $d=$a.getDate();if($d<10)$d="0"+$d;return $b+""+$c+""+$d;};function getTimeUniqueCode(){var $a=new Date();var $b=$a.getFullYear();if($b>=1970&&$b<2070)$b=$b-1970;else $b=0;if($b<10)$b="1"+$b;var $c=$a.getMonth()+1;if($c<10)$c="0"+$c;var $d=$a.getDate();if($d<10)$d="0"+$d;var $e=$a.getHours();if($e<10)$e="0"+$e;var $f=$a.getMinutes();if($f<10)$f="0"+$f;var $g=$a.getSeconds();if($g<10)$g="0"+$g;return $b+""+$c+""+$d+""+$e+""+$f+""+$g;};function getRandomNum($h,$i){var $j=$i-$h;var $k=Math.random();var Number=$h+Math.round($k*$j);Number=10000+Number;return Number;};function WeaSearchObject(i,s,k,p){this.i=i;this.s=s;this.k=k;this.p=p;};function WeaUtil(){this.ver=1;};WeaUtil.prototype.IsValidUrl=function($l){var re=/^(http[s]?:\/\/)/i;var $m=$l.match(re);if($m!=null)return true;else return false;};WeaUtil.prototype.ExtractDomain=function($l){var $n="";$l=unescape($l);var re=/(\w+):\/\/([^\/:]+)(:d*)?([^# ]*)/;var $o=$l.match(re);if($o!=null)$n=$o[2];return $n;};WeaUtil.prototype.ExtractHost=function($l){var re=/(\w+):\/\/([\w.:]+)\/(\S*)/;var $m=$l.match(re);if($m!=null){var a=$m[0],b=$m[1],c=$m[2],d=$m[3];if(c!="localhost"){var $p={};$p.host=c;$p.path=d;return $p;}else return false;}else return false;};WeaUtil.prototype.ExtractPara=function($q,$r){var $s=new RegExp("(&|\\?)"+$r+"=([^&]*)(&|$)","gi").exec($q);var $t;if($t=$s)return $t[2];else return "0";},WeaUtil.prototype.ExtractFirstKeyword=function($q,$r){var $s=new RegExp("(&|\\?)"+$r+"=([^&]*)(&|$)","gi").exec($q);var $t;if($t=$s)return $t[2];else return "0";};WeaUtil.prototype.GetCookieExpire=function(){var $u=new Date();$u.setTime($u.getTime()+365*24*3600*1000*10);var $v=$u.toGMTString();return $v;};var weaUtil=new WeaUtil();function setWeaCookie($w,$x,$u){if($u==null)$u=wea_str_expire;document.cookie=$w+"="+$x+";path=/;domain="+wea_cookie_domain+";expires="+$u;};function getWeaCookie($w){var $y=document.cookie.match(new RegExp("(^| )"+$w+"=([^;]*)(;|$)","i"));$y=($y==null)?"":unescape(($y)[2]);return $y;};function weaClearAllCookie(){var $u=new Date();$u.setTime($u.getTime()-3600000);var $v=$u.toGMTString();var c=new Array("ld","lo","lt","st","pt","rc","ft","fu","u","sid","cs");var i=0;while(i<c.length){setWeaCookie("WEA_"+c[i++],"",$v);}};function weaDeleteWeaCookie($w){var $u=new Date();$u.setTime($u.getTime()-3600000);var $v=$u.toGMTString();setWeaCookie($w,"",$v);};function clearAllUselessCookie(){var $u=new Date();$u.setTime($u.getTime()-3600000);var $v=$u.toGMTString();var c=new Array("fu","edition","sid","pt","rc","st","lt","ft","ld");var i=0;while(i<c.length){setWeaCookie("WEA_"+c[i++],"",$v);}};function weaGetUid(){var $z=getWeaCookie("WEA_u");if($z=="")$z="0";var $A=$z;if("0"==$z){$A=getTimeUniqueCode()+""+getRandomNum(0,9999);setWeaCookie("WEA_u",$A);};return $A;};function doCalDownload(){var $B=parseInt((14660*8)/(wea_end_t-wea_start_t));if($B>4096)return 0;var c=new Array(10,56,128,256,512,1024,2048,4096,10240);var i=0;while(i<c.length&&$B>c[i])i++;return i;};function doCalLanguage(){var $B=((navigator.language)?navigator.language:navigator.browserLanguage).toLowerCase();if("ja"==$B)$B="ja-jp";if("en"==$B)$B="en-us";if("de"==$B)$B="de-de";var c=new Array("","zh-cn","zh-hk","zh-tw","en-us","en-gb","ja-jp","en-au","en-ca","en-in","en-hk","en-il","en-za","en-nz","en-my","en-sg","fr-fr","fr-ca","fr-be","fr-ch","de-de","de-at","de-ch","es-es","es-mx","es-us","es-xl","nl-nl","nl-be","it-it","ko-kr","fi-fi","da-dk","nb-no","sv-se","pt-br");var i=0;while(i<c.length&&$B!=c[i])i++;if(i==c.length)i=0;return i;};function doCalColor(){var $B=parseInt(screen.colorDepth)||parseInt(screen.pixelDepth);var c=new Array(-1,4,8,16,24,32);var i=0;while(i<c.length&&$B!=c[i])i++;if(i==c.length)i=0;return i;};function doCalScreen(){var $B=Math.ceil(screen.width)*Math.ceil(screen.height);var $C=((navigator.language)?navigator.language:navigator.browserLanguage).toLowerCase();var c=new Array(-1,320*640,640*800,800*600,1024*768,1280*1024,1360*768,1440*900,1280*720,1152*864,1280*800,1280*768,1280*960,1680*1050,1024*600,1400*1050,1280*768,1600*1200,640*480,960*600,1366*768);var i=0;while(i<c.length&&$B!=c[i])i++;if(i==c.length)i=0;return i;};function doCalOs(){if(!(navigator.userAgent))return 0;var $D=navigator.userAgent.toLowerCase();var $E=($D.indexOf("win")!=-1);var i=0;if($E&&($D.indexOf("windows nt 5.1")!=-1||$D.indexOf("windows xp")>-1))i=1;else if($E&&($D.indexOf("windows nt 5.0")!=-1||$D.indexOf("windows 2000")>-1))i=2;else if($E&&($D.indexOf("windows nt 5.2")!=-1||$D.indexOf("windows 2003")>-1))i=3;else if($E&&($D.indexOf("windows nt 6.0")!=-1||$D.indexOf("windows vista")>-1))i=4;else if($E&&($D.indexOf("win95")>-1||$D.indexOf("windows 95")>-1))i=5;else if($E&&($D.indexOf("win98")>-1||$D.indexOf("windows 98")>-1||$D.indexOf("windows me")>-1))i=6;else if($D.indexOf("mac")!=-1||$D.indexOf("68k")>-1||$D.indexOf("powerpc")>-1)i=7;else if($D.indexOf("linux")!=-1)i=8;else if($D.indexOf("unix")!=-1||$D.indexOf("sunos")!=-1||$D.indexOf("bsd")!=-1||$D.indexOf("x11")!=-1)i=9;else if($D.indexOf("symbianos")!=-1)i=10;else if($E&&($D.indexOf("windows nt 6.1")!=-1))i=11;return i;};function doCalBrowser(){var $D=navigator.userAgent.toLowerCase();var c=new Array("NOTHING","msie 7","msie 6","firefox","msie 5","msie 8","opera","chrome","safari","konqueror","weamaxclient");var i=0;while(i<c.length&&($D.indexOf(c[i])==-1))i++;if(i==c.length)i=0;return i;};function doCalCharset($F,$G){var $H=1;var $I=2;var $J=3;var $K=7;var i=0;var $L=0;var $M=1;var $N=2;var $O=3;if($F==0)return $L;$G=$G.toLowerCase();var ch=$M;var $P=new Array(2,3,4,7,10,15,16);if($I==$F&&$G.indexOf("ie=gb")!=-1)return $M;if($H==$F&&$G.indexOf("ie=utf-8")!=-1)return $L;if($J==$F&&$G.indexOf("cnnic_right.html")!=-1)return $M;if($K==$F&&$G.indexOf("ue=gbk")!=-1)return $M;if($G.indexOf("ie=big5")!=-1)return $O;while(i<$P.length){if($P[i]==$F)return $L;i++;};return ch;};function doCalSearch($Q){if(null==$Q||""==$Q)return false;var $R=weaUtil.ExtractHost($Q).host?weaUtil.ExtractHost($Q).host:0;if(0==$R)return false;var $S=new Array(1,"baidu.com","wd|word","pn",2,"google.c","q","start",3,"yahoo.c","p","b",4,"live.com","q","first",5,"sogou.com","query","page",6,"so.163.com","q","pg",7,"youdao.com","q","start",8,"3721.com","p","page",9,"soso.com","w","pg",10,"msn.com","q","first",11,"iask.com","k","p",12,"vnet.cn","kw","start",13,"zhongsou.com","w|word","b",14,"tom.com","w|word","pn",15,"alexa.com","q","page",16,"leexoo.com","keyword","pageNum");var $T=new Array();var $U=$S.length/4;for(var i=0;i<$U;i++)$T[i]=new WeaSearchObject($S[i*4],$S[i*4+1],$S[i*4+2],$S[i*4+3]);var $V=0;var $W="";var $X="";var $Y=0;for(var i=0;i<$U;i++){$W=$T[i].s;if($R.indexOf($W)>=0){$V=$T[i].i;var $Z=$T[i].k.split("|");var $00=($T[i].p>10)?Math.floor($T[i].p/10):$T[i].p;$Y=weaUtil.ExtractPara($Q,$00);for(i=0;i<$Z.length;i++)if(weaUtil.ExtractPara($Q,$Z[i])!=0){$X=weaUtil.ExtractFirstKeyword($Q,$Z[i]);};break;}};var $p={};$p.index=$V;$p.site=$W;$p.keyword=$X;$p.page=$Y;return $p;};function doCalAlexa(){var $D=navigator.userAgent.toLowerCase();return($D.indexOf("alexa toolbar")>-1)?1:2;};function doCalHomepage($l){var $B=0;var e;try{if(window.document.body.addBehavior("#default#homePage")){if(window.document.body.isHomePage($l))$B=1;else $B=2;}else $B=2;}catch(e){};return $B;};function doCalCookieStatus(){var $01=(navigator.cookieEnabled)?1:0;if(typeof navigator.cookieEnabled=="undefined"&&!$01){document.cookie="testcookie";$01=(document.cookie=="testcookie")?1:0;document.cookie="";};return $01;};function doStripIndexAlias($l){var re=eval("/(.*)\\/index\\.(html|htm|asp|aspx|php|shtml|jsp|do|cgi)$/i");var $02=eval("/(.*)\\/default\\.(asp|aspx)$/i");var $03=$l;var $04=$l.match(re);if($04!=null){var $03=$04[1]+"/";}else{var $05=$l.match($02);if($05!=null)var $03=$05[1]+"/";};return $03;};function weaGetPageCharset(){var $L=0;var $M=1;var $N=2;var $O=3;var $06="";var id=$L;if(wea_document.charset){$06=wea_document.charset;$06=$06.toLowerCase();}else if(wea_document.characterSet)$06=wea_document.characterSet;if($06.indexOf("utf-8")!=-1)id=$L;else if($06.indexOf("gb2312")!=-1)id=$M;else if($06.indexOf("gbk")!=-1||$06.indexOf("gb18030")!=-1)id=$N;else if($06.indexOf("big5")!=-1)id=$O;id=$L;return id;};function weaExtractUname(){var $y="";var e;try{var $07=wea_document.body.innerHTML;var $s=new RegExp("<li><cite><a href=\"[^\"]*?\">([^<]*?)</a></cite>", "gi").exec($07);if($s==null)$s=new RegExp("<cite><a class=noborder href=\"space.php\?[^\"]*?\">([^<]*?)</a></cite>", "gi").exec($07);if($s==null)$s=new RegExp("<a class=loginName href=\"space.php\?[^\"]*?\">([^<]*?)</a>", "gi").exec($07);if($s==null)$s=new RegExp("<span class=s3 style=\"font-$08:$09\">([^<]*?)</span>","gi").exec($07);if($s==null)$s=new RegExp("<b>([^<]*?)</b>&nbsp;\&nbsp;[^<]*?<li class=m_li_top","gi").exec($07);var $0a="";if($s!=null){$0a=$s[1];}else{$0a=getWeaCookie("username");};if($0a!=""){$y=encodeURIComponent($0a);$y=$y.substring(0,256);}}catch(e){};if(typeof($y)=="undefined"||$y=="undefined")$y="";return $y;};function weaCnSubstr($y,c){return $y.replace(/([\u0391-\uffe5])/ig,'$1a').substring(0,c).replace(/([\u0391-\uffe5])a/ig,'$1')};function weaExtractPageTitle(){var e;var $0b="";try{if(wea_document.title){$0b=encodeURIComponent(wea_document.title);$0b=$0b.substring(0,512);}}catch(e){};if(typeof($0b)=="undefined"||$0b=="undefined")$0b="";return $0b;};function weaInVdook(){if(navigator.userAgent){var $D=navigator.userAgent.toLowerCase();if($D.indexOf("vdook")==0){return true;}};return false;};function weaNotifyInVdook(){alert("yes, in vdook");};function weaDoStats($0c){var e;if(wea_sid==null||wea_sid==0)return;var $0d=0;var $0e=wea_target.document.location.href;var $0f=wea_target.document.referrer;if(!weaUtil.IsValidUrl($0e)){return;};$0e=doStripIndexAlias($0e);$0f=doStripIndexAlias($0f);wea_current_url=$0e;wea_current_ref=$0f;var $0g=doCalLanguage();var $0h=doCalColor();var $0i=doCalScreen();var $0j=doCalOs();var $0k=doCalBrowser();var $0l=doCalDownload();var $0m=doCalAlexa();var $0n=weaGetPageCharset();var $0o=2;if(""==$0f)$0o=doCalHomepage($0e);var $0p=0;var $0q="";var $0r=0;var $0s=0;var $0t="0";var $0u="";var $0v=0;var $0w=0;var $0x=doCalCookieStatus();var $0y="";var $0z=doCalSearch($0f);if($0z){$0t=$0z.index;$0u=$0z.keyword;};if(""==$0u)$0t=0;var $0w=doCalCharset($0t,$0f);if($0t>0&&$0u!=""&&$0w==1){if($0u.match('([\u0391-\uffe5])')!=null){$0u=encodeURIComponent($0u);$0w=0;}};if(""==$0f)$0f="";if(typeof(wea_domain)=="undefined"||""==wea_domain)wea_cookie_domain=weaUtil.ExtractDomain($0e);else wea_cookie_domain=wea_domain;var $0A=0-$0B.getTimezoneOffset()/60;var $0C=wea_now_ts;var $0D="";var $0E="";var $0b=weaExtractPageTitle();var $0F="";$0e=escape($0e);$0f=escape($0f);var $0G="";var $0q=getWeaCookie("WEA_lu");var $0H=getWeaCookie("WEA_savedata");var $0I=getWeaCookie("WEA_ft");wea_pt=getWeaCookie("WEA_pt");var $0J=getWeaCookie("WEA_rc");var $0K=getWeaCookie("WEA_st");var $0L=getWeaCookie("WEA_lt");var $0M=getWeaCookie("WEA_ld");wea_pt=(wea_pt=="")?1:(parseInt(wea_pt)+1);$0J=($0J=="")?0:parseInt($0J);$0K=($0K=="")?0:parseInt($0K);$0L=($0L=="")?0:parseInt($0L);$0I=($0I=="")?0:parseInt($0I);var $0N=getWeaCookie("WEA_lo");var $0O=getWeaCookie("WEA_cs");$0N=($0N=="")?0:parseInt($0N);if($0H!=""){var $0P=eval("({"+$0H+"})");if(typeof($0P.pt)!="undefined")wea_pt=parseInt($0P.pt)+1;if(typeof($0P.rc)!="undefined")$0J=parseInt($0P.rc);if(typeof($0P.st)!="undefined")$0K=parseInt($0P.st);if(typeof($0P.lt)!="undefined")$0L=parseInt($0P.lt);if(typeof($0P.ft)!="undefined")$0I=parseInt($0P.ft);if(typeof($0P.ld)!="undefined")$0M=$0P.ld;};wea_uid=weaGetUid();$0E=weaExtractUname();if(""==$0M||$0M!=weaGetDate()){$0K=0;$0s=1;if($0M!=""){if($0J<=8){$0J++;}};$0M=weaGetDate();};var $0Q=wea_now_ts-$0L;if($0L!=0&&$0Q<=30*60&&$0Q>0){$0r=parseInt($0Q);$0K+=parseInt($0Q);}else{$0r=0;};if(0==$0I){$0I=wea_now_ts;$0G="";};$0q=escape($0q);setWeaCookie("WEA_lu",$0e);if($0N==0||(wea_now_ts-$0N)>5*60){$0v=1;setWeaCookie("WEA_lo",wea_now_ts);};if($0f!=""&&$0q!=""&&weaUtil.ExtractDomain($0f)==weaUtil.ExtractDomain($0q)){$0p=1;};$0L=wea_now_ts;$0H="pt:"+wea_pt.toString()+",rc:"+$0J.toString()+",st:"+$0K.toString()+",lt:"+$0L.toString()+",ft:"+$0I.toString()+",ld:"+$0M;setWeaCookie("WEA_savedata",$0H);weaDeleteWeaCookie("WEA_cs");$0I=wea_now_ts-$0I;try{if(1==wea_debug){var $0R=((navigator.language)?navigator.language:navigator.browserLanguage).toLowerCase();var $0S=parseInt(screen.colorDepth)||parseInt(screen.pixelDepth);if(0==$0h)$0y+=escape(",color="+$0S);if(0==$0i)$0y+=escape(",w="+screen.width+",h="+screen.height);if(0==$0g)$0y+=escape(",ln="+$0R);if(0==$0j||0==$0k)$0y+=escape(",agent="+navigator.userAgent);if($0y!="")$0y=wea_sid+":"+$0y;}}catch(e){};var $0T="http://"+$0c+"/s.html?_sid="+wea_sid;try{var i=0;$0T+="&_uid="+wea_uid+"&_url="+$0e+"&_ref="+$0f+"&_sc="+$0h+"&_ln="+$0g+"&_os="+$0j+"&_ss="+$0i+"&_bt="+$0k+"&_tz="+$0A+"&_se="+$0t+"&_kw="+$0u+"&_ns="+$0l+"&_ih="+$0o+"&_at="+$0m+"&_pt="+wea_pt+"&_ft="+$0I+"&_fu="+$0G+"&_if="+$0s+"&_ia="+$0v+"&_rc="+$0J+"&_il="+$0p+"&_lu="+$0q+"&_ls="+$0r+"&_st="+$0K+"&_ct="+$0C+"&_ip="+$0D+"&_cs="+$0O+"&_ch="+$0w+"&_ic="+$0x+"&_dm="+$0y+"&_debug="+wea_debug+"&_un="+$0E+"&_pc="+$0n+"&_tt="+$0b+"&_ht="+$0F+"&_edition="+wea_edition;var $0U=new Image(1,1);$0U.src=$0T;$0U.onload=function(){return;}}catch(e){};clearAllUselessCookie();};var $0V=35;var $0B=new Date();var wea_end_t=$0B.getTime();var wea_now_ts=parseInt($0B.getTime()/1000);var wea_str_expire=weaUtil.GetCookieExpire();var wea_current_url="";var wea_current_ref="";var wea_uid=0;var wea_debug=1;var wea_cookie_domain="";var wea_document=this;var wea_target=weaGetTarget();var wea_edition="43";var wea_pt=0;var $0W="";if(!weaInVdook()){weaDoStats(wea_log_service);};function getObjectLink($0X){var $0Y="";if(typeof($0X)=="object"&&$0X.tagName){var $0Z=$0X.tagName.toLowerCase();if($0Z=="input")return "input";if($0Z=="a"){$0Y=$0X.href;$0Y=$0Y.toLowerCase();{return $0Y;}}};return $0Y;};function weaCatchClick(e){var $0v=0;var c;var element;var $10;try{var $11=0;if(wea_target.window.event){e=wea_target.window.event;c=e.button;element=e.srcElement;}else{c=e.which;element=null;};var $12=0;if(c===0&&element!=null&&element.tagName.toLowerCase()=='iframe'){$12=1;};if(c!=1&&$12==0){weaDebugWin('warning: only left button('+c+')');return true;};weaDebugWin('clicking...');if(element!=null&&element.tagName.toLowerCase()=='iframe'){if(element.sourceIndex==clickLastIframe){weaDebugWin('warning: same iframe');return true;};clickLastIframe=element.sourceIndex;}else{clickLastIframe=-1;};var x=e.clientX;var y=e.clientY;var w=$0W.clientWidth!=undefined?$0W.clientWidth:wea_target.window.innerWidth;var h=$0W.clientHeight!=undefined?$0W.clientHeight:wea_target.window.innerHeight;var $13=wea_target.window.pageXOffset==undefined?$0W.scrollLeft:wea_target.window.pageXOffset;var $14=wea_target.window.pageYOffset==undefined?$0W.scrollTop:wea_target.window.pageYOffset;if(e!=null&&$12==0){var $15=document.all&&document.getElementById;var $0X=$15?e.srcElement:e.target;var i=1;var $16=3;while(clickUrl==""){if(typeof($0X)=="object"){clickUrl=getObjectLink($0X);};if($0X.parentElement)$0X=$0X.parentElement;else if($0X.parentNode)$0X=$0X.parentNode;if(i++>=$16)break;};if(clickUrl==""){weaDebugWin('warning: only link accepted');return true;}};if(x>w||y>h){weaDebugWin('warning: out of document');return true;};var $17=new Date();if($17.getTime()-clickTime<1000){weaDebugWin('warning: must > 1s between double clicks');return true;};clickUrl=doStripIndexAlias(clickUrl);if(weaUtil.ExtractDomain(clickUrl)==weaUtil.ExtractDomain(wea_current_url)){weaDebugWin('warning: set on next page');setWeaCookie("WEA_cs",''+(x+$13)+','+(y+$14)+','+w+','+clickBrowser+'');return true;};clickTime=$17.getTime();if(typeof(wea_domain)=="undefined"||""==wea_domain)wea_cookie_domain=weaUtil.ExtractDomain(wea_current_url);else wea_cookie_domain=wea_domain;var $0N=getWeaCookie("WEA_lo");$0N=($0N=="")?0:parseInt($0N);var $18=parseInt(clickTime/1000);if($0N==0||($18-$0N)>5*60){document.cookie="WEA_lo="+escape($18)+";path=/;domain="+wea_cookie_domain+";expires="+wea_str_expire;$0v=1;};if(!weaUtil.IsValidUrl(clickUrl)){clickUrl="";};$19='_sid='+wea_sid+'&_uid='+wea_uid+'&_ct='+wea_now_ts+'&_cs='+(x+$13)+','+(y+$14)+','+w+','+clickBrowser+'&_ref='+escape(wea_current_ref)+"&_url="+escape(wea_current_url)+"&_ia="+$0v+"&_outurl="+escape(clickUrl);weaDebugWin('ready');var $1a=false;if(clickServer.substring(0,4)!='http'){};if($1a==false){if(clickDebug==true){weaDebugWin('x = '+(x+$13)+', y = '+(y+$14)+', url = '+wea_current_url+', last_online = '+$0N+", ia = "+$0v+", outurl="+clickUrl);}else{var $1b=new Image();$1b.src=clickServer+'?'+$19;}}}catch($10){weaDebugWin('Error(Javascript error): '+$10.message);};clickUrl="";return true;};function weaDebugWin($y){if(clickDebug==true){document.getElementById('weaDebugSpan').innerHTML=$y;document.getElementById('weaDebugDiv').style.display='block';}};function weaGetTarget(){var $1c=this;var $10;try{if($0d==1||top!=self){$1c=top;}}catch($10){$1c=top;};try{wea_document=$1c.document;var $1d=wea_document.location;}catch($10){$1c=this;wea_document=$1c.document;};return $1c;};function weaInitClick(){var e;if(clickServer==''){return false;};if(weaInVdook()){return false;};if(clickDebug==true){document.body.innerHTML=document.body.innerHTML+'<div id="weaDebugDiv"><span id="weaDebugSpan"></span></div>';};var $1e=wea_document;try{if($1e.addEventListener){$1e.addEventListener('mousedown',weaCatchClick,false);}else if($1e.attachEvent){$1e.attachEvent('onmousedown',weaCatchClick);};var $1f=$1e.getElementsByTagName('iframe');for(i=0;i<$1f.length;i++){if($1e.addEventListener){$1f[i].addEventListener('focus',weaCatchClick,false);}else if($1e.attachEvent){$1f[i].attachEvent('onfocus',weaCatchClick);}}}catch(e){};$0W=$1e.documentElement!=undefined&&$1e.documentElement.clientHeight!=0?$1e.documentElement:$1e.body;var b=navigator.userAgent!=undefined?navigator.userAgent.toLowerCase().replace(/-/g,''):'';if(b.match(/msie/))clickBrowser=1;else if(b.match(/firefox/))clickBrowser=2;weaDebugWin('Debug:<br />server = '+clickServer+'<br />browser = '+clickBrowser);};var clickServer="http://"+wea_log_service+"/c.html";var clickTime=0;var clickLastIframe=-1;var clickBrowser=0;var clickDebug=(window.location.href.search(/vd_heatmap_debug/)!=-1);var clickUrl="";weaInitClick();


