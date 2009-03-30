var im_global = new Object();

im_global.version = {
    presence_flash : "2.4.2",
    buddylist_flash: "2.4.2",
    webchat_flash  : "2.4.2"
};
im_global.win = {//聊窗
    fontsize : '12px',
    fontcolor: '#000000',
    tbfontcolor:'#000000',
    fonttext: ''
};
im_global.variable = {
    siteid: null,
    user_id  : null,
    user_name: null,
    user_sid : null,
    userparam: null,
    webchatURL: "",
    onlineuserURL: "",
    scriptPath: "",
    serverPath: "",
    setingItems: [
        {title:"接收所有人消息",name:"autoacceptmessage",type:"radio",value:1},
        {title:"只接受好友消息",name:"autoacceptmessage",type:"radio",value:2},
        {title:"-"},
        {title:"好友上线提示",  name:"buddyonlinenotify",type:"checkbox",value:true},
        {title:"系统声音提示",  name:"notifysound",type:"checkbox",value:true}]
};
        //{title:"拒绝所有人消息",name:"autoacceptmessage",type:"radio",value:3},
im_global.temp = {//临时
    menuTimer: -1,
    at: null,
    uid_display:"",
    divY:null,
    flashServers:null,
    userStatusServer:null,
    presenceFlashGoUrl:null,
    buddylistFlashGoUrl:null,
    presenceFlash:null,
    la: new Array(),
    ow: new Object(),
    notify_id: 0,
    userSpanArray: null,
    bHaveSetFlashServers:false,
    resetwintop: new Array(),
    imSid:null,
    logo:null
};
im_global.cfg = {//配置
    not_showfloat_sites: new Array("haiguinet","cnmyspace"),
    notShowFloat:   false,
    customtoolbarButtons:[],//自定义工具条按钮
    bgColor:    "#DFDFDF",
    broderColor:"#92918D",
    toolbarOverColor:  "#CDD3E9",
    chatWidth: 452,
    chatHeight:471,
    IMWidth:190,
    IMHeight:450,
    General: false,
    customparams:   [],
    cookieTimeout: 3600, //一小时    
    DebugType: 0,                                          /*0:关闭|1:log4javascript|2:dzy*/
    init: function(){
        this.customparams["cache_serverinfo"] = false;     /**/
        this.customparams["getserverurl"]     = "http://download.wdknet.com/wdkchat/func/getflashserver.php";
        /*-----------------以下参数可在客户端调用----------------*/
        this.customparams["enblebuddyentry"]  = 1;         /*0:关闭|1:开启|2:开启(不显示浮动Logo,无固定SPAN时不显示Logo)*/
        this.customparams["floatpos"]         = "right";
        this.customparams["entrytype"]        = "toolbar";
        this.customparams["layout"]           = "cascade"; /*cascade:层叠|free :自由(toolbar专属参数)*/
        this.customparams["intact"]           = false;     /*true   :完整|false:精简(toolbar专属参数)*/
        this.customparams["webchat_inpage"]   = true;      /*页内|页外打开聊窗*/
        this.customparams["alway_notify"]     = false;     /*alway_notify*/
        this.customparams["show_popmenu"]     = true;      /**/
        this.customparams["show_tooltip"]     = true;      /**/
        this.customparams["hiddenmode"]       = false;     /**/
    }
};
im_global.cache = {
    source: "",
    _images:  ["logo_mini","im_logo","notify_userhead","online","offline","tools_min","tools_min_over","tools_min_click"],
    img:[],
    init:function(){
        if(this.source.length <= 0) alert("缓存图片失败");
        
        for(var i=0; i<this._images.length;i++){
            var image = new Image();
            image.src = this.source + this._images[i] + ".gif";
            this.img[this._images[i]] = image;
        }
        this.img["im_logo"].width = 20;
    }
};
im_global.cfg.init();

var im_wdkUtil = null;
var im_toolbar = null;
var im_toolBar_Menu = null;
var im_notify_manager = null;
var im_chat_window_manager = null;
var wdkApplication = null;
var im_myIMWindow = null;
var im_notshow_ad = false;
//var im_webchat_url = "http://wdknet.vicp.net/wdkchat/func/imwebchat.php";
//var im_buddylist_url = "http://wdknet.vicp.net/wdkchat/func/getflashserver.php";
var im_logger = null;

/*---------config end ---------*/

