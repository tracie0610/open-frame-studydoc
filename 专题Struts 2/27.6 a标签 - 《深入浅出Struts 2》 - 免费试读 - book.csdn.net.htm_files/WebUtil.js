// JScript 文件
function HasCss(cssname)   
{
 
  for(var i=0;i<=document.styleSheets.length-1;i++)
  {
    if(document.styleSheets[i].href.toString().indexOf(cssname+".css")>0)
      return true;
  }
  return false;
}
function HasScript(scriptname)   
{
 
 var t=document.getElementsByTagName("SCRIPT");
 if(t==null) return false;
    for(var i=0;i<=t.length-1;i++)
  {
    if(t[i].src.toString().indexOf(scriptname+".js")>0)
      return true;
 
  
   }
     return false;
}


///
 if(!HasScript("WebUtilConfig.js"))
     {
          document.write("<script src='/hi/js/WebUtilConfig.js'></script>");//需要修改
          
          
     }
    
//loadConfigJSFile
     
     
     
WebUtil=function()
{
   this.scriptId="WebUtil_shenyi_js01";
   this._AjaxClass;
   this._Init=function()
   {
      
   }
   this.test=function()
   {
    alert("dd");
   }
   this.Invoke=function(v_code,pars)
   {
       var request_url=AppSettings_AjaxClass;       // 请求url
       var request_pars = pars+"&rv="+Math.random()+"&code="+v_code; //请求参数
       
       var my  =   new  Ajax.Request(
       request_url, 
        {
       method: 'get',
       parameters: request_pars,
       onComplete: function(r){  eval(r.responseText);}
      } );
       
   }
     this.InvokeScript=function(v_code,pars,script)
   {
       var request_url=AppSettings_AjaxClass;       // 请求url
       var request_pars = pars+"&rv="+Math.random()+"&code="+v_code; //请求参数
       
       var my  =   new  Ajax.Request(
       request_url, 
        {
       method: 'get',
       parameters: request_pars,
       onComplete: function(r){  eval(r.responseText);eval(script);}
      } );
       
   }
   this.InvokeHtml=function(url,pars,containerID)
   {  
       var request_url=url;       // 请求url
       var request_pars = pars+"&rv="+Math.random(); //请求参数
      
       var my  =   new  Ajax.Request(
       request_url, 
        {
       method: 'get',
       parameters: request_pars,
       onComplete: function(r){$(containerID).innerHTML=r.responseText;}
      } );
   }
   this.InvokeHtml2=function(v_code,pars,containerID)
   {  
       var request_url=AppSettings_AjaxClass;  
      // 请求url
       var request_pars = pars+"&rv="+Math.random()+"&code="+v_code;; //请求参数
           
       var my  =   new  Ajax.Request(
       request_url, 
        {
       method: 'get',
       parameters: request_pars,
       onComplete: function(r){
                        if(r.responseText=="login") 
                          alert("请先登录")
                         else if(r.responseText!="")
                           $(containerID).innerHTML=r.responseText;
                          else 
                            alert("提交失败请稍候再试")
                        }
      } );
   }
}

