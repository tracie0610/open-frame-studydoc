
var dictcn_daily = false;
if (document.all){
	dictcn_daily = document.all['dict_daily'];
}else if(document.getElementById){
	dictcn_daily = document.getElementById('dict_daily');
}
if(dictcn_daily){
	dictcn_daily.innerHTML = '[4.15]<a href="http://dict.cn/foot/help2.htm" target="_blank">&#27599;&#26085;&#19968;&#21477;</a>: <a href="http://dict.cn/ketang/kouyu/" target="_blank"><i>In spite of the heavy rain, she went to the shop.</i> &#23613;&#31649;&#19979;&#30528;&#22823;&#38632;&#65292;&#22905;&#36824;&#26159;&#21435;&#20102;&#21830;&#24215;&#12290;</a> <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="13" height="13" align="absmiddle"><param name="allowScriptAccess" value="always" /><param name="movie" value="http://dict.cn/audio/dict.swf" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><param name="FlashVars" value="audio=20090415"><embed src="http://dict.cn/audio/dict.swf" loop="false" menu="false" quality="high" bgcolor="#ffffff" width="13" height="13" align="absmiddle" allowScriptAccess="always" FlashVars="audio=20090415" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';
}
