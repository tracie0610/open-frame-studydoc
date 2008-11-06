var timeOut;
var ev;
var loginWindowShown=false;
var globalMessageId=0;
var tooltipid = "";
var  events = [];

var xposition = 0;
var yposition = 0;

function initializeTooltip(e) {
	xposition = Event.pointerX(e)+15;
	yposition = Event.pointerY(e)-5;
	tooltipid = Event.element(e).id;
	if (tooltipid == null ) {
		tooltipid = Event.element(event).parentNode.id;
	}
	var temp = tooltipid;
	
	events[tooltipid] = setTimeout("showTooltip('" + temp + "');", 200);
}

function deintializeTooltip(e) {
	tooltipid = "";
	var eventid = Event.element(e).id;
	if (eventid == null ) {
		eventid = Event.element(event).parentNode.id;
	}
	if (events[eventid]!=null) {
		clearTimeout(events[eventid]);
	}
}

function fixTags(text) {
    var tagStack = [];
    var output = [];
    var openTag= false;
    var closeTag= false;
    var tagChars = [];
    var length = text.length;
    var tagName;
    var ch = '';
    for(var i = 0; i < length; i++) {
        ch = text.charAt(i);
        if( ((ch >= 'a') && (ch <= 'z')) || ((ch >= 'A') && (ch<='Z'))) {
            if(openTag || closeTag) {
                tagChars.push(ch);
            }
            else {
                output.push(ch);
            }
            continue;
        }
        if(ch == '<') {
            if(openTag || closeTag) { // flush the accumulated chars as this is possibly a tag opener
                output.push(tagChars.join(""));
                tagChars= [];
            }
            if( i+2 < length && text.charAt(i+1) != " ") {
                if(text.charAt(i+1) == "/") {
                    i=i+1;
                    if(i+2 < length && text.charAt(i+1) != " ") {
                        closeTag = true;
                        tagChars.push("</");
                    }
                    else {
                       output.push("</");
                    }
                }
                else {
                    openTag = true;
                    tagChars.push("<");
                }
            }
            else {
                output.push(ch);
            }   
            continue;
        }
        if (ch == '>') {
            if(openTag) {
                // found a tag
                var fullTagName= tagChars.join("");
                var alreadyClosed= false;
                if("/" == text.charAt(i-1)) {
                   // see if it is already closed
                   fullTagName= fullTagName.substring(0, fullTagName.length - 1);
                   alreadyClosed= true;
                }
                var spaceIdx= fullTagName.indexOf(" ");
                if(spaceIdx == -1) { // tag name only
                  tagName= fullTagName.substring(1);
                }
                else { // tag with attributes
                  tagName= fullTagName.substring(1, spaceIdx);
                }
                var lowerCaseTagName= tagName.toLowerCase();
                if(alreadyClosed) {
                    output.push(fullTagName + "/>");
                }
                else if("br" == lowerCaseTagName) {
                    // br doesn't need a closing tag
                    output.push("<br/>");
                }
                else {
                    tagStack.push(tagName.toLowerCase());
                    output.push(fullTagName + ">");
                }
                tagChars= [];
                openTag= false;
            }
            else if(closeTag) {
                // found close tag
                tagName = tagChars.join("").substring(2);
                tagChars= [];
                closeTag= false;
                // check if the tag is in the stack
                if(tagStack.length > 0) {
                    var lastEl = tagStack[tagStack.length - 1];
                    if(lastEl == tagName.toLowerCase()) {
                        tagStack.pop();
                    }
                    else if("br" != tagName){
                        output.push("<" + tagName + ">");
                    }
                }
                else if("br" != tagName){
                    output.push("<" + tagName + ">");
                }
                if("br" == tagName) {
                    output.push("<br/>");
                }
                else {
                    output.push("</" + tagName + ">");
                }
            }
            else {
                output.push(ch);
            }
            continue;
        }
        if(openTag) {
          tagChars.push(ch);
        }
        else if(closeTag) { // close tags do not allow attribute
            closeTag = false;
            output.push(tagChars.join(""));
            tagChars= [];
        }
        else {
          output.push(ch);
        }
    }
    if(tagChars.length > 0) {
        output.push(tagChars.join(""));
    }
    while(tagStack.length > 0) {
        var tag = tagStack.pop();
        output.push("</" + tag + ">");
    }
    return output.join("");
}

