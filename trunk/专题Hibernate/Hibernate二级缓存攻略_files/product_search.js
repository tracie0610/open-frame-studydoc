document.writeln("<style>");
document.writeln(".searchbox{width:635px;height:80px;border:1px #c6c6c6 solid;margin:auto;background:#fff;}");
document.writeln(".searchbox2{width:605px;float:left;padding:7px 15px 0px 15px;}");
document.writeln(".searchbox2 dl{width:605px;float:left;height:37px;}");
document.writeln(".searchbox2 dt{width:120px;font-size:14px;float:left;height:37px;line-height:25px;text-align:left;}");
document.writeln(".searchbox2 .dd1{background:url(http:\/\/image.yesky.com\/TLimages\/yesky\/images\/yesview.gif);float:left;width:63px;height:30px;margin-left:6px;text-align:center;color:#982E00;font-size:14px; font-weight:bold; line-height:27px; cursor:pointer;TEXT-DECORATION: none}");
document.writeln(".searchbox2 .dd2{background:url(http:\/\/image.yesky.com\/TLimages\/yesky\/images\/noview.gif);float:left;width:63px;height:30px;margin-left:6px;text-align:center;font-size:14px;line-height:27px;cursor:pointer;TEXT-DECORATION: none}");
document.writeln(".searchbox3{width:605px;float:left;padding:0px 15px 0px 15px;}");
document.writeln(".searchbox3 dl{width:340px;float:left;text-align:left;}");
document.writeln(".searchbox3 dt{width:260px;float:left;text-align:left;margin-left:10px;white-space:nowrap;overflow:hidden;line-height:30px;}");
document.writeln(".search_input{width:248px;padding:6px 5px 6px 5px; border:1px #c6c6c6 solid;}");
document.writeln(".searchbox3 A:link {COLOR: #009; TEXT-DECORATION: none}");
document.writeln(".searchbox3 A:active {COLOR: #009;  TEXT-DECORATION: none}");
document.writeln(".searchbox3 A:visited {COLOR: #009;TEXT-DECORATION: none}");
document.writeln(".searchbox3 A:hover {COLOR: #CA0816;  TEXT-DECORATION: underline}");
document.writeln(".searchbox2 A:link { TEXT-DECORATION: none}");
document.writeln(".searchbox2 A:active {  TEXT-DECORATION: none}");
document.writeln(".searchbox2 A:visited {TEXT-DECORATION: none}");
document.writeln(".searchbox2 A:hover {TEXT-DECORATION: none}");
document.writeln(".ydp{display:block;}");
document.writeln(".ndp{display:none}");
document.writeln("<\/style>");
document.writeln("<script>");
document.writeln("var actionList = [\"main.do\",\"search.do\",\"searchproduct.do\",\"picsearch.do\",\"searchdownload.do\",\"commusearch.do\"];");
document.writeln("function so(a,b,c,d,e,f,dd)");
document.writeln("{");
document.writeln("act = actionList[parseInt(dd.id.substr(3))-1];");
document.writeln("document.f1.action = \"http:\/\/search.yesky.com\/\"+act;");
document.writeln("eval(\"document.getElementById(\'so_\"+a+\"\').className=\'dd1\'\");");
document.writeln("eval(\"document.getElementById(\'so_\"+b+\"\').className=\'dd2\'\");");
document.writeln("eval(\"document.getElementById(\'so_\"+c+\"\').className=\'dd2\'\");");
document.writeln("eval(\"document.getElementById(\'so_\"+d+\"\').className=\'dd2\'\");");
document.writeln("eval(\"document.getElementById(\'so_\"+e+\"\').className=\'dd2\'\");");
document.writeln("eval(\"document.getElementById(\'so_\"+f+\"\').className=\'dd2\'\");");
document.writeln("");
document.writeln("eval(\"document.getElementById(\'vso_\"+a+\"\').style.display=\'block\'\");");
document.writeln("eval(\"document.getElementById(\'vso_\"+b+\"\').style.display=\'none\'\");");
document.writeln("eval(\"document.getElementById(\'vso_\"+c+\"\').style.display=\'none\'\");");
document.writeln("eval(\"document.getElementById(\'vso_\"+d+\"\').style.display=\'none\'\");");
document.writeln("eval(\"document.getElementById(\'vso_\"+e+\"\').style.display=\'none\'\");");
document.writeln("eval(\"document.getElementById(\'vso_\"+f+\"\').style.display=\'none\'\");");
document.writeln("}");
document.writeln("<\/script>");
document.writeln("<form name=\"f1\" action=\"http:\/\/search.yesky.com\/main.do\" target=\"_blank\" method=\"GET\" onsubmit=\"return _checkProductSearch()\">");
document.writeln("<div class=\"searchbox\">");
document.writeln("<div class=\"searchbox2\">");
document.writeln("<dl>");
document.writeln("<dt><b>天极IT搜索<\/b><\/dt>");
document.writeln("<dd class=\"dd1\" id=\"so_1\" onmousedown=\"so(1,2,3,4,5,6,this)\"><a onclick=\"_checkProductSearch();\">综合<\/a><\/dd>");
document.writeln("<dd class=\"dd2\" id=\"so_2\" onmousedown=\"so(2,1,3,4,5,6,this)\"><a onclick=\"_checkProductSearch();\">网页<\/a><\/dd>");
document.writeln("<dd class=\"dd2\" id=\"so_3\" onmousedown=\"so(3,1,2,4,5,6,this)\"><a onclick=\"_checkProductSearch();\">产品<\/a><\/dd>");
document.writeln("<dd class=\"dd2\" id=\"so_4\" onmousedown=\"so(4,1,2,3,5,6,this)\"><a onclick=\"_checkProductSearch();\">图片<\/a><\/dd>");
document.writeln("<dd class=\"dd2\" id=\"so_5\" onmousedown=\"so(5,1,2,3,4,6,this)\"><a onclick=\"_checkProductSearch();\">下载<\/a><\/dd>");
document.writeln("<dd class=\"dd2\" id=\"so_6\" onmousedown=\"so(6,1,2,3,4,5,this)\"><a onclick=\"_checkProductSearch();\">社区<\/a><\/dd>");
document.writeln("<\/dl>");
document.writeln("<\/div>");
document.writeln("<div class=\"searchbox3\">");
document.writeln("<dl><input name=\"wd\" id=\"wd\" type=\"text\" class=\"search_input\" \/>　<input name=\"login\" type=\"image\" src=\"http:\/\/image.yesky.com\/TLimages\/yesky\/images\/bottom.gif\" align=\"absmiddle\" \/><\/dl>");
document.writeln("<dt><div id=\"vso_1\">热门搜索：<a href=\"http:\/\/search.chinabyte.com\/main\/thinkpad%20t60.shtml\" target=\"_blank\">ThinkPad t60<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/诺基亚.shtml\" target=\"_blank\">诺基亚<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/迅雷.shtml\" target=\"_blank\">迅雷<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/暴风影音.shtml\" target=\"_blank\">暴风影音<\/a><\/div>");
document.writeln("<div id=\"vso_2\" style=\"display:none;\">热门搜索：<a href=\"http:\/\/search.chinabyte.com\/main\/thinkpad%20t60.shtml\" target=\"_blank\">ThinkPad t60<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/诺基亚.shtml\" target=\"_blank\">诺基亚<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/迅雷.shtml\" target=\"_blank\">迅雷<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/暴风影音.shtml\" target=\"_blank\">暴风影音<\/a><\/div>");
document.writeln("<div id=\"vso_3\" style=\"display:none;\">热门搜索：<a href=\"http:\/\/search.chinabyte.com\/main\/thinkpad%20t60.shtml\">ThinkPad t60<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/诺基亚.shtml\" target=\"_blank\">诺基亚<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/迅雷.shtml\" target=\"_blank\">迅雷<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/暴风影音.shtml\" target=\"_blank\">暴风影音<\/a><\/div>");
document.writeln("<div id=\"vso_4\" style=\"display:none;\">热门搜索：<a href=\"http:\/\/search.chinabyte.com\/main\/thinkpad%20t60.shtml\">ThinkPad t60<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/诺基亚.shtml\" target=\"_blank\">诺基亚<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/迅雷.shtml\" target=\"_blank\">迅雷<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/暴风影音.shtml\" target=\"_blank\">暴风影音<\/a><\/div>");
document.writeln("<div id=\"vso_5\" style=\"display:none;\">热门搜索：<a href=\"http:\/\/search.chinabyte.com\/main\/thinkpad%20t60.shtml\" target=\"_blank\">ThinkPad t60<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/诺基亚.shtml\" target=\"_blank\">诺基亚<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/迅雷.shtml\" target=\"_blank\">迅雷<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/暴风影音.shtml\" target=\"_blank\">暴风影音<\/a><\/div>");
document.writeln("<div id=\"vso_6\" style=\"display:none;\">热门搜索：<a href=\"http:\/\/search.chinabyte.com\/main\/thinkpad%20t60.shtml\" target=\"_blank\">ThinkPad t60<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/诺基亚.shtml\" target=\"_blank\">诺基亚<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/迅雷.shtml\" target=\"_blank\">迅雷<\/a>　<a href=\"http:\/\/search.chinabyte.com\/main\/暴风影音.shtml\" target=\"_blank\">暴风影音<\/a><\/div>");
document.writeln("<\/div>	");
document.writeln("<\/div>");
document.writeln("<\/form>");
function _checkProductSearch()
{
if(document.f1.wd.value==''){
     document.f1.wd.focus();
     return false;
    }
	else{
	document.f1.submit();
	}
  }