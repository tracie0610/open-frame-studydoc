<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0052)http://dev.rdxx.com/Java/2004-07/8/095756518_4.shtml -->
<HTML xmlns="http://www.w3.org/1999/xhtml"><HEAD><META http-equiv="Content-Type" content="text/html; charset=GB2312">

<TITLE>WebWork2教程（中文版）(4.1.1)-4__HotInfo__Rdxx.Com</TITLE>
<LINK type="text/css" href="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/content.css" rel="stylesheet">
</HEAD><!-- Created Page at 2007-11-9 0:05:59 --><BODY>

<DIV id="main">
<A name="top"></A>
<DIV id="header">
	<DIV id="maintop">
      <DIV id="Logo"><A href="http://www.rdxx.com/"><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/Logo.gif" alt="热点信息网" width="180" height="60" border="0"></A></DIV>
	  <DIV id="TopAds">
	    <!-- ad -->
		<IFRAME scrolling="no" frameborder="0" width="468" height="60" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/dell_468x60.htm"></IFRAME>
	    <!-- ad end -->
      </DIV>
	  <DIV id="toprightmenu"> <A href="javascript:window.external.addFavorite('http://www.rdxx.com/','热点信息网')"><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/v1.jpg" alt="加入收藏夹" name="Image21" width="77" height="17" border="0" id="Image21"></A> <A href="http://wpa.qq.com/msgrd?V=1&Uin=9962164&Site=By%20Rdxx.Com&Menu=yes" target="_blank"><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/v2.jpg" alt="与我们联系" width="77" height="17" border="0"></A> <A href="http://dev.rdxx.com/help/about.htm"><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/v3.jpg" alt="帮助" width="77" height="17" border="0"></A> </DIV>
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
		<DIV class="sublisttitlename">您的位置：<A href="http://www.rdxx.com/index.shtml" target="_blank">首页</A> &gt;&gt; <A href="http://dev.rdxx.com/" target="_blank">编程开发</A> &gt;&gt; <A href="http://dev.rdxx.com/Java/" target="_blank">Java</A> &gt;&gt; 正文</DIV>
		<DIV class="sublisttitlemore"><A href="http://www.rdxx.com/RSS/" target="_blank"><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/xml.gif" border="0" alt="RSS"></A></DIV>
		</DIV>
		<DIV class="clear">&nbsp;</DIV>
		<DIV id="newsview">