var currentMessage;
var currentFlatMessage;

var content;
var flatContent;

var subject;
var flatSubject;

var body;
var flatBody;

function changeOrder(order) {
	var url = document.location.href;
	if (url.indexOf('#')!=-1) {
		url = url.substring(0,url.indexOf('#'));
	}
	var index = url.indexOf('order=');
	var hasParameters = (url.indexOf('&')!=-1);
	if (index==-1) {
		if (hasParameters) {
			url += "&order="+order;
		}
		else {
			url += "?order="+order;
		}
	}
	else {
		url = url.substring(0,index)+"order="+order+url.substring(index+7,url.length);
	}
	document.location.href = url;
}


function showTooltip(event) {
	if (loginWindowShown) {
		return;	
	}
	
	if (tooltipid==null || tooltipid== "" || tooltipid!=event) {
		return;
	}
	
	var messageId = tooltipid.substring(8);
	
	if (messageId == globalMessageId) {
		return;
	}
	else {
		if (document.getElementById('header_'+messageId)==null) {
			return;
		}
		globalMessageId = messageId;
	}
		
	var replyButton = '';
	if (loggedIn) {
		replyButton = '<a class="comment-reply" href="javascript:void(0);" onClick="javascript:replyFromTooltip('+messageId+');">'+reply+'</a>'
	}
	else {
		replyButton = '<span><a class="comment-reply" href="javascript:void(0);" '+
		'onClick="javascript:showLoginWindow(this,ALIGN_RIGHT,new Function(\'replyFromTooltip('+messageId+')\'));">'+reply+'</a></span>'
	}
	Element.update('tooltip',
		'<div id="innertooltip" class="popup comment-popup"  style="display:none; left:'+
		(xposition)+'px; '+
		'top:'+ (yposition)+'px; "><div class="popup-wrapper">'+
		'<div class="comment-header">'+
		'<p class="popup-close"><a href="javascript:void(0);" onclick="hideTooltip()">Close</a></p>'+
		document.getElementById('header_'+messageId).innerHTML+
		'</div>'+
		document.getElementById('body_'+messageId).innerHTML+
		'<p class="comment-footer"><a href="#view_'+messageId+'" class="comment-view" onClick="javascript:hideTooltip();return true;">'+JSResource.forum_view+'</a>'+
		replyButton+'</p>'+
		'</div></div>');			
	Element.show('tooltip');		
	var dimensions = Element.getDimensions('innertooltip');	
	
	if (dimensions.height>500) {
		Element.update('tooltip',
			'<div id="innertooltip" class="popup comment-popup"  style="display:none; left:'+
			(xposition)+'px; '+
			'top:'+ (yposition)+'px; "><div class="popup-wrapper">'+
			'<div class="comment-header">'+
			'<p class="popup-close"><a href="javascript:void(0);" onclick="hideTooltip()">'+JSResource.close+'</a></p>'+
			document.getElementById('header_'+messageId).innerHTML+
			'</div>'+
			'<div style="overflow:auto; height:300px;">'+
			document.getElementById('body_'+messageId).innerHTML+
			'</div>'+
			'<p class="comment-footer"><a href="#view_'+messageId+'" class="comment-view" onClick="javascript:hideTooltip();return true;">'+JSResource.forum_view+'</a>'+
			replyButton+'</p>'+
			'</div></div>');				
	}
	Element.show('innertooltip');	
}

function hideTooltip() {
	globalMessageId = 0;
	if (document.getElementById('tooltip')!=null) {
		Element.hide('tooltip');
	}
	if (document.getElementById('innertooltip')!=null) {
		Element.hide('innertooltip');
	}
}


function getPreviewButton() {
	return '<input  type="button" onClick="javascript:doPreview()" value="'+previewText+'"/>';
}

function getPostButton() {
	return '<input type="button" onClick="javascript:doPost()" value="'+postMessage+'"/>';
}

function getFlatPreviewButton() {
	return '<input  type="button" onClick="javascript:doFlatPreview()" value="'+previewText+'"/>';
}

function getFlatPostButton() {
	return '<input type="button" onClick="javascript:doFlatPost()" value="'+postMessage+'"/>';
}

function getBackButton() {
	return '<input  type="button" onClick="javascript:goBackEdit()" value="'+goBackOrEdit+'"/>';
}

