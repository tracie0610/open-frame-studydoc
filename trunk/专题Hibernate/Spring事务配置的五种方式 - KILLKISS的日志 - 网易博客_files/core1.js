DomainMap={
cookieDomain:'.163.com',
serverHostName:'blog.163.com',
serverDomain:'.blog.163.com',
getParentDomain:function(s){
if(s.indexOf('@')!=-1||s.indexOf('_')!=-1||s.indexOf('..')!=-1||s.charAt(s.length-1)=='.'||s.toLowerCase().substr(s.length-4)=='.www')
return this.serverHostName+'/'+s;
return s+this.serverDomain;
},
getPCDomain:function(userName,childId){
return"blog.163.com/"+userName+"/home/#tid=9997&prv=true&uid="+childId;
}
};
if(dwr==null)var dwr={};
if(dwr.engine==null)dwr.engine={};
if(DWREngine==null)var DWREngine=dwr.engine;
dwr.engine.setErrorHandler=function(handler){
dwr.engine._errorHandler=handler;
};
dwr.engine.setWarningHandler=function(handler){
dwr.engine._warningHandler=handler;
};
dwr.engine.setTextHtmlHandler=function(handler){
dwr.engine._textHtmlHandler=handler;
}
dwr.engine.setTimeout=function(timeout){
dwr.engine._timeout=timeout;
};
dwr.engine.setPreHook=function(handler){
dwr.engine._preHook=handler;
};
dwr.engine.setPostHook=function(handler){
dwr.engine._postHook=handler;
};
dwr.engine.setHeaders=function(headers){
dwr.engine._headers=headers;
};
dwr.engine.setParameters=function(parameters){
dwr.engine._parameters=parameters;
};
dwr.engine.XMLHttpRequest=1;
dwr.engine.IFrame=2;
dwr.engine.ScriptTag=3;
dwr.engine.setRpcType=function(newType){
if(newType!=dwr.engine.XMLHttpRequest&&newType!=dwr.engine.IFrame&&newType!=dwr.engine.ScriptTag){
dwr.engine._handleError(null,{name:"dwr.engine.invalidRpcType",message:"RpcType must be one of dwr.engine.XMLHttpRequest or dwr.engine.IFrame or dwr.engine.ScriptTag"});
return;
}
dwr.engine._rpcType=newType;
};
dwr.engine.setHttpMethod=function(httpMethod){
if(httpMethod!="GET"&&httpMethod!="POST"){
dwr.engine._handleError(null,{name:"dwr.engine.invalidHttpMethod",message:"Remoting method must be one of GET or POST"});
return;
}
dwr.engine._httpMethod=httpMethod;
};
dwr.engine.setOrdered=function(ordered){
dwr.engine._ordered=ordered;
};
dwr.engine.setAsync=function(async){
dwr.engine._async=async;
};
dwr.engine.setActiveReverseAjax=function(activeReverseAjax){
if(activeReverseAjax){
if(dwr.engine._activeReverseAjax)return;
dwr.engine._activeReverseAjax=true;
dwr.engine._poll();
}
else{
if(dwr.engine._activeReverseAjax&&dwr.engine._pollReq)dwr.engine._pollReq.abort();
dwr.engine._activeReverseAjax=false;
}
};
dwr.engine.setPollType=function(newPollType){
if(newPollType!=dwr.engine.XMLHttpRequest&&newPollType!=dwr.engine.IFrame){
dwr.engine._handleError(null,{name:"dwr.engine.invalidPollType",message:"PollType must be one of dwr.engine.XMLHttpRequest or dwr.engine.IFrame"});
return;
}
dwr.engine._pollType=newPollType;
};
dwr.engine.defaultErrorHandler=function(message,ex){
dwr.engine._debug("Error: "+ex.name+", "+ex.message,true);
if(message==null||message=="")alert("A server error has occured. More information may be available in the console.");
else if(message.indexOf("0x80040111")!=-1)dwr.engine._debug(message);
else{};
};
dwr.engine.defaultWarningHandler=function(message,ex){
dwr.engine._debug(message);
};
dwr.engine.beginBatch=function(){
if(dwr.engine._batch){
dwr.engine._handleError(null,{name:"dwr.engine.batchBegun",message:"Batch already begun"});
return;
}
dwr.engine._batch=dwr.engine._createBatch();
};
dwr.engine.endBatch=function(options){
var batch=dwr.engine._batch;
if(batch==null){
dwr.engine._handleError(null,{name:"dwr.engine.batchNotBegun",message:"No batch in progress"});
return;
}
dwr.engine._batch=null;
if(batch.map.callCount==0)return;
if(options)dwr.engine._mergeBatch(batch,options);
if(dwr.engine._ordered&&dwr.engine._batchesLength!=0){
dwr.engine._batchQueue[dwr.engine._batchQueue.length]=batch;
}
else{
dwr.engine._sendData(batch);
}
};
dwr.engine.setPollMethod=function(type){dwr.engine.setPollType(type);};
dwr.engine.setMethod=function(type){dwr.engine.setRpcType(type);};
dwr.engine.setVerb=function(verb){dwr.engine.setHttpMethod(verb);};
dwr.engine._origScriptSessionId="${scriptSessionId}";
dwr.engine._sessionCookieName="${sessionCookieName}";
dwr.engine._allowGetForSafariButMakeForgeryEasier="${allowGetForSafariButMakeForgeryEasier}";
dwr.engine._scriptTagProtection="${scriptTagProtection}";
dwr.engine._defaultPath="${defaultPath}";
dwr.engine._scriptSessionId=null;
dwr.engine._getScriptSessionId=function(){
if(dwr.engine._scriptSessionId==null){
dwr.engine._scriptSessionId=dwr.engine._origScriptSessionId+Math.floor(Math.random()*1000);
}
return dwr.engine._scriptSessionId;
};
dwr.engine._errorHandler=dwr.engine.defaultErrorHandler;
dwr.engine._warningHandler=dwr.engine.defaultWarningHandler;
dwr.engine._preHook=null;
dwr.engine._postHook=null;
dwr.engine._batches={};
dwr.engine._batchesLength=0;
dwr.engine._batchQueue=[];
dwr.engine._rpcType=dwr.engine.XMLHttpRequest;
dwr.engine._httpMethod="POST";
dwr.engine._ordered=false;
dwr.engine._async=true;
dwr.engine._batch=null;
dwr.engine._timeout=0;
dwr.engine._DOMDocument=["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.3.0","Msxml2.DOMDocument.4.0","Msxml2.DOMDocument.5.0","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XMLDOM"];
dwr.engine._XMLHTTP=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
dwr.engine._activeReverseAjax=false;
dwr.engine._pollType=dwr.engine.XMLHttpRequest;
dwr.engine._outstandingIFrames=[];
dwr.engine._pollReq=null;
dwr.engine._pollCometInterval=200;
dwr.engine._pollRetries=0;
dwr.engine._maxPollRetries=0;
dwr.engine._textHtmlHandler=null;
dwr.engine._headers=null;
dwr.engine._parameters=null;
dwr.engine._postSeperator="\n";
dwr.engine._defaultInterceptor=function(data){return data;}
dwr.engine._urlRewriteHandler=dwr.engine._defaultInterceptor;
dwr.engine._contentRewriteHandler=dwr.engine._defaultInterceptor;
dwr.engine._replyRewriteHandler=dwr.engine._defaultInterceptor;
dwr.engine._nextBatchId=0;
dwr.engine._propnames=["rpcType","httpMethod","async","timeout","errorHandler","warningHandler","textHtmlHandler"];
dwr.engine._partialResponseNo=0;
dwr.engine._partialResponseYes=1;
dwr.engine._partialResponseFlush=2;
dwr.engine._unload=function(){
if(dwr.engine._batchesLength>0){
for(var i=0;i<dwr.engine._nextBatchId;i++){
var batch=dwr.engine._batches[i];
dwr.engine._abortRequest(batch);
}
}
}
dwr.engine.setUnloadHandler=function(){
if(window.attachEvent){
window.attachEvent('onbeforeunload',dwr.engine._unload);
}
else{
window.addEventListener('beforeunload',dwr.engine._unload,false);
}
}
dwr.engine.setUnloadHandler();
dwr.engine._execute=function(path,scriptName,methodName,vararg_params){
var singleShot=false;
if(dwr.engine._batch==null){
dwr.engine.beginBatch();
singleShot=true;
}
var batch=dwr.engine._batch;
var args=[];
for(var i=0;i<arguments.length-3;i++){
args[i]=arguments[i+3];
}
if(batch.path==null){
batch.path=path;
}
else{
if(batch.path!=path){
dwr.engine._handleError(batch,{name:"dwr.engine.multipleServlets",message:"Can't batch requests to multiple DWR Servlets."});
return;
}
}
var callData;
var lastArg=args[args.length-1];
if(typeof lastArg=="function"||lastArg==null)callData={callback:args.pop()};
else callData=args.pop();
dwr.engine._mergeBatch(batch,callData);
batch.handlers[batch.map.callCount]={
exceptionHandler:callData.exceptionHandler,
callback:callData.callback
};
if(batch.httpMethod=='GET'){
var cid="";
for(prop in batch.map){
if(prop!="scriptSessionId")
cid+=prop+":"+batch.map[prop]+"_";
}
cid=NEUtil.MD5.hex(cid);
batch.map["scriptSessionId"]=dwr.engine._origScriptSessionId+cid;
}
var prefix="c"+batch.map.callCount+"-";
batch.map[prefix+"scriptName"]=scriptName;
batch.map[prefix+"methodName"]=methodName;
batch.map[prefix+"id"]=batch.map.callCount;
for(i=0;i<args.length;i++){
dwr.engine._serializeAll(batch,[],args[i],prefix+"param"+i);
}
batch.map.callCount++;
if(singleShot)dwr.engine.endBatch();
};
dwr.engine._poll=function(overridePath){
if(!dwr.engine._activeReverseAjax)return;
var batch=dwr.engine._createBatch();
batch.map.id=0;
batch.map.callCount=1;
batch.isPoll=true;
if(navigator.userAgent.indexOf("Gecko/")!=-1){
batch.rpcType=dwr.engine._pollType;
batch.map.partialResponse=dwr.engine._partialResponseYes;
}
else if(document.all){
batch.rpcType=dwr.engine.IFrame;
batch.map.partialResponse=dwr.engine._partialResponseFlush;
}
else{
batch.rpcType=dwr.engine._pollType;
batch.map.partialResponse=dwr.engine._partialResponseNo;
}
batch.httpMethod="POST";
batch.async=true;
batch.timeout=0;
batch.path=(overridePath)?overridePath:dwr.engine._defaultPath;
batch.preHooks=[];
batch.postHooks=[];
batch.errorHandler=dwr.engine._pollErrorHandler;
batch.warningHandler=dwr.engine._pollErrorHandler;
batch.handlers[0]={
callback:function(pause){
dwr.engine._pollRetries=0;
setTimeout("dwr.engine._poll()",pause);
}
};
dwr.engine._sendData(batch);
if(batch.rpcType==dwr.engine.XMLHttpRequest){
dwr.engine._checkCometPoll();
}
};
dwr.engine._pollErrorHandler=function(msg,ex){
dwr.engine._pollRetries++;
dwr.engine._debug("Reverse Ajax poll failed (pollRetries="+dwr.engine._pollRetries+"): "+ex.name+" : "+ex.message);
if(dwr.engine._pollRetries<dwr.engine._maxPollRetries){
setTimeout("dwr.engine._poll()",10000);
}
else{
dwr.engine._debug("Giving up.");
}
};
dwr.engine._createBatch=function(){
var batch={
map:{
callCount:0,
scriptSessionId:dwr.engine._getScriptSessionId()
},
charsProcessed:0,paramCount:0,
headers:[],parameters:[],
isPoll:false,headers:{},handlers:{},preHooks:[],postHooks:[],
rpcType:dwr.engine._rpcType,
httpMethod:dwr.engine._httpMethod,
async:dwr.engine._async,
timeout:dwr.engine._timeout,
errorHandler:dwr.engine._errorHandler,
warningHandler:dwr.engine._warningHandler,
textHtmlHandler:dwr.engine._textHtmlHandler
};
if(dwr.engine._preHook)batch.preHooks.push(dwr.engine._preHook);
if(dwr.engine._postHook)batch.postHooks.push(dwr.engine._postHook);
var propname,data;
if(dwr.engine._headers){
for(propname in dwr.engine._headers){
data=dwr.engine._headers[propname];
if(typeof data!="function")batch.headers[propname]=data;
}
}
if(dwr.engine._parameters){
for(propname in dwr.engine._parameters){
data=dwr.engine._parameters[propname];
if(typeof data!="function")batch.parameters[propname]=data;
}
}
return batch;
}
dwr.engine._mergeBatch=function(batch,overrides){
var propname,data;
for(var i=0;i<dwr.engine._propnames.length;i++){
propname=dwr.engine._propnames[i];
if(overrides[propname]!=null)batch[propname]=overrides[propname];
}
if(overrides.preHook!=null)batch.preHooks.unshift(overrides.preHook);
if(overrides.postHook!=null)batch.postHooks.push(overrides.postHook);
if(overrides.headers){
for(propname in overrides.headers){
data=overrides.headers[propname];
if(typeof data!="function")batch.headers[propname]=data;
}
}
if(overrides.parameters){
for(propname in overrides.parameters){
data=overrides.parameters[propname];
if(typeof data!="function")batch.map["p-"+propname]=""+data;
}
}
};
dwr.engine._getJSessionId=function(){
var cookies=document.cookie.split(';');
for(var i=0;i<cookies.length;i++){
var cookie=cookies[i];
while(cookie.charAt(0)==' ')cookie=cookie.substring(1,cookie.length);
if(cookie.indexOf(dwr.engine._sessionCookieName+"=")==0){
return cookie.substring(11,cookie.length);
}
}
return"";
}
dwr.engine._checkCometPoll=function(){
for(var i=0;i<dwr.engine._outstandingIFrames.length;i++){
var text="";
var iframe=dwr.engine._outstandingIFrames[i];
try{
text=dwr.engine._getTextFromCometIFrame(iframe);
}
catch(ex){
dwr.engine._handleWarning(iframe.batch,ex);
}
if(text!="")dwr.engine._processCometResponse(text,iframe.batch);
}
if(dwr.engine._pollReq){
var req=dwr.engine._pollReq;
var text=req.responseText;
dwr.engine._processCometResponse(text,req.batch);
}
if(dwr.engine._outstandingIFrames.length>0||dwr.engine._pollReq){
setTimeout("dwr.engine._checkCometPoll()",dwr.engine._pollCometInterval);
}
};
dwr.engine._getTextFromCometIFrame=function(frameEle){
var body=frameEle.contentWindow.document.body;
if(body==null)return"";
var text=body.innerHTML;
if(text.indexOf("<PRE>")==0||text.indexOf("<pre>")==0){
text=text.substring(5,text.length-7);
}
return text;
};
dwr.engine._processCometResponse=function(response,batch){
if(batch.charsProcessed==response.length)return;
if(response.length==0){
batch.charsProcessed=0;
return;
}
var firstStartTag=response.indexOf("//#DWR-START#",batch.charsProcessed);
if(firstStartTag==-1){
batch.charsProcessed=response.length;
return;
}
var lastEndTag=response.lastIndexOf("//#DWR-END#");
if(lastEndTag==-1){
return;
}
if(response.charCodeAt(lastEndTag+11)==13&&response.charCodeAt(lastEndTag+12)==10){
batch.charsProcessed=lastEndTag+13;
}
else{
batch.charsProcessed=lastEndTag+11;
}
var exec=response.substring(firstStartTag+13,lastEndTag);
dwr.engine._receivedBatch=batch;
dwr.engine._eval(exec);
dwr.engine._receivedBatch=null;
};
dwr.engine._sendData=function(batch){
batch.map.batchId=dwr.engine._nextBatchId++;
dwr.engine._batches[batch.map.batchId]=batch;
dwr.engine._batchesLength++;
batch.completed=false;
for(var i=0;i<batch.preHooks.length;i++){
batch.preHooks[i]();
}
batch.preHooks=null;
if(batch.timeout&&batch.timeout!=0){
batch.interval=setInterval(function(){dwr.engine._abortRequest(batch);},batch.timeout);
}
if(batch.rpcType==dwr.engine.XMLHttpRequest){
if(window.XMLHttpRequest){
batch.req=new XMLHttpRequest();
}
else if(window.ActiveXObject&&!(navigator.userAgent.indexOf("Mac")>=0&&navigator.userAgent.indexOf("MSIE")>=0)){
batch.req=dwr.engine._newActiveXObject(dwr.engine._XMLHTTP);
}
}
var prop,request;
if(batch.req){
if(batch.async){
batch.req.onreadystatechange=function(){dwr.engine._stateChange(batch);};
}
if(batch.isPoll){
dwr.engine._pollReq=batch.req;
batch.req.batch=batch;
}
var indexSafari=navigator.userAgent.indexOf("Safari/");
if(indexSafari>=0){
var version=navigator.userAgent.substring(indexSafari+7);
if(parseInt(version,10)<400){
if(dwr.engine._allowGetForSafariButMakeForgeryEasier=="true")batch.httpMethod="GET";
else dwr.engine._handleWarning(batch,{name:"dwr.engine.oldSafari",message:"Safari GET support disabled. See getahead.org/dwr/server/servlet and allowGetForSafariButMakeForgeryEasier."});
}
}
batch.mode=batch.isPoll?dwr.engine._ModePlainPoll:dwr.engine._ModePlainCall;
request=dwr.engine._constructRequest(batch);
try{
batch.req.open(batch.httpMethod,request.url,batch.async);
try{
for(prop in batch.headers){
var value=batch.headers[prop];
if(typeof value=="string")batch.req.setRequestHeader(prop,value);
}
if(!batch.headers["Content-Type"])batch.req.setRequestHeader("Content-Type","text/plain");
}
catch(ex){
dwr.engine._handleWarning(batch,ex);
}
batch.req.send(request.body);
if(!batch.async)dwr.engine._stateChange(batch);
}
catch(ex){
dwr.engine._handleError(batch,ex);
}
}
else if(batch.rpcType!=dwr.engine.ScriptTag){
var idname=batch.isPoll?"dwr-if-poll-"+batch.map.batchId:"dwr-if-"+batch.map["c0-id"];
batch.div=document.createElement("div");
batch.div.innerHTML="<iframe src='javascript:void(0)' frameborder='0' style='width:0px;height:0px;border:0;' id='"+idname+"' name='"+idname+"'></iframe>";
document.body.appendChild(batch.div);
batch.iframe=document.getElementById(idname);
batch.iframe.batch=batch;
batch.mode=batch.isPoll?dwr.engine._ModeHtmlPoll:dwr.engine._ModeHtmlCall;
if(batch.isPoll)dwr.engine._outstandingIFrames.push(batch.iframe);
request=dwr.engine._constructRequest(batch);
if(batch.httpMethod=="GET"){
batch.iframe.setAttribute("src",request.url);
}
else{
batch.form=document.createElement("form");
batch.form.setAttribute("id","dwr-form");
batch.form.setAttribute("action",request.url);
batch.form.setAttribute("target",idname);
batch.form.target=idname;
batch.form.setAttribute("method",batch.httpMethod);
for(prop in batch.map){
var value=batch.map[prop];
if(typeof value!="function"){
var formInput=document.createElement("input");
formInput.setAttribute("type","hidden");
formInput.setAttribute("name",prop);
formInput.setAttribute("value",value);
batch.form.appendChild(formInput);
}
}
document.body.appendChild(batch.form);
batch.form.submit();
}
}
else{
batch.httpMethod="GET";
batch.mode=batch.isPoll?dwr.engine._ModePlainPoll:dwr.engine._ModePlainCall;
request=dwr.engine._constructRequest(batch);
batch.script=document.createElement("script");
batch.script.id="dwr-st-"+batch.map["c0-id"];
batch.script.src=request.url;
document.body.appendChild(batch.script);
}
};
dwr.engine._ModePlainCall="/call/plaincall/";
dwr.engine._ModeHtmlCall="/call/htmlcall/";
dwr.engine._ModePlainPoll="/call/plainpoll/";
dwr.engine._ModeHtmlPoll="/call/htmlpoll/";
dwr.engine._constructRequest=function(batch){
if(batch.path.charAt(0)=='/')
batch.path=batch.path.substring(1);
var request={url:batch.path+batch.mode,body:null};
if(batch.isPoll==true){
request.url+="ReverseAjax.dwr";
}
else if(batch.map.callCount==1){
request.url+=batch.map["c0-scriptName"]+"."+batch.map["c0-methodName"]+".dwr";
}
else{
request.url+="Multiple."+batch.map.callCount+".dwr";
}
var sessionMatch=location.href.match(/jsessionid=([^?]+)/);
if(sessionMatch!=null){
request.url+=";jsessionid="+sessionMatch[1];
}
var prop;
if(batch.httpMethod=="GET"){
batch.map.callCount=""+batch.map.callCount;
request.url+="?";
for(prop in batch.map){
if(typeof batch.map[prop]!="function"){
request.url+=encodeURIComponent(prop)+"="+encodeURIComponent(batch.map[prop])+"&";
}
}
request.url=request.url.substring(0,request.url.length-1);
}
else{
request.body="";
for(prop in batch.map){
if(typeof batch.map[prop]!="function"){
request.body+=prop+"="+batch.map[prop]+dwr.engine._postSeperator;
}
}
request.body=dwr.engine._contentRewriteHandler(request.body);
}
request.url=dwr.engine._urlRewriteHandler(request.url);
return request;
};
dwr.engine._stateChange=function(batch){
var toEval;
if(batch.completed){
dwr.engine._debug("Error: _stateChange() with batch.completed");
return;
}
var req=batch.req;
try{
if(req.readyState!=4)return;
}
catch(ex){
dwr.engine._handleWarning(batch,ex);
dwr.engine._clearUp(batch);
return;
}
try{
var reply=req.responseText;
reply=dwr.engine._replyRewriteHandler(reply);
var status=req.status;
if(reply==null||reply==""){
dwr.engine._handleWarning(batch,{name:"dwr.engine.missingData",message:"No data received from server"});
}
else if(status!=200){
dwr.engine._handleError(batch,{name:"dwr.engine.http."+status,message:req.statusText});
}
else{
var contentType=req.getResponseHeader("Content-Type");
if(!contentType.match(/^text\/plain/)&&!contentType.match(/^text\/javascript/)){
if(contentType.match(/^text\/html/)&&typeof batch.textHtmlHandler=="function"){
batch.textHtmlHandler();
}
else{
dwr.engine._handleWarning(batch,{name:"dwr.engine.invalidMimeType",message:"Invalid content type: '"+contentType+"'"});
}
}
else{
if(batch.isPoll&&batch.map.partialResponse==dwr.engine._partialResponseYes){
dwr.engine._processCometResponse(reply,batch);
}
else{
if(reply.search("//#DWR")==-1){
dwr.engine._handleWarning(batch,{name:"dwr.engine.invalidReply",message:"Invalid reply from server"});
}
else{
toEval=reply;
}
}
}
}
}
catch(ex){
dwr.engine._handleWarning(batch,ex);
}
dwr.engine._callPostHooks(batch);
dwr.engine._receivedBatch=batch;
if(toEval!=null)toEval=toEval.replace(dwr.engine._scriptTagProtection,"");
dwr.engine._eval(toEval);
dwr.engine._receivedBatch=null;
dwr.engine._clearUp(batch);
};
dwr.engine._remoteHandleCallback=function(batchId,callId,reply){
var batch=dwr.engine._batches[batchId];
if(batch==null){
dwr.engine._debug("Warning: batch == null in remoteHandleCallback for batchId="+batchId,true);
return;
}
dwr.engine._callPostHooks(batch);
try{
var handlers=batch.handlers[callId];
if(!handlers){
dwr.engine._debug("Warning: Missing handlers. callId="+callId,true);
}
else if(typeof handlers.callback=="function")handlers.callback(reply);
}
catch(ex){
dwr.engine._handleError(batch,ex);
}
};
dwr.engine._remoteHandleException=function(batchId,callId,ex){
var batch=dwr.engine._batches[batchId];
if(batch==null){dwr.engine._debug("Warning: null batch in remoteHandleException",true);return;}
dwr.engine._callPostHooks(batch);
var handlers=batch.handlers[callId];
if(handlers==null){dwr.engine._debug("Warning: null handlers in remoteHandleException",true);return;}
if(ex.message==undefined)ex.message="";
if(typeof handlers.exceptionHandler=="function")handlers.exceptionHandler(ex.message,ex);
else if(typeof batch.errorHandler=="function")batch.errorHandler(ex.message,ex);
};
dwr.engine._remoteHandleBatchException=function(ex,batchId){
var searchBatch=(dwr.engine._receivedBatch==null&&batchId!=null);
if(searchBatch){
dwr.engine._receivedBatch=dwr.engine._batches[batchId];
}
if(ex.message==undefined)ex.message="";
dwr.engine._handleError(dwr.engine._receivedBatch,ex);
if(searchBatch){
dwr.engine._receivedBatch=null;
dwr.engine._clearUp(dwr.engine._batches[batchId]);
}
};
dwr.engine._remotePollCometDisabled=function(ex,batchId){
dwr.engine.setActiveReverseAjax(false);
var searchBatch=(dwr.engine._receivedBatch==null&&batchId!=null);
if(searchBatch){
dwr.engine._receivedBatch=dwr.engine._batches[batchId];
}
if(ex.message==undefined)ex.message="";
dwr.engine._handleError(dwr.engine._receivedBatch,ex);
if(searchBatch){
dwr.engine._receivedBatch=null;
dwr.engine._clearUp(dwr.engine._batches[batchId]);
}
};
dwr.engine._remoteBeginIFrameResponse=function(iframe,batchId){
if(iframe!=null)dwr.engine._receivedBatch=iframe.batch;
dwr.engine._callPostHooks(dwr.engine._receivedBatch);
};
dwr.engine._remoteEndIFrameResponse=function(batchId){
dwr.engine._clearUp(dwr.engine._receivedBatch);
dwr.engine._receivedBatch=null;
};
dwr.engine._eval=function(script){
if(script==null)return null;
if(script==""){dwr.engine._debug("Warning: blank script",true);return null;}
return eval(script);
};
dwr.engine._abortRequest=function(batch){
if(batch&&!batch.completed){
clearInterval(batch.interval);
dwr.engine._clearUp(batch);
if(batch.req)batch.req.abort();
dwr.engine._handleError(batch,{name:"dwr.engine.timeout",message:"Timeout"});
}
};
dwr.engine._callPostHooks=function(batch){
if(batch.postHooks){
for(var i=0;i<batch.postHooks.length;i++){
batch.postHooks[i]();
}
batch.postHooks=null;
}
}
dwr.engine._clearUp=function(batch){
if(!batch){dwr.engine._debug("Warning: null batch in dwr.engine._clearUp()",true);return;}
if(batch.completed=="true"){dwr.engine._debug("Warning: Double complete",true);return;}
if(batch.div)batch.div.parentNode.removeChild(batch.div);
if(batch.iframe){
for(var i=0;i<dwr.engine._outstandingIFrames.length;i++){
if(dwr.engine._outstandingIFrames[i]==batch.iframe){
dwr.engine._outstandingIFrames.splice(i,1);
}
}
batch.iframe.parentNode.removeChild(batch.iframe);
}
if(batch.form)batch.form.parentNode.removeChild(batch.form);
if(batch.req){
if(batch.req==dwr.engine._pollReq)dwr.engine._pollReq=null;
delete batch.req;
}
if(batch.map&&batch.map.batchId){
delete dwr.engine._batches[batch.map.batchId];
dwr.engine._batchesLength--;
}
batch.completed=true;
if(dwr.engine._batchQueue.length!=0){
var sendbatch=dwr.engine._batchQueue.shift();
dwr.engine._sendData(sendbatch);
}
};
dwr.engine._handleError=function(batch,ex){
if(typeof ex=="string")ex={name:"unknown",message:ex};
if(ex.message==null)ex.message="";
if(ex.name==null)ex.name="unknown";
if(batch&&typeof batch.errorHandler=="function")batch.errorHandler(ex.message,ex);
else if(dwr.engine._errorHandler)dwr.engine._errorHandler(ex.message,ex);
dwr.engine._clearUp(batch);
};
dwr.engine._handleWarning=function(batch,ex){
if(typeof ex=="string")ex={name:"unknown",message:ex};
if(ex.message==null)ex.message="";
if(ex.name==null)ex.name="unknown";
if(batch&&typeof batch.warningHandler=="function")batch.warningHandler(ex.message,ex);
else if(dwr.engine._warningHandler)dwr.engine._warningHandler(ex.message,ex);
dwr.engine._clearUp(batch);
};
dwr.engine._serializeAll=function(batch,referto,data,name){
if(data==null){
batch.map[name]="null:null";
return;
}
switch(typeof data){
case"boolean":
batch.map[name]="boolean:"+data;
break;
case"number":
batch.map[name]="number:"+data;
break;
case"string":
batch.map[name]="string:"+encodeURIComponent(data);
break;
case"object":
if(data instanceof String)batch.map[name]="String:"+encodeURIComponent(data);
else if(data instanceof Boolean)batch.map[name]="Boolean:"+data;
else if(data instanceof Number)batch.map[name]="Number:"+data;
else if(data instanceof Date)batch.map[name]="Date:"+data.getTime();
else if(data&&data.join)batch.map[name]=dwr.engine._serializeArray(batch,referto,data,name);
else batch.map[name]=dwr.engine._serializeObject(batch,referto,data,name);
break;
case"function":
break;
default:
dwr.engine._handleWarning(null,{name:"dwr.engine.unexpectedType",message:"Unexpected type: "+typeof data+", attempting default converter."});
batch.map[name]="default:"+data;
break;
}
};
dwr.engine._lookup=function(referto,data,name){
var lookup;
for(var i=0;i<referto.length;i++){
if(referto[i].data==data){
lookup=referto[i];
break;
}
}
if(lookup)return"reference:"+lookup.name;
referto.push({data:data,name:name});
return null;
};
dwr.engine._serializeObject=function(batch,referto,data,name){
var ref=dwr.engine._lookup(referto,data,name);
if(ref)return ref;
if(data.nodeName&&data.nodeType){
return dwr.engine._serializeXml(batch,referto,data,name);
}
var reply="Object_"+dwr.engine._getObjectClassName(data)+":{";
var element;
for(element in data){
if(typeof data[element]!="function"){
batch.paramCount++;
var childName="c"+dwr.engine._batch.map.callCount+"-e"+batch.paramCount;
dwr.engine._serializeAll(batch,referto,data[element],childName);
reply+=encodeURIComponent(element)+":reference:"+childName+", ";
}
}
if(reply.substring(reply.length-2)==", "){
reply=reply.substring(0,reply.length-2);
}
reply+="}";
return reply;
};
dwr.engine._errorClasses={"Error":Error,"EvalError":EvalError,"RangeError":RangeError,"ReferenceError":ReferenceError,"SyntaxError":SyntaxError,"TypeError":TypeError,"URIError":URIError};
dwr.engine._getObjectClassName=function(obj){
if(obj&&obj.constructor&&obj.constructor.toString)
{
var str=obj.constructor.toString();
var regexpmatch=str.match(/function\s+(\w+)/);
if(regexpmatch&&regexpmatch.length==2){
return regexpmatch[1];
}
}
if(obj&&obj.constructor){
for(var errorname in dwr.engine._errorClasses){
if(obj.constructor==dwr.engine._errorClasses[errorname])return errorname;
}
}
if(obj){
var str=Object.prototype.toString.call(obj);
var regexpmatch=str.match(/\[object\s+(\w+)/);
if(regexpmatch&&regexpmatch.length==2){
return regexpmatch[1];
}
}
return"Object";
};
dwr.engine._serializeXml=function(batch,referto,data,name){
var ref=dwr.engine._lookup(referto,data,name);
if(ref)return ref;
var output;
if(window.XMLSerializer)output=new XMLSerializer().serializeToString(data);
else if(data.toXml)output=data.toXml;
else output=data.innerHTML;
return"XML:"+encodeURIComponent(output);
};
dwr.engine._serializeArray=function(batch,referto,data,name){
var ref=dwr.engine._lookup(referto,data,name);
if(ref)return ref;
var reply="Array:[";
for(var i=0;i<data.length;i++){
if(i!=0)reply+=",";
batch.paramCount++;
var childName="c"+dwr.engine._batch.map.callCount+"-e"+batch.paramCount;
dwr.engine._serializeAll(batch,referto,data[i],childName);
reply+="reference:";
reply+=childName;
}
reply+="]";
return reply;
};
dwr.engine._unserializeDocument=function(xml){
var dom;
if(window.DOMParser){
var parser=new DOMParser();
dom=parser.parseFromString(xml,"text/xml");
if(!dom.documentElement||dom.documentElement.tagName=="parsererror"){
var message=dom.documentElement.firstChild.data;
message+="\n"+dom.documentElement.firstChild.nextSibling.firstChild.data;
throw message;
}
return dom;
}
else if(window.ActiveXObject){
dom=dwr.engine._newActiveXObject(dwr.engine._DOMDocument);
dom.loadXML(xml);
return dom;
}
else{
var div=document.createElement("div");
div.innerHTML=xml;
return div;
}
};
dwr.engine._newActiveXObject=function(axarray){
var returnValue;
for(var i=0;i<axarray.length;i++){
try{
returnValue=new ActiveXObject(axarray[i]);
break;
}
catch(ex){}
}
return returnValue;
};
dwr.engine._debug=function(message,stacktrace){
var written=false;
try{
if(window.console){
if(stacktrace&&window.console.trace)window.console.trace();
window.console.log(message);
written=true;
}
else if(window.opera&&window.opera.postError){
window.opera.postError(message);
written=true;
}
}
catch(ex){}
if(!written){
var debug=document.getElementById("dwr-debug");
if(debug){
var contents=message+"<br/>"+debug.innerHTML;
if(contents.length>2048)contents=contents.substring(0,2048);
debug.innerHTML=contents;
}
}
};
dwr.engine.unserializeDocument=function(xml){
return dwr.engine._unserializeDocument(xml);
};
var TrimPath;
(function(){
if(TrimPath==null)
TrimPath=new Object();
if(TrimPath.evalEx==null)
TrimPath.evalEx=function(src){return eval(src);};
var UNDEFINED;
if(Array.prototype.pop==null)
Array.prototype.pop=function(){
if(this.length===0){return UNDEFINED;}
return this[--this.length];
};
if(Array.prototype.push==null)
Array.prototype.push=function(){
for(var i=0;i<arguments.length;++i){this[this.length]=arguments[i];}
return this.length;
};
TrimPath.parseTemplate=function(tmplContent,optTmplName,optEtc){
if(optEtc==null)
optEtc=TrimPath.parseTemplate_etc;
var funcSrc=parse(tmplContent,optTmplName,optEtc);
var func=TrimPath.evalEx(funcSrc,optTmplName,1);
if(func!=null)
return new optEtc.Template(optTmplName,tmplContent,funcSrc,func,optEtc);
return null;
}
try{
String.prototype.process=function(context,optFlags){
var template=TrimPath.parseTemplate(this,null);
if(template!=null)
return template.process(context,optFlags);
return this;
}
}catch(e){
}
TrimPath.parseTemplate_etc={};
TrimPath.parseTemplate_etc.statementTag="forelse|for|if|elseif|else|var|macro";
TrimPath.parseTemplate_etc.statementDef={
"if":{delta:1,prefix:"if (",suffix:") {",paramMin:1},
"else":{delta:0,prefix:"} else {"},
"elseif":{delta:0,prefix:"} else if (",suffix:") {",paramDefault:"true"},
"/if":{delta:-1,prefix:"}"},
"for":{delta:1,paramMin:3,
prefixFunc:function(stmtParts,state,tmplName,etc){
if(stmtParts[2]!="in")
throw new etc.ParseError(tmplName,state.line,"bad for loop statement: "+stmtParts.join(' '));
var iterVar=stmtParts[1];
var listVar="__LIST__"+iterVar;
return["var ",listVar," = ",stmtParts[3],";",
"var __LENGTH_STACK__;",
"if (typeof(__LENGTH_STACK__) == 'undefined' || !__LENGTH_STACK__.length) __LENGTH_STACK__ = new Array();",
"__LENGTH_STACK__[__LENGTH_STACK__.length] = 0;",
"if ((",listVar,") != null) { ",
"var ",iterVar,"_ct = 0;",
"for (var ",iterVar,"_index in ",listVar,") { ",
iterVar,"_ct++;",
"if (typeof(",listVar,"[",iterVar,"_index]) == 'function') {continue;}",
"__LENGTH_STACK__[__LENGTH_STACK__.length - 1]++;",
"var ",iterVar," = ",listVar,"[",iterVar,"_index];"].join("");
}},
"forelse":{delta:0,prefix:"} } if (__LENGTH_STACK__[__LENGTH_STACK__.length - 1] == 0) { if (",suffix:") {",paramDefault:"true"},
"/for":{delta:-1,prefix:"} }; delete __LENGTH_STACK__[__LENGTH_STACK__.length - 1];"},
"var":{delta:0,prefix:"var ",suffix:";"},
"macro":{delta:1,
prefixFunc:function(stmtParts,state,tmplName,etc){
var macroName=stmtParts[1].split('(')[0];
return["var ",macroName," = function",
stmtParts.slice(1).join(' ').substring(macroName.length),
"{ var _OUT_arr = []; var _OUT = { write: function(m) { if (m) _OUT_arr.push(m); } }; "].join('');
}},
"/macro":{delta:-1,prefix:" return _OUT_arr.join(''); };"}
}
TrimPath.parseTemplate_etc.modifierDef={
"eat":function(v){return"";},
"escape":function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");},
"capitalize":function(s){return String(s).toUpperCase();},
"default":function(s,d){return s!=null?s:d;}
}
TrimPath.parseTemplate_etc.modifierDef.h=TrimPath.parseTemplate_etc.modifierDef.escape;
TrimPath.parseTemplate_etc.Template=function(tmplName,tmplContent,funcSrc,func,etc){
this.process=function(context,flags){
if(context==null)
context={};
if(context._MODIFIERS==null)
context._MODIFIERS={};
if(context.defined==null)
context.defined=function(str){return(context[str]!=undefined);};
for(var k in etc.modifierDef){
if(context._MODIFIERS[k]==null)
context._MODIFIERS[k]=etc.modifierDef[k];
}
if(flags==null)
flags={};
var resultArr=[];
var resultOut={write:function(m){resultArr.push(m);}};
try{
func(resultOut,context,flags);
}catch(e){
if(flags.throwExceptions==true)
throw e;
var result=new String(resultArr.join("")+"[ERROR: "+e.toString()+(e.message?'; '+e.message:'')+"]");
result["exception"]=e;
return result;
}
return resultArr.join("");
}
this.name=tmplName;
this.source=tmplContent;
this.sourceFunc=funcSrc;
this.toString=function(){return"TrimPath.Template ["+tmplName+"]";}
}
TrimPath.parseTemplate_etc.ParseError=function(name,line,message){
this.name=name;
this.line=line;
this.message=message;
}
TrimPath.parseTemplate_etc.ParseError.prototype.toString=function(){
return("TrimPath template ParseError in "+this.name+": line "+this.line+", "+this.message);
}
var parse=function(body,tmplName,etc){
body=cleanWhiteSpace(body);
var funcText=["var TrimPath_Template_TEMP = function(_OUT, _CONTEXT, _FLAGS) { with (_CONTEXT) {"];
var state={stack:[],line:1};
var endStmtPrev=-1;
while(endStmtPrev+1<body.length){
var begStmt=endStmtPrev;
begStmt=body.indexOf("{",begStmt+1);
while(begStmt>=0){
var endStmt=body.indexOf('}',begStmt+1);
var stmt=body.substring(begStmt,endStmt);
var blockrx=stmt.match(/^\{(cdata|minify|eval)/);
if(blockrx){
var blockType=blockrx[1];
var blockMarkerBeg=begStmt+blockType.length+1;
var blockMarkerEnd=body.indexOf('}',blockMarkerBeg);
if(blockMarkerEnd>=0){
var blockMarker;
if(blockMarkerEnd-blockMarkerBeg<=0){
blockMarker="{/"+blockType+"}";
}else{
blockMarker=body.substring(blockMarkerBeg+1,blockMarkerEnd);
}
var blockEnd=body.indexOf(blockMarker,blockMarkerEnd+1);
if(blockEnd>=0){
emitSectionText(body.substring(endStmtPrev+1,begStmt),funcText);
var blockText=body.substring(blockMarkerEnd+1,blockEnd);
if(blockType=='cdata'){
emitText(blockText,funcText);
}else if(blockType=='minify'){
emitText(scrubWhiteSpace(blockText),funcText);
}else if(blockType=='eval'){
if(blockText!=null&&blockText.length>0)
funcText.push('_OUT.write( (function() { '+blockText+' })() );');
}
begStmt=endStmtPrev=blockEnd+blockMarker.length-1;
}
}
}else if(body.charAt(begStmt-1)!='$'&&
body.charAt(begStmt-1)!='\\'){
var offset=(body.charAt(begStmt+1)=='/'?2:1);
if(body.substring(begStmt+offset,begStmt+10+offset).search(TrimPath.parseTemplate_etc.statementTag)==0)
break;
}
begStmt=body.indexOf("{",begStmt+1);
}
if(begStmt<0)
break;
var endStmt=body.indexOf("}",begStmt+1);
if(endStmt<0)
break;
emitSectionText(body.substring(endStmtPrev+1,begStmt),funcText);
emitStatement(body.substring(begStmt,endStmt+1),state,funcText,tmplName,etc);
endStmtPrev=endStmt;
}
emitSectionText(body.substring(endStmtPrev+1),funcText);
if(state.stack.length!=0)
throw new etc.ParseError(tmplName,state.line,"unclosed, unmatched statement(s): "+state.stack.join(","));
funcText.push("}}; TrimPath_Template_TEMP");
return funcText.join("");
}
var emitStatement=function(stmtStr,state,funcText,tmplName,etc){
var parts=stmtStr.slice(1,-1).split(' ');
var stmt=etc.statementDef[parts[0]];
if(stmt==null){
emitSectionText(stmtStr,funcText);
return;
}
if(stmt.delta<0){
if(state.stack.length<=0)
throw new etc.ParseError(tmplName,state.line,"close tag does not match any previous statement: "+stmtStr);
state.stack.pop();
}
if(stmt.delta>0)
state.stack.push(stmtStr);
if(stmt.paramMin!=null&&
stmt.paramMin>=parts.length)
throw new etc.ParseError(tmplName,state.line,"statement needs more parameters: "+stmtStr);
if(stmt.prefixFunc!=null)
funcText.push(stmt.prefixFunc(parts,state,tmplName,etc));
else
funcText.push(stmt.prefix);
if(stmt.suffix!=null){
if(parts.length<=1){
if(stmt.paramDefault!=null)
funcText.push(stmt.paramDefault);
}else{
for(var i=1;i<parts.length;i++){
if(i>1)
funcText.push(' ');
funcText.push(parts[i]);
}
}
funcText.push(stmt.suffix);
}
}
var emitSectionText=function(text,funcText){
if(text.length<=0)
return;
var nlPrefix=0;
var nlSuffix=text.length-1;
while(nlPrefix<text.length&&(text.charAt(nlPrefix)=='\n'))
nlPrefix++;
while(nlSuffix>=0&&(text.charAt(nlSuffix)==' '||text.charAt(nlSuffix)=='\t'))
nlSuffix--;
if(nlSuffix<nlPrefix)
nlSuffix=nlPrefix;
if(nlPrefix>0){
funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
var s=text.substring(0,nlPrefix).replace('\n','\\n');
if(s.charAt(s.length-1)=='\n')
s=s.substring(0,s.length-1);
funcText.push(s);
funcText.push('");');
}
var lines=text.substring(nlPrefix,nlSuffix+1).split('\n');
for(var i=0;i<lines.length;i++){
emitSectionTextLine(lines[i],funcText);
if(i<lines.length-1)
funcText.push('_OUT.write("\\n");\n');
}
if(nlSuffix+1<text.length){
funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
var s=text.substring(nlSuffix+1).replace('\n','\\n');
if(s.charAt(s.length-1)=='\n')
s=s.substring(0,s.length-1);
funcText.push(s);
funcText.push('");');
}
}
var emitSectionTextLine=function(line,funcText){
var endMarkPrev='}';
var endExprPrev=-1;
while(endExprPrev+endMarkPrev.length<line.length){
var begMark="${",endMark="}";
var begExpr=line.indexOf(begMark,endExprPrev+endMarkPrev.length);
if(begExpr<0)
break;
if(line.charAt(begExpr+2)=='%'){
begMark="${%";
endMark="%}";
}
var endExpr=line.indexOf(endMark,begExpr+begMark.length);
if(endExpr<0)
break;
emitText(line.substring(endExprPrev+endMarkPrev.length,begExpr),funcText);
var exprArr=line.substring(begExpr+begMark.length,endExpr).replace(/\|\|/g,"#@@#").split('|');
for(var k in exprArr){
if(exprArr[k].replace)
exprArr[k]=exprArr[k].replace(/#@@#/g,'||');
}
funcText.push('_OUT.write(');
emitExpression(exprArr,exprArr.length-1,funcText);
funcText.push(');');
endExprPrev=endExpr;
endMarkPrev=endMark;
}
emitText(line.substring(endExprPrev+endMarkPrev.length),funcText);
}
var emitText=function(text,funcText){
if(text==null||
text.length<=0)
return;
text=text.replace(/\\/g,'\\\\');
text=text.replace(/\n/g,'\\n');
text=text.replace(/"/g,'\\"');
funcText.push('_OUT.write("');
funcText.push(text);
funcText.push('");');
}
var emitExpression=function(exprArr,index,funcText){
var expr=exprArr[index];
if(index<=0){
funcText.push(expr);
return;
}
var parts=expr.split(':');
funcText.push('_MODIFIERS["');
funcText.push(parts[0]);
funcText.push('"](');
emitExpression(exprArr,index-1,funcText);
if(parts.length>1){
funcText.push(',');
funcText.push(parts[1]);
}
funcText.push(')');
}
var cleanWhiteSpace=function(result){
result=result.replace(/\t/g,"    ");
result=result.replace(/\r\n/g,"\n");
result=result.replace(/\r/g,"\n");
result=result.replace(/^(\s*\S*(\s+\S+)*)\s*$/,'$1');
return result;
}
var scrubWhiteSpace=function(result){
result=result.replace(/^\s+/g,"");
result=result.replace(/\s+$/g,"");
result=result.replace(/\s+/g," ");
result=result.replace(/^(\s*\S*(\s+\S+)*)\s*$/,'$1');
return result;
}
TrimPath.parseDOMTemplate=function(elementId,optDocument,optEtc){
if(optDocument==null)
optDocument=document;
var element=optDocument.getElementById(elementId);
var content=element.value;
if(content==null)
content=element.innerHTML;
content=content.replace(/&lt;/g,"<").replace(/&gt;/g,">");
return TrimPath.parseTemplate(content,elementId,optEtc);
}
TrimPath.processDOMTemplate=function(elementId,context,optFlags,optDocument,optEtc){
return TrimPath.parseDOMTemplate(elementId,optDocument,optEtc).process(context,optFlags);
}
})();
TrimPath.parseTemplate_etc.modifierDef.escape=function(s){
return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
TrimPath.parseTemplate_etc.modifierDef.escapeButAmp=function(s){
return String(s).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
TrimPath.parseTemplate_etc.modifierDef.js_string=function(s){
return String(s).replace(/\\/g,"\\\\").replace(/'/g,"\\&#39;").replace(/"/g,"\\&#34;");
}
TrimPath.parseTemplate_etc.modifierDef.substring=function(s,s1,s2){
return String(s).substr(s1,s2);
}
TrimPath.parseTemplate_etc.modifierDef.replace=function(s,s1,s2){
return String(s).replace(s1,s2)
}
TrimPath.parseTemplate_etc.modifierDef.parentDomain=function(s){
return DomainMap.getParentDomain(s);
}
TrimPath.parseTemplate_etc.modifierDef.to_url=function(s){
if(s==null)
return"#";
var url=/^(.+):\/\/(.*)$/;
if(!url.test(s))
s="http://"+s;
return s;
}
TrimPath.parseTemplate_etc.modifierDef.showBr=function(s){
return String(s).replace(/\n/g,"<br>");
}
TrimPath.parseTemplate_etc.modifierDef.erase=function(s,i){
s=s+'';
if(s.length<=i)
return s;
return s.substr(0,i)+'...';
}
TrimPath.parseTemplate_etc.modifierDef.getIPNames=function(s,ip){
if(s!=null&&s!="")
return s;
if(ip!=null&&ip!=""&&ip!=undefined){
var i=ip.lastIndexOf(".");
return"IP: "+ip.substring(0,i)+".*";
}else{
return"未知区域用户";
}
}
TrimPath.parseTemplate_etc.modifierDef.toTimeLength=function(str){
var t=parseInt(str);
if(t<0)return'00:00';
var s=t%60+'';if(s.length==1)s='0'+s;
var m=Math.floor(t/60)+'';if(m.length==1)m='0'+m;
return m+':'+s;
}
TrimPath.parseTemplate_etc.modifierDef.to_img=function(s,url){
if(s==null||s.indexOf('.jpg')<0)
return url;
return s;
}
TrimPath.parseTemplate_etc.modifierDef.profile_img=function(s){
return TrimPath.parseTemplate_etc.modifierDef.to_img(s,Const.STDomain+"/style/common/user_default_small.gif");
}
TrimPath.parseTemplate_etc.modifierDef.genYearSelect=function(to,from,value){
var s=[];
for(var i=to;i>=from;i--){
if(i==value){
s.push('<option value="'+i+'" SELECTED>'+i+'</option>');
}else{
s.push('<option value="'+i+'">'+i+'</option>');
}
}
return s.join('');
}
String.prototype.processUseCache=function(context,optFlags){
if(this.__template__==null)
this.__template__=TrimPath.parseTemplate(this,null);
if(this.__template__!=null)
return this.__template__.process(context,optFlags);
return this;
}
var valids=new Object();
function validCallBack(file){
valids[file]=true;
}
var jst_global_sign="&#149;";
var jst_global_comment_show=new String('\
    {if coms != null && coms.length != 0}\
    <div id="comShowHeader_${parentId}" class="g_h_20 g_c_mgin">\
   <span class="g_p_right g_c_hand n_ n7" style="margin-left:10px" onclick="${containerObjName}.closeComments(\'${parentId}\');return false;" title="关闭">&nbsp;</span>\
   <ul class="g_menu_09 g_w_at com_page">\
    <li>\
      {if (coms != null) && (comCount > (commentRange * pageNum))}\
        <a id="spnNextPage_${parentId}" class="g_c_noul c06" href="#" onclick="${containerObjName}.moveToPage(${pageNum} + 1, true);return false;">下页</a>\
      {else}<span class="c09">下页</span>{/if}\
    </li>\
    <li><span class="ckck c07">${pageNum}/${totalPageNum}</span></li>\
    <li>\
      {if pageNum > 1}\
        <a id="spnPrevPage_${parentId}" class="g_c_noul c06" href="#" onclick="${containerObjName}.moveToPage(${pageNum} - 1, true);return false;">上页</a>\
      {else}<span class="c09">上页</span>{/if}\
    </li>\
   </ul>\
 </div>\
 <div class="g_p_hide g_c_mgin g_table" id="comShowContent_${parentId}">\
     {for com in coms}\
     <table class="g_w_100 bd1b g_com_table" border="0" cellspacing="0" cellpadding="0">\
       <tr>\
         <td class="layout_l">\
          {if com.publisherName != null && com.publisherName != ""}\
         <a href="http://${com.publisherName|parentDomain}${prefix}/" target="_blank">\
     {if com.publisherAvatar==null || com.publisherAvatar==0 || com.publisherAvatar==-1000}\
      <img class="g_img_04 g_c_hand bd01" id="imgPubPic_${com.id}" src="${formatImageUrl(defaultVisitorAvatarUrl)}" onerror="this.src=\'http://b.bst.126.net/style/common/stranger.gif\'"/>\
     {else}\
      <img class="g_img_04 g_c_hand bd01" id="imgPubPic_${com.id}" src="${formatImageUrl(com.publisherAvatarUrl)}" onerror="this.src=\'http://b.bst.126.net/style/common/stranger.gif\'" />\
     {/if}\
    </a>\
    <div class="g_t_hide nick"><a id="aComPubName_${com.id}" class="g_p_block g_h_20 c05" href="http://${com.publisherName|parentDomain}${prefix}/" title="${com.publisherNickname|escape}" target="_blank">\
     {if com.publisherId == hostId}<span class="n_ m9com" title="博主">&nbsp;</span>{/if}${com.publisherNickname|escape}</a></div>\
     {else}\
        <span class="g_p_block g_h_20 g_t_hide g_w_100 c08 t_12">${com.publisherNickname|escape}</span>\
        <div class="c09 g_w_95 t_12" style="padding-top:8px">${com.ipName}</div>\
     {/if}\
         </td>\
         <td class="layout_r">\
           <table class="g_w_100">\
      <tr>\
        <td class="t"><div class="c g_t_wrap c07" id="comContent${com.id}">${com.content}</div>\</td>\
      </tr>\
      <tr>\
        <td colspan="3" class="b">\
         {if supportDeleteComment == true && visitorId == hostId}\
          <a class="c06 g_p_right g_c_ul" id="delcomm_${com.id}" onclick="${containerObjName}.deleteComment(\'${com.id}\');return false;" href="#">删除</a>\
          <nobr class="bd1c g_p_right md">&nbsp;|&nbsp;</nobr>\
         {/if}\
         {if noCommentRight == false}\
          {if com.publisherName != null && com.publisherName != ""}\
           <a id="comReply_${com.id}" class="c06 g_p_right g_c_ul " onclick="${containerObjName}.reply(\'${com.id}\',true,\'${com.publisherNickname|escape|js_string}\',\'${com.publisherName|parentDomain}${prefix}\',\'${com.publisherId}\');return false;" href="#">回复</a>\
          {else}\
           <a id="comReply_${com.id}" class="c06 g_p_right g_c_ul " onclick="${containerObjName}.reply(\'${com.id}\',false,\'${com.publisherNickname|escape|js_string}\',\'${com.ipName}\', \'\');return false;" href="#">回复</a>\
          {/if}\
         {/if}\
         <span class="g_p_right c09 tim md"> ${NetEase.DateTime.formatRecentDate(com.publishTime,"yyyy-MM-dd HH:mm")}</span>\
         {if !isHomeModule && com.circleId>0}<span class="g_p_left c09">来源: <span class="c06">[</span><a class="c06" href="${circleBaseUrl}/${com.circleUrlName}/" target="_blank">${com.circleName}</a><span class="c06">]</span></span>{/if}\
               </td>\
      </tr>\
    </table>\
         </td>\
       </tr>\
     </table>\
     {/for}\
  </div>\
 <div class="g_h_20 bd1b g_c_mgin">\
   <ul class="g_menu_09 g_w_at com_page">\
    <li>\
      {if (coms != null) && (comCount > (commentRange * pageNum))}\
        <a id="spnNextPage_${parentId}" class="g_c_noul c06" href="#" onclick="${containerObjName}.moveToPage(${pageNum} + 1, true);return false;">下页</a>\
      {else}<span class="c09">下页</span>{/if}\
    </li>\
    <li><span class="ckck c07">${pageNum}/${totalPageNum}</span></li>\
    <li>\
      {if pageNum > 1}\
        <a id="spnPrevPage_${parentId}" class="g_c_noul c06" href="#" onclick="${containerObjName}.moveToPage(${pageNum} - 1, true);return false;">上页</a>\
      {else}<span class="c09">上页</span>{/if}\
    </li>\
   </ul>\
    </div>\
    {else}\
     {if noCommentRight == false}\
     <div id="comShowHeader_${parentId}" class="g_h_20 g_c_mgin">\
   <span class="g_p_right g_c_hand n_ n7" onclick="${containerObjName}.closeComments(\'${parentId}\');return false;" title="关闭" >&nbsp;</span>\
  </div>\
  {/if}\
    {/if}\
');
var jst_global_comment_pub=new String('\
  <div class="g_c_pdin">\
    {if (noCommentRight == true)}\
     <div class="loginsection">\
   {if allowComment == 0}\
    <span class="n_ n21">&nbsp;</span>登录后你可以发表评论，请先登录。&nbsp;&nbsp;&nbsp;</span><a href="#" onclick="showLoginDlg(DomainMap.serverHostName);return false;">登录&gt;&gt;</a>\
   {elseif allowComment == 100}\
    {if visitorRank==-100}\
     <span class="n_ n21">&nbsp;</span>登录并添加博主为博友、通过对方确认后可以发表评论，请先登录。&nbsp;&nbsp;&nbsp;<a href="#" onclick="showLoginDlg(DomainMap.serverHostName);return false;">登录&gt;&gt;</a>\
    {elseif visitorRank ==0}\
     <span class="n_ n21">&nbsp;</span>添加博主为博友、通过对方确认后可以发表评论，请先加为博友。&nbsp;&nbsp;&nbsp;<a id="AComment${parentId}" href="#" onclick="pageTopBar.showAddFriend();return false;">加为博友&gt;&gt;</a>\
    {/if}\
   {elseif allowComment == 10000}\
    <span class="n_ n21">&nbsp;</span>该内容仅供欣赏。\
   {/if}\
     </div>\
   {else}\
    <div>\
      {if visitorRank <= -100}\
       <div class="g_layout_05 g_h_25 g_t_left" style="margin-bottom:7px;">\
       <input type="text" id="username${parentId}" style="width:170px;" class="bd01 g_t_disable nvb g_c_input" name="username${parentId}" value="${userName}" maxlength="18"/>&nbsp;&nbsp;&nbsp;&nbsp;\
       <a class="c06"  href="#" onclick="showLoginDlg(DomainMap.serverHostName);return false;">我要登录&nbsp;-&gt;</a>\
        </div>\
      {else}\
       <div class="g_layout_05">\
       <div class="l g_t_left">\
        {if visitorAvatarDefault == true}\
          <img class="g_img_04 bd01" src="${formatImageUrl(defaultVisitorAvatarUrl)}" onerror="this.src=\'http://b.bst.126.net/style/common/stranger.gif\'" width="60px" height="60px" title="显示头像">\
         {else}\
          <img class="g_img_04 bd01" src="${formatImageUrl(visitorAvatar)}" onerror="this.src=\'http://b.bst.126.net/style/common/stranger.gif\'" width="60px" height="60px" title="显示头像">\
         {/if}\
       </div>\
       <div class="g_t_left"><input class="bd01 g_t_disable vb g_c_input" style="width:170px;" id="username${parentId}" name="username${parentId}" value="${userName}" type="text" maxlength="18"/></div>\
        <div class="g_p_clear g_t_space">&nbsp;</div>\
      </div>\
      {/if}\
     <div class="g_c_smvdn bd01" id="edt${parentId}"></div>\
     <div id="validCode${parentId}" class="g_c_mvdn g_t_left g_h_25" style="display:none;"></div>\
     <div class="g_h_30 g_c_mvdn g_t_left g_w_100">\
      <input class="g_c_button bd01 butn" id="$$_pubbtn${parentId}" onclick="${containerObjName}.addComment(\'${parentId}\'); return false;" type="submit" {if disabled == true}disabled="true" {/if} value="发表评论" {if hasCancelBtn==false}style="font-weight:700;"{/if}/>&nbsp;&nbsp;\
                     {if hasCancelBtn}<input class="g_c_button bd01 butn" id="$$_comcancelbtn${parentId}" onclick="${containerObjName}.closeComments(\'${parentId}\');return false;" type="submit" {if disabled == true}disabled="true" {/if} value="取　消"/>{/if}&nbsp;&nbsp;\
         <span id="$$_comsubmithint${parentId}" style="display:none;"></span>\
     </div>\
    </div>\
   {/if}\
  </div>\
');
function ControlVersion()
{
var version;
var axo;
var e;
try{
axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
version=axo.GetVariable("$version");
}catch(e){
}
if(!version)
{
try{
axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
version="WIN 6,0,21,0";
axo.AllowScriptAccess="always";
version=axo.GetVariable("$version");
}catch(e){
}
}
if(!version)
{
try{
axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
version=axo.GetVariable("$version");
}catch(e){
}
}
if(!version)
{
try{
axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
version="WIN 3,0,18,0";
}catch(e){
}
}
if(!version)
{
try{
axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
version="WIN 2,0,0,11";
}catch(e){
version=-1;
}
}
return version;
}
function GetSwfVer(){
var flashVer=-1;
if(navigator.plugins!=null&&navigator.plugins.length>0){
if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){
var swVer2=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";
var flashDescription=navigator.plugins["Shockwave Flash"+swVer2].description;
var descArray=flashDescription.split(" ");
var tempArrayMajor=descArray[2].split(".");
var versionMajor=tempArrayMajor[0];
var versionMinor=tempArrayMajor[1];
if(descArray[3]!=""){
tempArrayMinor=descArray[3].split("r");
}else{
tempArrayMinor=descArray[4].split("r");
}
var versionRevision=tempArrayMinor[1]>0?tempArrayMinor[1]:0;
var flashVer=versionMajor+"."+versionMinor+"."+versionRevision;
}
}
else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1)flashVer=4;
else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1)flashVer=3;
else if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1)flashVer=2;
else if(isIE&&isWin&&!isOpera){
flashVer=ControlVersion();
}
return flashVer;
}
function DetectFlashVer(reqMajorVer,reqMinorVer,reqRevision)
{
versionStr=GetSwfVer();
if(versionStr==-1){
return false;
}else if(versionStr!=0){
if(isIE&&isWin&&!isOpera){
tempArray=versionStr.split(" ");
tempString=tempArray[1];
versionArray=tempString.split(",");
}else{
versionArray=versionStr.split(".");
}
var versionMajor=versionArray[0];
var versionMinor=versionArray[1];
var versionRevision=versionArray[2];
if(versionMajor>parseFloat(reqMajorVer)){
return true;
}else if(versionMajor==parseFloat(reqMajorVer)){
if(versionMinor>parseFloat(reqMinorVer))
return true;
else if(versionMinor==parseFloat(reqMinorVer)){
if(versionRevision>=parseFloat(reqRevision))
return true;
}
}
return false;
}
}
function AC_AddExtension(src,ext)
{
if(src.indexOf('?')!=-1)
return src.replace(/\?/,ext+'?');
else
return src+ext;
}
function AC_Generateobj(objAttrs,params,embedAttrs)
{
var str='';
if(isIE&&isWin&&!isOpera)
{
str+='<object ';
for(var i in objAttrs)
str+=i+'="'+objAttrs[i]+'" ';
for(var i in params)
str+='><param name="'+i+'" value="'+params[i]+'" /> ';
str+='></object>';
}else{
str+='<embed ';
for(var i in embedAttrs)
str+=i+'="'+embedAttrs[i]+'" ';
str+='> </embed>';
}
document.write(str);
}
function AC_FL_RunContent(){
var ret=
AC_GetArgs
(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
,"application/x-shockwave-flash"
);
AC_Generateobj(ret.objAttrs,ret.params,ret.embedAttrs);
}
function AC_GetArgs(args,ext,srcParamName,classid,mimeType){
var ret=new Object();
ret.embedAttrs=new Object();
ret.params=new Object();
ret.objAttrs=new Object();
for(var i=0;i<args.length;i=i+2){
var currArg=args[i].toLowerCase();
switch(currArg){
case"classid":
break;
case"pluginspage":
ret.embedAttrs[args[i]]=args[i+1];
break;
case"src":
case"movie":
args[i+1]=AC_AddExtension(args[i+1],ext);
ret.embedAttrs["src"]=args[i+1];
ret.params[srcParamName]=args[i+1];
break;
case"onafterupdate":
case"onbeforeupdate":
case"onblur":
case"oncellchange":
case"onclick":
case"ondblClick":
case"ondrag":
case"ondragend":
case"ondragenter":
case"ondragleave":
case"ondragover":
case"ondrop":
case"onfinish":
case"onfocus":
case"onhelp":
case"onmousedown":
case"onmouseup":
case"onmouseover":
case"onmousemove":
case"onmouseout":
case"onkeypress":
case"onkeydown":
case"onkeyup":
case"onload":
case"onlosecapture":
case"onpropertychange":
case"onreadystatechange":
case"onrowsdelete":
case"onrowenter":
case"onrowexit":
case"onrowsinserted":
case"onstart":
case"onscroll":
case"onbeforeeditfocus":
case"onactivate":
case"onbeforedeactivate":
case"ondeactivate":
case"type":
case"codebase":
case"id":
ret.objAttrs[args[i]]=args[i+1];
break;
case"width":
case"height":
case"align":
case"vspace":
case"hspace":
case"class":
case"title":
case"accesskey":
case"name":
case"tabindex":
ret.embedAttrs[args[i]]=ret.objAttrs[args[i]]=args[i+1];
break;
default:
ret.embedAttrs[args[i]]=ret.params[args[i]]=args[i+1];
}
}
ret.objAttrs["classid"]=classid;
if(mimeType)ret.embedAttrs["type"]=mimeType;
return ret;
}
var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;
var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;
var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;
var isFirefox=(navigator.userAgent.indexOf("Firefox")!=-1)?true:false;
var IEVer=getIEVer();
function getIEVer(){
var iVerNo=0;
var sVer=navigator.userAgent;
if(sVer.indexOf("MSIE")>-1){
var sVerNo=sVer.split(";")[1];
sVerNo=sVerNo.replace("MSIE","");
iVerNo=parseFloat(sVerNo);
}
return iVerNo;
}
function getLongDateTime(str){
var d=new Date(str);
var year=d.getFullYear().toString();
var monthInt=d.getMonth()+1;
var month=monthInt.toString();
if(month.length<2){
month="0"+month;
}
var day=d.getDate().toString();
if(day.length<2){
day="0"+day;
}
var hour=d.getHours().toString();
if(hour.length<2){
hour="0"+hour;
}
var minute=d.getMinutes().toString();
if(minute.length<2){
minute="0"+minute;
}
var second=d.getSeconds().toString();
if(second.length<2){
second="0"+second;
}
return year+"年"+month+"月"+day+"日 "+hour+":"+minute+":"+second;
}
function getDateForMysql(str){
var d=new Date(str);
var year=d.getFullYear().toString();
var monthInt=d.getMonth()+1;
var month=monthInt.toString();
if(month.length<2){
month="0"+month;
}
var day=d.getDate().toString();
if(day.length<2){
day="0"+day;
}
var hour=d.getHours().toString();
if(hour.length<2){
hour="0"+hour;
}
var minute=d.getMinutes().toString();
if(minute.length<2){
minute="0"+minute;
}
var second=d.getSeconds().toString();
if(second.length<2){
second="0"+second;
}
return year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
}
function Trim(TRIM_VALUE){
if(TRIM_VALUE.length<1){
return"";
}
TRIM_VALUE=RTrim(TRIM_VALUE);
TRIM_VALUE=LTrim(TRIM_VALUE);
if(TRIM_VALUE==""){
return"";
}
else{
return TRIM_VALUE;
}
}
function RTrim(VALUE,w_spaces){
if(w_spaces==undefined||w_spaces==null){
w_spaces=[];
w_spaces.push(String.fromCharCode(32));
}
var v_length=VALUE.length;
var strTemp="";
if(v_length<0){
return"";
}
var iTemp=v_length-1;
while(iTemp>-1){
var ch=VALUE.charAt(iTemp);
var match=false;
for(var i=0;i<w_spaces.length;i++){
if(ch==w_spaces[i]){
match=true;
break;
}
}
if(!match){
strTemp=VALUE.substring(0,iTemp+1);
break;
}
iTemp=iTemp-1;
}
return strTemp;
}
function LTrim(VALUE,w_spaces){
if(w_spaces==undefined||w_spaces==null){
w_spaces=[];
w_spaces.push(String.fromCharCode(32));
}
if(v_length<1){
return"";
}
var v_length=VALUE.length;
var strTemp="";
var iTemp=0;
while(iTemp<v_length){
var ch=VALUE.charAt(iTemp);
var match=false;
for(var i=0;i<w_spaces.length;i++){
if(ch==w_spaces[i]){
match=true;
break;
}
}
if(!match){
strTemp=VALUE.substring(iTemp,v_length);
break;
}
iTemp=iTemp+1;
}
return strTemp;
}
function TrimSBCandDBC(TRIM_VALUE){
if(TRIM_VALUE.length<1){
return"";
}
TRIM_VALUE=RTrim(TRIM_VALUE,[String.fromCharCode(32),'　']);
TRIM_VALUE=LTrim(TRIM_VALUE,[String.fromCharCode(32),'　']);
if(TRIM_VALUE==""){
return"";
}
else{
return TRIM_VALUE;
}
}
function isEmptyDiv(str){
var trim=Trim(str);
if(trim=="")
return true;
var rep=/^<DIV>(&nbsp;<\/DIV><DIV>)*(&nbsp;)*<\/DIV>$/i;
if(rep.test(trim)){
return true;
}
else
return false;
}
function isEmptyContent(str){
var trim=Trim(str);
if(trim=="")
return true;
trim=trim.replace(/<\/?(div|p|span|br).*?>/ig,"");
trim=trim.replace(/(&nbsp;|\s)*/ig,"");
if(trim=="")
return true;
else
return false;
}
function removeAllChild(el){
var firstChild=el.firstChild;
var curChild=firstChild;
while(curChild!=null){
el.removeChild(curChild);
if(isIE)curChild.outerHTML='';
curChild=curChild.nextSibling;
}
}
function insertAfter(parent,node,referenceNode){
parent.insertBefore(node,referenceNode.nextSibling);
}
function testUrl(str){
var illegalChar=/^(.*)['"‘“<>](.*)$/;
if(illegalChar.test(str))
return false;
else
return true;
}
function checkMail(str){
var mail=/^(.+)@(.+)\.(.+)$/;
if(!mail.test(str))
return false;
if(str.indexOf('@')!=str.lastIndexOf('@'))
return false;
var illegalChar=/^(.*)['"‘“\/\\<>](.*)$/;
if(illegalChar.test(str))
return false;
else
return true;
}
function checkDateFormat(str){
var format=/^\d{4}\-\d{2}\-\d{2}$/;
if(format.test(str))
return true;
else
return false;
}
function checkBirthday(str){
var today=new Date();
var barray=str.split(new RegExp("-","g"));
var birthday=new Date(barray[0],barray[1]-1,barray[2]);
if(parseInt(barray[0])<1900){
return-1;
}
if(birthday.getTime()>today.getTime()){
return 1;
}
else if(birthday.getFullYear()<1900){
return-1;
}
else{
return 0;
}
}
function _ge(id){
return document.getElementById(id);
}
function extractHtmlText(content){
content=content
.replace(/&nbsp;/ig," ")
.replace(/&lt;/ig,"<")
.replace(/&gt;/ig,">")
.replace(/&#039;/ig,"'")
.replace(/&quot;/ig,"\"")
.replace(/&amp;/ig,"&");
return content;
}
function textareaLimit(field,maxlen){
if(field.value.length>maxlen){
field.value=field.value.substring(0,maxlen);
alert("超过最大字数限制"+maxlen+"个! ");
}
}
String.prototype.nlToBr=function(){return this.trim().nl2br();}
String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");};
String.prototype.nl2br=function(){return this.split("\n").join("<br />\n");};
String.prototype.trimSQ=function(){return this.replace("&#39;","\\\'");};
String.prototype.escape=function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&#34;").replace(/'/g,"&#39;");};
String.prototype.js_escape=function(){return this.replace(/\\/g,"\\\\").replace(/'/g,"\\&#39;").replace(/"/g,"\\&#34;");};
String.prototype.escape_freemark=function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");};
String.prototype.unescape_freemark=function(){return this.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,"\"");};
function searchList(el,list){
var i=0;
for(i=0;i<list.length;i++){
if(el==list[i]){
return true;
}
}
return false;
}
function removeSameEl(list){
var newList=new Array();
var i;
var el;
for(i=0;i<list.length;i++){
el=list[i];
if(el!=null){
var data;
if(!searchList(el,newList)){
newList.push(el);
}
}
}
return newList;
}
function insertShiftAt(list,el,position){
if(position<0){
position=0;
}else if(position>list.length){
positon=list.length;
}
var prevList
var nextList;
for(i=list.length;i>position;i--){
list[i]=list[i-1];
}
list[position]=el;
}
var _get_event_src=function(e){
if(e){
return e.target;
}
if(window.event){
return window.event.srcElement;
}
return null;
};
function appendCss(elem,newCss){
$(elem).className+=" "+newCss;
}
function removeLastCss(elem,oldCss){
$(elem).className=$(elem).className.replace(new RegExp(" "+oldCss+"\\b"),"");
}
function attachFocusEvent(focusArray,focusCss){
focusArray.each(function(E){
if($(E)){
$(E).onfocus=function(){
this.className+=" "+focusCss;
}
$(E).onblur=function(){
this.className=this.className.replace(new RegExp(" *"+focusCss+"\\b"),"");
}
}
});
}
function applySelectCss(id){
var _htc_select_reg=/\bselitm\b/g;
if(window.$$_last_select!=null){
window.$$_last_select.className=window.$$_last_select.className.replace(_htc_select_reg,"");
}
if($(id)){
$(id).className+=" selitm";
window.$$_last_select=$(id);
}else{
window.$$_last_select=null;
}
}
function attachFocusEvent2(focusArray,focusCss,focusFunc,blurFunc){
focusArray.each(function(E){
if($(E)){
$(E).onfocus=function(){
this.className+=" "+focusCss;
if(focusFunc!=null){
focusFunc($(E));
}
}
$(E).onblur=function(){
this.className=this.className.replace(new RegExp(" "+focusCss+"\\b"),"");
if(blurFunc!=null){
blurFunc($(E));
}
}
}
});
}
function disable(elem){
$(elem).disabled=true;
}
function enable(elem){
$(elem).disabled=false;
}
function copyText(elemId){
ie=(document.all)?true:false
if(ie){
var rng=document.body.createTextRange();
rng.moveToElementText($(elemId));
rng.scrollIntoView();
rng.select();
rng.execCommand("Copy");
rng.collapse(false);
return true;
}else{
alert("你的浏览器安全设置不允许自动执行复制操作，请选中文本使用键盘(Ctrl+C)复制！");
return false;
}
}
function detectFlash(){
var reqMajorVer=7;
var reqMinorVer=0;
var reqRevision=0;
reqVer=parseFloat(reqMajorVer+"."+reqRevision);
if(isIE&&isWin&&!isOpera){
versionStr=VBGetSwfVer();
}else{
versionStr=JSGetSwfVer();
}
if(versionStr==-1){
return false;
}else if(versionStr!=0){
if(isIE&&isWin&&!isOpera){
tempArray=versionStr.split(" ");
tempString=tempArray[1];
versionArray=tempString.split(",");
}else{
versionArray=versionStr.split(".");
}
versionMajor=versionArray[0];
versionMinor=versionArray[1];
versionRevision=versionArray[2];
if(versionRevision<=0&&versionArray.length>3)
versionRevision=versionArray[3];
versionString=versionMajor+"."+versionRevision;
versionNum=parseFloat(versionString);
if((versionMajor>reqMajorVer)&&(versionNum>=reqVer)){
return true;
}else{
return((versionNum>=reqVer&&versionMinor>=reqMinorVer)?true:false);
}
}
}
function JSGetSwfVer(){
if(navigator.plugins!=null&&navigator.plugins.length>0){
if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){
var swVer2=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";
var flashDescription=navigator.plugins["Shockwave Flash"+swVer2].description;
descArray=flashDescription.split(" ");
tempArrayMajor=descArray[2].split(".");
versionMajor=tempArrayMajor[0];
versionMinor=tempArrayMajor[1];
if(descArray[3]!=""){
tempArrayMinor=descArray[3].split(/\D/);
}else{
tempArrayMinor=descArray[4].split(/\D/);
}
versionRevision=tempArrayMinor[1]>0?tempArrayMinor[1]:0;
flashVer=versionMajor+"."+versionMinor+"."+versionRevision;
}else{
flashVer=-1;
}
}
else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1)flashVer=4;
else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1)flashVer=3;
else if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1)flashVer=2;
else{
flashVer=-1;
}
return flashVer;
}
function getBrowserPositionX(obj){
var res=obj.offsetWidth+5;
while(obj!=null){
res+=obj.offsetLeft;
obj=obj.offsetParent;
}
return res;
}
function getBrowserPositionY(obj){
var res=0;
while(obj!=null){
res+=obj.offsetTop;
obj=obj.offsetParent;
}
return res;
}
function processTagString(tags){
tags=tags.replace(/，/gi,",").replace(/“/g,"\"").replace(/”/g,"\"");
tags=tags.toLowerCase();
var tagList=tags.split(",");
for(var i=0;i<tagList.length;i++){
tagList[i]=Trim(tagList[i]);
}
tagList=removeSameEl(tagList);
tags="";
for(var i=0;i<tagList.length;i++){
if(tagList[i]!=""){
if(tags!="")
tags+=",";
tags+=tagList[i].substring(0,36);
}
}
return tags;
}
function getTagObjByTagname(tagName,tagId,tagList){
for(var i=0;tagId&&i<tagList.length;i++){
if(tagList[i].id==tagId){
return tagList[i];
}
}
for(var i=0;tagName&&i<tagList.length;i++){
if(tagList[i].tagName==tagName||tagList[i].tagName==tagName.toLowerCase()
||tagList[i].tagName==tagName.escape()||tagList[i].tagName==tagName.escape_freemark()){
return tagList[i];
}
}
return null;
}
function formatnumber(value,num)
{
var a,b,c,i
a=value.toString();
b=a.indexOf('.');
c=a.length;
if(num==0){
if(b!=-1)a=a.substring(0,b);
}else{
if(b==-1){
a=a+".";
for(i=1;i<=num;i++)a=a+"0";
}else{
a=a.substring(0,b+num+1);
for(i=c;i<=b+num;i++)a=a+"0";
}
}
return a;
}
function createJST(jstId,jstContent){
var textarea=document.createElement('textarea');
textarea.value=jstContent;
textarea.id=jstId;
textarea.style.display='none';
document.body.appendChild(textarea);
}
function createJSTAndParse(jstId,jstContent){
createJST(jstId,jstContent);
return TrimPath.parseDOMTemplate(jstId);
}
function getInputCharsFromDisplayHTML(sHTML){
var chars=sHTML;
chars=chars.replace(/<br>/ig,(Browser.isFirefox()?"\n":"\r\n"));
chars=chars.replace(/&lt;/g,"<");
chars=chars.replace(/&gt;/g,">");
chars=chars.replace(/&quot;/g,"\"");
chars=chars.replace(/&#039;/g,"'");
chars=chars.replace(/&amp;/g,"&");
chars=chars.replace(/&nbsp;/g," ");
return chars;
}
function toHtmlStr(sChars){
var html=sChars;
html=html.replace(/&/g,"&amp;");
html=html.replace(/</g,"&lt;");
html=html.replace(/>/g,"&gt;");
html=html.replace(/"/g,"&quot;");
html=html.replace(/'/g,"&#039;");
html=html.replace(/ /g,"&nbsp;");
html=html.replace(/\n/g,"<br>");
return html;
}
function formatImageUrl(url){
if(url!=null&&url!="-1000")
return url;
return Const.STDomain+"/style/common/user_default.gif";
}
function filterWarning(keywordRuntimeEx,needTip,tips){
if(keywordRuntimeEx==undefined||keywordRuntimeEx==null||
keywordRuntimeEx.type!="KeyWordRuntimeException"){
return 0;
}
if(needTip==undefined||needTip==false){
if(tips==undefined||tips==null)
alert("你发表的内容包含敏感关键字，不允许发布！");
else
alert(tips);
return-1;
}
return-1;
}
function captchaWarning(captchaEx,hintid){
if(captchaEx==undefined||captchaEx==null||
captchaEx.type!="CaptchaException"){
return false;
}
showInfo(hintid,"验证码不正确","error");
return true;
}
function checkOtherSiteUrl(content){
var match=false;
var index=0;
while((index=content.indexOf("http://"))!=-1){
var url=content.substring(index+7);
var endIndex=url.indexOf("163.com");
if(endIndex>-1){
var j=index;
while(j<endIndex){
var ch=url.charAt(j);
if(!((ch>='0'&&ch<='9')||(ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z')||ch=='.')){
match=true;
break;
}
j++;
}
if(endIndex>0&&url.charAt(endIndex-1)!='.'){
match=true;
break;
}
content=url;
}else{
endIndex=url.indexOf(".126.net");
if(endIndex>-1){
var j=index;
while(j<endIndex){
var ch=url.charAt(j);
if(!((ch>='0'&&ch<='9')||(ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z')||ch=='.')){
match=true;
break;
}
j++;
}
content=url;
}else{
match=true;
break;
}
}
if(match==true){
break;
}
}
return match;
}
function showInfo(id,msg,type){
var infodiv=document.getElementById(id);
if(infodiv==null){
alert(msg);
return false;
}
infodiv.style.display='inline';
if(type=="ok")
infodiv.innerHTML='<img src="/style/common/ico_alert.gif"/>'+msg;
else if(type=="info")
infodiv.innerHTML='<img src="/style/common/ico_alert.gif"/>'+msg;
else if(type=="error")
infodiv.innerHTML='<img src="/style/common/ico_alert.gif"/>'+msg;
else
infodiv.innerHTML='<img src="/style/common/ico_alert.gif"/>'+msg;
window.setTimeout(
function(){
fadeInfo(id);
},5000);
}
function fadeInfo(id){
document.getElementById(id).style.display='none';
}
function stripData(content,noStripTags){
var badContent=["head","script","style","object","applet","noscript","frameset","noframes"];
var badTag=["form","meta","body","html","label","select","optgroup","option",
"textarea","title","script","xmp","applet","embed","head","frameset",
"iframe","noframes","noscript","object","style",
"input","base","basefont","isindex","link","frame","param","xml","xss","st1:chsdate"];
var badAction=["on[a-z]+?","disabled","id","name","class"];
var badCss=["position","javascript","vbscript","actionscript","xmp","activex"];
var isHarm=false;
var regStr;
var reg=new RegExp("(&#(?!039;))|(&%)","ig");
if(reg.test(content)){
content=content.replace(reg,"&");
}
delete reg;
reg=new RegExp("(\t)","ig");
if(reg.test(content)){
content=content.replace(reg," ");
}
delete reg;
regStr="(<[^<>]*)(\r|\n)([^>]*>)";
reg=new RegExp(regStr,"ig");
while(reg.test(content)){
content=content.replace(reg,"$1 $3");
delete reg;
reg=new RegExp(regStr,"ig");
}
delete reg;
regStr="(<[^<>]*)(\\\\|/\\*.*\\*/)([^>]*>)";
reg=new RegExp(regStr,"ig");
while(reg.test(content)){
content=content.replace(reg,"$1$3");
delete reg;
reg=new RegExp(regStr,"ig");
}
delete reg;
for(var i=0;i<badContent.length;i++){
if(findNoStripTag(badContent[i],noStripTags))
continue;
regStr="<\\s*"+badContent[i]+"[^>]*>[\\s\\S]*?<\\s*/\\s*"+badContent[i]+"[^>]*>";
reg=new RegExp(regStr,"ig");
while(reg.test(content)){
isHarm=true;
content=content.replace(reg,"");
delete reg;
reg=new RegExp(regStr,"ig");
}
delete reg;
}
for(var i=0;i<badTag.length;i++){
if(findNoStripTag(badTag[i],noStripTags))
continue;
regStr="<\\s*[/\?]?\\s*"+badTag[i]+"[^>]*>";
reg=new RegExp(regStr,"ig");
while(reg.test(content)){
isHarm=true;
content=content.replace(reg,"");
delete reg;
reg=new RegExp(regStr,"ig");
}
delete reg;
}
for(var i=0;i<badAction.length;i++){
if(findNoStripTag(badAction[i],noStripTags))
continue;
var attrValueStr="(?:\"[^\"]*?\")|(?:'[^']*?')|(?:[^\\s'\"]+?[\\s'\"])";
regStr="(<\\s*\\w+\\s*)((\\w+\\s*=\\s*(?:"+attrValueStr+")\\s*)*?)"+badAction[i]+"\\s*=\\s*(?:"+attrValueStr+")([^>]*>)";
reg=new RegExp(regStr,"ig");
while(reg.test(content)){
if(badAction[i]!="allowScriptAccess"&&badAction[i]!="allowNetworking")
isHarm=true;
content=content.replace(reg,"$1$2$4");
delete reg;
reg=new RegExp(regStr,"ig");
}
delete reg;
}
for(var i=0;i<badCss.length;i++){
if(findNoStripTag(badCss[i],noStripTags))
continue;
regStr="(<[^<>]*)"+badCss[i]+"\\s*:\\s*[^\\s;\">]*([^>]*>)";
reg=new RegExp(regStr,"ig");
while(reg.test(content)){
isHarm=true;
content=content.replace(reg,"$1$2");
delete reg;
reg=new RegExp(regStr,"ig");
}
delete reg;
}
regStr="(<[^<>]*)expression\\s*\\([^\\)]*\\)([^>]*>)";
reg=new RegExp(regStr,"ig");
while(reg.test(content)){
isHarm=true;
content=content.replace(reg,"$1$2");
delete reg;
reg=new RegExp(regStr,"ig");
}
delete reg;
regStr="(<[^<>]*)url\\s*\\([^\\)]*\\.(js|do)\\s*\\)([^>]*>)";
reg=new RegExp(regStr,"ig");
while(reg.test(content)){
isHarm=true;
content=content.replace(reg,"$1$3");
delete reg;
reg=new RegExp(regStr,"ig");
}
delete reg;
regStr="(<[^<>]*[\\s'\"])src\\s*=\\s*['\"]?.*?\\.(js|do)(>)";
reg=new RegExp(regStr,"ig");
while(reg.test(content)){
isHarm=true;
content=content.replace(reg,"$1$3");
delete reg;
reg=new RegExp(regStr,"ig");
}
delete reg;
regStr="(<[^<>]*[\\s'\"])src\\s*=\\s*['\"]?.*?\\.(js|do)[\\s'\"]([^>]*>)";
reg=new RegExp(regStr,"ig");
while(reg.test(content)){
isHarm=true;
content=content.replace(reg,"$1$3");
delete reg;
reg=new RegExp(regStr,"ig");
}
delete reg;
var retobj={};
retobj.content=content;
retobj.isHarm=isHarm;
return retobj;
}
function findNoStripTag(tag,tags){
if(tags==null||tags=="")
return false;
for(var i=0;i<tags.length;i++){
if(tags[i]==tag)
return true;
}
return false;
}
var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars=new Array(
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,
52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,
-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,
15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,
-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);
function base64encode(str){
var out,i,len;
var c1,c2,c3;
len=str.length;
i=0;
out="";
while(i<len){
c1=str.charCodeAt(i++)&0xff;
if(i==len)
{
out+=base64EncodeChars.charAt(c1>>2);
out+=base64EncodeChars.charAt((c1&0x3)<<4);
out+="==";
break;
}
c2=str.charCodeAt(i++);
if(i==len)
{
out+=base64EncodeChars.charAt(c1>>2);
out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));
out+=base64EncodeChars.charAt((c2&0xF)<<2);
out+="=";
break;
}
c3=str.charCodeAt(i++);
out+=base64EncodeChars.charAt(c1>>2);
out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));
out+=base64EncodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));
out+=base64EncodeChars.charAt(c3&0x3F);
}
return out;
}
function base64decode(str){
var c1,c2,c3,c4;
var i,len,out;
len=str.length;
i=0;
out="";
while(i<len){
do{
c1=base64DecodeChars[str.charCodeAt(i++)&0xff];
}while(i<len&&c1==-1);
if(c1==-1)
break;
do{
c2=base64DecodeChars[str.charCodeAt(i++)&0xff];
}while(i<len&&c2==-1);
if(c2==-1)
break;
out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));
do{
c3=str.charCodeAt(i++)&0xff;
if(c3==61)
return out;
c3=base64DecodeChars[c3];
}while(i<len&&c3==-1);
if(c3==-1)
break;
out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));
do{
c4=str.charCodeAt(i++)&0xff;
if(c4==61)
return out;
c4=base64DecodeChars[c4];
}while(i<len&&c4==-1);
if(c4==-1)
break;
out+=String.fromCharCode(((c3&0x03)<<6)|c4);
}
return out;
}
function setHomePageUtil(url){
if(document.all){
document.body.style.behavior="url(#default#homepage)";
document.body.setHomePage(url);
}else{
alert("浏览器不支持，请手动设置为首页");
}
return false;
}
function addFavoriteUtil(url,desc,descOther){
if(desc==null||desc=="")
desc=descOther;
if(document.all&&window.external){
window.external.AddFavorite(url,desc+"的网易博客");
}else if(window.sidebar){
window.sidebar.addPanel(desc+"的网易博客",url,"");
}else{
alert("浏览器不支持，请手动加入收藏夹");
}
}
function toDHTML(str){
return str.replace(/&/g,'&amp;')
.replace(/</g,'&lt;')
.replace(/>/g,'&gt;')
.replace(/"/g,'&quot;')
.replace(/'/g,'&#039;')
.replace(/ /g,'&nbsp;')
.replace(/\n/g,'<br>');
}
function fromDHTML(str){
return str.replace(/&lt;/g,'<')
.replace(/&gt;/g,'>')
.replace(/&quot;/g,'\"')
.replace(/&#039;/g,'\'')
.replace(/&nbsp;/g,' ')
.replace(/<br>/g,'\n')
.replace(/&amp;/g,'&');
}
function trimStrByEnLength(str,length){
if(str==null){
return"null string";
}
var i=0;
var j=0;
for(i=0;i<str.length;i++){
if(str.charCodeAt(i)>127||str.charCodeAt(i)==94){
j=j+2;
}
else{
j=j+1;
}
if(length<j){
break;
}
}
var counter=i;
var needTrim=(str.length>counter);
if(needTrim){
return str.substr(0,counter)+'...';
}
else{
return str;
}
}
function getInnerTextUtil(el){
var s=el.innerText;
if(isIE){
if(s)return s;
}
s=el.text;
if(s)return s;
s=el.innerHTML;
if(s)return s;
}
function constructHelp(obj,tip){
obj=$(obj);
var _h=document.createElement("div");
_h.className="g_p_left";
_h.innerHTML='<span class="n_ n51">&nbsp;</span>';
obj.appendChild(_h);
var _i=document.createElement("div");
_i.className="g_p_left g_w_85 selitm g_c_spdin bd01 g_t_wrap";
if(!isIE){
_i.style.marginLeft='25px';
}
_i.style.width='150px';
_i.style.display='none';
_i.style.position='absolute';
_i.style.fontSize='14px';
_i.innerHTML=tip;
obj.appendChild(_i);
_h.onmouseover=function(){_i.style.display='block';};
_h.onmouseout=function(){_i.style.display='none';};
delete _h;delete _i;
}
function constructProfileHelp(obj,tip){
obj=$(obj);
var _i=document.createElement("div");
_i.className="g_p_left selitm g_c_spdin bd01 g_t_wrap";
if(!isIE){
_i.style.marginLeft='25px';
}
_i.style.width='110px';
_i.style.display='none';
_i.style.position='absolute';
_i.style.fontSize='12px';
_i.innerHTML=tip;
obj.appendChild(_i);
obj.onmouseover=function(){_i.style.display='block';};
obj.onmouseout=function(){_i.style.display='none';};
delete _i;
}
function simpleScrollTo(){
var scrollTarget;
scrollTarget=arguments.length>0?arguments[0]:'layout_ctrl';
if(scrollTarget==null)return;
new Effect.ScrollTo(scrollTarget);
}
function listenMusic(name,author,url,lrc,wapId,music){
if(music!=null&&music.userName!=null&&music.id!=null){
window.open("http://"+DomainMap.getParentDomain(music.userName)+"/m/?t=3&mid="+encodeURIComponent(music.id)+"&aid="+encodeURIComponent(music.albumId),"_blank","resizable=no,scrollbars=no,status=yes,width=772px,height=595px");
}else{
window.open("http://blog.163.com/m/?t=2&n="+encodeURIComponent(name)+"&a="+encodeURIComponent(author)+
"&w="+encodeURIComponent(wapId)+"&l="+base64encode(encodeURIComponent(lrc))+"&u="+base64encode(encodeURIComponent(url)),"_blank","resizable=no,scrollbars=no,status=yes,width=772px,height=595px");
}
}
function g_previewImg(id,target){
try{
$(target).src=$(id).value;
}catch(ex){}
}
function g_loadingBar(style){
return'<p style="'+style+'"><img style="vertical-align:middle;" src="'+Const.STDomain+'/style/common/loading.gif" />&nbsp;&nbsp;&nbsp;数据加载中。。。<p>';
}
function g_setInnerHTML(node,html){
var d=document.createElement("div");
d.innerHTML=html;
for(var i=node.childNodes.length-1;i>=0;i--){
node.removeChild(node.childNodes[i]);
}
for(var i=d.childNodes.length-1;i>=0;i--){
node.appendChild(d.childNodes[i]);
}
}
function dynamic_load_javascript(jsurl,onload)
{
var head=document.getElementsByTagName('head').item(0);
var script=document.createElement('script');
jsurl=jsurl.replace(/\*/g,'&');
script.src=jsurl.replace(/\(([\w]+)\)/g,function(e){return UD[e.substring(1,e.length-1)];});
script.type='text/javascript';
if(onload){
if(Browser.isIE())
script.onreadystatechange=function(_script,_onload){
if(_script.readyState=="loaded"||_script.readyState=="complete"){
_onload();
}
}.bind(this,script,onload);
else
script.onload=onload;
}
head.appendChild(script);
}
var hexcase=0;
var b64pad="";
var chrsz=8;
function hex_md5(s){return binl2hex(core_md5(str2binl(s),s.length*chrsz));}
function md5_vm_test()
{
return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72";
}
function core_md5(x,len)
{
x[len>>5]|=0x80<<((len)%32);
x[(((len+64)>>>9)<<4)+14]=len;
var a=1732584193;
var b=-271733879;
var c=-1732584194;
var d=271733878;
for(var i=0;i<x.length;i+=16)
{
var olda=a;
var oldb=b;
var oldc=c;
var oldd=d;
a=md5_ff(a,b,c,d,x[i+0],7,-680876936);
d=md5_ff(d,a,b,c,x[i+1],12,-389564586);
c=md5_ff(c,d,a,b,x[i+2],17,606105819);
b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);
a=md5_ff(a,b,c,d,x[i+4],7,-176418897);
d=md5_ff(d,a,b,c,x[i+5],12,1200080426);
c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);
b=md5_ff(b,c,d,a,x[i+7],22,-45705983);
a=md5_ff(a,b,c,d,x[i+8],7,1770035416);
d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);
c=md5_ff(c,d,a,b,x[i+10],17,-42063);
b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);
a=md5_ff(a,b,c,d,x[i+12],7,1804603682);
d=md5_ff(d,a,b,c,x[i+13],12,-40341101);
c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);
b=md5_ff(b,c,d,a,x[i+15],22,1236535329);
a=md5_gg(a,b,c,d,x[i+1],5,-165796510);
d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);
c=md5_gg(c,d,a,b,x[i+11],14,643717713);
b=md5_gg(b,c,d,a,x[i+0],20,-373897302);
a=md5_gg(a,b,c,d,x[i+5],5,-701558691);
d=md5_gg(d,a,b,c,x[i+10],9,38016083);
c=md5_gg(c,d,a,b,x[i+15],14,-660478335);
b=md5_gg(b,c,d,a,x[i+4],20,-405537848);
a=md5_gg(a,b,c,d,x[i+9],5,568446438);
d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);
c=md5_gg(c,d,a,b,x[i+3],14,-187363961);
b=md5_gg(b,c,d,a,x[i+8],20,1163531501);
a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);
d=md5_gg(d,a,b,c,x[i+2],9,-51403784);
c=md5_gg(c,d,a,b,x[i+7],14,1735328473);
b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);
a=md5_hh(a,b,c,d,x[i+5],4,-378558);
d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);
c=md5_hh(c,d,a,b,x[i+11],16,1839030562);
b=md5_hh(b,c,d,a,x[i+14],23,-35309556);
a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);
d=md5_hh(d,a,b,c,x[i+4],11,1272893353);
c=md5_hh(c,d,a,b,x[i+7],16,-155497632);
b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);
a=md5_hh(a,b,c,d,x[i+13],4,681279174);
d=md5_hh(d,a,b,c,x[i+0],11,-358537222);
c=md5_hh(c,d,a,b,x[i+3],16,-722521979);
b=md5_hh(b,c,d,a,x[i+6],23,76029189);
a=md5_hh(a,b,c,d,x[i+9],4,-640364487);
d=md5_hh(d,a,b,c,x[i+12],11,-421815835);
c=md5_hh(c,d,a,b,x[i+15],16,530742520);
b=md5_hh(b,c,d,a,x[i+2],23,-995338651);
a=md5_ii(a,b,c,d,x[i+0],6,-198630844);
d=md5_ii(d,a,b,c,x[i+7],10,1126891415);
c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);
b=md5_ii(b,c,d,a,x[i+5],21,-57434055);
a=md5_ii(a,b,c,d,x[i+12],6,1700485571);
d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);
c=md5_ii(c,d,a,b,x[i+10],15,-1051523);
b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);
a=md5_ii(a,b,c,d,x[i+8],6,1873313359);
d=md5_ii(d,a,b,c,x[i+15],10,-30611744);
c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);
b=md5_ii(b,c,d,a,x[i+13],21,1309151649);
a=md5_ii(a,b,c,d,x[i+4],6,-145523070);
d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);
c=md5_ii(c,d,a,b,x[i+2],15,718787259);
b=md5_ii(b,c,d,a,x[i+9],21,-343485551);
a=safe_add(a,olda);
b=safe_add(b,oldb);
c=safe_add(c,oldc);
d=safe_add(d,oldd);
}
return Array(a,b,c,d);
}
function md5_cmn(q,a,b,x,s,t)
{
return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);
}
function md5_ff(a,b,c,d,x,s,t)
{
return md5_cmn((b&c)|((~b)&d),a,b,x,s,t);
}
function md5_gg(a,b,c,d,x,s,t)
{
return md5_cmn((b&d)|(c&(~d)),a,b,x,s,t);
}
function md5_hh(a,b,c,d,x,s,t)
{
return md5_cmn(b^c^d,a,b,x,s,t);
}
function md5_ii(a,b,c,d,x,s,t)
{
return md5_cmn(c^(b|(~d)),a,b,x,s,t);
}
function core_hmac_md5(key,data)
{
var bkey=str2binl(key);
if(bkey.length>16)bkey=core_md5(bkey,key.length*chrsz);
var ipad=Array(16),opad=Array(16);
for(var i=0;i<16;i++)
{
ipad[i]=bkey[i]^0x36363636;
opad[i]=bkey[i]^0x5C5C5C5C;
}
var hash=core_md5(ipad.concat(str2binl(data)),512+data.length*chrsz);
return core_md5(opad.concat(hash),512+128);
}
function safe_add(x,y)
{
var lsw=(x&0xFFFF)+(y&0xFFFF);
var msw=(x>>16)+(y>>16)+(lsw>>16);
return(msw<<16)|(lsw&0xFFFF);
}
function bit_rol(num,cnt)
{
return(num<<cnt)|(num>>>(32-cnt));
}
function str2binl(str)
{
var bin=Array();
var mask=(1<<chrsz)-1;
for(var i=0;i<str.length*chrsz;i+=chrsz)
bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<(i%32);
return bin;
}
function binl2str(bin)
{
var str="";
var mask=(1<<chrsz)-1;
for(var i=0;i<bin.length*32;i+=chrsz)
str+=String.fromCharCode((bin[i>>5]>>>(i%32))&mask);
return str;
}
function binl2hex(binarray)
{
var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";
var str="";
for(var i=0;i<binarray.length*4;i++)
{
str+=hex_tab.charAt((binarray[i>>2]>>((i%4)*8+4))&0xF)+
hex_tab.charAt((binarray[i>>2]>>((i%4)*8))&0xF);
}
return str;
}
function binl2b64(binarray)
{
var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var str="";
for(var i=0;i<binarray.length*4;i+=3)
{
var triplet=(((binarray[i>>2]>>8*(i%4))&0xFF)<<16)
|(((binarray[i+1>>2]>>8*((i+1)%4))&0xFF)<<8)
|((binarray[i+2>>2]>>8*((i+2)%4))&0xFF);
for(var j=0;j<4;j++)
{
if(i*8+j*6>binarray.length*32)str+=b64pad;
else str+=tab.charAt((triplet>>6*(3-j))&0x3F);
}
}
return str;
}
var Prototype={
Version:'1.4.0',
ScriptFragment:'(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)',
emptyFunction:function(){},
K:function(x){return x}
}
var Class={
create:function(){
return function(){
this.initialize.apply(this,arguments);
}
}
}
var Abstract=new Object();
Object.extend=function(destination,source){
for(property in source){
destination[property]=source[property];
}
return destination;
}
Object.inspect=function(object){
try{
if(object==undefined)return'undefined';
if(object==null)return'null';
return object.inspect?object.inspect():object.toString();
}catch(e){
if(e instanceof RangeError)return'...';
throw e;
}
}
Function.prototype.bind=function(){
var __method=this,args=$A(arguments),object=args.shift();
return function(){
return __method.apply(object,args.concat($A(arguments)));
}
}
Function.prototype.bindAsEventListener=function(object){
var __method=this;
return function(event){
return __method.call(object,event||window.event);
}
}
Function.prototype.bindEventWithArgs=function(){
var __method=this,args=$A(arguments),object=args.shift();
return function(event){
return __method.apply(object,args.concat($A(arguments)).concat(event||window.event));
}
}
Object.extend(Number.prototype,{
succ:function(){
return this+1;
},
times:function(iterator){
$R(0,this,true).each(iterator);
return this;
}
});
var Try={
these:function(){
var returnValue;
for(var i=0;i<arguments.length;i++){
var lambda=arguments[i];
try{
returnValue=lambda();
break;
}catch(e){}
}
return returnValue;
}
}
var PeriodicalExecuter=Class.create();
PeriodicalExecuter.prototype={
initialize:function(callback,frequency){
this.callback=callback;
this.frequency=frequency;
this.currentlyExecuting=false;
this.registerCallback();
},
registerCallback:function(){
setInterval(this.onTimerEvent.bind(this),this.frequency*1000);
},
onTimerEvent:function(){
if(!this.currentlyExecuting){
try{
this.currentlyExecuting=true;
this.callback();
}finally{
this.currentlyExecuting=false;
}
}
}
}
function $(){
var elements=new Array();
for(var i=0;i<arguments.length;i++){
var element=arguments[i];
if(typeof element=='string')
element=document.getElementById(element);
if(arguments.length==1)
return element;
elements.push(element);
}
return elements;
}
Object.extend(String.prototype,{
stripTags:function(){
return this.replace(/<\/?[^>]+>/gi,'');
},
stripScripts:function(){
return this.replace(new RegExp(Prototype.ScriptFragment,'img'),'');
},
extractScripts:function(){
var matchAll=new RegExp(Prototype.ScriptFragment,'img');
var matchOne=new RegExp(Prototype.ScriptFragment,'im');
return(this.match(matchAll)||[]).map(function(scriptTag){
return(scriptTag.match(matchOne)||['',''])[1];
});
},
evalScripts:function(){
return this.extractScripts().map(eval);
},
escapeHTML:function(){
var div=document.createElement('div');
var text=document.createTextNode(this);
div.appendChild(text);
return div.innerHTML;
},
toQueryParams:function(){
var pairs=this.match(/^\??(.*)$/)[1].split('&');
return pairs.inject({},function(params,pairString){
var pair=pairString.split('=');
params[pair[0]]=pair[1];
return params;
});
},
toArray:function(){
return this.split('');
},
camelize:function(){
var oStringList=this.split('-');
if(oStringList.length==1)return oStringList[0];
var camelizedString=this.indexOf('-')==0
?oStringList[0].charAt(0).toUpperCase()+oStringList[0].substring(1)
:oStringList[0];
for(var i=1,len=oStringList.length;i<len;i++){
var s=oStringList[i];
camelizedString+=s.charAt(0).toUpperCase()+s.substring(1);
}
return camelizedString;
},
inspect:function(){
return"'"+this.replace('\\','\\\\').replace("'",'\\\'')+"'";
}
});
String.prototype.parseQuery=String.prototype.toQueryParams;
var $break=new Object();
var $continue=new Object();
var Enumerable={
each:function(iterator){
var index=0;
try{
this._each(function(value){
try{
iterator(value,index++);
}catch(e){
if(e!=$continue)throw e;
}
});
}catch(e){
if(e!=$break)throw e;
}
},
all:function(iterator){
var result=true;
this.each(function(value,index){
result=result&&!!(iterator||Prototype.K)(value,index);
if(!result)throw $break;
});
return result;
},
any:function(iterator){
var result=false;
this.each(function(value,index){
if(result=!!(iterator||Prototype.K)(value,index))
throw $break;
});
return result;
},
collect:function(iterator){
var results=[];
this.each(function(value,index){
results.push(iterator(value,index));
});
return results;
},
detect:function(iterator){
var result;
this.each(function(value,index){
if(iterator(value,index)){
result=value;
throw $break;
}
});
return result;
},
findAll:function(iterator){
var results=[];
this.each(function(value,index){
if(iterator(value,index))
results.push(value);
});
return results;
},
include:function(object){
var found=false;
this.each(function(value){
if(value==object){
found=true;
throw $break;
}
});
return found;
},
inject:function(memo,iterator){
this.each(function(value,index){
memo=iterator(memo,value,index);
});
return memo;
},
invoke:function(method){
var args=$A(arguments).slice(1);
return this.collect(function(value){
return value[method].apply(value,args);
});
},
max:function(iterator){
var result;
this.each(function(value,index){
value=(iterator||Prototype.K)(value,index);
if(value>=(result||value))
result=value;
});
return result;
},
min:function(iterator){
var result;
this.each(function(value,index){
value=(iterator||Prototype.K)(value,index);
if(value<=(result||value))
result=value;
});
return result;
},
pluck:function(property){
var results=[];
this.each(function(value,index){
results.push(value[property]);
});
return results;
},
reject:function(iterator){
var results=[];
this.each(function(value,index){
if(!iterator(value,index))
results.push(value);
});
return results;
},
sortBy:function(iterator){
return this.collect(function(value,index){
return{value:value,criteria:iterator(value,index)};
}).sort(function(left,right){
var a=left.criteria,b=right.criteria;
return a<b?-1:a>b?1:0;
}).pluck('value');
},
toArray:function(){
return this.collect(Prototype.K);
},
inspect:function(){
return'#<Enumerable:'+this.toArray().inspect()+'>';
}
}
Object.extend(Enumerable,{
map:Enumerable.collect,
find:Enumerable.detect,
select:Enumerable.findAll,
member:Enumerable.include,
entries:Enumerable.toArray
});
var $A=Array.from=function(iterable){
if(!iterable)return[];
if(iterable.toArray){
return iterable.toArray();
}else{
var results=[];
for(var i=0;i<iterable.length;i++)
results.push(iterable[i]);
return results;
}
}
Object.extend(Array.prototype,Enumerable);
Array.prototype._reverse=Array.prototype.reverse;
Object.extend(Array.prototype,{
_each:function(iterator){
for(var i=0;i<this.length;i++)
iterator(this[i]);
},
clear:function(){
this.length=0;
return this;
},
first:function(){
return this[0];
},
last:function(){
return this[this.length-1];
},
compact:function(){
return this.select(function(value){
return value!=undefined||value!=null;
});
},
flatten:function(){
return this.inject([],function(array,value){
return array.concat(value.constructor==Array?
value.flatten():[value]);
});
},
without:function(){
var values=$A(arguments);
return this.select(function(value){
return!values.include(value);
});
},
indexOf:function(object){
for(var i=0;i<this.length;i++)
if(this[i]==object)return i;
return-1;
},
reverse:function(inline){
return(inline!==false?this:this.toArray())._reverse();
},
shift:function(){
var result=this[0];
for(var i=0;i<this.length-1;i++)
this[i]=this[i+1];
this.length--;
return result;
},
inspect:function(){
return'['+this.map(Object.inspect).join(', ')+']';
}
});
var Hash={
_each:function(iterator){
for(key in this){
var value=this[key];
if(typeof value=='function')continue;
var pair=[key,value];
pair.key=key;
pair.value=value;
iterator(pair);
}
},
keys:function(){
return this.pluck('key');
},
values:function(){
return this.pluck('value');
},
merge:function(hash){
return $H(hash).inject($H(this),function(mergedHash,pair){
mergedHash[pair.key]=pair.value;
return mergedHash;
});
},
toQueryString:function(){
return this.map(function(pair){
return pair.map(encodeURIComponent).join('=');
}).join('&');
},
inspect:function(){
return'#<Hash:{'+this.map(function(pair){
return pair.map(Object.inspect).join(': ');
}).join(', ')+'}>';
}
}
function $H(object){
var hash=Object.extend({},object||{});
Object.extend(hash,Enumerable);
Object.extend(hash,Hash);
return hash;
}
ObjectRange=Class.create();
Object.extend(ObjectRange.prototype,Enumerable);
Object.extend(ObjectRange.prototype,{
initialize:function(start,end,exclusive){
this.start=start;
this.end=end;
this.exclusive=exclusive;
},
_each:function(iterator){
var value=this.start;
do{
iterator(value);
value=value.succ();
}while(this.include(value));
},
include:function(value){
if(value<this.start)
return false;
if(this.exclusive)
return value<this.end;
return value<=this.end;
}
});
var $R=function(start,end,exclusive){
return new ObjectRange(start,end,exclusive);
}
var Ajax={
getTransport:function(){
return Try.these(
function(){return new ActiveXObject('Msxml2.XMLHTTP')},
function(){return new ActiveXObject('Microsoft.XMLHTTP')},
function(){return new XMLHttpRequest()}
)||false;
},
activeRequestCount:0
}
Ajax.Responders={
responders:[],
_each:function(iterator){
this.responders._each(iterator);
},
register:function(responderToAdd){
if(!this.include(responderToAdd))
this.responders.push(responderToAdd);
},
unregister:function(responderToRemove){
this.responders=this.responders.without(responderToRemove);
},
dispatch:function(callback,request,transport,json){
this.each(function(responder){
if(responder[callback]&&typeof responder[callback]=='function'){
try{
responder[callback].apply(responder,[request,transport,json]);
}catch(e){}
}
});
}
};
Object.extend(Ajax.Responders,Enumerable);
Ajax.Responders.register({
onCreate:function(){
Ajax.activeRequestCount++;
},
onComplete:function(){
Ajax.activeRequestCount--;
}
});
Ajax.Base=function(){};
Ajax.Base.prototype={
setOptions:function(options){
this.options={
method:'post',
asynchronous:true,
parameters:''
}
Object.extend(this.options,options||{});
},
responseIsSuccess:function(){
return this.transport.status==undefined
||this.transport.status==0
||(this.transport.status>=200&&this.transport.status<300);
}
}
Ajax.Request=Class.create();
Ajax.Request.Events=
['Uninitialized','Loading','Loaded','Interactive','Complete'];
Ajax.Request.prototype=Object.extend(new Ajax.Base(),{
initialize:function(url,options){
this.transport=Ajax.getTransport();
this.setOptions(options);
this.request(url);
},
request:function(url){
var parameters=this.options.parameters||'';
if(parameters.length>0)parameters+='&_=';
try{
this.url=url;
if(this.options.method=='get'&&parameters.length>0)
this.url+=(this.url.match(/\?/)?'&':'?')+parameters;
Ajax.Responders.dispatch('onCreate',this,this.transport);
this.transport.open(this.options.method,this.url,
this.options.asynchronous);
if(this.options.asynchronous){
this.transport.onreadystatechange=this.onStateChange.bind(this);
setTimeout((function(){this.respondToReadyState(1)}).bind(this),10);
}
this.setRequestHeaders();
var body=this.options.postBody?this.options.postBody:parameters;
this.transport.send(this.options.method=='post'?body:null);
}catch(e){
this.dispatchException(e);
}
},
setRequestHeaders:function(){
var requestHeaders=
['X-Requested-With','XMLHttpRequest',
'X-Prototype-Version',Prototype.Version];
if(this.options.method=='post'){
requestHeaders.push('Content-type',
'application/x-www-form-urlencoded');
if(this.transport.overrideMimeType)
requestHeaders.push('Connection','close');
}
if(this.options.requestHeaders)
requestHeaders.push.apply(requestHeaders,this.options.requestHeaders);
for(var i=0;i<requestHeaders.length;i+=2)
this.transport.setRequestHeader(requestHeaders[i],requestHeaders[i+1]);
},
onStateChange:function(){
var readyState=this.transport.readyState;
if(readyState!=1)
this.respondToReadyState(this.transport.readyState);
},
header:function(name){
try{
return this.transport.getResponseHeader(name);
}catch(e){}
},
evalJSON:function(){
try{
return eval(this.header('X-JSON'));
}catch(e){}
},
evalResponse:function(){
try{
return eval(this.transport.responseText);
}catch(e){
this.dispatchException(e);
}
},
respondToReadyState:function(readyState){
var event=Ajax.Request.Events[readyState];
var transport=this.transport,json=this.evalJSON();
if(event=='Complete'){
try{
(this.options['on'+this.transport.status]
||this.options['on'+(this.responseIsSuccess()?'Success':'Failure')]
||Prototype.emptyFunction)(transport,json);
}catch(e){
this.dispatchException(e);
}
if((this.header('Content-type')||'').match(/^text\/javascript/i))
this.evalResponse();
}
try{
(this.options['on'+event]||Prototype.emptyFunction)(transport,json);
Ajax.Responders.dispatch('on'+event,this,transport,json);
}catch(e){
this.dispatchException(e);
}
if(event=='Complete')
this.transport.onreadystatechange=Prototype.emptyFunction;
},
dispatchException:function(exception){
(this.options.onException||Prototype.emptyFunction)(this,exception);
Ajax.Responders.dispatch('onException',this,exception);
}
});
Ajax.Updater=Class.create();
Object.extend(Object.extend(Ajax.Updater.prototype,Ajax.Request.prototype),{
initialize:function(container,url,options){
this.containers={
success:container.success?$(container.success):$(container),
failure:container.failure?$(container.failure):
(container.success?null:$(container))
}
this.transport=Ajax.getTransport();
this.setOptions(options);
var onComplete=this.options.onComplete||Prototype.emptyFunction;
this.options.onComplete=(function(transport,object){
this.updateContent();
onComplete(transport,object);
}).bind(this);
this.request(url);
},
updateContent:function(){
var receiver=this.responseIsSuccess()?
this.containers.success:this.containers.failure;
var response=this.transport.responseText;
if(!this.options.evalScripts)
response=response.stripScripts();
if(receiver){
if(this.options.insertion){
new this.options.insertion(receiver,response);
}else{
Element.update(receiver,response);
}
}
if(this.responseIsSuccess()){
if(this.onComplete)
setTimeout(this.onComplete.bind(this),10);
}
}
});
Ajax.PeriodicalUpdater=Class.create();
Ajax.PeriodicalUpdater.prototype=Object.extend(new Ajax.Base(),{
initialize:function(container,url,options){
this.setOptions(options);
this.onComplete=this.options.onComplete;
this.frequency=(this.options.frequency||2);
this.decay=(this.options.decay||1);
this.updater={};
this.container=container;
this.url=url;
this.start();
},
start:function(){
this.options.onComplete=this.updateComplete.bind(this);
this.onTimerEvent();
},
stop:function(){
this.updater.onComplete=undefined;
clearTimeout(this.timer);
(this.onComplete||Prototype.emptyFunction).apply(this,arguments);
},
updateComplete:function(request){
if(this.options.decay){
this.decay=(request.responseText==this.lastText?
this.decay*this.options.decay:1);
this.lastText=request.responseText;
}
this.timer=setTimeout(this.onTimerEvent.bind(this),
this.decay*this.frequency*1000);
},
onTimerEvent:function(){
this.updater=new Ajax.Updater(this.container,this.url,this.options);
}
});
document.getElementsByClassName=function(className,parentElement){
var children=($(parentElement)||document.body).getElementsByTagName('*');
return $A(children).inject([],function(elements,child){
if(child.className.match(new RegExp("(^|\\s)"+className+"(\\s|$)")))
elements.push(child);
return elements;
});
}
if(!window.Element){
var Element=new Object();
}
Object.extend(Element,{
visible:function(element){
return $(element).style.display!='none';
},
toggle:function(){
for(var i=0;i<arguments.length;i++){
var element=$(arguments[i]);
Element[Element.visible(element)?'hide':'show'](element);
}
},
hide:function(){
for(var i=0;i<arguments.length;i++){
var element=$(arguments[i]);
element.style.display='none';
}
},
show:function(){
for(var i=0;i<arguments.length;i++){
var element=$(arguments[i]);
element.style.display='';
}
},
remove:function(element){
try{
element=$(element);
element.parentNode.removeChild(element);
if(element.outerHTML)element.outerHTML='';
}catch(e){}
},
update:function(element,html){
$(element).innerHTML=html.stripScripts();
setTimeout(function(){html.evalScripts()},10);
},
getHeight:function(element){
element=$(element);
return element.offsetHeight;
},
classNames:function(element){
return new Element.ClassNames(element);
},
hasClassName:function(element,className){
if(!(element=$(element)))return;
return Element.classNames(element).include(className);
},
addClassName:function(element,className){
if(!(element=$(element)))return;
return Element.classNames(element).add(className);
},
removeClassName:function(element,className){
if(!(element=$(element)))return;
return Element.classNames(element).remove(className);
},
replaceClassName:function(element,oldClass,newClass){
if(!(element=$(element)))return;
this.removeClassName(element,oldClass);
this.addClassName(element,newClass);
},
cleanWhitespace:function(element){
element=$(element);
for(var i=0;i<element.childNodes.length;i++){
var node=element.childNodes[i];
if(node.nodeType==3&&!/\S/.test(node.nodeValue))
Element.remove(node);
}
},
empty:function(element){
return $(element).innerHTML.match(/^\s*$/);
},
scrollTo:function(element){
element=$(element);
var x=element.x?element.x:element.offsetLeft,
y=element.y?element.y:element.offsetTop;
window.scrollTo(x,y);
},
getStyle:function(element,style){
element=$(element);
var value=element.style[style.camelize()];
if(!value){
if(document.defaultView&&document.defaultView.getComputedStyle){
var css=document.defaultView.getComputedStyle(element,null);
value=css?css.getPropertyValue(style):null;
}else if(element.currentStyle){
value=element.currentStyle[style.camelize()];
}
}
if(window.opera&&['left','top','right','bottom'].include(style))
if(Element.getStyle(element,'position')=='static')value='auto';
return value=='auto'?null:value;
},
setStyle:function(element,style){
element=$(element);
for(name in style)
element.style[name.camelize()]=style[name];
},
getDimensions:function(element){
element=$(element);
if(Element.getStyle(element,'display')!='none')
return{width:element.offsetWidth,height:element.offsetHeight};
var els=element.style;
var originalVisibility=els.visibility;
var originalPosition=els.position;
els.visibility='hidden';
els.position='absolute';
els.display='';
var originalWidth=element.clientWidth;
var originalHeight=element.clientHeight;
els.display='none';
els.position=originalPosition;
els.visibility=originalVisibility;
return{width:originalWidth,height:originalHeight};
},
makePositioned:function(element){
element=$(element);
var pos=Element.getStyle(element,'position');
if(pos=='static'||!pos){
element._madePositioned=true;
element.style.position='relative';
if(window.opera){
element.style.top=0;
element.style.left=0;
}
}
},
undoPositioned:function(element){
element=$(element);
if(element._madePositioned){
element._madePositioned=undefined;
element.style.position=
element.style.top=
element.style.left=
element.style.bottom=
element.style.right='';
}
},
makeClipping:function(element){
element=$(element);
if(element._overflow)return;
element._overflow=element.style.overflow;
if((Element.getStyle(element,'overflow')||'visible')!='hidden')
element.style.overflow='hidden';
},
undoClipping:function(element){
element=$(element);
if(element._overflow)return;
element.style.overflow=element._overflow;
element._overflow=undefined;
}
});
Element.removeChild=Element.remove;
var Toggle=new Object();
Toggle.display=Element.toggle;
Abstract.Insertion=function(adjacency){
this.adjacency=adjacency;
}
Abstract.Insertion.prototype={
initialize:function(element,content){
this.element=$(element);
this.content=content.stripScripts();
if(this.adjacency&&this.element.insertAdjacentHTML){
try{
this.element.insertAdjacentHTML(this.adjacency,this.content);
}catch(e){
if(this.element.tagName.toLowerCase()=='tbody'){
this.insertContent(this.contentFromAnonymousTable());
}else{
throw e;
}
}
}else{
this.range=this.element.ownerDocument.createRange();
if(this.initializeRange)this.initializeRange();
this.insertContent([this.range.createContextualFragment(this.content)]);
}
setTimeout(function(){content.evalScripts()},10);
},
contentFromAnonymousTable:function(){
var div=document.createElement('div');
div.innerHTML='<table><tbody>'+this.content+'</tbody></table>';
return $A(div.childNodes[0].childNodes[0].childNodes);
}
}
var Insertion=new Object();
Insertion.Before=Class.create();
Insertion.Before.prototype=Object.extend(new Abstract.Insertion('beforeBegin'),{
initializeRange:function(){
this.range.setStartBefore(this.element);
},
insertContent:function(fragments){
fragments.each((function(fragment){
this.element.parentNode.insertBefore(fragment,this.element);
}).bind(this));
}
});
Insertion.Top=Class.create();
Insertion.Top.prototype=Object.extend(new Abstract.Insertion('afterBegin'),{
initializeRange:function(){
this.range.selectNodeContents(this.element);
this.range.collapse(true);
},
insertContent:function(fragments){
fragments.reverse(false).each((function(fragment){
this.element.insertBefore(fragment,this.element.firstChild);
}).bind(this));
}
});
Insertion.Bottom=Class.create();
Insertion.Bottom.prototype=Object.extend(new Abstract.Insertion('beforeEnd'),{
initializeRange:function(){
this.range.selectNodeContents(this.element);
this.range.collapse(this.element);
},
insertContent:function(fragments){
fragments.each((function(fragment){
this.element.appendChild(fragment);
}).bind(this));
}
});
Insertion.After=Class.create();
Insertion.After.prototype=Object.extend(new Abstract.Insertion('afterEnd'),{
initializeRange:function(){
this.range.setStartAfter(this.element);
},
insertContent:function(fragments){
fragments.each((function(fragment){
this.element.parentNode.insertBefore(fragment,
this.element.nextSibling);
}).bind(this));
}
});
Element.ClassNames=Class.create();
Element.ClassNames.prototype={
initialize:function(element){
this.element=$(element);
},
_each:function(iterator){
this.element.className.split(/\s+/).select(function(name){
return name.length>0;
})._each(iterator);
},
set:function(className){
this.element.className=className;
},
add:function(classNameToAdd){
if(this.include(classNameToAdd))return;
this.set(this.toArray().concat(classNameToAdd).join(' '));
},
remove:function(classNameToRemove){
if(!this.include(classNameToRemove))return;
this.set(this.select(function(className){
return className!=classNameToRemove;
}).join(' '));
},
toString:function(){
return this.toArray().join(' ');
}
}
Object.extend(Element.ClassNames.prototype,Enumerable);
var Field={
clear:function(){
for(var i=0;i<arguments.length;i++)
$(arguments[i]).value='';
},
focus:function(element){
$(element).focus();
},
select:function(element){
$(element).select();
},
activate:function(element){
element=$(element);
element.focus();
if(element.select)
element.select();
}
}
var Form={
serialize:function(form){
var elements=Form.getElements($(form));
var queryComponents=new Array();
for(var i=0;i<elements.length;i++){
var queryComponent=Form.Element.serialize(elements[i]);
if(queryComponent)
queryComponents.push(queryComponent);
}
return queryComponents.join('&');
},
getElements:function(form){
form=$(form);
var elements=new Array();
for(tagName in Form.Element.Serializers){
var tagElements=form.getElementsByTagName(tagName);
for(var j=0;j<tagElements.length;j++)
elements.push(tagElements[j]);
}
return elements;
},
disable:function(form){
var elements=Form.getElements(form);
for(var i=0;i<elements.length;i++){
var element=elements[i];
element.blur();
element.disabled='true';
}
},
enable:function(form){
var elements=Form.getElements(form);
for(var i=0;i<elements.length;i++){
var element=elements[i];
element.disabled='';
}
},
reset:function(form){
$(form).reset();
}
}
Form.Element={
serialize:function(element){
element=$(element);
var method=element.tagName.toLowerCase();
var parameter=Form.Element.Serializers[method](element);
if(parameter){
var key=encodeURIComponent(parameter[0]);
if(key.length==0)return;
if(parameter[1].constructor!=Array)
parameter[1]=[parameter[1]];
return parameter[1].map(function(value){
return key+'='+encodeURIComponent(value);
}).join('&');
}
},
getValue:function(element){
element=$(element);
var method=element.tagName.toLowerCase();
var parameter=Form.Element.Serializers[method](element);
if(parameter)
return parameter[1];
}
}
Form.Element.Serializers={
input:function(element){
switch(element.type.toLowerCase()){
case'submit':
case'hidden':
case'password':
case'text':
return Form.Element.Serializers.textarea(element);
case'checkbox':
case'radio':
return Form.Element.Serializers.inputSelector(element);
}
return false;
},
inputSelector:function(element){
if(element.checked)
return[element.name,element.value];
},
textarea:function(element){
return[element.name,element.value];
},
select:function(element){
return Form.Element.Serializers[element.type=='select-one'?
'selectOne':'selectMany'](element);
},
selectOne:function(element){
var value='',opt,index=element.selectedIndex;
if(index>=0){
opt=element.options[index];
value=opt.value;
if(!value&&!('value'in opt))
value=opt.text;
}
return[element.name,value];
},
selectMany:function(element){
var value=new Array();
for(var i=0;i<element.length;i++){
var opt=element.options[i];
if(opt.selected){
var optValue=opt.value;
if(!optValue&&!('value'in opt))
optValue=opt.text;
value.push(optValue);
}
}
return[element.name,value];
}
}
var $F=Form.Element.getValue;
Abstract.TimedObserver=function(){}
Abstract.TimedObserver.prototype={
initialize:function(element,frequency,callback){
this.frequency=frequency;
this.element=$(element);
this.callback=callback;
this.lastValue=this.getValue();
this.registerCallback();
},
registerCallback:function(){
setInterval(this.onTimerEvent.bind(this),this.frequency*1000);
},
onTimerEvent:function(){
var value=this.getValue();
if(this.lastValue!=value){
this.callback(this.element,value);
this.lastValue=value;
}
}
}
Form.Element.Observer=Class.create();
Form.Element.Observer.prototype=Object.extend(new Abstract.TimedObserver(),{
getValue:function(){
return Form.Element.getValue(this.element);
}
});
Form.Observer=Class.create();
Form.Observer.prototype=Object.extend(new Abstract.TimedObserver(),{
getValue:function(){
return Form.serialize(this.element);
}
});
Abstract.EventObserver=function(){}
Abstract.EventObserver.prototype={
initialize:function(element,callback){
this.element=$(element);
this.callback=callback;
this.lastValue=this.getValue();
if(this.element.tagName.toLowerCase()=='form')
this.registerFormCallbacks();
else
this.registerCallback(this.element);
},
onElementEvent:function(){
var value=this.getValue();
if(this.lastValue!=value){
this.callback(this.element,value);
this.lastValue=value;
}
},
registerFormCallbacks:function(){
var elements=Form.getElements(this.element);
for(var i=0;i<elements.length;i++)
this.registerCallback(elements[i]);
},
registerCallback:function(element){
if(element.type){
switch(element.type.toLowerCase()){
case'checkbox':
case'radio':
Event.observe(element,'click',this.onElementEvent.bind(this));
break;
case'password':
case'text':
case'textarea':
case'select-one':
case'select-multiple':
Event.observe(element,'change',this.onElementEvent.bind(this));
break;
}
}
}
}
Form.Element.EventObserver=Class.create();
Form.Element.EventObserver.prototype=Object.extend(new Abstract.EventObserver(),{
getValue:function(){
return Form.Element.getValue(this.element);
}
});
Form.EventObserver=Class.create();
Form.EventObserver.prototype=Object.extend(new Abstract.EventObserver(),{
getValue:function(){
return Form.serialize(this.element);
}
});
if(!window.Event){
var Event=new Object();
}
Object.extend(Event,{
KEY_BACKSPACE:8,
KEY_TAB:9,
KEY_RETURN:13,
KEY_ESC:27,
KEY_LEFT:37,
KEY_UP:38,
KEY_RIGHT:39,
KEY_DOWN:40,
KEY_DELETE:46,
element:function(event){
return event.target||event.srcElement;
},
isLeftClick:function(event){
return(((event.which)&&(event.which==1))||
((event.button)&&(event.button==1)));
},
pointerX:function(event){
return event.pageX||(event.clientX+
(document.documentElement.scrollLeft||document.body.scrollLeft));
},
pointerY:function(event){
return event.pageY||(event.clientY+
(document.documentElement.scrollTop||document.body.scrollTop));
},
cursorX:function(event){
return(event.pageX||event.clientX)+UD.window.scrollLeft;
},
cursorY:function(event){
return(event.pageY||event.clientY)+UD.window.scrollTop;
},
stop:function(event){
if(event.preventDefault){
event.preventDefault();
event.stopPropagation();
}else{
event.returnValue=false;
event.cancelBubble=true;
}
},
findElement:function(event,tagName){
var element=Event.element(event);
while(element.parentNode&&(!element.tagName||
(element.tagName.toUpperCase()!=tagName.toUpperCase())))
element=element.parentNode;
return element;
},
observers:false,
_observeAndCache:function(element,name,observer,useCapture){
if(!this.observers)this.observers=[];
if(element.addEventListener){
this.observers.push([element,name,observer,useCapture]);
element.addEventListener(name,observer,useCapture);
}else if(element.attachEvent){
this.observers.push([element,name,observer,useCapture]);
element.attachEvent('on'+name,observer);
}
},
unloadCache:function(){
if(!Event.observers)return;
for(var i=0;i<Event.observers.length;i++){
Event.stopObserving.apply(this,Event.observers[i]);
Event.observers[i][0]=null;
}
Event.observers=false;
},
observe:function(element,name,observer,useCapture){
var element=$(element);
useCapture=useCapture||false;
if(name=='keypress'&&
(navigator.appVersion.match(/Konqueror|Safari|KHTML/)
||element.attachEvent))
name='keydown';
this._observeAndCache(element,name,observer,useCapture);
},
stopObserving:function(element,name,observer,useCapture){
var element=$(element);
useCapture=useCapture||false;
if(name=='keypress'&&
(navigator.appVersion.match(/Konqueror|Safari|KHTML/)
||element.detachEvent))
name='keydown';
if(element.removeEventListener){
element.removeEventListener(name,observer,useCapture);
}else if(element.detachEvent){
element.detachEvent('on'+name,observer);
}
}
});
Event.observe(window,'unload',Event.unloadCache,false);
var Position={
includeScrollOffsets:false,
prepare:function(){
this.deltaX=window.pageXOffset
||document.documentElement.scrollLeft
||document.body.scrollLeft
||0;
this.deltaY=window.pageYOffset
||document.documentElement.scrollTop
||document.body.scrollTop
||0;
},
realOffset:function(element){
var valueT=0,valueL=0;
do{
valueT+=element.scrollTop||0;
valueL+=element.scrollLeft||0;
element=element.parentNode;
}while(element);
return[valueL,valueT];
},
cumulativeOffset:function(element){
var valueT=0,valueL=0;
do{
valueT+=element.offsetTop||0;
valueL+=element.offsetLeft||0;
element=element.offsetParent;
}while(element);
return[valueL,valueT];
},
positionedOffset:function(element){
var valueT=0,valueL=0;
do{
valueT+=element.offsetTop||0;
valueL+=element.offsetLeft||0;
element=element.offsetParent;
if(element){
p=Element.getStyle(element,'position');
if(p=='relative'||p=='absolute')break;
}
}while(element);
return[valueL,valueT];
},
offsetParent:function(element){
if(element.offsetParent)return element.offsetParent;
if(element==document.body)return element;
while((element=element.parentNode)&&element!=document.body)
if(Element.getStyle(element,'position')!='static')
return element;
return document.body;
},
within:function(element,x,y){
if(this.includeScrollOffsets)
return this.withinIncludingScrolloffsets(element,x,y);
this.xcomp=x;
this.ycomp=y;
this.offset=this.cumulativeOffset(element);
return(y>=this.offset[1]&&
y<this.offset[1]+element.offsetHeight&&
x>=this.offset[0]&&
x<this.offset[0]+element.offsetWidth);
},
withinIncludingScrolloffsets:function(element,x,y){
var offsetcache=this.realOffset(element);
this.xcomp=x+offsetcache[0]-this.deltaX;
this.ycomp=y+offsetcache[1]-this.deltaY;
this.offset=this.cumulativeOffset(element);
return(this.ycomp>=this.offset[1]&&
this.ycomp<this.offset[1]+element.offsetHeight&&
this.xcomp>=this.offset[0]&&
this.xcomp<this.offset[0]+element.offsetWidth);
},
overlap:function(mode,element){
if(!mode)return 0;
if(mode=='vertical')
return((this.offset[1]+element.offsetHeight)-this.ycomp)/
element.offsetHeight;
if(mode=='horizontal')
return((this.offset[0]+element.offsetWidth)-this.xcomp)/
element.offsetWidth;
},
clone:function(source,target){
source=$(source);
target=$(target);
target.style.position='absolute';
var offsets=this.cumulativeOffset(source);
target.style.top=offsets[1]+'px';
target.style.left=offsets[0]+'px';
target.style.width=source.offsetWidth+'px';
target.style.height=source.offsetHeight+'px';
},
page:function(forElement){
var valueT=0,valueL=0;
var element=forElement;
do{
valueT+=element.offsetTop||0;
valueL+=element.offsetLeft||0;
if(element.offsetParent==document.body)
if(Element.getStyle(element,'position')=='absolute')break;
}while(element=element.offsetParent);
element=forElement;
do{
valueT-=element.scrollTop||0;
valueL-=element.scrollLeft||0;
}while(element=element.parentNode);
return[valueL,valueT];
},
clone:function(source,target){
var options=Object.extend({
setLeft:true,
setTop:true,
setWidth:true,
setHeight:true,
offsetTop:0,
offsetLeft:0
},arguments[2]||{})
source=$(source);
var p=Position.page(source);
target=$(target);
var delta=[0,0];
var parent=null;
if(Element.getStyle(target,'position')=='absolute'){
parent=Position.offsetParent(target);
delta=Position.page(parent);
}
if(parent==document.body){
delta[0]-=document.body.offsetLeft;
delta[1]-=document.body.offsetTop;
}
if(options.setLeft)target.style.left=(p[0]-delta[0]+options.offsetLeft)+'px';
if(options.setTop)target.style.top=(p[1]-delta[1]+options.offsetTop)+'px';
if(options.setWidth)target.style.width=source.offsetWidth+'px';
if(options.setHeight)target.style.height=source.offsetHeight+'px';
},
absolutize:function(element){
element=$(element);
if(element.style.position=='absolute')return;
Position.prepare();
var offsets=Position.positionedOffset(element);
var top=offsets[1];
var left=offsets[0];
var width=element.clientWidth;
var height=element.clientHeight;
element._originalLeft=left-parseFloat(element.style.left||0);
element._originalTop=top-parseFloat(element.style.top||0);
element._originalWidth=element.style.width;
element._originalHeight=element.style.height;
element.style.position='absolute';
element.style.top=top+'px';;
element.style.left=left+'px';;
element.style.width=width+'px';;
element.style.height=height+'px';;
},
relativize:function(element){
element=$(element);
if(element.style.position=='relative')return;
Position.prepare();
element.style.position='relative';
var top=parseFloat(element.style.top||0)-(element._originalTop||0);
var left=parseFloat(element.style.left||0)-(element._originalLeft||0);
element.style.top=top+'px';
element.style.left=left+'px';
element.style.height=element._originalHeight;
element.style.width=element._originalWidth;
}
}
if(/Konqueror|Safari|KHTML/.test(navigator.userAgent)){
Position.cumulativeOffset=function(element){
var valueT=0,valueL=0;
do{
valueT+=element.offsetTop||0;
valueL+=element.offsetLeft||0;
if(element.offsetParent==document.body)
if(Element.getStyle(element,'position')=='absolute')break;
element=element.offsetParent;
}while(element);
return[valueL,valueT];
}
}
document.ready=function(callBack){
var _isRead=false;
var _c=function(){
if(!_isRead){
callBack();
_isRead=true;
}
};
var _b=navigator.userAgent.toLowerCase();
if((/mozilla/.test(_b)&&!/(compatible|webkit)/.test(_b))||(/opera/.test(_b))){
Event.observe(document,"DOMContentLoaded",_c);
}else if(/msie/.test(_b)&&!/opera/.test(_b)){
if(!this.__count)this.__count=0;
var _id='__ie_init'+this.__count++;
document.write("<scr"+"ipt id="+_id+" defer=true "+
"src=//:><\/script>");
var _s=$(_id);
if(_s){
_s.onreadystatechange=function(){
if(this.readyState!="complete")return;
this.parentNode.removeChild(this);
_c();
};
}
_s=null;
}else if(/webkit/.test(_b)){
var _i=setInterval(function(){
if(document.readyState=="loaded"||
document.readyState=="complete"){
clearInterval(_i);
_i=null;
_c();
}
},10);
}else{
Event.observe(window,"load",_c);
}
}
Element.getOpacity=function(element){
var opacity;
if(opacity=Element.getStyle(element,"opacity"))
return parseFloat(opacity);
if(opacity=(Element.getStyle(element,"filter")||'').match(/alpha\(opacity=(.*)\)/))
if(opacity[1])return parseFloat(opacity[1])/100;
return 1.0;
}
Element.setOpacity=function(element,value){
element=$(element);
var els=element.style;
if(value==1){
els.opacity='0.999999';
if(/MSIE/.test(navigator.userAgent))
els.filter=Element.getStyle(element,'filter').replace(/alpha\([^\)]*\)/gi,'');
}else{
if(value<0.00001)value=0;
els.opacity=value;
if(/MSIE/.test(navigator.userAgent))
els.filter=Element.getStyle(element,'filter').replace(/alpha\([^\)]*\)/gi,'')+
"alpha(opacity="+value*100+")";
}
}
Element.getInlineOpacity=function(element){
element=$(element);
var op;
op=element.style.opacity;
if(typeof op!="undefined"&&op!="")return op;
return"";
}
Element.setInlineOpacity=function(element,value){
element=$(element);
var els=element.style;
els.opacity=value;
}
Element.setStyle=function(element,style){
element=$(element);
for(k in style)element.style[k.camelize()]=style[k];
}
Element.childrenWithClassName=function(element,className){
return $A($(element).getElementsByTagName('*')).select(
function(c){return Element.hasClassName(c,className)});
}
Element.collectTextNodesIgnoreClass=function(element,className){
return $A($(element).childNodes).collect(function(node){
return(node.nodeType==3?node.nodeValue:
((node.hasChildNodes()&&!Element.hasClassName(node,className))?
Element.collectTextNodesIgnoreClass(node,className):''));
}).flatten().join('');
}
var Effect={
multiple:function(element,effect){
var elements;
if(((typeof element=='object')||
(typeof element=='function'))&&
(element.length))
elements=element;
else
elements=$(element).childNodes;
var options=Object.extend({
speed:0.1,
delay:0.0
},arguments[2]||{});
var speed=options.speed;
var delay=options.delay;
$A(elements).each(function(element,index){
new effect(element,Object.extend(options,{delay:delay+index*speed}));
});
}
};
var Effect2=Effect;
Effect.Transitions={}
Effect.Transitions.linear=function(pos){
return pos;
}
Effect.Transitions.sinoidal=function(pos){
return(-Math.cos(pos*Math.PI)/2)+0.5;
}
Effect.Transitions.reverse=function(pos){
return 1-pos;
}
Effect.Transitions.flicker=function(pos){
return((-Math.cos(pos*Math.PI)/4)+0.75)+Math.random()/4;
}
Effect.Transitions.wobble=function(pos){
return(-Math.cos(pos*Math.PI*(9*pos))/2)+0.5;
}
Effect.Transitions.pulse=function(pos){
return(Math.floor(pos*10)%2==0?
(pos*10-Math.floor(pos*10)):1-(pos*10-Math.floor(pos*10)));
}
Effect.Transitions.none=function(pos){
return 0;
}
Effect.Transitions.full=function(pos){
return 1;
}
Effect.Queue={
effects:[],
_each:function(iterator){
this.effects._each(iterator);
},
interval:null,
add:function(effect){
var timestamp=new Date().getTime();
switch(effect.options.queue){
case'front':
this.effects.findAll(function(e){return e.state=='idle'}).each(function(e){
e.startOn+=effect.finishOn;
e.finishOn+=effect.finishOn;
});
break;
case'end':
timestamp=this.effects.pluck('finishOn').max()||timestamp;
break;
}
effect.startOn+=timestamp;
effect.finishOn+=timestamp;
this.effects.push(effect);
if(!this.interval)
this.interval=setInterval(this.loop.bind(this),40);
},
remove:function(effect){
this.effects=this.effects.reject(function(e){return e==effect});
if(this.effects.length==0){
clearInterval(this.interval);
this.interval=null;
}
},
loop:function(){
var timePos=new Date().getTime();
this.effects.invoke('loop',timePos);
}
}
Object.extend(Effect.Queue,Enumerable);
Effect.Base=function(){};
Effect.Base.prototype={
position:null,
setOptions:function(options){
this.options=Object.extend({
transition:Effect.Transitions.sinoidal,
duration:1.0,
fps:25.0,
sync:false,
from:0.0,
to:1.0,
delay:0.0,
queue:'parallel'
},options||{});
},
start:function(options){
this.setOptions(options||{});
this.currentFrame=0;
this.state='idle';
this.startOn=this.options.delay*1000;
this.finishOn=this.startOn+(this.options.duration*1000);
this.event('beforeStart');
var bAdd=true;
if(this.options.stateId){
bAdd=this.startState();
if(typeof this.options.succObj=="object")
this.options.succObj.success=bAdd;
}
if(!this.options.sync&&bAdd)Effect.Queue.add(this);
},
loop:function(timePos){
if(timePos>=this.startOn){
if(timePos>=this.finishOn){
this.render(1.0);
this.cancel();
this.event('beforeFinish');
if(this.finish)this.finish();
this.event('afterFinish');
if(this.options.stateId)this.finishState();
if(this.options.userCallBack)this.options.userCallBack();
return;
}
var pos=(timePos-this.startOn)/(this.finishOn-this.startOn);
var frame=Math.round(pos*this.options.fps*this.options.duration);
if(frame>this.currentFrame){
this.render(pos);
this.currentFrame=frame;
}
}
},
render:function(pos){
if(this.state=='idle'){
this.state='running';
this.event('beforeSetup');
if(this.setup)this.setup();
this.event('afterSetup');
}
if(this.options.transition)pos=this.options.transition(pos);
pos*=(this.options.to-this.options.from);
pos+=this.options.from;
this.position=pos;
this.event('beforeUpdate');
if(this.update)this.update(pos);
this.event('afterUpdate');
},
cancel:function(){
if(!this.options.sync)Effect.Queue.remove(this);
this.state='finished';
},
event:function(eventName){
if(this.options[eventName+'Internal'])this.options[eventName+'Internal'](this);
if(this.options[eventName])this.options[eventName](this);
},
startState:function(){
if(!this.element._state){
this.element._state="running";
return true;
}
else if(this.element._state=="running")
return false;
else{
this.element._state="running";
return true;
}
},
finishState:function(){
this.element._state="finished";
}
}
Effect.Opacity=Class.create();
Object.extend(Object.extend(Effect.Opacity.prototype,Effect.Base.prototype),{
initialize:function(element){
this.element=$(element);
if(/MSIE/.test(navigator.userAgent)&&(!this.element.hasLayout))
this.element.style.zoom=1;
var options=Object.extend({
from:Element.getOpacity(this.element)||0.0,
to:1.0
},arguments[1]||{});
this.start(options);
},
update:function(position){
Element.setOpacity(this.element,position);
}
});
Effect.Move=Class.create();
Object.extend(Object.extend(Effect.Move.prototype,Effect.Base.prototype),{
initialize:function(element){
this.element=$(element);
var options=Object.extend({
x:0,
y:0,
mode:'relative'
},arguments[1]||{});
this.start(options);
},
setup:function(){
Element.makePositioned(this.element);
this.originalLeft=parseFloat(Element.getStyle(this.element,'left')||'0');
this.originalTop=parseFloat(Element.getStyle(this.element,'top')||'0');
if(this.options.mode=='absolute'){
this.options.x=this.options.x-this.originalLeft;
this.options.y=this.options.y-this.originalTop;
}
},
update:function(position){
Element.setStyle(this.element,{
left:this.options.x*position+this.originalLeft+'px',
top:this.options.y*position+this.originalTop+'px'
});
}
});
Effect.MoveBy=Class.create();
Object.extend(Object.extend(Effect.MoveBy.prototype,Effect.Base.prototype),{
initialize:function(element,toTop,toLeft){
this.element=$(element);
this.toTop=toTop;
this.toLeft=toLeft;
this.start(arguments[3]);
},
setup:function(){
Element.makePositioned(this.element);
this.originalTop=parseFloat(Element.getStyle(this.element,'top')||'0');
this.originalLeft=parseFloat(Element.getStyle(this.element,'left')||'0');
},
update:function(position){
var topd=this.toTop*position+this.originalTop;
var leftd=this.toLeft*position+this.originalLeft;
this.setPosition(topd,leftd);
},
setPosition:function(topd,leftd){
this.element.style.top=topd+"px";
this.element.style.left=leftd+"px";
}
});
Effect.Scale=Class.create();
Object.extend(Object.extend(Effect.Scale.prototype,Effect.Base.prototype),{
initialize:function(element,percent){
this.element=$(element)
var options=Object.extend({
scaleX:true,
scaleY:true,
scaleContent:true,
scaleFromCenter:false,
scaleMode:'box',
scaleFrom:100.0,
scaleTo:percent
},arguments[2]||{});
this.start(options);
},
setup:function(){
var effect=this;
this.restoreAfterFinish=this.options.restoreAfterFinish||false;
this.elementPositioning=Element.getStyle(this.element,'position');
effect.originalStyle={};
['top','left','width','height','fontSize'].each(function(k){
effect.originalStyle[k]=effect.element.style[k];
});
this.originalTop=this.element.offsetTop;
this.originalLeft=this.element.offsetLeft;
var fontSize=Element.getStyle(this.element,'font-size')||"100%";
['em','px','%'].each(function(fontSizeType){
if(fontSize.indexOf(fontSizeType)>0){
effect.fontSize=parseFloat(fontSize);
effect.fontSizeType=fontSizeType;
}
});
this.factor=(this.options.scaleTo-this.options.scaleFrom)/100;
this.dims=null;
if(this.options.scaleMode=='box'){
if(/MSIE/.test(navigator.userAgent)){
var width=(this.element.clientWidth=="")?this.element.scrollHeight:this.element.clientWidth;
var height=(this.element.clientHeight=="")?this.element.scrollHeight:this.element.clientHeight;
this.dims=[height,width];
}
else
this.dims=[this.element.clientHeight,this.element.clientWidth];
}
if(/^content/.test(this.options.scaleMode))
this.dims=[this.element.scrollHeight,this.element.scrollWidth];
if(!this.dims)
this.dims=[this.options.scaleMode.originalHeight,
this.options.scaleMode.originalWidth];
},
update:function(position){
var currentScale=(this.options.scaleFrom/100.0)+(this.factor*position);
if(this.options.scaleContent&&this.fontSize)
this.element.style.fontSize=this.fontSize*currentScale+this.fontSizeType;
this.setDimensions(this.dims[0]*currentScale,this.dims[1]*currentScale);
},
finish:function(position){
if(this.restoreAfterFinish){
var effect=this;
['top','left','width','height','fontSize'].each(function(k){
effect.element.style[k]=effect.originalStyle[k];
});
}
},
setDimensions:function(height,width){
var els=this.element.style;
if(this.options.scaleX)els.width=width+'px';
if(this.options.scaleY){
if(/MSIE/.test(navigator.userAgent))
if(height<1)height=1;
els.height=height+'px';
}
if(this.options.scaleFromCenter){
var topd=(height-this.dims[0])/2;
var leftd=(width-this.dims[1])/2;
if(this.elementPositioning=='absolute'){
if(this.options.scaleY)els.top=this.originalTop-topd+"px";
if(this.options.scaleX)els.left=this.originalLeft-leftd+"px";
}else{
if(this.options.scaleY)els.top=-topd+"px";
if(this.options.scaleX)els.left=-leftd+"px";
}
}
}
});
Effect.ScrollTo=Class.create();
Object.extend(Object.extend(Effect.ScrollTo.prototype,Effect.Base.prototype),{
initialize:function(element){
this.element=$(element);
this.start(arguments[1]||{});
},
setup:function(){
Position.prepare();
var offsets=Position.cumulativeOffset(this.element);
var max=window.innerHeight?
window.height-window.innerHeight:
document.body.scrollHeight-
(document.documentElement.clientHeight?
document.documentElement.clientHeight:document.body.clientHeight);
this.scrollStart=Position.deltaY;
this.delta=(offsets[1]>max?max:offsets[1])-this.scrollStart;
},
update:function(position){
UD.window.scrollTop=Position.cumulativeOffset(this.element)[1];
}
});
Effect.Fade=function(element){
var oldOpacity=Element.getInlineOpacity(element);
var options=Object.extend({
from:Element.getOpacity(element)||1.0,
to:0.0,
afterFinishInternal:function(effect)
{if(effect.options.to==0){
Element.hide(effect.element);
Element.setInlineOpacity(effect.element,oldOpacity);
}
}
},arguments[1]||{});
return new Effect.Opacity(element,options);
}
Effect.Appear=function(element){
var options=Object.extend({
from:(Element.getStyle(element,"display")=="none"?0.0:Element.getOpacity(element)||0.0),
to:1.0,
beforeSetup:function(effect){
Element.setOpacity(effect.element,effect.options.from);
Element.show(effect.element);}
},arguments[1]||{});
return new Effect.Opacity(element,options);
}
Effect.BlindUp=function(element){
element=$(element);
Element.makeClipping(element);
return new Effect.Scale(element,0,
Object.extend({scaleContent:false,
scaleX:false,
restoreAfterFinish:true,
afterFinishInternal:function(effect)
{
Element.hide(effect.element);
Element.undoClipping(effect.element);
}
},arguments[1]||{})
);
}
Effect.BlindDown=function(element){
element=$(element);
var oldHeight=element.style.height;
var elementDimensions=Element.getDimensions(element);
return new Effect.Scale(element,100,
Object.extend({scaleContent:false,
scaleX:false,
scaleFrom:0,
scaleMode:{originalHeight:elementDimensions.height,originalWidth:elementDimensions.width},
restoreAfterFinish:true,
afterSetup:function(effect){
Element.makeClipping(effect.element);
if(/MSIE/.test(navigator.userAgent))
effect.element.style.height="1px";
else
effect.element.style.height="0px";
Element.show(effect.element);
},
afterFinishInternal:function(effect){
Element.undoClipping(effect.element);
effect.element.style.height=oldHeight;
}
},arguments[1]||{})
);
}
Effect.SlideDown=function(element){
element=$(element);
Element.cleanWhitespace(element);
var oldInnerBottom=element.firstChild.style.bottom;
var elementDimensions=Element.getDimensions(element);
return new Effect.Scale(element,100,
Object.extend({scaleContent:false,
scaleX:false,
scaleFrom:0,
scaleMode:{originalHeight:elementDimensions.height,originalWidth:elementDimensions.width},
restoreAfterFinish:true,
afterSetup:function(effect){
Element.makePositioned(effect.element.firstChild);
if(window.opera)effect.element.firstChild.style.top="";
Element.makeClipping(effect.element);
element.style.height='0';
Element.show(element);
},
afterFinishInternal:function(effect){
Element.undoClipping(effect.element);
Element.undoPositioned(effect.element.firstChild);
effect.element.firstChild.style.bottom=oldInnerBottom;
}
},arguments[1]||{})
);
}
Effect.SlideUp=function(element){
element=$(element);
Element.cleanWhitespace(element);
var oldInnerBottom=element.firstChild.style.bottom;
return new Effect.Scale(element,0,
Object.extend({scaleContent:false,
scaleX:false,
scaleMode:'box',
scaleFrom:100,
restoreAfterFinish:true,
beforeStartInternal:function(effect){
Element.makePositioned(effect.element.firstChild);
if(window.opera)effect.element.firstChild.style.top="";
Element.makeClipping(effect.element);
Element.show(element);
},
afterFinishInternal:function(effect){
Element.hide(effect.element);
Element.undoClipping(effect.element);
Element.undoPositioned(effect.element.firstChild);
effect.element.firstChild.style.bottom=oldInnerBottom;}
},arguments[1]||{})
);
}
Effect.SlideRight=function(element){
element=$(element);
Element.cleanWhitespace(element);
var oldInnerRight=element.firstChild.style.right;
var elementDimensions=Element.getDimensions(element);
return new Effect.Scale(element,100,
Object.extend({scaleContent:false,
scaleY:false,
scaleFrom:0,
scaleMode:{originalHeight:elementDimensions.height,originalWidth:elementDimensions.width},
restoreAfterFinish:true,
afterSetup:function(effect){
Element.makePositioned(effect.element.firstChild);
if(window.opera)effect.element.firstChild.style.top="";
Element.makeClipping(effect.element);
Element.show(element);
},
afterFinishInternal:function(effect){
Element.undoClipping(effect.element);
Element.undoPositioned(effect.element.firstChild);
effect.element.firstChild.style.right=oldInnerRight;
}
},arguments[1]||{})
);
}
Effect.SlideLeft=function(element){
element=$(element);
Element.cleanWhitespace(element);
var oldInnerRight=element.firstChild.style.right;
return new Effect.Scale(element,0,
Object.extend({scaleContent:false,
scaleY:false,
scaleMode:'box',
scaleFrom:100,
restoreAfterFinish:true,
beforeStartInternal:function(effect){
Element.makePositioned(effect.element.firstChild);
if(window.opera)effect.element.firstChild.style.top="";
Element.makeClipping(effect.element);
Element.show(element);
},
afterFinishInternal:function(effect){
Element.hide(effect.element);
Element.undoClipping(effect.element);
Element.undoPositioned(effect.element.firstChild);
effect.element.firstChild.style.right=oldInnerRight;
}
},arguments[1]||{})
);
}
var Logger={
debug:function(message){
},
info:function(message){
},
warn:function(message){
},
error:function(message){
}
}
function Sarissa(){};
Sarissa.PARSED_OK="Document contains no parsing errors";
Sarissa.IS_ENABLED_TRANSFORM_NODE=false;
Sarissa.IS_ENABLED_XMLHTTP=false;
Sarissa.IS_ENABLED_SELECT_NODES=false;
var _sarissa_iNsCounter=0;
var _SARISSA_IEPREFIX4XSLPARAM="";
var _SARISSA_HAS_DOM_IMPLEMENTATION=document.implementation&&true;
var _SARISSA_HAS_DOM_CREATE_DOCUMENT=_SARISSA_HAS_DOM_IMPLEMENTATION&&document.implementation.createDocument;
var _SARISSA_HAS_DOM_FEATURE=_SARISSA_HAS_DOM_IMPLEMENTATION&&document.implementation.hasFeature;
var _SARISSA_IS_MOZ=_SARISSA_HAS_DOM_CREATE_DOCUMENT&&_SARISSA_HAS_DOM_FEATURE;
var _SARISSA_IS_SAFARI=(navigator.userAgent&&navigator.vendor&&(navigator.userAgent.toLowerCase().indexOf("applewebkit")!=-1||navigator.vendor.indexOf("Apple")!=-1));
var _SARISSA_IS_IE=document.all&&window.ActiveXObject&&navigator.userAgent.toLowerCase().indexOf("msie")>-1&&navigator.userAgent.toLowerCase().indexOf("opera")==-1;
if(!window.Node||!window.Node.ELEMENT_NODE){
var Node={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12};
};
if(_SARISSA_IS_IE){
_SARISSA_IEPREFIX4XSLPARAM="xsl:";
var _SARISSA_DOM_PROGID="";
var _SARISSA_XMLHTTP_PROGID="";
pickRecentProgID=function(idList,enabledList){
var bFound=false;
for(var i=0;i<idList.length&&!bFound;i++){
try{
var oDoc=new ActiveXObject(idList[i]);
o2Store=idList[i];
bFound=true;
for(var j=0;j<enabledList.length;j++)
if(i<=enabledList[j][1])
Sarissa["IS_ENABLED_"+enabledList[j][0]]=true;
}catch(objException){
};
};
if(!bFound)
throw"Could not retreive a valid progID of Class: "+idList[idList.length-1]+". (original exception: "+e+")";
idList=null;
return o2Store;
};
_SARISSA_DOM_PROGID=pickRecentProgID(["Msxml2.DOMDocument.3.0","Msxml2.DOMDocument.4.0","Msxml2.DOMDocument.5.0","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XMLDOM"],[["SELECT_NODES",2],["TRANSFORM_NODE",2]]);
_SARISSA_XMLHTTP_PROGID=pickRecentProgID(["Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],[["XMLHTTP",4]]);
_SARISSA_THREADEDDOM_PROGID=pickRecentProgID(["Msxml2.FreeThreadedDOMDocument.3.0","MSXML2.FreeThreadedDOMDocument.4.0","MSXML2.FreeThreadedDOMDocument.5.0"]);
_SARISSA_XSLTEMPLATE_PROGID=pickRecentProgID(["Msxml2.XSLTemplate.3.0","Msxml2.XSLTemplate.4.0","MSXML2.XSLTemplate.5.0"],[["XSLTPROC",2]]);
pickRecentProgID=null;
Sarissa.getDomDocument=function(sUri,sName){
var oDoc=new ActiveXObject(_SARISSA_DOM_PROGID);
if(sName){
if(sUri){
oDoc.loadXML("<a"+_sarissa_iNsCounter+":"+sName+" xmlns:a"+_sarissa_iNsCounter+"=\""+sUri+"\" />");
++_sarissa_iNsCounter;
}
else
oDoc.loadXML("<"+sName+"/>");
};
return oDoc;
};
Sarissa.getParseErrorText=function(oDoc){
var parseErrorText=Sarissa.PARSED_OK;
if(oDoc.parseError!=0){
parseErrorText="XML Parsing Error: "+oDoc.parseError.reason+
"\nLocation: "+oDoc.parseError.url+
"\nLine Number "+oDoc.parseError.line+", Column "+
oDoc.parseError.linepos+
":\n"+oDoc.parseError.srcText+
"\n";
for(var i=0;i<oDoc.parseError.linepos;i++){
parseErrorText+="-";
};
parseErrorText+="^\n";
};
return parseErrorText;
};
Sarissa.setXpathNamespaces=function(oDoc,sNsSet){
oDoc.setProperty("SelectionLanguage","XPath");
oDoc.setProperty("SelectionNamespaces",sNsSet);
};
XSLTProcessor=function(){
this.template=new ActiveXObject(_SARISSA_XSLTEMPLATE_PROGID);
this.processor=null;
};
XSLTProcessor.prototype.importStylesheet=function(xslDoc){
var converted=new ActiveXObject(_SARISSA_THREADEDDOM_PROGID);
converted.loadXML(xslDoc.xml);
this.template.stylesheet=converted;
this.processor=this.template.createProcessor();
this.paramsSet=new Array();
};
XSLTProcessor.prototype.transformToDocument=function(sourceDoc){
this.processor.input=sourceDoc;
var outDoc=new ActiveXObject(_SARISSA_DOM_PROGID);
this.processor.output=outDoc;
this.processor.transform();
return outDoc;
};
XSLTProcessor.prototype.setParameter=function(nsURI,name,value){
if(nsURI){
this.processor.addParameter(name,value,nsURI);
}else{
this.processor.addParameter(name,value);
};
if(!this.paramsSet[""+nsURI]){
this.paramsSet[""+nsURI]=new Array();
};
this.paramsSet[""+nsURI][name]=value;
};
XSLTProcessor.prototype.getParameter=function(nsURI,name){
nsURI=nsURI||"";
if(nsURI in this.paramsSet&&name in this.paramsSet[nsURI]){
return this.paramsSet[nsURI][name];
}else{
return null;
};
};
}
else{
if(_SARISSA_HAS_DOM_CREATE_DOCUMENT){
Sarissa.__handleLoad__=function(oDoc){
if(!oDoc.documentElement||oDoc.documentElement.tagName=="parsererror")
oDoc.parseError=-1;
Sarissa.__setReadyState__(oDoc,4);
};
_sarissa_XMLDocument_onload=function(){
Sarissa.__handleLoad__(this);
};
Sarissa.__setReadyState__=function(oDoc,iReadyState){
oDoc.readyState=iReadyState;
if(oDoc.onreadystatechange!=null&&typeof oDoc.onreadystatechange=="function")
oDoc.onreadystatechange();
};
Sarissa.getDomDocument=function(sUri,sName){
var oDoc=document.implementation.createDocument(sUri?sUri:"",sName?sName:"",null);
oDoc.addEventListener("load",_sarissa_XMLDocument_onload,false);
return oDoc;
};
if(window.XMLDocument){
XMLDocument.prototype.onreadystatechange=null;
XMLDocument.prototype.readyState=0;
XMLDocument.prototype.parseError=0;
var _SARISSA_SYNC_NON_IMPLEMENTED=false;
XMLDocument.prototype._sarissa_load=XMLDocument.prototype.load;
XMLDocument.prototype.load=function(sURI){
var oDoc=document.implementation.createDocument("","",null);
Sarissa.copyChildNodes(this,oDoc);
this.parseError=0;
Sarissa.__setReadyState__(this,1);
try{
if(this.async==false&&_SARISSA_SYNC_NON_IMPLEMENTED){
var tmp=new XMLHttpRequest();
tmp.open("GET",sURI,false);
tmp.send(null);
Sarissa.__setReadyState__(this,2);
Sarissa.copyChildNodes(tmp.responseXML,this);
Sarissa.__setReadyState__(this,3);
}
else{
this._sarissa_load(sURI);
};
}
catch(objException){
this.parseError=-1;
}
finally{
if(this.async==false){
Sarissa.__handleLoad__(this);
};
};
return oDoc;
};
}
else if(document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature('LS','3.0')){
Document.prototype.async=true;
Document.prototype.onreadystatechange=null;
Document.prototype.parseError=0;
Document.prototype.load=function(sURI){
var parser=document.implementation.createLSParser(this.async?document.implementation.MODE_ASYNCHRONOUS:document.implementation.MODE_SYNCHRONOUS,null);
if(this.async){
var self=this;
parser.addEventListener("load",
function(e){
self.readyState=4;
Sarissa.copyChildNodes(e.newDocument,self.documentElement,false);
self.onreadystatechange.call();
},
false);
};
try{
var oDoc=parser.parseURI(sURI);
}
catch(e){
this.parseError=-1;
};
if(!this.async)
Sarissa.copyChildNodes(oDoc,this.documentElement,false);
return oDoc;
};
Sarissa.getDomDocument=function(sUri,sName){
return document.implementation.createDocument(sUri?sUri:"",sName?sName:"",null);
};
};
};
};
if(!window.DOMParser){
DOMParser=function(){
};
if(_SARISSA_IS_SAFARI){
DOMParser.prototype.parseFromString=function(sXml,contentType){
if(contentType.toLowerCase()!="application/xml"){
throw"Cannot handle content type: \""+contentType+"\"";
};
var xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","data:text/xml;charset=utf-8,"+encodeURIComponent(str),false);
xmlhttp.send(null);
return xmlhttp.responseXML;
};
}else if(Sarissa.getDomDocument&&Sarissa.getDomDocument()&&"loadXML"in Sarissa.getDomDocument()){
DOMParser.prototype.parseFromString=function(sXml,contentType){
var doc=Sarissa.getDomDocument();
doc.loadXML(sXml);
return doc;
};
};
};
if(window.XMLHttpRequest){
Sarissa.IS_ENABLED_XMLHTTP=true;
}
else if(_SARISSA_IS_IE){
XMLHttpRequest=function(){
return new ActiveXObject(_SARISSA_XMLHTTP_PROGID);
};
Sarissa.IS_ENABLED_XMLHTTP=true;
};
if(!window.document.importNode&&_SARISSA_IS_IE){
try{
window.document.importNode=function(oNode,bChildren){
var importNode=document.createElement("div");
if(bChildren)
importNode.innerHTML=Sarissa.serialize(oNode);
else
importNode.innerHTML=Sarissa.serialize(oNode.cloneNode(false));
return importNode.firstChild;
};
}catch(e){};
};
if(!Sarissa.getParseErrorText){
Sarissa.getParseErrorText=function(oDoc){
var parseErrorText=Sarissa.PARSED_OK;
if(oDoc&&oDoc.parseError&&oDoc.parseError!=0){
if(oDoc.documentElement.tagName=="parsererror"){
parseErrorText=oDoc.documentElement.firstChild.data;
parseErrorText+="\n"+oDoc.documentElement.firstChild.nextSibling.firstChild.data;
}
else{
parseErrorText=Sarissa.getText(oDoc.documentElement);
};
};
return parseErrorText;
};
};
Sarissa.getText=function(oNode,deep){
var s="";
var nodes=oNode.childNodes;
for(var i=0;i<nodes.length;i++){
var node=nodes[i];
var nodeType=node.nodeType;
if(nodeType==Node.TEXT_NODE||nodeType==Node.CDATA_SECTION_NODE){
s+=node.data;
}else if(deep==true
&&(nodeType==Node.ELEMENT_NODE
||nodeType==Node.DOCUMENT_NODE
||nodeType==Node.DOCUMENT_FRAGMENT_NODE)){
s+=Sarissa.getText(node,true);
};
};
return s;
};
if(window.XMLSerializer){
Sarissa.serialize=function(oDoc){
var s=null;
if(oDoc){
s=oDoc.innerHTML?oDoc.innerHTML:(new XMLSerializer()).serializeToString(oDoc);
};
return s;
};
}else{
if(Sarissa.getDomDocument&&(Sarissa.getDomDocument("","foo",null)).xml){
Sarissa.serialize=function(oDoc){
var s=null;
if(oDoc){
s=oDoc.innerHTML?oDoc.innerHTML:oDoc.xml;
};
return s;
};
XMLSerializer=function(){};
XMLSerializer.prototype.serializeToString=function(oNode){
return oNode.xml;
};
};
};
Sarissa.stripTags=function(s){
return s.replace(/<[^>]+>/g,"");
};
Sarissa.clearChildNodes=function(oNode){
while(oNode.firstChild){
oNode.removeChild(oNode.firstChild);
};
};
Sarissa.copyChildNodes=function(nodeFrom,nodeTo,bPreserveExisting){
if((!nodeFrom)||(!nodeTo)){
throw"Both source and destination nodes must be provided";
};
if(!bPreserveExisting){
Sarissa.clearChildNodes(nodeTo);
};
var ownerDoc=nodeTo.nodeType==Node.DOCUMENT_NODE?nodeTo:nodeTo.ownerDocument;
var nodes=nodeFrom.childNodes;
if(ownerDoc.importNode&&(!_SARISSA_IS_IE)){
for(var i=0;i<nodes.length;i++){
nodeTo.appendChild(ownerDoc.importNode(nodes[i],true));
};
}
else{
for(var i=0;i<nodes.length;i++){
nodeTo.appendChild(nodes[i].cloneNode(true));
};
};
};
Sarissa.moveChildNodes=function(nodeFrom,nodeTo,bPreserveExisting){
if((!nodeFrom)||(!nodeTo)){
throw"Both source and destination nodes must be provided";
};
if(!bPreserveExisting){
Sarissa.clearChildNodes(nodeTo);
};
var nodes=nodeFrom.childNodes;
if(nodeFrom.ownerDocument==nodeTo.ownerDocument){
while(nodeFrom.firstChild){
nodeTo.appendChild(nodeFrom.firstChild);
};
}else{
var ownerDoc=nodeTo.nodeType==Node.DOCUMENT_NODE?nodeTo:nodeTo.ownerDocument;
if(ownerDoc.importNode&&(!_SARISSA_IS_IE)){
for(var i=0;i<nodes.length;i++){
nodeTo.appendChild(ownerDoc.importNode(nodes[i],true));
};
}else{
for(var i=0;i<nodes.length;i++){
nodeTo.appendChild(nodes[i].cloneNode(true));
};
};
Sarissa.clearChildNodes(nodeFrom);
};
};
Sarissa.xmlize=function(anyObject,objectName,indentSpace){
indentSpace=indentSpace?indentSpace:'';
var s=indentSpace+'<'+objectName+'>';
var isLeaf=false;
if(!(anyObject instanceof Object)||anyObject instanceof Number||anyObject instanceof String
||anyObject instanceof Boolean||anyObject instanceof Date){
s+=Sarissa.escape(""+anyObject);
isLeaf=true;
}else{
s+="\n";
var itemKey='';
var isArrayItem=anyObject instanceof Array;
for(var name in anyObject){
s+=Sarissa.xmlize(anyObject[name],(isArrayItem?"array-item key=\""+name+"\"":name),indentSpace+"   ");
};
s+=indentSpace;
};
return s+=(objectName.indexOf(' ')!=-1?"</array-item>\n":"</"+objectName+">\n");
};
Sarissa.escape=function(sXml){
return sXml.replace(/&/g,"&amp;")
.replace(/</g,"&lt;")
.replace(/>/g,"&gt;")
.replace(/"/g,"&quot;")
.replace(/'/g,"&apos;");
};
Sarissa.unescape=function(sXml){
return sXml.replace(/&apos;/g,"'")
.replace(/&quot;/g,"\"")
.replace(/&gt;/g,">")
.replace(/&lt;/g,"<")
.replace(/&amp;/g,"&");
};
if(NetEase==undefined){
var NetEase={};
}
NetEase.CrossDomainRequest=Class.create();
NetEase.CrossDomainRequest.prototype={
initialize:function(url,options){
this.url=url;
this.options=Object.extend({charset:'utf-8'},options||{});
if(/^https?:\/\/.+$/i.test(url)){
NetEase.LoadStaticJS.request(null,this.url,this.options.parameters,function(reply){
this.options.onComplete((typeof reply=="object")?reply:{responseText:reply});
}.bind(this),this.options.charset);
}else{
new Ajax.Request(this.url,this.options);
}
}
}
NetEase.LoadStaticJS={_index:0,_handles:{}};
NetEase.LoadStaticJS.request=function(key,url,params,callback,charset){
key=key||'LoadStaticJS-'+this._index++;
this._handles[key]=callback;
var script=document.createElement("script");
if(charset){
script.setAttribute("charset",charset);
}
script.src=this._genUrl(key,url,params);
document.body.appendChild(script);
}
NetEase.LoadStaticJS.genVersionByDay=function(day){
if(!day)day=1;
var _baseTime=new Date(2007,9,1).getTime();
var _nowTime=new Date();
_nowTime=new Date(_nowTime.getFullYear(),_nowTime.getMonth(),_nowTime.getDate()).getTime();
var _diffTime=(_nowTime-_baseTime)<0?0:(_nowTime-_baseTime);
var _version=Math.floor(_diffTime/(day*24*3600000))+1000+'';
if(_version.length!=4)_version='';
return _version;
}
NetEase.LoadStaticJS._remoteCallBack=function(key,reply){
if(this._handles[key]){
this._handles[key](reply);
this._handles[key]=null;
}
}
NetEase.LoadStaticJS._genUrl=function(key,url,params){
if(url==null){alert("url can't be null!");return;}
url+=(url.indexOf('?')>0)?'&':'?';
if(params){
if(typeof params=="object"){
for(var p in params){
if(typeof params[p]!="function"){
url+=encodeURIComponent(p)+"="+encodeURIComponent(params[p])+"&";
}
}
}else if(typeof params!="function"){
url+=params+"&";
}
}
url+='&_request=x&_jsonType=2&_key='+encodeURIComponent(key);
return url;
}
var Browser={};
Browser.isIE=function(){
return(document.all&&window.ActiveXObject)?true:false;
};
Browser.isIE5Up=function(){
return(Browser.isIE()&&document.getElementById)?true:false;
};
Browser.isIE6=function(){
return Browser.isIE()&&(!Browser.isIE7());
}
Browser.isIE7=function(){
var ua=navigator.userAgent;
var msieOffset=ua.indexOf("MSIE ");
if(msieOffset<0)
{
return 0;
}
var num=parseFloat(ua.substring(msieOffset+5,ua.indexOf(";",msieOffset)));
return num==7;
}
Browser.isFirefox=function(){
return(document.implementation&&document.implementation.createDocument&&!window.opera)?true:false;
};
Browser.isFirefox1_5=function(){
return window.navigator.userAgent.indexOf('Firefox/1.5')!=-1;
};
Browser.isFirefox2Up=function(){
return window.navigator.userAgent.indexOf('Firefox/2')!=-1;
};
Browser.isOpera=function(){
return(window.opera)?true:false;
};
window.register=function(sNameSpace){
if(!sNameSpace||!sNameSpace.length){
return null;
}
var _lvl=sNameSpace.split(".");
var _rtn=window;
for(var i=(_lvl[0]=="window")?1:0,l=_lvl.length;i<l;i++){
_rtn=_rtn[_lvl[i]]=_rtn[_lvl[i]]||{};
}
return _rtn;
};
window.extend=function(fnSubclass,fnSuperclass,sClassName){
var _p=fnSubclass.prototype=new fnSuperclass;
_p.subClass=fnSubclass;
_p.supClass=fnSuperclass;
_p.className=sClassName||'';
};
register("netease.ui.module");
netease.ui.module.Configuration=
{
HtmlTemplate:{
Module:'<div class="mdl mt bd00"></div>',
ModuleTitleBar:'<div class="mdl_t mt c03"><div class="mdl_t_l">&nbsp;</div><div class="mdl_t_r">&nbsp;</div><div class="mdl_t_c"></div><div class="mdl_t_m"></div></div>',
ModuleMenuBar:'<div class="mdl_n h2 mt"><div class="mdl_n_l h2">&nbsp;</div><div class="mdl_n_r h2">&nbsp;</div><div class="mdl_n_c h2 c04"></div></div>',
ModuleContent:'<div class="mdl_c mt g_p_hide"><div class="mdl_c_l g_p_fill">&nbsp;</div><div class="mdl_c_r g_p_fill">&nbsp;</div><div class="mdl_c_c"></div></div>',
ModuleBottomBar:'<div class="mdl_b mt"><div class="mdl_b_l">&nbsp;</div><div class="mdl_b_r">&nbsp;</div><div class="mdl_b_c">&nbsp;</div></div>',
BlankContent:'<span class="g_p_none">&nbsp;</span>',
SimpleMenuBar:'<div class="g_h_25"></div>',
SimpleContent:'<div class="mdl_c mt g_p_hide"><div class="mdl_c_l g_p_fill">&nbsp;</div><div class="mdl_c_r g_p_fill">&nbsp;</div><div class="mdl_c_c"><div class="mdl_m_t"></div><div class="mdl_m_c"></div><div class="mdl_m_b"></div></div></div>',
SimpleModule:'<div class="mdl simple"></div>',
SimpleModuleContent:'<div>&nbsp;</div>'
},
CssControl:{HideElm:'g_p_none',widCss:'g_css_hom_k',Opacity:/\bmt\b/gi},
HitWord:{Loading:'数据加载中...'},
getTMP:function(){
var _o=netease.ui.module.Configuration._TEMPLATE;
if(!_o){
_o=netease.ui.module.Configuration._TEMPLATE=document.createElement("div");
_o.className="mdl_c_c";
_o.appendChild(document.createTextNode(" "));
}
return _o.cloneNode(true);
}
};
netease.ui.module.AbstractComponent=function(){
this._body=this._getTemplate();
};
netease.ui.module.AbstractComponent.prototype=
{
_body:null,
_config:netease.ui.module.Configuration,
_getTemplate:function(){
if(!this.className)return null;
var _oM=netease.ui.module[this.className];
if(!_oM._TEMPLATE){
var _oDiv=document.createElement("div");
_oDiv.innerHTML=this._config.HtmlTemplate[this.className];
_oM._TEMPLATE=_oDiv.childNodes[0];
}
return _oM._TEMPLATE.cloneNode(true);
},
getBody:function(){
return this._body;
},
getCenter:function(){
var _oBody=this.getBody();
return _oBody?(_oBody.getElementsByTagName("div")[2]||_oBody):null;
},
clear:function(vElem){
},
show:function(){
var _oBody=this.getBody();
_oBody&&(_oBody.style.display="block");
},
hide:function(){
var _oBody=this.getBody();
_oBody&&(_oBody.style.display="none");
},
visible:function(){
var _oBody=this.getBody();
_oBody&&(_oBody.style.visibility="visible");
},
hidden:function(){
var _oBody=this.getBody();
_oBody&&(_oBody.style.visibility="hidden");
},
setStyle:function(sStyle,sValue){
var _oBody=this.getBody();
try{
_oBody&&(_oBody.style[sStyle]=sValue);
}catch(e){}
}
};
netease.ui.module.TitleBar=function(sTitle,vMenu,_Options){
netease.ui.module.AbstractComponent.call(this);
var _b=_Options&&_Options.edit;
this.setTitle(sTitle,_b);
if(_b){
this.setMenu(vMenu);
this.initMenu();
}
};extend(netease.ui.module.TitleBar,netease.ui.module.AbstractComponent);
netease.ui.module.TitleBar.prototype._getMenuContainer=function(){
var _bdy=this.getBody();
if(!_bdy)return;
return _bdy.getElementsByTagName("div")[3]||null;
};
netease.ui.module.TitleBar.prototype.getTitle=function(){
return this._title||"";
};
netease.ui.module.TitleBar.prototype.setTitle=function(sTitle,isEdit){
var _oCenter=this.getCenter();
if(!_oCenter)return;
this._title=(sTitle&&typeof sTitle=="string")?sTitle:"&nbsp;";
_oCenter.innerHTML='<p class="g_w_80 g_t_hide">'+this._title+'</p>';
if(isEdit){
var _body=this.getBody();
_body&&_body.setAttribute("title","按住鼠标，可随意拖动模块");
}
};
netease.ui.module.TitleBar.prototype.initMenu=function(){
var _c=this._getMenuContainer();
if(!_c)return;
var _fn=function(event){Event.stop(event)};
if(_c.attachEvent){
_c.attachEvent("onmousedown",_fn);
_c.attachEvent("onclick",_fn);
}else{
_c.addEventListener("mousedown",_fn,false);
_c.addEventListener("click",_fn,false);
}
};
netease.ui.module.TitleBar.prototype.setMenu=function(vMenu){
if(!vMenu)return;
var _o=$(vMenu);
var _c=this._getMenuContainer();
if(typeof vMenu=="string"&&!_o){
this._menu=_c.innerHTML=vMenu;
}else{
_c.innerHTML="";
_c.appendChild(_o);
this._menu=_c.innerHTML;
}
};
netease.ui.module.TitleBar.prototype.addMenu=function(vMenu){
if(!vMenu)return;
var _o=$(vMenu);
var _c=this._getMenuContainer();
if(typeof vMenu=="string"&&!_o){
this.setMenu(_c.innerHTML+vMenu);
}else{
_c.appendChild(vMenu);
this._menu=_c.innerHTML;
}
};
netease.ui.module.MenuBar=function(vMenu){
netease.ui.module.AbstractComponent.call(this);
this.setDOMMenu(vMenu);
};extend(netease.ui.module.MenuBar,netease.ui.module.AbstractComponent);
netease.ui.module.MenuBar.prototype.getMenu=function(){
return this._menu||"";
};
netease.ui.module.MenuBar.prototype.setDOMMenu=function(vMenu){
var _oCenter=this.getCenter();
if(!_oCenter)return;
if(!vMenu){
this.hide();
this._menu="";
return;
}
var _vMn=$(vMenu);
if(_vMn||(typeof vMenu!="string")){
_oCenter.innerHTML="";
_oCenter.appendChild(_vMn);
}else{
_oCenter.innerHTML=vMenu;
}
this._menu=_oCenter.innerHTML;
this.show();
};
netease.ui.module.MenuBar.prototype.addDOMMenu=function(vMenu){
var _oCenter=this.getCenter();
if(!vMenu||!_oCenter)return;
var _oMn=$(vMenu);
if(_oMn||(typeof vMenu!="string")){
_oCenter.appendChild(_oMn);
}else{
var _oD=document.createElement("div");
_oD.innerHTML=vMenu;
_oCenter.appendChild(_oD.childNodes[0]);
}
this._menu=_oCenter.innerHTML;
this.show();
};
netease.ui.module.Content=function(vContent,_id){
netease.ui.module.AbstractComponent.call(this);
this._id=_id;
};extend(netease.ui.module.Content,netease.ui.module.AbstractComponent);
netease.ui.module.Content.prototype.getContent=function(){
return this._content||"";
};
netease.ui.module.Content.prototype.setContent=function(vContent,isAsyn,callBack){
if(!isAsyn){this.setTrueContent(vContent);return;}
netease.ui.module.Module.start();
var _me=this;netease.ui.module.Module.add({id:_me._id,content:vContent,callback:callBack});
};
netease.ui.module.Content.prototype.setTrueContent=function(vContent){
var _oCenter=this.getCenter();
if(!_oCenter)return;
if(!vContent){
this._content=_oCenter.innerHTML=this._config.HitWord.Loading;
return;
}
var _oCnt=$(vContent);
if(_oCnt||(typeof vContent!="string")){
_oCenter.innerHTML="";
_oCenter.appendChild(_oCnt);
}else{
_oCenter.innerHTML=vContent;
}
this._content=_oCenter.innerHTML;
};
netease.ui.module.Content.prototype.reset=function(vElem){
var _oBody=this.getBody();
if(!_oBody)return;
var _oCenter=$(vElem)||this.getCenter();
if(_oCenter){
_oCenter.innerHTML="";
Element.removeChild(_oCenter);
_oCenter=null;
}
_oBody.appendChild(this._config.getTMP());
};
netease.ui.module.Content.prototype.getBox=function(){
var _rt={width:0,height:0};
var _oC=this.getCenter();
if(_oC){
_rt.width=parseInt(_oC.offsetWidth*0.9);
_rt.height=parseInt(_oC.offsetHeight);
}
return _rt;
};
netease.ui.module.BottomBar=function(vBottom){
netease.ui.module.AbstractComponent.call(this);
this.setBottom(vBottom);
};extend(netease.ui.module.BottomBar,netease.ui.module.AbstractComponent);
netease.ui.module.BottomBar.prototype.getBottom=function(){
return this._bottom||"";
};
netease.ui.module.BottomBar.prototype.setBottom=function(vBottom){
var _oCenter=this.getCenter();
if(!_oCenter)return;
this._bottom=(vBottom&&typeof vBottom=="string")?vBottom:"&nbsp;";
_oCenter.innerHTML=this._bottom;
};
netease.ui.module.ModuleTitleBar=function(sTitle,vMenu,_Options){
netease.ui.module.TitleBar.call(this,sTitle,vMenu,_Options);
};extend(netease.ui.module.ModuleTitleBar,netease.ui.module.TitleBar,"ModuleTitleBar");
netease.ui.module.ModuleMenuBar=function(vMenu){
netease.ui.module.MenuBar.call(this,vMenu);
};extend(netease.ui.module.ModuleMenuBar,netease.ui.module.MenuBar,"ModuleMenuBar");
netease.ui.module.SimpleMenuBar=function(vMenu){
netease.ui.module.MenuBar.call(this,vMenu);
};extend(netease.ui.module.SimpleMenuBar,netease.ui.module.MenuBar,"SimpleMenuBar");
netease.ui.module.SimpleMenuBar.prototype.getCenter=function(){
return this.getBody();
},
netease.ui.module.ModuleContent=function(vContent){
netease.ui.module.Content.call(this,vContent);
};extend(netease.ui.module.ModuleContent,netease.ui.module.Content,"ModuleContent");
netease.ui.module.SimpleContent=function(vContent,vTMenuBar,vBMenuBar,_id){
netease.ui.module.Content.call(this,vContent,_id);
this._init();
this.setContent(vContent);
this._menubar_t=this._makeMenuBar(vTMenuBar);
this._menubar_b=this._makeMenuBar(vBMenuBar);
this._buildMenuBar();
};extend(netease.ui.module.SimpleContent,netease.ui.module.Content,"SimpleContent");
netease.ui.module.SimpleContent.prototype._getContainers=function(){
var _oBody=this.getBody();
return _oBody?(_oBody.childNodes[2]||_oBody):null;
};
netease.ui.module.SimpleContent.prototype._init=function(){
var _bdy=this._getContainers();
if(!_bdy)return;
var _ns=_bdy.childNodes;
for(var l=_ns.length-1,_o;l>=0;l--){
_o=_ns[l];
if(_o.nodeType!=1)continue;
if(_o.className=="mdl_m_t"){this._menu_tc=_o;continue;}
if(_o.className=="mdl_m_c"){this._menu_cc=_o;continue;}
if(_o.className=="mdl_m_b"){this._menu_bc=_o;continue;}
}
}
netease.ui.module.SimpleContent.prototype._makeMenuBar=function(vMenuBar){
if(!vMenuBar&&vMenuBar!=""){
return null;
}
if(vMenuBar instanceof netease.ui.module.SimpleMenuBar){
return vMenuBar;
}
return new netease.ui.module.SimpleMenuBar(vMenuBar);
};
netease.ui.module.SimpleContent.prototype._getMenuContainer=function(isBottom){
return isBottom?this._menu_bc:this._menu_tc;
};
netease.ui.module.SimpleContent.prototype._buildMenuBar=function(){
this._menubar_t&&this._menu_tc.appendChild(this._menubar_t.getBody());
this._menubar_b&&this._menu_bc.appendChild(this._menubar_b.getBody());
};
netease.ui.module.SimpleContent.prototype.getMenuBar=function(iPos){
return iPos==1?this._menubar_b:this._menubar_t;
};
netease.ui.module.SimpleContent.prototype.getCenter=function(){
return this._menu_cc;
};
netease.ui.module.SimpleContent.prototype.reset=function(vElem){
var _ns=this._menu_cc.childNodes;
var _o=null;
for(var i=_ns.length-1;i>=0;i--){
_o=_ns[i];if(_o.nodeType==1)break;
}if(!_o)return;
Element.removeChild(_o);
};
netease.ui.module.SimpleModuleContent=function(vContent,_id){
netease.ui.module.Content.call(this,vContent,_id);
this.setContent(vContent);
};extend(netease.ui.module.SimpleModuleContent,netease.ui.module.Content,"SimpleModuleContent");
netease.ui.module.SimpleModuleContent.prototype.getCenter=function(){
return this.getBody();
};
netease.ui.module.ModuleBottomBar=function(vBottomBar){
netease.ui.module.BottomBar.call(this,vBottomBar);
};extend(netease.ui.module.ModuleBottomBar,netease.ui.module.BottomBar,"ModuleBottomBar");
netease.ui.module.AbstractModule=function(vTitleBar,vTMenuBar,vContent,vBMenuBar,vBottomBar,_Options){
this._body=this._makeBody((_Options&&_Options.id)||null);
this._menubar_t=this._makeMenuBar(vTMenuBar);
this._content=this._makeContent(vContent,vTMenuBar,vBMenuBar,this.getId());
this._menubar_b=this._makeMenuBar(vBMenuBar);
this._bottombar=this._makeBottomBar(vBottomBar);
var _tm=null;
if(_Options){
_tm=_Options.menu;
this._container=$(_Options.parent);
this._view_mode=_Options.view||0;
this._top=_Options.top||false;
if(_Options.opacity){
this._clearOpacity();
}
}
this._titlebar=this._makeTitleBar(vTitleBar,_tm,_Options);
this._builde();
};
netease.ui.module.AbstractModule._COUNT=-1;
netease.ui.module.AbstractModule._COLLECTION={};
netease.ui.module.AbstractModule.prototype=
{
_id:"",
_titlebar:null,
_menubar_t:null,
_content:null,
_menubar_b:null,
_bottombar:null,
_container:null,
_body:null,
_builded:false,
_config:netease.ui.module.Configuration,
_view_mode:0,
_genId:function(){
var _c=netease.ui.module.AbstractModule._COUNT++;
return"netease-auto-id-module-"+_c;
},
_addToCollection:function(sKey,oMd){
netease.ui.module.AbstractModule._COLLECTION[sKey]=oMd;
},
_makeBody:function(sId){
if(!this.className)return null;
var _oM=netease.ui.module[this.className];
if(!_oM._TEMPLATE){
var _oDiv=document.createElement("div");
_oDiv.innerHTML=this._config.HtmlTemplate[this.className];
_oM._TEMPLATE=_oDiv.childNodes[0];
}
var _oR=_oM._TEMPLATE.cloneNode(true);
_oR.id=this._id=sId||this._genId();
return _oR;
},
_makeTitleBar:function(vTitleBar,vTitleMenu,_Options){
if(vTitleBar instanceof netease.ui.module.ModuleTitleBar){
return vTitleBar;
}
return new netease.ui.module.ModuleTitleBar(vTitleBar,vTitleMenu,_Options);
},
_makeMenuBar:function(vMenuBar){
if(!vMenuBar&&vMenuBar!=""){
return null;
}
if(vMenuBar instanceof netease.ui.module.ModuleMenuBar){
return vMenuBar;
}
return new netease.ui.module.ModuleMenuBar(vMenuBar);
},
_makeContent:function(vContent){
if(vContent instanceof netease.ui.module.ModuleContent){
return vContent;
}
return new netease.ui.module.ModuleContent(vContent);
},
_makeBottomBar:function(vBottomBar){
if(!vBottomBar&&vBottomBar!=""){
return null;
}
if(vBottomBar instanceof netease.ui.module.ModuleBottomBar){
return vBottomBar;
}
return new netease.ui.module.ModuleBottomBar(vBottomBar);
},
_builde:function(){
var _oBody=this.getBody();
if(!_oBody||this._builded)return;
_oBody.appendChild(this._titlebar.getBody());
this._menubar_t&&_oBody.appendChild(this._menubar_t.getBody());
_oBody.appendChild(this._content.getBody());
this._menubar_b&&_oBody.appendChild(this._menubar_b.getBody());
this._bottombar&&_oBody.appendChild(this._bottombar.getBody());
this._setTo(this._container);
this._builded=true;
this._addToCollection(this.getId(),this);
},
_setTo:function(vContainer){
var _c=$(vContainer);
if(!_c)return;
var _n=_c.childNodes[0];
if(this._top&&_n){
_c.insertBefore(this.getBody(),_n);
}else{
_c.appendChild(this.getBody());
}
},
_clearOpacity:function(){
var _a=[
this,this.getTitleBar(),
this.getMenuBar(0),this.getMenuBar(1),
this.getContent(),this.getBottomBar()
];
for(var i=_a.length-1,_o,_b;i>=0;i--){
_o=_a[i];if(!_o)continue;
_b=_o.getBody();
_b.className=_b.className.replace(this._config.CssControl.Opacity,"");
}
},
getId:function(){
return this._id;
},
getTitleBar:function(){
return this._titlebar;
},
getMenuBar:function(iPos){
return iPos==1?this._menubar_b:this._menubar_t;
},
getContent:function(){
return this._content;
},
getBottomBar:function(){
return this._bottombar;
},
getBody:function(){
return this._body;
},
getView:function(){
return this._view_mode;
},
getParent:function(){
var _bdy=this.getBody();
if(!_bdy)return;
this._container=_bdy.parentNode;
return this._container;
},
appendTo:function(vContainer){
if(!this._builded){
this._builde();
}
this._setTo(vContainer);
},
show:function(){
var _oBody=this.getBody();
_oBody&&(_oBody.style.display="block");
},
hide:function(){
var _oBody=this.getBody();
_oBody&&(_oBody.style.display="none");
},
toggle:function(){
var _bdy=this.getBody();
var _dS=_bdy.style;
_dS.display=_dS.display=="none"?"block":"none";
},
register:function(sType,fnHandler){
this["_"+sType+"_handler"]=fnHandler;
},
switchView:function(toView){
var _sId=this.getId()+"_cCont";
var _o=$(_sId)||this.getContent();
if(!_o)return;
var _tV=toView==null?this.getView():toView;
var _c=this._config.CssControl;
var _s=_c.widCss;
if(_tV==1&&_o.className.indexOf(_s)<0){
_o.className+=" "+_s;
}else if(_tV==0&&_o.className.indexOf(_s)>=0){
_o.className=_o.className.replace(_s,"");
}
if(this._resize_handler){
this._resize_handler(this.getId());
}
},
insertBefore:function(vElm){
var _oElm=$(vElm);
if(!_oElm)return;
var _oBdy=this.getBody();
if(!_oBdy)return;
var _oPrt=_oElm.parentNode;
if(!_oPrt)return;
_oPrt.insertBefore(_oBdy,_oElm);
}
};
netease.ui.module.Module=function(vTitleBar,vTMenuBar,vContent,vBMenuBar,vBottomBar,_Options){
netease.ui.module.AbstractModule.call(this,vTitleBar,vTMenuBar,vContent,vBMenuBar,vBottomBar,_Options);
};extend(netease.ui.module.Module,netease.ui.module.AbstractModule,"Module");
netease.ui.module.Module.getModuleById=function(sId){
return netease.ui.module.AbstractModule._COLLECTION[sId];
};
netease.ui.module.Module.deleteModule=function(sId){
if(!sId)return;
delete netease.ui.module.AbstractModule._COLLECTION[sId];
};
netease.ui.module.Module.resized=function(sMid,toView){
var _oM=netease.ui.module.Module.getModuleById(sMid);
if(!_oM)return;
_oM.switchView($(sMid+"_cCont"),toView);
};
netease.ui.module.Module.loaded=function(sMid){
var _oM=netease.ui.module.Module.getModuleById(sMid);
if(!_oM)return;
var _tM=_oM.getTitleBar();
_tM&&_tM.addMenu($(sMid+"_tMenu"));
var _uM=_oM.getMenuBar();
_uM&&_uM.setDOMMenu($(sMid+"_uMenu"));
_oM.switchView();
var _dM=_oM.getMenuBar(1);
_dM&&_dM.setDOMMenu($(sMid+"_dMenu"));
};
netease.ui.module.Module.register=function(sMid,sType,fnHandler){
var _oM=netease.ui.module.Module.getModuleById(sMid);
if(!_oM)return;
_oM.register(sType,fnHandler);
};
netease.ui.module.Module.start=function(){
var _this=netease.ui.module.Module;
if(_this._TIMER)return;
_this._TIMER=window.setInterval(function(){_this._check();},100);
};
netease.ui.module.Module.clear=function(){
var _this=netease.ui.module.Module;
if(!_this._TIMER)return;
_this._TIMER=window.clearInterval(_this._TIMER);
};Event.observe(window,'unload',netease.ui.module.Module.clear,false);
netease.ui.module.Module.add=function(_obj){
var _this=netease.ui.module.Module;
if(!_this._QUEUE)_this._QUEUE=[];
_this._QUEUE.push(_obj);
};
netease.ui.module.Module._check=function(){
var _this=netease.ui.module.Module,_obj,_mdl;
if(!_this._QUEUE||_this._QUEUE.length==0)return;
for(var _i=0,_l=_this._QUEUE.length;_i<_l&&_i<2;_i++){
_obj=_this._QUEUE.shift();
_mdl=_this.getModuleById(_obj.id);if(!_mdl)continue;
_mdl.getContent().setTrueContent(_obj.content);
_obj.callback&&_obj.callback(_obj.id);
}
};
netease.ui.module.Module.prototype._makeMenuBar=function(vMenuBar){
return null;
};
netease.ui.module.Module.prototype._makeContent=function(vContent,vTMenuBar,vBMenuBar,_id){
if(vContent instanceof netease.ui.module.SimpleContent){
return vContent;
}
return new netease.ui.module.SimpleContent(vContent,vTMenuBar,vBMenuBar,_id);
};
netease.ui.module.Module.prototype._builde=function(){
var _oBody=this.getBody();
if(!_oBody||this._builded)return;
_oBody.appendChild(this._titlebar.getBody());
this._menubar_t=this._content.getMenuBar(0);
this._menubar_b=this._content.getMenuBar(1);
_oBody.appendChild(this._content.getBody());
this._bottombar&&_oBody.appendChild(this._bottombar.getBody());
this._setTo(this._container);
this._builded=true;
this._addToCollection(this.getId(),this);
};
netease.ui.module.SimpleModule=function(vTitleBar,vTitleMenu,vContent,_Options){
_Options["menu"]=vTitleMenu;
netease.ui.module.AbstractModule.call(this,vTitleBar,null,vContent,null,null,_Options);
};extend(netease.ui.module.SimpleModule,netease.ui.module.AbstractModule,"SimpleModule");
netease.ui.module.SimpleModule.prototype._init=function(isEdit){
var _bdy=this.getBody();
var _tb=this._titlebar;
if(!_bdy||!_tb)return;
isEdit||_tb.hide();
_tb.hide();
};
netease.ui.module.SimpleModule.prototype._makeContent=function(vContent,vTMenuBar,vBMenuBar,_id){
if(vContent instanceof netease.ui.module.SimpleModuleContent){
return vContent;
}
return new netease.ui.module.SimpleModuleContent(vContent,_id);
};
var gNameSpace={
register:function(sNameSpace){
var _aDomains=sNameSpace.split('.');
var _oParent=window;
for(var i=0,l=_aDomains.length;i<l;i++){
_oParent=(_oParent[_aDomains[i]]=_oParent[_aDomains[i]]||{});
}
}
};
var gCodeLoad={
load:function(aCode,bSeq,fnOnLoad){
for(var i=0,l=aCode.length;i<l;i++){
this._aCodeSrc.push(aCode[i]);
}
this._bSequence=bSeq;
this._fnOnLoad=fnOnLoad||function(){};
this._oLoadParam=arguments[3]||{};
if(bSeq){
this._fnLoadOne();
}else{
this._fnLoadAll();
}
if(!this._oInterval)
this._oInterval=setInterval(this._fnCheck,50);
},
regLoaded:function(sGUID){
for(var i=0,l=this._aCodeSrc.length;i<l;i++){
if(this._aCodeSrc[i][0]==sGUID){
this._aCodeLoad.push(sGUID);
return;
}
}
},
_fnLoadAll:function(){
var _oScript=null;
for(var i=0,l=this._aCodeSrc.length;i<l;i++){
_oScript=document.createElement('script');
_oScript.type='text/javascript';
_oScript.src=this._aCodeSrc[i][1];
document.body.appendChild(_oScript);
}
},
_fnLoadOne:function(){
this._iCurLoad++;
var _oScript=document.createElement('script');
_oScript.type='text/javascript';
_oScript.src=this._aCodeSrc[this._iCurLoad][1];
document.body.appendChild(_oScript);
},
_fnCheck:function(){
var _oThis=gCodeLoad;
if(!_oThis._bSequence){
if(_oThis._aCodeSrc.length!=_oThis._aCodeLoad.length)
return;
}else{
var _iLoadedLen=_oThis._aCodeLoad.length;
if(_oThis._aCodeSrc[_oThis._iCurLoad][0]!=_oThis._aCodeLoad[_iLoadedLen-1]){
return;
}
if(_oThis._iCurLoad!=_oThis._aCodeSrc.length-1){
_oThis._fnLoadOne();
return;
}
}
clearInterval(_oThis._oInterval);
try{
_oThis._fnOnLoad(_oThis._oLoadParam);
}catch(e){
if(/MSIE/.test(navigator.userAgent))
alert(e.message);
else if(navigator.userAgent.indexOf("Firefox")!=-1){
var _sMessage=e.fileName+'\nLine: '+e.lineNumber+'\n'+e.message+'\n'+e.stack;
alert(_sMessage);
}
}
},
_bSequence:false,
_iCurLoad:-1,
_fnOnLoad:function(){},
_oLoadParam:{},
_oInterval:null,
_aCodeLoad:[],
_aCodeSrc:[]
};
gNameSpace.register('Const');
Const.Rank={
Anonymous:-100,
Guest:0,
Friend:100,
Owner:10000
};
Const.Domain="163.org";
Const.STDomain="http://b.bst.126.net";
Const.Recovery={
Blog:false
};
Const.TestOpenModuleID="t_e_s_t_w_m";
