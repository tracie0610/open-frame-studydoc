
var userAgent = navigator.userAgent.toLowerCase();
var is_webtv = userAgent.indexOf('webtv') != -1;
var is_kon = userAgent.indexOf('konqueror') != -1;
var is_mac = userAgent.indexOf('mac') != -1;
var is_saf = userAgent.indexOf('applewebkit') != -1 || navigator.vendor == 'Apple Computer, Inc.';
var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
var is_moz = (navigator.product == 'Gecko' && !is_saf) && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
var is_ns = userAgent.indexOf('compatible') == -1 && userAgent.indexOf('mozilla') != -1 && !is_opera && !is_webtv && !is_saf;
var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera && !is_saf && !is_webtv) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);

function $(id) {
	return document.getElementById(id);
}

function isUndefined(variable) {
	return typeof variable == 'undefined' ? true : false;
}



var jsmenu = new Array();
jsmenu['active'] = new Array();
jsmenu['timer'] = new Array();
jsmenu['iframe'] = new Array();

function initCtrl(ctrlobj, txturl, params, click, duration, timeout, layer) {
	if(ctrlobj && !ctrlobj.initialized) {
		ctrlobj.initialized = true;
		ctrlobj.unselectable = true;

		ctrlobj.outfunc = typeof ctrlobj.onmouseout == 'function' ? ctrlobj.onmouseout : null;
		ctrlobj.onmouseout = function() {
			if(this.outfunc) this.outfunc();
			if(duration < 3) jsmenu['timer'][ctrlobj.id] = setTimeout('hideMenu(' + layer + ')', timeout);
		}

		if(click && duration) {
			ctrlobj.clickfunc = typeof ctrlobj.onclick == 'function' ? ctrlobj.onclick : null;
			ctrlobj.onclick = function (e) {
				doane(e);
				if(jsmenu['active'][layer] == null || jsmenu['active'][layer].ctrlkey != this.id) {
					if(this.clickfunc) this.clickfunc();
					else showMenu(this.id,txturl,params,true);
				} else {
					hideMenu(layer);
				}
			}
		}

		ctrlobj.overfunc = typeof ctrlobj.onmouseover == 'function' ? ctrlobj.onmouseover : null;
		ctrlobj.onmouseover = function(e) {
			if(this.overfunc) this.overfunc();
			if(click) {
				clearTimeout(jsmenu['timer'][this.id]);
			} else {
				for(var id in jsmenu['timer']) {
					if(jsmenu['timer'][id]) clearTimeout(jsmenu['timer'][id]);
				}
			}
		}
	}
}

function initMenu(ctrlid, menuobj, duration, timeout, layer) {
	if(menuobj && !menuobj.initialized) {
		menuobj.initialized = true;
		menuobj.ctrlkey = ctrlid;
		//menuobj.onclick = ebygum;
		menuobj.style.position = 'absolute';
		if(duration < 3) {
			if(duration > 1) {
				menuobj.onmouseover = function() {
					clearTimeout(jsmenu['timer'][ctrlid]);
				}
			}
			if(duration != 1) {
				menuobj.onmouseout = function() {
					jsmenu['timer'][ctrlid] = setTimeout('hideMenu(' + layer + ')', timeout);
				}
			}
		}
		menuobj.style.zIndex = 50;
		if(is_ie && !is_mac) {
			menuobj.style.filter += "progid:DXImageTransform.Microsoft.shadow(direction=135,color=#CCCCCC,strength=2)";
		}
		//为下拉菜单增加透明效果
		if(menuobj.title == 'menu') {
            menuobj.style.filter += "progid:DXImageTransform.Microsoft.Alpha(opacity=85,finishOpacity=100,style=0)";
            menuobj.style.opacity = 0.85;
            menuobj.title = '';
        } 
	}
}
/**
 *  参数调用说明
 *  ctrlid: 对象id(必须)
 *  txturl: 可以是文本或超级链接(必须)
 *  params: 
 *      (1) 当txturl为文本时,params可不用或者使用TXT  
 *      (2) 当txturl为超级链接,params的格式为:URL:X:Y(X:表示内置Frame的宽,Y为高)如:URL:400:300
 *  其它参数自行阅读源码 
 *
 *
 */
