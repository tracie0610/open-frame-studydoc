<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0056)http://dev.rdxx.com/Java/Tomcat/2008/4/32111852535.shtml -->
<HTML xmlns="http://www.w3.org/1999/xhtml"><HEAD><META http-equiv="Content-Type" content="text/html; charset=GB2312">

<TITLE>设计心得&mdash;&mdash;用 XDoclet 减少代码膨胀__Tomcat__Rdxx.Com</TITLE>
<LINK type="text/css" href="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/content.css" rel="stylesheet">
</HEAD><!-- Created Page at 2008-4-3 21:36:47 --><BODY>

<DIV id="main">
<A name="top"></A>
<DIV id="header">
	<DIV id="maintop">
      <DIV id="Logo"><A href="http://www.rdxx.com/"><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/Logo.gif" alt="热点信息网" width="180" height="60" border="0"></A></DIV>
	  <DIV id="TopAds">
	    <!-- ad -->
		<IFRAME scrolling="no" frameborder="0" width="468" height="60" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/dell_468x60.htm"></IFRAME>
	    <!-- ad end -->
      </DIV>
	  <DIV id="toprightmenu"> <A href="javascript:window.external.addFavorite('http://www.rdxx.com/','热点信息网')"><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/v1.jpg" alt="加入收藏夹" name="Image21" width="77" height="17" border="0" id="Image21"></A> <A href="http://wpa.qq.com/msgrd?V=1&Uin=9962164&Site=By%20Rdxx.Com&Menu=yes" target="_blank"><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/v2.jpg" alt="与我们联系" width="77" height="17" border="0"></A> <A href="http://dev.rdxx.com/help/about.htm"><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/v3.jpg" alt="帮助" width="77" height="17" border="0"></A> </DIV>
    </DIV>
	<DIV class="navup">
	 <DIV id="nav-up-left">
	  <UL class="TabBarLevel1">
		<LI><A href="http://www.rdxx.com/" class="white">首页</A></LI>
		<LI><A href="http://os.rdxx.com/" class="white">操作系统</A></LI>
		<LI><A href="http://net.rdxx.com/" class="white">网络技术</A></LI>
		<LI><A href="http://soft.rdxx.com/" class="white">软件技术</A></LI>
		<LI><A href="http://hw.rdxx.com/" class="white">硬件天地</A></LI>
		<LI><A href="http://web.rdxx.com/" class="white">WEB开发</A></LI>
		<LI class="Selected"><A href="http://dev.rdxx.com/" class="white">编程开发</A></LI>
		<LI><A href="http://db.rdxx.com/" class="white">数据库</A></LI>
		<LI><A href="http://mg.rdxx.com/" class="white">网站运营</A></LI>
		<LI><A href="http://www.rdxx.com/GuestBook/" class="white"><FONT color="red">意见留言</FONT></A></LI>
	  </UL>
<!--频道下属栏目列表-->
		<DIV class="submenu"><A href="http://dev.rdxx.com/" class="white">编程首页</A> | <A href="http://dev.rdxx.com/C/" class="white">C/C++</A> | <A href="http://dev.rdxx.com/VB/" class="white">Visual Basic</A> | <A href="http://dev.rdxx.com/VC/" class="white">Visual C++</A> | <A href="http://dev.rdxx.com/NET/" class="white">.NET</A> | <A href="http://dev.rdxx.com/Java/" class="white">Java</A> | <A href="http://dev.rdxx.com/Delphi/" class="white">Delphi</A> | <A href="http://dev.rdxx.com/NET/" class="white">LOTUS</A> | <A href="http://dev.rdxx.com/C++Builder/" class="white">C++Builder</A> | <A href="http://dev.rdxx.com/ASM/" class="white">汇编</A> | <A href="http://dev.rdxx.com/SoftProject/" class="white">软件工程</A></DIV>
	 </DIV>
	</DIV>
</DIV>
<DIV class="mainline">&nbsp;</DIV>
<!-- 主栏目开始 -->
<DIV id="header2">
	<!-- ad -->
</DIV>
<!-- <base target="_blank" /> -->

<SCRIPT language="JavaScript" type="text/javascript">
<!--
if(document.documentElement.offsetWidth+100<=screen.availWidth){
	self.moveTo(0,0)
	self.resizeTo(screen.availWidth,screen.availHeight)
}
//-->
</SCRIPT>
</DIV>

<DIV id="wrap">
<!-- 通栏广告1 -->
<DIV class="mainline">&nbsp;</DIV>
<DIV class="maincolumn">
	<DIV class="mainleft">
		<DIV class="sublist">
		<DIV class="sublisttitleico">&nbsp;</DIV>
		<DIV class="sublisttitlebg">
		<DIV class="sublisttitlename">您的位置：<A href="http://www.rdxx.com/index.shtml" target="_blank">首页</A> &gt;&gt; <A href="http://dev.rdxx.com/" target="_blank">编程开发</A> &gt;&gt; <A href="http://dev.rdxx.com/Java/" target="_blank">Java</A> &gt;&gt; <A href="http://dev.rdxx.com/Java/Tomcat/" target="_blank">Tomcat</A> &gt;&gt; 正文</DIV>
		<DIV class="sublisttitlemore"><A href="http://dev.rdxx.com/Java/Tomcat/RSS.xml" target="_blank"><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/xml.gif" border="0" alt="Tomcat RSS"></A></DIV>
		</DIV>
		<DIV class="clear">&nbsp;</DIV>
		<DIV id="newsview">
