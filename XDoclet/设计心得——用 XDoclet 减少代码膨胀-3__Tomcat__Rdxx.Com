<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>设计心得——用 XDoclet 减少代码膨胀-3__Tomcat__Rdxx.Com</title>
<link type="text/css" href="http://www.rdxx.com/images/content.css" rel="stylesheet"  />
</head>
<!-- Created Page at 2008-4-3 21:36:47 -->
<body>

<div id="main">
<a name="top"></a>
<div id="header">
	<div id="maintop">
      <div id="Logo"><a href="http://www.rdxx.com"><img src="http://www.rdxx.com/images/Logo.gif" alt="热点信息网" width="180" height="60" border="0" /></a></div>
	  <div id="TopAds">
	    <!-- ad -->
		<iframe scrolling="no" frameborder="0" width="468" height="60" src="http://js4.all4ad.net/dell/dell_468x60.asp?id=236"></iframe>
	    <!-- ad end -->
      </div>
	  <div id="toprightmenu"> <a href="javascript:window.external.addFavorite('http://www.rdxx.com/','热点信息网')"><img src="http://www.rdxx.com/images/v1.jpg" alt="加入收藏夹" name="Image21" width="77" height="17" border="0" id="Image21" /></a> <a href="http://wpa.qq.com/msgrd?V=1&amp;Uin=9962164&amp;Site=By%20Rdxx.Com&amp;Menu=yes" target="_blank"><img src="http://www.rdxx.com/images/v2.jpg" alt="与我们联系" width="77" height="17" border="0" /></a> <a href="/help/about.htm"><img src="http://www.rdxx.com/images/v3.jpg" alt="帮助" width="77" height="17" border="0" /></a> </div>
    </div>
	<div class="navup">
	 <div id="nav-up-left">
	  <ul class="TabBarLevel1">
		<li><a href="http://www.rdxx.com/" class="white">首页</a></li>
		<li><a href="http://os.rdxx.com" class="white">操作系统</a></li>
		<li><a href="http://net.rdxx.com" class="white">网络技术</a></li>
		<li><a href="http://soft.rdxx.com" class="white">软件技术</a></li>
		<li><a href="http://hw.rdxx.com" class="white">硬件天地</a></li>
		<li><a href="http://web.rdxx.com" class="white">WEB开发</a></li>
		<li class="Selected"><a href="http://dev.rdxx.com" class="white">编程开发</a></li>
		<li><a href="http://db.rdxx.com" class="white">数据库</a></li>
		<li><a href="http://mg.rdxx.com" class="white">网站运营</a></li>
		<li><a href="http://www.rdxx.com/GuestBook/" class="white"><font color="red">意见留言</font></a></li>
	  </ul>
<!--频道下属栏目列表-->
		<div class="submenu"><a href="http://dev.rdxx.com/" class="white">编程首页</a> | <a href="/C/" class="white">C/C++</a> | <a href="/VB/" class="white">Visual Basic</a> | <a href="/VC/" class="white">Visual C++</a> | <a href="/NET/" class="white">.NET</a> | <a href="/Java/" class="white">Java</a> | <a href="/Delphi/" class="white">Delphi</a> | <a href="/NET/" class="white">LOTUS</a> | <a href="/C++Builder/" class="white">C++Builder</a> | <a href="/ASM/" class="white">汇编</a> | <a href="/SoftProject/" class="white">软件工程</a></div>
	 </div>
	</div>
</div>
<div class="mainline">&nbsp;</div>
<!-- 主栏目开始 -->
<div id="header2">
	<!-- ad -->
</div>
<!-- <base target="_blank" /> -->

<script language="JavaScript" type="text/javascript">
<!--
if(document.documentElement.offsetWidth+100<=screen.availWidth){
	self.moveTo(0,0)
	self.resizeTo(screen.availWidth,screen.availHeight)
}
//-->
</script>
</div>

