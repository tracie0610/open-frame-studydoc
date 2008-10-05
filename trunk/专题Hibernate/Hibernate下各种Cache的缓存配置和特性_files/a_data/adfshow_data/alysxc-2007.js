function alysxc(u,w,h,p,d,c,b,i,r,a){//2.0.3
var o=document.getElementById(d),ad;p=(!p)?'Transparent':'Opaque';
ad='<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://active.macromedia.com/flash2/cabs/swflash.cab#version=4,0,0,0" WIDTH="'+w+'" HEIGHT="'+h+'"><PARAM NAME="movie" VALUE="'+u+'"><PARAM NAME="wmode" VALUE="'+p+'"><EMBED src="'+u+'" WIDTH="'+w+'" HEIGHT="'+h+'" WMODE="'+p+'" TYPE="application/x-shockwave-flash"></EMBED></OBJECT>';
o.innerHTML=(!i)?'<div style="POSITION:relative;Z-INDEX:1;width:'+w+'px;height:'+h+'px"><DIV style="POSITION:absolute;left:0;top:0;Z-INDEX:2;width:'+w+'px;height:'+h+'px">'+ad+'</div><a href="'+a+'" target="_blank"><IMG SRC="'+c+'/main/adfshow?local=1x1.gif" style="POSITION:absolute;left:'+((r)?r[3]:0)+'px;top:'+((r)?r[0]:0)+'px;Z-INDEX:3;width:'+((r)?(w-r[1]-r[3]):w)+'px;height:'+((r)?(h-r[0]-r[2]):h)+'px" border=0></a></div>':ad;
return d;}