<DIV class="title" align="center">
<H1><A href="http://soft.rdxx.com/Design/" target="_blank">设计</A>心得&mdash;&mdash;用 XDoclet 减少代码膨胀</H1>
<H2>http://www.rdxx.com 05年07月28日 00:00 <FONT color="#a20010"></FONT> <A href="http://www.rdxx.com/User/contr/contrEdit.asp?action=add" target="_blank">我要投稿</A></H2></DIV>
<DIV class="keyword" align="left">关键词： <A href="http://www.rdxx.com/Class/%D0%C4%B5%C3.shtml" target="_blank">心得</A> , <A href="http://www.rdxx.com/Class/XDoclet.shtml" target="_blank">XDoclet</A> , <A href="http://www.rdxx.com/Class/%B4%FA%C2%EB.shtml" target="_blank">代码</A> , <A href="http://soft.rdxx.com/Design/" target="_blank">设计</A>  
<DIV id="gglink">
</DIV></DIV>
<DIV class="content" onload="this.style.overflowX=&#39;auto&#39;;">
<DIV id="contentAdv"><IFRAME scrolling="no" frameborder="0" width="350" height="250" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/dell_350x250.htm"></IFRAME></DIV><BR>　　开放源代码的 XDoclet 代码生成引擎，是许多领先的 <A href="http://dev.rdxx.com/Java/" target="_blank">Java</A> 框架不可缺少的组成部分，常常被用作面向属性的<A href="http://dev.rdxx.com/" target="_blank">编程</A>和持续集成的引擎。但是 XDoclet 还有一些不太惹人注目的地方：对初级开发人员来说，它太难掌握、太难精通。在这篇文章中，流行作者 Sing Li 以 XDoclet 为对象，揭示了其内部简单却优雅的设计，使您能够理解这项技术，并将它应用在实践当中。<BR>　　<BR>　　XDoclet 能够很容易成为您的 Java 编程工具箱中的一个更加通用的跨技术代码生成工具。不幸的是，开发人员经常忽视 XDoclet 的一般用途，只有将它捆绑在大型开发框架或者 IDE 中，作为其中的一个隐藏元素时，才会用到它。人们常常认为很难将 XDoclet 应用在定制解决方案上。这篇文章的目的就是要消除这个迷惑，把 XDoclet 从常见的复杂陷阱中解脱出来，并向您展示了如何能够利用这个代码生成引擎。<BR>　　<BR>　　我会用一个实际的例子演示 XDoclet 的用途，该例子将接收一个 POJO（plain old Java object），并用 XDoclet 生成完整 Web 应用程序的全部文件，这些文件是把数据输入关系<A href="http://db.rdxx.com/" target="_blank">数据库</A>所必需的。该示例使用了 XDoclet 的 自定义模板代码生成功能，以及它对 <A href="http://dev.rdxx.com/Java/Struts/" target="_blank">Hibernate</A> 对象关系映射工具、Struct Web 应用程序框架和应用程序<A href="http://hw.rdxx.com/Server/" target="_blank">服务器</A>的内部支持。（请参阅 参考资料）。<BR>　　<BR>　　<B>智能代码生成器</B><BR>　　<BR>　　XDoclet 的核心功能是根据以下组合来生成代码的（或者生成其他配置/数据文件）：<BR>　　<BR>　　进行特殊标记的 Java 源文件。<BR>　　<BR>　　预先定义的模板。<BR>　　<BR>　　与其他基于模板的代码生成技术（例如 Velocity；请参阅 参考资料）相比，XDoclet 具有以下独特优势：<BR>　　<BR>　　XDoclet 与 Apache <A href="http://dev.rdxx.com/Java/Ant/" target="_blank">Ant</A>（请参阅 参考资料）紧密集成，从而提供了高度自动化的操作。<BR>　　<BR>　　把控制代码生成和模板处理的 XDoclet 标签作为内联注释嵌入到 Java 源代码文件中。这消除了同步多个相关文件和控制文件的需要。<BR>　　<BR>　　XDoclet 的内置 Java 解析器使用它对 Java 代码结构的深入理解，为输入的 Java 代码建立内部 结构模型。该结构模型又经常被叫作 元数据（metadata），因为它包含与关联代码有关的数据。<BR>　　<BR>　　XDoclet 的模板生成逻辑拥有对输入 Java 代码的内部结构模型的完全访问权。<BR>　　<BR>　　接下来，我将进一步研究 XDoclet 是如何工作的，以帮助您理解这些特性。<BR>　　<BR>　　<B>XDoclet 操作</B><BR>　　<BR>　　图 1 显示了 XDoclet 要求的输入和生成的输出。<BR>　　<BR>　　
<CENTER>图 1. XDoclet 黑盒子</CENTER><BR>　　
<CENTER>　<IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/AA933IG51G255GJB7K.gif"></CENTER><BR>　　您可以看到，包含嵌入式 XDoclet 标签的 Java 源代码是系统的输入。在 Apache Ant 的驱动下，XDoclet 处理输入的代码，生成的输出文本文件可以是 Java 源代码、<A href="http://web.rdxx.com/HTML/" target="_blank">HTML</A> 页面、<A href="http://web.rdxx.com/XML/" target="_blank">XML</A> 文件等。为了处理输入，XDoclet 需要使用模板（保存在 .xdt 文件中）和标签<A href="http://hw.rdxx.com/CPU/" target="_blank">处理器</A>（用 Java 编码）。XDoclet 把模板和标签处理器打包成&ldquo;模块&rdquo;，不同的&ldquo;模块&rdquo;处理不同的问题域。<BR>　　<BR>　　<B>XDoclet 生成的结构模型</B><BR>　　<BR>　　XDoclet 对包含嵌入式 XDoclet 标签的输入 Java 源代码进行解析，并为代码建立非常详细的结构模型。结构模型中的每个元素都代表源代码中的一个 Java 结构。图 2 显示的结构模型，揭示了 XDoclet 跟踪的代码构造和关系。<BR>　　<BR>　　
<CENTER>图 2. XDoclet 的解析的 Java 源代码的内部结构模型</CENTER><BR>　　
<CENTER>　<IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/KADIBGKEEB15FGF8K3.gif"></CENTER><BR>　　图 2 中的结构模型跟踪类、接口、方法之类的代码构造（模型元素）。该模型还跟踪元素之间的关系，例如继承和接口实现。以内联注释的形式嵌入在源代码中的 XDoclet 标签被解析为模型元素的属性，并被跟踪。<BR>　　<BR>　　<B>通用的 Javadoc 引擎</B><BR>　　<BR>　　能够理解 Java 代码结构模型的智能代码生成引擎不是什么新概念。实际上，它是 JDK 自带的 Javadoc 工具的运作方式。通过解析带有特殊 Javadoc 标签的 Java 源文件，Javado<P align="center" style="clear:both;">上一页&nbsp;<A href="http://dev.rdxx.com/Java/Tomcat/2008/4/32111852535_2.shtml">下一页</A></P></DIV><BR>
<DIV class="next">下一篇：<A href="http://dev.rdxx.com/Java/Tomcat/2008/4/32111863152.shtml">利弊分析&mdash;&mdash;浅析开源的现实作用</A><BR>上一篇：<A href="http://dev.rdxx.com/Java/Tomcat/2008/4/32111892864.shtml">Win2000 Server IIS和Tomcat5多站点配置</A></DIV></DIV>
<DIV class="clear">&nbsp;</DIV>
<DIV><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/Click.asp" width="0" height="0" border="0"></DIV>
<DIV class="clear">&nbsp;</DIV>
<DIV class="tool"><SPAN>标签： <A href="http://www.rdxx.com/Class/%D0%C4%B5%C3.shtml" target="_blank">心得</A> , <A href="http://www.rdxx.com/Class/XDoclet.shtml" target="_blank">XDoclet</A> , <A href="http://www.rdxx.com/Class/%B4%FA%C2%EB.shtml" target="_blank">代码</A> , <A href="http://soft.rdxx.com/Design/" target="_blank">设计</A> </SPAN><SCRIPT type="text/javascript">
<!-- 
document.write("<a target=\"_blank\" href=\"http://www.rdxx.com/User/AddFavor.asp?Id=165068&Type=ns\" class=\"button_content\" style=\"CURSOR:hand\" onClick=\"window.external.AddFavorite(document.location.href,document.title)\" onMouseMove=\"status='收藏本页';\" onMouseOut=\"status='';\">添加到收藏夹</a>");
-->
</SCRIPT><A target="_blank" href="http://www.rdxx.com/User/AddFavor.asp?Id=165068&Type=ns" class="button_content" style="CURSOR:hand" onclick="window.external.AddFavorite(document.location.href,document.title)" onmousemove="status=&#39;收藏本页&#39;;" onmouseout="status=&#39;&#39;;">添加到收藏夹</A> <SCRIPT type="text/javascript">
<!-- 
document.write("<a href=\"http://www.rdxx.com/User/Sendmail.asp?Id=165068&Type=ns\" class=\"button_content\" target=\"_blank\" onMouseMove=\"status='发送给您的好友';\" onMouseOut=\"status='';\">发送给好友</a>");
-->
</SCRIPT><A href="http://www.rdxx.com/User/Sendmail.asp?Id=165068&Type=ns" class="button_content" target="_blank" onmousemove="status=&#39;发送给您的好友&#39;;" onmouseout="status=&#39;&#39;;">发送给好友</A> <A class="button_content" title="打印本文" href="javascript:window.print();" target="_self">打印本文</A> </DIV>
		<DIV class="clear">&nbsp;</DIV>
		</DIV>
		<DIV class="sublist" id="favorite">