<DIV class="title" align="center">
<H1>WebWork2教程（中文版）(4.1.1)</H1>
<H2>http://www.rdxx.com 06年12月16日 07:51 <FONT color="#a20010">Blog</FONT> <A href="http://www.rdxx.com/User/contr/contrEdit.asp?action=add" target="_blank">我要投稿</A></H2></DIV>
<DIV class="keyword" align="left">关键词： <A href="http://www.rdxx.com/Class/%D6%D0%CE%C4.shtml" target="_blank">中文</A> , <A href="http://www.rdxx.com/Class/webwork.shtml" target="_blank">webwork</A> , <A href="http://www.rdxx.com/Class/%BD%CC%B3%CC.shtml" target="_blank">教程</A> , <A href="http://www.rdxx.com/Class/work.shtml" target="_blank">work</A> , <A href="http://www.rdxx.com/Class/Web.shtml" target="_blank">Web</A>  
<DIV id="gglink">
</DIV></DIV>
<DIV class="content" onload="this.style.overflowX=&#39;auto&#39;;">
<DIV id="contentAdv"><IFRAME scrolling="no" frameborder="0" width="350" height="250" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/dell_350x250.htm"></IFRAME></DIV><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">的引用。这使得</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">WebWork</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">会根据</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">Action</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">类相同位置上的验证配置文件（</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">FormProcessingAction-validation.xml</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">），对传递给</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">Action</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">的参数进行验证。如果有非法参数，</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">WebWork</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">会阻止</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">Action</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">的执行，将请求指派的</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">input</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">结果页面，将错误信息显示到对应的表单域。</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><O:P></O:P></SPAN><P>
<P class="MsoNormal" style="MARGIN: 0mm 0mm 0pt"><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">（</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">2</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">）模板系统</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><O:P></O:P></SPAN></P>
<P class="MsoNormal" style="MARGIN: 0mm 0mm 0pt"><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">WebWork</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">使用</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">Velocity</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">模板系统为所有的</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">UI</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">标记呈现实际的</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century"><A href="http://web.rdxx.com/HTML/" target="_blank">HTML</A></FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">输出。所有模板的缺省实现包含在</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">webwork-2.1.jar</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">的</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">/template/xhtml</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">目录下。这些模板可以被编辑或替换来定制</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">HTML</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">输出结果。</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><O:P></O:P></SPAN></P>
<P class="MsoNormal" style="MARGIN: 0mm 0mm 0pt"><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">如果你想使用不同的布局来显示</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">UI</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">组件，你可以：</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><O:P></O:P></SPAN></P>
<P class="MsoNormal" style="MARGIN: 0mm 0mm 0pt 21pt; TEXT-INDENT: -21pt; mso-list: l17 level1 lfo15; tab-stops: list 21.0pt"><SPAN lang="EN" style="FONT-FAMILY: Wingdings; mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN">l<SPAN style="FONT: 7pt &#39;Times New Roman&#39;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">编辑或替换</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">/template/xhtml</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">目录下的文件</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><O:P></O:P></SPAN></P>
<P class="MsoNormal" style="MARGIN: 0mm 0mm 0pt 21pt; TEXT-INDENT: -21pt; mso-list: l17 level1 lfo15; tab-stops: list 21.0pt"><SPAN lang="EN" style="FONT-FAMILY: Wingdings; mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN">l<SPAN style="FONT: 7pt &#39;Times New Roman&#39;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">编辑</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">webwork.properties</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">文件（要放在</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">/WEB-INF/classes</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">目录下）的</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">webwork.ui.theme</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">，指向模板位置。</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><O:P></O:P></SPAN></P>
<P class="MsoNormal" style="MARGIN: 0mm 0mm 0pt 21pt; TEXT-INDENT: -21pt; mso-list: l17 level1 lfo15; tab-stops: list 21.0pt"><SPAN lang="EN" style="FONT-FAMILY: Wingdings; mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN">l<SPAN style="FONT: 7pt &#39;Times New Roman&#39;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">使用标记的</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">theme</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">或</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">template</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">属性为单个标记指定模板位置</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><O:P></O:P></SPAN></P>
<P class="MsoFooter" style="MARGIN: 0mm 0mm 0pt; LAYOUT-GRID-MODE: both; tab-stops: 42.0pt"><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">下面是使用第三种方法的例子：</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><O:P></O:P></SPAN></P>
<P class="MsoNormal" style="MARGIN: 0mm 0mm 0pt"><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">ex02.jsp</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">：</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><O:P></O:P></SPAN></P>
<DIV style="BORDER-RIGHT: #3c78b5 0.75pt dashed; PADDING-RIGHT: 8pt; BORDER-TOP: #3c78b5 0.75pt dashed; PADDING-LEFT: 8pt; BACKGROUND: #f0f0f0; PADDING-BOTTOM: 0mm; BORDER-LEFT: #3c78b5 0.75pt dashed; PADDING-TOP: 0mm; BORDER-BOTTOM: #3c78b5 0.75pt dashed"><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;&percnt;@ taglib uri=&quot;webwork&quot; prefix=&quot;ww&quot; &percnt;&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;html&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;head&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;title&gt;WebWork Tutorial - Lesson 4.1.1 - Example 2&lt;/title&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;/head&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;body&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;p&gt;Template Change Example:&lt;/p&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;p&gt;&lt;ww:checkbox name=&quot;&#39;checkbox&#39;&quot; label=&quot;&#39;A checkbox&#39;&quot; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">fieldValue=&quot;&#39;checkbox_value&#39;&quot; theme=&quot;/files/templates/components&quot; /&gt;&lt;/p&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;p&gt;&lt;ww:textfield name=&quot;&#39;textfield&#39;&quot; label=&quot;&#39;A text field&#39;&quot; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">template=&quot;/files/templates/components/mytextfield.vm&quot; /&gt;&lt;/p&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;/body&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;/html&gt;<O:P></O:P></FONT></FONT></SPAN></PRE></DIV>
<P class="MsoNormal" style="MARGIN: 0mm 0mm 0pt"><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">/files/templates/components/checkbox.vm</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">：</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><O:P></O:P></SPAN></P>
<DIV style="BORDER-RIGHT: #3c78b5 0.75pt dashed; PADDING-RIGHT: 8pt; BORDER-TOP: #3c78b5 0.75pt dashed; PADDING-LEFT: 8pt; BACKGROUND: #f0f0f0; PADDING-BOTTOM: 0mm; BORDER-LEFT: #3c78b5 0.75pt dashed; PADDING-TOP: 0mm; BORDER-BOTTOM: #3c78b5 0.75pt dashed"><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;div align=&quot;center&quot;&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>&lt;input type=&quot;checkbox&quot; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>name=&quot;$!webwork.htmlEncode($parameters.name)&quot; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>value=&quot;$!webwork.htmlEncode($parameters.fieldValue)&quot; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.nameValue) checked=&quot;checked&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.disabled == </SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">true</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black">) disabled=&quot;disabled&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.tabindex) tabindex=&quot;$!webwork.htmlEncode($parameters.tabindex)&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.onchange) onchange=&quot;$!webwork.htmlEncode($parameters.onchange)&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.id) id=&quot;$!webwork.htmlEncode($parameters.id)&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>/&gt;&lt;br /&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>$!webwork.htmlEncode($parameters.label) <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;/div&gt;<O:P></O:P></FONT></FONT></SPAN></PRE></DIV>
<P class="MsoNormal" style="MARGIN: 0mm 0mm 0pt"><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><FONT face="Century">/files/templates/components/mytextfield.vm</FONT></SPAN><SPAN lang="ZH" style="FONT-FAMILY: SimSun; mso-ascii-font-family: Century; mso-hansi-font-family: Century; mso-fareast-language: ZH-CN">：</SPAN><SPAN lang="EN" style="mso-fareast-font-family: SimSun; mso-fareast-language: ZH-CN"><O:P></O:P></SPAN></P>
<DIV style="BORDER-RIGHT: #3c78b5 0.75pt dashed; PADDING-RIGHT: 8pt; BORDER-TOP: #3c78b5 0.75pt dashed; PADDING-LEFT: 8pt; BACKGROUND: #f0f0f0; PADDING-BOTTOM: 0mm; BORDER-LEFT: #3c78b5 0.75pt dashed; PADDING-TOP: 0mm; BORDER-BOTTOM: #3c78b5 0.75pt dashed"><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;div align=&quot;center&quot;&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>&lt;input type=&quot;text&quot; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>name=&quot;$!webwork.htmlEncode($parameters.name)&quot; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.size) size=&quot;$!webwork.htmlEncode($parameters.size)&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.maxlength) maxlength=&quot;$!webwork.htmlEncode($parameters.maxlength)&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.nameValue) value=&quot;$!webwork.htmlEncode($parameters.nameValue)&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.disabled == </SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">true</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black">) disabled=&quot;disabled&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.readonly) readonly=&quot;readonly&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.onkeyup) onkeyup=&quot;$!webwork.htmlEncode($parameters.onkeyup)&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.tabindex) tabindex=&quot;$!webwork.htmlEncode($parameters.tabindex)&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.onchange) onchange=&quot;$!webwork.htmlEncode($parameters.onchange)&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN lang="EN" style="COLOR: black"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>#</SPAN><SPAN class="java"><SPAN lang="EN"><FONT color="#000066">if</FONT></SPAN></SPAN><SPAN lang="EN" style="COLOR: black"> ($parameters.id) id=&quot;$!webwork.htmlEncode($parameters.id)&quot; #end <O:P></O:P></SPAN></FONT></FONT></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>/&gt;&lt;br /&gt; <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black"><FONT size="2"><FONT face="ＭＳ ゴシック"><SPAN style="mso-tab-count: 1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN>$!webwork.htmlEncode($parameters.label) <O:P></O:P></FONT></FONT></SPAN></PRE><PRE style="BORDER-RIGHT: medium none; PADDING-RIGHT: 0mm; BORDER-TOP: medium none; PADDING-LEFT: 0mm; PADDING-BOTTOM: 0mm; MARGIN: 7.5pt 11.25pt 3.75pt; BORDER-LEFT: medium none; PADDING-TOP: 0mm; BORDER-BOTTOM: medium none; mso-border-alt: dashed #3C78B5 .75pt; mso-padding-alt: 0mm 8.0pt 0mm 8.0pt; mso-line-height-alt: 9.75pt"><SPAN lang="EN" style="COLOR: black; mso-fareast-language: ZH-CN"><FONT size="2"><FONT face="ＭＳ ゴシック">&lt;/div&gt;<O:P></O:P></FONT></FONT></SPAN></PRE></DIV>
<DIV><A href="http://dev.rdxx.com/Java/2004-07/8/095756518_3.shtml">上一页</A>&nbsp;<A href="http://dev.rdxx.com/Java/2004-07/8/095756518_5.shtml">下一页</A></DIV></DIV><BR>
<DIV class="next">上一篇：<A href="http://dev.rdxx.com/Java/2004-07/8/095756303.shtml">WebWork2教程（中文版）（2）</A><BR>下一篇：<A href="http://dev.rdxx.com/Java/2004-07/8/095756111.shtml">What is AspectJ</A></DIV></DIV>
<DIV class="clear">&nbsp;</DIV>
<DIV><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/Click.asp" width="0" height="0" border="0"></DIV>
<DIV class="clear">&nbsp;</DIV>
<DIV class="tool"><SPAN>标签： <A href="http://www.rdxx.com/Class/%D6%D0%CE%C4.shtml" target="_blank">中文</A> , <A href="http://www.rdxx.com/Class/webwork.shtml" target="_blank">webwork</A> , <A href="http://www.rdxx.com/Class/%BD%CC%B3%CC.shtml" target="_blank">教程</A> , <A href="http://www.rdxx.com/Class/work.shtml" target="_blank">work</A> , <A href="http://www.rdxx.com/Class/Web.shtml" target="_blank">Web</A> </SPAN><SCRIPT type="text/javascript">
<!-- 
document.write("<a target=\"_blank\" href=\"http://www.rdxx.com/User/AddFavor.asp?Id=35546&Type=ns\" class=\"button_content\" style=\"CURSOR:hand\" onClick=\"window.external.AddFavorite(document.location.href,document.title)\" onMouseMove=\"status='收藏本页';\" onMouseOut=\"status='';\">添加到收藏夹</a>");
-->
</SCRIPT><A target="_blank" href="http://www.rdxx.com/User/AddFavor.asp?Id=35546&Type=ns" class="button_content" style="CURSOR:hand" onclick="window.external.AddFavorite(document.location.href,document.title)" onmousemove="status=&#39;收藏本页&#39;;" onmouseout="status=&#39;&#39;;">添加到收藏夹</A> <SCRIPT type="text/javascript">
<!-- 
document.write("<a href=\"http://www.rdxx.com/User/Sendmail.asp?Id=065180957567191&Type=ns\" class=\"button_content\" target=\"_blank\" onMouseMove=\"status='发送给您的好友';\" onMouseOut=\"status='';\">发送给好友</a>");
-->
</SCRIPT><A href="http://www.rdxx.com/User/Sendmail.asp?Id=065180957567191&Type=ns" class="button_content" target="_blank" onmousemove="status=&#39;发送给您的好友&#39;;" onmouseout="status=&#39;&#39;;">发送给好友</A> <A class="button_content" title="打印本文" href="javascript:window.print();" target="_self">打印本文</A> </DIV>
		<DIV class="clear">&nbsp;</DIV>
		</DIV>
		<DIV class="sublist" id="favorite">
