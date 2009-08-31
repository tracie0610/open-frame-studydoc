// JScript 文件

 
if(typeof(gms) != 'undefined') 
	{
	var outhtml='<table width="100%;" border="0" cellspacing="0" cellpadding="0"><tr>';
	var p1='<td class="y_l"><dl><dt>热门Tag</dt>';
	var p2='<td class="y_r"><span></span><dl>';
	var ad_tags=',';
	for (var k in gms) {
		if(typeof(gms[k].title)=='undefined') continue;
		if(gms[k].tag!='' && ad_tags.indexOf(','+gms[k].tag+',')==-1 ){
			p1+='<dd><a target=_blank href="http://tag.csdn.net/tag/'+gms[k].tag+'" target="_blank">'+gms[k].tag+'</a></dd>';
			ad_tags+=gms[k].tag+',';
		}
		p2+='<dt><a target=_blank href="'+gms[k].link+'">'+gms[k].title+'</a></dt>';
		p2+='<dd>'+gms[k].desc1+"   "+gms[k].desc2+' '+'</dd>';
		p2+='<dd><a target=_blank href="'+gms[k].link+'">'+gms[k].displink+'</a></dd>';
	}
	if(ad_tags!=',') outhtml+=p1;
	p1+='</dl></td>';
	p2+='</dl></td>';
	outhtml+=p2+'</tr></table>';
	document.getElementById("csdn_zhaig_ad_yahoo_2").innerHTML=outhtml;
	document.getElementById("csdn_zhaig_ad_yahoo").style.display="none";
 }