<DIV align="center">
</DIV>
<SCRIPT language="JavaScript" type="text/javascript" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/fav.js"></SCRIPT><IMG style="MARGIN: 4px 2px -4px 0px" alt="" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/quote.gif"><B>收藏到网摘:</B> <A href="javascript:d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');void(vivi=window.open('http://cang.baidu.com/do/add?it='+d.title+'&iu='+escape(d.location.href),'vivi','scrollbars=no,width=480,height=520,left=75,top=20,status=no,resizable=yes'));vivi.focus();"><IMG alt="百度" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/baidu.png" border="0/"></A> <A href="javascript:d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');void(vivi=window.open('http://myweb.cn.yahoo.com/popadd.html?title='+d.title+'&url='+escape(d.location.href),'vivi','scrollbars=no,width=600,height=480,left=75,top=20,status=no,resizable=yes'));vivi.focus();"><IMG alt="Yahoo收藏夹" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/yahoomyweb-cn.png" border="0/"></A> <A href="javascript:d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');void(vivi=window.open('http://vivi.sina.com.cn/collect/icollect.php?pid=28&title='+escape(d.title)+'&url='+escape(d.location.href)+'&desc='+escape(t),'vivi','scrollbars=no,width=480,height=480,left=75,top=20,status=no,resizable=yes'));vivi.focus();"><IMG alt="新浪ViVi" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/vivi.gif" border="0/"></A> <A href="javascript:d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');void(yesky=window.open('http://hot.yesky.com/dp.aspx?t='+escape(d.title)+'&u='+escape(d.location.href)+'&c='+escape(t)+'&st=2','yesky','scrollbars=no,width=400,height=480,left=75,top=20,status=no,resizable=yes'));yesky.focus();"><IMG alt="天极网摘" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/yesky.gif" border="0/"></A> <A href="javascript:d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');void(keyit=window.open('http://my.poco.cn/fav/storeIt.php?t='+escape(d.title)+'&u='+escape(d.location.href)+'&c='+escape(t)+'&img=http://www.h-strong.com/blog/logo.gif','keyit','scrollbars=no,width=475,height=575,status=no,resizable=yes'));keyit.focus();"><IMG alt="POCO网摘" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/poco.gif" border="0/"></A> <A href="javascript:d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');void(keyit=window.open('http://www.365key.com/storeit.aspx?t='+escape(d.title)+'&u='+escape(d.location.href)+'&c='+escape(t),'keyit','scrollbars=no,width=475,height=575,left=75,top=20,status=no,resizable=yes'));keyit.focus();"><IMG alt="365Key网摘" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/365key.gif" border="0/"></A> <A href="javascript:t=document.title;u=location.href;e=document.selection?(document.selection.type!='None'?document.selection.createRange().text:''):(document.getSelection?document.getSelection():'');void(open('http://bookmark.hexun.com/post.aspx?title='+escape(t)+'&url='+escape(u)+'&excerpt='+escape(e),'HexunBookmark','scrollbars=no,width=600,height=450,left=80,top=80,status=no,resizable=yes'));"><IMG alt="和讯网摘" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/hexun.gif" border="0/"></A> <A href="javascript:u=location.href;t=document.title;void(open('http://www.YouNote.com/NoteIt.aspx?u='+escape(u)+'&t='+escape(t)+'&c='+escape(document.selection.createRange().text),'网络书签', 'toolbar=no,width=475,height=575,left=75,top=20,status=no,resizable=yes'));"><IMG alt="YouNote网摘" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/younote.gif" border="0/"></A>