<div id="wrap">
<!-- 通栏广告1 -->
<div class="mainline">&nbsp;</div>
<div class="maincolumn">
	<div class="mainleft">
		<div class="sublist">
		<div class="sublisttitleico">&nbsp;</div>
		<div class="sublisttitlebg">
		<div class="sublisttitlename">您的位置：<a href="http://www.rdxx.com/index.shtml" target="_blank">首页</a> >> <a href="http://dev.rdxx.com/" target="_blank">编程开发</a> >> <a href="http://dev.rdxx.com/Java/" target="_blank">Java</a> >> <a  href="http://dev.rdxx.com/Java/Tomcat/" target="_blank">Tomcat</a> >> 正文</div>
		<div class="sublisttitlemore"><a href="http://dev.rdxx.com/Java/Tomcat/RSS.xml" target="_blank"><img src="http://www.rdxx.com/images/xml.gif" border="0" alt="Tomcat RSS" /></a></div>
		</div>
		<div class="clear">&nbsp;</div>
		<DIV id=newsview>
<DIV class=title align=center>
<H1><a href="http://soft.rdxx.com/Design/" target="_blank">设计</a>心得——用 XDoclet 减少代码膨胀</H1>
<H2>http://www.rdxx.com 05年07月28日 00:00 <FONT color=#a20010></FONT> <A href="http://www.rdxx.com/User/contr/contrEdit.asp?action=add" target=_blank>我要投稿</A></H2></DIV>
<DIV class=keyword align=left>关键词： <a href="http://www.rdxx.com/Class/%D0%C4%B5%C3.shtml" target="_blank">心得</a> , <a href="http://www.rdxx.com/Class/XDoclet.shtml" target="_blank">XDoclet</a> , <a href="http://www.rdxx.com/Class/%B4%FA%C2%EB.shtml" target="_blank">代码</a> , <a href="http://soft.rdxx.com/Design/" target="_blank">设计</a>  
<DIV id=gglink></DIV></DIV>
<DIV class=content onload="this.style.overflowX='auto';">
<DIV id=contentAdv></DIV>e String postalCode = ""; private long id = 0;　 public AddressBean() { }　/**　　　　　* @dw.gen<a href="http://dev.rdxx.com/Java/Struts/" target="_blank">Struts</a> formlabel="Street Number" * @hibernate.property length="10"*/ public String getStreetNumber() {　　return streetNumber; }　public void setStreetNumber(String inpStreetNumber) {　　streetNumber = inpStreetNumber;　}　/**　　　　　* @dw.genStruts formlabel="Street" * @hibernate.property　length="40"*/ public String getStreet() {　　 return street; }　public void setStreet(String inpStreet) {　　street = inpStreet; }　　　　　 ...... more Address bean properties ...... /**　　　　　* @hibernate.id generator-class="native"*/ public long getId(　) {　　　　 return id; }　public void setId(long inId) {　　id = inId; }　}<BR>　　<BR>　　在清单 1 中，需要注意的是，要把 XDoclet 标签嵌入到注释中，紧放在相关代码元素（例如字段、方法、接口或类）的前面。在解析源代码时，XDoclet 会为每个标签建立一个属性，并将该属性附加到结构模型的代码元素上。现在，请注意 ;@dw.genStruts 标签，因为这是在本例中将用到的第一个模板。<BR>　　<BR>　　生成另外一个 <a href="http://dev.rdxx.com/Java/" target="_blank">Java</a> 类<BR>　　<BR>　　对于本例，您需要生成新的 Java 类的代码 —— 一个 Struts 表单 bean。Struts 会用这个 bean 保存并传输用户输入。bean 必须以 bean 属性的形式包含所有数据字段，而且它必须是 org.apache.struts.action.ActionForm 的子类。<BR>　　<BR>　　为了生 <P align="center" style="clear:both;"><a href="./32111852535.shtml" title="第一页"><font face="webdings">9</font></a> 
<font color=#999999 title="上十页"><font face="webdings">7</font></font> 
<a href="./32111852535_2.shtml" title="上一页"><font face="webdings">3</font></a> 
<a href="./32111852535.shtml">1</a>
<a href="./32111852535_2.shtml">2</a>
<b>3</b>
<font color=#999999 title="下一页"><font face="webdings">4</font></font> 
 <font color=#999999  title="下十页"><font face="webdings">8</font></font> 
