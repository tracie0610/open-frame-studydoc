<!--
function commentQuote(commentid,commenttext,commentarea) {
	var quote = '[quote comment="'+commentid+'"]'+commenttext+'[/quote]\n';
	var comment = document.getElementById(commentarea);
	addQuote(comment,quote);
	return false;
}

function postQuote(postid,commentarea,alertmsg) {
	var posttext = '';
	if (window.getSelection){
		posttext = window.getSelection();
	}
	else if (document.getSelection){
		posttext = document.getSelection();
	}
	else if (document.selection){
		posttext = document.selection.createRange().text;
	}
	else {
		return true;
	}
	if (posttext==''){
		alert(alertmsg);
		return true;
	} else {
		var quote='[quote post="'+postid+'"]'+posttext+'[/quote]\n';
		var comment=document.getElementById(commentarea);
		addQuote(comment,quote);
	}
	return false;
}

function addQuote(comment,quote){
	// Derived from Alex King's JS Quicktags code (http://www.alexking.org/)
	// Released under LGPL license
	// IE support
	if (document.selection) {
		comment.focus();
		sel = document.selection.createRange();
		sel.text = quote;
		comment.focus();
	}
	// MOZILLA/NETSCAPE support
	else if (comment.selectionStart || comment.selectionStart == '0') {
		var startPos = comment.selectionStart;
		var endPos = comment.selectionEnd;
		var cursorPos = endPos;
		var scrollTop = comment.scrollTop;
		if (startPos != endPos) {
			comment.value = comment.value.substring(0, startPos)
			              + quote
			              + comment.value.substring(endPos, comment.value.length);
			cursorPos = startPos + quote.length
		}
		else {
			comment.value = comment.value.substring(0, startPos) 
				              + quote
				              + comment.value.substring(endPos, comment.value.length);
			cursorPos = startPos + quote.length;
		}
		comment.focus();
		comment.selectionStart = cursorPos;
		comment.selectionEnd = cursorPos;
		comment.scrollTop = scrollTop;
	}
	else {
		comment.value += quote;
	}
}
//-->