<DIV align="center">
</DIV>
<SCRIPT language="JavaScript" type="text/javascript" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/fav.js"></SCRIPT><IMG style="MARGIN: 4px 2px -4px 0px" alt="" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/quote.gif"><B>收藏到网摘:</B> <A href="javascript:d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');void(vivi=window.open('http://cang.baidu.com/do/add?it='+d.title+'&iu='+escape(d.location.href),'vivi','scrollbars=no,width=480,height=520,left=75,top=20,status=no,resizable=yes'));vivi.focus();"><IMG alt="百度" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/baidu.png" border="0/"></A> <A href="javascript:d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');void(vivi=window.open('http://myweb.cn.yahoo.com/popadd.html?title='+d.title+'&url='+escape(d.location.href),'vivi','scrollbars=no,width=600,height=480,left=75,top=20,status=no,resizable=yes'));vivi.focus();"><IMG alt="Yahoo收藏夹" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/yahoomyweb-cn.png" border="0/"></A> <A href="javascript:d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');void(vivi=window.open('http://vivi.sina.com.cn/collect/icollect.php?pid=28&title='+escape(d.title)+'&url='+escape(d.location.href)+'&desc='+escape(t),'vivi','scrollbars=no,width=480,height=480,left=75,top=20,status=no,resizable=yes'));vivi.focus();"><IMG alt="新浪ViVi" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/vivi.gif" border="0/"></A> <A href="javascript:d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');void(yesky=window.open('http://hot.yesky.com/dp.aspx?t='+escape(d.title)+'&u='+escape(d.location.href)+'&c='+escape(t)+'&st=2','yesky','scrollbars=no,width=400,height=480,left=75,top=20,status=no,resizable=yes'));yesky.focus();"><IMG alt="天极网摘" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/yesky.gif" border="0/"></A> <A href="javascript:d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');void(keyit=window.open('http://my.poco.cn/fav/storeIt.php?t='+escape(d.title)+'&u='+escape(d.location.href)+'&c='+escape(t)+'&img=http://www.h-strong.com/blog/logo.gif','keyit','scrollbars=no,width=475,height=575,status=no,resizable=yes'));keyit.focus();"><IMG alt="POCO网摘" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/poco.gif" border="0/"></A> <A href="javascript:d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');void(keyit=window.open('http://www.365key.com/storeit.aspx?t='+escape(d.title)+'&u='+escape(d.location.href)+'&c='+escape(t),'keyit','scrollbars=no,width=475,height=575,left=75,top=20,status=no,resizable=yes'));keyit.focus();"><IMG alt="365Key网摘" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/365key.gif" border="0/"></A> <A href="javascript:t=document.title;u=location.href;e=document.selection?(document.selection.type!='None'?document.selection.createRange().text:''):(document.getSelection?document.getSelection():'');void(open('http://bookmark.hexun.com/post.aspx?title='+escape(t)+'&url='+escape(u)+'&excerpt='+escape(e),'HexunBookmark','scrollbars=no,width=600,height=450,left=80,top=80,status=no,resizable=yes'));"><IMG alt="和讯网摘" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/hexun.gif" border="0/"></A> <A href="javascript:u=location.href;t=document.title;void(open('http://www.YouNote.com/NoteIt.aspx?u='+escape(u)+'&t='+escape(t)+'&c='+escape(document.selection.createRange().text),'网络书签', 'toolbar=no,width=475,height=575,left=75,top=20,status=no,resizable=yes'));"><IMG alt="YouNote网摘" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/younote.gif" border="0/"></A>