<SCRIPT src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/cang.js" type="text/javascript"></SCRIPT><A href="javascript:u=location.href;t=document.title;c=%22%22+(window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection.createRange().text);c=c.substr(0,480);var url=%22http://cang.baidu.com/do/add?it=%22+encodeURIComponent(t)+%22&iu=%22+encodeURIComponent(u)+%22&dc=%22+encodeURIComponent(c)+%22&fr=js#nw=1%22;window.open(url,'_blank','scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');void 0"><IMG border="0" width="116" height="19" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/add_soucang03.gif"></A>
</DIV>
		<DIV class="sublist">
		<!--相关区块 -->
		<DIV class="sublisttitleico">&nbsp;</DIV>
		<DIV class="sublisttitlebg">
		<DIV class="sublisttitlename">&nbsp;&nbsp;相关资讯</DIV>
		<DIV class="sublisttitlemore"><A href="http://www.rdxx.com/RSS/" target="_blank"><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/xml.gif" border="0" alt="RSS"></A></DIV>
		</DIV>
		<DIV class="clear">&nbsp;</DIV>
		<DIV id="newsview"> 
		  <DIV id="newsdaodu">
		  <UL><LI><SPAN>2005-05-08</SPAN><A href="http://dev.rdxx.com/Java/JavaBeans/2005-05/8/101524145.shtml" target="_blank">Entity&nbsp;Bean的使用和经验（含XDoclet的使用</A></LI>
