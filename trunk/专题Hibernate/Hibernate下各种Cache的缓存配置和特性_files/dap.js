
var _daprr=new Array('http://rad.msn.com/ADSAdClient31.dll?GetSAd=','http://a.rad.msn.com/ADSAdClient31.dll?GetSAd=', 'http://b.rad.msn.com/ADSAdClient31.dll?GetSAd=');var _daprs=0;if(location.hostname.toLowerCase().indexOf('.live.com')!=-1)
{_daprr=new Array('http://rad.live.com/ADSAdClient31.dll?GetSAd=','http://a.rad.live.com/ADSAdClient31.dll?GetSAd=', 'http://b.rad.live.com/ADSAdClient31.dll?GetSAd=');}
var _daplp='http://ads1.msn.com/library';var acbMinWdth=160;var acbAdBarH=22;var acbDwnLdSt=false;var DPJS_BSC=0;var DPJS_ACB=1;var DPJS_4TH=2;var DPJS_ADV=4;function dap(qs,fw,fh,ob)
{var rs=_daprr[_daprs++];if(_daprs>=_daprr.length)_daprs=0;var dapIfs="";if(typeof(ob)!='undefined')
{ob=true;if(rs.length>0)
{rs+='&DPJS='+(DPJS_BSC+DPJS_4TH);}}
else
{ob=false;if(rs.length>0)
{rs+='&DPJS='+DPJS_BSC;}}
if(_dapUtils.is_ie5up&&_dapUtils.is_win&&!ob)
{dapIfs='dapIf'+(parseInt(parent.frames.length)+1);document.write('<iframe id="'+dapIfs+'" src="about:blank" width="'+fw+'" height="'+fh+'" frameborder="0" scrolling="no"></iframe>');document.frames[dapIfs].document.open("text/html","replace");document.frames[dapIfs].document.write('<html><head><title>Advertisement</title></head><body id="'+dapIfs+'" leftmargin="0" topmargin="0"><scr'+'ipt type="text/javascript">var inDapIF=true;</scr'+'ipt><scr'+'ipt type="text/javascript" src="'+rs+qs+'" onreadystatechange="startTimer();"></scr'+'ipt><scr'+'ipt type="text/javascript">function startTimer(){if (event.srcElement.readyState == "complete") {window.setTimeout("document.close();", 2000);}}</scr'+'ipt></body></html>');}
else
{document.write('<scr'+'ipt src="'+rs+qs+'" type="text/javascript" language="JavaScript"></scr'+'ipt>');}}
function verifyDapResize(idx)
{if(!adCont[idx].resizeCalled&&adCont[idx].acbObj.enabled)
{dap_Resize(adCont[idx].ifrmid,adCont[idx].w,adCont[idx].h);}}
function dap_Resize(fid,fw,fh)
{document.getElementById(fid).width=fw;document.getElementById(fid).height=fh;if(fw>0&&fh>0)
{acbAdResize(fid,fw,fh);}}
function dapOAF(qs,oa,fw,fh)
{dap(qs,fw,fh);}
_dapUtilClass=function()
{var ua=navigator.userAgent.toLowerCase();var av=navigator.appVersion.toLowerCase();this.minorVer=parseFloat(av);this.majorVer=parseInt(this.minorVer);this.is_opera=(ua.indexOf("opera")!=-1);this.is_mac=(ua.indexOf("mac")!=-1);this.is_ff=(ua.indexOf("firefox")!=-1);var iePos=av.indexOf('msie');if(iePos!=-1)
{if(this.is_mac)
{var iePos=ua.indexOf('msie');this.minorVer=parseFloat(ua.substring(iePos+5,ua.indexOf(';',iePos)));}
else
{this.minorVer=parseFloat(av.substring(iePos+5,av.indexOf(';',iePos)));}
this.majorVer=parseInt(this.minorVer);}
this.is_ie=((iePos!=-1)&&(!this.is_opera));this.is_ie3=(this.is_ie&&(this.majorVer<4));this.is_ie4=(this.is_ie&&this.majorVer==4);this.is_ie4up=(this.is_ie&&this.minorVer>=4);this.is_ie5=(this.is_ie&&this.majorVer==5);this.is_ie5up=(this.is_ie&&this.minorVer>=5);this.is_ie5_5=(this.is_ie&&(ua.indexOf("msie 5.5")!=-1));this.is_ie5_5up=(this.is_ie&&this.minorVer>=5.5);this.is_ie6=(this.is_ie&&this.majorVer==6);this.is_ie6up=(this.is_ie&&this.minorVer>=6);this.is_webtv=(ua.indexOf("webtv")!=-1);this.is_msn=(av.indexOf("msn")>=0);this.is_win=((ua.indexOf("win")!=-1)||(ua.indexOf("16bit")!=-1));this.is_mac=(ua.indexOf("mac")!=-1);if(this.is_mac){this.is_win=!this.is_mac;}
if(this.is_ff)
{this.ffPos=ua.indexOf("firefox");if(ua.length>this.ffPos+8)
{this.majorVer=parseInt(ua.substring(this.ffPos+8));}
if(ua.length>this.ffPos+10)
{this.minorVer=parseInt(ua.substring(this.ffPos+10));}
this.is_ff1_5up=(this.is_ff&&((this.majorVer>=1&&this.minorVer>=5)||(this.majorVer>=2)));this.is_ff_closeIfrm=this.is_ff1_5up&&this.majorVer<3;}
this.has_Flash=false;this.FlashVer=0;this.detectFlash=function()
{if(this.is_win&&this.is_ie4up)
{var dynaFrame='<iframe id="flashDetect" src="about:blank" width="1" height="1" frameborder="0" scrolling="no" style="display:none;"></iframe>';document.body.insertAdjacentHTML("afterBegin",dynaFrame);winObject=window["flashDetect"];docObject=winObject.document;top.isFlashVersion=0;top.isFlash=false;docObject.write('<SCR'+'IPT LANGUAGE=VBScript\> \n');docObject.write('Dim hasPlayer, playerversion \n');docObject.write('playerversion = 10 \n');docObject.write('Do While playerversion > 0 \n');docObject.write('On Error Resume Next \n');docObject.write('hasPlayer = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & playerversion))) \n');docObject.write('If hasPlayer = true Then Exit Do \n');docObject.write('playerversion = playerversion - 1 \n');docObject.write('Loop \n');docObject.write('top.isFlashVersion = playerversion \n');docObject.write('top.isFlash = hasPlayer \n');docObject.write('</SCR'+'IPT\>');docObject.close();this.has_Flash=top.isFlash;this.FlashVer=top.isFlashVersion;document.all["flashDetect"].removeNode(true);}}
this.hasCookie=function(cookieName)
{var bHasCookie=false,sCookie=document.cookie,aCookie=sCookie.split(";");for(var i=0;i<aCookie.length;i++)
{while(aCookie[i].substr(0,1)==' ')
{aCookie[i]=aCookie[i].substr(1);}
if(aCookie[i].indexOf(cookieName+'=')==0)
{bHasCookie=true;break;}}
return bHasCookie;}
this.rendMode=function()
{var m=document.compatMode;if(m)
{if(m=="BackCompat")
{return"Q";}
else if(m=="CSS1Compat")
{return"S";}}
return"U";}
this.getCurrentStyle=function(e)
{if(window.getComputedStyle)
{if(window.getComputedStyle(e,null))
{return window.getComputedStyle(e,null);}
else
{return document.defaultView.getComputedStyle(e,null);}}
else
{return e.currentStyle;}}
this.brLanguage="";if(this.is_ie5up)
{this.brLanguage=navigator.browserLanguage;}
else
{this.brLanguage=navigator.language;}
this.acbEvtH=false;}
var _dapUtils=new _dapUtilClass();var adCont=new Array();var dapAd=new Object();dapAd=function(qs,divid,fid,fw,fh,iA,adid,th,wc,acbO)
{this.qs=qs;this.divid=divid;this.ifrmid=fid;this.w=fw;this.h=fh;this.isActive=iA;this.adid=adid;this.threshold=th;this.wc=wc;this.acbObj=acbO;this.documentClosed=false;this.resizeCalled=false;}
var AdControlBar=new Object();AdControlBar=function(enabled)
{this.enabled=enabled;this.shAcbLbl=false;this.fbFmShwn=false;this.fbSbmted=false;this.G=null;this.nS=null;this.pid=null;this.fn=null;this.mX=-1;this.xY=-1;this.noacb=false;this.lblCls=false;this.winCls=false;}
var eventType=new function()
{this.click=1;};var eventPriority=new function()
{this.special=2;this.regular=1;};var dapMgr=new function()
{this.threshold=eventType.click;this.MAX_AD_NUM=100;this.dtRefresh=new Date().getTime();this.REFESH_ELAPSE=2000;this.MAX_ITR_FF=5;this.TIME_EACH_ITR=2000;this.renderAd=function(divid,qs,fw,fh)
{var idx=this.getAdItemIndex(divid);if(idx>-1)
{adCont[idx].qs=qs;adCont[idx].divid=divid;adCont[idx].w=fw;adCont[idx].h=fh;}
else
{if(adCont.length<this.MAX_AD_NUM)
{var aO=new dapAd(qs,divid,'dapIfM'+adCont.length,fw,fh,false,-1,this.threshold,0,new AdControlBar(true));if(_dapUtils.is_ie5)
{adCont[adCont.length]=aO;}
else
{adCont.push(aO);}}
else
{return;}
idx=adCont.length-1;}
this.displayAd(idx);}
this.enableACB=function(divid,acb)
{var idx=this.getAdItemIndex(divid);if(idx>-1)
{adCont[idx].acb=acb;}
else
{if(adCont.length<this.MAX_AD_NUM)
{var aO=new dapAd("",divid,'dapIfM'+adCont.length,0,0,false,-1,this.threshold,0,new AdControlBar(acb));if(_dapUtils.is_ie5)
{adCont[adCont.length]=aO;}
else
{adCont.push(aO);}}}}
this.getAdItemIndex=function(divid)
{var i;for(i=0;i<adCont.length;i++)
{if(adCont[i].divid==divid)
{return i;}}}
this.displayAd=function(idx)
{var rs=_daprr[_daprs++];if(_daprs>=_daprr.length)
{_daprs=0;}
var elm=document.getElementById(adCont[idx].divid);if(!elm)
{return;}
if(!adCont[idx].qs||adCont[idx].qs.length==0)
{return;}
if(adCont[idx].isActive)
{return;}
if(adCont[idx].acbObj!=null&&adCont[idx].acbObj.fbFmShwn)
{return;}
for(var i=(elm.childNodes.length-1);i>=0;i--)
{var fChd=elm.childNodes[i];if(_dapUtils.is_ff1_5up&&(fChd.id==adCont[idx].ifrmid))
{if(fChd.contentDocument.body)
{while(fChd.contentDocument.body.firstChild)
{fChd.contentDocument.body.removeChild(fChd.contentDocument.body.firstChild);}}
fChd.id=null;fChd.name=null;fChd.style.display='none';fChd=null;}
else
{if(fChd.nodeName=="IFRAME"&&!_dapUtils.is_ie5_5)
{fChd.contentWindow.document.location.replace("about:blank");}
elm.removeChild(fChd);if(_dapUtils.is_ie5up)
{fChd.removeNode(true);}
else
{fChd=null;}}}
var elmCS=_dapUtils.getCurrentStyle(elm);if(elmCS)
{var elmStyle=elmCS.display;if(elmStyle=="none"||elmStyle=="hidden")
{return;}}
if((_dapUtils.is_ie5_5up||_dapUtils.is_ff1_5up)&&_dapUtils.is_win)
{var dapIfs=adCont[idx].ifrmid;var ifrm=document.createElement("IFRAME");ifrm.id=dapIfs;ifrm.name=dapIfs;ifrm.src="about:blank";ifrm.width=adCont[idx].w;ifrm.height=adCont[idx].h;ifrm.scrolling="no";ifrm.frameBorder="0";ifrm.allowTransparency=true;elm.insertBefore(ifrm,elm.firstChild);if(rs.length>0)
{if(adCont[idx].acbObj.enabled)
{rs+='&DPJS='+(DPJS_ADV+DPJS_ACB);}
else
{rs+='&DPJS='+DPJS_ADV;}}
var str=this.getDapOutput(rs+adCont[idx].qs,dapIfs,idx);if(_dapUtils.is_ie5_5up)
{ifrm.src="javascript:void(document.write('"+str+"'));";}
else
{ifrm.contentDocument.write(str);ifrm.contentDocument.onload=verifyDapResize(idx);if(_dapUtils.is_ff_closeIfrm)
{window.setTimeout("checkIFrameClosed("+idx+",1)",this.TIME_EACH_ITR);}
else
{ifrm.contentDocument.close();}}
if(adCont[idx].acbObj.enabled)
{initACB(adCont[idx].divid,idx);}}
else
{if(rs.length>0)
{rs+='&DPJS='+DPJS_ADV;}
var _dapdownlevel=true;if(parent.frames)
{var dapIfs=adCont[idx].ifrmid;elm.innerHTML+='<iframe id="'+dapIfs+'" src="about:blank" width="'+adCont[idx].w+'" height="'+adCont[idx].h+'" frameborder="0" scrolling="no"></iframe>';var doc;if(document.frames)
{if(document.frames[dapIfs])
{doc=document.frames[dapIfs].document;}}
else
{if(document.getElementById(dapIfs))
{doc=document.getElementById(dapIfs).contentDocument;}}
if(doc)
{_dapdownlevel=false;doc.open("text/html","replace");doc.write(this.getDapOutput(rs+adCont[idx].qs,dapIfs,idx));if(_dapUtils.is_ff_closeIfrm)
{window.setTimeout("checkIFrameClosed("+idx+",1)",this.TIME_EACH_ITR);}
else if(!_dapUtils.is_ie)
{doc.close();}}}
if(_dapdownlevel)
{document.write('<scr'+'ipt src="'+rs+adCont[idx].qs+'" type="text/javascript" language="JavaScript"></scr'+'ipt>');adCont[idx].ifrmid=null;}}}
this.getDapOutput=function(rs,dapIfs,idx)
{var s='<html><head><title>Advertisement</title></head><body id="'+dapIfs+'" leftmargin="0" topmargin="0" style="background-color:transparent"><scr'+'ipt type="text/javascript">var inDapIF=true; var inDapMgrIf=true;';if(document.domain&&location.hostname!=document.domain)
{s+='document.domain="'+document.domain+'";';}
if(_dapUtils.is_ff_closeIfrm)
{s+='var fnPtr=document.close;document.close=function(){parent.adCont['+idx+'].documentClosed = true;document.close=fnPtr};';}
s+='</scr'+'ipt><scr'+'ipt type="text/javascript"  src="'+rs+'" onreadystatechange="startTimer();"></scr'+'ipt><scr'+'ipt type="text/javascript">function startTimer()'+'{if (event.srcElement.readyState == "complete") {parent.verifyDapResize('+idx+');window.setTimeout("document.close();", 2000);}}</scr'+'ipt></body></html>';return s;}
this.trackEvent=function(evtType,evtPr)
{var i;var isRef;if(!evtPr)
{evtPr=eventPriority.regular;}
for(i=0,isRef=false;i<adCont.length;i++)
{adCont[i].wc+=(evtType*evtPr);var tElp=(new Date()).getTime()-this.dtRefresh;if((adCont[i].wc>=adCont[i].threshold)&&(tElp>this.REFESH_ELAPSE))
{adCont[i].wc=0;if(adCont[i].threshold>-1&&adCont[i].ifrmid!=null)
{this.displayAd(i);isRef=true;if(adCont[i].acbObj.enabled&&adCont[i].acbObj.fbSbmted)
{adCont[i].acbObj.fbSbmted=false;}}}}
if(isRef)
{this.dtRefresh=(new Date()).getTime();}}};function checkIFrameClosed(idx,iterations)
{var ifrm=document.getElementById(adCont[idx].ifrmid);if(ifrm)
{if(iterations>=dapMgr.MAX_ITR_FF&&!adCont[idx].documentClosed)
{ifrm.contentDocument.close();}
if(adCont[idx].documentClosed)
{try
{ifrm.contentDocument.close();}
catch(e){}}
else
{window.setTimeout("checkIFrameClosed("+idx+","+(iterations+1)+")",dapMgr.TIME_EACH_ITR);}}}
function acbAdResize(df,w,h)
{for(var i=0;i<adCont.length;i++)
{if(adCont[i].ifrmid==df)
{if(w<acbMinWdth)
{adCont[i].acbObj.noacb=true;if(_dapUtils.acbEvtH)
{_acb.removeACBLabel(i);}}
else
{if(_dapUtils.acbEvtH)
{_acb.showACBLabel(i);}}
adCont[i].w=w;adCont[i].h=h;var o=document.getElementById(adCont[i].divid);if(o)
{o.style.width=w+"px";if(_dapUtils.is_ff1_5up&&_dapUtils.rendMode()=="S"&&h>1)
{var dh=h;if(!adCont[i].acbObj.noacb&&adCont[i].acbObj.enabled)
{dh+=acbAdBarH;}
o.style.height=dh+"px";}}
var ol=document.getElementById("acbLblfrm"+i);if(ol)
{ol.style.width=w+"px";}
adCont[i].resizeCalled=true;return;}}}
function initACB(divid,Id)
{if(!_dapUtils.acbEvtH)
{if(!acbDwnLdSt)
{acbDwnLdSt=true;var d=document.createElement("SCRIPT");d.type="text/javascript";d.language="javascript";d.src=_daplp+"/ACB/acb.js";document.body.insertBefore(d,document.body.firstChild);}}
else
{_acb.initACBLabel(Id);}}
function ShowAcb(idStr,adId,W,H,G,nS,pid,fn)
{var Id=acbGetIdFrmIdStr(idStr);if(Id>-1)
{adCont[Id].adid=adId;adCont[Id].w=W;var acbO=adCont[Id].acbObj;acbO.shAcbLbl=true;acbO.fn=fn;acbO.G=G;acbO.nS=nS;acbO.pid=pid;if(_dapUtils.acbEvtH)
{_acb.showACBLink(Id);}
return;}}
function acbGetIdFrmIdStr(s)
{var id=s.substring(6,s.length);if(id>=0)
{return id;}
else
{return-1;}}