
<!--
var mbl_recent_visitor='';
var mbl_current_visitor='';
if(typeof(mbl_jsserv_loaded)=='undefined'){var mbl_jsserv_loaded=true;function m_r_e(obj,w,f){if(window.addEventListener){obj.addEventListener(w,f,false);}else if(window.attachEvent){obj.attachEvent('on'+w,f);}else{}}
function m_rm_e(obj,w,f){if(window.addEventListener){obj.removeEventListener(w,f,false);}else if(window.attachEvent){obj.detachEvent('on'+w,f);}else{}}
function m_i_eu(url){if(!url){return false;}
if(typeof(url)!='string'){return true;}
url=url.toLowerCase();if(url.indexOf('https://')==0){url=url.substring(8);}
else if(url.indexOf('http://')==0){url=url.substring(7);}
else if(url.indexOf('ftp://')==0){url=url.substring(6);}
else if(url.indexOf('ssl://')==0){url=url.substring(6);}
else if(url.indexOf('mailto:')==0){return true;}
else{return false;}
if(url.indexOf('www.')==0){url=url.substring(4);}
var hn=document.location.hostname.toLowerCase();if(hn.indexOf('www.')==0){hn=hn.substring(4);}
if(hn==''){return true;}
if(url.indexOf(hn)!=0){return true;}
return false;}

var cs_mbl_isAOL_V8=false;if(navigator.userAgent.indexOf('AOL 8.0')>0){cs_mbl_isAOL_V8=true;}
var cs_mblID='2005120700343529',cs_url_trker='http://track.mybloglog.com/tr/urltrk.php',mbl_isi='N2009042220020191',mblco_on='',mblco_pu='',mblco_n='',mblco_e='',mblco_u='',mblco_c='';function m_p_c(obj,flag){for(var j=0;j<=5;j++){if(flag==1){if(obj&&obj.nodeName.toUpperCase()=='A'){return obj;}}if(flag==2){if(obj&&obj.nodeName.toUpperCase()!='BODY'&&obj.onclick){return obj;}}if(!obj.parentNode){return null;}obj=obj.parentNode;}
return null;}
function m_is_u(s){if(!s){return false;}
var regexp=/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i
return regexp.test(s);}
function m_trim(str,ch){while(str.substring(0,1)==ch){str=str.substring(1,str.length);}
while(str.substring(str.length-1,str.length)==ch){str=str.substring(0,str.length-1);}
return str;}
function m_ctx_c(e){var tg=null;if(e){tg=e.target;}else{tg=window.event.srcElement;}m_d_t(tg,false);}
function m_oclk(e){var tg=null;if(e){tg=e.target;}else{tg=window.event.srcElement;}m_d_t(tg,true);}
function m_d_t(tg,delay){var url=null,text=null,co_qstr='';try{if(tg){tgP=m_p_c(tg,1);if(tgP&&tgP.nodeName.toUpperCase()=='A'){tg=tgP;}
if(tg.nodeName.toUpperCase()=='A'){url=tg.href;if(tg.innerHTML){text=tg.innerHTML;}else if(tg.innerText){text=tg.innerText;}else if(tg.text){text=tg.text;}else{}}
else if(tg.nodeName.toUpperCase()=='AREA'){url=tg.href;text=tg.getAttribute('alt')?tg.getAttribute('alt'):tg.getAttribute('id');if(text==null||text==''){text=url;}}
else if(tg.nodeName.toUpperCase()=='INPUT'&&tg.type.toUpperCase()=='SUBMIT'){url=m_trim(tg.form.action,'/');url=m_trim(url,' ');text=tg.value;var co_name='',co_email='',co_url='',co_text='';if(url.toLowerCase().indexOf('comment')>0){if(tg.form.elements['author']){co_name=tg.form.elements['author'].value;}if(tg.form.elements['email']){co_email=tg.form.elements['email'].value;}if(tg.form.elements['url']){co_url=tg.form.elements['url'].value;}if(tg.form.elements['comment']){co_text=tg.form.elements['comment'].value;}else if(tg.form.elements['text']){co_text=tg.form.elements['text'].value;}else{}}
if(co_text!=''){co_qstr='&co_n='+escape(co_name)+'&co_e='+escape(co_email)+'&co_u='+escape(co_url)+'&co_c='+escape(co_text)+'&co_pt='+escape(document.title);}}else{}
if(url==null||text==null){return true;}
if(co_qstr!=''||m_i_eu(url)){if(cs_mbl_isAOL_V8&&(tg.target=='_new'||tg.target=='_blank')){return true;}url=escape(url);text=escape(text);m_trk(text,url,co_qstr,delay);}}}catch(err){}}
function m_trk(text,url,co_qstr,delay){try{var now=new Date();var trackURL=cs_url_trker+'?t=2&u='+url+'&te='+text+'&i='+cs_mblID+'&now='+now.valueOf()+'&d=20090422'+'&db='+'&v='+mbl_isi+co_qstr;var x=document.createElement('IMG');x.src=trackURL;if(delay){m_pse(900);}}catch(err){}}
function m_t_ol(){try{var now=new Date();var url=escape(document.location.href);var ext_referrer=document.referrer;if(ext_referrer!=''&&m_i_eu(ext_referrer)){var ext_referrer_para='&eref='+escape(ext_referrer);}else{var ext_referrer_para='';}
var trackURL=cs_url_trker+'?i='+cs_mblID+'&t=1&u='+url+'&a='+escape(navigator.userAgent)+'&d=20090422'+ext_referrer_para+'&db='+'&now='+now.valueOf()+'&v='+mbl_isi;var x=document.createElement('IMG');x.src=trackURL;var x2=document.createElement('IMG');x2.src='http://geo.yahoo.com/p?s=950300017&t='+now.valueOf();}catch(err){}
return true;}
function m_pse(numberMillis){var now=new Date();var exitTime=now.getTime()+numberMillis;while(true){now=new Date();if(now.getTime()>exitTime){return;}}}
var m_px=0,m_py=0,m_as_frms=new Array(),is_ie=document.all?true:false;function m_as_init(){var ad=document.getElementsByTagName('iframe');for(var i=0;i<ad.length;i++){if(ad[i].src.indexOf('googlesyndication.com')>-1){m_as_frms[m_as_frms.length]=new Array(ad[i],'http://pagead2.googlesyndication.com','Google AdSense');if(is_ie){ad[i].onfocus=m_trk_as;}}else if(ad[i].src.indexOf('ypn-js.overture.com')>-1){m_as_frms[m_as_frms.length]=new Array(ad[i],'http://ypn-js.overture.com','Yahoo! Publisher Network');if(is_ie){ad[i].onfocus=m_trk_as;}}else{}}
if(m_as_frms.length>0&&!is_ie){m_r_e(window,'beforeunload',m_as_ul);m_r_e(document,'mousemove',m_gm);}}
function m_gm(e){if(!e){var e=window.event;}
if(e.pageX||e.pageY){m_px=e.pageX;m_py=e.pageY;}
else if(e.clientX||e.clientY){m_px=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;m_py=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;}}
function m_gpos(obj){var curleft=curtop=0;if(obj.offsetParent){curleft=obj.offsetLeft;curtop=obj.offsetTop;while(obj=obj.offsetParent){curleft+=obj.offsetLeft;curtop+=obj.offsetTop;}}
return[curleft,curtop];}
function m_as_ul(e){try{var m_as_size='';for(var i=0;i<m_as_frms.length;i++){var ad_pos=m_gpos(m_as_frms[i][0]);var a_fx=(m_px>(ad_pos[0]-10)&&m_px<(parseInt(ad_pos[0])+parseInt(m_as_frms[i][0].width)+15));var a_fy=(m_py>(ad_pos[1]-10)&&m_py<(parseInt(ad_pos[1])+parseInt(m_as_frms[i][0].height)+10));if(a_fx&&a_fy){m_trk_as(m_as_frms[i][0]);break;}}}catch(err){}}
function m_trk_as(f){try{if(!f&&window.event.srcElement){var f=window.event.srcElement;}
for(var i=0;i<m_as_frms.length;i++){if(m_as_frms[i][0]==f){var a_si=m_as_frms[i][0].width+'x'+m_as_frms[i][0].height;m_trk(escape(m_as_frms[i][2]+' ('+a_si+')'),escape(m_as_frms[i][1]+'#'+a_si),'',true);break;}}
if(is_ie){window.focus();}}catch(err){}}
if(document.body){document.body.onclick=m_oclk;document.body.oncontextmenu=m_ctx_c;}else if(document){document.onclick=m_oclk;document.oncontextmenu=m_ctx_c;}else{}
m_t_ol();m_r_e(window,'load',m_as_init);
  
  if(typeof(mbl_links) == 'undefined'){var mbl_pop_div_node = null;
var mbl_pop_div_active = false;
var mbl_mouse_xcoord = 0;
var mbl_mouse_ycoord = 0;
var mbl_mouse_ycoord_prev = 0;
var mbl_mouse_going_up = false;
var mbl_popup_timeout = null;
var mbl_active_link_obj = null;
var mbl_last_popup_bottomY = 0;
var mbl_link_heights = new Array;
var mbl_body_border_top = 0;
var mbl_clicktagging_ord = 'n';

var mbl_links = new Array();
mbl_links['http://www.libfetion.cn/demoapp_download.html'] = '185';
mbl_links['http://ubuntucookbook.com/i/2007/06/ajaxchess.png'] = '101';
mbl_links['http://virtualbox.org/wiki/Downloads'] = '92';
mbl_links['http://linuxtoy.org/wp-comments-post.php'] = '76';
mbl_links['http://download.sopcast.com/download/sp-sc.tgz'] = '55';
mbl_links['http://huzuofeiwei.com/magazine/Fedora_10_Installation_Guide_Chinese.pdf'] = '50';
mbl_links['http://www.oracle.com/sun/index.html'] = '50';
mbl_links['http://www.gnome-look.org/content/show.php/Arc-Colors GDM-Walls?content=88305'] = '41';
mbl_links['http://e-guidedog.sourceforge.net/ekho.php'] = '33';
mbl_links['http://ajaxchess.pragmaticlogic.com'] = '31';
mbl_links['http://cookinglinux.cn/hacking-mitter-make-twitter-better.html'] = '30';
mbl_links['http://www.gnome-look.org/content/show.php/eGDM?content=92321'] = '29';
mbl_links['http://dl.getdropbox.com/u/464139/linux-fetion-0.9.3-1.fc10.i386.rpm'] = '28';
mbl_links['http://appdb.winehq.org/objectManager.php?sClass=version&iId=16008'] = '26';
mbl_links['http://ubuntucookbook.com/i/2007/01/virtualbox.png'] = '23';
mbl_links['http://www.linuxsir.org/bbs/thread320802.html'] = '22';
mbl_links['http://www.sun.com/third-party/global/oracle/index.jsp'] = '22';
mbl_links['http://www.real.com/linux'] = '21';
mbl_links['http://www.gnome-look.org/content/show.php/Wooden?content=90685'] = '21';
mbl_links['http://www.amix.dk/vim/vimrc.html'] = '20';
mbl_links['http://releases.ubuntu.com/releases/8.10'] = '19';
mbl_links['http://klik.atekon.de/liveusb'] = '18';
mbl_links['http://www.gentoo-cn.org/doc/zh_cn/handbook/handbook-x86.xml'] = '18';
mbl_links['http://www.amix.dk/vim/vimrc.txt'] = '16';
mbl_links['http://www.xpud.org/download.zh.html'] = '16';
mbl_links['http://forum.ubuntu.org.cn/viewtopic.php?t=41759'] = '15';
mbl_links['http://www2.ati.com/drivers/linux/ati-driver-installer-9-4-x86.x86_64.run'] = '15';
mbl_links['http://ubuntucookbook.com/i/2008/08/vi.png'] = '14';
mbl_links['http://ppa.launchpad.net/chromium-daily/ppa/ubuntu/pool/main/c/chromium-browser'] = '14';
mbl_links['http://www.superwarehouse.com/laptops.cfm'] = '13';
mbl_links['http://ubuntu.osgeeker.com'] = '13';
mbl_links['http://forum.ubuntu.org.cn/viewtopic.php?t=109855'] = '13';
mbl_links['http://www.ultraedit.com/products/uex.html'] = '13';
mbl_links['http://www.calcitapp.com/AVIAddXSubs.php'] = '12';
mbl_links['http://tomoe.sourceforge.jp/cgi-bin/en/blog/index.rb'] = '12';
mbl_links['http://releases.ubuntu.com/releases/8.04/ubuntu-8.04-desktop-i386.iso.torrent'] = '12';
mbl_links['http://www.linlap.com/wiki/Asus F9Dc'] = '12';
mbl_links['http://choqok.gnufolks.org/download'] = '12';
mbl_links['http://swan.iis.sinica.edu.tw/ossfcd/webpage/1_office/a2_FreeMind/video/freemind.html'] = '11';
mbl_links['http://ubuntuforums.org/showthread.php?t=1129187'] = '10';
mbl_links['http://doctormo.wordpress.com/2009/04/02/ubunchu-the-ubuntu-manga-is-now-in-english'] = '10';
mbl_links['http://code.google.com/p/fedora-zh/downloads/list'] = '9';
mbl_links['http://www.stani.be/python/spe/page_download'] = '9';
mbl_links['http://boinc.berkeley.edu'] = '9';
mbl_links['http://ubuntucookbook.com'] = '9';
mbl_links['http://e-guidedog.sourceforge.net'] = '9';
mbl_links['http://www.tldp.org/LDP/abs'] = '9';
mbl_links['http://www.gentoo-cn.org'] = '9';
mbl_links['https://help.ubuntu.com/community/EncryptedPrivateDirectory'] = '9';
mbl_links['http://twitter.com/clububuntu'] = '8';var mbl_atag=null;function mbl_number_ordinalize(n){if(isNaN(n)){return n;}
if(n>=11&&n<=19){return n+'th';}
else if(n%10==1){return n+'st';}
else if(n%10==2){return n+'nd';}
else if(n%10==3){return n+'rd';}
else{return n+'th';}}
function mbl_get_assoc_array_rank(arr,ind){var r=1;for(var i in arr){if(i==ind){return r;}
r++;}
return r;}
function mbl_getElemTop(e){var top=e.offsetTop;var pe=e.offsetParent;while(pe!=null){if(pe.offsetTop>0){top+=pe.offsetTop;}
pe=pe.offsetParent;}
return top;}
function mbl_getObjectStyle(obj,styleIE,styleMozilla){if(obj.currentStyle){return obj.currentStyle[styleIE];}else if(window.getComputedStyle){var compStyle=window.getComputedStyle(obj,'');return compStyle.getPropertyValue(styleMozilla);}
return'0';}
function mbl_onmousemove(e){if(!e){e=window.event;}
if(e){if(e.pageX||e.pageY){mbl_mouse_xcoord=e.pageX;mbl_mouse_ycoord=e.pageY;}else if(e.clientX){mbl_mouse_xcoord=e.clientX+document.documentElement.scrollLeft;mbl_mouse_ycoord=e.clientY+document.documentElement.scrollTop;}}
if(mbl_mouse_ycoord_prev<mbl_mouse_ycoord){mbl_mouse_going_up=false;}else{mbl_mouse_going_up=true;}
mbl_mouse_ycoord_prev=mbl_mouse_ycoord;return true;}
function mbl_lstats_getParentClickable(obj){for(var j=0;j<=5;j++){if(obj&&obj.nodeName.toUpperCase()=='A'){return obj;}
obj=obj.parentNode;}
return null;}
function mbl_ourlc(href){window.open('http://www.mybloglog.com/links/?url='+href);}
function mbl_recal_ypos(height,top){var cnt=mbl_link_heights.length;var repos=0;var x=1;var h=height;for(var i=0;i<cnt;i++){if(height<=mbl_link_heights[i]){break;}
if((height%mbl_link_heights[i])==0){x=height/mbl_link_heights[i];h=mbl_link_heights[i];break;}}
var line_pos=0;for(var i=0;i<x;i++){if(mbl_mouse_ycoord>(top+(i*h)+2)){line_pos=i;}}
return h*line_pos;}
function mbl_get_link_stats(atag){var href=m_trim(atag.href.toLowerCase(),'/');href=unescape(m_trim(href,' '));href=href.replace(/'/gi,'');var mbl_num_clicks=mbl_links[href];if(!mbl_num_clicks){var reg=/\+/gi;var hrefx=href.replace(reg,' ');mbl_num_clicks=mbl_links[hrefx];}
return mbl_num_clicks;}
function mbl_onmous(e){if(typeof(mbl_pop_div_node)=='undefined'||mbl_pop_div_node==null){return true;}
var atag=null
if(e&&e.target){atag=e.target;}
else{atag=window.event.srcElement;}
atag=mbl_lstats_getParentClickable(atag);if(!atag||!atag.href){return true;}
if(atag==mbl_active_link_obj&&mbl_pop_div_active){return true;}
var href=m_trim(atag.href.toLowerCase(),'/');href=unescape(m_trim(href,' '));var click_text;if(mbl_clicktagging_ord!='n'){click_text=mbl_number_ordinalize(mbl_get_assoc_array_rank(mbl_links,href));if(click_text=='1st'){click_text='Most Popular Outgoing Link';}else{click_text=click_text+' Most Popular Outgoing Link';}}else{var mbl_num_clicks=mbl_get_link_stats(atag);if(mbl_num_clicks>1){var clickText=' Clicks ';}
else{var clickText=' Click ';}
click_text=mbl_num_clicks+clickText+'Today (updated hourly)';}
mbl_pop_div_node.innerHTML='<div onclick="mbl_ourlc(\''+escape(href)+'\');" style="width:180px;text-align:center;background-color:#eeeeee;font-size:11px;display:block;border:1px solid #336699;color:#336699;text-decoration:none;font-family:arial,sans-serif;margin:0px;padding:0px;cursor:hand;cursor:pointer;"><div style="border:1px solid #336699;font-weight:bold;background-color:#336699;color:#eeeeee;display:none;text-align:center;width:178px;">MyBlogLog ClickTagging</div><div style="margin:0px;padding:2px 0px;text-decoration:underline;text-align:center;width:178px;">'+click_text+'</div></div>';mbl_pop_div_node.style.display='block';var top=parseInt(mbl_getElemTop(atag));var height=parseInt(mbl_pop_div_node.offsetHeight);var width=parseInt(atag.offsetWidth);var repos=0;repos=mbl_recal_ypos(parseInt(atag.offsetHeight),top);mbl_pop_div_node.style.left=mbl_mouse_xcoord+'px';mbl_pop_div_node.style.top=top-height+repos+3+mbl_body_border_top+'px';mbl_pop_div_active=true;if(atag&&atag.href){window.status=atag.href;}
mbl_active_link_obj=atag;mbl_last_popup_bottomY=top+repos+3+mbl_body_border_top;return true;}
function mbl_onmousout(e){mbl_pop_div_active=false;mbl_popup_timeout=window.setTimeout('mbl_onmousout_sub()',100);return true;}
function mbl_onmousout_sub(){if(mbl_pop_div_node&&!mbl_pop_div_active){mbl_pop_div_node.style.display='none';window.status='';}
return true;}
function mbl_onmous2(e){mbl_pop_div_active=true;mbl_pop_div_node.firstChild.firstChild.style.display='block';mbl_pop_div_node.style.top=mbl_last_popup_bottomY-parseInt(mbl_pop_div_node.offsetHeight)+'px';return true;}
function mbl_sort_insert(val){if(val<5){return true;}
var cnt=mbl_link_heights.length;var mbl_temp_idx=-1;if(cnt==0){mbl_link_heights[0]=val;return true;}
for(var i=0;i<cnt;i++){if(mbl_link_heights[i]==val||(val%mbl_link_heights[i])==0){return true;}
if(val<mbl_link_heights[i]){mbl_temp_idx=i;break;}}
if(mbl_temp_idx==-1){mbl_link_heights[cnt]=val;return true;}
for(var i=cnt;i>mbl_temp_idx;i--){mbl_link_heights[i]=mbl_link_heights[i-1];}
mbl_link_heights[mbl_temp_idx]=val;}
function mbl_processlinknodes(){try{if(typeof(mbl_links)=='undefined'){return true;}
var eventFlag=0;var body=document.getElementsByTagName('body')[0];if(!body){return true;}
var div=document.createElement('DIV');div.style.display='none';div.style.zIndex='99';div.style.position='absolute';div.setAttribute('id','mbl_div_id_2s29et301');mbl_pop_div_node=div;m_r_e(mbl_pop_div_node,'mouseover',mbl_onmous2);m_r_e(mbl_pop_div_node,'mouseout',mbl_onmousout);body.appendChild(div);var numTest=parseInt(mbl_getObjectStyle(body,'borderTopWidth','border-top-width'));if(!isNaN(numTest)){mbl_body_border_top=numTest;}
var nodes=document.getElementsByTagName('A');for(var i=0;i<nodes.length;i++){if(nodes[i].href&&nodes[i].parentNode&&mbl_get_link_stats(nodes[i])){m_r_e(nodes[i],'mouseover',mbl_onmous);m_r_e(nodes[i],'mouseout',mbl_onmousout);mbl_sort_insert(parseInt(nodes[i].offsetHeight));}}}catch(err){return true;}
return true;}m_r_e(window,'load',mbl_processlinknodes);m_r_e(document,'mousemove',mbl_onmousemove);}}// --><!-- g1w1.mbl.sp1.yahoo.com uncompressed/chunked Wed Apr 22 20:02:01 PDT 2009 -->