var im_uAgent = navigator.userAgent.toLowerCase();
im_browser = function(){
    this.version=(im_uAgent.match( /.+(?:firefox|rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1];
    this.safari= /webkit/.test( im_uAgent );
    this.opera= /opera/.test( im_uAgent );
    this.msie= /msie/.test( im_uAgent ) && !/opera/.test( im_uAgent );
    this.msie56= parseFloat(im_uAgent.substring(im_uAgent.indexOf("msie") + 5)) >= 5.5 && parseFloat(im_uAgent.substring(im_uAgent.indexOf("msie") + 5))<7;
    this.mozilla= /mozilla/.test( im_uAgent ) && !/(compatible|webkit)/.test( im_uAgent );
    this.firefox=/firefox/.test(im_uAgent);
    this.firefox2=/firefox/.test(im_uAgent) && this.version.indexOf("2.") > -1;
    this.chrome=/chrome/.test(im_uAgent);
    this.boxModel= !(/msie/.test( im_uAgent ) && !/opera/.test( im_uAgent )) || document.compatMode == "CSS1Compat";//?
    this.oldModel = /msie/.test( im_uAgent ) && !/opera/.test( im_uAgent ) && document.compatMode=="BackCompat";
    this.scroll = null;
};
/*-----class WdkUtil start-----*/
WdkUtil = function(){
    this.Browser = new im_browser();
    this.Domain  = location.hostname;
    this.Path    = "/";
}
_p = WdkUtil.prototype;
_p.setDomain = function(domain){
    if(domain){
        var _ed     = domain.indexOf("/");
        var _len    = domain.length;
        if(_ed>=0){
            this.Domain = domain.substr(0, _ed);
            this.Path   = domain.substr(_ed, _len);
        }else{
            this.Domain = domain.substr(0, _len);
        }
    }
}
_p.GetCookieVal = function(offset){
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
    endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}
_p.SetCookie = function(name, value){
    var expdate = new Date();
    var argv = arguments;
    var argc = arguments.length;
  var expires = (argc > 2) ? argv[2] : null;
  var path = (argc > 3) ? argv[3] : null;
  var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5]  : false;
    if(expires!=null) expdate.setTime(expdate.getTime() + ( expires * 1000 ));
    document.cookie = name + "=" + escape (value) +((expires == null) ? "" : ("; expires="+ expdate.toGMTString()))
    +((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=" + domain))
    +((secure == true) ? "; secure" : "");
}
_p.GetCookie = function(name){
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen)
  {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
    return this.GetCookieVal(j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
  }
  return null;
}
_p.DelCookie = function(name){
  var exp = new Date();
  exp.setTime (exp.getTime() - 1);
  var domain = this.Domain ? this.Domain : "";
  var path = this.Path ? this.Path : "";
  var cval = this.GetCookie (name);
  document.cookie = name + "=" + cval + "; expires="+ exp.toGMTString() +
    "; path=" + path + "; domain=" + domain;
}
_p.isFunction = function( fn ) {
    return !!fn && typeof fn != "string" && !fn.nodeName && 
        fn.constructor != Array && /function/i.test( fn + "" );
}
_p.isArray = function( o ){
    return Object.prototype.toString.apply(o) === '[object Array]';
}

_p.Event = {
    listEvents: [],
    addEvent: function( obj, type, fn ) {
        if (obj.addEventListener) {
            obj.addEventListener( type, fn, false );
            this.listEvents.push(arguments);
        }
        else{
            obj.attachEvent( "on"+type, fn);
            this.listEvents.push(arguments);
        }
    },
    removeEvent: function( obj, type, fn ){
        if( obj.removeEventListener ){
            obj.removeEventListener(type, fn, false);
        }
        else{
            obj.detachEvent("on"+type, fn) ;
        }
    },
    flush : function(){
        var i, item;
        for(i = this.listEvents.length - 1; i >= 0; i = i - 1){
            item = this.listEvents[i];
            if(item[0].removeEventListener){
                item[0].removeEventListener(item[1], item[2], item[3]);
            };
            if(item[1].substring(0, 2) != "on"){
                item[1] = "on" + item[1];
            };
            if(item[0].detachEvent){
                item[0].detachEvent(item[1], item[2]);
            };
            item[0][item[1]] = null;
        };
    }
};
_p.$ = function(el){
    return(document.getElementById ? document.getElementById(el)
            : document.all ? document.all[el]
            : null);
};
_p.doc = document.documentElement ? document.documentElement : (document.body ? document.body : null);
_p.scroll = function(){
    var wh = this.viewRect.get(window, true).h;
    if( this.doc.scrollHeight>wh)
        return true
    else
        return false;
}
_p.JSONtoArray = function(json){
    if(!json) return;
    var arrOut = [];for(var k in json){arrOut[k] = json[k];}return arrOut;
}
_p.StringToArray = function(string){//JSON类型字符串
    if(string=="" || string.indexOf("{")!=0 || string.indexOf("}")!=string.length-1) return;
    var arrOut = [];var _temp = string.substr(string.indexOf("{")+1, string.indexOf("}")-1);var _arr  = _temp.split(",");for(var i=0; i<_arr.length; i++){var _t = _arr[i].split(":");arrOut[_t[0]] = _t[1];}return arrOut;
}
_p.viewRect = {
    x:0,
    y:0,
    w:0,
    h:0,
    get: function(el, isupdate){
        el = typeof(el)=='string' ? this.getEl(el) : el;
        if( !el || el==window || el==document ){
            if (!!isupdate || !this.w)
                this._getViewPortRect();/*重新获取窗口参数*/
            return {x:this.x, y:this.y, w:this.w, h:this.h};
        }
        else{
            if( (document.compatMode=="BackCompat" && im_wdkUtil.Browser.msie) ||
                (document.compatMode=="CSS1Compat" && im_wdkUtil.Browser.msie56)
              ){ 
                return {x:this.getX(el), y:this.getY(el),w:this.getW(el), h:this.getH(el)};
            }else{
                this._getViewPortRect();
                var _x = this.getX(el) + this.x;
                var _y = this.getY(el) + this.y;
                return {x:_x, y:_y,w:this.getW(el), h:this.getH(el)};
            }
        }
    },
    _getViewPortRect: function(obj){
        this.x = window.pageXOffset ? window.pageXOffset :
                                    (document.documentElement&&document.documentElement.scrollLeft ? document.documentElement.scrollLeft :
                                    (document.body ? document.body.scrollLeft : 0) );
        
        this.y = window.pageYOffset ? window.pageYOffset :
                                    (document.documentElement&&document.documentElement.scrollTop ? document.documentElement.scrollTop :
                                    (document.body ? document.body.scrollTop : 0) );
        
        this.w = window.innerWidth ? window.innerWidth :
                                    (document.documentElement&&document.documentElement.clientWidth ? document.documentElement.clientWidth :
                                    (document.body ? document.body.clientWidth : 0) );
            
        this.h = window.innerHeight ? window.innerHeight :
                                    (document.documentElement&&document.documentElement.clientHeight ? document.documentElement.clientHeight :
                                    (document.body ? document.body.clientHeight : 0) );
    },
    getX:function(e){
        elm = typeof(e)=='string' ? this.getEl(e) : e;
        var offset=elm.offsetLeft;
        if(elm.offsetParent!=null) offset+=this.getX(elm.offsetParent);
        return offset;
    },
    getY:function(e){
        elm = typeof(e)=='string' ? this.getEl(e) : e;
        var offset=elm.offsetTop;
        if(elm.offsetParent!=null) offset+=this.getY(elm.offsetParent);
        return offset;
    },
    getW:function(el){
        return(el ? (el.offsetWidth || (el.style ? el.style.pixelWidth : 0) || 0) : 0);
    },
    getH:function(el){
        return(el ? (el.offsetHeight || (el.style ? el.style.pixelHeight: 0) || 0) : 0);
    },
    getEl:function(el){
        return(document.getElementById ? document.getElementById(el)
            : document.all ? document.all[el]
            : null);
    }
};
_p.createScript = function(scriptSrc){
    var im_head = document.getElementsByTagName("HEAD")[0];
    if(document.readyState!="complete" && im_wdkUtil.Browser.msie){ 
        window.setTimeout(function(){im_wdkUtil.createScript(scriptSrc);}, 1000);return;
    }else{
        var script = window.document.createElement("script");
        im_head.appendChild(script);
        script.type     = "text/javascript";
        script.language = "javascript";
        script.src      = scriptSrc;
        script.charset = "utf-8";
    }
    return true;
};
_p.createCSS = function(cssFile){
    var im_head = document.getElementsByTagName("HEAD")[0];
    var cssLink = document.createElement("link");
    im_head.appendChild(cssLink);
    cssLink.type= 'text/css';
    cssLink.rel = 'stylesheet';
    cssLink.href= cssFile;
}
_p.createDom = function(elDom, toElement){//elDom={name:"DIV"[,id:"",style:"",_class:"",title:"",click:"",mouseover:"",mouseout:""]}
    toElement = toElement ? toElement
                : document.getElementsByTagName ? document.getElementsByTagName("body")[0]
                : (document.body || null);
    if(typeof toElement.innerHTML != "undefined" && document.createElement && toElement.appendChild){
        if(/text/g.test(elDom.name.toLowerCase())){
            var _El = document.createTextNode(elDom.text);
        }else{
            var _El = document.createElement(elDom.name);
            for(var k in elDom){
                if(elDom[k]){
                    if(k=="className") _El.setAttribute("class", elDom[k]);
                    else _El.setAttribute(k, elDom[k]);
                }
            }
        }
        toElement.appendChild(_El);
        return _El;
    }else{
        toElement.innerHTML += '<' + elDom.name + (elDom.id ? ' id="' + elDom.id + '"' : '') + (elDom._class ? ' class="' + elDom._class + '"' : '') + (elDom.title ? ' title="' + elDom.title + '"' : '') + (elDom.style ? ' style="' + elDom.style + '"' : '') + (elDom.click ? ' onclick="' + elDom.click + '"' : '') + (elDom.mouseover ? ' onmouseover="' + elDom.mouseover + '"' : '') + (elDom.mouseout ? ' onmouseout="' + elDom.mouseout + '"' : '') + '></'+elDom.name+'>';
        var _childNodes = toElement.getElementsByTagName(elDom.name);
        return _childNodes[(_childNodes.length-1)];
    }
}
_p.insertHtml = function(where, el, html){
    where = where.toLowerCase();
    if(el.insertAdjacentHTML){
        switch(where){
            case "beforebegin":
                el.insertAdjacentHTML('BeforeBegin', html);
                return el.previousSibling;
            case "afterbegin":
                el.insertAdjacentHTML('AfterBegin', html);
                return el.firstChild;
            case "beforeend":
                el.insertAdjacentHTML('BeforeEnd', html);
                return el.lastChild;
            case "afterend":
                el.insertAdjacentHTML('AfterEnd', html);
                return el.nextSibling;
        }
    }
    var range = el.ownerDocument.createRange();
    var frag;
    switch(where){
        case "beforebegin":
            range.setStartBefore(el);
            frag = range.createContextualFragment(html);
            el.parentNode.insertBefore(frag, el);
            return el.previousSibling;
        case "afterbegin":
            if(el.firstChild){
                range.setStartBefore(el.firstChild);
                frag = range.createContextualFragment(html);
                el.insertBefore(frag, el.firstChild);
                return el.firstChild;
            }else{
                el.innerHTML = html;
                return el.firstChild;
            }
        case "beforeend":
            if(el.lastChild){
                range.setStartAfter(el.lastChild);
                frag = range.createContextualFragment(html);
                el.appendChild(frag);
                return el.lastChild;
            }else{
                el.innerHTML = html;
                return el.lastChild;
            }
        case "afterend":
            range.setStartAfter(el);
            frag = range.createContextualFragment(html);
            el.parentNode.insertBefore(frag, el.nextSibling);
            return el.nextSibling;
        }
}
_p.removeChildNodes = function(el, childNodetagName){
    if(!el) return;
    var Nodes = childNodetagName ? el.getElementsByTagName(childNodetagName) : el.childNodes;
    for(var i=0; i<Nodes.length;i++){
        var a = Nodes[i].attributes;
        for(var id in a){
            if(typeof(a[id])=="function"){
                if(im_wdkUtil.Browser.msie)
                    eval("el."+id+"=null");
                else
                    el.removeAttribute(id);
            }
        }
        this.removeChildNodes(Nodes[i], childNodetagName);
        el.removeChild(Nodes[i]);
    }
}
_p.cutText = function(str, len){
    var l = len*2; var t = 0, tl = 0, ol = 0;
    for(var i=0;i<l;i++){
        if(str.charCodeAt(i)>255) t += 2;
        else tl += 1;
        ol += 1;
        if(t + tl == l){return (str.substring(0,ol));break;}
        if(t + tl > l){return (str.substring(0,ol - 1) + " "); break;}
    }
}
_p.lenText = function(str){
    var t = 0;
    for(var i=0;i<str.length;i++){
        if(str.charCodeAt(i)>255) t += 2;
        else t += 1;
    }
    return t;
}
_p.disposeFlashObj = function(flashObj){
    //把 flash 暴露给 js 的所有方法清空
    if(!flashObj)
      return;
    for(var id in flashObj){
        if(typeof(flashObj[id]) == "function"){
            if(im_wdkUtil.Browser.msie)
                eval("flashObj."+id+"=null");//清除DOM对象上面绑定的脚本对象
            else
                flashObj.removeAttribute(id);
        }
    }
};
/*---class WdkUtil end---*/
im_initim();
im_initPopMenu();

//为CSDN专用接口函数
function im_csdnInit(){
  im_global.variable.siteid = "csdn";
  im_getIMOnlineStatus(im_global.variable.siteid);
  
  //im_wdkUtil.SetCookie("UserName", "lzp");
  //im_wdkUtil.SetCookie("_user_sid", "dsf231233122f");
  //im_wdkUtil.DelCookie("UserName");
  var userid = im_wdkUtil.GetCookie("UserName");
  if(!userid || userid.length==0)
    return;
  var username = userid;
  var sid = im_wdkUtil.GetCookie("_user_sid");
  im_runPresence("csdn", im_global.variable.siteid, userid, username, sid, "", "", "");
  
}
/*------interface-------*/
function im_getIMOnlineStatus(siteid, webchaturl, onlineuserurl){
    var _siteid = siteid;
	  im_global.variable.siteid = siteid;
    im_global.variable.webchatURL = webchaturl;
    im_global.variable.onlineuserURL = onlineuserurl;
    
    if(_siteid=="tianya" || _siteid=="tianya_v2"){
        im_global.cache.source += "tianya/";
        im_global.cache.init();
        im_global.cfg.chatWidth        = 472;
        im_global.cfg.chatHeight       = 452;
        im_global.cfg.IMWidth          = 218;
        im_global.cfg.IMHeight         = 490;
        im_global.win.fonttext = "天涯聊聊";
        im_global.win.fontcolor        = "#FFFFFF";
        im_global.win.tbfontcolor      = "#004499";
    }
    else if(_siteid=="cnmyspace"){
        im_global.cache.source += "cnmyspace/";
        im_global.cache.init();
        im_global.cfg.chatWidth        = 472;
        im_global.cfg.chatHeight       = 452;
        im_global.cfg.IMWidth          = 295;
        im_global.cfg.IMHeight         = 490;
        im_global.win.fonttext = "聚友聊聊";
        im_global.win.fontcolor        = "#FFFFFF";
        im_global.win.tbfontcolor      = "#004499";
    }
    else if(_siteid=="ntalkerbbs"  || _siteid=="bbs50gbk" || _siteid=="yeeyoo"){//亿友测试
        im_global.cache.source += "yeeyoo/";
        im_global.cache.init();
        //自定义工具条按钮
        im_global.cfg.customtoolbarButtons = [
            {id:"im_music",_class:"im_music",con:"",url:"http://my.yeeyoo.com/admin/music/searchInit.action",tip:"音乐盒"},
            {id:"im_xingyun",_class:"im_xingyun",con:"",url:"http://my.yeeyoo.com/admin/starFortune/starFortune.action",tip:"星运"},
            {id:"im_youxi",_class:"im_youxi",con:"",url:"http://my.yeeyoo.com/admin/game/sg.action",tip:"亿友三国"}
        ];
        im_global.cfg.toolbarOverColor = "#FFE1FF";
        im_global.cfg.bgColor          = "#FFCCFF";
        im_global.cfg.broderColor      = "#FF43C8";
        im_global.cfg.chatWidth        = 472;
        im_global.cfg.chatHeight       = 452;
        im_global.cfg.IMWidth          = 295;
        im_global.cfg.IMHeight         = 490;
        im_global.win.fonttext         = "亿友聊聊";
    }
    else if(_siteid=="csdn" || _siteid=="csdn_test" || _siteid=="discuz60utf8dzy" ){
        im_global.cache.source += "csdn/";
        im_global.cache.init();
        im_global.cache.img["im_logo"].width = 41;
        im_global.cfg.customtoolbarButtons = [
            {id:"im_space",_class:"im_space",con:"",url:"http://hi.csdn.net/my.html",tip:"空间"},
            {id:"im_blog",_class:"im_blog",con:"",url:"http://blog.csdn.net/",tip:"博客"},
            {id:"im_bbs",_class:"im_bbs",con:"",url:"http://community.csdn.net/",tip:"论坛"}
        ];
        im_global.cfg.toolbarOverColor = "#C3F0FF";
        im_global.cfg.bgColor          = "#E8FbFF";
        im_global.cfg.broderColor      = "#3374C4";
        im_global.cfg.chatWidth        = 472;
        im_global.cfg.chatHeight       = 452;
        im_global.cfg.IMWidth          = 295;
        im_global.cfg.IMHeight         = 490;
        im_global.win.fonttext         = "实时信息通讯平台";
        im_global.win.fontcolor        = "#FFFFFF";
        im_global.win.tbfontcolor      = "#3374C4";
    }
    else{
        im_global.cache.source += "ntalker/";
        im_global.cache.init();
        im_global.cache.img["im_logo"].width = 53;
        im_global.cfg.toolbarOverColor = "#C3F0FF";
        im_global.cfg.bgColor          = "#E8FbFF";
        im_global.cfg.broderColor      = "#3374C4";
        im_global.cfg.chatWidth        = 472;
        im_global.cfg.chatHeight       = 452;
        im_global.cfg.IMWidth          = 295;
        im_global.cfg.IMHeight         = 490;
        im_global.win.fonttext         = "";
        im_global.win.fontcolor        = "#FFFFFF";
        im_global.win.tbfontcolor      = "#3374C4";
        im_global.cfg.General          = true;
    }
    var userStatusServer = null;
    if(im_global.cfg.customparams["cache_serverinfo"])
        userStatusServer = im_wdkUtil.GetCookie("userstatusserver");
    if(!userStatusServer){
        var getServerUrl = im_global.cfg.customparams["getserverurl"]?im_global.cfg.customparams["getserverurl"]:(im_global.variable.scriptPath+"/func/getflashserver.php");
        im_wdkUtil.createScript(getServerUrl+"?siteid="+siteid+"&resulttype=2&rand="+Math.random());
    }
    else{
        im_onGetFlashServer(userStatusServer, '2', true);
    }
}

function im_runPresence(userparam, siteid, userid, username, sessionid, flashserver, webchatpageurl, Params) {
	  if(typeof(userparam)=='undefined' || !userparam || userparam.length==0){
	     userparam = username;
	  }
    if(siteid=="csdn" || siteid=="csdn_test")im_global.cfg.customtoolbarButtons[1].url += username;
    im_global.variable.userparam = userparam;
    im_global.variable.siteid = siteid;
    im_global.variable.user_id = userid;
    im_global.variable.user_name = username;
    im_global.variable.user_sid = sessionid;
    //flashserver
    im_global.variable.webchatURL = webchatpageurl;
    
    if(Params && typeof Params =="object"){
        for(var k in Params){
            if(typeof(im_global.cfg.customparams[k]) != "undefined"){
                im_global.cfg.customparams[k] = Params[k];
        }
        }
    }else if(Params && typeof Params == "string"){//string
        var aParam = Params.split(";")
        for(var i in aParam){
            if(aParam[i] && aParam[i].indexOf(":")){
                var a = aParam[i].split(":");
                k = a[0];v = a[1];
                if(typeof(im_global.cfg.customparams[k]) != "undefined")
                    im_global.cfg.customparams[k] = v=="false" ? false : v=="true"  ? true : v;
            }
        }
    }
    im_global.cfg.customparams["layout"] =  im_global.cfg.customparams["entrytype"]=="toolbar" ? "toolbar" : 
                                            (im_global.cfg.customparams["entrytype"]=="tianyatoolbar" ? "tianyatoolbar" : im_global.cfg.customparams["layout"]);
    
    var pageurl = "nodata";
    document.write("<div id=\"wdk_mini_state\" style=\"display:none; \"></div>");
    flashvars = '?sessionid='+encodeURIComponent(im_global.variable.user_sid)+'&userid='+encodeURIComponent(im_global.variable.user_id)+'&username='+encodeURIComponent(im_global.variable.user_name)
                +'&siteid='+encodeURIComponent(im_global.variable.siteid)+"&version="+im_global.version.presence_flash;
    if(im_global.variable.userparam)
        flashvars += "&userparam="+encodeURIComponent(im_global.variable.userparam);
    var flashurl = im_global.variable.scriptPath+"/impresence.swf"+flashvars;

    im_divY = -200;
    if (im_global.variable.user_sid != "") {
          var flashnodehtml = '<div id="im_presence_div" style=\"position:absolute;z-index:9996; top: -200px;\">';
          if(im_wdkUtil.Browser.msie){
            flashnodehtml +='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" '
                          +'id="impresenceflash"  width="10" height="10" title="在线状态"> '
                          +'    <param name="movie" value="'+flashurl+'" /> '
                          +'    <param name="allowscriptaccess" value="always" /> '
                          +'  </object>' ;
          }
          else{
                  flashnodehtml +='<embed src="'+flashurl
                                +  '" id="impresenceflash" name="在线状态" width="10" height="10" allowscriptaccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"> '
                                +'</embed>';
        }
        flashnodehtml += '</div>' ;
        document.write(flashnodehtml);
    }
    try{//动态装载imchat_utf8.js
        if(im_global.cfg.DebugType==1){
            im_wdkUtil.createScript(im_global.variable.scriptPath+"/log4javascript/log4javascript.js");
        }else if(im_global.cfg.DebugType==2){
            dzy_debug.init();
        }
        //im_wdkUtil.createScript("http://10.1.62.68/csdn/imchat_utf8.js");
        im_wdkUtil.createScript("http://www.csdn.net/xnim/imchat_utf8.js");
    }
    catch(e){}
}
function presenceFlashReady(){
    setFlashServerToPresence();
    return true;
}
function setFlashServerToPresence(){
    if(!im_global.temp.flashServers || im_global.temp.bHaveSetFlashServers)
        return;

    im_global.temp.presenceFlash = document.getElementById("impresenceflash");
    var _presenceFlash = im_global.temp.presenceFlash;
    if(_presenceFlash){
        if(_presenceFlash.setFlashServerInfo){
            _presenceFlash.setFlashServerInfo(im_global.temp.flashServers[0],im_global.temp.flashServers[1],im_global.temp.flashServers[2],im_global.temp.flashServers[3],im_global.temp.flashServers[4],im_global.temp.flashServers[5],im_global.temp.flashServers[6],im_global.temp.flashServers[7],im_global.temp.flashServers[8]);
            im_global.temp.bHaveSetFlashServers = true;       
        }
        if(_presenceFlash.setPageFocus && typeof(promptwindow)!="undefined" && promptwindow.isfocus){
            _presenceFlash.setPageFocus(true);
            if(im_global.cfg.DebugType==2) dzy_debug.debug("presenceFlash.setPageFocus(true)", true);
        }
    }
}
/*-----*/
function im_initim(){
    var scriptobjs = window.document.getElementsByTagName("script");
    var scriptobj = scriptobjs[scriptobjs.length - 1];
    var scriptpath = scriptobj.getAttribute("src");
    if(scriptpath && scriptpath.length>0){
        var pos = scriptpath.lastIndexOf("/");
        if(pos>=0)
            im_global.variable.scriptPath = scriptpath.substring(0,pos);
        else
            im_global.variable.scriptPath = "";

        var pos = scriptpath.indexOf("//");
        if(pos>0){
            var pos2 = scriptpath.indexOf("/", pos+2);
            if(pos2>pos)
                im_global.variable.serverPath = scriptpath.substring(0,pos2);
        }
        else
            im_global.variable.serverPath = "";
    }
    else{
        im_global.variable.scriptPath = "";
        im_global.variable.serverPath = "";
    }
    if(!im_global.cache.source)
        im_global.cache.source = im_global.variable.scriptPath+"/images/";
    im_wdkUtil = new WdkUtil();
}
function im_initPopMenu(){
    document.write("<div id='im_popMenuid' style='display:none;text-align:left;position:absolute;z-index:10001;'></div>");

    var cssTag = im_wdkUtil.$('im_popmenu_css');
    var head = document.getElementsByTagName('head').item(0);
    if(cssTag)
        return;
    im_wdkUtil.createCSS(im_global.variable.scriptPath+"/impopmenu.css");
}

/*----[im_ToolTip]----*/
var im_ToolTip = {
        FONTCOLOR        : '#000044',
        FONTFACE        : 'Verdana,Geneva,sans-serif',
        FONTSIZE        : '12px',
        FONTWEIGHT        : 'normal',
        TEXTALIGN        : 'left',
        PADDING            : 2,
        tipElements        : ['img','abbr','acronym'],
        IMG:[],
        _elmCss    : [],
        _Obj    : {},
        _Tips    : [],
        _Time    : [],
        _opac    : [],
        _step    : [],
        _iTimerID:[],
        loadImage: function(){
            var asrc = ["tip_bg", "tip_lt", "tip_t", "tip_rt", "tip_r", "tip_rb", "tip_b", "tip_lb", "tip_l", "tip_stemt", "tip_stemb"],
            n = asrc.length,
            aImg = new Array(n),
            img;
            while(n){
                --n;
                img = aImg[n] = new Image();
                img.src = im_global.cache.source + asrc[n] + ".gif";
            }
            this.IMG = aImg;return;
        }
};

/*---- Function ------*/
function im_onGetFlashServer(responseText, type, iscookievalue){
    if(responseText=="-1" || responseText=="-2")
        return;

    if(type=="2"){
        im_global.temp.userStatusServer = responseText;
        if(typeof(iscookievalue)=="undefined" || !iscookievalue)//从服务器端返回的数据才写cookie
            im_wdkUtil.SetCookie("userstatusserver", im_global.temp.userStatusServer, im_global.cfg.cookieTimeout);
        StartGetUsersStatus(im_global.temp.userStatusServer);
    }
    else if(type=="1"){
        im_global.temp.presenceFlash =  im_wdkUtil.$("impresenceflash");
        im_global.temp.flashServers = responseText.split(",");
        if(typeof(iscookievalue)=="undefined" || !iscookievalue)//从服务器端返回的数据才写cookie
            im_wdkUtil.SetCookie("flashservers", responseText, im_global.cfg.cookieTimeout);
        //startGetMyIMStatus(im_global.temp.flashServers[8]);/*??注释掉*/
        setFlashServerToPresence();
    }
}
function StartGetUsersStatus(userStatusServer){
    statusSpans = document.getElementsByTagName("SPAN");
    spanindex = 0;

    im_global.temp.userSpanArray = new Array();
    var userStatusUrl = userStatusServer+"?result=js&sitid="+im_global.variable.siteid+"&uids=";
    for(i=0; i<statusSpans.length; i++){
        statusSpan = statusSpans[i];
        if(statusSpan.className=="wdk_user_status_span" && statusSpan.id){
            pos = statusSpan.id.indexOf("wdk_user_");
            if(pos>=0){
                var newStatusObj = new Object();
                newStatusObj.destuid = statusSpan.id.substring(pos+"wdk_user_".length, statusSpan.id.length);
                newStatusObj.destnick = statusSpan.title;
                newStatusObj.spanElement = statusSpan;
                im_global.temp.userSpanArray.push(newStatusObj);
                if(im_global.temp.userSpanArray.length>1)
                    userStatusUrl += ",";
                userStatusUrl += encodeURIComponent(newStatusObj.destuid);
            }
        }
    }

    //天涯专用，解析看帖页面用户链接
    var curURL = window.location.href.toLowerCase();
    var isNeedPaser = false;
    if(im_global.temp.userSpanArray.length==0 && (im_global.variable.siteid=="tianya" || im_global.variable.siteid=="tianya_v2")){
        var allowURLList = new Array("/publicforum/content/","/techforum/content/");
        for(i=0;i<allowURLList.length;i++){
            if(curURL.indexOf(allowURLList[i])>=0){
                isNeedPaser = true;
                break;
            }
        }
    }
    if(!isNeedPaser){
        var pattern = /content.*\.asp\?/i;
        if(curURL.match(pattern))
            isNeedPaser = true;
    }
    if(isNeedPaser){
        var lnks = document.links;
        for(var i=0;i<lnks.length;i++){
            match = lnks[i].href.match(/Listwriter\.asp\?(vid=(.*)&)?vwriter=(.*)&?/i);
            if(typeof match != "undefined" && match){
                var _param = {  name:"span",
                                id:"wdk_user_"+lnks[i].innerHTML,
                                _class:"wdk_user_status_span",
                                title:lnks[i].innerHTML};
                var chatSpan = im_wdkUtil.createDom(_param,lnks[i].parentNode);
                    
                var newStatusObj = new Object();
                newStatusObj.destuid = lnks[i].innerHTML;
                newStatusObj.destnick = lnks[i].innerHTML;
                newStatusObj.spanElement = chatSpan;
                im_global.temp.userSpanArray.push(newStatusObj);
                if(im_global.temp.userSpanArray.length>1)
                    userStatusUrl += ",";
                userStatusUrl += encodeURIComponent(newStatusObj.destuid);
                if(im_global.temp.userSpanArray.length>60)
                    break;
            }
        }
    }
    userStatusUrl += "&unum="+im_global.temp.userSpanArray.length;
    if(im_global.temp.userSpanArray.length>0)
        im_wdkUtil.createScript(userStatusUrl);
}
//状态服务器返回脚本调用，传递用户列表状态值，用户状态值以,分开，每个值0代表离线，1代表在线
function im_onGetUserStatus(responseText){
    if(responseText=="-1" || responseText=="-2" || im_global.cfg.customparams["hiddenmode"])
        return;
    userStatusArray = responseText.split(",");

    for(i=0;i<im_global.temp.userSpanArray.length;i++){
        var imgsrc;
        switch(userStatusArray[i]){
        case "0":
            imgsrc = im_global.cache.img["offline"].src;
            break;
        case "1":
            imgsrc = im_global.cache.img["online"].src;
            break;
        }
        alttext="跟我聊天";
        chatLinkStr =  ' <a  href="#" target="_blank" style="display:inline;padding:0px;overflow:visible;" alt="'+alttext+'" onClick="javascript: im_openWebchatWindow(\''+im_global.temp.userSpanArray[i].destuid+'\', \''+im_global.temp.userSpanArray[i].destnick+'\'); return false;" ';
        if(im_global.cfg.customparams["show_popmenu"] && !im_global.cfg.customparams["hiddenmode"])
            chatLinkStr += ' onmouseover="im_popMenu(this,\''+im_global.temp.userSpanArray[i].destuid+'\',\''+im_global.temp.userSpanArray[i].destnick+'\');" onmouseout="im_beginCloseMenu(this);"';
        chatLinkStr += '><img name="wdk_presence_image" style="display:inline;left:0px;top:0px;"';
        if(i==0){
            chatLinkStr += ' tip="点击这里开始聊天"';
            if(im_global.cfg.customparams["show_tooltip"] && !im_global.cfg.customparams["hiddenmode"])
                chatLinkStr += ' onload="im_showTip(\'wdk_presence_'+im_global.temp.userSpanArray[i].destuid+'\')"';
        }
        chatLinkStr += " id=\"wdk_presence_"+im_global.temp.userSpanArray[i].destuid+"\" border=\"0\" src=\""+imgsrc+"\" />";
        chatLinkStr += "</a>";
        im_global.temp.userSpanArray[i].spanElement.innerHTML = chatLinkStr;
    }
}

function im_openWebchatWindow(destuid, destname, chatid){
    return im_openWebchat(im_global.variable.user_id, im_global.variable.user_name, im_global.variable.user_sid, im_global.variable.siteid, destuid, destname, chatid, im_global.variable.userparam, !im_global.cfg.customparams["webchat_inpage"], im_global.variable.scriptPath);
}
function im_openBuddyListWindow(){
    if(im_myIMWindow)
        im_myIMWindow.showWindow(im_global.cfg.customparams["webchat_inpage"]);
    else{
        var notifystr = "%u60A8%u5C1A%u672A%u767B%u5F55%uFF0C%u8BF7%u767B%u5F55%u540E%u518D%u4F7F%u7528%u597D%u53CB%u5217%u8868%uFF01";
        alert(unescape(notifystr));
    }
}

function im_popMenu(obj, destuid, destnick){
    if(im_global.temp.menuTimer>=0){
        clearTimeout(im_global.temp.menuTimer);
        im_global.temp.menuTimer = -1;
        return;
    }
    var menudiv = im_wdkUtil.$('im_popMenuid');
    if(!menudiv || !obj) return;
    var pos = im_wdkUtil.viewRect.get(obj);
    var rect= im_wdkUtil.viewRect.get(window, true);
    var browser = im_wdkUtil.Browser;
    menux = pos.x+pos.w - (browser.msie56 ? 0 : rect.x);
    menuy = pos.y - (browser.msie56 ? 0 : rect.y);

    chatLinkStr = "<a  href=\"#\" target=\"_blank\"  style=\"overflow:visible;font-size:12px;font-weight:100;padding-left:5px;padding-top:5px;overflow:visible;\" onClick=\"javascript: im_openWebchatWindow('"+destuid+"', '"+destnick+"');return false;\">聊天</a>";
    menuStr = "<div>" + chatLinkStr + "</div>";
    buddylistLinkStr = "<a  href=\"#\" target=\"_blank\"  style=\"overflow:visible;font-size:12px;padding:5px;font-weight:100;\" onClick=\"javascript: im_openBuddyListWindow(); return false;\">我的好友</a>";
    menuStr += "<div>"+buddylistLinkStr+"</div>";
    if(im_global.variable.onlineuserURL && im_global.variable.onlineuserURL.length>0){
        onlineLinkStr = "<a  href=\""+im_global.variable.onlineuserURL+"\" target=\"_blank\"  style=\"font-size:12px;font-weight:100;padding-left:5px; overflow:visible;\" >在线会员</a>";
        menuStr += "<div>"+onlineLinkStr+"</div>";
    }

  menuStr += "</div>";
  menudiv.innerHTML = menuStr;
    menudiv.style.display = 'block';
    menudiv.style.left = menux+"px";
    menudiv.style.top  = menuy+"px";
    menudiv.onmouseover = im_popMenu;
    menudiv.onmouseout = im_beginCloseMenu;
}

function im_beginCloseMenu(obj){
    im_global.temp.menuTimer = setTimeout(im_closeMenu, 300);
}

function im_closeMenu(obj){
     var menudiv = im_wdkUtil.$('im_popMenuid');
     menudiv.style.display = 'none';
     im_global.temp.menuTimer = -1;
}

Number.prototype.Timer = function(func, iT, bUrge){
    if(!this.value || bUrge)
        this.value = window.setTimeout(func, iT);
}
Number.prototype.EndTimer = function(){
    if(this.value){
        window.clearTimeout(this.value);
        this.value = 0;
    }
}
/*--im_ToolTip--*/
im_ToolTip.loadImage();
function im_hiddenTip(e){
    if(typeof(e)=='string'){evObj = im_wdkUtil.$(e);
    }else {evObj = this;}
    var key = (typeof(e)=='string') ? e : (evObj.id ? 'imiT'+evObj.id : 'imiTToolTip');
    im_tipFade(im_ToolTip._opac[key], key, false);
    clearInterval(im_ToolTip._iTimerID[((typeof(e)=='string') ? e : evObj.id)]);
}
function im_showTip(e){
    if(typeof(e)=='string'){
        evObj = im_wdkUtil.$(e);
        im_createTip(e);
    }else{
        evObj = e;
        im_createTip(evObj.id ? evObj.id : 'ToolTip');
    }
    var key = evObj.id ? evObj.id : 'ToolTip';
    evObj.onload = null;

    if (typeof(e)=='string'){
        im_ToolTip._step[key] = 10;
    }
    im_ToolTip._Time[key][1].Timer("im__showTip('"+key+"')", 100, true);
}
function im__showTip(key){
    var evObj = im_wdkUtil.$(key);
    var LogoRect = im_wdkUtil.viewRect.get(key);
    var winRect = im_wdkUtil.viewRect.get(window, true);
    var Tip_left  = 0;
    
    try{
      im_ToolTip._Tips[key].innerHTML = im_getTipHTML( evObj.getAttribute('tip'), key);
    }
    catch(e){
    	im_tipFade(10, key, true);
      return;
    }
    var tipRect = im_wdkUtil.viewRect.get(im_ToolTip._Tips[key]);
    var bALlOOnB_obj =  im_wdkUtil.viewRect.get('bALlOOnB_'+key);

    if ( parseInt(LogoRect.x + tipRect.w + 20) > parseInt(winRect.w) ) {
        im_ToolTip._Tips[key].style.top  = (0 - tipRect.h) + "px";
        im_ToolTip._Tips[key].style.left = ( LogoRect.w/2+30 - tipRect.w) + "px";
        im_wdkUtil.$('bALlOOnB_'+key).style.left = "73px";
    } else {
        im_ToolTip._Tips[key].style.top = (LogoRect.y - tipRect.h - winRect.y) + 'px';
        Tip_left = LogoRect.x+LogoRect.w/2-15;
        im_ToolTip._Tips[key].style.left = Tip_left + 'px';
        bALlOOnB_left = document.compatMode=="BackCompat" || bALlOOnB_obj.x<Tip_left || bALlOOnB_obj.x>(Tip_left + tipRect.w ) ?
                        '0px' :
                        (16 - tipRect.w/2) + 'px';
        im_wdkUtil.$('bALlOOnB_'+key).style.left = bALlOOnB_left;
    }
    
    im_ToolTip._Tips[key].style.visibility = 'visible';
    im_ToolTip._Tips[key].style.opacity = '.1';

    im_tipFade(10, key, true);
}
function im_tipFade(opac, key, exeType){
    var passed = parseInt(opac);
    if( exeType == true ){//show
        var newOpac = parseInt(passed+10);
        if ( newOpac <= 80 ) {
            im_ToolTip._Tips[key].style.opacity = '.'+newOpac;
            im_ToolTip._Tips[key].style.filter = "alpha(opacity:"+newOpac+")";
            im_ToolTip._Time[key][1].Timer("im_tipFade('"+newOpac+"', '"+key+"', true)",100, true);
            im_ToolTip._opac[key] = newOpac;
        }
        else {
            im_ToolTip._Time[key][1].EndTimer();
            im_ToolTip._Tips[key].style.opacity = '.80';
            im_ToolTip._Tips[key].style.filter = "alpha(opacity:80)";
            im_ToolTip._Time[key][2].Timer("im_hiddenTip('"+key+"')", 5000, false);
        }
    }else{//hidden
        var newOpac = parseInt(passed-im_ToolTip._step[key]);
        if ( newOpac >=10 ) {
            im_ToolTip._Tips[key].style.opacity = '.'+newOpac;
            im_ToolTip._Tips[key].style.filter = "alpha(opacity:"+newOpac+")";
            im_ToolTip._Time[key][1].Timer("im_tipFade('"+newOpac+"', '"+key+"', false)",50, true);
        }
        else {
            im_ToolTip._Time[key][1].EndTimer();
            im_ToolTip._Time[key][2].EndTimer();
            im_ToolTip._Tips[key].style.visibility = 'hidden';
        }
    }
}
function im_createTip(El){
    if(im_wdkUtil.$("imiT"+El)) return true;
    parentDOM = im_wdkUtil.$(El).parentNode.tagName=="A" ? im_wdkUtil.$(El).parentNode.parentNode : im_wdkUtil.$(El).parentNode;
    var Elm               = null;
    try{
        Elm               = im_wdkUtil.createDom({name:"DIV",id:"imiT"+El,style:"visibility:hidden;position:absolute;z-index:999;top:-100px;left:-500px;width:120px;min-width:100px;"}, parentDOM);
    }catch(e){
        Elm               = document.createElement("DIV");
        Elm.id            = "imiT" + El;
        Elm.style.cssText = "visibility:hidden;position:absolute;z-index:999;top:-100px;left:-500px;width:120px;min-width:100px;";
        parentDOM.appendChild(Elm);
    }
    if(Elm){
        im_ToolTip._Tips[El] = Elm;
        im_ToolTip._Time[El] = [new Number(),new Number(),new Number()];
        im_ToolTip._step[El] = 30;
        return true;
    }
    return false;
}
function im_getTipHTML(strTip,tipID){
    sCssCrn = ' style="width:6px;padding:0px;margin:0px;overflow:hidden;line-height:0px;border:0px;';
    sVaT = 'vertical-align:top;" valign="top"';
    sVaB = 'vertical-align:bottom;" valign="bottom"';
    sCssImg = 'padding:0px;margin:0px;border:0px;';
    sImgZ = '" style="' + sCssImg + '" />';

    tt_sContent = '<table border="0" cellpadding="0" cellspacing="0" style="border:0px;width:auto;padding:0px;margin:0px;left:0px;top:0px;"><tr style="border:0px;">'
                // Left-top corner
                + '<td' + sCssCrn + sVaB + '>'
                + '<img src="' + im_ToolTip.IMG[1].src + '" width="6" height="6' + sImgZ
                + '</td>'
                // Top border
                + '<td valign="bottom" style="position:relative;padding:0px;margin:0px;overflow:hidden;border:0px;">'
                + '<img id="bALlOOnT_'+tipID+'" style="position:relative;top:1px;z-index:1;display:none;' + sCssImg + '" src="' + im_ToolTip.IMG[9].src + '" width="15" height="19" />'
                + '<div style="position:relative;z-index:0;padding:0px;margin:0px;overflow:hidden;width:auto;height:6px;background-image:url(' + im_ToolTip.IMG[2].src + ');">'
                + '</div>'
                + '</td>'
                // Right-top corner
                + '<td' + sCssCrn + sVaB + '>'
                + '<img src="' + im_ToolTip.IMG[3].src + '" width="6" height="6' + sImgZ
                + '</td>'
                + '</tr><tr style="border:0px;">'
                // Left border
                + '<td style="border:0px;position:relative;padding:0px;margin:0px;width:6px;overflow:hidden;background-image:url(' + im_ToolTip.IMG[8].src + ');">'
                // Redundant image for bugous old Geckos that won't auto-expand TD height to 100%
                + '<img width="6" height="100%" src="' + im_ToolTip.IMG[8].src + sImgZ
                + '</td>'
                // Content
                + '<td id="bALlO0nBdY" style="position:relative;line-height:normal;border:0px;'
                + ';background-image:url(' + im_ToolTip.IMG[0].src + ')'
                + ';color:' + im_ToolTip.FONTCOLOR
                + ';font-family:' + im_ToolTip.FONTFACE
                + ';font-size:' + im_ToolTip.FONTSIZE
                + ';font-weight:' + im_ToolTip.FONTWEIGHT
                + ';text-align:' + im_ToolTip.TEXTALIGN
                + ';padding:' + im_ToolTip.PADDING + 'px'
                + ';width:auto'
                + ';">' + strTip + '</td>'
                // Right border
                + '<td style="border:0px;position:relative;padding:0px;margin:0px;width:6px;overflow:hidden;background-image:url(' + im_ToolTip.IMG[4].src + ');">'
                // Image redundancy for bugous old Geckos that won't auto-expand TD height to 100%
                + '<img width="6" height="100%" src="' + im_ToolTip.IMG[4].src + sImgZ
                + '</td>'
                + '</tr><tr style="border:0px;">'
                // Left-bottom corner
                + '<td' + sCssCrn + sVaT + '>'
                + '<img src="' + im_ToolTip.IMG[7].src + '" width="6" height="6' + sImgZ
                + '</td>'
                // Bottom border
                + '<td valign="top" style="position:relative;padding:0px;margin:0px;overflow:hidden;text-align:left;border:0px;">'
                + '<div style="position:relative;left:0px;top:0px;padding:0px;margin:0px;overflow:hidden;width:auto;height:6px;background-image:url(' + im_ToolTip.IMG[6].src + ');"></div>'
                + '<img id="bALlOOnB_'+tipID+'" style="position:relative;top:-1px;z-index:1;display:inline;' + sCssImg + '" src="' + im_ToolTip.IMG[10].src + '" width="15" height="19" />'
                + '</td>'
                // Right-bottom corner
                + '<td' + sCssCrn + sVaT + '>'
                + '<img src="' + im_ToolTip.IMG[5].src + '" width="6" height="6' + sImgZ
                + '</td>'
                + '</tr></table>';
    try{
        return tt_sContent;
    }finally{
        tt_sContent = null;
    }
}
var swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return }f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){J.parentNode.removeChild(J);E()}}function E(){if(e){return }if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return }}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return }var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return }var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return }AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();
var im_flashVersion = swfobject.getFlashPlayerVersion().major;
var im_installFlashActionX = im_flashVersion<9 ? true : false;