<font color=#999999 title="尾页"><font face="webdings">:</font></font>
</P></DIV><BR>
<DIV class=next>下一篇：<a href="http://dev.rdxx.com/Java/Tomcat/2008/4/32111863152.shtml">利弊分析——浅析开源的现实作用</a><BR>上一篇：<a href="http://dev.rdxx.com/Java/Tomcat/2008/4/32111892864.shtml">Win2000 Server IIS和Tomcat5多站点配置</a></DIV></DIV>
<DIV class=clear>&nbsp;</DIV>
<DIV><IMG src="http://www.rdxx.com/Click.asp?type=html&SubSys=NS&id=165068" width="0" height="0" border="0" /></DIV>
<DIV class=clear>&nbsp;</DIV>
<DIV class=tool><SPAN>标签： <a href="http://www.rdxx.com/Class/%D0%C4%B5%C3.shtml" target="_blank">心得</a> , <a href="http://www.rdxx.com/Class/XDoclet.shtml" target="_blank">XDoclet</a> , <a href="http://www.rdxx.com/Class/%B4%FA%C2%EB.shtml" target="_blank">代码</a> , <a href="http://soft.rdxx.com/Design/" target="_blank">设计</a> </SPAN><script type="text/javascript">
<!-- 
document.write("<a target=\"_blank\" href=\"http://www.rdxx.com/User/AddFavor.asp?Id=165068&Type=ns\" class=\"button_content\" style=\"CURSOR:hand\" onClick=\"window.external.AddFavorite(document.location.href,document.title)\" onMouseMove=\"status='收藏本页';\" onMouseOut=\"status='';\">添加到收藏夹</a>");
-->
</script> <script type="text/javascript">
<!-- 
document.write("<a href=\"http://www.rdxx.com/User/Sendmail.asp?Id=165068&Type=ns\" class=\"button_content\" target=\"_blank\" onMouseMove=\"status='发送给您的好友';\" onMouseOut=\"status='';\">发送给好友</a>");
-->
</script> <A class=button_content title=打印本文 href="javascript:window.print();" target=_self>打印本文</A> </DIV>
		<div class="clear">&nbsp;</div>
		</div>
		<div class="sublist" id="favorite">
		</div>
		<div class="sublist">
		<!--相关区块 -->
		<div class="sublisttitleico">&nbsp;</div>
		<div class="sublisttitlebg">
		<div class="sublisttitlename">&nbsp;&nbsp;相关资讯</div>
		<div class="sublisttitlemore"><a href="http://www.rdxx.com/RSS/" target="_blank"><img src="http://www.rdxx.com/images/xml.gif" border="0" alt="RSS" /></a></div>
		</div>
		<div class="clear">&nbsp;</div>
		<div id="newsview"> 
		  <div id="newsdaodu">
		  <ul><li><SPAN>2005-05-08</SPAN><A href="http://dev.rdxx.com/Java/JavaBeans/2005-05/8/101524145.shtml" target=_blank>Entity&nbsp;Bean的使用和经验（含XDoclet的使用</A></li>
<li><SPAN>2005-07-27</SPAN><A href="http://dev.rdxx.com/Java/JavaBase/Eclipse/2005-07/27/103042766.shtml" target=_blank>在eclipse中使用JBossIDE和xDoclet创建EJB</A></li>
<li><SPAN>2005-06-17</SPAN><A href="http://dev.rdxx.com/Java/2005-06/17/101619911.shtml" target=_blank>《XDoclet&nbsp;in&nbsp;Action》部分章节中文版</A></li>
<li><SPAN>2005-07-24</SPAN><A href="http://dev.rdxx.com/Java/3lib/2005-7/24/012915262.shtml" target=_blank>《XDoclet&nbsp;in&nbsp;Action》部分章节中文版</A></li>
<li><SPAN>2005-09-13</SPAN><A href="http://dev.rdxx.com/Java/Struts/2005-09/13/10241442.shtml" target=_blank>用&nbsp;hibernate&nbsp;和&nbsp;xdoclet&nbsp;开发&nbsp;数据库应用程</A></li>
<li><SPAN>2005-07-27</SPAN><A href="http://dev.rdxx.com/Java/JavaBeans/2005-07/27/103014463.shtml" target=_blank>Entity&nbsp;Bean的使用和经验（含XDoclet的使用</A></li>
<li><SPAN>2005-07-27</SPAN><A href="http://dev.rdxx.com/Java/2005-07/27/10183559.shtml" target=_blank>快速上手XDoclet&nbsp;1&nbsp;--&nbsp;Servlet简单实例</A></li>
<li><SPAN>2004-02-27</SPAN><A href="http://dev.rdxx.com/Java/Struts/2004-02/27/095610584.shtml" target=_blank>其它技术和Hibernate-XDoclet</A></li>
<li><SPAN>2004-12-24</SPAN><A href="http://dev.rdxx.com/Java/Struts/2004-12/24/100933584.shtml" target=_blank>xdoclet&nbsp;与&nbsp;hibernate</A></li>
<li><SPAN>2005-07-27</SPAN><A href="http://dev.rdxx.com/Java/2005-07/27/10315148.shtml" target=_blank>《XDoclet&nbsp;in&nbsp;Action》部分章节中文版</A></li>
</ul>
		  </div>
		</div>
		<div class="clear">&nbsp;</div>
		<!-- 相关区块结束 -->
		</div>
	</div>