function getFlatBackButton() {
	return '<input  type="button" onClick="javascript:goBackEditFlat()" value="'+goBackOrEdit+'"/>';
}

function getSubject() {
	var messageSubject = document.getElementById('tooltip_'+currentMessage).innerHTML;
	messageSubject = trim(messageSubject);
	if(messageSubject.length<re.length || messageSubject.substring(0,re.length)!=re) {
		messageSubject = re + ' '+ messageSubject;
	}
	messageSubject = escapeQuotes(messageSubject);
	if (messageSubject.length>75) {
		messageSubject = messageSubject.substring(0,75);
	}
	return messageSubject;
}

function getFlatSubject() {
	var messageSubject = document.getElementById('tooltip_'+currentFlatMessage).innerHTML;
	messageSubject = trim(messageSubject);
	if(messageSubject.length<re.length || messageSubject.substring(0,re.length)!=re) {
		messageSubject = re + ' '+ messageSubject;
	}
	if (messageSubject.length>75) {
		messageSubject = messageSubject.substring(0,75);
	}
	return messageSubject;
}

function addQuote() {
	$(('replybody_'+currentMessage)).value = $(('replybody_'+currentMessage)).value +
	'<blockquote>'+trim(document.getElementById('quote_'+currentMessage).innerHTML.replace(/<br>/gim, '\n'))+'</blockquote>';
}

function addFlatQuote() {
	$(('flatreplybody_'+currentFlatMessage)).value = $(('flatreplybody_'+currentFlatMessage)).value +
	'<blockquote>'+trim(document.getElementById('quote_'+currentFlatMessage).innerHTML.replace(/<br>/gim, '\n'))+'</blockquote>';
}

function getReply(firstPost) {	
	return '<div id="reply-form" class="comment-form"><form action="#">'+
		'<p class="popup-close"><a href="javascript:void(0);" onClick="javascript:hideReplyFromTooltip()">'+JSResource.close+'</a></p>'+
		'<div id="reply">' +
		(firstPost!=null?'':'<p class="comment-quote"><input value="'+JSResource.forum_quoteOriginalMessage+'" type="button" onClick="javascript:addQuote()"></p>')+
		'<p><label for="replysubject_'+currentMessage+'">'+JSResource.forum_subject+'</label> <input style="width: 100%;" maxlength="75" name="subject" id="replysubject_'+
		currentMessage+'" type="text" value="'+(firstPost!=null?'':getSubject())+'"></p>'+
		'<p><label for="replybody_'+currentMessage+'">'+JSResource.forum_yourReply+'</label> <textarea style="width: 100%;" name="body" id="replybody_'+currentMessage+
		'" cols="22" rows="7"></textarea></p>'+
		'</div><span style="font-weight: normal;">'+JSResource.forum_allowedHtml+' a,b,br,blockquote,i,li,pre,u,ul</span>'+
		'<p class="comment-cancel"><input type="button" onClick="javascript:hideReplyFromTooltip()" value="'+cancel+'"></p>'+
        '<p class="comment-post"><span id="preview_'+currentMessage+'">'+getPreviewButton()+'</span>'+
        '<span id="post_'+currentMessage+'">'+getPostButton()+'</span></p></form></div>';		
}

function getReplyFromFlat() {
	return '<div id="reply-form" class="comment-form"><form action="#">'+
		'<p class="popup-close"><a href="javascript:void(0);" onClick="javascript:hideReplyFromFlat()">'+JSResource.close+'</a></p>'+
		'<div id="flatreply">' +
		'<p class="comment-quote"><input value="'+JSResource.forum_quoteOriginalMessage+'" type="button" onClick="javascript:addFlatQuote()"></p>'+
		'<p><label for="flatreplysubject_'+currentFlatMessage+'">'+JSResource.forum_subject+'</label> <input style="width: 100%;" maxlength="75" name="flatsubject" id="flatreplysubject_'+
		currentFlatMessage+'" type="text" value="'+getFlatSubject()+'"></p>'+
		'<p><label for="flatreplybody_'+currentMessage+'">'+JSResource.forum_yourReply+'</label> <textarea style="width: 100%;" name="flatbody" id="flatreplybody_'+currentFlatMessage+
		'" cols="22" rows="7"></textarea></p>'+
		'</div><span style="font-weight: normal;">'+JSResource.forum_allowedHtml+' a,b,br,blockquote,i,li,pre,u,ul</span>'+
		'<p class="comment-cancel"><input type="button" onClick="javascript:hideReplyFromFlat()" value="'+cancel+'"></p>'+
        '<p class="comment-post"><span id="flatpreview_'+currentFlatMessage+'">'+getFlatPreviewButton()+'</span>'+
        '<span id="flatpost_'+currentFlatMessage+'">'+getFlatPostButton()+'</span></p></form></div>';		
}