//openimweindow_v2.js
var dzy_drag = function(o,s)
{
    if (typeof o == "string") o = document.getElementById(o);
    o.orig_x = parseInt(o.style.left) - document.body.scrollLeft;
    o.orig_y = parseInt(o.style.top) - document.body.scrollTop;
    o.orig_index = o.style.zIndex;

    o.onmousedown = function(a)
    {
        this.style.cursor = "move";
        this.style.zIndex = 10000;
        var d=document;
        if(!a)a=window.event;
        var x = a.clientX+d.body.scrollLeft-o.offsetLeft;
        var y = a.clientY+d.body.scrollTop-o.offsetTop;
        d.ondragstart = "return false;"
        d.onselectstart = "return false;"
        d.onselect = "document.selection.empty();"

        if(o.setCapture)
        o.setCapture();
        else if(window.captureEvents)
        window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);

        d.onmousemove = function(a)    {
            if(!a)a=window.event;
            o.style.left = a.clientX+document.body.scrollLeft-x;
            o.style.top = a.clientY+document.body.scrollTop-y;
            o.orig_x = parseInt(o.style.left) - document.body.scrollLeft;
            o.orig_y = parseInt(o.style.top) - document.body.scrollTop;
        }

        d.onmouseup = function(){
            if(o.releaseCapture)
            o.releaseCapture();
            else if(window.captureEvents)
            window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
            d.onmousemove = null;
            d.onmouseup = null;
            d.ondragstart = null;
            d.onselectstart = null;
            d.onselect = null;
            o.style.cursor = "normal";
            o.style.zIndex = o.orig_index;
        }
    }
    
    function __scroll(){
        o.style.left = o.orig_x + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        o.style.top = o.orig_y + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    }
    
    if (s){
        if (window.addEventListener) {
            window.addEventListener("scroll", __scroll, false);
        }else if(window.attachEvent){
            window.attachEvent("onscroll", __scroll);
        }
    }
}
var dzy_debug = {
    im_debug_MouseX:0,
    im_debug_MouseY:0,
    im_debug_ObjX:0,
    im_debug_ObjY:0,
    
    init:function(){
        document.write('<div id="debugDiv" style="z-index:999;position:absolute;left:0px;top:0px;width:650px;"><div id="debugTitle" style="background:#00f;color:#fff;cursor:move;text-align:left;padding:3px;padding-left:20px"><b><font color="#ffffff">[DEBUG] - MOUSEDOWN DRAG</font></b>&nbsp;&nbsp;&nbsp;&nbsp;<span id="btn_" style="cursor: pointer;">[<-]</span>&nbsp;&nbsp;<span id="btn+" style="cursor: pointer;">[->]</span></div><div id="debugSpan" style="opacity:0.6;filter:alpha(opacity:60);background:#000;text-align:left;border:1px solid #888;height:0px;width:auto;overflow-y:scroll;color:#0f0;"></div></div>')
        if(window.navigator.appName.indexOf("Microsoft") == 0){//IE
            document.getElementById('debugTitle').attachEvent("ondblclick", SET_MIN_debug);
            document.getElementById('btn+').attachEvent("onclick", SET_MIN_);
            document.getElementById('btn_').attachEvent("onclick", SET_MIN__);
        }else{
            document.getElementById('debugTitle').addEventListener("click", SET_MIN_debug, false); 
            document.getElementById('btn+').addEventListener("click", SET_MIN_, false); 
            document.getElementById('btn_').addEventListener("click", SET_MIN__, false); 
        }
        dzy_drag("debugDiv",true);
        
        function SET_MIN_debug(){
            var SpanStyle = document.getElementById('debugSpan').style;
            var BtnHTML  = document.getElementById('debugTitle');
            SpanStyle.height= SpanStyle.height=='300px' ? '0px' : '300px';
        }
        function SET_MIN_(){
            var Span = document.getElementById('debugSpan');
            Span.style.width = (Span.offsetWidth + 100) + 'px';
        }
        function SET_MIN__(){
            var Span = document.getElementById('debugSpan');
            Span.style.width = (Span.offsetWidth - 100) + 'px';
        }
    },    
    debug:function(out, showdebug){
        if(document.getElementById('debugSpan')){
            if(typeof out == "object"){
                var _out = '<br />array(' + out.length + ') = [';
                for(var k in out){
                    _out += ',<br />&nbsp;&nbsp;&nbsp;&nbsp;(' + typeof(out[k]) + ')' + k + '&nbsp;&nbsp;=>' + out[k];
                }
                out = _out + '<br />]';
            }
            document.getElementById('debugSpan').innerHTML += '[' + new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+'] - [DEBUG] - '+ out+"  [<a href=\"#\" onclick=\"dzy_debug.clear()\"><font color=\"#FFFFFF\">CLEAR</font></a>]<br />";
            document.getElementById('debugSpan').scrollTop=document.getElementById('debugSpan').scrollHeight;
        }
        showdebug = showdebug ? true : false;
        if(showdebug) {
            var SpanStyle = document.getElementById('debugSpan').style;
            SpanStyle.height= SpanStyle.height=='200px' ? '0px' : '200px';
        }
    },    
    clear:function(){
        document.getElementById('debugSpan').innerHTML='';
    },
    dispose:function(){
        var debugAttrib = document.getElementById('debugDiv');
        for(var id in debugAttrib){
            if(typeof(debugAttrib[id]) == "function"){
                eval("debugAttrib."+id+"=null");
            }
        }
    }
}
/*=======================================================================================================*/
var im_notshow_ad = false;
//var im_webchat_url = "http://wdknet.vicp.net/chat/2.4soufun/func/imwebchat.php";
//var im_buddylist_url = "http://wdknet.vicp.net/chat/2.4soufun/func/imbuddylist.php";
//var im_groupchat_url = "http://wdknet.vicp.net/chat/2.4soufun/func/imgroupchat.php";
//var im_webchat_url = "http://webim.myspace.cn/imwebchat.php";
//var im_buddylist_url = "http://webim.myspace.cn/imbuddylist.php";