<div class="mainright">
<!-- 搜索 -->
	<div class="rightblock">
	<div class="righttitleico">&nbsp;</div>
	<div class="righttitlename">&nbsp;&nbsp;热点搜索</div>
	<div class="clear">&nbsp;</div>
	<div id="search">
	<!--
<form action="http://www.rdxx.com/Search.asp" method="get" name="SearchForm" target="_blank" id="SearchForm">
  <input name="Keyword" type="text" id="Keyword" size="15" /><br />
<input type="submit" id="SearchSubmit" value="搜索" /></form>
-->
<!-- SiteSearch Baidu -->
<SCRIPT language=javascript>
function g(formname)	{
var url = "http://www.baidu.com/baidu";
if (formname.s[1].checked) {
	formname.ct.value = "2097152";
}
else {
	formname.ct.value = "0";
}
formname.action = url;
return true;
}
</SCRIPT>

<form name="f1" onsubmit="return g(this)" target="_blank">
<table border="0">
<tr><td nowrap="nowrap" valign="top" align="left" height="32">

<br/>
<label for="sbi" style="display: none">输入您的搜索字词</label>
<input type="text" name="word" size="18" maxlength="255" value="" id="sbi"></input>
</td></tr>
<tr>
<td nowrap="nowrap">
<table>
<tr>
<td>
<input type="radio" name="s" value="" id="ss0"></input>
<label for="ss0" title="搜索网络"><font size="-1" color="black">Web</font></label></td>
<td>
<input type="radio" name="s" value="rdxx.com" checked id="ss1"></input>
<label for="ss1" title="搜索 rdxx.com"><font size="-1" color="black">rdxx.com</font></label></td>
</tr>
</table>
<label for="sbb" style="display: none">提交搜索表单</label>
<input type="submit" name="sa" value="搜索" id="sbb"></input>
<input name=tn type=hidden value="bds">
<input name=cl type=hidden value="3">
<input name=ct type=hidden>
<input name=si type=hidden value="rdxx.com">
</td></tr></table>
</form>
<!-- SiteSearch Baidu -->
	</div>
	</div>
