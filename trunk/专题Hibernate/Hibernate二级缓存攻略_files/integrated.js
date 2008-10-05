//学民__2007.11
function LoadPrintJsCallBack()
	{
		if(typeof forSPrint == "object" && forSPrint.Print)
		{
			forSPrint.Print();
		}
	}

	function SinaPrintGetBrowser(){
		if (navigator.userAgent.indexOf("MSIE") != -1)
		{
			return 1; 
		}
		else if (navigator.userAgent.indexOf("Firefox") != -1)
		{
			return 2; 
		}
		else if (navigator.userAgent.indexOf("Navigator") != -1)
		{
			return 3;
		}
		else if (navigator.userAgent.indexOf("Opera") != -1 )
		{
			return 4;
		}else
		{
			return 5;
		}
	}

	function LoadPrintJs()
	{
		var myBrowser = SinaPrintGetBrowser();//获取浏览器类型

		if(myBrowser == 1)
		{
			var js_url = "http://image.yesky.com/TLimages/yesky/js/print.js"; //打印函数库地址
			var js = document.createElement( "script" ); 
			js.setAttribute( "type", "text/javascript" );
			js.setAttribute( "src", js_url);
			js.setAttribute( "id", "sinaPrintJsUrl");
			document.body.insertBefore( js, null);
			document.getElementById("sinaPrintJsUrl").onreadystatechange = LoadPrintJsCallBack;
		}
		else
		{
			var js_url = "http://image.yesky.com/TLimages/yesky/js/print.js";
			var js = document.createElement( "script" ); 
			js.setAttribute( "type", "text/javascript" );
			js.setAttribute( "src", js_url);
			js.setAttribute( "id", "sinaPrintJsUrl");
			js.setAttribute( "onload", "LoadPrintJsCallBack()");
			document.body.insertBefore( js, null);					
		}
	}
function SetFont(size){
	document.getElementById("logPanel").style.fontSize=size;
}