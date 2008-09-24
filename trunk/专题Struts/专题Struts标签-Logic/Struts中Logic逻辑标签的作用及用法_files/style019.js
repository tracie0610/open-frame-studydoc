$cE.apdStyle('019','.styleCenterBg{filter:alpha(opacity=0);opacity:0;cursor:pointer;z-index:100}.CEStyle019{border:0 none;overflow:hidden;color:#000;font-family:宋体;font-size:12px;font-style:normal;font-weight:400;visibility:visible;text-align:center;width:216px;height:145px;cursor:pointer;text-decoration:none;white-space:normal;border-collapse:collapse;line-height:14px;margin:0;padding:0;z-index:99}',function(a,i,j){
	var EC="kwC(event,"+i+")";
	if(a.p.indexOf(".swf")>5){
		return "<DIV class=styleCenterBg onclick='"+EC+"'+ style=width:216px;height:145px;LEFT:0px;POSITION:absolute;TOP:0px;HEIGHT:144px;background:#c0c0c0; ></DIV><div class=CEStyle019><embed style=z-index:0 src=\""+a.p+"\" pluginspage=http://www.macromedia.com/go/getflashplayer type=\"application/x-shockwave-flash\" wmode=transparent height=144 width=192/></div>"
	}else{
		return "<div onclick=\""+EC+"\"><div style=width:192px;height:144px;cursor:pointer><img height=144px width=192px src=\""+a.p+"\" /></div></div>"
	}
});