<LI><SPAN>2005-07-27</SPAN><A href="http://dev.rdxx.com/Java/JavaBase/Eclipse/2005-07/27/103042766.shtml" target="_blank">在eclipse中使用JBossIDE和xDoclet创建EJB</A></LI>
<LI><SPAN>2005-06-17</SPAN><A href="http://dev.rdxx.com/Java/2005-06/17/101619911.shtml" target="_blank">《XDoclet&nbsp;in&nbsp;Action》部分章节中文版</A></LI>
<LI><SPAN>2005-07-24</SPAN><A href="http://dev.rdxx.com/Java/3lib/2005-7/24/012915262.shtml" target="_blank">《XDoclet&nbsp;in&nbsp;Action》部分章节中文版</A></LI>
<LI><SPAN>2005-09-13</SPAN><A href="http://dev.rdxx.com/Java/Struts/2005-09/13/10241442.shtml" target="_blank">用&nbsp;hibernate&nbsp;和&nbsp;xdoclet&nbsp;开发&nbsp;数据库应用程</A></LI>
<LI><SPAN>2005-07-27</SPAN><A href="http://dev.rdxx.com/Java/JavaBeans/2005-07/27/103014463.shtml" target="_blank">Entity&nbsp;Bean的使用和经验（含XDoclet的使用</A></LI>
<LI><SPAN>2005-07-27</SPAN><A href="http://dev.rdxx.com/Java/2005-07/27/10183559.shtml" target="_blank">快速上手XDoclet&nbsp;1&nbsp;--&nbsp;Servlet简单实例</A></LI>
<LI><SPAN>2004-02-27</SPAN><A href="http://dev.rdxx.com/Java/Struts/2004-02/27/095610584.shtml" target="_blank">其它技术和Hibernate-XDoclet</A></LI>
<LI><SPAN>2004-12-24</SPAN><A href="http://dev.rdxx.com/Java/Struts/2004-12/24/100933584.shtml" target="_blank">xdoclet&nbsp;与&nbsp;hibernate</A></LI>
<LI><SPAN>2005-07-27</SPAN><A href="http://dev.rdxx.com/Java/2005-07/27/10315148.shtml" target="_blank">《XDoclet&nbsp;in&nbsp;Action》部分章节中文版</A></LI>
</UL>
		  </DIV>
		</DIV>
		<DIV class="clear">&nbsp;</DIV>
		<!-- 相关区块结束 -->
		</DIV>
	</DIV>
<DIV class="mainright">
<!-- 搜索 -->
	<DIV class="rightblock">
	<DIV class="righttitleico">&nbsp;</DIV>
	<DIV class="righttitlename">&nbsp;&nbsp;热点搜索</DIV>
	<DIV class="clear">&nbsp;</DIV>
	<DIV id="search">
	<!--
<form action="http://www.rdxx.com/Search.asp" method="get" name="SearchForm" target="_blank" id="SearchForm">
  <input name="Keyword" type="text" id="Keyword" size="15" /><br />
<input type="submit" id="SearchSubmit" value="搜索" /></form>
-->
<!-- SiteSearch Baidu -->
<SCRIPT language="javascript">
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

<FORM name="f1" onsubmit="return g(this)" target="_blank">
<TABLE border="0">
<TBODY><TR><TD nowrap="nowrap" valign="top" align="left" height="32">

<BR>
<LABEL for="sbi" style="display: none">输入您的搜索字词</LABEL>
<INPUT type="text" name="word" size="18" maxlength="255" value="" id="sbi">
</TD></TR>
<TR>
<TD nowrap="nowrap">
<TABLE>
<TBODY><TR>
<TD>
<INPUT type="radio" name="s" value="" id="ss0">
<LABEL for="ss0" title="搜索网络"><FONT size="-1" color="black">Web</FONT></LABEL></TD>
<TD>
<INPUT type="radio" name="s" value="rdxx.com" checked="" id="ss1">
<LABEL for="ss1" title="搜索 rdxx.com"><FONT size="-1" color="black">rdxx.com</FONT></LABEL></TD>
</TR>
</TBODY></TABLE>
<LABEL for="sbb" style="display: none">提交搜索表单</LABEL>
<INPUT type="submit" name="sa" value="搜索" id="sbb">
<INPUT name="tn" type="hidden" value="bds">
<INPUT name="cl" type="hidden" value="3">
<INPUT name="ct" type="hidden">
<INPUT name="si" type="hidden" value="rdxx.com">
</TD></TR></TBODY></TABLE>
</FORM>
<!-- SiteSearch Baidu -->
	</DIV>
	</DIV>