function base64encode(input) {
    var keyStr = "ABCDEFGHIJKLMNOP" +
                "QRSTUVWXYZabcdef" +
                "ghijklmnopqrstuv" +
                "wxyz0123456789+/" +
                "=";
  input = escape(input);
  var output = "";
  var chr1, chr2, chr3 = "";
  var enc1, enc2, enc3, enc4 = "";
  var i = 0;

  do {
     chr1 = input.charCodeAt(i++);
     chr2 = input.charCodeAt(i++);
     chr3 = input.charCodeAt(i++);

     enc1 = chr1 >> 2;
     enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
     enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
     enc4 = chr3 & 63;

     if (isNaN(chr2)) {
        enc3 = enc4 = 64;
     } else if (isNaN(chr3)) {
        enc4 = 64;
     }

     output = output + 
        keyStr.charAt(enc1) + 
        keyStr.charAt(enc2) + 
        keyStr.charAt(enc3) + 
        keyStr.charAt(enc4);
     chr1 = chr2 = chr3 = "";
     enc1 = enc2 = enc3 = enc4 = "";
  } while (i < input.length);

  return output;
}

function im_openWebchat(myuid, myname, mysid, siteid, destuid, destname, chatid, userparam, isnewwindow, imScriptPath){
    var _dir = "";
    if(siteid=="csdn")
        _dir = "csdn/";
    if(!myuid || myuid.length<=0){
        var notifystr = "%u60A8%u5C1A%u672A%u767B%u5F55%uFF0C%u8BF7%u767B%u5F55%u540E%u518D%u4F7F%u7528%u5728%u7EBF%u804A%u5929%u529F%u80FD%uFF01";
        alert(unescape(notifystr));
        return null;
    }
    if(typeof(im_openWebchatInPage)!="undefined" && !isnewwindow){
        return im_openWebchatInPage(destuid, destname, chatid);
    }
    if(siteid=="cnmyspace"){
        im_notshow_ad = true;
        flashheight = "100%";
    }
    else
        flashheight = "94%";
    /*var curdate = new Date();
    var curtime = curdate.getTime();
    var cookiename = "imlastopenwindow"+destuid;
    var lastopentime = im_wdkUtil.GetCookie(cookiename);
    if(lastopentime){
        if(curtime-lastopentime<5000){
            return true;
        }
    }*/

    if(typeof(chatid)=="undefined")
        var chatid = null;
    if(typeof(userparam)=="undefined")
        var userparam = null;
    var isIE = window.navigator.appName.indexOf("Microsoft") == 0;

   var windowWidth = 544;
   var windowHeight = 428;
    var bshowlocation = isIE?"0":"0";
    var bshowlocation = "1";
    var webchatUrl = "";
    if(typeof(im_webchat_url)!="undefined" && im_webchat_url){
        webchatUrl = im_webchat_url;
        if(myuid) webchatUrl += "?myuid="+encodeURIComponent(myuid);
        if(myname) webchatUrl += "&myname="+encodeURIComponent(myname);
        if(mysid) webchatUrl += "&mysid="+encodeURIComponent(mysid);
        if(siteid) webchatUrl += "&siteid="+encodeURIComponent(siteid);
        if(destuid) webchatUrl += "&destuid="+encodeURIComponent(destuid);
        if(destname) webchatUrl += "&destname="+encodeURIComponent(destname);
        if(chatid) webchatUrl += "&chatid="+encodeURIComponent(chatid);
        if(userparam) webchatUrl += "&userparam="+encodeURIComponent(userparam);
    }
    
    try{
       var webchatWindow = window.open( webchatUrl, "imwebchat_"+destuid, "width="+windowWidth+",height="+windowHeight+",toolbar=0,directories=0,menubar=0,status=0,location="+bshowlocation+",scrollbars=0,resizable=1" );
    }
    catch(e){
        webchatWindow = null;
        return null;
    }
   if(webchatWindow){
         try{
             //webchatWindow.resizeTo(windowWidth, windowHeight);
           }catch(e){};
        webchatWindow.focus();
      }

    if(typeof(im_webchat_url)!="undefined" && im_webchat_url)
        return webchatWindow;

    var titlestr = unescape("%u4E0E")+destname+unescape("%u804A%u5929");
    var popinstr = unescape("%u8DF3%u5165");
    var docstr =
    '<html><head>\
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
    <title>'+titlestr+'</title>\
    </head>\
    <body bgcolor="#ffffff" bottommargin="0" leftmargin="0" marginheight="0" marginwidth="0" rightmargin="0" topmargin="0">\
      <div id="imwebchat" style="height:'+flashheight+'">\
      </div>\
        <script src="'+imScriptPath+'/promptwindow.js" type="text/javascript"></script>\
        <script src="'+imScriptPath+'/flashobject_v2.js" type="text/javascript"></script>\
        <script src="'+imScriptPath+'/openimwindow_v2.js" type="text/javascript"></script>\
        <script type="text/javascript">\
        var flashobj = null;\
        var promptwindow = null;\
            im_initChatWindow = function(){\
            n = navigator.userAgent.toLowerCase(),\
            tt_ie = n.indexOf("msie") != -1 && document.all;\
            flashobj = new FlashObject("'+imScriptPath+'/imbuddylist.swf", "webchatflash", "100%", "100%", "9", "#ffffff", false, "best");\
            flashobj.imFlashType = "webchat";\
            flashobj.imScriptPath = "'+imScriptPath+'";\
            flashobj.addParam("scale", "noscale");\
            flashobj.addParam("menu", "true");\
            flashobj.addParam("salign", "LT");\
            flashobj.addParam("allowScriptAccess", "always");\
            if(tt_ie)\
              flashobj.addParam("wmode", "Window");\
            else\
              flashobj.addParam("wmode", "Window");\
            flashobj.addVariable("sessionid", "'+encodeURIComponent(mysid)+'");\
            flashobj.addVariable("myuid", "'+encodeURIComponent(myuid)+'");\
            flashobj.addVariable("myname", "'+encodeURIComponent(myname)+'" );\
            flashobj.addVariable("siteid", "'+encodeURIComponent(siteid)+'" );\
            flashobj.addVariable("destuid", "'+encodeURIComponent(destuid)+'" );\
            flashobj.addVariable("destname", "'+encodeURIComponent(destname)+'" );\
            flashobj.addVariable("chatid", "'+encodeURIComponent(chatid?chatid:'')+'" );\
            flashobj.addVariable("userparam", "'+encodeURIComponent(userparam?userparam:'')+'" );\
            flashobj.write("imwebchat");\
            promptwindow = new PromptWindow();\
          promptwindow.init();\
        };\
        if(typeof(FlashObject)!="undefined")\
          im_initChatWindow();\
          </script>';
          
    if(!im_notshow_ad){
        docstr += 
        '<div style="width=100%;height=6%">\
          <span style="float:left;width:85%;height:22px;overflow:hidden;">\
            <a href="http://www.ntalker.com" target="_blank"><img border="0" src="'+imScriptPath+'/images/popchatad.gif" style="width:100%;height:20px"></a>\
          </span>\
          <span style="float:right;margin:0px;padding:0px;width:15%;height:100%">\
            <a href="#" onclick="javascript: im_popin_webchat();return false;">\
              <img style="width:50px;height:22px;float:right" border="0" src="'+imScriptPath+'/images/'+_dir+'btpopin.jpg"></img>\
            </a>\
          </span>\
         </div>';
    }
    docstr +='</body></html>';
    try{
      webchatWindow.document.open("text/html", "replace");
      webchatWindow.document.charset="utf-8";
      webchatWindow.document.write(docstr);
    }
    catch(e){
      alert(e);
      return null;
    }
    webchatWindow.document.close();
    webchatWindow.focus();
    return webchatWindow;
}
function im_openGroupChat(myuid, myname, mysid, siteid, groupid, groupname, chatid, userparam, isnewwindow, imScriptPath){
   if(!myuid || myuid.length<=0){
     var notifystr = "%u60A8%u5C1A%u672A%u767B%u5F55%uFF0C%u8BF7%u767B%u5F55%u540E%u518D%u4F7F%u7528%u5728%u7EBF%u804A%u5929%u529F%u80FD%uFF01";
     alert(unescape(notifystr));
     return null;
   }

   /*var curdate = new Date();
   var curtime = curdate.getTime();
   var cookiename = "imlastopenwindow"+destuid;
   var lastopentime = im_wdkUtil.GetCookie(cookiename);
   if(lastopentime){
       if(curtime-lastopentime<5000){
         return true;
      }
   }*/

   if(typeof(chatid)=="undefined")
     var chatid = null;
   if(typeof(userparam)=="undefined")
     var userparam = null;
   var isIE = window.navigator.appName.indexOf("Microsoft") == 0;
   
   var windowWidth = 560;
   var windowHeight = 515;
   var bshowlocation = isIE?"0":"0";
   var bshowlocation = "1";
   var webchatUrl = "";
   if(typeof(im_groupchat_url)!="undefined" && im_groupchat_url){
     webchatUrl = im_groupchat_url;
     if(myuid) webchatUrl += "?myuid="+(encodeURIComponent(myuid));
       if(myname) webchatUrl += "&myname="+(encodeURIComponent(myname));
       if(mysid) webchatUrl += "&mysid="+(encodeURIComponent(mysid));
       if(siteid) webchatUrl += "&siteid="+(encodeURIComponent(siteid));
       if(groupid) webchatUrl += "&groupid="+(encodeURIComponent(groupid));
       if(groupname) webchatUrl += "&groupname="+(encodeURIComponent(groupname));
       if(chatid) webchatUrl += "&chatid="+(encodeURIComponent(chatid));
       if(userparam) webchatUrl += "&userparam="+(encodeURIComponent(userparam));
     }
      
     try{
       var webchatWindow = window.open( webchatUrl, "imgrouptchat_"+groupid, "width="+windowWidth+",height="+windowHeight+",toolbar=0,directories=0,menubar=0,status=0,location="+bshowlocation+",scrollbars=0,resizable=1" );
   }
   catch(e){
     webchatWindow = null;
     return null;
   }
   if(webchatWindow){
         try{
             //webchatWindow.resizeTo(windowWidth, windowHeight);
           }catch(e){};
           webchatWindow.focus();
      }
      if(typeof(im_webchat_url)!="undefined" && im_webchat_url)
     return webchatWindow;

   var titlestr = "("+unescape("%u7FA4%u804A")+")"+groupname;
   flashheight = "100%";
     var docstr =
    '<html><head>\
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
    <title>'+titlestr+'</title>\
    </head>\
    <body bgcolor="#ffffff" bottommargin="0" leftmargin="0" marginheight="0" marginwidth="0" rightmargin="0" topmargin="0">\
      <div id="imwebchat" style="height:'+flashheight+'">\
      </div>\
        <script src="'+imScriptPath+'/promptwindow.js" type="text/javascript"></script>\
           <script src="'+imScriptPath+'/flashobject_v2.js" type="text/javascript"></script>\
           <script src="'+imScriptPath+'/openimwindow_v2.js" type="text/javascript"></script>\
          <script type="text/javascript">\
          var flashobj = null;\
          var promptwindow = null;\
            im_initChatWindow = function(){\
              n = navigator.userAgent.toLowerCase(),\
            tt_ie = n.indexOf("msie") != -1 && document.all;\
              flashobj = new FlashObject("'+imScriptPath+'/imgroup.swf", "webchatflash", "100%", "100%", "9", "#ffffff", false, "best");\
              flashobj.imFlashType = "webchat";\
              flashobj.imScriptPath = "'+imScriptPath+'";\
              flashobj.addParam("scale", "noscale");\
              flashobj.addParam("menu", "true");\
              flashobj.addParam("salign", "LT");\
              flashobj.addParam("allowScriptAccess", "always");\
              if(tt_ie)\
                flashobj.addParam("wmode", "Window");\
              else\
                flashobj.addParam("wmode", "Window");\
              flashobj.addVariable("sessionid", "'+encodeURIComponent(mysid)+'");\
              flashobj.addVariable("myuid", "'+encodeURIComponent(myuid)+'");\
              flashobj.addVariable("myname", "'+encodeURIComponent(myname)+'" );\
              flashobj.addVariable("siteid", "'+encodeURIComponent(siteid)+'" );\
              flashobj.addVariable("groupid", "'+encodeURIComponent(groupid)+'" );\
              flashobj.addVariable("groupname", "'+encodeURIComponent(groupname)+'" );\
              flashobj.addVariable("chatid", "'+encodeURIComponent(chatid?chatid:'')+'" );\
              flashobj.addVariable("userparam", "'+encodeURIComponent(userparam?userparam:'')+'" );\
              flashobj.write("imwebchat");\
              promptwindow = new PromptWindow();\
          promptwindow.init();\
        };\
        if(typeof(FlashObject)!="undefined")\
          im_initChatWindow();\
          </script>';
          
    docstr +='</body></html>';

    try{
      webchatWindow.document.open("text/html", "replace");
      webchatWindow.document.charset="utf-8";
      webchatWindow.document.write(docstr);
    }
    catch(e){
        alert(e);
      return null;
    }
    webchatWindow.document.close();
    webchatWindow.focus();
    return webchatWindow;
}
function im_openBuddyList(myuid, myname, mysid, siteid, userparam, imScriptPath){
    var _dir="";
    if(siteid=="csdn" )
        _dir = "csdn/";
    if (typeof(im_openwindow_inbuddylist)=='undefined'){
        if(!im_global.variable.user_id || im_global.variable.user_id.length<=0){
         var notifystr = "%u60A8%u5C1A%u672A%u767B%u5F55%uFF0C%u8BF7%u767B%u5F55%u540E%u518D%u4F7F%u7528%u5728%u7EBF%u804A%u5929%u529F%u80FD%uFF01";
         alert(unescape(notifystr));
         return null;
       }
    }
    if(typeof(userparam)=="undefined")
        var userparam = null;
    var isIE = window.navigator.appName.indexOf("Microsoft") == 0;
    var buddylistUrl = "";
    var windowWidth = 292;
    var windowHeight = 520;
    var bshowlocation = isIE?"0":"1";
    var bshowlocation = "1";
    var buddylistUrl = "";
    if(typeof(im_buddylist_url)!="undefined" && im_buddylist_url){
        buddylistUrl = im_buddylist_url;
        if(myuid) buddylisturl += "?myuid="+encodeURIComponent(myuid);
        if(myname) buddylisturl += "&myname="+encodeURIComponent(myname);
        if(mysid) buddylisturl += "&mysid="+encodeURIComponent(mysid);
        if(siteid) buddylisturl += "&siteid="+encodeURIComponent(siteid);
        if(userparam) buddylisturl += "&userparam="+encodeURIComponent(userparam);
   }
    
    try{
        var buddylistWindow = window.open( buddylistUrl, "imbuddylist_"+myuid, "width="+windowWidth+",height="+windowHeight+",toolbar=0,directories=0,menubar=0,status=0,location="+bshowlocation+",scrollbars=0,resizable=1" );
    }catch(e){
        buddylistWindow = null;
        return null;
    }
     if(buddylistWindow){
           try{
             //buddylistWindow.resizeTo(windowWidth, windowHeight);
           }catch(e){};
        buddylistWindow.focus();
   }
    if(typeof(im_buddylist_url)!="undefined" && im_buddylist_url)
        return buddylistWindow;

    if(siteid=="cnmyspace"){
        im_notshow_ad = true;
        flashheight = "100%";
        titlestr = unescape("%u805A%u53CB%u804A%u804A");
    }
    else if(siteid=="csdn"){
      flashheight = "94%";
      titlestr = unescape("CSDN%u5B9E%u65F6%u4FE1%u606F%u901A%u8BAF%u5E73%u53F0");
    }
    else{
        flashheight = "94%";
        titlestr = unescape("Ntalker");
    }
    var popinstr = unescape("%u8DF3%u5165");
    var docstr =
    '<html>\
     <head>\
         <meta http-equiv=Content-Type content="text/html;  charset=utf-8">\
         <title>'+titlestr+'</title>\
     </head>\
     <body bgcolor="#ffffff" bottommargin="0" leftmargin="0" marginheight="0" marginwidth="0" rightmargin="0" topmargin="0">\
       <div id="imbuddylist" style="height:'+flashheight+'">\
       </div>\
        <script src="'+imScriptPath+'/promptwindow.js" type="text/javascript"></script>\
           <script src="'+imScriptPath+'/flashobject_v2.js" type="text/javascript"></script>\
           <script src="'+imScriptPath+'/openimwindow_v2.js" type="text/javascript"></script>\
           <script type="text/javascript">\
           var flashobj = null;\n\
          var promptwindow = null;\n\
        im_initBuddylistWindow = function(){\n\
          n = navigator.userAgent.toLowerCase(),\n\
            nv = navigator.appVersion;\n\
            tt_ie = n.indexOf("msie") != -1 && document.all;\n\
               flashobj = new FlashObject("'+imScriptPath+'/imwdkbuddylist.swf", "buddylistflash", "100%", "100%", "9", "#ffffff", false, "best");\n\
              flashobj.imFlashType = "buddylist";\n\
              flashobj.imScriptPath = "'+imScriptPath+'";\
               flashobj.addParam("scale", "noscale");\n\
               flashobj.addParam("menu", "true");\n\
               flashobj.addParam("salign", "LT");\n\
               flashobj.addParam("allowScriptAccess", "always");\n\
               if(tt_ie)\n\
                flashobj.addParam("wmode", "Opaque");\n\
              else\n\
                flashobj.addParam("wmode", "Window");\n\
               flashobj.addVariable("sessionid", "'+encodeURIComponent(mysid)+'");\n\
               flashobj.addVariable("myuid", "'+encodeURIComponent(myuid)+'");\n\
               flashobj.addVariable("myname", "'+encodeURIComponent(myname)+'" );\n\
               flashobj.addVariable("mytitle", "'+encodeURIComponent(titlestr)+'" );\n\
               flashobj.addVariable("siteid", "'+encodeURIComponent(siteid)+'" );\n\
               flashobj.addVariable("userparam", "'+encodeURIComponent(userparam?userparam:'')+'" );\
               flashobj.write("imbuddylist");\n\
               var promptwindow = new PromptWindow();\n\
        }\n\
        if(typeof(FlashObject)!="undefined")\n\
          im_initBuddylistWindow();\n\
         </script>\n';
     if(typeof im_notshow_ad=="undefined" || !im_notshow_ad){
         docstr +=
            '<div style="width:100%;height:6%">\
                <span style="float:left;width:80%;height:100%;overflow: hidden;">\
                    <a href="http://www.ntalker.com" target="_blank" ><img border="0"  style="width:100%;height:20px" src="'+imScriptPath+'/images/popbuddyad.gif" /></a>\
                </span>\
                <span style="float:right;margin:0px;padding:0px;width:20%;height:100%">\
                    <a href="#" onclick="javascript: im_popin_buddylist();return false;">\
                        <img style="width:50px;height:22px;float:right;" border="0" src="'+imScriptPath+'/images/'+_dir+'btpopin.jpg" />\
                    </a>\
                </span>\
            </div>';
     }
    docstr +=    
        '</body>\
        </html>';
    try{
        buddylistWindow.document.open("text/html", "replace");
        buddylistWindow.document.charset="utf-8";
        buddylistWindow.document.write(docstr);
    }
    catch(e){
      return null;
    }
    buddylistWindow.document.close();
    buddylistWindow.focus();
    return buddylistWindow;

}