<!-- 搜索结束 -->
<!-- 图文 -->
	<div class="rightblock">
	<div class="righttitleico">&nbsp;</div>
	<div class="righttitlename">&nbsp;&nbsp;热点导读</div>
	<div class="clear">&nbsp;</div>
	<div class="picrightlist">
	<ul id="ClassPicNews"><li><a class="" href="http://hw.rdxx.com/hw-News/2008/10/2022535334909.shtml" title="最低2998元&nbsp;十月第二季新品笔记本推荐" target="_blank"><img src="http://www.rdxx.com/Files/Small/183638.jpg" height="100" width="150" border="0" alt="最低2998元 十月第二季新品笔记本推荐" /></a><br /><a class="" href="http://hw.rdxx.com/hw-News/2008/10/2022535334909.shtml" title="最低2998元&nbsp;十月第二季新品笔记本推荐" target="_blank">最低2998元&nbsp;十月第二季新品</a></li><li><a class="" href="http://os.rdxx.com/Windows7/2008/10/1412384761423.shtml" title="微软下一代操作系统正式定名为Windows&nbsp;7" target="_blank"><img src="http://www.rdxx.com/Files/Small/182940.jpg" height="100" width="150" border="0" alt="微软下一代操作系统正式定名为Windows 7" /></a><br /><a class="" href="http://os.rdxx.com/Windows7/2008/10/1412384761423.shtml" title="微软下一代操作系统正式定名为Windows&nbsp;7" target="_blank">微软下一代操作系统正式定</a></li><li><a class="" href="http://os.rdxx.com/WindowsXP/2008/6/2522231290234.shtml" title="微软保证提供Windows&nbsp;XP支持至2014年" target="_blank"><img src="http://www.rdxx.com/Files/Small/173156.jpg" height="100" width="150" border="0" alt="微软保证提供Windows XP支持至2014年" /></a><br /><a class="" href="http://os.rdxx.com/WindowsXP/2008/6/2522231290234.shtml" title="微软保证提供Windows&nbsp;XP支持至2014年" target="_blank">微软保证提供Windows&nbsp;XP支</a></li><li><a class="" href="http://os.rdxx.com/Windows7/2008/5/26243823399.shtml" title="传Windows&nbsp;7将于27日首次正式亮相" target="_blank"><img src="http://www.rdxx.com/Files/Small/170410.jpg" height="100" width="150" border="0" alt="传Windows 7将于27日首次正式亮相" /></a><br /><a class="" href="http://os.rdxx.com/Windows7/2008/5/26243823399.shtml" title="传Windows&nbsp;7将于27日首次正式亮相" target="_blank">传Windows&nbsp;7将于27日首次正</a></li><li><a class="" href="http://hw.rdxx.com/MartTrade/2008/5/817291373846.shtml" title="五月选卡指南&nbsp;399-699元超值显卡推荐" target="_blank"><img src="http://www.rdxx.com/Files/Small/168707.jpg" height="100" width="150" border="0" alt="五月选卡指南 399-699元超值显卡推荐" /></a><br /><a class="" href="http://hw.rdxx.com/MartTrade/2008/5/817291373846.shtml" title="五月选卡指南&nbsp;399-699元超值显卡推荐" target="_blank">五月选卡指南&nbsp;399-699元超</a></li></ul>
	<div id="firefox18060"></div>
	</div>
	</div>
<!-- 图文结束 -->
<!-- 热点 -->
	<div class="rightblock">
	<div class="righttitleico">&nbsp;</div>
	<div class="righttitlename">&nbsp;&nbsp;热点文章</div>
	<div class="clear">&nbsp;</div>
	<div class="subrightlist pagerightlist">
	<ul><li><a href="http://soft.rdxx.com/Apply/Office/Word/2008/12/131336012769.shtml" title="在Word&nbsp;2007文档中设置纸张方向" target="_blank">在Word&nbsp;2007文档中设置纸张方</a></li><li><a href="http://os.rdxx.com/Windows7/2008/12/1320523773496.shtml" title="46%企业要跳过Vista直接升级Windows&nbsp;7" target="_blank">46%企业要跳过Vista直接升级</a></li><li><a href="http://soft.rdxx.com/Design/Show/PlaneDesign/2008/12/1614511890366.shtml" target="_blank">丹麦设计师平面设计作品欣赏</a></li><li><a href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1711384981529.shtml" title="找回Word&nbsp;2007的视图并排查看功能" target="_blank">找回Word&nbsp;2007的视图并排查看</a></li><li><a href="http://os.rdxx.com/Windows7/2008/12/1420562470416.shtml" title="关于Windows&nbsp;7你需要了解的一切" target="_blank">关于Windows&nbsp;7你需要了解的一</a></li><li><a href="http://soft.rdxx.com/Apply/Office/Word/2008/12/131336091506.shtml" title="Word&nbsp;2007中插入“新建栏”分节符" target="_blank">Word&nbsp;2007中插入“新建栏”分</a></li><li><a href="http://os.rdxx.com/Windows7/2008/12/1520594553238.shtml" title="Windows&nbsp;7&nbsp;x64版本国内种子下载" target="_blank">Windows&nbsp;7&nbsp;x64版本国内种子下</a></li><li><a href="http://dev.rdxx.com/NET/CSharp/2008/12/131362793283.shtml" title="C#遍历整个文件夹及子目录的文件代码" target="_blank">C#遍历整个文件夹及子目录的</a></li><li><a href="http://soft.rdxx.com/Design/Show/PlaneDesign/2008/12/1614511899326.shtml" title="Greg&nbsp;Bennett国外精美平面设计作品" target="_blank">Greg&nbsp;Bennett国外精美平面设</a></li><li><a href="http://hw.rdxx.com/hw-News/2008/12/121533022291.shtml" title="NEC19WMGX拳头产品成市场常胜将军" target="_blank">NEC19WMGX拳头产品成市场常胜</a></li><li><a href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1711384927797.shtml" title="Word&nbsp;2007文档中设置纸张大小技巧" target="_blank">Word&nbsp;2007文档中设置纸张大小</a></li><li><a href="http://os.rdxx.com/Vista/VistaTrait/2008/12/1513512573988.shtml" title="Windows&nbsp;Vista和Windows&nbsp;7系统中空格键的妙用" target="_blank">Windows&nbsp;Vista和Windows&nbsp;7系</a></li><li><a href="http://mg.rdxx.com/SearchGuide/Google/2008/12/1713204610592.shtml" title="李开复暗讽百度:某些搜索企业注定做不了领袖" target="_blank">李开复暗讽百度:某些搜索企业</a></li><li><a href="http://soft.rdxx.com/Design/Show/PlaneDesign/2008/12/1715441372404.shtml" title="Donaven&nbsp;Bunting平面设计作品" target="_blank">Donaven&nbsp;Bunting平面设计作品</a></li><li><a href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1711384997762.shtml" title="Word&nbsp;2007内置工具搞定半角全角转换" target="_blank">Word&nbsp;2007内置工具搞定半角全</a></li></ul>
	</div>
	</div>