<!-- 搜索结束 -->
<!-- 图文 -->
	<DIV class="rightblock">
	<DIV class="righttitleico">&nbsp;</DIV>
	<DIV class="righttitlename">&nbsp;&nbsp;热点导读</DIV>
	<DIV class="clear">&nbsp;</DIV>
	<DIV class="picrightlist">
	<UL id="ClassPicNews"><LI><A class="" href="http://hw.rdxx.com/hw-News/2008/10/2022535334909.shtml" title="最低2998元&nbsp;十月第二季新品笔记本推荐" target="_blank"><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/183638.jpg" height="100" width="150" border="0" alt="最低2998元 十月第二季新品笔记本推荐"></A><BR><A class="" href="http://hw.rdxx.com/hw-News/2008/10/2022535334909.shtml" title="最低2998元&nbsp;十月第二季新品笔记本推荐" target="_blank">最低2998元&nbsp;十月第二季新品</A></LI><LI><A class="" href="http://os.rdxx.com/Windows7/2008/10/1412384761423.shtml" title="微软下一代操作系统正式定名为Windows&nbsp;7" target="_blank"><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/182940.jpg" height="100" width="150" border="0" alt="微软下一代操作系统正式定名为Windows 7"></A><BR><A class="" href="http://os.rdxx.com/Windows7/2008/10/1412384761423.shtml" title="微软下一代操作系统正式定名为Windows&nbsp;7" target="_blank">微软下一代操作系统正式定</A></LI><LI><A class="" href="http://os.rdxx.com/WindowsXP/2008/6/2522231290234.shtml" title="微软保证提供Windows&nbsp;XP支持至2014年" target="_blank"><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/173156.jpg" height="100" width="150" border="0" alt="微软保证提供Windows XP支持至2014年"></A><BR><A class="" href="http://os.rdxx.com/WindowsXP/2008/6/2522231290234.shtml" title="微软保证提供Windows&nbsp;XP支持至2014年" target="_blank">微软保证提供Windows&nbsp;XP支</A></LI><LI><A class="" href="http://os.rdxx.com/Windows7/2008/5/26243823399.shtml" title="传Windows&nbsp;7将于27日首次正式亮相" target="_blank"><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/170410.jpg" height="100" width="150" border="0" alt="传Windows 7将于27日首次正式亮相"></A><BR><A class="" href="http://os.rdxx.com/Windows7/2008/5/26243823399.shtml" title="传Windows&nbsp;7将于27日首次正式亮相" target="_blank">传Windows&nbsp;7将于27日首次正</A></LI><LI><A class="" href="http://hw.rdxx.com/MartTrade/2008/5/817291373846.shtml" title="五月选卡指南&nbsp;399-699元超值显卡推荐" target="_blank"><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/168707.jpg" height="100" width="150" border="0" alt="五月选卡指南 399-699元超值显卡推荐"></A><BR><A class="" href="http://hw.rdxx.com/MartTrade/2008/5/817291373846.shtml" title="五月选卡指南&nbsp;399-699元超值显卡推荐" target="_blank">五月选卡指南&nbsp;399-699元超</A></LI></UL>
	<DIV id="firefox18060">
</DIV>
	</DIV>
	</DIV>