function doPreview() {
	if (verifyPost()) {
		var handlerFunc = function(t) {
			var response = trim(t.responseText);
			if (response.substring(0,6)=='error:') {
				alert(response.substring(6,response.length));
				Element.update('preview_'+currentMessage,getPreviewButton());
			}
			else {
				Element.update('reply',t.responseText);
				Element.update('preview_'+currentMessage,getBackButton());
			}
		}
		
		var errFunc = function(t) {
		    alert(JSResource.error + ' ' + t.status + ' -- ' + t.statusText);
		}		
		content = document.getElementById('reply').innerHTML;
		subject = $(('replysubject_'+currentMessage)).value;
		body = $(('replybody_'+currentMessage)).value;
		Element.update('preview_'+currentMessage,'<input type="button" disabled="true" value="'+pleaseWait+'"/>');
		new Ajax.Request(postAddress, 
			{method:'post', 
			parameters:'doPreview=preview&forumID='+fullEscape(forumID)+'&threadID='+fullEscape(threadID)+
			'&messageID='+fullEscape(currentMessage)+'&subject='+fullEscape($(('replysubject_'+currentMessage)).value)+
			'&body='+fullEscape(fixTags($(('replybody_'+currentMessage)).value)), 
			onSuccess:handlerFunc, onFailure:errFunc});
	}
}

function doFlatPreview() {
	if (verifyFlatPost()) {
		var handlerFunc = function(t) {
			var response = trim(t.responseText);
			if (response.substring(0,6)=='error:') {
				alert(response.substring(6,response.length));
				Element.update('flatpreview_'+currentFlatMessage,getFlatPreviewButton());
			}
			else {
				Element.update('flatreply',t.responseText);
				Element.update('flatpreview_'+currentFlatMessage,getFlatBackButton());
			}
		}
		
		var errFunc = function(t) {
		    alert(JSResource.error + ' ' + t.status + ' -- ' + t.statusText);
		}		
		flatContent = document.getElementById('flatreply').innerHTML;
		flatSubject = $(('flatreplysubject_'+currentFlatMessage)).value;
		flatBody = $(('flatreplybody_'+currentFlatMessage)).value;
		Element.update('flatpreview_'+currentFlatMessage,'<input type="button" disabled="true" value="'+pleaseWait+'"/>');
		new Ajax.Request(postAddress, 
			{method:'post', 
			parameters:'doPreview=preview&forumID='+fullEscape(forumID)+'&threadID='+fullEscape(threadID)+
			'&messageID='+fullEscape(currentFlatMessage)+'&subject='+fullEscape($(('flatreplysubject_'+currentFlatMessage)).value)+
			'&body='+fullEscape(fixTags($(('flatreplybody_'+currentFlatMessage)).value)), 
			onSuccess:handlerFunc, onFailure:errFunc});
	}
}

function updateCommentCount() {
	var comments = Number(document.getElementById('comments-number').innerHTML)+1;
	document.getElementById('comments-number').innerHTML = comments;
	if (comments==2) {
		Element.show('comments-sort');	
	}
}