<!-- 热点结束 -->
	<div class="mainline">&nbsp;</div>
	<!-- 最新 -->
	<div class="rightblock">
	<div class="righttitleico">&nbsp;</div>
	<div class="righttitlename">&nbsp;&nbsp;最近更新</div>
	<div class="clear">&nbsp;</div>
	<div class="subrightlist pagerightlist">
	<ul><li><a href="http://dev.rdxx.com/NET/CSharp/2008/12/1911344184614.shtml" target="_blank">利用C#实现任务栏通知窗口</a></li>
<li><a href="http://dev.rdxx.com/NET/CSharp/2008/12/1911344161668.shtml" title="为客户端定制的.NET轻量级版本" target="_blank">为客户端定制的.NET轻量级版</a></li>
<li><a href="http://dev.rdxx.com/NET/CSharp/2008/12/1911344168543.shtml" target="_blank">C#:什么时候应该使用var？</a></li>
<li><a href="http://dev.rdxx.com/NET/CSharp/2008/12/1911344183573.shtml" title=".net中利用数据工厂实现多数据库的操作" target="_blank">.net中利用数据工厂实现多数</a></li>
<li><a href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1911483694581.shtml" title="用Word2007为文档添加文字水印和图片水印" target="_blank">用Word2007为文档添加文字水</a></li>
<li><a href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1911483653233.shtml" title="在Word&nbsp;2007文档中编辑页眉和页脚" target="_blank">在Word&nbsp;2007文档中编辑页眉和</a></li>
<li><a href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1911483691559.shtml" title="Word&nbsp;2007文档保存用户自定义封面" target="_blank">Word&nbsp;2007文档保存用户自定义</a></li>
<li><a href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1911483650505.shtml" title="在Word&nbsp;2007文档中插入分页符技巧" target="_blank">在Word&nbsp;2007文档中插入分页符</a></li>
<li><a href="http://os.rdxx.com/Windows7/2008/12/1822504240425.shtml" target="_blank">微软Windows&nbsp;7升级计划曝光</a></li>
<li><a href="http://hw.rdxx.com/hw-News/2008/12/1822464278110.shtml" title="英特尔新一代Classmate&nbsp;PC屏幕可旋转&nbsp;" target="_blank">英特尔新一代Classmate&nbsp;PC屏</a></li>
<li><a href="http://hw.rdxx.com/hw-News/2008/12/182246425977.shtml" title="[图]Intel将在CES展示触摸屏Classmate&nbsp;PC" target="_blank">[图]Intel将在CES展示触摸屏</a></li>
<li><a href="http://os.rdxx.com/Vista/VistaNews/2008/12/1822424531296.shtml" title="ONGC成为亚洲部署Vista最多的公司" target="_blank">ONGC成为亚洲部署Vista最多的</a></li>
<li><a href="http://db.rdxx.com/Oracle/2008/12/1822114483398.shtml" title="2009年数据库发展三大趋势预测" target="_blank">2009年数据库发展三大趋势预</a></li>
<li><a href="http://db.rdxx.com/Oracle/2008/12/182211448003.shtml" title="Oracle&nbsp;JDeveloper&nbsp;11g和Oracle&nbsp;ADF&nbsp;11g发布" target="_blank">Oracle&nbsp;JDeveloper&nbsp;11g和Ora</a></li>
<li><a href="http://soft.rdxx.com/Educate/E-SQLE/2008/12/1821124630246.shtml" target="_blank">数据结构算法:插入排序算法</a></li>
</ul>
	</div>
	</div>
