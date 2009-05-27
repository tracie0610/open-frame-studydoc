if(NetEase==undefined){
var NetEase={};
}
NetEase.ConfirmDlg=Class.create();
NetEase.ConfirmDlg.prototype={
initialize:function(sObjectName){
this._oOptions=Object.extend({
sDlgId:null,
width:250,
height:85,
left:300,
top:300,
sAlert:'',
sContent:'',
jsWindowManager:null,
fnOK:null,
oFnOKParam:null
},arguments[1]||{});
this._sObjectName=sObjectName;
this.oConfirmWin=null;
this._init();
},
_init:function(){
if(!this._oOptions.jsWindowManager){
this._oOptions.jsWindowManager=new NetEase.JSWindowManager();
}
this.oConfirmWin=this._oOptions.jsWindowManager.createWindow(this._oOptions.sDlgId,{
className:'g_crd_21',width:this._oOptions.width,height:this._oOptions.height,
hasSystemBar:false,
onTop:false,needCover:true,allowScroll:true,allowDrag:false
});
this.oConfirmWin.panel.innerHTML=
'<div class="alert">'+this._oOptions.sAlert+'</div>'+
'<div class="cont"><span>'+this._oOptions.sContent+'</span></div>'+
'<div class="btnbar">'+
'<input type="button" class="btncm btnok" value="确　定" id="$_confirmOK" />'+
'<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'+
'<input type="button" class="btncm btncc" value="取　消" id="$_confirmCancel" onclick="'+
this._sObjectName+'.close();" />'+
'</div>';
if(window.attachEvent){
$('$_confirmOK').attachEvent("onclick",function(e){
this.close();
if(this._oOptions.fnOK!=null){
this._oOptions.fnOK(this._oOptions.oFnOKParam);
}
}.bind(this));
}else if(window.addEventListener){
$('$_confirmOK').addEventListener("click",function(e){
this.close();
if(this._oOptions.fnOK!=null){
this._oOptions.fnOK(this._oOptions.oFnOKParam);
}
}.bind(this),true);
}
},
show:function(){
this._oOptions.jsWindowManager.showWindow(this._oOptions.sDlgId);
},
close:function(){
this._oOptions.jsWindowManager.closeWindow(this._oOptions.sDlgId);
}
}
if(NetEase==undefined){
var NetEase={};
}
NetEase.MsgTool=Class.create();
NetEase.MsgTool.prototype={
initialize:function(){
this.options=Object.extend(
{
jsWindowManager:false,
dwrAlert:false,
dialogId:"cardDialog",
style:'/style/common',
objName:'msgTool'
},arguments[0]||{});
this.sendUserId=UD.visitorId;
this.sendUserName=UD.visitorName;
this.sendUserNickName=UD.visitorNickname;
if(this.sendUserNickName==null||this.sendUserNickName.trim()==""){
this.sendUserNickName=this.sendUserName;
}
this.cardpageHash={};
this.lastCategoryId=null;
this.card_stat_slide=false;
this.COM_ID="$_commend";
this.initTemplate();
if(!this.options.jsWindowManager){
this.jsWindowManager=new NetEase.JSWindowManager();
}else{
this.jsWindowManager=this.options.jsWindowManager;
}
},
showSendCardDialog:function(receiveUserId,receiveUserName,receiveUserNickName){
if(UD.visitorRank<0){
showLoginDlg(UD.serverName);
return;
}
if(receiveUserId==this.sendUserId){
return;
}
this.receiveUserId=receiveUserId;
this.receiveUserName=receiveUserName.unescape_freemark();
this.receiveUserNickName=receiveUserNickName.unescape_freemark();
this._initSendCardDialog(this.options.dialogId);
},
_initSendCardDialog:function(id){
if(this.sendCardDialog==null){
this.sendCardDialog=this.jsWindowManager.createWindow(id,{title:'赠送贺卡',
width:580,height:480,notKeepPos:false,className:'g_win_10',beforeHiddenFunc:this._cancelCardSend.bind(this)
});
}
this._loadSendCategorys();
this.sendCardDialog.showWindow();
this.sendCardDialog.focusWindow();
},
_loadSendCategorys:function(){
if(this.notFirstShow==null){
this.notFirstShow=true;
var callback=function(cardCategoryList){
var data={cardCategoryList:cardCategoryList};
this.sendCardDialog.panel.innerHTML=this.jst_cardsend_template.processUseCache(data);
this.cardInfo=$("$$_card_info");
this.cardContent=$("$$_card_content");
this.cardTip=$("$$_card_tip");
this.cardTip.style.display="";
this.cardSend=$("$$_card_send");
this.cardSend.style.display="none";
this.cardReceive=$("$$_card_receive");
this.cardReceive.innerHTML='送给 <span class="a_a c_c d_d" href="http://'+DomainMap.getParentDomain(this.receiveUserName.escape())+'/" target="_blank">'+this.receiveUserNickName.escape()+'</span> 的祝福';
this.cardBlessContent=$("$$_bless_content");
this.cardInputZone=$("$$_card_input_zone");
this.cardInputTip=$("$$_card_input_tip");
this.commendCategory=$("$$_commend_category");
if(this.commendCategory)
this._selectSendCategory(this.commendCategory,this.COM_ID);
}.bind(this);
CardBean.getCardCategoryList(callback);
}else{
this.cardReceive.innerHTML='送给 <span class="a_a c_c d_d" href="http://'+DomainMap.getParentDomain(this.receiveUserName.escape())+'/" target="_blank">'+this.receiveUserNickName.escape()+'</span> 的祝福';
}
},
_selectSendCategory:function(obj,id){
if(this.lastObj!=null){
Element.removeClassName(this.lastObj,'selected');
}
Element.addClassName(obj,'selected');
this.lastObj=obj;
if(this.cardpageHash[id]==null){
var loadFunc;
if(id==this.COM_ID){
loadFunc=this._loadCommendFunc.bind(this);
}else{
loadFunc=this._loadCommonFunc.bind(this);
}
this.cardpageHash[id]=new NetEase.CachePage({
loadFunc:loadFunc,loadParam:{cateId:id},presentFunc:this._presentCardsFunc.bind(this),presentSlideFunc:this._presentCardFunc.bind(this),
organizeFunc:this._organizeFunc.bind(this),detSlideIterator:this._detSlideIterator.bind(this),
pageSize:9,prefetch:true,prefetchMulti:1,markID:false,customPageIds:['$$_card_prev','$$_card_next'],
styleDir:this.options.style
});
this.cardpageHash[id].nextPage();
if(this.lastCategoryId!=null)
this.cardpageHash[this.lastCategoryId].resetCachePageEvent();
}else{
if(this.lastCategoryId!=id||this.card_stat_slide==true){
if(this.lastCategoryId!=id)
this.cardpageHash[this.lastCategoryId].resetCachePageEvent();
this.cardpageHash[id].refreshCurPage();
}
}
if(id==this.COM_ID){
this._showCardCommendInfo(true);
}else{
this._showCardCommendInfo(false);
}
this.lastCategoryId=id;
this.card_stat_slide=false;
},
_organizeFunc:function(dataList){
for(var i=0;i<dataList.length;i++){
dataList[i].smallSrc=this._constructSrc(dataList[i].srcId,false);
dataList[i].bigSrc=this._constructSrc(dataList[i].srcId,true);
}
return dataList;
},
_constructSrc:function(srcId,isBig){
var aId=srcId%10;
if(isBig)
return"http://cardimg.163.com/mcards/"+aId+"/big/"+srcId+".swf";
return"http://cardimg.163.com/mcards/"+aId+"/small/s"+srcId+".swf";
},
_loadCommendFunc:function(param,callback){
CardBean.getCommendCardInfoList(param.offset,param.limit,callback);
},
_loadCommonFunc:function(param,callback){
CardBean.getCardInfoList(param.cateId,param.offset,param.limit,callback);
},
_presentCardsFunc:function(dataList){
var data={cardInfoList:dataList};
this.cardContent.innerHTML=this.jst_cards_template.processUseCache(data);
this.cardContent.style.borderWidth="1px";
this.cardTip.style.display="";
this.cardSend.style.display="none";
},
_presentCardFunc:function(cardInfo){
if(cardInfo){
var data={cardInfo:cardInfo};
this.cardContent.innerHTML=this.jst_card_template.processUseCache(data);
this.cardContent.style.borderWidth="0px";
this.cardTip.style.display="none";
this.cardSend.style.display="";
this.cardBlessContent.focus();
}
},
_selectCardInfo:function(id){
if(this.cardpageHash[this.lastCategoryId]){
this.cardpageHash[this.lastCategoryId].changeToSlideMode(id);
this.card_stat_slide=true;
this._showCardCommendInfo(false);
this.cardBlessContent.focus();
}
},
_showCardCommendInfo:function(show){
if(show==true){
this.cardInfo.style.display="";
}else{
this.cardInfo.style.display="none";
}
},
_detSlideIterator:function(id,e){
if(id==e.id)
return true;
return false;
},
_cancelCardSend:function(){
if(this.cardpageHash[this.lastCategoryId]){
this.cardpageHash[this.lastCategoryId].refreshCurPage();
this.card_stat_slide=false;
if(this.lastCategoryId==this.COM_ID){
this._showCardCommendInfo(true);
}else{
this._showCardCommendInfo(false);
}
}
},
_submitCardSend:function(){
if(this.cardpageHash[this.lastCategoryId]){
var content=this.cardBlessContent.value.trim();
if(content==""){
alert("请输入您的祝福!");
this.cardBlessContent.focus();
return;
}
if(content.length>1000){
alert("祝福语长度不能超过1000");
this.cardBlessContent.focus();
return;
}
var obj=this.cardpageHash[this.lastCategoryId].getSelectSlide();
if(obj){
this.cardInputZone.style.display='none';
this.cardInputTip.style.display='block';
RemindBean.sendCard(this.sendUserId,this.sendUserName,this.sendUserNickName,
this.receiveUserId,this.receiveUserName,this.receiveUserNickName,
content,obj.id,UD.visitorIP,{
callback:this._afterCardSent.bind(this),
errorHandler:function(errorString,ex){
this._afterCardSent(-1);
filterWarning(ex,false);;
}.bind(this)
}
);
}
}
},
_afterCardSent:function(result){
if(result<0){
switch(result){
case-3:this.options.dwrAlert("发送的博友不存在","error");break;
case-4:this.options.dwrAlert("消息内容中包含敏感关键字","error");break;
case-5:this.options.dwrAlert("消息接受者在您的黑名单中，发送失败","error");break;
case-10:this.options.dwrAlert("发送贺卡失败!贺卡只能博友之间发送!","error");break;
default:this.options.dwrAlert("发送贺卡失败","error");break;
}
}else{
this.options.dwrAlert("发送贺卡成功!","ok");
this._cancelCardSend();
}
this.cardInputZone.style.display='block';
this.cardInputTip.style.display='none';
},
msgTo:function(fromId,fromName,fromNickName,toId,toName,toNickName){
if(!this.messageWindow){
this.messageWindow=this.jsWindowManager.createWindow('remind_message',{
className:"g_win_6",width:400,height:240,onTop:true,notKeepPos:true,title:"发送新消息"
}
);
}
var s=[];
s.push('<div class="g_t_14">发送给：');
s.push(toNickName.escape());
s.push('</div>');
s.push('<div><textarea id="remind_msg" class="g_h_105 g_w_90" onpropertychange="textareaLimit(this, 250)"></textarea></div>');
s.push('<div class="g_h_30 g_t_center">');
s.push('<div id="ne_frame_submit"><input type="button" class="btncm btnok" value="确　定" onclick="');
s.push(this.options.objName);
s.push('.submitMsg(');
s.push(fromId);
s.push(', ');
s.push(toId);
s.push(', \''+toName+'\'');
s.push(');" />');
s.push('<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>');
s.push('<input type="button" class="btncm btncc" value="取　消" onclick="'+this.options.objName+'.closeMsg();" />');
s.push('</div><div id="ne_frame_info" style="display:none;">处理中...</div>');
s.push('</div>');
this.messageWindow.panel.innerHTML=s.join('');
this.messageWindow.showWindow();
$('remind_msg').focus();
},
submitMsg:function(fromId,toId,toName){
if(fromId==toId){
this._afterSubmit(-7);
return;
}
var _msg=$F("remind_msg").trim();
if(_msg.length==0){this.options.dwrAlert("消息内容不能为空!","info");return;};
if(_msg.length>250){this.options.dwrAlert("消息长度不能超过250!","info");return;};
$("ne_frame_submit").style.display='none';
$("ne_frame_info").style.display='';
RemindBean.sendUserMsg(toId,toName,_msg,{
callback:this._afterSubmit.bind(this),
errorHandler:function(errorString,ex){
this._afterSubmit(-1);
filterWarning(ex,false);;
}.bind(this)
});
},
_afterSubmit:function(result){
if(result<0){
switch(result){
case-3:this.options.dwrAlert("发送的博友不存在!","error");break;
case-4:this.options.dwrAlert("消息内容中包含敏感关键字","error");break;
case-5:this.options.dwrAlert("消息接受者在您的黑名单中，发送失败!","error");break;
case-7:this.options.dwrAlert("不能给自己发送消息!","error");break;
default:this.options.dwrAlert("发送消息失败!","error");break;
}
$("ne_frame_submit").style.display='';
$("ne_frame_info").style.display='none';
}else{
this.options.dwrAlert("发送消息成功!","ok");
this.closeMsg();
}
},
closeMsg:function(){
this.messageWindow.hiddenWindow();
},
initTemplate:function(){
this.jst_cardsend_template=
new String('{var commentInfo = ""}\
   <div>\
   <div class="g_tab_btn03">\
   {for category in cardCategoryList}\
    {if category.commend == true}\
     {var commentInfo = category.info}\
     <div id="$$_commend_category" class="selected" onclick="'+this.options.objName+'._selectSendCategory(this,\''+this.COM_ID+'\');">${category.name|default:""|escape}</div>\
    {else}\
     <div onclick="'+this.options.objName+'._selectSendCategory(this,\'${category.id}\');">${category.name|default:""|escape}</div>\
    {/if}\
   {/for}\
   </div>\
   <table class="case" border="0" cellspacing="0" cellpadding="0">\
     <tr id="$$_card_info"><td width="40">&nbsp;</td><td class="g_t_left"><p class="g_h_20 clr00">${commentInfo|default:""|escape}</p></td><td width="40">&nbsp;</td></tr>\
     <tr><td width="40" class="g_t_left"><div class="g_img_14 g_c_hand p_ p27" onmouseover="Element.replaceClassName(this,\'p27\',\'p25\');" onmouseout="Element.replaceClassName(this,\'p25\',\'p27\');" title="上页" id="$$_card_prev">&nbsp;</div></td>\
     <td><div class="cnt" id="$$_card_content"></div></td>\
     <td width="40" class="g_t_right"><div class="g_img_14 g_c_hand p_ p28" onmouseover="Element.replaceClassName(this,\'p28\',\'p26\');" onmouseout="Element.replaceClassName(this,\'p26\',\'p28\');" title="下页" id="$$_card_next">&nbsp;</div></td></tr>\
     <tr id="$$_card_tip"><td>&nbsp;</td><td class="g_t_left g_h_25 clr02"><span class="n_ n9">&nbsp;</span>点击贺卡或者贺卡名，查看贺卡并发送。</td><td class="g_w_5">&nbsp;</td></tr>\
   </table>\
   <table class="case" border="0" cellspacing="0" cellpadding="0" id="$$_card_send">\
    <tr><td width="40">&nbsp;</td><td class="g_t_left g_h_25" id="$$_card_receive" style="font-size:14px;">&nbsp;</td><td width="40">&nbsp;</td></tr>\
    <tr><td>&nbsp;</td><td><textarea class="g_h_105" id="$$_bless_content"></textarea></td><td>&nbsp;</td></tr>\
    <tr><td>&nbsp;</td><td class="g_t_center g_h_30" >\
     <div id="$$_card_input_zone">\
     <input type="button" class="btncm btnok" value="发　送" onclick="'+this.options.objName+'._submitCardSend();"/>\
     <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>\
     <input type="button" class="btncm btncc" value="取　消" onclick="'+this.options.objName+'._cancelCardSend();"/>\
     </div><div id="$$_card_input_tip" style="display:none;">贺卡发送中...</div>\
    </td><td>&nbsp;</td></tr>\
   </table>\
  </div>');
this.jst_cards_template=
new String('{for cardInfo in cardInfoList}\
    <div class="item">\
     <span class="a_a c_c" onclick="'+this.options.objName+'._selectCardInfo(\'${cardInfo.id}\');">\
     <img src="${cardInfo.smallSrc|default:"#"}" /></span>\
    <p><span class="a_a d_d" onclick="'+this.options.objName+'._selectCardInfo(\'${cardInfo.id}\');">${cardInfo.name|default:""|escape}</span></p>\
   </div>\
   {/for}\
   <br class="g_p_clear" />');
this.jst_card_template=new String('<div><p class="g_h_20 g_t_14 g_t_bold clr00">${cardInfo.name|default:""|escape}</p></div>\
          <div><embed width="500px" height="400px" src="${cardInfo.bigSrc|default:"#"}" quality="high" \
            pluginspage="http://www.macromedia.com/go/getflashplayer" \
           type="application/x-shockwave-flash" wmode="transparent"></embed>\
          </div>');
}
}
if(NetEase==undefined){
var NetEase={};
}
NetEase.SimpleDragDrop=Class.create();
NetEase.SimpleDragDrop.prototype={
initialize:function(){
this.drags=[];
this.options=Object.extend({
top:-1,
left:0,
width:0,
height:0,
constraint:'all',
useDragOpacity:true,
simpleDrag:false
},arguments[0]||{});
this.options.top=parseInt(this.options.top||'0');
this.options.left=parseInt(this.options.left||'0');
this.options.width=parseInt(this.options.width||'0');
this.options.height=parseInt(this.options.height||'0');
},
addDraggable:function(element){
new NetEase.Draggable(element,this,
Object.extend(this.options,arguments[1]||{}));
},
removeDraggable:function(element){
element=$(element);
this.drags.select(function(e){return e.getElement()==element;}).each(function(e){e.destroy()});
},
register:function(draggable){
if(this.drags.length==0){
this.eventMouseUp=this.endDrag.bindAsEventListener(this);
this.eventMouseMove=this.updateDrag.bindAsEventListener(this);
this.eventKeypress=this.keyPress.bindAsEventListener(this);
Event.observe(document,"mouseup",this.eventMouseUp);
Event.observe(document,"mousemove",this.eventMouseMove);
Event.observe(document,"keypress",this.eventKeypress);
}
this.drags.push(draggable);
},
unregister:function(draggable){
this.drags=this.drags.reject(function(d){return d==draggable});
if(this.drags.length==0){
Event.stopObserving(document,"mouseup",this.eventMouseUp);
Event.stopObserving(document,"mousemove",this.eventMouseMove);
Event.stopObserving(document,"keypress",this.eventKeypress);
}
},
activate:function(draggable){
window.focus();
this.activeDraggable=draggable;
},
deactivate:function(){
this.activeDraggable=null;
},
updateDrag:function(event){
if(!this.activeDraggable)return;
var pointer=this.activeDraggable.getPointer(event);
if(this._lastPointer&&(this._lastPointer.inspect()==pointer.inspect()))return;
this._lastPointer=pointer;
this.activeDraggable.updateDrag(event,pointer);
},
endDrag:function(event){
if(!this.activeDraggable)return;
this._lastPointer=null;
this.activeDraggable.endDrag(event);
this.activeDraggable=null;
},
keyPress:function(event){
if(this.activeDraggable)
this.activeDraggable.keyPress(event);
}
};
NetEase.Draggable=Class.create();
NetEase.Draggable.prototype={
initialize:function(element,draggables){
var options=Object.extend({
handle:false,
starteffect:function(element){
new Effect.Opacity(element,{duration:0.2,from:1.0,to:0.7});
},
endeffect:function(element){
new Effect.Opacity(element,{duration:0.2,from:0.7,to:1.0});
},
zindex:1000,
onDrag:Prototype.emptyFunction,
useDragOpacity:true,
simpleDrag:false
},arguments[2]||{});
this.element=$(element);
if(options.handle&&(typeof options.handle=='string'))
this.handle=this._childrenWithClassName(this.element,options.handle)[0];
if(!this.handle)this.handle=$(options.handle);
if(!this.handle)this.handle=this.element;
Element.makePositioned(this.element);
this.delta=this.currentDelta();
this.options=options;
this.dragging=false;
this.eventMouseDown=this.initDrag.bindAsEventListener(this);
Event.observe(this.handle,"mousedown",this.eventMouseDown);
this.draggables=draggables;
this.draggables.register(this);
if(this.options.useDragOpacity==false||this.options.simpleDrag){
this.options.starteffect=null;
this.options.endeffect=null;
}
},
getElement:function(){
return this.element;
},
destroy:function(){
Event.stopObserving(this.handle,"mousedown",this.eventMouseDown);
this.draggables.unregister(this);
},
currentDelta:function(){
if(this._simpleNode)_e=this._simpleNode;
else _e=this.element;
return([
parseInt(Element.getStyle(_e,'left')||'0'),
parseInt(Element.getStyle(_e,'top')||'0')]);
},
getPointer:function(event){
if(this.element.container=='in'){
return[Event.cursorX(event),Event.cursorY(event)];
}else{
return[Event.pointerX(event),Event.pointerY(event)];
}
},
initDrag:function(event){
if(Event.isLeftClick(event)){
var src=Event.element(event);
if(src.tagName&&(
src.tagName=='INPUT'||
src.tagName=='SELECT'||
src.tagName=='OPTION'||
src.tagName=='BUTTON'||
src.tagName=='TEXTAREA'))return;
var pointer=this.getPointer(event);
var pos=Position.cumulativeOffset(this.element);
this.offset=[0,1].map(function(i){return(pointer[i]-pos[i])});
this.draggables.activate(this);
Event.stop(event);
}
},
startDrag:function(event){
this.dragging=true;
if(this.options.zindex){
this.originalZ=parseInt(Element.getStyle(this.element,'z-index')||0);
this.element.style.zIndex=this.options.zindex;
}
if(this.options.simpleDrag){
this._simpleNode=this.element.cloneNode(false);
this._simpleNode.innerHTML='';
this._simpleNode.className='';
Element.setStyle(this._simpleNode,{zIndex:this.element.style.zIndex,border:'2px dotted red',cursor:'move',width:this.element.offsetWidth+'px',height:this.element.offsetHeight+'px'});
Element.setStyle(this.element,{display:'none'});
if(this.element.container=='in'){
UD.body.appendChild(this._simpleNode);
}else{
document.body.appendChild(this._simpleNode);
}
Element.makePositioned(this._simpleNode);
var pointer=this.getPointer(event);
var pos=Position.cumulativeOffset(this._simpleNode);
this.offset=[0,1].map(function(i){return(pointer[i]-pos[i])});
}
if(this.options.starteffect)this.options.starteffect(this.element);
},
updateDrag:function(event,pointer){
if(!this.dragging)this.startDrag(event);
Position.prepare();
this.draw(pointer);
if(navigator.appVersion.indexOf('AppleWebKit')>0)window.scrollBy(0,0);
this.options.onDrag();
Event.stop(event);
},
finishDrag:function(event,success){
this.dragging=false;
this.delta=this.currentDelta();
this.element.style.zIndex=this.originalZ;
if(this._simpleNode){
if(this.element.container=='in'){
Element.removeChild(this._simpleNode);
}else{
Element.removeChild(this._simpleNode);
}
Element.setStyle(this.element,{left:this.delta[0]+'px',top:this.delta[1]+'px',display:'block'});
}
if(this.options.endeffect)
this.options.endeffect(this.element);
this.draggables.deactivate(this);
},
keyPress:function(event){
if(event.keyCode!=Event.KEY_ESC)return;
this.finishDrag(event,false);
Event.stop(event);
},
endDrag:function(event){
if(!this.dragging)return;
this.finishDrag(event,true);
Event.stop(event);
},
draw:function(point){
var _e;
if(this._simpleNode)_e=this._simpleNode;
else _e=this.element;
var pos=Position.cumulativeOffset(_e);
var d=this.currentDelta();
pos[0]-=d[0];pos[1]-=d[1];
var p=[0,1].map(function(i){
return(point[i]-pos[i]-this.offset[i])
}.bind(this));
if(this.options.left!=0){
if((this.options.width!=0)&&(p[0]>this.options.left+this.options.width))
p[0]=this.options.left+this.options.width;
else if(p[0]<this.options.left)
p[0]=this.options.left;
}
if(this.options.top!=0){
if((this.options.height!=0)&&(p[1]>this.options.top+this.options.height))
p[1]=this.options.top+this.options.height;
else if(p[1]<this.options.top)
p[1]=this.options.top;
}
if(this.options.constraint=='horizontal')
Element.setStyle(_e,{left:p[0]+'px'});
else if(this.options.constraint=='vertical')
Element.setStyle(_e,{top:p[1]+'px'});
else
Element.setStyle(_e,{
left:p[0]+'px',top:p[1]+'px'});
if(Element.getStyle(_e,'visibility')=='hidden')
Element.setStyle(_e,{visibility:''});
},
_childrenWithClassName:function(element,className){
return $A($(element).getElementsByTagName('*')).select(
function(c){return Element.hasClassName(c,className)});
}
}
if(NetEase==undefined){
var NetEase={};
}
NetEase.quickLoginTemplate=null;
NetEase.indexLoginTemplate=null;
var type163=0;
var typePopo=1;
var type126=2;
var type188=3;
var typeVip=4;
var typeYeah=5;
var typePlayer=6;
var ckLoginInfoKey="NEBLOG_LOGIN";
var ckLoginInfo={type:null,name:null,pass:null};
var ckPath="/";
var ckDomain=DomainMap.cookieDomain;
var errInfo=["用户名或密码不正确，请重新输入","该网易博客用户名不存在","超时退出或无权限访问，请重新登录"];
NetEase.QuickLogin=Class.create();
NetEase.QuickLogin.prototype={
initialize:function(presentShowId,serverName,bFromIndex){
this.options=Object.extend({
err:false,
jsWindowManager:null,
loginTarget:null,
invitor:null,
group:null,
app:null
},arguments[3]||{});
this.presentShowId=presentShowId;
this.serverName=serverName;
this.bFromIndex=bFromIndex;
this.err=false;
this.jsWindowManager=this.options.jsWindowManager;
this.objUsername;
this.objPassword;
this.objSetCkCheck;
this.frmLogin;
this.divNotice;
this.btn_login;
this.btn_reg;
this.curUserType=0;
this.noticeInit="请输入用户名和密码登录";
this.noticeAccount="请输入网易通行证用户名";
this.noticePassword="请完整填写登录信息，密码不能为空";
this.isPwdFromCk=false;
this.pwdFromCk;
this.pwdFromCkTrim;
this.strUsername;
this.strPassword;
this.qLoginZone=null;
this.loginTarget=this.options.loginTarget;
this._load();
},
_load:function(){
getLoginCookie();
if(!this.bFromIndex||this.presentShowId=="qIndexLoginDiv"){
if(NetEase.quickLoginTemplate==null)
NetEase.quickLoginTemplate=quicklogin_jst;
var regUrl="http://reg.163.com/reg0.shtml?product=blog&url=http://blog.163.com/ntesRegBlank.html";
if(this.options.invitor!=null&&this.options.group!=null){
regUrl+=encodeURIComponent("?invitor="+this.options.invitor+"&group="+this.options.group);
if(this.options.app!=null)
regUrl+=encodeURIComponent("&app="+this.options.app);
}
var data={err:false,regUrl:regUrl};
var result=NetEase.quickLoginTemplate.processUseCache(data);
if(this.presentShowId){
this.qLoginZone=this.jsWindowManager.createWindow(this.presentShowId,{
className:'g_win_4',width:408,height:236,hideFlash:true,
title:'登录',onTop:true,notKeepPos:true
});
this.qLoginZone.panel.innerHTML=result;
this.qLoginZone.showWindow();
}
}else{
if(NetEase.indexLoginTemplate==null)
NetEase.indexLoginTemplate=indexlogin_jst;
var data={err:false};
var result=NetEase.indexLoginTemplate;
$("outLoginDiv").innerHTML=result;
}
var input=new NECtrl.CxtInput('div_in_username',{inputId:'in_username',className:'cxt-input',onchange:neteasebloglogin_getList,onsuccess:function(){$('in_password').focus();}});
this.frmLogin=$("frmLogin");
this.frmLogin.setAttribute('autocomplete','off');
this.divNotice=$("notice_bar");
this.objUsername=$("in_username");
this.objPassword=$("in_password");
this.objSetCkCheck=$("setCookieCheck");
if(document.all){
this.objPassword.attachEvent("onfocus",this.fnPassOnFocus.bind(this));
this.objPassword.attachEvent("onblur",this.checkPassword.bind(this));
$("qLoginButt").attachEvent("onclick",this.dologin.bind(this));
this.frmLogin.attachEvent("onkeypress",this.frmDologinIE.bind(this));
this.objSetCkCheck.attachEvent("onclick",this.changeCookieCheck.bind(this));
}
else{
this.objPassword.addEventListener("focus",this.fnPassOnFocus.bind(this),true);
this.objPassword.addEventListener("blur",this.checkPassword.bind(this),true);
$("qLoginButt").onclick=this.dologin.bind(this);
this.frmLogin.onkeypress=this.frmDologin.bind(this);
this.objSetCkCheck.onclick=this.changeCookieCheck.bind(this);
}
this.selectUserType();
},
showWindow:function(target,title,submitButtonValue){
if(target){
this.loginTarget=target;
}
if(title){
this.jsWindowManager.updateTitle(this.presentShowId,title);
}
if(submitButtonValue){
$("qLoginButt").value=submitButtonValue;
}
this.qLoginZone.showWindow();
},
frmDologinIE:function(){
if(event.keyCode==13)
this.dologin();
},
frmDologin:function(event){
if(event.keyCode==13)
this.dologin();
},
changeCookieCheck:function(){
if(!this.objSetCkCheck.checked){
clearLoginCookie();
}
},
checkUsername:function(){
var strUsername=this.getUserName();
strUsername=Trim(strUsername);
var filter=/^[@0-9a-zA-Z_\.\-\s]+$/;
if(false==filter.test(strUsername)||strUsername.indexOf(" ")>0){
this.divNotice.innerHTML="请输入正确的用户名";
return false;
}
if(strUsername.length>0){
this.divNotice.innerHTML=this.noticeAccount;
}else{
this.divNotice.innerHTML=this.noticeInit;
}
return true;
},
checkPasswordFocus:function(){
var strPassword=this.objPassword.value;
if(strPassword==""){
strPassword=ckLoginInfo.pass;
if(null!=strPassword){
this.pwdFromCk=strPassword;
this.pwdFromCkTrim=strPassword;
this.isPwdFromCk=true;
this.objPassword.value=strPassword;
}
}
this.checkPassword();
},
fnPassOnFocus:function(){
this.objPassword.select();
this.checkPassword();
},
checkPassword:function(){
var strPassword=this.objPassword.value;
if(null==strPassword||strPassword==""){
this.isPwdFromCk=false;
}
var rePassword=/^[\s]*$/g;
if(strPassword.match(rePassword)!=null){
this.divNotice.innerHTML=this.noticePassword;
return false;
}else{
this.divNotice.innerHTML=this.noticeInit;
return true;
}
},
dologin:function(){
if(this.checkUsername()&&this.checkPassword()){
this.divNotice.innerHTML="正在登录，请稍候...";
this.objUsername.disabled=true;
this.objPassword.disabled=true;
if(document.all){
this.objUsername.detachEvent("onblur",this.checkUsername);
this.objPassword.detachEvent("onfocus",this.checkPassword);
this.objPassword.detachEvent("onblur",this.checkPassword);
$("frmLogin").detachEvent("onkeypress",this.frmDologinIE);
$("qLoginButt").detachEvent("onclick",this.dologin);
this.objSetCkCheck.detachEvent("onclick",this.changeCookieCheck);
}else{
this.objUsername.removeEventListener("blur",this.checkUsername,true);
this.objPassword.removeEventListener("focus",this.checkPassword,true);
this.objPassword.removeEventListener("blur",this.checkPassword,true);
}
var strPassword=this.objPassword.value;
var strPwdOld;
if(!this.isPwdFromCk||strPassword!=this.pwdFromCkTrim){
if(this.getCurUserType()==typeVip)
strPassword=this.pwd_js_string(strPassword);
if(this.getCurUserType()==type163||this.getCurUserType()==typeVip){
strPassword=strPassword.substring(0,16);
}else if(this.getCurUserType()==typePopo){
strPassword=strPassword.substring(0,21);
}
strPwdOld=strPassword;
strPassword=hex_md5(strPassword);
}else{
strPassword=this.pwdFromCk;
strPwdOld=strPassword;
}
var strUsername=Trim(this.objUsername.value.toLowerCase());
strUsername=neteaselogin_getBlogusername(strUsername);
var strUsernameOld=strUsername;
if(this.getCurUserType()==type126||this.getCurUserType()==type188||this.getCurUserType()==typeYeah){
strPassword=strPwdOld;
}
if(this.objSetCkCheck.checked){
clearLoginCookie();
setLoginCookie(1,strUsernameOld);
setLoginCookie(2,strPassword);
}else{
clearLoginCookie();
}
var bSavePass=this.objSetCkCheck.checked;
setLoginCookie(0,this.getCurUserType());
this.strUsername=strUsername;
this.strPassword=strPassword;
if(this.bFromIndex||this.presentShowId=="qIndexLoginDiv"){
loginFromIndex(strUsername,strPassword,bSavePass);
}else{
UserBean.checkPassportVN(strUsername,strPassword,bSavePass,this.getCurUserType(),this.preloginCb.bind(this));
}
}
return false;
},
preloginCb:function(b){
if(this.getCurUserType()==typePlayer){
var strUsername=this.strUsername;
var strPassword=this.strPassword;
PlayerBean.getPlayerUserName(strUsername,strPassword,function(v){
this.strUsername=v;
this.dologinCb("not reg!!");
}.bind(this)
);
return;
}
this.dologinCb(b);
},
calTarget:function(){
if(this.loginTarget==null){
if($("$_oppoPageUrlForLogin")&&(UD.hostName==this.strUsername)){
if(UD.hostPath=="")
this.loginTarget="http://"+DomainMap.getParentDomain(this.strUsername)+$("$_oppoPageUrlForLogin").value;
else
this.loginTarget=$("$_oppoPageUrlForLogin").value;
}
else
this.loginTarget=window.location;
}
},
getCurUserType:function(){
var strUsername=this.objUsername.value;
for(var i=0;i<neteasebloglogin_posts.length;i++){
if(strUsername.endsWith(neteasebloglogin_posts[i]))
return neteasebloglogin_types[i];
}
return-1;
},
getUserName:function(){
var strUsername=this.objUsername.value;
return neteaselogin_getBlogusername(strUsername);
},
getFullUserName:function(userName){
for(var i=0;i<neteasebloglogin_blogsuffixs.length;i++){
if(neteasebloglogin_blogsuffixs[i]!=""&&userName.endsWith(neteasebloglogin_blogsuffixs[i]))
return userName.replace(neteasebloglogin_blogsuffixs[i],neteasebloglogin_posts[i]);
}
return userName+"@163.com";
},
dologinCb:function(b){
if(b!=null){
this.calTarget();
if(b=="not reg!!"){
if(this.options.invitor!=null&&this.options.group!=null){
var url="http://blog.163.com/passportIn.do?in_username="+this.strUsername+"&in_password="+this.strPassword+
"&invitor="+this.options.invitor+"&group="+this.options.group;
if(this.options.app!=null&&this.options.app>0)
url+="&app="+this.options.app;
location.href=url+"&internal=true&type="+this.getCurUserType()+"&target="+encodeURIComponent(this.loginTarget);
}else{
location.href="http://blog.163.com/passportIn.do?in_username="+this.strUsername+"&in_password="+this.strPassword+"&target="+encodeURIComponent(this.loginTarget)+"&internal=true&type="+this.getCurUserType();;
}
}else{
Cookie.set("NETEASE_AUTH_USERNAME",this.strUsername,0,"/",".163.com");
location.href="http://blog.163.com/loginGate.do?username="+this.strUsername+"&target="+encodeURIComponent(this.loginTarget);
}
}else{
this.objPassword.value="";
this.objUsername.disabled=false;
this.objPassword.disabled=false;
this.divNotice.innerHTML="<span class='clr03'>用户名或密码不正确，请重新输入。</span>";
$("in_username").focus();
}
return false;
},
pwd_js_string:function(s){
return String(s).replace(/\\/g,"\\\\").replace(/'/g,"\\\'").replace(/"/g,"\\\"");
},
selectUserType:function(){
this.objUsername.value="";
this.objPassword.value="";
var userNameInit=ckLoginInfo.name;
if(userNameInit){
this.objUsername.value=this.getFullUserName(userNameInit);
this.checkPasswordFocus();
this.objSetCkCheck.checked=true;
this.noticeAccount="请点击登录按钮";
this.noticeInit="请点击登录按钮";
}else{
this.objSetCkCheck.checked=false;
}
var urlStr=window.location.href;
var i=urlStr.indexOf("err=");
if(i!=-1){
var errStr=urlStr.charAt(i+4);
if(errStr=="1"||errStr=="2"||errStr=="3"||errStr=="4"){
var n=parseInt(errStr);
if(n>3)n=1;
this.noticeInit=this.noticeAccount="<span class='cr'>"+errInfo[n-1]+"</span>";
}
}
this.checkUsername();
if($("in_username"))try{Field.activate("in_username");}catch(e){};
return false;
}
}
function neteaselogin_getBlogusername(username){
return username.replace("@163.com","").replace("@126.com","@126").replace("@yeah.net","@yeah").replace("@popo.163.com",".popo").replace("@188.com","@188").replace("@vip.163.com",".vip").replace("@game.163.com","");
}
function getLoginCookie(){
var a;
var v=Cookie.get(ckLoginInfoKey);
if(v){
a=v.split("|");
try{
if(a.length>3){
Cookie.clear(ckLoginInfoKey,ckPath);
return;
}
}catch(e){}
var type=null;
if(a[0])
ckLoginInfo.type=parseInt(a[0]);
if(ckLoginInfo.type==null||ckLoginInfo.type==undefined||ckLoginInfo.type<0||ckLoginInfo.type>5){
ckLoginInfo.type=null;
return;
}
if(a[1]!=null&&a[1]!=undefined&&a[1]!="null"&&a[2]!=null&&a[2]!=undefined){
ckLoginInfo.name=a[1];
ckLoginInfo.pass=a[2];
}
}
}
function setLoginCookie(which,value){
getLoginCookie();
if(which==0)
ckLoginInfo.type=value;
else if(which==1)
ckLoginInfo.name=value;
else if(which==2)
ckLoginInfo.pass=value;
Cookie.clear(ckLoginInfoKey,ckPath);
Cookie.set(ckLoginInfoKey,ckLoginInfo.type+"|"+ckLoginInfo.name+"|"+ckLoginInfo.pass,30,ckPath,ckDomain);
}
function clearLoginCookie(){
ckLoginInfo.name=null;
ckLoginInfo.pass=null;
Cookie.clear(ckLoginInfoKey,ckPath);
if(ckLoginInfo.type!=null&&ckLoginInfo.type!=undefined&&ckLoginInfo.type!="null")
Cookie.set(ckLoginInfoKey,ckLoginInfo.type,30,ckPath,ckDomain);
}
var Cookie={
set:function(name,value,expirationInDays,path,domain){
var cookie=escape(name)+"="+escape(value);
if(expirationInDays){
var date=new Date();
date.setDate(date.getDate()+expirationInDays);
cookie+="; expires="+date.toGMTString();
}
if(path){
cookie+=";path="+path;
}
if(domain){
cookie+=";domain="+domain;
}
document.cookie=cookie;
if(value&&(expirationInDays==undefined||expirationInDays>0)&&!this.get(name)){
return false;
}
},
clear:function(name,path){
this.set(name,"",-1,path,ckDomain);
},
get:function(name){
var pattern="(^|;)\\s*"+escape(name)+"=([^;]+)";
var m=document.cookie.match(pattern);
if(m&&m[2]){
return unescape(m[2]);
}else{
return null;
}
}
}
var quicklogin_jst=new String('\
<div>\
   <form name="frmLogin"  id="frmLogin"  method="post">\
   <table border="0" cellpadding="0" cellspacing="0">\
    <tr class="row0"><td width="40">&nbsp;</td><td><div class="mgntxt clr02" id="notice_bar" style="display-left:0px;">请输入网易通行证用户名和密码登录</div></td></tr>\
    <tr><td class="fcb">用户名</td><td><div id="div_in_username"></div></td></tr>\
    <tr><td class="fcb">密　码</td><td><input type="password" tabindex="2" class="txt" name="in_password" id="in_password"/></td></tr>\
    <tr><td>&nbsp;</td><td><a href="http://reg.163.com/RecoverPasswd1.shtml" tabindex="4" target="_blank" id="getPass_add" class="a-pwd">忘记密码？</a><input name="setCookieCheck" tabindex="3" id="setCookieCheck" type="checkbox"/><label for="setCookieCheck">自动登录</label></td></tr>\
    <tr><td>&nbsp;</td><td><div class="btns"><a href="${regUrl}" tabindex="6" target="_blank" class="a-reg">注册通行证 --></a><input class="ok" tabindex="5" type="button" value="登　录" id="qLoginButt"/></div></td></tr>\
   </table>\
   </form>\
</div>');
var neteasebloglogin_blogsuffixs=['','@126','.popo','@188','.vip','@yeah','@game'];
var neteasebloglogin_posts=['@163.com','@126.com','@popo.163.com','@188.com','@vip.163.com','@yeah.net','@game.163.com'];
var neteasebloglogin_types=[type163,type126,typePopo,type188,typeVip,typeYeah,typePlayer];
function getNameSuffix(type){
for(var i=0;i<neteasebloglogin_types.length;i++){
if(type==neteasebloglogin_types[i])
return neteasebloglogin_blogsuffixs[i];
}
return-1;
};
function neteasebloglogin_getList(value,cb){
if(value==undefined||value==''||!cb)return;
var arr=/([^@]*)(.*)/.exec(value),list=[];
var pre=arr[1],post=arr[2];
neteasebloglogin_posts.each(function(pt){
if(pt.indexOf(post)!=-1){
list.push(pre+pt);
}
});
cb(list);
}
String.prototype.endsWith=function(str){return(this.match(str+"$")==str)}
function PlayerBean(){}
PlayerBean.getPlayerUserName=function(p0,p1,callback){dwr.engine._execute('/dwr','PlayerBean','getPlayerUserName',p0,p1,callback);}
function UserBean(){}
UserBean._path="/dwr";
UserBean.clearSession=function(callback){dwr.engine._execute(UserBean._path,'UserBean','clearSession',false,false,callback);}
UserBean.check=function(p0,p1,callback){dwr.engine._execute(UserBean._path,'UserBean','check',p0,p1,false,false,false,callback);}
UserBean.checkPassport=function(p0,p1,p2,callback){dwr.engine._execute(UserBean._path,'UserBean','checkPassport',p0,p1,p2,false,false,false,callback);}
UserBean.checkPassportVN=function(p0,p1,p2,p3,callback){dwr.engine._execute(UserBean._path,'UserBean','checkPassportVN',p0,p1,p2,p3,false,false,false,callback);}
UserBean.getProvinceAndCity=function(callback){dwr.engine._execute(UserBean._path,'UserBean','getProvinceAndCity',false,false,callback);}
if(NECtrl==undefined){
var NECtrl={};
}
NECtrl.CxtInput=Class.create();
NECtrl.CxtInput.prototype.initialize=function(oParent,oOptions){
oParent=$(oParent);
if(!oParent)return;
oOptions=oOptions||{};
this.body=document.createElement('div');
this.body.className=oOptions.className||'';
this.cbChange=oOptions.onchange||Prototype.emptyFunction;
this.cbSuccess=oOptions.onsuccess;
var str='<input type="text" autocomplete="off" class="txt"';
if(oOptions.inputId)str+=' id="'+oOptions.inputId+'"'+' name="'+oOptions.inputId+'"';
str+='/><div class="'+oOptions.className+'-cxt" style="display:none;"></div>';
this.body.innerHTML=str;
this.input=this.body.getElementsByTagName('input')[0];
this.context=this.body.getElementsByTagName('div')[0];
Event.observe(this.input,'input',this.onChange.bind(this));
Event.observe(this.input,'propertychange',this.onChange.bind(this));
Event.observe(this.input,'keypress',this.onKeyPress.bindAsEventListener(this));
Event.observe(document,'click',this.onClick.bind(this));
oParent.appendChild(this.body);
};
NECtrl.CxtInput.prototype.onChange=function(){
if(this.input.value==''){
this.context.style.display='none';
return;
}
this.cbChange(this.input.value,this.onListChange.bind(this));
};
NECtrl.CxtInput.prototype.onListChange=function(list){
if(!list||!list.length)return;
this.resetList(list);
this.context.style.display='';
};
NECtrl.CxtInput.prototype.onKeyPress=function(event){
switch(event.keyCode){
case 9:
case 13:
this.select(this.context.curIndex);
Event.stop(event);
break;
case 38:
if(this.context.curIndex>0){
Element.removeClassName(this.context.getElementsByTagName('div')[this.context.curIndex+1],'cur');
this.context.curIndex--;
Element.addClassName(this.context.getElementsByTagName('div')[this.context.curIndex+1],'cur');
}
break;
case 40:
if(this.context.curIndex<this.list.length-1){
Element.removeClassName(this.context.getElementsByTagName('div')[this.context.curIndex+1],'cur');
this.context.curIndex++;
Element.addClassName(this.context.getElementsByTagName('div')[this.context.curIndex+1],'cur');
}
break;
}
};
NECtrl.CxtInput.prototype.resetList=function(list){
if(!list||!list.length)list=[];
this.list=list;
for(var i=0,cs=this.context.childNodes,len=cs.length;i<len;i++)
this.context.removeChild(this.context.firstChild);
var frag=document.createDocumentFragment(),tpl=document.createElement('div'),div;
div=tpl.cloneNode(false);
div.className='hint';
div.innerText=div.textContent='请选择用户';
div.onclick=this.select.bind(this,this.context.curIndex);
frag.appendChild(div);
for(var i=0,l=list.length,self=this;i<l;i++){
div=tpl.cloneNode(false);
div.innerText=div.textContent=list[i];
if(i==0){
Element.addClassName(div,'cur');
this.context.curIndex=i;
}
div.onmouseover=this.onMouseOver.bind(this,i);
frag.appendChild(div);
}
this.context.appendChild(frag);
};
NECtrl.CxtInput.prototype.onMouseOver=function(index){
Element.removeClassName(this.context.getElementsByTagName('div')[this.context.curIndex+1],'cur');
this.context.curIndex=index;
Element.addClassName(this.context.getElementsByTagName('div')[this.context.curIndex+1],'cur');
};
NECtrl.CxtInput.prototype.onClick=function(){
if(this.context.curIndex!=undefined&&this.context.style.display!='none')this.select(this.context.curIndex);
};
NECtrl.CxtInput.prototype.select=function(index){
this.input.value=this.list[index];
this.context.style.display='none';
this.cbSuccess&&this.cbSuccess();
};
function getContent(params){
var movie_name=params["movie_name"];
var movie_id=params["movie_id"];
var majorv=params["majorv"].valueOf();
var minorv=params["minorv"].valueOf();
var rev=params["rev"].valueOf();
var hasProductInstall=DetectFlashVer(6,0,65);
var hasRequestedVersion=DetectFlashVer(majorv,minorv,rev);
var content="";
if(hasRequestedVersion){
content="<embed wmode=\"transparent\" src=\""+movie_name+"\" ";
if(movie_id!=undefined)
content+="id=\""+movie_id+"\" ";
content+="quality=\"high\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" width=\"100%\"></embed>";
}else{
content="Flash播放器版本太低，请您<br>"+
"<a href=\"http://www.macromedia.com/go/getflashplayer\" target=_blank>点击这里从adobe主页更新Flash播放器</a><br>";
if(hasProductInstall){
content+="或者<br>"+
"<a href=\"\" target=_blank>点击这里尝试自动更新</a>";
}
}
return content;
}
function getParams(typeid){
var params=initParas[typeid][0];
return params;
}
function writeDiv(typeid){
var params=getParams(typeid);
$(params["target_div_id"]).innerHTML=getContent(params);
}
NECtrl.SeleniumTester=Class.create();
NECtrl.SeleniumTester.prototype={
initialize:function(){
this._sPrefix="suf";
this._oHash=[];
},
setSingle:function(sElement,sValue){
this._oHash[this._sPrefix+sElement]=sValue;
$(this._sPrefix+sElement).innerHTML=sValue;
},
setArray:function(sElement,aValue){
this._oHash[this._sPrefix+sElement]=aValue;
if(aValue!="null")
$(this._sPrefix+sElement).innerHTML=aValue.toString();
else
$(this._sPrefix+sElement).innerHTML="null";
},
set2DArray:function(sElement,aValue,sRelElem,sRelValue){
if(!this._oHash[this._sPrefix+sElement]){
var _oElem=this._oHash[this._sPrefix+sElement]=[];
var _oRelElem=this._oHash[this._sPrefix+sRelElem];
for(var i=0,l=this._oHash[this._sPrefix+sRelElem].length;i<l;i++){
_oElem[_oRelElem[i]]=[];
}
}
this._oHash[this._sPrefix+sElement][sRelValue]=aValue;
if(aValue!="null")
$(this._sPrefix+sElement).innerHTML=this._get2DString(this._oHash[this._sPrefix+sElement]);
else
$(this._sPrefix+sElement).innerHTML="null";
},
_get2DString:function(oElement){
var s="";
var _oElem=$H(oElement);
var _aElemValues=_oElem.values();
for(var i=0,l=_aElemValues.length;i<l;i++){
s+="["+_aElemValues[i].toString()+"]";
}
return s;
}
};
gNameSpace.register('NEUtil');
NEUtil.MD5={
hex:function(sValue){
return this._fnBin2Hex(this._fnCore(this._fnStr2Bin(sValue)),sValue.length*this._nChrsz);
},
str:function(sValue){
return this._fnStr2B64(this._fnCore(this._fnStr2Bin(sValue)),sValue.length*this._nChrsz);
},
_fnBin2Hex:function(aBinArray){
var _sHexTab=this._sHexTab;
var _sStr="";
for(var i=0,l=aBinArray.length*4;i<l;i++){
_sStr+=_sHexTab.charAt((aBinArray[i>>2]>>((i%4)*8+4))&0xF);
_sStr+=_sHexTab.charAt((aBinArray[i>>2]>>((i%4)*8))&0xF);
}
return _sStr;
},
_fnStr2Bin:function(sStr){
var _aBin=[];
var _nMask=(1<<this._nChrsz)-1;
for(var i=0,l=sStr.length*this._nChrsz;i<l;i+=this._nChrsz)
_aBin[i>>5]|=(sStr.charCodeAt(i/this._nChrsz)&_nMask)<<(i%32);
return _aBin;
},
_fnCmm:function(q,a,b,x,s,t){
return this._fnAdd(this._fnBr(this._fnAdd(this._fnAdd(a,q),this._fnAdd(x,t)),s),b);
},
_fnFf:function(a,b,c,d,x,s,t){
return this._fnCmm((b&c)|((~b)&d),a,b,x,s,t);
},
_fnGg:function(a,b,c,d,x,s,t){
return this._fnCmm((b&d)|(c&(~d)),a,b,x,s,t);
},
_fnHh:function(a,b,c,d,x,s,t){
return this._fnCmm(b^c^d,a,b,x,s,t);
},
_fnIi:function(a,b,c,d,x,s,t){
return this._fnCmm(c^(b|(~d)),a,b,x,s,t);
},
_fnAdd:function(nX,nY){
var _nLsw=(nX&0xFFFF)+(nY&0xFFFF);
var _nMsw=(nX>>16)+(nY>>16)+(_nLsw>>16);
return(_nMsw<<16)|(_nLsw&0xFFFF);
},
_fnBr:function(nNum,nCount){
return(nNum<<nCount)|(nNum>>>(32-nCount));
},
_fnCore:function(sX,nLen){
sX[nLen>>5]|=0x80<<((nLen)%32);
sX[(((nLen+64)>>>9)<<4)+14]=nLen;
var _a=1732584193;
var _b=-271733879;
var _c=-1732584194;
var _d=271733878;
for(var i=0,l=sX.length;i<l;i+=16){
var _olda=_a;
var _oldb=_b;
var _oldc=_c;
var _oldd=_d;
_a=this._fnFf(_a,_b,_c,_d,sX[i+0],7,-680876936);
_d=this._fnFf(_d,_a,_b,_c,sX[i+1],12,-389564586);
_c=this._fnFf(_c,_d,_a,_b,sX[i+2],17,606105819);
_b=this._fnFf(_b,_c,_d,_a,sX[i+3],22,-1044525330);
_a=this._fnFf(_a,_b,_c,_d,sX[i+4],7,-176418897);
_d=this._fnFf(_d,_a,_b,_c,sX[i+5],12,1200080426);
_c=this._fnFf(_c,_d,_a,_b,sX[i+6],17,-1473231341);
_b=this._fnFf(_b,_c,_d,_a,sX[i+7],22,-45705983);
_a=this._fnFf(_a,_b,_c,_d,sX[i+8],7,1770035416);
_d=this._fnFf(_d,_a,_b,_c,sX[i+9],12,-1958414417);
_c=this._fnFf(_c,_d,_a,_b,sX[i+10],17,-42063);
_b=this._fnFf(_b,_c,_d,_a,sX[i+11],22,-1990404162);
_a=this._fnFf(_a,_b,_c,_d,sX[i+12],7,1804603682);
_d=this._fnFf(_d,_a,_b,_c,sX[i+13],12,-40341101);
_c=this._fnFf(_c,_d,_a,_b,sX[i+14],17,-1502002290);
_b=this._fnFf(_b,_c,_d,_a,sX[i+15],22,1236535329);
_a=this._fnGg(_a,_b,_c,_d,sX[i+1],5,-165796510);
_d=this._fnGg(_d,_a,_b,_c,sX[i+6],9,-1069501632);
_c=this._fnGg(_c,_d,_a,_b,sX[i+11],14,643717713);
_b=this._fnGg(_b,_c,_d,_a,sX[i+0],20,-373897302);
_a=this._fnGg(_a,_b,_c,_d,sX[i+5],5,-701558691);
_d=this._fnGg(_d,_a,_b,_c,sX[i+10],9,38016083);
_c=this._fnGg(_c,_d,_a,_b,sX[i+15],14,-660478335);
_b=this._fnGg(_b,_c,_d,_a,sX[i+4],20,-405537848);
_a=this._fnGg(_a,_b,_c,_d,sX[i+9],5,568446438);
_d=this._fnGg(_d,_a,_b,_c,sX[i+14],9,-1019803690);
_c=this._fnGg(_c,_d,_a,_b,sX[i+3],14,-187363961);
_b=this._fnGg(_b,_c,_d,_a,sX[i+8],20,1163531501);
_a=this._fnGg(_a,_b,_c,_d,sX[i+13],5,-1444681467);
_d=this._fnGg(_d,_a,_b,_c,sX[i+2],9,-51403784);
_c=this._fnGg(_c,_d,_a,_b,sX[i+7],14,1735328473);
_b=this._fnGg(_b,_c,_d,_a,sX[i+12],20,-1926607734);
_a=this._fnHh(_a,_b,_c,_d,sX[i+5],4,-378558);
_d=this._fnHh(_d,_a,_b,_c,sX[i+8],11,-2022574463);
_c=this._fnHh(_c,_d,_a,_b,sX[i+11],16,1839030562);
_b=this._fnHh(_b,_c,_d,_a,sX[i+14],23,-35309556);
_a=this._fnHh(_a,_b,_c,_d,sX[i+1],4,-1530992060);
_d=this._fnHh(_d,_a,_b,_c,sX[i+4],11,1272893353);
_c=this._fnHh(_c,_d,_a,_b,sX[i+7],16,-155497632);
_b=this._fnHh(_b,_c,_d,_a,sX[i+10],23,-1094730640);
_a=this._fnHh(_a,_b,_c,_d,sX[i+13],4,681279174);
_d=this._fnHh(_d,_a,_b,_c,sX[i+0],11,-358537222);
_c=this._fnHh(_c,_d,_a,_b,sX[i+3],16,-722521979);
_b=this._fnHh(_b,_c,_d,_a,sX[i+6],23,76029189);
_a=this._fnHh(_a,_b,_c,_d,sX[i+9],4,-640364487);
_d=this._fnHh(_d,_a,_b,_c,sX[i+12],11,-421815835);
_c=this._fnHh(_c,_d,_a,_b,sX[i+15],16,530742520);
_b=this._fnHh(_b,_c,_d,_a,sX[i+2],23,-995338651);
_a=this._fnIi(_a,_b,_c,_d,sX[i+0],6,-198630844);
_d=this._fnIi(_d,_a,_b,_c,sX[i+7],10,1126891415);
_c=this._fnIi(_c,_d,_a,_b,sX[i+14],15,-1416354905);
_b=this._fnIi(_b,_c,_d,_a,sX[i+5],21,-57434055);
_a=this._fnIi(_a,_b,_c,_d,sX[i+12],6,1700485571);
_d=this._fnIi(_d,_a,_b,_c,sX[i+3],10,-1894986606);
_c=this._fnIi(_c,_d,_a,_b,sX[i+10],15,-1051523);
_b=this._fnIi(_b,_c,_d,_a,sX[i+1],21,-2054922799);
_a=this._fnIi(_a,_b,_c,_d,sX[i+8],6,1873313359);
_d=this._fnIi(_d,_a,_b,_c,sX[i+15],10,-30611744);
_c=this._fnIi(_c,_d,_a,_b,sX[i+6],15,-1560198380);
_b=this._fnIi(_b,_c,_d,_a,sX[i+13],21,1309151649);
_a=this._fnIi(_a,_b,_c,_d,sX[i+4],6,-145523070);
_d=this._fnIi(_d,_a,_b,_c,sX[i+11],10,-1120210379);
_c=this._fnIi(_c,_d,_a,_b,sX[i+2],15,718787259);
_b=this._fnIi(_b,_c,_d,_a,sX[i+9],21,-343485551);
_a=this._fnAdd(_a,_olda);
_b=this._fnAdd(_b,_oldb);
_c=this._fnAdd(_c,_oldc);
_d=this._fnAdd(_d,_oldd);
}
return Array(_a,_b,_c,_d);
},
_bHexcase:false,
_sB64pad:'',
_nChrsz:8,
_sHexTab:this._bHexcase?'0123456789ABCDEF':'0123456789abcdef',
_sTab:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
};
gCodeLoad.regLoaded('{F6707A8B-BD1E-413e-AE9F-04A9B6A9506C}');
gNameSpace.register('Local');
gNameSpace.register('Local.Message');
Local.Message.Blog=[
"你所发表的内容中包含非163.com域名的链接，发布不成功。"
];
if(NetEase==undefined){
var NetEase={};
}
NetEase.StatusBar=Class.create();
NetEase.StatusBar.prototype={
initialize:function(msg){
this.options=Object.extend({
barId:"status_bar",
fade:false,
imgsrc:'style/images/icon_confirm.gif',
timeout:5000
},arguments[1]||{});
$(this.options.barId).style.display='block';
$(this.options.barId).innerHTML='<img src="'+this.options.imgsrc+'"/>&nbsp;'+msg;
window.setTimeout(this._clean.bind(this),this.options.timeout);
},
_clean:function(){
if(this.options.fade)
Effect.Fade(this.options.barId);
else{
$(this.options.barId).innerHTML='';
$(this.options.barId).style.display='none';
}
}
}
var gFeedback={};
gFeedback.sVersion="1.2";
gFeedback.openPopcommentReport=fOpenPopcommentReport;
var advicePublishTypes={1:"提问",2:"建议",3:"批评",4:"其他"};
var adviceModuleTypes={1:"日志",2:"博友",3:"关于我",4:"相片",5:"访问",6:"日历",7:"天气",
8:"自定义HTML",9:"留言",10:"音乐播放器",11:"风格",12:"版式",0:"其他"};
var popAdviceContent=
'<!-- 用户反馈 -->'+
' <table class="g_c_mvdn" border="0" cellspacing="0" cellpadding="0">'+
'        <tr><td class="g_w_20 g_t_right">昵　　称：</td><td><input class="g_w_90 g_h_ipt" type="text" name="advicePublisherNickName" id="advicePublisherNickName"/></td></tr>'+
'       <tr><td class="g_w_20 g_t_right">反馈类别：</td><td><select class="g_w_40"  nohide="true" id="advicePublishType"></select>&nbsp;&nbsp;<label>内容类别：</label><select class="g_w_40" nohide="true" id="adviceModuleType"></select></td></tr>'+
'       <tr><td class="g_w_20 g_t_right g_t_top">具体内容：</td><td><textarea class="g_h_105 g_w_90"  id="advicePublishContent"></textarea></td></tr>'+
'       <tr><td colspan="2" class="g_t_center">'+
'         <input type="button" class="btncm btnok" value="提　交" id="submitPopAdviceBtn" onclick="submitPopAdvice();" />'+
'         <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'+
'         <input type="button" class="btncm btncc" value="取　消" onclick="popAdviceWin.hiddenWindow();" />'+
'       </td></tr>'+
'      </table>';
var popAdviceWin=null;
function initPopAdvice(){
var visitorNickname=UD.visitorNickname;
if(visitorNickname=="")visitorNickname="网易博友";
$("advicePublisherNickName").value=visitorNickname;
$("advicePublishContent").value="";
$("submitPopAdviceBtn").value="提 交";
var focusArray=['advicePublisherNickName','advicePublishContent'];
attachFocusEvent(focusArray,"input_textbox_bright");
$("advicePublishContent").focus();
}
function openPopAdvice(){
if(popAdviceWin!=null){
popAdviceWin.showWindow();
initPopAdvice();
return;
}
if(jsWindowManager==null)
jsWindowManager=new NetEase.JSWindowManager();
popAdviceWin=jsWindowManager.createWindow("$_popAdviceWinId",{
className:'g_win_7',width:450,height:245,
notKeepPos:true,title:'用户反馈',onTop:false
});
popAdviceWin.panel.innerHTML=popAdviceContent;
popAdviceWin.showWindow();
fillSelectMap("advicePublishType",advicePublishTypes);
fillSelectMap("adviceModuleType",adviceModuleTypes);
initPopAdvice();
}
function submitPopAdvice(){
var advice={
"publisherName":UD.visitorName,
"publisherNickName":Trim($("advicePublisherNickName").value),
"publishContent":Trim($("advicePublishContent").value),
"publishType":Trim($("advicePublishType").value),
"moduleType":Trim($("adviceModuleType").value)
};
if(advice["publishContent"].length==0){
alert("具体内容不能为空");
return;
}
if(advice["publishContent"].length>1000){
alert("您输入的内容过长，请控制在一千字以内，谢谢");
return;
}
if(advice["publisherNickName"]=="")
publisherNickName="网易网友";
if(advice["publisherNickName"].length>18){
alert("昵称应该不能多于18个字符");
return;
}
$("submitPopAdviceBtn").value="提交中.....";
AdviceBean.addAdvice(advice,postSubmitPopAdvice);
}
function postSubmitPopAdvice(advice){
if(advice.id!=-1){
alert("反馈已提交，我们会尽快处理，谢谢！");
popAdviceWin.hiddenWindow();
}
}
var reportTypeNames={"-1":"请选择",1:"危害国家安全/泄露国家机密",2:"危害公共安全",3:"虐待儿童的图片或内容",4:"骚扰/恐吓",
5:"侵犯版权",6:"垃圾广告",7:"其他"};
var innerTypeNames={"-1":"请选择",0:"网络日志",1:"日志评论",2:"相片",3:"相片评论",4:"列表资源",5:"朋友圈",6:"标签",7:"留言板"}
var popreportContent=
' <table class="g_c_mvdn g_w_95 g_p_center" border="0" cellspacing="0" cellpadding="0">'+
'        <tr class="g_p_visible"><td class="g_w_25"></td><td class="g_w_75"></td></tr>'+
'       <tr><td colspan="2"><p class="g_t_left">感谢你对网易博客的关注和支持！如果你在网易日志、相册、或评论中发现有色情、暴力及其它不健康内容，请填写下面的表单反馈给我们。我们将尽快处理你所提交的内容。</p></td></tr>'+
'        <tr><td class="g_t_right">你的邮箱地址：</td><td><input class="g_w_90 g_h_ipt" type="text" name="popReportEmail" id="popReportEmail"  maxlength="60"/></td></tr>'+
'       <tr><td class="g_t_right">举报的网址：</td><td><input class="g_w_90 g_h_ipt" type="text" name="popReportUrl" id="popReportUrl" maxlength="200"/></td></tr>'+
'       <tr><td class="g_t_right">不良信息位置：</td><td><select nohide="true" class="g_w_35" id="popReportInnerType"></select>&nbsp;&nbsp;<label>不良信息类型：</label><select nohide="true" class="g_w_35" id="popReportType"></select></td></tr>'+
'       <tr><td class="g_t_right g_t_top">具体内容：</td><td><textarea class="g_h_105 g_w_90" id="popReportDetail"></textarea></td></tr>'+
'       <tr><td colspan="2" class="g_t_center">'+
'         <input type="button" class="btncm btnok" value="提　交" id="submitPopreportBtn" onclick="submitPopreport();" />'+
'         <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'+
'         <input type="button" class="btncm btncc" value="取　消" onclick="popReportWin.hiddenWindow();" />'+
'         <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'+
'       </td></tr>'+
'      </table>';
var popReportWin=null;
function initPopReport(){
$("popReportUrl").value=window.location.href;
$("popReportDetail").value="";
$("popReportEmail").value="";
$("submitPopreportBtn").value="提  交";
var focusArray=['popReportEmail','popReportUrl','popReportDetail'];
attachFocusEvent(focusArray,"input_textbox_bright");
$("popReportDetail").focus();
}
function openPopreport(){
if(popReportWin!=null){
popReportWin.showWindow();
initPopReport();
return;
}
if(jsWindowManager==null)
jsWindowManager=new NetEase.JSWindowManager();
popReportWin=jsWindowManager.createWindow("$_popReportWinId",{
className:'g_win_7',width:450,height:320,
notKeepPos:true,title:'不良信息举报',onTop:false
});
popReportWin.panel.innerHTML=popreportContent;
popReportWin.showWindow();
fillSelectMap("popReportType",reportTypeNames);
fillSelectMap("popReportInnerType",innerTypeNames);
initPopReport();
}
function submitPopreport(){
var reportName=UD.visitorName;
if(reportName=="")
reportName="匿名";
var userReport={
"reportName":reportName,
"reportID":0,
"reportNameEmail":Trim($("popReportEmail").value),
"reportUrl":Trim($("popReportUrl").value),
"reportType":Trim($("popReportType").value),
"reportDetail":Trim($("popReportDetail").value),
"innerType":Trim($("popReportInnerType").value)
};
var check=userReport["reportNameEmail"];
if(userReport["innerType"]=="-1"){
alert("请选择不良信息位置 ");
return false;
}
if(userReport["reportType"]=="-1"){
alert("请选择不良信息类型 ");
return false;
}
if((check!="")&&(!(checkMail(check)&&check.length<=60)))
{
alert("请输入正确的电子邮件格式 ");
return false;
}
check=userReport["reportUrl"];
if(check==null||Trim(check)==""||check.indexOf("http://")<0||check.length>200)
{
alert("请输入合法的举报网址");
return false;
}
check=userReport["reportDetail"];
if(Trim(check).length>1000)
{
alert("您所输入的内容过长，请控制在一千字以内，谢谢 ");
return false;
}
$("submitPopreportBtn").value="提交中.....";
PreUserReportBean.addUserReport(userReport,postSubmitPopreport);
}
function postSubmitPopreport(report){
if(report.id!=-1){
alert("用户举报已提交，我们会尽快处理，谢谢！");
popReportWin.hiddenWindow();
}
}
var commentReportTypeNames={0:"请选择",11:"色情",12:"暴力",13:"销售广告",14:"欺诈",
15:"危害公众安全",16:"频繁发布",17:"其他"};
var popcommentReportContent=
' <table class="g_c_mvdn g_w_95 g_p_center" border="0" cellspacing="0" cellpadding="0">'+
'        <tr class="g_p_visible"><td class="g_w_25"></td><td class="g_w_75"></td></tr>'+
'       <tr><td colspan="2">'+
'        <p class="g_t_left g_c_vmgin">感谢你加入到“博客大家园，我维护”的热心博友行列中，我们将认真地处理你提交的内容。如果你在我们的博客评论中发现有色情、暴力、销售广告、人身攻击等违规内容，请填写下面的表单反馈我们。</p>'+
'        <p class="g_t_left g_c_vmgin">再次感谢你对我们共同网络家园的维护！</p>'+
'       </td></tr>'+
'       <tr><td class="g_t_right">不良信息类型：</td><td><select class="g_w_35" nohide="true" id="popCommentReportType"></select>&nbsp;&nbsp;<label>建议处理方式：</label><select class="g_w_35" nohide="true" id="popCommentReportOpType"></select></td></tr>'+
'       <tr><td class="g_t_right g_t_top">不良信息描述：</td><td><textarea class="g_h_105 g_w_90" id="popCommentReportDetail"></textarea></td></tr>'+
'       <tr><td colspan="2" class="g_t_center">'+
'         <input type="button" class="btncm btnok" value="提　交" id="submitPopcommentReportBtn" onclick="submitPopcommentReport(\'${innerIDStr}\');"/>'+
'         <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>'+
'         <input type="button" class="btncm btncc" value="取　消" onclick="popCommentReportWin.hiddenWindow();" />'+
'       </td></tr>'+
'      </table>';
var popCommentReportWin=null;
var commentReports={};
function initPopCommentReport(){
$("popCommentReportDetail").value="";
$("submitPopcommentReportBtn").value="提  交";
$("popCommentReportType").value=0;
$("popCommentReportOpType").value=0;
}
function fOpenPopcommentReport(oReport){
if(popCommentReportWin!=null){
popCommentReportWin.showWindow();
initPopCommentReport();
fillpopCommentReportType(oReport);
return;
}
if(jsWindowManager==null)
jsWindowManager=new NetEase.JSWindowManager();
commentReports[oReport.innerIDStr]=oReport;
popCommentReportWin=jsWindowManager.createWindow("$_popCommentReportWinId",{
className:'g_win_7',width:450,height:300,
notKeepPos:true,title:'&nbsp;&nbsp;不良信息反馈',onTop:false
});
popCommentReportWin.panel.innerHTML=popcommentReportContent.replace("${innerIDStr}",oReport.innerIDStr);
popCommentReportWin.showWindow();
fillpopCommentReportType(oReport);
initPopCommentReport();
}
function fillpopCommentReportType(oReport){
fillSelectMap("popCommentReportType",commentReportTypeNames);
var popCommentReportOpType={0:"请选择","删除":"删除"};
if(oReport.publisherName!=null&&oReport.publisherName!=""){
popCommentReportOpType["屏蔽信息发布者博客"]="屏蔽信息发布者博客";
}
fillSelectMap("popCommentReportOpType",popCommentReportOpType);
}
function submitPopcommentReport(innerIDStr){
if($("popCommentReportType").value==0){
alert("请选择不良信息类型");
return
}
if($("popCommentReportOpType").value==0){
alert("请选择建议处理方式");
return
}
var userCommentReport=commentReports[innerIDStr];
userCommentReport["reportDetail"]="建议处理方式:"+Trim($("popCommentReportOpType").value)+"<br>"
+"不良信息描述:"+Trim($("popCommentReportDetail").value)+"<br>"+commentReports[innerIDStr]["reportDetail"];
userCommentReport["reportType"]=Trim($("popCommentReportType").value);
var check=$("popCommentReportDetail").value;
if(Trim(check).length>300)
{
alert("您所输入的内容过长，请控制在三百字以内，谢谢 ");
return false;
}
$("submitPopcommentReportBtn").value="提交中.....";
PreUserReportBean.addUserReport(userCommentReport,postSubmitPopcommentReport);
}
function postSubmitPopcommentReport(commentReport){
if(commentReport.id!=-1){
alert("用户举报已提交，我们会尽快处理，谢谢！");
popCommentReportWin.hiddenWindow();
}
}
function fillSelectMap(nodeString,obj){
var node=$(nodeString);
clearSelectOptions(node);
var hashMap=$H(obj);
var nodelen=node.length;
hashMap.each(
function(pair){
node.options[nodelen++]=new Option(pair.value,pair.key);
}
);
}
function clearSelectOptions(node){
var len=node.options.length;
for(var i=0;i<len;i++){
node.remove(0);
}
}
function newPlaceEdit(hostId){
var hostId=hostId;
if(g_urlPrefix==null||g_urlPrefix!="/photos"){
new NetEase.PlaceEdit('spacename',hostId,saveSpaceNameFunc,{
editStyle:'g_w_20 bd01 g_t_14 g_c_input',savaButStyle:'g_c_smvdn g_c_button bd01 butn c05',cancelButStyle:'g_c_smvdn g_c_button bd01 butn c05',
emptyText:'<nobr class="g_t_italic">点击这里添加博客名称</nobr>',maxLength:20,btnBelow:false,editIcon:'spacenameop',attchEventToParent:true,bExtendText:true,extendText:'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'});
new NetEase.PlaceEdit('spacedesc',hostId,saveSpaceDescFunc,{
editStyle:'g_w_20 bd01 g_t_14 g_c_input',savaButStyle:'g_c_smvdn g_c_button bd01 butn c05',cancelButStyle:'g_c_smvdn g_c_button bd01 butn c05',
emptyText:'<nobr class="g_t_italic">点击这里添加博客描述</nobr>',maxLength:40,btnBelow:false,editIcon:'spacedescop',attchEventToParent:true,bExtendText:true,extendText:'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'});
}
else if(g_urlPrefix=="/photos"){
new NetEase.PlaceEdit('spacename',hostId,saveSpaceNameFunc,{
editStyle:'g_w_20 bd01 g_t_14 g_c_input',savaButStyle:'g_c_smvdn g_c_button bd01 butn c05',cancelButStyle:'g_c_smvdn g_c_button bd01 butn c05',
emptyText:'<nobr class="g_t_italic">点击这里添加相册名称</nobr>',maxLength:20,btnBelow:false,editIcon:'spacenameop',attchEventToParent:true,bExtendText:true,extendText:'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'});
new NetEase.PlaceEdit('spacedesc',hostId,saveSpaceDescFunc,{
editStyle:'g_w_20 bd01 g_t_14 g_c_input',savaButStyle:'g_c_smvdn g_c_button bd01 butn c05',cancelButStyle:'g_c_smvdn g_c_button bd01 butn c05',
emptyText:'<nobr class="g_t_italic">点击这里添加相册描述</nobr>',maxLength:40,btnBelow:false,editIcon:'spacedescop',attchEventToParent:true,bExtendText:true,extendText:'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'});
}
}
function saveSpaceNameFunc(resourceId,spaceName,callBackFunc){
UserBean.updateSpaceName(resourceId,spaceName,{
callback:callBackFunc,
errorHandler:function(errorString,ex){
callBackFunc(false);
filterWarning(ex,false);;
}
});
}
function saveSpaceDescFunc(resourceId,spaceDesc,callBackFunc){
UserBean.updateSpaceDesc(resourceId,spaceDesc,{
callback:callBackFunc,
errorHandler:function(errorString,ex){
callBackFunc(false);
filterWarning(ex,false);;
}
});
}
var visitorGroupListsForHost=null;
var inviteHost_Template;
var g_quickLoginCon;
var showImgDiv;
var sysPredefinedGroup=[
{id:-10,groupName:"亲人",isys:true},
{id:-11,groupName:"现在同事",isys:true},
{id:-12,groupName:"以前同事",isys:true},
{id:-13,groupName:"大学同学",isys:true},
{id:-14,groupName:"高中同学",isys:true},
{id:-15,groupName:"普通朋友",isys:false},
{id:-16,groupName:"朋友的朋友",isys:false}
];
function getSelectOptionForFriend(dataList){
var h=[];
var subUnExist=sysPredefinedGroup;
for(var i=0;i<dataList.length;i++){
h.push({id:dataList[i].id,groupName:dataList[i].groupName});
subUnExist=subUnExist.reject(function(value,index){
return(value.groupName==dataList[i].groupName);
});
}
subUnExist.each(function(value,index){
h.push({id:value.id,groupName:value.groupName});
});
return h
};
var $_dwrLogger;
function dwrlog(msg,type){
try{
if(!$_dwrLogger)
$_dwrLogger=new NetEase.DwrLogger();
$_dwrLogger.appendMsg(msg,type);
}catch(ex){alert("广告过滤机制异常!");}
}
function inviteHost(){
var button=$('addHostButton');
button.disabled=true;
var message=$('message').value;
if(message.length>50)
message=message.substr(0,50);
closeInviteHost();
var groupToBeadd_Host=$('groupToBeadd_Host');
var groupid=groupToBeadd_Host[groupToBeadd_Host.selectedIndex].value;
var chummy=$('$_chummy_check').checked;
UserBean.inviteFriendByIdWithMsg(childId,msg,groupid,chummy,{
callback:function(returnData){
button.disabled=false;
afterInviteHost(returnData);
},
errorHandler:function(errorString,ex){
button.disabled=false;
var filterType=filterWarning(ex,false);
}
});
}
function afterInviteHost(returnData){
var message;
var type;
if(returnData==0){
message='已经发送过邀请';
type="ok";
}else if(returnData>0){
message='发送邀请成功';
type="ok";
}else if(returnData<=-10){
message="添加博友成功";
type="ok";
}else switch(returnData){
case-1:
message="添加失败";
type="error";
break;
case-2:
message="已经是你的博友";
type="error";
break;
case-3:
message="不能添加自己";
type="error";
break;
case-4:
message="匿名用户不能执行此操作";
type="error";
break;
case-5:
message="对方拒绝任何添加博友请求";
type="error";
break;
default:
message="添加失败";
type="error";
}
dwrlog(message,type);
}
function closeInviteHost(){
var change_group=$("invite_Host");
if(change_group.style.display!="none")
Effect.SlideUp('invite_Host',{duration:0.2});
}
var jsWindowManager=new NetEase.JSWindowManager({simpleDrag:true,useDragOpacity:true});
function showLoginDlg(serverName,loginTarget){
if(g_quickLoginCon==null){
g_quickLoginCon=new NetEase.QuickLogin("qLoginDiv",serverName,false,{err:false,jsWindowManager:jsWindowManager,loginTarget:loginTarget});
}
g_quickLoginCon.showWindow(loginTarget);
}
function getMailType(userName){
var mailType=0;
if(userName){
if(userName.match(/(.+)(\.vip)$/i)){
mailType=5;
}else if(userName.match(/(.+)(\.popo)$/i)){
mailType=3;
}else if(userName.match(/(.+)(@188)$/i)){
mailType=4;
}else if(userName.match(/(.+)(@126)$/i)){
mailType=2;
}else if(userName.match(/(.+)(@yeah)$/i)){
mailType=6;
}else if(userName.match(/(.+)(@game)$/i)){
mailType=7;
}else{
mailType=1;
}
}
return mailType;
}
var msgTool;
function initMsgTool(){
if(msgTool==null){
msgTool=new NetEase.MsgTool({dwrAlert:dwrlog,jsWindowManager:jsWindowManager,
dialogId:'msg_tool_dialog',style:UD.style});
}
}
function loadEventRemind(){
UserBean.getCountInfos(UD.visitorId,{callback:function(countsMap){
if(UD.visitorRank<0)return;
var _oNoteCount=$('tlbrnt');
if(_oNoteCount){
if(countsMap.noteCount>=0){
_oNoteCount.innerHTML="新留言"+countsMap.noteCount;
}
_oNoteCount.style.marginRight=0;
}
var _oCommentCount=$('tlbrcmt');
if(_oCommentCount){
if(countsMap.commentCount>=0){
_oCommentCount.innerHTML="新评论"+countsMap.commentCount;
}
_oCommentCount.style.marginRight=0;
}
}});
getMsgOnLogin();
if(UD.visitorRank>=0&&UD.visitorId>0){
dwr.engine.setRpcType(dwr.engine.ScriptTag);
MyMsgBean.getUnReadSysMsgByUserType(UD.visitorId,UD.visitorUserType,{
callback:function(oData){
if(oData){
showSysMsg(oData);
}
},httpMethod:"POST"
});
dwr.engine.setRpcType(dwr.engine.XMLHttpRequest);
}
var _mailType=getMailType(UD.hostName);
if(_mailType==1||_mailType==5||_mailType==6){
RemindBean.getMailCount(UD.visitorId,function(oData){
var _iMail=parseInt(oData);
var _oMailCount=$('tlbrml');
if(_oMailCount!=null){
_oMailCount.innerHTML="未读邮件"+_iMail;
_oMailCount.style.marginRight=0;
}
});
}
}
function showSysMsg(sysMsg){
var size=sysMsg.length;
var _s='<div class="i"><span class="dot">&#183;</span>'+sysMsg[0].content
if(size>1){
_s+='<a class="a-show" href="#" id="show_all_sysMsg">显示后'+(size-1)+'条</a>'
}
_s+='</div>';
$("sysmsgsContent").innerHTML=_s;
if(size>1){
$("show_all_sysMsg").onclick=function(){
allSysMsg(sysMsg);
};
}
$("sysmsgs").style.display="block";
}
function closeSysMsg(){
$("sysmsgs").style.display="none";
dwr.engine.setRpcType(dwr.engine.ScriptTag);
MyMsgBean.updateLoadSysMsgTime(UD.visitorId,{
callback:function(oData){},httpMethod:"POST"
});
dwr.engine.setRpcType(dwr.engine.XMLHttpRequest);
}
function allSysMsg(sysMsg){
var jst_sys='{for m in sysMsg}<div class="i"><span class="dot">&#183;</span>${m.content}</div>{/for}';
var _s=jst_sys.processUseCache({sysMsg:sysMsg});
$("sysmsgsContent").innerHTML=_s;
}
function sendMessage(fromId,fromName,fromNickName,toId,toName,toNickName){
initMsgTool();
msgTool.msgTo(fromId,fromName,fromNickName,toId,toName,toNickName);
}
function clickEventZone(){
window.open('http://blog.163.com/'+UD.visitorName+'/home/#tid=9996','_neopen');
$('eventShowButtonZoneId').style.display="none";
return false;
}
var simplePageLayer=new NetEase.SimplePageLayer();
var remindTopId=false;
var inviteHost_jst=
' <div style="width:160px">'+
' '+
'   <div style="text-align:left;padding:7px;30px"><b>附言：</b>'+
'   </div> '+
'   <div style="text-align:left;padding:7px;30px">'+
'    <textarea id="message" rows="3" cols="20" class="textbox" maxlength="50" onpropertychange="textareaLimit(this, 50)" ></textarea>'+
'   </div>'+
'     '+
'   <div style="text-align:left;padding:7px;30px">'+
'   <b>选择分组：</b> '+
'   <select id="groupToBeadd_Host" style="width:125px">'+
'    {for group in visitorGroupLists}'+
'    {if true == group.isDefault}'+
'    <option value=${group.id} selected>${group.groupName}</option>'+
'    {else}'+
'    <option value=${group.id}>${group.groupName}</option>'+
'    {/if}'+
'    {/for}'+
'    </select>'+
'   </div>  '+
'           <div style="text-align:left;padding:7px;30px">'+
'           <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>'+
'           <input id="$_chummy_check" type="checkbox"/><label for="$_chummy_check">&nbsp;关注Ta的博客</label>'+
'           </div>      '+
'   <div style="text-align:left;padding:7px;30px"><input id="addHostButton" class="input_button" style="width:60px" type="button" value="确定" onclick="inviteHost(); return false;">'+
'   <input class="input_button" type="button" style="width:60px" value="取消" onclick="closeInviteHost();"> '+
'   </div> '+
' </div>';
var pageTopBar;
function showPageTopBar(options){
if(!pageTopBar){
pageTopBar=new NetEase.PageTopBar(Object.extend({objName:'pageTopBar'},options||{}));
if($('pgtpbr-show')){$('pgtpbr-show').style.display='block';}
if($('rmdtpchgstl')){$('rmdtpchgstl').onclick=function(){pageTopBar.showStyleMenu(0);return false;}}
if($('prvusrlftpdv')){$('prvusrlftpdv').style.display='block';}
if($('rmdtpcpstl')){$('rmdtpcpstl').onclick=function(){pageTopBar.shareThisTheme(-1,-1,-1,-1,true);return false;}}
if($('atchtpthmuse')){$('atchtpthmuse').disabled=false;}
if($('atchtpstfv')){$('atchtpstfv').disabled=false;}
if($('atchtpthmevaluate')){$('atchtpthmevaluate').disabled=false;}
}
}
function topFromUrsLogin(){
try{
var nameFromUrs=Cookie.get("USERNAME_FROM_URS");
if(nameFromUrs!=null&&nameFromUrs!=""&&UD.status=="prev"&&UD.visitorId<=0){
$("_$$_TopBarRight").innerHTML='<span class="a_a c_c" id="ne_toolbar_open_menu" href="http://blog.163.com/activation.do?host=activation&&username='+nameFromUrs+'" target="_blank">'+nameFromUrs+'</span><span class="s c07">&nbsp;|&nbsp;</span>'
+'<span class="a_a c_c" id="rmdtphlp" href="http://help.163.com/special/007525FT/blog.html?b13aze1" target="_blank">帮助</span>';
}
}catch(e){};
}
function initFlash(hasFlash){
var _id=UD.themeId;
var _src='';
if((hasFlash&&hasFlash==1)||hasFlash==null){
_src=Const.STDomain+'/style/css/fixed/'+_id+'/mda/top.swf';
};_setFlash(_src);
};
function _setFlash(_src){
var _oDiv=$('_$$_Top_Flash');
if(!_src){
var _ebd=_oDiv.getElementsByTagName("embed")[0];
_ebd&&Element.removeChild(_ebd);return;
}
_oDiv.innerHTML='<embed class="ht wkg" src="'+_src+'" quality="high" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed>';
};
function exitAfterLogged(){
_exit();
return false;
}
function _exit(){
var exitTarget=window.location.href;
var newhref="http://blog.163.com/exit.do?target="+encodeURIComponent(exitTarget);
location.href=newhref;
}
var TopSearch={
inputboxId:'rmndtplin',
formId:'rmndtplfm',
searchlinkId:'rmndtplsr',
submitSearch:function(needCheckType){
var _inputbox=$(TopSearch.inputboxId);
var _querytext=_inputbox.value.trim()+' site:blog.163.com';
var _url='http://blog.youdao.com/search?q='+encodeURIComponent(_querytext);
window.open(_url,'_blank');
return false;
},
init:function(){
if($(TopSearch.inputboxId)){
$(TopSearch.inputboxId).onkeypress=function(event){
var eve=event||window.event;
if(eve&&eve.type=='keypress'&&eve.keyCode!=Event.KEY_RETURN)return;
TopSearch.submitSearch();
return false;
}.bind(this);
$(TopSearch.inputboxId).disabled=false;
}
if($(TopSearch.searchlinkId))$(TopSearch.searchlinkId).onclick=TopSearch.submitSearch;
}
};
function toggleBlogItems(e){
if($('blog_items')){
if($('blog_items').style.display==''){
$('blog_items').style.display='none';
}else{
$('blog_items').style.display='';
}
}
stopBubble(e);
}
function stopBubble(e){
e=e||window.event;
if(e){
var eventSource=e.srcElement||e.target;
if(eventSource.tagName=='A'&&eventSource!=$('$_topbarItmes')){
return;
}
}
if(Event){
Event.stop(e);
}
}
function hideBlogItems(){
if($('blog_items')){
$('blog_items').style.display='none';
}
}
if(NetEase==undefined){
var NetEase={};
}
NetEase.PageTopBar=Class.create();
NetEase.PageTopBar.prototype={
initialize:function(){
this.lastScrollY=0;
this.topBarId='tptlbr';
this.topBarDiv=$("tptlbr");
this.initOpacity=Element.getOpacity(this.topBarDiv);
this.options=Object.extend(
{
serverName:'blog.163.com',
serverHostName:'blog.163.com',
objName:'pageTopBar',
heightOnHide:0,
heightOnShow:65,
autoScroll:false,
chosenBtnCss:'chsnbtn',
firstShowTime:0,
hideWaitTime:500,
effectTime:0,
styleThemeId:UD.themeId,
styleFromUserId:UD.hostId,
styleToUserId:UD.visitorId,
styleShareThemeId:-1
},arguments[0]||{}
);
this.hideEffect=null;
this._initScroll();
this._bindHideAndShow();
this._initStatus();
this._initParamsByStatus();
this._initHTML();
this._firstShow();
this.sysPredefinedGroup=[
{id:-10,groupName:"亲人",isys:true},
{id:-11,groupName:"现在同事",isys:true},
{id:-12,groupName:"以前同事",isys:true},
{id:-13,groupName:"大学同学",isys:true},
{id:-14,groupName:"高中同学",isys:true},
{id:-15,groupName:"普通朋友",isys:false},
{id:-16,groupName:"朋友的朋友",isys:false}
];
Event.observe(window,"load",this._checkTarget.bind(this));
},
_initScroll:function(){
if(this.options.autoScroll)window.onscroll=this.autoScroll.bind(this);
},
autoScroll:function(){
var diffY=document.documentElement.scrollTop||document.body.scrollTop;
this.topBarDiv.style.top=diffY+"px";
},
_bindHideAndShow:function(){
this.topBarDiv.needHide=0;
this.topBarDiv.over=this.show.bind(this);
this.topBarDiv.out=this.hide.bind(this);
this.topBarDiv.onmouseover=this.show.bind(this);
},
hide:function(bForce){
var count=this.topBarDiv.needHide;
count++;
this.topBarDiv.needHide=count;
this._changeCSSStatus('tpnormal');
if(this.options.hideWaitTime==0||bForce==true)this._realHide(count);
else{
this.topBarDiv.onmouseover=this._overWhenHide.bind(this);
window.setTimeout(this._realHide.bind(this,count),this.options.hideWaitTime);
}
},
_realHide:function(count){
if(this.topBarDiv.needHide==count){
if(this.options.effectTime==0){
this._beforeHide();
this.topBarDiv.style.display='none';
this._hideCallBack();
return;
}
this.hideEffect=new Effect.BlindUp(this.topBarId,{duration:this.options.effectTime,fps:2,
afterFinishInternal:this._hideCallBack.bind(this),
beforeStartInternal:this._beforeHide.bind(this)
});
}
},
_beforeHide:function(){
if(this.options.effectTime!=0){
this.topBarDiv.onmouseover=this._overWhenHide.bind(this);
this._changeCSSStatus('tponhide');
this.topBarDiv.style.overflow='hidden';
}
if(this.prevSubMenuId)$(this.prevSubMenuId).style.display='none';
if(this.hostCardId){$(this.hostCardId).style.display='none';}
},
_overWhenHide:function(){
if(this.hideEffect!=null)this.hideEffect.cancel();
this.show();
},
_hideCallBack:function(){
this._changeCSSStatus('tphide');
this.topBarDiv.style.height=this.options.heightOnHide+'px';
if(this.options.heightOnHide==0)this.topBarDiv.style.display='none';
this.topBarDiv.onmouseout='';
if(this.options.heightOnHide!=0)this.topBarDiv.onmouseover=this.topBarDiv.over;
},
show:function(){
this.topBarDiv.needHide+=1;
if(this.hideEffect!=null)this.hideEffect.cancel();
this._changeCSSStatus('tpon');
this.topBarDiv.style.height=this.options.heightOnShow+'px';
if(this.options.heightOnHide==0)this.topBarDiv.style.display='';
this.topBarDiv.onmouseover='';
this.topBarDiv.onmouseout=this.topBarDiv.out;
},
_firstShow:function(){
this.topBarDiv.needHide=0;
this._changeCSSStatus('tpnormal');
if(this.options.firstShowTime!=0){
window.setTimeout(this._realHide.bind(this,0),this.options.firstShowTime);}
else this._realHide(0);
},
_changeCSSStatus:function(classname){
if(this.topBarDiv.className.indexOf(classname)>-1)return;
var tpall=/\b(tpnormal|tpon|tphide|tponhide)\b/g;
if(!tpall.test(this.topBarDiv.className))this.topBarDiv.className+=" "+classname;
else this.topBarDiv.className=this.topBarDiv.className.replace(tpall,classname);
return;
},
_initStatus:function(){
if(UD.visitorRank==10000)this.pageStatus='edit';
else if(UD.visitorRank>=0)this.pageStatus='prev';
else this.pageStatus='unlogged';
},
_initParamsByStatus:function(){
if(this.pageStatus=='edit'){
this.editBarId=["tpe1","tpe2","tpe3"];
}else if(this.pageStatus=='prev'){
this.focusData={};
this._initFocusFrame();
}else{
this.focusData={};
this._initFocusFrame();
}
},
_initHTML:function(){
if(this.pageStatus=='edit'){
this.topBarDiv.innerHTML=this._jst_edit.process({
visitorNickname:UD.visitorNickname.js_escape()||UD.visitorName,
visitorName:UD.visitorName,objName:this.options.objName,
serverHostName:this.options.serverHostName});
}else if(this.pageStatus=='prev'){
}else{
}
},
showPrevSubMenu:function(event){
Event.stop(event||window.event);
this.topBarDiv.style.overflow='visible';
this.hideHostCard();
var _psm=$(this.prevSubMenuId);
if(_psm){
if(_psm.style.display=='none')_psm.style.display='block';
else _psm.style.display='none';
}
},
showStyleMenu:function(i){
if(UD.pageName!="editHome"){
if(i==undefined||isNaN(i))i=8;
window.location='http://'+DomainMap.getParentDomain(UD.visitorName)+'/edit/#'+i+"-";
return;
}
if($(this.editBarId[1]).style.display=='none')this.changeEditBar(2);
this.show();
UD.bar.style.marginTop=this.options.heightOnShow+'px';
this._keepShow();
this.showCloseLink();
if(i==null||i==8)return;
this._showThemeSetting(i);
},
_showThemeSetting:function(index){
if(UD.pageName!="editHome"){
window.location='http://'+DomainMap.getParentDomain(UD.visitorName)+'/edit/#'+index+"-";
return;
}
if(index!=1&&index!=2&&index!=3)index=0;
if(!isNaN(index)){
this.hideCloseLink();
var _btn=$("tpe2btn"+index);
Element.addClassName(_btn,this.options.chosenBtnCss);
}
HomeManager.showSetWin(index);
},
changeSelectedButton:function(i){
if(!this._styleButtons)this._styleButtons=[$("tpe2btn0"),$("tpe2btn1"),$("tpe2btn2")];
if(i==null||isNaN(i)||i<0||i>=this._styleButtons.length){
for(var j=0,l=this._styleButtons.length;j<l;j++){
Element.removeClassName(this._styleButtons[j],this.options.chosenBtnCss);
}
this.showCloseLink();
}else{
for(var j=0,l=this._styleButtons.length;j<l;j++){
if(j==i)Element.addClassName(this._styleButtons[j],this.options.chosenBtnCss);
else Element.removeClassName(this._styleButtons[j],this.options.chosenBtnCss);
}
this.hideCloseLink();
if(!(/\btphide\b/.test(this.topBarDiv.className))){
this._keepShow();
}
}
},
changeEditBar:function(_i){
_i--;
if(!this.editBarId)return;
else{
for(var i=0,l=this.editBarId.length;i<l;i++){
if(i==_i)continue;
else $(this.editBarId[i]).style.display='none';
}
$(this.editBarId[_i]).style.display='';
}
},
closeStyleMenu:function(){
if(!(/\btphide\b/.test(this.topBarDiv.className))){
this._cancelKeepShow(true);
UD.bar.style.marginTop='0px';
this._hideCallBack();}
this.changeEditBar(1);
},
_keepShow:function(){
if(/(tpnormal|tphide|tponhide)/.test(this.topBarDiv.className)){
this.show();
}
this.topBarDiv.onmouseover='';
this.topBarDiv.onmouseout='';
},
_cancelKeepShow:function(bForce){
this.hide(bForce);
this.showCloseLink();
},
showCloseLink:function(){
if($('tpe2back')){
$('tpe2back').style.display='';
}
},
hideCloseLink:function(){
if($('tpe2back')){
$('tpe2back').style.display='none';
}
},
showSaveBar:function(){
this.changeEditBar(3);
this._keepShow();
},
hideSaveBar:function(){
if($("tpe3").style.display=='none')return;
UD.bar.style.marginTop='0px';
this._cancelKeepShow(true);
this.changeEditBar(1);
},
popupMusic:function(url){
if(!isIE)
window.open(url,"_blank","resizable=no,scrollbars=no,status=yes,width=365px,height=300px");
else
window.open(url,"_blank","resizable=no,scrollbars=no,status=yes,width=770px,height=591px");
},
_showHostCardCallBack:function(returnData){
if(returnData!=null){
var logged='no';
if(UD.visitorRank>=0)
logged='yes';
var friend=returnData["host"];
var blogList=returnData["listBlog"];
var photoList=returnData["listPhoto"];
if(friend.spaceName==null||friend.spaceName=="")
friend.spaceName=friend.name+"的博客";
var onLine=returnData["onLine"];
var genderClass='';
var onLineTitle='离线';
if(onLine){
onLineTitle='在线';
if(friend.gender=='F')
genderClass='n_ m10';
else
genderClass='n_ m12';
}else{
if(friend.gender=='F')
genderClass='n_ m11';
else
genderClass='n_ m13';
}
var data={inProcess:'no',hasBlog:'yes',blogList:blogList,logged:logged,
genderClass:genderClass,onLineTitle:onLineTitle,canInvite:'no',
userId:UD.hostId,photoList:photoList,friend:friend,objName:this.options.objName};
var result=this._jst_host_card.process(data);
$("tpshwcrd").innerHTML=result;
this.cardContent=result;
}
},
showHostCard:function(){
var _cardDiv=$("tpshwcrd");
this.topBarDiv.style.overflow='visible';
if(this.prevSubMenuId)$(this.prevSubMenuId).style.display='none';
_cardDiv.innerHTML=this._jst_host_card.process({inProcess:true});
_cardDiv.style.display='block';
_cardDiv.style.left='150px';
_cardDiv.style.top='65px';
if(this.cardContent){_cardDiv.innerHTML=this.cardContent;return;}
UserBean.getHostMiniSpace(UD.hostId,{
callback:this._showHostCardCallBack.bind(this)
});
},
hideHostCard:function(){
if(this.hostCardId)$(this.hostCardId).style.display='none';
},
switchCardShow:function(type,id){
$(type+'Show_'+id).className="selected";
$(type+'Content_'+id).style.display="";
var opType=(type=='blog')?'photo':'blog';
$(opType+'Content_'+id).style.display='none';
$(opType+'Show_'+id).className='';
},
_jst_edit:'\
  <div id="tpe1" class="wrp">\
    <div class="item tpeb"><div class="g_htc_hvr tpe_" onclick="window.location.href=\'http://${visitorName|parentDomain}/blog/getBlog.do\'"></div></div>\
    <div class="item tpep"><div class="g_htc_hvr tpe_" onclick="window.location.href=\'http://${visitorName|parentDomain}/editPhotoUpload.do\'"></div></div>\
    <div class="item tpem"><div class="g_htc_hvr tpe_" onclick="${objName}.popupMusic(\'http://${visitorName|parentDomain}/m/\');"></div></div>\
    <div class="item tpec"><div class="g_htc_hvr tpe_" onclick="window.location.href=\'http://${visitorName|parentDomain}/editCamera.do\'"></div></div>\
    <div class="item tpej"><div class="g_htc_hvr tpe_" onclick="window.open(\'http://blog.163.com/clone/clone.html\');"></div></div>\
    <div class="item tpes"><div class="g_htc_hvr tpe_" onclick="${objName}.showStyleMenu();"></div></div>\
       <div class="spanr2 a_a c_c" href="http://${visitorName|parentDomain}/setAuthority.do">系统设置</div>\
    <div class="rtdv"><span>${visitorNickname}</span><span class="">|</span>\
   <span class="a_a" id="tlbrmsg2" href="#" onclick="newEventReminder._showEventRemindZone();">我的消息</span><span class="">|</span>\
   <span class="a_a" href="http://${serverHostName}" target="_blank">网易博客</span><span class="">|</span>\
      <span class="a_a" href="http://help.163.com/special/007525FT/blog.html?b13aze1" target="_blank">帮助</span><span class="">|</span>\
      <span class="a_a" href="http://${serverHostName}/exit.do">退出</span>\
    </div>\
  </div>\
  <div id="tpe2" class="wrp" style="display:none;">\
    <div class="tpe2btns">\
      <div class="item tpesf"><div class="tpe_">&nbsp;</div></div>\
      <div class="tpe2tl g_t_14">正在装扮我的博客，开始&nbsp;</div>\
      <div class="btnwrp"><input type="button" id="tpe2btn0" class="g_c_hand" onclick="${objName}.showStyleMenu(0);" value="换风格"></input></div>\
      <div class="btnwrp"><input type="button" id="tpe2btn2" class="g_c_hand" onclick="${objName}.showStyleMenu(2);" value="设置首页内容"></input></div>\
      <div class="btnwrp"><input type="button" id="tpe2btn1" class=" g_c_hand" onclick="${objName}.showStyleMenu(1);" value="设置首页版式"></input></div>\
    </div>\
    <div id="tpe2back" class="tpe2bck" onclick="${objName}.closeStyleMenu();" style="display:none;">[<span>关闭</span>]</div>\
  </div>\
  <div id="tpe3" class="wrp" style="display:none;">\
   <div class="tpe3txt">你已经拖动模块改变了首页的布局，点击“保存修改”后修改生效。</div>\
    <div id="tpe2sv" class="tpe2btns2">\
     <input type="button" class="btncm2" value="" onclick="HomeManager.saveModules();" />\
            <input type="button" class="btncm" value="取　消" onclick="HomeManager.cancelModules();" />\
    </div>\
  </div>\
 ',
_jst_prev:'\
  <div class="wrp">\
    <div class="item tppot"><div class="g_htc_hvr tpp_" onclick="window.open(\'http://${visitorName|parentDomain}\')">\
      <div onmouseover="this.parentNode.className +=\' hvrrt\'" onmouseout="Element.removeClassName(this.parentNode,\'hvrrt\')" onclick="${objName}.showPrevSubMenu(event);"></div>\
    </div></div>\
    <div class="cntrdv">\
      <div class="vstinfo">你正在访问<span>${hostNickname|escape}</span>的博客</div>\
      <div class="imgwrp"><img src="${formatImageUrl(hostImgUrl)}" height="40" width="40" onclick="${objName}.showHostCard();" onerror="this.src=\''+Const.STDomain+'/style/common/user_default.gif\'"/></div>\
      <div class="btnwrp"><input type="button" class="g_c_hand" onclick="${objName}.sendMsg(${hostId},\'${hostNickname}\');" value="发送消息"/></div>\
      <div class="btnwrp"><input type="button" class="g_c_hand" onclick="${objName}.showAddFriend();" value="加为博友"/></div>\
      {if hasAdminCircles}<div class="btnwrp"><input type="button" class="g_c_hand" onclick="${objName}.showInviteCircle();" value="邀请加入圈子"/></div>{/if}\
    </div>\
    <div class="rtdv"><span>${visitorNickname}</span><span class="">|</span>\
      <span class="a_a" href="http://${serverHostName}" target="_blank">网易博客</span><span class="">|</span>\
      <span class="a_a" href="http://help.163.com/special/007525FT/blog.html" target="_blank">帮助</span><span class="">|</span>\
      <span class="a_a" href="http://${serverHostName}/exit.do">退出</span>\
    </div>\
  </div>\
  <div id="prvsbmn" style="display:none;">\
    <div class="item tpeb"><div class="g_htc_hvr tpe_" onclick="window.open(\'http://${visitorName|parentDomain}/blog/getBlog.do\')"></div></div>\
    <div class="item tpep"><div class="g_htc_hvr tpe_" onclick="window.open(\'http://${visitorName|parentDomain}/editPhotoUpload.do\')"></div></div>\
    <div class="item tpem"><div class="g_htc_hvr tpe_" onclick="${objName}.popupMusic(\'http://${visitorName|parentDomain}/m/\');"></div></div>\
    <div class="item tpec"><div class="g_htc_hvr tpe_" onclick="window.open(\'http://${visitorName|parentDomain}/editCamera.do\')"></div></div>\
  </div>\
  <div id="tpshwcrd" style="display:none;" class="g_lay_com g_crd_5">\
 ',
_jst_unlog:'\
  <div class="wrp">\
    <div class="item tpuot"><div class="g_htc_hvr tpu_" onclick="showLoginDlg(\'${serverName}\');return false;"></div></div>\
    <div class="cntrdv">\
      <div class="vstinfo">你正在访问<span>${hostNickname|escape}</span>的博客</div>\
      <div class="imgwrp"><img src="${formatImageUrl(hostImgUrl)}" height="40" width="40" onclick="${objName}.showHostCard();" onerror="this.src=\'http://b.bst.126.net/style/common/user_default.gif\'"/></div>\
      <div class="btnwrp"><input type="button" class="g_htc_hvr g_c_hand" onclick="${objName}.sendMsg();" value="发送消息"/></div>\
      <div class="btnwrp"><input type="button"  class="g_htc_hvr g_c_hand" onclick="${objName}.showAddFriend();" value="加为博友"/></div>\
    </div>\
    <div class="rtdv">\
      <span class="a_a" href="http://${serverHostName}" target="_blank">网易博客</span><span class="">|</span>\
      <span class="a_a" onclick="showLoginDlg(\'${serverName}\');return false;">登录</span><span class="">|</span>\
      <span class="a_a" href="http://reg.163.com/reg/reg0.jsp?url=http://blog.163.com/ntesRegBlank.html">注册</span>\
    </div>\
  </div>\
  <div id="tpshwcrd" style="display:none;" class="g_lay_com g_crd_5">\
 ',
_jst_host_card:'\
  <span onclick="${objName}.hideHostCard(); return false;" class="close n_ n7" title="关闭">&nbsp;</span> \
   {if inProcess == "yes"} \
    &nbsp;<b>数据读取中...</b><br /><br /><br /> \
   {/if} \
   {if inProcess == "no"} \
  <div class="info"> \
    <span class="a_a d_d" href="http://${friend.name|escape|parentDomain}/" target="_blank"><img class="g_img_02" src="${formatImageUrl(friend.imageUrl)}" onerror="this.src=\'http://b.bst.126.net/style/common/user_default.gif\'" /></span> \
   <p class="g_h_25 g_t_hide g_t_14 g_t_bold"><span class="a_a d_d" href="http://${friend.name|escape|parentDomain}/" target="_blank">${friend.nickname}</span></p> \
   <p class="g_h_20"><span class="${genderClass}" title="${onLineTitle}">&nbsp;</span> \
   {if !friend.birthSec && friend.ageStr!="未透露"}${friend.ageStr}岁{/if}</p> \
   <p>${friend.province}&nbsp;${friend.city}</p> \
   <div class="g_p_absolute g_p_left_btm g_h_20 g_t_center"> \
   {if logged=="yes" && friend.affirm == 1} \
     <span class="g_c_hand n_ n44" title="发送贺卡" onclick="showSendCardDialog(${friend.id},\'${friend.name|default:""|escape}\',\'${friend.nickname|default:""|js_string}\');return false;">&nbsp;</span>&nbsp; \
    <span class="g_c_hand n_ e5" title="发送消息" onclick="newEventReminder.msgTo(${friend.id},\'${friend.nickname|default:""|js_string}\'); return false;">&nbsp;</span>&nbsp; \
   {/if} \
   </div> \
  </div> \
  <div class="recmd frnd"> \
   <div class="g_tab_btn03"> \
     <div id="blogShow_${friend.id}" class="selected" onclick="${objName}.switchCardShow(\'blog\', ${friend.id});return false;">最新日志(${blogList.length})<span class="n_ n32 g_p_none">&nbsp;</span></div> \
    <div id="photoShow_${friend.id}" onclick="${objName}.switchCardShow(\'photo\', ${friend.id});return false;">最新相片(${photoList.length})<span class="n_ n32 g_p_none">&nbsp;</span></div> \
   </div> \
   <div class="case" id="blogContent_${friend.id}"> \
    <div> \
    {if blogList != null} \
    {for blog in blogList} \
     <p class="g_t_hide"><em>&#149;</em> \
     <span class="a_a d_d" href="http://${friend.name|escape|parentDomain}/${blog.permalink}/" target="_blank">${blog.title|escape}</span> \
     </p> \
    {/for} \
    {/if} \
    </div><div class="g_p_absolute g_p_rght_btm g_h_20 g_t_left"><span class="n_ n30" title="最后登陆时间">&nbsp;</span>{var timeStr = getLongDateTime(friend.lastLoginTime)}${timeStr}</div> \
   </div> \
   <div class="case" id="photoContent_${friend.id}" style="display:none;"> \
    <div> \
    {if photoList != null} \
    {for photo in photoList} \
     <span class="a_a c_c" href="http://${friend.name|escape|parentDomain}/prevPhoto.do?photoId=${photo.id}" target="_blank"> \
        <img class="g_img_04 g_c_hand" src="${photo.squareUrl}" > \
      </span> \
    {/for} \
    {/if} \
    </div><div class="g_p_absolute g_p_rght_btm g_h_20 g_t_left"><span class="n_ n30" title="最后登陆时间">&nbsp;</span>{var timeStr = getLongDateTime(friend.lastLoginTime)}${timeStr}</div> \
   </div> \
  </div> \
  {/if} \
 ',
_checkTarget:function(){
this.options.styleToUserId=UD.visitorId;
if(UD.visitorRank>=10000){
switch(UD.externHash){
case'fm_6':
this.showStyleMenu(0);
break;
}
}else{
switch(UD.externHash){
case'fm_1':
this.sendMsg(UD.visitorId,UD.visitorName,UD.visitorNickname.js_escape(),UD.hostId,UD.hostName,UD.hostNickname.js_escape());
break;
case'fm_2':
this.showAddFriend();
break;
case'fm_3':
this.showFocusFrame('web');
break;
case'fm_4':
this.showFocusFrame('rss');
break;
case'fm_5':
this.shareThisTheme(-1,-1,-1,-1,true);
break;
case'fm_7':
this.shareThisTheme(-1,-1,-1,-1,false);
break;
case'fm_8':
this.shareOpenModule();
break;
}
}
},
_getLoginTarget:function(type){
var href=window.location.href;
href=href.replace(/^(.+)#.*?$/ig,"$1");
return href+'#'+type;
},
_initFocusFrame:function(){
if(this.focusFrame==null){
if(!this.jsWindowManager){
this.jsWindowManager=jsWindowManager;
}
this.focusFrame=this.jsWindowManager.createWindow('$_ne_focus_frame',{
className:"g_win_6",width:470,height:100,notKeepPos:true,afterHiddenFunc:this._cancelKeepShow.bind(this,true),afterCloseFunc:this._cancelKeepShow.bind(this,true)
}
);
}
},
closeFocusFrame:function(){
this.focusFrame.hiddenWindow();
},
_changeGroupSelection:function(seletId,checkId){
var selectTargetId=$F(seletId);
var selectTarget=this.sysPredefinedGroup.detect(
function(value,index){return value.id==selectTargetId}
);
if(selectTarget&&selectTarget.isys){
$(checkId).checked=true;
return;
}
$(checkId).checked=false;
},
_getSelectOptionForFriend:function(dataList){
var h=[];
var subUnExist=this.sysPredefinedGroup;
for(var i=0;i<dataList.length;i++){
h.push('<option value="'+dataList[i].id+'">'+dataList[i].groupName.escape()+'</option>');
subUnExist=subUnExist.reject(function(value,index){
if(value.groupName==dataList[i].groupName){
Object.extend(value,dataList[i]);
Object.extend(dataList[i],value);
return true;
}
return false;
});
}
subUnExist.each(function(value,index){
h.push('<option value="'+value.id+'">'+value.groupName+'</option>');
});
return h.join('');
},
_getSelectOptionForCircle:function(dataList){
var html='';
for(var i=0;i<dataList.length;i++){
html+='<option value="'+dataList[i].circleId+'">'+dataList[i].circle.name.escape()+'</option>';
}
return html;
},
_getSelectOption:function(dataList){
var html='';
for(var i=0;i<dataList.length;i++){
html+='<option value="'+dataList[i].id+'">'+dataList[i].name.escape()+'</option>';
}
return html;
},
sendMsg:function(fromId,fromName,fromNickName,toId,toName,toNickName){
if(UD.visitorRank<0){
if(toId==UD.hostId){
showLoginDlg(this.options.serverName,this._getLoginTarget('fm_1'));
}else{
showLoginDlg(this.options.serverName);
}
return;
}
sendMessage(fromId,fromName,fromNickName,toId,toName,toNickName);
},
sendHost:function(){
this.sendMsg(UD.visitorId,UD.visitorName,UD.visitorNickname,UD.hostId,UD.hostName,UD.hostNickname);
},
showAddFriend:function(){
if(UD.visitorRank<0){
showLoginDlg(this.options.serverName,this._getLoginTarget('fm_2'));
return;
}
if(this.options.invitedRank==2){
dwrlog("对方拒绝任何添加博友请求","error");
return;
}
if(this.focusData['friend']==null){
UserBean.getVisitorGroups(this._initAddFriendHtml.bind(this));
}else{
this._initAddFriendHtml(this.focusData['friend']);
}
},
_initAddFriendHtml:function(dataList){
if(dataList==null){
dwrlog("对方不允许你加为博友","error");
return;
}
this.focusData['friend']=dataList;
this.focusFrame.updateTitle('加为博友');
this.focusFrame.panel.innerHTML=
'<table class="g_c_mvdn" border="0" cellspacing="0" cellpadding="0">\
        <tr><td class="g_w_20 g_t_right g_t_top">附　　言：</td><td><textarea class="g_h_105 g_w_90" id="ne_friend_msg" onpropertychange="textareaLimit(this, 50)"></textarea></td></tr>\
        <tr><td class="g_t_right g_t_top">选择分组：</td><td><select style="width:50%;" nohide="true" id="ne_friend_groupid" onChange="'+this.options.objName+'._changeGroupSelection(\'ne_friend_groupid\',\'$_chummy_check\');">'+this._getSelectOptionForFriend(this.focusData['friend'])+'</select></td></tr>\
      <tr><td class="g_t_top g_t_right">&nbsp;</td><td  style="vertical-align:middle;"><input id="$_chummy_check" type="checkbox"/><label for="$_chummy_check">&nbsp;关注他的博客</label></td></tr>\
       <tr><td colspan="2" class="g_t_center">\
        <div id="ne_frame_submit">\
        <input type="button" class="btncm btnok" value="发送请求" onclick="'+this.options.objName+'.submitAddFriend();return false;"/>\
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>\
        <input type="button" class="btncm btncc" value="取　消" onclick="'+this.options.objName+'.closeFocusFrame();return false;"/>\
        </div><div id="ne_frame_info" style="display:none;">处理中...</div>\
       </td></tr>\
    </table>';
this.focusFrame.showWindow();
$('ne_friend_msg').focus();
},
submitAddFriend:function(){
$('ne_frame_submit').style.display='none';
$('ne_frame_info').style.display='';
var msg=$F('ne_friend_msg').trim();
if(msg.length>50)
msg=msg.substr(0,50);
var groupid=$F('ne_friend_groupid');
var chummy=$('$_chummy_check').checked;
UserBean.inviteHostWithMsg(msg,groupid,chummy,{
callback:function(returnData){
var message;
var type;
if(returnData==0){
message='已经发送过邀请';
type="ok";
}else if(returnData>0){
message='发送邀请成功';
type="ok";
}else if(returnData<=-10){
message="添加博友成功";
type="ok";
}else switch(returnData){
case-1:
message="添加失败";
type="error";
break;
case-2:
message="已经是你的博友";
type="error";
break;
case-3:
message="不能添加自己";
type="error";
break;
case-4:
message="匿名用户不能执行此操作";
type="error";
break;
case-5:
message="对方拒绝任何添加博友请求";
type="error";
break;
default:
message="添加失败";
type="error";
}
this.focusFrame.hiddenWindow();
dwrlog(message,type);
}.bind(this),
errorHandler:function(errorString,ex){
if(ex=="ExceedFriendsLimit")
dwrlog('超过博友总数上限限制','error');
this.focusFrame.hiddenWindow();
filterWarning(ex,false);
}.bind(this)
});
},
showInviteCircle:function(){
if(this.focusData['circle']==null){
SpaceCircleBean.getUserAdminCircles(this._initInviteCircleHtml.bind(this));
}else{
this._initInviteCircleHtml(this.focusData['circle']);
}
},
_initInviteCircleHtml:function(dataList){
if(dataList==null||dataList.length==0){
dwrlog("你不是圈子管理员","error");
return;
}
this.focusData['circle']=dataList;
this.focusFrame.updateTitle('邀请加入圈子');
this.focusFrame.panel.innerHTML=
'<table class="g_c_mvdn" border="0" cellspacing="0" cellpadding="0">\
        <tr><td class="g_w_20 g_t_right g_t_top">选择圈子：</td><td><select nohide="true" class="g_w_50" id="ne_circle_id">'+this._getSelectOptionForCircle(this.focusData['circle'])+'</select></td></tr>\
        <tr><td colspan="2" class="g_t_center">\
        <div id="ne_frame_submit">\
         <input type="button" class="btncm btnok" value="确　定" onclick="'+this.options.objName+'.submitInviteCircle();return false;"/>\
         <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>\
         <input type="button" class="btncm btncc" value="取　消" onclick="'+this.options.objName+'.closeFocusFrame();return false;"/>\
        </div><div id="ne_frame_info" style="display:none;">处理中...</div>\
       </td></tr>\
    </table>';
this.focusFrame.showWindow();
},
submitInviteCircle:function(){
$('ne_frame_submit').style.display='none';
$('ne_frame_info').style.display='';
var circleId=$F('ne_circle_id');
SpaceCircleBean.sendInvitation(circleId,UD.visitorIP,{
callback:function(returnData){
if(returnData){
dwrlog("邀请发送成功","ok");
this.focusFrame.hiddenWindow();
}else{
dwrlog("邀请发送失败","error");
$('ne_frame_submit').style.display='';
$('ne_frame_info').style.display='none';
}
}.bind(this),
errorHandler:function(errorString,ex){
dwrlog("该用户已加入你的圈子","error");
this.focusFrame.hiddenWindow();
}.bind(this)
});
},
showFocusFrame:function(type){
if(UD.visitorRank<0){
var t;
if(type=='web'){
t='fm_3';
}else{
t='fm_4';
}
showLoginDlg(this.options.serverName,this._getLoginTarget(t));
return;
}
if(this.focusData[type]==null){
FocusMeBean.getList(type,this._initFocusFrameHtml.bind(this,type));
}else{
this._initFocusFrameHtml(type,this.focusData[type]);
}
},
_initFocusFrameHtml:function(type,dataList){
var name,title;
if(type=='web'){
name='我的收藏';
title='添加到收藏';
}else
if(type=='rss'){
name='我的订阅';
title='RSS订阅博客';
}
if(dataList==null||dataList.length==0){dataList=[{id:-1,name:name}];}
this.focusData[type]=dataList;
this.focusFrame.updateTitle(title);
this.focusFrame.panel.innerHTML='<table class="g_c_mvdn" border="0" cellspacing="0" cellpadding="0">\
     <tr><td class="g_w_20 g_t_right">目　录：</td><td><select nohide="true" class="g_w_90" id="ne_frame_listid">'+this._getSelectOption(this.focusData[type])+'</select></td></tr>\
     <tr><td class="g_w_20 g_t_right">名　称：</td><td><input class="g_w_90 g_h_ipt" id="ne_frame_name" type="text" maxlength="40" value="'+UD.hostNickname+' 的网易博客"/></td></tr>\
     <tr><td class="g_t_right g_t_top">描　述：</td><td><textarea class="g_h_105 g_w_90" id="ne_frame_desc" onpropertychange="textareaLimit(this, 200)">'+UD.hostNickname+' 的网易博客</textarea></td></tr>\
     <tr><td colspan="2" class="g_t_center">\
       <div id="ne_frame_submit">\
       <input type="button" class="btncm btnok" value="确　定" onclick="'+this.options.objName+'.submitFocusFrame(\''+type+'\');return false;"/>\
       <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>\
       <input type="button" class="btncm btncc" value="取　消" onclick="'+this.options.objName+'.closeFocusFrame();return false;"/>\
       </div><div id="ne_frame_info" style="display:none;">处理中...</div>\
     </td></tr>\
    </table>';
this.focusFrame.showWindow();
},
submitFocusFrame:function(type){
if(type=='web'||type=='rss'){
var resourceItem={};
resourceItem.name=$F('ne_frame_name').trim();
if(resourceItem.name==''){dwrlog("名称不可以为空!","error");return;}
resourceItem.description=$F('ne_frame_desc').trim();
var rss=(type=='rss')?'/rss/':'';
resourceItem.url='http://'+DomainMap.getParentDomain(UD.hostName)+rss;
var listId=$F('ne_frame_listid');
if(listId==-1){
this.focusData[type]=null;
resourceItem.listId=null;
}else{
resourceItem.listId=listId;
}
$('ne_frame_submit').style.display='none';
$('ne_frame_info').style.display='';
FocusMeBean.collectBlog(resourceItem,type,{
callback:this._afterSubmit.bind(this,type),
errorHandler:function(errorString,ex){
this.focusFrame.hiddenWindow();
filterWarning(ex,false);
}.bind(this)
});
}
},
_afterSubmit:function(type,stat){
if(stat){
if(type=='web'){
dwrlog('收藏博客成功!','ok');
}else
if(type=='rss'){
dwrlog('订阅至博客成功!','ok');
}
this.closeFocusFrame();
}else{
$('ne_frame_submit').style.display='';
$('ne_frame_info').style.display='none';
dwrlog('操作失败!','error');
}
},
showAddMail:function(){
this.focusFrame.updateTitle('邮件订阅更新');
this.focusFrame.panel.innerHTML=
'<table class="g_c_mvdn" border="0" cellspacing="0" cellpadding="0">\
      <tr><td class="g_w_20 g_t_right">邮件地址：</td><td><input class="g_w_50 g_h_ipt" type="text" name="emailAddr" id="emailAddr"/>&nbsp;<select nohide="true" class="g_w_30" name="emailPostfix" id="emailPostfix"><option value="@163.com">@163.com</option><option value="@126.com">@126.com</option><option value="@188.com">@188.com</option><option value="@vip.163.com">@vip.163.com</option></select></td></tr>\
     <tr><td class="g_w_20 g_t_right">密　　码：</td><td><input class="g_w_50 g_h_ipt" type="password" name="emailPasswd" id="emailPasswd"/></td></tr>\
     <tr><td colspan="2">\
      <p class="t g_h_20 g_t_left">更新频率</p>\
      <p class="t">\
        <input name="subFrqc" id="FrqcDayly" type="radio" value="" checked="checked"/>&nbsp;<label for="FrqcDayly">每天更新一次</label>&nbsp;\
        <input name="subFrqc" id="FrqcWeekly" type="radio" value="" />&nbsp;<label for="FrqcWeekly">每周更新一次</label>&nbsp;\
        <input name="subFrqc" id="FrqcMonthly" type="radio" value="" />&nbsp;<label for="FrqcMonthly">每月更新一次</label>&nbsp;\
        <input name="subFrqc" id="FrqcImdt" type="radio" value="" />&nbsp;<label for="FrqcImdt">即时更新</label>\
      </p>\
     </td></tr>\
     <tr><td colspan="2" class="g_t_center">\
       <div id="ne_frame_submit">\
      <input type="button" class="btncm btnok" value="确　定" onclick="'+this.options.objName+'.submitAddMail();return false;"/>\
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>\
      <input type="button" class="btncm btncc" value="取　消" onclick="'+this.options.objName+'.closeFocusFrame();return false;"/>\
      </div><div id="ne_frame_info" style="display:none;">处理中...</div>\
     </td></tr>\
   </table>';
this.focusFrame.showWindow();
},
submitAddMail:function(){
var emailAddr=Trim($F('emailAddr'))+$F('emailPostfix');
if(!checkMail(emailAddr)){
dwrlog('邮件格式不正确!','error');
return;
}
var emailPasswd=$F('emailPasswd');
if(emailAddr.indexOf('@163.com')!=-1||emailAddr.indexOf('@vip.163.com')!=-1)
emailPasswd=hex_md5(emailPasswd);
var subFrqc=0;
if($('FrqcDayly').checked)
subFrqc=1;
else if($('FrqcWeekly').checked)
subFrqc=2;
else if($('FrqcMonthly').checked)
subFrqc=3;
else if($('FrqcImdt').checked)
subFrqc=0;
$('ne_frame_submit').style.display='none';
$('ne_frame_info').style.display='';
SubscriptionBean.subscribByEmail(emailAddr,emailPasswd,subFrqc,{
callback:function(returnData){
if(returnData){
dwrlog('您订阅的博客内容将邮件至 '+emailAddr,'ok');
this.closeFocusFrame();
}else{
dwrlog('订阅出错','error');
$('ne_frame_submit').style.display='';
$('ne_frame_info').style.display='none';
}
}.bind(this),
errorHandler:function(errorString,ex){
if(ex=='EmailFailed'){
dwrlog("验证邮箱密码出错",'error');
}else if(ex=="AlreaySub"){
dwrlog("该邮箱已经订阅过该博客",'error');
}else if(ex=="SubExceed"){
dwrlog("该邮箱订阅博客数已经超过限制",'error');
}
$('ne_frame_submit').style.display='';
$('ne_frame_info').style.display='none';
}.bind(this)
});
},
showAddFavorite:function(){
addFavoriteUtil('http://'+DomainMap.getParentDomain(UD.hostName),UD.hostNickname,UD.hostName);
},
shareThisTheme:function(themeId,fromUserId,toUserId,shareThemeId,isUpCurThemeId){
var nullid=-1;
var visitiorId=this.options.styleToUserId;
if(visitiorId==null||visitiorId<=0){
showLoginDlg('blog.163.com');
return false;
}
themeId=(themeId==nullid)?this.options.styleThemeId:themeId;
fromUserId=(fromUserId==nullid)?this.options.styleFromUserId:fromUserId;
if(themeId<0){dwrlog("该风格无法被使用!","error");return;}
if(confirm("您确定要使用这套风格吗？")){
HomepageSetupBean.copyUserTheme(themeId,fromUserId,function(isSuccess){
if(!isSuccess){dwrlog("风格使用失败，您可稍后尝试刷新页面后重新操作","error");}
else{dwrlog("风格使用成功!","ok");if($('rmdtpcpstl')){$('rmdtpcpstl').onclick=function(){dwrlog("风格使用成功!","ok");return false;}}}
});
}
return false;
},
getThemeID:function(){
if(typeof this.options=='undefined'||this.options==null)
return-1;
var themeID=this.options.styleThemeId;
if(this.options.styleShareThemeId>=10000)
themeID=this.options.styleShareThemeId;
return themeID;
},
useThisTheme:function(event,themeId,creatorId){
Event.stop(event||window.event);
themeId=(themeId<0)?this.getThemeID():themeId;
creatorId=(creatorId<0)?this.options.styleFromUserId:creatorId;
var visitiorId=this.options.styleToUserId;
if(visitiorId==null||visitiorId<=0){
showLoginDlg('blog.163.com');
return false;
}
if(confirm('您确认要使用这套风格吗？')){
HomepageSetupBean.useThisTheme(themeId,creatorId,function(isSuc){
if(isSuc){dwrlog("使用成功!","ok");if($('atchtpthmuse')){$('atchtpthmuse').disabled=true;}location.href='http://blog.163.com/'+UD.hostName;}
else{dwrlog("出错啦[实在不行,重新登录试试哦]……","error");}
})
}
return false;
},
collectThisTheme:function(event,themeId,creatorId){
Event.stop(event||window.event);
themeId=(themeId<0)?this.getThemeID():themeId;
creatorId=(creatorId<0)?this.options.styleFromUserId:creatorId;
var visitiorId=this.options.styleToUserId;
if(visitiorId==null||visitiorId<=0){
showLoginDlg('blog.163.com');
return false;
}
if(visitiorId==creatorId){alert("自己不能收藏自己的作品哦!");if($('atchtpstfv')){$('atchtpstfv').disabled=true;}return false;};
if(confirm('您确认要收藏这套风格吗？')){
HomepageSetupBean.collectThisThemeToMyFavourite(themeId,creatorId,function(isSuc){
if(isSuc){dwrlog('收藏成功!',"ok");if($('atchtpstfv')){$('atchtpstfv').disabled=true;}}
else{dwrlog("收藏失败了!","error");}
})
};
return false;
},
openSingleTheme:function(event,themeId,creatorId){
Event.stop(event||window.event);
themeId=(themeId<0)?this.getThemeID():themeId;
creatorId=(creatorId<0)?this.options.styleFromUserId:creatorId;
var url='http://blog.163.com/public/theme/single/?';
if(themeId<10000){
url+=("t="+themeId);
}else{
url+=("t="+themeId+"&c="+creatorId);
}
window.location.href=url;
return false;
},
shareOpenModule:function(){
var _sharedXhtmlUrl=UD.sharedXhtmlUrl;
if(_sharedXhtmlUrl){
OpenModuleBean.createOpenModuleForVisitor(_sharedXhtmlUrl,true,
function(_widget){
if(_widget==null){
alert('该开放模块链接非法或已失效，添加失败！');
}else{
var _url='http://blog.163.com/'+UD.visitorName;
window.open(_url,'_blank');
}
}
);
delete UD.sharedXhtmlUrl;
}
}
}
var $_msgCount=0;
var $_hasnew=false;
var $_documentTitle=document.title;
var $_timecount=0;
var $_blindTimerId;
var $_isHome=false;
function getMsgOnLogin(isHome){
if(isHome)
$_isHome=true;
if(UD.visitorRank>=0&&UD.visitorId>0){
dwr.engine.setRpcType(dwr.engine.ScriptTag);
PollingBean.pollingMsg(UD.visitorId,UD.visitorName,{
callback:function(oData){
$("tlbrmsg").onclick=clickNewMsg;
setMsgUI(oData.hasNew,oData.newUserMsg+oData.newFInvite+oData.newAppMsg+oData.newCommentReply+oData.newCommnet);
window.setInterval(pollingNewMsg,60000);
},httpMethod:"GET"
});
dwr.engine.setRpcType(dwr.engine.XMLHttpRequest);
}
}
function pollingNewMsg(){
dwr.engine.setRpcType(dwr.engine.ScriptTag);
PollingBean.pollingMsg(UD.visitorId,UD.visitorName,{
callback:function(oData){
setMsgUI(oData.hasNew,oData.newUserMsg+oData.newFInvite+oData.newAppMsg);
},httpMethod:"GET"
});
dwr.engine.setRpcType(dwr.engine.XMLHttpRequest);
}
function setMsgUI(bHasNew,iMsgSize){
if(bHasNew!=$_hasnew){
if(bHasNew){
if(iMsgSize>0){
var _alertZone=$('eventShowButtonZoneId');
_alertZone.innerHTML='<span class="g_msg_new" onclick="clickNewMsg();return false;"></span>';
_alertZone.style.display='inline';
}
}else{
$('eventShowButtonZoneId').style.display="none";
}
}
$("tlbrmsg_size").innerHTML=iMsgSize;
if($_isHome){
if(iMsgSize>0){
$("home_msgSize").innerHTML=iMsgSize;
$("home_msgWrap").style.display="inline";
}else{
$("home_msgWrap").style.display="none";
}
}
$_msgCount=iMsgSize;
$_hasnew=bHasNew;
}
function blindTitle(){
document.title=$_timecount%2?"【　　　】 - "+$_documentTitle:"【新消息】 - "+$_documentTitle;
$_timecount++;
}
function clickNewMsg(){
window.open('http://blog.163.com/'+UD.visitorName+'/home/#tid=9996','_neopen');
if($_blindTimerId)
window.clearTimeout($_blindTimerId);
document.title=$_documentTitle;
$('eventShowButtonZoneId').style.display="none";
return false;
}