function showMenu(ctrlid, txturl, params, click, offset, duration, timeout, layer, showid, maxh) {
    
    //临时创建下拉菜单
    if($(ctrlid+"_menu")==null){
        var m=document.createElement('span');
        m.id=ctrlid+"_menu";
        //增加title属性时,表示下拉菜单透明
        //m.title="menu";
        m.style.display="none";
        document.body.appendChild(m);
    }   
    
	var ctrlobj = $(ctrlid);
	if(!ctrlobj) return;
	if(isUndefined(click)) click = false;
	if(isUndefined(offset)) offset = 0;
	if(isUndefined(duration)) duration = 2;
	if(isUndefined(timeout)) timeout = 500;
	if(isUndefined(layer)) layer = 0;
	if(isUndefined(showid)) showid = ctrlid;
	var showobj = $(showid);
	var menuobj = $(showid + '_menu');
	if(!showobj|| !menuobj) return;
	if(isUndefined(maxh)) maxh = 400;

	hideMenu(layer);

	for(var id in jsmenu['timer']) {
		if(jsmenu['timer'][id]) clearTimeout(jsmenu['timer'][id]);
	}

	initCtrl(ctrlobj, txturl, params, click, duration, timeout, layer);
	initMenu(ctrlid, menuobj, duration, timeout, layer);

	menuobj.style.display = '';
	if(!is_opera) {
		menuobj.style.clip = 'rect(auto, auto, auto, auto)';
	}

    var obj=showobj;
    var left_offset = obj.offsetLeft;
	var top_offset = obj.offsetTop;
	while((obj = obj.offsetParent) != null) {
		left_offset += obj.offsetLeft;
		top_offset += obj.offsetTop;
	}
		
	var showobj_x = left_offset;
	var showobj_y = top_offset;
	var showobj_w = showobj.offsetWidth;
	var showobj_h = showobj.offsetHeight;
	var menuobj_w = menuobj.offsetWidth;
	var menuobj_h = menuobj.offsetHeight;

	menuobj.style.left = (showobj_x + menuobj_w > document.body.clientWidth) && (showobj_x + showobj_w - menuobj_w >= 0) ? showobj_x + showobj_w - menuobj_w + 'px' : showobj_x + 'px';
	menuobj.style.top = offset == 1 ? showobj_y + 'px' : (offset == 2 || ((showobj_y + showobj_h + menuobj_h > document.body.scrollTop + document.body.clientHeight) && (showobj_y - menuobj_h >= 0)) ? (showobj_y - menuobj_h) + 'px' : showobj_y + showobj_h + 'px');
    
    // add by jxva 2007-11-17
    menuobj.style.backgroundColor="#FFFFFF";
    menuobj.style.padding="4px";
    menuobj.style.border="1px solid #cccccc";
    if(isUndefined(params)||params=="TXT"){
        menuobj.innerHTML=txturl;
    }else{
        var params_array=params.split(":");
        menuobj.innerHTML="<iframe name=\"menuFrame\" frameborder=\"0\"  width=\""+params_array[1]+"\" height=\""+params_array[2]+"\"  scrolling=\"no\" src=\""+txturl+"\" allowtransparency=\"true\"></iframe>";
    }
    
	if(menuobj.style.clip && !is_opera) {
		menuobj.style.clip = 'rect(auto, auto, auto, auto)';
	}

	if(is_ie && is_ie < 7) {
		if(!jsmenu['iframe'][layer]) {
			var iframe = document.createElement('iframe');
			iframe.style.display = 'none';
			iframe.style.position = 'absolute';
			iframe.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';
			$('jsmenu_parent') ? $('jsmenu_parent').appendChild(iframe) : menuobj.parentNode.appendChild(iframe);
			jsmenu['iframe'][layer] = iframe;
		}
		jsmenu['iframe'][layer].style.top = menuobj.style.top;
		jsmenu['iframe'][layer].style.left = menuobj.style.left;
		jsmenu['iframe'][layer].style.width = menuobj_w;
		jsmenu['iframe'][layer].style.height = menuobj_h;
		jsmenu['iframe'][layer].style.display = 'block';
	}

	if(maxh && menuobj.scrollHeight > maxh) {
		menuobj.style.height = maxh + 'px';
		if(is_opera) {
			menuobj.style.overflow = 'auto';
		} else {
			menuobj.style.overflowY = 'auto';
		}
	}

	if(!duration) {
		setTimeout('hideMenu(' + layer + ')', timeout);
	}

	jsmenu['active'][layer] = menuobj;
}

function hideMenu(layer) {
	if(isUndefined(layer)) layer = 0;
	if(jsmenu['active'][layer]) {
		clearTimeout(jsmenu['timer'][jsmenu['active'][layer].ctrlkey]);
		jsmenu['active'][layer].style.display = 'none';
		if(is_ie && is_ie < 7 && jsmenu['iframe'][layer]) {
			jsmenu['iframe'][layer].style.display = 'none';
		}
		jsmenu['active'][layer] = null;
	}
}