//buddylist flash will call this function when user double click buddy name in buddylist
function imOpenChatWindow(destuid, destname, myuid, myname, mysid, siteid, userparam){
   if(typeof(im_openWebchatInPage)!="undefined"){
     im_openWebchatInPage(destuid, destname);
     return true;
   }
   else{
     if(flashobj)
       im_openWebchat(myuid, myname, mysid, siteid, destuid, destname, null, userparam, true, flashobj.imScriptPath, "")
   }
}

//webchat flash will call this function when user  click buddylist button
function OnWebchatOpenBuddylist(myuid, myname, mysid, siteid, userparam){
    if(typeof(wdkfloat)!="undefined"){
        if(wdkfloat)
            wdkfloat.showWindow();
    }
    else{
        if(flashobj)
            im_openBuddyList(myuid, myname, mysid, siteid, userparam, flashobj.imScriptPath);
    }
}

function OnGroupOpenChatWindow(destuid, destname, myuid, myname, mysid, siteid, userparam){
  if(flashobj)
    im_openWebchat(myuid, myname, mysid, siteid, destuid, destname, null, userparam, true, flashobj.imScriptPath)
}
function OnGroupListOpenGroupWindow(groupid, groupname, myuid, myname, mysid, siteid, userparam){
  if(flashobj)
     im_openGroupChat(myuid, myname, mysid, siteid, groupid, groupname, null, userparam, true, flashobj.imScriptPath)
}

im_csdnInit();