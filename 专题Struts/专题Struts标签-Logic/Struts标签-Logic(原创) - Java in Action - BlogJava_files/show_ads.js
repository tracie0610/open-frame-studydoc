(function(){
var g=document,h=navigator,j=window;function aa(){var a=g.cookie,c=Math.round((new Date).getTime()/1000),b=j.google_analytics_domain_name,d=typeof b=="undefined"?n("auto"):n(b),e=a.indexOf("__utma="+d+".")>-1,f=a.indexOf("__utmb="+d)>-1,k=a.indexOf("__utmc="+d)>-1,l,i={};if(e){l=a.split("__utma="+d+".")[1].split(";")[0].split(".");i.sid=f&&k?l[3]+"":j&&j.gaGlobal&&j.gaGlobal.sid?j.gaGlobal.sid:c+"";i.vid=l[0]+"."+l[1];i.from_cookie=true}else{i.sid=j&&j.gaGlobal&&j.gaGlobal.sid?j.gaGlobal.sid:c+"";
i.vid=j&&j.gaGlobal&&j.gaGlobal.vid?j.gaGlobal.vid:(r()^ba()&2147483647)+"."+c;i.from_cookie=false}i.dh=d;i.hid=j&&j.gaGlobal&&j.gaGlobal.hid?j.gaGlobal.hid:r();j.gaGlobal=i;return i}function r(){return Math.round(Math.random()*2147483647)}function ba(){var a=g.cookie?g.cookie:"",c=j.history.length,b,d,e=[h.appName,h.version,h.language?h.language:h.browserLanguage,h.platform,h.userAgent,h.javaEnabled()?1:0].join("");if(j.screen)e+=j.screen.width+"x"+j.screen.height+j.screen.colorDepth;else if(j.java){d=
java.awt.Toolkit.getDefaultToolkit().getScreenSize();e+=d.screen.width+"x"+d.screen.height}e+=a;e+=g.referrer?g.referrer:"";b=e.length;while(c>0)e+=c--^b++;return s(e)}function s(a){var c=1,b=0,d,e;if(!(a==undefined||a=="")){c=0;for(d=a.length-1;d>=0;d--){e=a.charCodeAt(d);c=(c<<6&268435455)+e+(e<<14);b=c&266338304;c=b!=0?c^b>>21:c}}return c}function n(a){if(!a||a==""||a=="none")return 1;if("auto"==a){a=g.domain;if("www."==a.substring(0,4))a=a.substring(4,a.length)}return s(a.toLowerCase())};var u={google_ad_channel:"channel",google_ad_host:"host",google_ad_host_channel:"h_ch",google_ad_host_tier_id:"ht_id",google_ad_region:"region",google_ad_section:"region",google_ad_type:"ad_type",google_adtest:"adtest",google_alternate_ad_url:"alternate_ad_url",google_alternate_color:"alt_color",google_bid:"bid",google_city:"gcs",google_color_bg:"color_bg",google_color_border:"color_border",google_color_line:"color_line",google_color_link:"color_link",google_color_text:"color_text",google_color_url:"color_url",
google_contents:"contents",google_country:"gl",google_cust_age:"cust_age",google_cust_ch:"cust_ch",google_cust_gender:"cust_gender",google_cust_id:"cust_id",google_cust_interests:"cust_interests",google_cust_job:"cust_job",google_cust_l:"cust_l",google_cust_lh:"cust_lh",google_cust_u_url:"cust_u_url",google_disable_video_autoplay:"disable_video_autoplay",google_ed:"ed",google_encoding:"oe",google_feedback:"feedback_link",google_flash_version:"flash",google_gl:"gl",google_hints:"hints",google_kw:"kw",
google_kw_type:"kw_type",google_language:"hl",google_referrer_url:"ref",google_region:"gr",google_reuse_colors:"reuse_colors",google_safe:"adsafe",google_targeting:"targeting",google_ui_features:"ui",google_video_doc_id:"video_doc_id",google_video_product_type:"video_product_type",google_page_url:"url"},v={google_ad_format:"format",google_ad_output:"output",google_ad_callback:"callback",google_ad_override:"google_ad_override",google_ad_slot:"slotname",google_analytics_uacct:"ga_wpids",google_correlator:"correlator",
google_cpa_choice:"cpa_choice",google_ctr_threshold:"ctr_t",google_image_size:"image_size",google_last_modified_time:"lmt",google_max_num_ads:"num_ads",google_max_radlink_len:"max_radlink_len",google_num_radlinks:"num_radlinks",google_num_radlinks_per_unit:"num_radlinks_per_unit",google_only_ads_with_video:"only_ads_with_video",google_page_location:"loc",google_rl_dest_url:"rl_dest_url",google_rl_filtering:"rl_filtering",google_rl_mode:"rl_mode",google_rt:"rt",google_skip:"skip"};function w(){}w.prototype.n=function(){};w.prototype.o=function(){};w.prototype.m=function(){};var x=null;function y(a){x&&x.n(a)}function z(a){x&&x.o(a)}function ca(a){x&&x.m(a)}function A(){this.b=this.k();this.e=false;if(!this.b){this.e=this.g();this.e||z("Browser does not allow cookies")}}A.prototype.d="__gads=";A.prototype.c="GoogleAdServingTest=";A.prototype.j=function(){return this.b};A.prototype.setCookieInfo=function(a){this.a=a._cookies_[0];if(this.a!=null){this.b=this.a._value_;this.l()}};
A.prototype.i=function(a){var c=(new Date).valueOf(),b=new Date;b.setTime(c+a);return b};A.prototype.h=function(a){if(this.b!=null||!this.e){y("Skipping fetch cookie call");return}var c="script",b=document.domain,d="http://partner.googleadservices.com/gampad/cookie.js?callback=_GA_googleCookieHelper.setCookieInfo&client="+B(a)+"&domain="+B(b);y("Issuing a fetch cookie call with <a href='"+d+"'>"+d+"</a>");document.write("<"+c+' src="'+d+'"></'+c+">")};A.prototype.g=function(){document.cookie=this.c+
"Good";var a=this.f(this.c),c=a=="Good";if(c){var b=this.i(-1);document.cookie=this.c+"; expires="+b.toGMTString()}return c};A.prototype.k=function(){var a=this.f(this.d);a!=null?y("Read first party cookie: "+a):z("No first party cookie found");return a};A.prototype.f=function(a){var c=document.cookie,b=c.indexOf(a),d=null;if(b!=-1){var e=b+a.length,f=c.indexOf(";",e);if(f==-1)f=c.length;d=c.substring(e,f)}return d};A.prototype.l=function(){if(this.a==null)z("Skipping cookie creation: no cookie info");
else if(this.b==null)ca("Skipping cookie creation: no cookie value");else{var a=new Date;a.setTime(1000*this.a._expires_);var c=this.a._domain_,b=this.d+this.b+"; expires="+a.toGMTString()+"; path="+this.a._path_+"; domain=."+c;document.cookie=b;y("Written cookie: "+b)}};function da(){if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=
0){var c=3,b=1;while(b)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+(c+1));c++}catch(d){b=null}return c.toString()}else if(ea("msie")&&!window.opera){var b=null;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(d){var c=0;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");c=6;b.AllowScriptAccess="always"}catch(d){if(c==6)return c.toString()}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(d){}}if(b!=null){var c=b.GetVariable("$version").split(" ")[1];
return c.replace(/,/g,".")}}return"0"};var fa=fa||{},C=this;var ga=function(a,c){var b=c.length;for(var d=0;d<b;d++){var e=b==1?c:c.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};var D,ha,ia,ja,ka,la,ma,na,oa,pa,E,qa=function(){var a=false,c=false,b=false,d=false,e=false,f=false,k=false,l=false,i=false,p="";if(C.navigator){var o=C.navigator,q=o.userAgent;a=q.indexOf("Opera")==0;c=!a&&q.indexOf("MSIE")!=-1;b=!a&&q.indexOf("WebKit")!=-1;i=b&&q.indexOf("Mobile")!=-1;d=!a&&!b&&o.product=="Gecko";e=d&&o.vendor=="Camino";var m,t;if(a)m=C.opera.version();else{if(d)t=/rv\:([^\);]+)(\)|;)/;else if(c)t=/MSIE\s+([^\);]+)(\)|;)/;else if(b)t=/WebKit\/(\S+)/;if(t){t.test(q);m=RegExp.$1}}p=
o.platform||"";f=p.indexOf("Mac")!=-1;k=p.indexOf("Win")!=-1;l=p.indexOf("Linux")!=-1}D=a;ha=c;ia=d;ja=e;ka=b;la=i;ma=m;na=p;oa=f;pa=k;E=l};qa();var ra=D;var sa=function(a){return typeof a=="string"?document.getElementById(a):a},F=sa;var G=function(a){return a.nodeType==9?a:a.ownerDocument||a.document};var ta=function(a,c){var b=G(a);if(b.defaultView&&b.defaultView.getComputedStyle){var d=b.defaultView.getComputedStyle(a,"");if(d)return d[c]}return null};var ua=function(a){var c=G(a),b="";if(c.createTextRange){var d=c.body.createTextRange();d.moveToElementText(a);b=d.queryCommandValue("FontName")}if(!b){b=ta(a,"fontFamily")||(a.currentStyle?a.currentStyle.fontFamily:null)||a.style.fontFamily;if(ra&&E)b=b.replace(/ \[[^\]]*\]/,"")}var e=b.split(",");if(e.length>1)b=e[0];return ga(b,"\"'")};var H={google:1,googlegroups:1,gmail:1,googlemail:1,orkut:1,googleimages:1,googleprint:1};function va(a){var c=a.google_page_location||a.google_page_url;if(!c)return false;c=c.toString();if(c.indexOf("http://")==0)c=c.substring(7,c.length);else if(c.indexOf("https://")==0)c=c.substring(8,c.length);var b=c.indexOf("/");if(b==-1)b=c.length;var d=c.substring(0,b),e=d.split("."),f=false;if(e.length>=3)f=e[e.length-3]in H;if(e.length>=2)f=f||e[e.length-2]in H;return f}function wa(a,c,b){if(a.google_new_domain_checked==
0){a.google_random_number=Math.random();if(a.google_random_number<b){var d="http://googleads.g.doubleclick.net/pagead/test_domain.js",e="script";c.write("<"+e+' src="'+d+'"></'+e+">");a.google_new_domain_checked=1}}}function xa(a){var c="http://googleads.g.doubleclick.net",b="http://pagead2.googlesyndication.com";if(!va(a)&&a.google_new_domain_enabled==1)return c;return b};function K(a){return a!=null?'"'+a+'"':'""'}function B(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function L(a,c){if(a&&c)window.google_ad_url+="&"+a+"="+c}function M(a){var c=window,b=u[a]||v[a]||null,d=c[a];L(b,d)}function N(a,c){c&&L(a,B(c))}function O(a){var c=window,b=u[a]||v[a]||null,d=c[a];N(b,d)}function P(a,c){var b=window,d=u[a]||v[a]||null,e=b[a];if(d&&e&&typeof e=="object")e=e[c%e.length];L(d,e)}function ya(a,c){var b=a.screen,d=navigator.javaEnabled(),
e=-c.getTimezoneOffset();if(b){L("u_h",b.height);L("u_w",b.width);L("u_ah",b.availHeight);L("u_aw",b.availWidth);L("u_cd",b.colorDepth)}L("u_tz",e);L("u_his",history.length);L("u_java",d);navigator.plugins&&L("u_nplug",navigator.plugins.length);navigator.mimeTypes&&L("u_nmime",navigator.mimeTypes.length)}function za(a){if(!a.google_enable_first_party_cookie)return;if(x==null)x=new w;if(a._GA_googleCookieHelper==null)a._GA_googleCookieHelper=new A;if(!a._google_cookie_fetched){a._google_cookie_fetched=
true;a._GA_googleCookieHelper.h(Q(a.google_ad_client))}}function Q(a){if(a){a=a.toLowerCase();if(a.substring(0,3)!="ca-")a="ca-"+a}return a}function Aa(a){if(a){a=a.toLowerCase();if(a.substring(0,9)!="dist-aff-")a="dist-aff-"+a}return a}function Ba(a,c,b,d){b=b.substring(0,2000);b=b.replace(/%\w?$/,"");var e="script",f=[];if((a.google_ad_output=="js"||a.google_ad_output=="json_html")&&(a.google_ad_request_done||a.google_radlink_request_done))f.push("<"+e+' language="JavaScript1.1" src='+K(b)+"></"+
e+">");else if(a.google_ad_output=="html"){if(a.name!="google_ads_frame"){d!=null&&f.push('<div id="'+d+'">');f.push('<iframe name="google_ads_frame" width='+K(a.google_ad_width)+" height="+K(a.google_ad_height)+" frameborder="+K(a.google_ad_frameborder)+" src="+K(b)+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe>');d!=null&&f.push("</div>")}}else a.google_ad_output=="textlink"&&f.push("<"+e+' language="JavaScript1.1" src='+K(b)+"></"+e+">");
a.google_companion_ad_div?Ca(a.google_companion_ad_div,c,f.join("")):c.write(f.join(""))}function Da(a){for(var c in u)a[c]=null;for(var c in v){if(c=="google_correlator")continue;a[c]=null}}function Ea(a){if(a.google_ad_format)return a.google_ad_format.indexOf("_0ads")>0;return a.google_ad_output!="html"&&a.google_num_radlinks>0}function R(a){return a&&a.indexOf("_sdo")!=-1}function Fa(a){var c=null,b=window,d=document,e=new Date,f=e.getTime(),k=b.google_ad_format,l=xa(b);if(b.google_cpa_choice!=
c){b.google_ad_url=l+"/cpa/ads?";b.google_ad_url+="client="+escape(Q(b.google_ad_client));b.google_ad_region="_google_cpa_region_";M("google_cpa_choice");if(typeof d.characterSet!="undefined")N("oe",d.characterSet);else typeof d.charset!="undefined"&&N("oe",d.charset)}else if(R(k)){b.google_ad_url=l+"/pagead/sdo?";b.google_ad_url+="client="+escape(Aa(b.google_ad_client))}else{b.google_ad_url=l+"/pagead/ads?";b.google_ad_url+="client="+escape(Q(b.google_ad_client))}M("google_ad_host");M("google_ad_host_tier_id");
var i=b.google_num_slots_by_client,p=b.google_num_slots_by_channel,o=b.google_prev_ad_formats_by_region,q=b.google_prev_ad_slotnames_by_region;if(b.google_ad_region==c&&b.google_ad_section!=c)b.google_ad_region=b.google_ad_section;var m=b.google_ad_region==c?"":b.google_ad_region;if(R(k)){b.google_num_sdo_slots=b.google_num_sdo_slots?b.google_num_sdo_slots+1:1;if(b.google_num_sdo_slots>4)return false}else if(Ea(b)){b.google_num_0ad_slots=b.google_num_0ad_slots?b.google_num_0ad_slots+1:1;if(b.google_num_0ad_slots>
3)return false}else if(b.google_cpa_choice==c){b.google_num_ad_slots=b.google_num_ad_slots?b.google_num_ad_slots+1:1;if(b.google_num_slots_to_rotate){o[m]=c;q[m]=c;if(b.google_num_slot_to_show==c)b.google_num_slot_to_show=f%b.google_num_slots_to_rotate+1;if(b.google_num_slot_to_show!=b.google_num_ad_slots)return false}else if(b.google_num_ad_slots>6&&m=="")return false}L("dt",e.getTime());M("google_language");b.google_country?M("google_country"):M("google_gl");M("google_region");O("google_city");
O("google_hints");M("google_safe");M("google_encoding");M("google_last_modified_time");O("google_alternate_ad_url");M("google_alternate_color");M("google_skip");M("google_targeting");var t=b.google_ad_client;if(i[t])i[t]+=1;else{i[t]=1;i.length+=1}if(o[m])if(!R(k)){N("prev_fmts",o[m].toLowerCase());i.length>1&&L("slot",i[t])}q[m]&&N("prev_slotnames",q[m].toLowerCase());if(k&&!b.google_ad_slot){N("format",k.toLowerCase());R(k)||(o[m]=o[m]?o[m]+","+k:k)}if(b.google_ad_slot)q[m]=q[m]?q[m]+","+b.google_ad_slot:
b.google_ad_slot;M("google_max_num_ads");L("output",b.google_ad_output);M("google_adtest");M("google_ad_callback");M("google_ad_slot");O("google_correlator");b.google_new_domain_checked==1&&b.google_new_domain_enabled==0&&L("dblk",1);if(b.google_ad_channel){O("google_ad_channel");var T="",U=b.google_ad_channel.split(/[+, ]/);for(var I=0;I<U.length;I++){var J=U[I];if(p[J])T+=J+"+";else p[J]=1}N("pv_ch",T)}if(b.google_ad_host_channel){O("google_ad_host_channel");var Ha=Ga(b.google_ad_host_channel,b.google_viewed_host_channels);
N("pv_h_ch",Ha)}b.google_enable_first_party_cookie&&N("cookie",b._GA_googleCookieHelper.j());O("google_page_url");P("google_color_bg",f);P("google_color_text",f);P("google_color_link",f);P("google_color_url",f);P("google_color_border",f);P("google_color_line",f);b.google_reuse_colors?L("reuse_colors",1):L("reuse_colors",0);M("google_kw_type");O("google_kw");O("google_contents");M("google_num_radlinks");M("google_max_radlink_len");M("google_rl_filtering");M("google_rl_mode");M("google_rt");O("google_rl_dest_url");
M("google_num_radlinks_per_unit");M("google_ad_type");M("google_image_size");M("google_ad_region");M("google_feedback");O("google_referrer_url");O("google_page_location");L("frm",b.google_iframing);M("google_bid");M("google_ctr_threshold");M("google_cust_age");M("google_cust_gender");M("google_cust_interests");M("google_cust_id");M("google_cust_job");M("google_cust_u_url");M("google_cust_l");M("google_cust_lh");M("google_cust_ch");M("google_ed");M("google_video_doc_id");M("google_video_product_type");
O("google_ui_features");O("google_only_ads_with_video");O("google_disable_video_autoplay");a&&N("ff",ua(a));if(b.top.location==d.location&&d.body){var V=d.body.scrollHeight,W=d.body.clientHeight;W&&V&&N("cc",Math.round(W*100/V))}aa();L("ga_vid",b.gaGlobal.vid);L("ga_sid",b.gaGlobal.sid);L("ga_hid",b.gaGlobal.hid);L("ga_fc",b.gaGlobal.from_cookie);O("google_analytics_uacct");M("google_ad_override");M("google_flash_version");ya(b,e);return true}function Ga(a,c){var b=a.split("|"),d=-1,e=[];for(var f=
0;f<b.length;f++){var k=b[f].split(/[+, ]/);c[f]||(c[f]={});var l="";for(var i=0;i<k.length;i++){var p=k[i];if(c[f][p])l+="+"+p;else c[f][p]=1}l=l.slice(1);e[f]=l;if(l!="")d=f}var o="";if(d>-1){for(var f=0;f<d;f++)o+=e[f]+"|";o+=e[d]}return o}function S(){var a=window,c=document;za(a);var b;if(Math.random()<0.01){var d="google_temp_span";if(!F(d)){c.write("<span id="+d+"></span>");b=F(d)}}var e=Fa(b);b&&(b&&b.parentNode?b.parentNode.removeChild(b):null);if(!e)return;Ba(a,c,a.google_ad_url,null);Da(a)}
function Ia(){S();return true}function Ja(a,c){var b=c.documentElement;if(a.top.location==c.location)return false;if(a.google_ad_width&&a.google_ad_height){var d=1,e=1;if(a.innerHeight){d=a.innerWidth;e=a.innerHeight}else if(b&&b.clientHeight){d=b.clientWidth;e=b.clientHeight}else if(c.body){d=c.body.clientWidth;e=c.body.clientHeight}if(e>2*a.google_ad_height||d>2*a.google_ad_width)return false}return true}function Ka(a){var c=window,b=null,d=c.onerror;c.onerror=a;if(c.google_ad_frameborder==b)c.google_ad_frameborder=
0;if(c.google_ad_output==b)c.google_ad_output="html";if(R(c.google_ad_format)){var e=c.google_ad_format.match(/^(\d+)x(\d+)_.*/);if(e){c.google_ad_width=parseInt(e[1],10);c.google_ad_height=parseInt(e[2],10);c.google_ad_output="html"}}if(c.google_ad_format==b&&c.google_ad_output=="html")c.google_ad_format=c.google_ad_width+"x"+c.google_ad_height;La(c,document);if(c.google_num_slots_by_channel==b)c.google_num_slots_by_channel=[];if(c.google_viewed_host_channels==b)c.google_viewed_host_channels=[];
if(c.google_num_slots_by_client==b)c.google_num_slots_by_client=[];if(c.google_prev_ad_formats_by_region==b)c.google_prev_ad_formats_by_region=[];if(c.google_prev_ad_slotnames_by_region==b)c.google_prev_ad_slotnames_by_region=[];if(c.google_correlator==b)c.google_correlator=(new Date).getTime();if(c.google_adslot_loaded==b)c.google_adslot_loaded={};if(c.google_adContentsBySlot==b)c.google_adContentsBySlot={};if(c.google_flash_version==b)c.google_flash_version=da();if(c.google_new_domain_checked==
b)c.google_new_domain_checked=0;if(c.google_new_domain_enabled==b)c.google_new_domain_enabled=0;c.onerror=d}function ea(a){if(a in X)return X[a];return X[a]=navigator.userAgent.toLowerCase().indexOf(a)!=-1}var X={};function Ma(a){var c={},b=a.split("?"),d=b[b.length-1].split("&");for(var e=0;e<d.length;e++){var f=d[e].split("=");if(f[0])try{c[f[0].toLowerCase()]=f.length>1?window.decodeURIComponent?decodeURIComponent(f[1].replace(/\+/g," ")):unescape(f[1]):""}catch(k){}}return c}function Na(){var a=
window,c=Ma(document.URL);if(c.google_ad_override){a.google_ad_override=c.google_ad_override;a.google_adtest="on"}}function Oa(a,c){for(var b in c)a["google_"+b]=c[b]}function Y(a,c){if(!c)return a.location;return a.referrer}function Pa(a,c){if(!c&&a.google_referrer_url==null)return"0";else if(c&&a.google_referrer_url==null)return"1";else if(!c&&a.google_referrer_url!=null)return"2";else if(c&&a.google_referrer_url!=null)return"3";return"4"}function Qa(a,c,b,d){a.page_url=Y(b,d);a.page_location=null}
function Ra(a,c,b,d){a.page_url=c.google_page_url;a.page_location=Y(b,d)||"EMPTY"}function Sa(a,c){var b={},d=Ja(a,c);b.iframing=Pa(a,d);!!a.google_page_url?Ra(b,a,c,d):Qa(b,a,c,d);b.last_modified_time=c.location==b.page_url?Date.parse(c.lastModified)/1000:null;b.referrer_url=d?a.google_referrer_url:a.google_page_url&&a.google_referrer_url?a.google_referrer_url:c.referrer;return b}function Ta(a){var c={},b=a.URL.substring(a.URL.lastIndexOf("http"));c.iframing=null;c.page_url=b;c.page_location=a.location;
c.last_modified_time=null;c.referrer_url=b;return c}function La(a,c){var b;b=a.google_page_url==null&&Z[c.domain]?Ta(c):Sa(a,c);Oa(a,b)}function Ca(a,c,b){if(a){var d=c.getElementById(a);if(d&&b&&b.length!=""){d.style.visibility="visible";d.innerHTML=b}}}var Z={};Z["ad.yieldmanager.com"]=true;window.google_render_ad=S;Na();Ka(Ia);wa(window,document,0.0010);var $="script";document.write("<"+$+"> window.google_render_ad(); </"+$+">");
})()
