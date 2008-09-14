Hilite={
elementid:'content',
exact:false,
max_nodes:1000,
onload:true,
style_name:'hilite',
style_name_suffix:true,
debug_referrer:''
};
Hilite.search_engines=[
['google\\.','q'],
['search\\.yahoo\\.','p'],
['search\\.msn\\.','q'],
['baidu\\.','wd'],
['javaeye|java|joinnet\\.','query']
];
Hilite.decodeReferrer=function(referrer){
var query=null;
var regex=new RegExp('');
for(var i=0;i<Hilite.search_engines.length;i++){
var se=Hilite.search_engines[i];
regex.compile('^http://(www\\.)?'+se[0],'i');
var match=referrer.match(regex);
if(match){
var result=Hilite.decodeReferrerQS(referrer,se[1]);
if(result){
result=decodeURIComponent(result);
result=result.replace(/^\s+|\s+$|\++$|\'|"/g,'');
result=result.split(/[\s,\+\.]+/);
return result;
}
break;
}
}
return null;
};
Hilite.decodeReferrerQS=function(referrer,match){
var idx=referrer.indexOf('?');
var idx2;
if(idx>=0){
var qs=new String(referrer.substring(idx+1));
idx=0;
idx2=0;
while((idx>=0)&&((idx2=qs.indexOf('=',idx))>=0)){
var key,val;
key=qs.substring(idx,idx2);
idx=qs.indexOf('&',idx2)+1;
if(key==match){
if(idx<=0){
return qs.substring(idx2+1);
}else{
return qs.substring(idx2+1,idx-1);
}
}else if(idx<=0){
return null;
}
}
}
return null;
};
Hilite.hiliteElement=function(elm,query){
if(!query||elm.childNodes.length==0)
return;
var qre=new Array();
for(var i=0;i<query.length;i++){
query[i]=query[i].toLowerCase();
if(Hilite.exact)
qre.push('\\b'+query[i]+'\\b');
else
qre.push(query[i]);
}
qre=new RegExp(qre.join("|"),"i");
var stylemapper={};
for(var i=0;i<query.length;i++){
if(Hilite.style_name_suffix)
stylemapper[query[i]]=Hilite.style_name+(i+1);
else
stylemapper[query[i]]=Hilite.style_name;
}
var textproc=function(node){
var match=qre.exec(node.data);
if(match){
var val=match[0];
var k='';
var node2=node.splitText(match.index);
var node3=node2.splitText(val.length);
var span=node.ownerDocument.createElement('SPAN');
node.parentNode.replaceChild(span,node2);
span.className=stylemapper[val.toLowerCase()];
span.appendChild(node2);
return span;
}else{
return node;
}
};
Hilite.walkElements(elm.childNodes[0],1,textproc);
};
Hilite.hilite=function(){
var q=Hilite.debug_referrer?Hilite.debug_referrer:document.referrer;
var e=null;
q=Hilite.decodeReferrer(q);
if(q&&((Hilite.elementid&&
(e=$(Hilite.elementid)))||
(e=$('main'))))
{
Hilite.hiliteElement(e,q);
}
};
Hilite.walkElements=function(node,depth,textproc){
var skipre=/^(script|style|textarea)/i;
var count=0;
while(node&&depth>0){
count++;
if(count>=Hilite.max_nodes){
var handler=function(){
Hilite.walkElements(node,depth,textproc);
};
setTimeout(handler,50);
return;
}
if(node.nodeType==1){
if(!skipre.test(node.tagName)&&node.childNodes.length>0){
node=node.childNodes[0];
depth++;
continue;
}
}else if(node.nodeType==3){
node=textproc(node);
}
if(node.nextSibling){
node=node.nextSibling;
}else{
while(depth>0){
node=node.parentNode;
depth--;
if(node.nextSibling){
node=node.nextSibling;
break;
}
}
}
}
};
if(Hilite.onload){
document.observe("dom:loaded",Hilite.hilite);
}