function doPost() {
	if (verifyPost()) {
		var handlerFunc = function(t) {
			var response = trim(t.responseText);
			if (response.substring(0,6)=='error:') {		
				alert(response.substring(6,response.length));		
				Element.update('post_'+currentMessage,getPostButton());
			}
			else {
				Element.update('newMessage', t.responseText);				
				var newMessageId = trim(document.getElementById('newMessageId').innerHTML);
				var headerText = document.getElementById('newMessageHeader').innerHTML;
				var oldHeaderText = document.getElementById('replyMessage_'+currentMessage).innerHTML;
				document.getElementById('replyMessage_'+currentMessage).appendChild(document.getElementById('newMessageHeader'));
				if (descending!='true' || document.getElementById('lastMessages').childNodes.length==0) {
					document.getElementById('lastMessages').appendChild(document.getElementById('newMessageBody'));
				}
				else {					
					var firstChild = document.getElementById('lastMessages').childNodes[0];
					document.getElementById('lastMessages').insertBefore(document.getElementById('newMessageBody'),firstChild);
				}				
				Element.update('newMessage','');
				var newTooltip = trim('tooltip_'+newMessageId);			
				Event.observe(newTooltip, 'mouseover', initializeTooltip);							
				Event.observe(newTooltip, 'mouseout', deintializeTooltip);		
				hideReplyFromTooltip();
				updateCommentCount();
			}
		}
		
		var errFunc = function(t) {
		    alert(JSResource.error + ' ' + t.status + ' -- ' + t.statusText);
		}		
		Element.update('post_'+currentMessage,'<input type="button" disabled="true" value="'+pleaseWait+'"/>');
		var subjectContent;
		if ($(('replysubject_'+currentMessage)) == null) {
			subjectContent = subject;
		}	
		else {
			subjectContent = $(('replysubject_'+currentMessage)).value
		}
		var bodyContent;
		if ($(('replybody_'+currentMessage)) == null) {
			bodyContent = body;
		}	
		else {
			bodyContent = $(('replybody_'+currentMessage)).value
		}
		
		new Ajax.Request(postAddress, 
			{method:'post', 
			parameters:'reply=true&forumID='+fullEscape(forumID)+'&threadID='+fullEscape(threadID)+
			'&messageID='+fullEscape(currentMessage)+'&subject='+fullEscape(subjectContent)+
			'&body='+fullEscape(fixTags(bodyContent)), 
			onSuccess:handlerFunc, onFailure:errFunc});
	}
}


function doFlatPost() {
	if (verifyFlatPost()) {
		var handlerFunc = function(t) {
			var response = trim(t.responseText);
			if (response.substring(0,6)=='error:') {		
				alert(response.substring(6,response.length));		
				Element.update('flatpost_'+currentFlatMessage,getFlatPostButton());
			}
			else {
				Element.update('newMessage', t.responseText);
				var newMessageId = trim(document.getElementById('newMessageId').innerHTML);				
				document.getElementById('replyMessage_'+currentFlatMessage).appendChild(document.getElementById('newMessageHeader'));				
				var bodyText = document.getElementById('newMessageBody').innerHTML;						
				document.getElementById('replyFlatMessage_'+currentFlatMessage).appendChild(document.getElementById('newMessageBody'));
				Element.update('newMessage','');
				var newTooltip = trim('tooltip_'+newMessageId);			
				Event.observe(newTooltip, 'mouseover', initializeTooltip);							
				Event.observe(newTooltip, 'mouseout', deintializeTooltip);					
				hideReplyFromFlat();
				updateCommentCount();			
			}
		}
		
		var errFunc = function(t) {
		    alert(JSResource.error + ' ' + t.status + ' -- ' + t.statusText);
		}		

		Element.update('flatpost_'+currentFlatMessage,'<input type="button" disabled="true" value="'+pleaseWait+'"/>');
		var subjectContent;
		if ($(('flatreplysubject_'+currentFlatMessage)) == null) {
			subjectContent = flatSubject;
		}	
		else {
			subjectContent = $(('flatreplysubject_'+currentFlatMessage)).value
		}
		var bodyContent;
		if ($(('flatreplybody_'+currentFlatMessage)) == null) {
			bodyContent = flatBody;
		}	
		else {
			bodyContent = $(('flatreplybody_'+currentFlatMessage)).value
		}
		new Ajax.Request(postAddress, 
			{method:'post', 
			parameters:'reply=true&forumID='+fullEscape(forumID)+'&threadID='+fullEscape(threadID)+
			'&messageID='+fullEscape(currentFlatMessage)+'&subject='+fullEscape(subjectContent)+
			'&body='+fullEscape(fixTags(bodyContent)), 
			onSuccess:handlerFunc, onFailure:errFunc});
	}
}

function goBackEdit() {
	Element.update('reply',content);
	$(('replysubject_'+currentMessage)).value = subject;
	$(('replybody_'+currentMessage)).value = body;
	Element.update('preview_'+currentMessage,getPreviewButton());
}