<!-- 图文结束 -->
<!-- 热点 -->
	<DIV class="rightblock">
	<DIV class="righttitleico">&nbsp;</DIV>
	<DIV class="righttitlename">&nbsp;&nbsp;热点文章</DIV>
	<DIV class="clear">&nbsp;</DIV>
	<DIV class="subrightlist pagerightlist">
	<UL><LI><A href="http://soft.rdxx.com/Apply/Office/Word/2008/12/131336012769.shtml" title="在Word&nbsp;2007文档中设置纸张方向" target="_blank">在Word&nbsp;2007文档中设置纸张方</A></LI><LI><A href="http://os.rdxx.com/Windows7/2008/12/1320523773496.shtml" title="46&percnt;企业要跳过Vista直接升级Windows&nbsp;7" target="_blank">46&percnt;企业要跳过Vista直接升级</A></LI><LI><A href="http://soft.rdxx.com/Design/Show/PlaneDesign/2008/12/1614511890366.shtml" target="_blank">丹麦设计师平面设计作品欣赏</A></LI><LI><A href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1711384981529.shtml" title="找回Word&nbsp;2007的视图并排查看功能" target="_blank">找回Word&nbsp;2007的视图并排查看</A></LI><LI><A href="http://os.rdxx.com/Windows7/2008/12/1420562470416.shtml" title="关于Windows&nbsp;7你需要了解的一切" target="_blank">关于Windows&nbsp;7你需要了解的一</A></LI><LI><A href="http://soft.rdxx.com/Apply/Office/Word/2008/12/131336091506.shtml" title="Word&nbsp;2007中插入&ldquo;新建栏&rdquo;分节符" target="_blank">Word&nbsp;2007中插入&ldquo;新建栏&rdquo;分</A></LI><LI><A href="http://os.rdxx.com/Windows7/2008/12/1520594553238.shtml" title="Windows&nbsp;7&nbsp;x64版本国内种子下载" target="_blank">Windows&nbsp;7&nbsp;x64版本国内种子下</A></LI><LI><A href="http://dev.rdxx.com/NET/CSharp/2008/12/131362793283.shtml" title="C#遍历整个文件夹及子目录的文件代码" target="_blank">C#遍历整个文件夹及子目录的</A></LI><LI><A href="http://soft.rdxx.com/Design/Show/PlaneDesign/2008/12/1614511899326.shtml" title="Greg&nbsp;Bennett国外精美平面设计作品" target="_blank">Greg&nbsp;Bennett国外精美平面设</A></LI><LI><A href="http://hw.rdxx.com/hw-News/2008/12/121533022291.shtml" title="NEC19WMGX拳头产品成市场常胜将军" target="_blank">NEC19WMGX拳头产品成市场常胜</A></LI><LI><A href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1711384927797.shtml" title="Word&nbsp;2007文档中设置纸张大小技巧" target="_blank">Word&nbsp;2007文档中设置纸张大小</A></LI><LI><A href="http://os.rdxx.com/Vista/VistaTrait/2008/12/1513512573988.shtml" title="Windows&nbsp;Vista和Windows&nbsp;7系统中空格键的妙用" target="_blank">Windows&nbsp;Vista和Windows&nbsp;7系</A></LI><LI><A href="http://mg.rdxx.com/SearchGuide/Google/2008/12/1713204610592.shtml" title="李开复暗讽百度:某些搜索企业注定做不了领袖" target="_blank">李开复暗讽百度:某些搜索企业</A></LI><LI><A href="http://soft.rdxx.com/Design/Show/PlaneDesign/2008/12/1715441372404.shtml" title="Donaven&nbsp;Bunting平面设计作品" target="_blank">Donaven&nbsp;Bunting平面设计作品</A></LI><LI><A href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1711384997762.shtml" title="Word&nbsp;2007内置工具搞定半角全角转换" target="_blank">Word&nbsp;2007内置工具搞定半角全</A></LI></UL>
	</DIV>
	</DIV>
<!-- 热点结束 -->
	<DIV class="mainline">&nbsp;</DIV>
	<!-- 最新 -->
	<DIV class="rightblock">
	<DIV class="righttitleico">&nbsp;</DIV>
	<DIV class="righttitlename">&nbsp;&nbsp;最近更新</DIV>
	<DIV class="clear">&nbsp;</DIV>
	<DIV class="subrightlist pagerightlist">
	<UL><LI><A href="http://dev.rdxx.com/NET/CSharp/2008/12/1911344184614.shtml" target="_blank">利用C#实现任务栏通知窗口</A></LI>
<LI><A href="http://dev.rdxx.com/NET/CSharp/2008/12/1911344161668.shtml" title="为客户端定制的.NET轻量级版本" target="_blank">为客户端定制的.NET轻量级版</A></LI>
<LI><A href="http://dev.rdxx.com/NET/CSharp/2008/12/1911344168543.shtml" target="_blank">C#:什么时候应该使用var？</A></LI>
<LI><A href="http://dev.rdxx.com/NET/CSharp/2008/12/1911344183573.shtml" title=".net中利用数据工厂实现多数据库的操作" target="_blank">.net中利用数据工厂实现多数</A></LI>
<LI><A href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1911483694581.shtml" title="用Word2007为文档添加文字水印和图片水印" target="_blank">用Word2007为文档添加文字水</A></LI>
<LI><A href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1911483653233.shtml" title="在Word&nbsp;2007文档中编辑页眉和页脚" target="_blank">在Word&nbsp;2007文档中编辑页眉和</A></LI>
<LI><A href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1911483691559.shtml" title="Word&nbsp;2007文档保存用户自定义封面" target="_blank">Word&nbsp;2007文档保存用户自定义</A></LI>
<LI><A href="http://soft.rdxx.com/Apply/Office/Word/2008/12/1911483650505.shtml" title="在Word&nbsp;2007文档中插入分页符技巧" target="_blank">在Word&nbsp;2007文档中插入分页符</A></LI>
<LI><A href="http://os.rdxx.com/Windows7/2008/12/1822504240425.shtml" target="_blank">微软Windows&nbsp;7升级计划曝光</A></LI>
<LI><A href="http://hw.rdxx.com/hw-News/2008/12/1822464278110.shtml" title="英特尔新一代Classmate&nbsp;PC屏幕可旋转&nbsp;" target="_blank">英特尔新一代Classmate&nbsp;PC屏</A></LI>
<LI><A href="http://hw.rdxx.com/hw-News/2008/12/182246425977.shtml" title="[图]Intel将在CES展示触摸屏Classmate&nbsp;PC" target="_blank">[图]Intel将在CES展示触摸屏</A></LI>
<LI><A href="http://os.rdxx.com/Vista/VistaNews/2008/12/1822424531296.shtml" title="ONGC成为亚洲部署Vista最多的公司" target="_blank">ONGC成为亚洲部署Vista最多的</A></LI>
<LI><A href="http://db.rdxx.com/Oracle/2008/12/1822114483398.shtml" title="2009年数据库发展三大趋势预测" target="_blank">2009年数据库发展三大趋势预</A></LI>
<LI><A href="http://db.rdxx.com/Oracle/2008/12/182211448003.shtml" title="Oracle&nbsp;JDeveloper&nbsp;11g和Oracle&nbsp;ADF&nbsp;11g发布" target="_blank">Oracle&nbsp;JDeveloper&nbsp;11g和Ora</A></LI>
<LI><A href="http://soft.rdxx.com/Educate/E-SQLE/2008/12/1821124630246.shtml" target="_blank">数据结构算法:插入排序算法</A></LI>
</UL>
	</DIV>
	</DIV>
