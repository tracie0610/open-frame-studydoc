function insertFlash(elm, url, w, h, id) {
 if (!document.getElementById(elm)) return;
 var str = '';
 str += '<embed width="'+ w +'" height="'+ h +'" src="'+ url +'" quality="autohigh" wmode="opaque" type="application/x-shockwave-flash" plugspace="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" id='+id+'></embed>';
 document.getElementById(elm).innerHTML = str;
}