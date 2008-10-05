
/**
 检测浏览器类型
*/
function checkBrowser(){
    var cb = "Unknown";
    if(window.ActiveXObject){
        cb = "IE";
    }else if(navigator.userAgent.toLowerCase().indexOf("firefox") != -1){
        cb = "Firefox";
    }else if((typeof document.implementation != "undefined") && (typeof document.implementation.createDocument != "undefined") && (typeof HTMLDocument != "undefined")){
        cb = "Mozilla";
    }else if(navigator.userAgent.toLowerCase().indexOf("opera") != -1){
        cb = "Opera";
    }
    return cb;
}

/**

  利用js请求方式异步调用服务器。
  url 请求的url
  callback  回调函数
  returnVariableName   服务器返回的内容对应的js变量名
*/

function getDataFromServer(url,callback) {
    var id ="ScriptTagID";
    // Fetch the element pointed to by the id. If it exists, we destroy it so we can create a new one.
    var oScript = document.getElementById(id);
   
    // Point at the script tag, if it exists
    var head = document.getElementsByTagName("head").item(0);
     // Destroy the tag, if it exists
   
    if (oScript) {
		for(i=0;i<head.childNodes.length;i++){
			if(head.childNodes[i] == oScript ){
				head.removeChild(head.childNodes[i]);
				break;
			}

		}
    	// Destory object
     }       
    
    // Create the new script tag
    oScript = document.createElement("script");

    // Setup the src attribute of the script tag
    //sendPath = encodeURIComponent("/MapsService/V1/geocode?appid=YahooDemo&location=78704");
    //wholeurl = url + "?path=" + sendPath;
    if(url.indexOf("&")!=-1){
    	url = url+"&callback="+callback;
    }else{
    	url = url+"?callback="+callback;
    }
    
    // Set the id attribute of the script tag
    oScript.setAttribute("id",id);
    
    oScript.setAttribute("src", url);

    

    // Create the new script tag which causes the proxy to be called
    head.appendChild(oScript);
     
}


 