</DIV>


<!-- google link ad -->
<SPAN id="gglinkad"></SPAN>
<SCRIPT type="text/javascript">
    document.getElementById('gglink').innerHTML=document.getElementById('gglinkad').innerHTML;
    document.getElementById('gglinkad').innerHTML="";
</SCRIPT>
<!-- end google link ad -->

<!-- google contentAdv -->
<SPAN id="contentAdvs">
</SPAN>
<SCRIPT type="text/javascript">
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
</SCRIPT>
<!-- end google contentAdv -->

<!-- google firefox18060 -->
<SPAN id="firefox18060s"></SPAN>
<SCRIPT type="text/javascript">
    document.getElementById('firefox18060').innerHTML=document.getElementById('firefox18060s').innerHTML;
    document.getElementById('firefox18060s').innerHTML="";
</SCRIPT>
<!-- end google firefox18060 -->

<!-- google favorite -->
<SPAN id="favorites"></SPAN>
<SCRIPT type="text/javascript">
    document.getElementById('favorite').innerHTML=document.getElementById('favorites').innerHTML;
    document.getElementById('favorites').innerHTML="";
</SCRIPT>
<!-- end google favorite -->

</DIV>
</DIV>

<DIV class="mainline">&nbsp;</DIV>
<DIV id="bottommenu">
	<BR>
	<DIV align="center">
		<IFRAME scrolling="no" frameborder="0" width="760" height="90" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/dell_760x90.htm"></IFRAME>
	</DIV>
	<DIV align="center">
	<HR width="760" size="2"><BR>
	<A href="http://validator.w3.org/check?uri=referer" target="_blank"><IMG src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/valid-xhtml10-blue" alt="Valid XHTML 1.0 Transitional" height="31" width="88" border="0"></A>
	<BR>
	Copyright &copy;2005 - 2008 <A href="http://www.rdxx.com/" target="_blank"><FONT face="Verdana, Arial, Helvetica, sans-serif" size="1"><B>Rdxx<FONT color="#CC0000">.Com</FONT></B></FONT></A>，All Rights Reserved
	</DIV>
</DIV>
<DIV id="AddFav" style="z-index: 10; position: absolute; width: 60px; height: 20px; padding-top: 3px; padding-right: 3px; padding-bottom: 3px; padding-left: 3px; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: dashed; border-right-style: dashed; border-bottom-style: dashed; border-left-style: dashed; border-top-color: rgb(102, 102, 102); border-right-color: rgb(102, 102, 102); border-bottom-color: rgb(102, 102, 102); border-left-color: rgb(102, 102, 102); text-align: center; top: -86px; left: -86px; "><DIV style="FONT-SIZE:12px;">
<A style="cursor:pointer" onclick="window.external.AddFavorite(document.location.href,document.title)" onmousemove="status=&#39;收藏本页&#39;;" onmouseout="status=&#39;&#39;;">收藏本页</A><BR>
<A style="cursor:pointer" onclick="window.external.AddFavorite(&#39;http://www.rdxx.com/&#39;,&#39;热点信息网&#39;)" onmousemove="status=&#39;收藏本站&#39;;" onmouseout="status=&#39;&#39;;">收藏本站</A>
</DIV></DIV>
<SCRIPT type="text/javascript">
document.getElementById('AddFav').style.pixelTop = document.documentElement.clientHeight-86;
document.getElementById('AddFav').style.pixelLeft = document.documentElement.clientWidth-86;
</SCRIPT>
<DIV style="display:none">
<SCRIPT language="javascript" type="text/javascript" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/523559.js"></SCRIPT><A href="http://www.51.la/?00523559" target="_blank"><IMG alt="51.la 专业、免费、强健的访问统计" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/icon_0.gif" style="border:none"></A>
<IMG style="width:0px;height:0px" src="./设计心得——用 XDoclet 减少代码膨胀__Tomcat__Rdxx_files/go.asp">
</DIV>



</BODY></HTML>