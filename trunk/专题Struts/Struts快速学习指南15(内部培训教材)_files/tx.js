
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
                                alert("��Ǹ�������������֧��ֱ����Ϊ��ҳ�������������ַ�����롰about:config�����س�Ȼ��[signed.applets.codebase_principal_support]����Ϊ��true��������������ղء�����԰�ȫ��ʾ���������óɹ���");  
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }
}

function txShowMenuNews() {
document.write('<a href="http://exam.21tx.com/gwy/" target="_blank">2009ȫ������Ա��������</a>');
document.write('<br><a href="http://exam.21tx.com/it/djks/" target="_blank">2009��9�µȼ������������</a>');
document.write('<br><a href="http://www.21tx.com/about/job.html" target="_blank">��������Ƹ��վ�༭����</a>');
document.write('<br><a href="http://drivers.21tx.com/" target="_blank">������ȫ������������</a>');
}

function txShowCopyText() {
document.write("<div style='padding:20px;font-size:14px;line-height:150%;text-align:left;'><b>����Ҫ��������</b>���������ش��Ľ�Ϊ�ṩ������ϢĿ�ģ���������������ͬ�����µ�˵����������Ҳ�������κν��飬�Ա������κ����飬��<a href='http://txsite.21tx.com/script/contact.aspx?subject=���°�Ȩ��ϵ:" + txsite_pagetitle + "(" + txsite_pagekey + ")' target='_blank'>��ϵ����</a>��</div> ");
}

function txShowPageBtmBtn() {
document.write(' <TABLE style="BORDER-TOP: #B7B7B7 1px solid; BORDER-BOTTOM: #B7B7B7 1px solid; margin:auto;" height=30 cellSpacing=0 cellPadding=0 width=620 align=center border=0> ');
document.write(' <TR align=middle><TD width="9%"></TD> ');
document.write(" <TD noWrap width=18%><IMG height=17 src='http://www.21tx.com/images/data_cmd2.gif' width=17 align=absMiddle nowrap> ");
document.write(" <A href='http://txsite.21tx.com/script/contact.aspx?subject=���´���:" + txsite_pagetitle + "(" + txsite_pagekey + ")' target='_blank'>���¾���</A></TD> ");
document.write(" <TD noWrap width='19%'><IMG height=17 src='http://www.21tx.com/images/data_cmd3.gif' width=17 align=absMiddle nowrap> ");
document.write(" <A href='http://txsite.21tx.com/script/contact.aspx?subject=��ҪͶ��' target='_blank'>��ҪͶ��</A></TD> ");
document.write(" <TD noWrap width='14%'><IMG height=17 src='http://www.21tx.com/images/data_cmd4.gif' width=17 align=absMiddle nowrap> ");
document.write(" <A href=\"javascript:window.external.AddFavorite('" + txsite_pageurl + "', '" +  txsite_pagetitle + "')\">�����ղ�</A></TD> ");
document.write(" <TD width='14%' height=24><IMG height=17 src='http://www.21tx.com/images/data_cmd5.gif' width=17 align=absMiddle> ");
document.write(" <A href='#pagetop'>���ض���</A></TD> ");
document.write(' <TD width="11%" height=24></TD></TR></TABLE> ');
}