</div>


<!-- google link ad -->
<span id="gglinkad">
</span>
<script type="text/javascript">
    document.getElementById('gglink').innerHTML=document.getElementById('gglinkad').innerHTML;
    document.getElementById('gglinkad').innerHTML="";
</script>
<!-- end google link ad -->

<!-- google contentAdv -->
<span id="contentAdvs">
</span>
<script type="text/javascript">
//var dt = new Date();
//var hr = dt.getSeconds();
//if (hr>=30){
 document.getElementById('contentAdv').innerHTML='<iframe scrolling="no" frameborder="0" width="350" height="250" src="http://js4.all4ad.net/dell/dell_350x250.asp?id=236"></iframe>';
//}else{
// document.getElementById('contentAdv').innerHTML='<iframe scrolling="no" frameborder="0" width="350" height="250" src="http://js4.all4ad.net/vostro/dell_350x250.asp?id=640"></iframe>';
//}
//	if(document.getElementById('contentAdv').innerHTML==""){
//    document.getElementById('contentAdv').innerHTML=document.getElementById('contentAdvs').innerHTML;
//	}
//    document.getElementById('contentAdvs').innerHTML="";
</script>
<!-- end google contentAdv -->

<!-- google firefox18060 -->
<span id="firefox18060s">
</span>
<script type="text/javascript">
    document.getElementById('firefox18060').innerHTML=document.getElementById('firefox18060s').innerHTML;
    document.getElementById('firefox18060s').innerHTML="";
</script>
<!-- end google firefox18060 -->

<!-- google favorite -->
<span id="favorites">
<div align="center">
</div>
<script language="JavaScript" type="text/javascript" src="http://www.rdxx.com/images/Fav/fav.js"></script>
<script src="http://cang.baidu.com/-/js/cang.js" type="text/javascript"></script>
</span>
<script type="text/javascript">
    document.getElementById('favorite').innerHTML=document.getElementById('favorites').innerHTML;
    document.getElementById('favorites').innerHTML="";
</script>
<!-- end google favorite -->

</div>
</div>
</div>
<div class="mainline">&nbsp;</div>
<div id="bottommenu">
	<br />
	<div align="center">
		<iframe scrolling="no" frameborder="0" width="760" height="90" src="http://js4.all4ad.net/dell/dell_760x90.asp?id=236"></iframe>
	</div>
	<div align="center">
	<hr width="760" size="2" /><br />
	<a href="http://validator.w3.org/check?uri=referer" target="_blank"><img src="http://www.w3.org/Icons/valid-xhtml10-blue" alt="Valid XHTML 1.0 Transitional" height="31" width="88" border="0" /></a>
	<br />
	Copyright &copy;2005 - 2008 <a href="http://www.rdxx.com/" target="_blank"><font face="Verdana, Arial, Helvetica, sans-serif" size="1"><b>Rdxx<font color="#CC0000">.Com</font></b></font></a>，All Rights Reserved
	</div>
</div>
<div id="AddFav" style="Z-INDEX:10;POSITION:absolute;width:60px;height:20px;left:0px;padding:3px;border:1px dashed #666;text-align:center;"><div style="FONT-SIZE:12px;">
<a style="cursor:pointer" onclick="window.external.AddFavorite(document.location.href,document.title)" onmousemove="status='收藏本页';" onmouseout="status='';">收藏本页</a><br />
<a style="cursor:pointer" onclick="window.external.AddFavorite('http://www.rdxx.com/','热点信息网')" onmousemove="status='收藏本站';" onmouseout="status='';">收藏本站</a>
</div></div>
<script type="text/javascript">
document.getElementById('AddFav').style.pixelTop = document.documentElement.clientHeight-86;
document.getElementById('AddFav').style.pixelLeft = document.documentElement.clientWidth-86;
</script>
<div style="display:none">
<script language="javascript" type="text/javascript" src="http://js.users.51.la/523559.js"></script>
</div>

</body>
</html>