<SCRIPT src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/cang.js" type="text/javascript"></SCRIPT><A href="javascript:u=location.href;t=document.title;c=%22%22+(window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection.createRange().text);c=c.substr(0,480);var url=%22http://cang.baidu.com/do/add?it=%22+encodeURIComponent(t)+%22&iu=%22+encodeURIComponent(u)+%22&dc=%22+encodeURIComponent(c)+%22&fr=js#nw=1%22;window.open(url,'_blank','scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');void 0"><IMG border="0" width="116" height="19" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/add_soucang03.gif"></A>
</DIV>
		<DIV class="sublist">
		<!--相关区块 -->
		<DIV class="sublisttitleico">&nbsp;</DIV>
		<DIV class="sublisttitlebg">
		<DIV class="sublisttitlename">&nbsp;&nbsp;相关资讯</DIV>
		<DIV class="sublisttitlemore"><A href="http://www.rdxx.com/RSS/" target="_blank"><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/xml.gif" border="0" alt="RSS"></A></DIV>
		</DIV>
		<DIV class="clear">&nbsp;</DIV>
		<DIV id="newsview"> 
		  <DIV id="newsdaodu">
		  <UL><LI><SPAN>2006-12-16</SPAN><A href="http://dev.rdxx.com/Java/2004-07/8/095756719.shtml" target="_blank">WebWork2教程（中文版）（1）</A></LI>
