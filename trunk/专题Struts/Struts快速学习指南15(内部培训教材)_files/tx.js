
function txAddBookmark(title) {
var url=parent.location.href;
if (window.sidebar) { 
       window.sidebar.addPanel(title, url,""); 
} else if( document.all ) {
	window.external.AddFavorite( url, title);
} else if( window.opera && window.print ) {
	return true;
}
}

function txSetHome(obj,vrl){
        try{
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
                if(window.netscape) {
                        try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");  
                        }  
                        catch (e) 
 			{ 
                                alert("抱歉！您的浏览器不支持直接设为首页。请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为“true”，点击“加入收藏”后忽略安全提示，即可设置成功。");  
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }
}

function txShowMenuNews() {
document.write('<a href="http://exam.21tx.com/gwy/" target="_blank">2009全国公务员考试启动</a>');
document.write('<br><a href="http://exam.21tx.com/it/djks/" target="_blank">2009年9月等级考试试题详解</a>');
document.write('<br><a href="http://www.21tx.com/about/job.html" target="_blank">天新网招聘网站编辑美工</a>');
document.write('<br><a href="http://drivers.21tx.com/" target="_blank">最新最全电脑驱动下载</a>');
}

function txShowCopyText() {
document.write("<div style='padding:20px;font-size:14px;line-height:150%;text-align:left;'><b>【重要声明】：</b>天新网刊载此文仅为提供更多信息目的，并不代表天新网同意文章的说法或描述，也不构成任何建议，对本文有任何异议，请<a href='http://txsite.21tx.com/script/contact.aspx?subject=文章版权联系:" + txsite_pagetitle + "(" + txsite_pagekey + ")' target='_blank'>联系我们</a>。</div> ");
}

function txShowPageBtmBtn() {
document.write(' <TABLE style="BORDER-TOP: #B7B7B7 1px solid; BORDER-BOTTOM: #B7B7B7 1px solid; margin:auto;" height=30 cellSpacing=0 cellPadding=0 width=620 align=center border=0> ');
document.write(' <TR align=middle><TD width="9%"></TD> ');
document.write(" <TD noWrap width=18%><IMG height=17 src='http://www.21tx.com/images/data_cmd2.gif' width=17 align=absMiddle nowrap> ");
document.write(" <A href='http://txsite.21tx.com/script/contact.aspx?subject=文章错误:" + txsite_pagetitle + "(" + txsite_pagekey + ")' target='_blank'>文章揪错</A></TD> ");
document.write(" <TD noWrap width='19%'><IMG height=17 src='http://www.21tx.com/images/data_cmd3.gif' width=17 align=absMiddle nowrap> ");
document.write(" <A href='http://txsite.21tx.com/script/contact.aspx?subject=我要投稿' target='_blank'>我要投稿</A></TD> ");
document.write(" <TD noWrap width='14%'><IMG height=17 src='http://www.21tx.com/images/data_cmd4.gif' width=17 align=absMiddle nowrap> ");
document.write(" <A href=\"javascript:window.external.AddFavorite('" + txsite_pageurl + "', '" +  txsite_pagetitle + "')\">加入收藏</A></TD> ");
document.write(" <TD width='14%' height=24><IMG height=17 src='http://www.21tx.com/images/data_cmd5.gif' width=17 align=absMiddle> ");
document.write(" <A href='#pagetop'>返回顶部</A></TD> ");
document.write(' <TD width="11%" height=24></TD></TR></TABLE> ');
}