function goBackEditFlat() {
	Element.update('flatreply',flatContent);
	$(('flatreplysubject_'+currentFlatMessage)).value = flatSubject;
	$(('flatreplybody_'+currentFlatMessage)).value = flatBody;
	Element.update('flatpreview_'+currentFlatMessage,getFlatPreviewButton());
}

function verifyPost() { 
	if ($(('replysubject_'+currentMessage)) == null) {
		if (subject == null || subject == "") {
			alert(errorSubject);
			return false;	
		}
	} 
	else {
		if ($(('replysubject_'+currentMessage)).value=="") {
			alert(errorSubject);
			return false;
		}
	}
	if ($(('replybody_'+currentMessage)) == null) {
		if (body == null || body == "") {
			alert(errorBody);
			return false;	
		}
	} 
	else {
		if ($(('replybody_'+currentMessage)).value=="") {
			alert(errorBody);
			return false;
		}
	}
	return true;
}

function verifyFlatPost() { 
	if ($(('flatreplysubject_'+currentFlatMessage)) == null) {
		if (flatSubject == null || flatSubject == "") {
			alert(errorSubject);
			return false;	
		}
	} 
	else {
		if ($(('flatreplysubject_'+currentFlatMessage)).value=="") {
			alert(errorSubject);
			return false;
		}
	}
	if ($(('flatreplybody_'+currentFlatMessage)) == null) {
		if (flatBody == null || flatBody == "") {
			alert(errorBody);
			return false;	
		}
	} 
	else {
		if ($(('flatreplybody_'+currentFlatMessage)).value=="") {
			alert(errorBody);
			return false;
		}
	}
	return true;
}

function hideReplyFromTooltip() {
	if (currentMessage != null) {
		Element.hide('replyTree_'+currentMessage);
		Element.update(('replyTree_'+currentMessage),'');
		currentMessage = null;		
	}
}

function hideReplyFromFlat() {
	if (currentFlatMessage != null) {
		Element.hide('replyFlat_'+currentFlatMessage);
		Element.update(('replyFlat_'+currentFlatMessage),'');
		currentFlatMessage = null;		
	}
}

function replyFromFlat(messageId) {
	hideReplyFromFlat();
	hideReplyFromTooltip();
	currentFlatMessage = messageId;
	Element.update(('replyFlat_'+messageId),getReplyFromFlat());	
	Element.show('replyFlat_'+messageId);	
}

function replyFromTooltip(messageId, firstPost) {
	if (firstPost == null ) {
		hideTooltip();		
	}
	hideReplyFromFlat();
	hideReplyFromTooltip();
	currentMessage = messageId;	
	Element.update(('replyTree_'+messageId),getReply(firstPost));
	Element.show('replyTree_'+messageId);	
}

function startWatch() {	
	var handlerFunc = function(t) {
		var response = trim(t.responseText);
		if (response.substring(0,6)=='error:') {
			alert(response.substring(6,response.length));			
		}
		else {
			Element.update('watch','<a href="javascript:void(0)" class="comment-watch" onClick="javascript:stopWatch()">'+stopWatchText+'</a>');
		}
	}
	
	var errFunc = function(t) {
	    alert(JSResource.error + ' ' + t.status + ' -- ' + t.statusText);
	}		
	new Ajax.Request(postAddWatches, 
		{method:'post', 
		parameters:'forumID='+fullEscape(forumID)+'&threadID='+fullEscape(threadID), 
		onSuccess:handlerFunc, onFailure:errFunc});
}

function stopWatch() {
	var handlerFunc = function(t) {
		var response = trim(t.responseText);
		if (response.substring(0,6)=='error:') {
			alert(response.substring(6,response.length));			
		}
		else {
			Element.update('watch','<a href="javascript:void(0)" class="comment-watch" onClick="javascript:startWatch()">'+startWatchText+'</a>');
		}
	}
	
	var errFunc = function(t) {
	    alert(JSResource.error + ' ' + t.status + ' -- ' + t.statusText);
	}		
	new Ajax.Request(postRemoveWatches, 
		{method:'post', 
		parameters:'forumID='+fullEscape(forumID)+'&threadID='+fullEscape(threadID), 
		onSuccess:handlerFunc, onFailure:errFunc});	
};