<LI><SPAN>2006-12-16</SPAN><A href="http://dev.rdxx.com/Java/2004-07/8/09575677.shtml" target="_blank">WebWork2教程（中文版）(4.2)</A></LI>
<LI><SPAN>2006-12-16</SPAN><A href="http://dev.rdxx.com/Java/2004-07/8/095756457.shtml" target="_blank">WebWork2教程（中文版）(5)(完）</A></LI>
<LI><SPAN>2006-12-16</SPAN><A href="http://dev.rdxx.com/Java/2004-07/8/095756725.shtml" target="_blank">WebWork2教程（中文版）(4.1)</A></LI>
<LI><SPAN>2006-12-16</SPAN><A href="http://dev.rdxx.com/Java/2004-07/8/095756303.shtml" target="_blank">WebWork2教程（中文版）（2）</A></LI>
<LI><SPAN>2006-12-16</SPAN><A href="http://dev.rdxx.com/Java/2002-04/14/093127178.shtml" target="_blank">WebWork2教程（中文版）(4.1.1)</A></LI>
<LI><SPAN>2006-12-16</SPAN><A href="http://dev.rdxx.com/Java/2002-04/14/0931271.shtml" target="_blank">WebWork2教程（中文版）（2）</A></LI>
<LI><SPAN>2006-12-16</SPAN><A href="http://dev.rdxx.com/Java/2002-04/14/093127330.shtml" target="_blank">WebWork2教程（中文版）(4.1)</A></LI>
<LI><SPAN>2006-12-16</SPAN><A href="http://dev.rdxx.com/Java/2002-04/14/093127583.shtml" target="_blank">WebWork2教程（中文版）（1）</A></LI>
<LI><SPAN>2006-12-16</SPAN><A href="http://dev.rdxx.com/Java/2002-04/14/093127391.shtml" target="_blank">WebWork2教程（中文版）(3)</A></LI>
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
	<UL id="ClassPicNews"><LI><A class="" href="http://hw.rdxx.com/hw-News/2008/10/2022535334909.shtml" title="最低2998元&nbsp;十月第二季新品笔记本推荐" target="_blank"><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/183638.jpg" height="100" width="150" border="0" alt="最低2998元 十月第二季新品笔记本推荐"></A><BR><A class="" href="http://hw.rdxx.com/hw-News/2008/10/2022535334909.shtml" title="最低2998元&nbsp;十月第二季新品笔记本推荐" target="_blank">最低2998元&nbsp;十月第二季新品</A></LI><LI><A class="" href="http://os.rdxx.com/Windows7/2008/10/1412384761423.shtml" title="微软下一代操作系统正式定名为Windows&nbsp;7" target="_blank"><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/182940.jpg" height="100" width="150" border="0" alt="微软下一代操作系统正式定名为Windows 7"></A><BR><A class="" href="http://os.rdxx.com/Windows7/2008/10/1412384761423.shtml" title="微软下一代操作系统正式定名为Windows&nbsp;7" target="_blank">微软下一代操作系统正式定</A></LI><LI><A class="" href="http://os.rdxx.com/WindowsXP/2008/6/2522231290234.shtml" title="微软保证提供Windows&nbsp;XP支持至2014年" target="_blank"><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/173156.jpg" height="100" width="150" border="0" alt="微软保证提供Windows XP支持至2014年"></A><BR><A class="" href="http://os.rdxx.com/WindowsXP/2008/6/2522231290234.shtml" title="微软保证提供Windows&nbsp;XP支持至2014年" target="_blank">微软保证提供Windows&nbsp;XP支</A></LI><LI><A class="" href="http://os.rdxx.com/Windows7/2008/5/26243823399.shtml" title="传Windows&nbsp;7将于27日首次正式亮相" target="_blank"><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/170410.jpg" height="100" width="150" border="0" alt="传Windows 7将于27日首次正式亮相"></A><BR><A class="" href="http://os.rdxx.com/Windows7/2008/5/26243823399.shtml" title="传Windows&nbsp;7将于27日首次正式亮相" target="_blank">传Windows&nbsp;7将于27日首次正</A></LI><LI><A class="" href="http://hw.rdxx.com/MartTrade/2008/5/817291373846.shtml" title="五月选卡指南&nbsp;399-699元超值显卡推荐" target="_blank"><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/168707.jpg" height="100" width="150" border="0" alt="五月选卡指南 399-699元超值显卡推荐"></A><BR><A class="" href="http://hw.rdxx.com/MartTrade/2008/5/817291373846.shtml" title="五月选卡指南&nbsp;399-699元超值显卡推荐" target="_blank">五月选卡指南&nbsp;399-699元超</A></LI></UL>
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
	<UL><LI><A href="http://os.rdxx.com/Windows7/2009/4/12272572674.shtml" title="[图]Windows&nbsp;7&nbsp;Build&nbsp;7106简体中文版将被泄漏" target="_blank">[图]Windows&nbsp;7&nbsp;Build&nbsp;7106简</A></LI><LI><A href="http://os.rdxx.com/Windows7/2009/4/99521016961.shtml" target="_blank">Windows&nbsp;7&nbsp;Build&nbsp;7077截图赏</A></LI><LI><A href="http://dev.rdxx.com/NET/CSharp/2009/4/12393531606.shtml" title="横向技术分析C#、C++和Java优劣" target="_blank">横向技术分析C#、C++和Java优</A></LI><LI><A href="http://soft.rdxx.com/Soft-News/2009/4/124254633833.shtml" title="十大史上最烂操作系统&nbsp;谁来为它们鸣不平？" target="_blank">十大史上最烂操作系统&nbsp;谁来为</A></LI><LI><A href="http://soft.rdxx.com/Apply/Office/Word/2009/4/123132112672.shtml" title="办公室技巧:Word&nbsp;2007制作核对清单" target="_blank">办公室技巧:Word&nbsp;2007制作核</A></LI><LI><A href="http://soft.rdxx.com/Apply/Office/Word/2009/4/10410987672.shtml" title="Word&nbsp;2003中将已有文字设置为文本框" target="_blank">Word&nbsp;2003中将已有文字设置为</A></LI><LI><A href="http://os.rdxx.com/Windows7/2009/4/922275666080.shtml" title="Windows&nbsp;7:更改你的登录界面背景" target="_blank">Windows&nbsp;7:更改你的登录界面</A></LI><LI><A href="http://soft.rdxx.com/Soft-News/2009/4/10081789677.shtml" title="美国ABC新闻网站评出5大最着名黑客(图)" target="_blank">美国ABC新闻网站评出5大最着</A></LI><LI><A href="http://os.rdxx.com/Windows7/2009/4/813252845640.shtml" title="Windows&nbsp;7重要版本Build&nbsp;7077泄露" target="_blank">Windows&nbsp;7重要版本Build&nbsp;707</A></LI><LI><A href="http://os.rdxx.com/Windows7/2009/4/922275678783.shtml" title="微软:安装Windows&nbsp;7&nbsp;RC前需先退回Vista" target="_blank">微软:安装Windows&nbsp;7&nbsp;RC前需先</A></LI><LI><A href="http://os.rdxx.com/Windows7/2009/4/922275638827.shtml" title="Windows&nbsp;7开发进度加快&nbsp;已经到达7079" target="_blank">Windows&nbsp;7开发进度加快&nbsp;已经</A></LI><LI><A href="http://os.rdxx.com/Windows7/2009/4/81323422750.shtml" title="[BT]Windows&nbsp;7&nbsp;build&nbsp;7077&nbsp;x86&nbsp;RC&nbsp;Escrow" target="_blank">[BT]Windows&nbsp;7&nbsp;build&nbsp;7077&nbsp;x</A></LI><LI><A href="http://hw.rdxx.com/MartTrade/2009/4/117531079452.shtml" title="蓝色时尚&nbsp;DELL&nbsp;1427娱乐仅5499" target="_blank">蓝色时尚&nbsp;DELL&nbsp;1427娱乐仅54</A></LI><LI><A href="http://os.rdxx.com/Windows7/2009/4/922275619891.shtml" title="Windows&nbsp;7&nbsp;Build&nbsp;7077细节改进" target="_blank">Windows&nbsp;7&nbsp;Build&nbsp;7077细节改</A></LI><LI><A href="http://os.rdxx.com/Windows7/2009/4/131426352839.shtml" title="简体中文版！Windows&nbsp;7&nbsp;Build&nbsp;7106泄露" target="_blank">简体中文版！Windows&nbsp;7&nbsp;Buil</A></LI></UL>
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
	<UL><LI><A href="http://os.rdxx.com/Windows7/2009/4/14223858908.shtml" title="Windows&nbsp;7软件将同时可运行在32位与64位版本中" target="_blank">Windows&nbsp;7软件将同时可运行在</A></LI>
<LI><A href="http://os.rdxx.com/Windows7/2009/4/14223860032.shtml" title="调查显示83&percnt;的企业用户明年不会部署Windows&nbsp;7" target="_blank">调查显示83&percnt;的企业用户明年不</A></LI>
<LI><A href="http://os.rdxx.com/Windows7/2009/4/14223874311.shtml" title="调查显示83&percnt;企业2011年前不愿使用Windows&nbsp;7" target="_blank">调查显示83&percnt;企业2011年前不愿</A></LI>
<LI><A href="http://hw.rdxx.com/hw-News/2009/4/131426352384.shtml" title="下载：Intel&nbsp;G41/G43/G45显卡驱动15.13版" target="_blank">下载：Intel&nbsp;G41/G43/G45显卡</A></LI>
<LI><A href="http://hw.rdxx.com/hw-News/2009/4/13142639406.shtml" title="下载：Intel迅驰无线网卡驱动12.4官方正式版" target="_blank">下载：Intel迅驰无线网卡驱动</A></LI>
<LI><A href="http://soft.rdxx.com/Soft-News/2009/4/13142636196.shtml" title="Wine发布1.1.19正式版&nbsp;支持VC++" target="_blank">Wine发布1.1.19正式版&nbsp;支持V</A></LI>
<LI><A href="http://os.rdxx.com/Windows7/2009/4/131426352839.shtml" title="简体中文版！Windows&nbsp;7&nbsp;Build&nbsp;7106泄露" target="_blank">简体中文版！Windows&nbsp;7&nbsp;Buil</A></LI>
<LI><A href="http://soft.rdxx.com/Soft-News/2009/4/131426380333.shtml" title="微软为IE6、IE7用户提供自动更新至IE8" target="_blank">微软为IE6、IE7用户提供自动</A></LI>
<LI><A href="http://os.rdxx.com/Vista/VistaNews/2009/4/1353424395.shtml" title="微软:史上最安全的操作系统是Vista&nbsp;SP2" target="_blank">微软:史上最安全的操作系统是</A></LI>
<LI><A href="http://net.rdxx.com/Net-News/2009/4/13055190835.shtml" title="《南方都市报》:互联网保卫战" target="_blank">《南方都市报》:互联网保卫战</A></LI>
<LI><A href="http://net.rdxx.com/Net-News/2009/4/13055144647.shtml" title="光缆被割引发大规模断网&nbsp;AT&amp;T悬赏10万美元捉贼" target="_blank">光缆被割引发大规模断网&nbsp;AT&amp;</A></LI>
<LI><A href="http://db.rdxx.com/Oracle/2009/4/1316101138827.shtml" title="使用DB2必须了解的几个知识点" target="_blank">使用DB2必须了解的几个知识点</A></LI>
<LI><A href="http://soft.rdxx.com/Soft-News/2009/4/1317324535682.shtml" title="国外网站评IT市场10大英雄&nbsp;Linux之父与美国总统榜上有名" target="_blank">国外网站评IT市场10大英雄&nbsp;L</A></LI>
<LI><A href="http://os.rdxx.com/Windows7/2009/4/1317324594334.shtml" title="Windows&nbsp;7可免费降级至Windows&nbsp;XP专业版" target="_blank">Windows&nbsp;7可免费降级至Windo</A></LI>
<LI><A href="http://soft.rdxx.com/Soft-News/2009/4/1317324582807.shtml" title="Hotmail登陆故障引起用户恐慌&nbsp;微软致歉" target="_blank">Hotmail登陆故障引起用户恐慌</A></LI>
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
		<IFRAME scrolling="no" frameborder="0" width="760" height="90" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/dell_760x90.htm"></IFRAME>
	</DIV>
	<DIV align="center">
	<HR width="760" size="2"><BR>
	<A href="http://validator.w3.org/check?uri=referer" target="_blank"><IMG src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/valid-xhtml10-blue" alt="Valid XHTML 1.0 Transitional" height="31" width="88" border="0"></A>
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
<SCRIPT language="javascript" type="text/javascript" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/523559.js"></SCRIPT><A href="http://www.51.la/?00523559" target="_blank"><IMG alt="51.la 专业、免费、强健的访问统计" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/icon_0.gif" style="border:none"></A>
<IMG style="width:0px;height:0px" src="./WebWork2教程（中文版） 4 (4.1.1)-4__HotInfo__Rdxx_files/go.asp">
</DIV>



</BODY></HTML>