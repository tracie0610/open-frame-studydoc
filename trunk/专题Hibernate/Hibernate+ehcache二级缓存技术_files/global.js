/*
 * Copyright (C) 2002-2005 
 * 
 * For further information visit:  http://www.ntsky.com
 * 
 * Version:  1.0
 * 
 * Authors: ntsky (yntsky@gmail.com)
 */  

function StringBuffer(){
    this.data = [];
}
StringBuffer.prototype.append = function(){
    this.data.push(arguments[0]);    
}
StringBuffer.prototype.toString = function(){
    return this.data.join("");
}

var Browser = new function () {
	var ua, s, i;
	this.isIE    = false;
	this.isNS    = false;
	this.version = null; 
	ua = navigator.userAgent;
	s = "MSIE";
	if ((i = ua.indexOf(s)) >= 0) {
		this.isIE = true;
	    this.version = parseFloat(ua.substr(i + s.length));
		return;
	}
	s = "Netscape6/";
	if ((i = ua.indexOf(s)) >= 0) {
		this.isNS = true;
		this.version = parseFloat(ua.substr(i + s.length));
		return;
	}
	// Treat any other "Gecko" browser as NS 6.1. 
	s = "Gecko";
		if ((i = ua.indexOf(s)) >= 0) {
	    this.isNS = true;
		this.version = 6.1;
	    return;
	}
};

Forms = {
	
	checkedAllBox : function(formId, name) {
		var form = document.getElementById(formId);
		for (var i=0; i<form.elements.length; i++) {
			var element = form.elements[i];
			name = typeof(name=="undefined")?"id":name;
			if (element.name == name && element.type=='checkbox')
				element.checked = true;
		}
	},
	
	unCheckedAllBox : function(formId, name) {
		var form = document.getElementById(formId);
		for (var i=0; i<form.elements.length; i++) {
			var element = form.elements[i];
			//name = typeof(name=="undefined")?"id":name;
			name = (name==null)?"id":name;
			if (element.name == name && element.type=='checkbox')
				element.checked = false;
		}
	},

	isCheckedRadio : function(formId,name) {
		var form = document.getElementById(formId);
		for (var i=0; i<form.elements.length; i++) {
			var e = form.elements[i];
			name = (name==null)?"id":name;
			if (e.name == name && e.type=='radio') {
				if(e.checked){
					return true;
				}
			}
		}
		return false;
	},

	isCheckedBox : function(formId,name) {
		var form = document.getElementById(formId);
		for (var i=0; i<form.elements.length; i++) {
			var e = form.elements[i];
			name = typeof(name=="undefined")?"id":name;
			if (e.name == name && e.type=='checkbox') {
				if(e.checked){
					return true;
				}
			}
		}
		return false;
	},

	getRadioValue : function(formId,name) {
		var form = document.getElementById(formId);
		for (var i=0; i<form.elements.length; i++) {
			var e = form.elements[i];
			if (e.name == name && e.type=='radio') {
				if(e.checked){
					return e.value;
				}
			}
		}
		return "";
	},

	selected : function(name,optionValue){
		var optionsArray = document.getElementById(name);
		for(var i=0;i<optionsArray.length;i++){
			if(optionsArray[i].value == optionValue){
				optionsArray[i].selected = true;			
			}
		}
		optionsArray = null;
	},

	doAction : function( processPage, formId, url ){
		time = new Date().getTime();
		theWindow = window.open(processPage, time);
		with(document.getElementById(formId)){
			action = url;
			target = time;
			submit();
		}
		theWindow.focus(); 
		time=null;
		window.opener=null;window.close();
	},

	submit : function( formId , url , curTarget ){
		var form = document.getElementById(formId);
		form.action = url;
		form.target = curTarget;
		form.submit();
	}
}


var Util = {
	
	version : "1.0",

	show : function(elementId) {
		document.getElementById(elementId).style.display='block';
	},

	hidden : function(elementId) {
		document.getElementById(elementId).style.display='none';
	},

	openWindow : function(url, width, height) {
		var newWindow = window.open(url, new Date().getTime().toString(), "scrollbars=yes,resizable=yes,titlebar=yes,toolbar=no,menubar=no,status=no,location=no,top=0,left=0,left="+((screen.availWidth)/2-(width/2))+",top="+((screen.availHeight)/2-(height/2))+",width="+width+",height="+height);
		newWindow.focus();
	},

	popupWindow : function( processPage, formId, url, width, height ) {
			var time = new Date().getTime();
			URL = window.open(processPage, time, "scrollbars=yes,resizable=no,titlebar=yes,toolbar=no,menubar=no,status=no,location=no,top=0,left=0,left="+((screen.availWidth)/2-(width/2))+",top="+((screen.availHeight)/2-(height/2))+",width="+width+",height="+height);
			tempAction = document.getElementById(formId).action;
			tempTarget = document.getElementById(formId).target;
			with(document.getElementById(formId)){
				action = url;
				target = time;
				submit();
				// reset forum after submit
				action = tempAction;
				target = tempTarget;
			}
			time = null;
	},

	del : function(info, url, frame) {
		if (confirm(info)) {
			if(frame == null){
				location.href = url;
			}
			else{
				frame.location.href = url;
			}
		}
		else{
			return;
		}
	},
	
	preview : function( formId, newAction, newTarget ) {
		var tempAction,tempTarget;
		tempAction = document.getElementById(formId).action;
		tempTarget = document.getElementById(formId).target;
		with(document.getElementById(formId)){
			// submit
			action = newAction;
			target = newTarget;
			submit();
			// reset
			action = tempAction;
			target = tempTarget;
		}
	}
}

var replaceMyTextarea = function(textareaId,toolbarName,path,height,width) {
	var oFCKeditor = new FCKeditor(textareaId) ;
	if( (toolbarName==null) || (toolbarName=="") ) {
		oFCKeditor.ToolbarSet = "Basic";
	}
	else{
		oFCKeditor.ToolbarSet = toolbarName;
	}
	if( (path==null) || (path=="") ) {
		oFCKeditor.BasePath = '/scripts/FCKeditor/';
	}
	else{
		oFCKeditor.BasePath = path + '/scripts/FCKeditor/';
	}
	if( (height == null) || (height=="") ) {
		oFCKeditor.Height = 200;
	}
	else{
		oFCKeditor.Height = height;
	}
	oFCKeditor.ReplaceTextarea() ;
}

function DrawImage(ImgD){ 
	var image=new Image(); 
	image.src=ImgD.src; 
	var width = ImgD.width;
	var height = ImgD.height;
	if(image.width>0 && image.height>0){ 
		if(image.width/image.height>= width/height){ 
			if(image.width>width){
				ImgD.width=width; 
				ImgD.height=(image.height*height)/image.width; 
			}
			else{ 
				ImgD.width=image.width;
				ImgD.height=image.height; 
			} 
		} 
		else{ 
			if(image.height>height){
				ImgD.height=height; 
				ImgD.width=(image.width*height)/image.height; 
			}
			else{ 
				ImgD.width=image.width;
				ImgD.height=image.height; 
			} 
		} 
	}
} 

/**
 * System class 
 */
var System = {

	getSelectedValue : function(optionsArray){
		for(var i=0;i<optionsArray.length;i++){
			if(optionsArray[i].selected){
				return optionsArray[i].value;
			}
		}
		return "";
		optionsArray = null;
	},
	
	batchExecute : function( formId, tip, url, parTarget ) {

		var isRadios = false;
		var form = document.getElementById(formId);
		for (var i=0; i<form.elements.length; i++) {
			var e = form.elements[i];
			if (e.name == "id" && e.type=='checkbox') {
				isRadios = true;
				break;
			}
		}

		if(!isRadios){
			alert("Sorry,数据为空！");
			return;
		}

		if( !Forms.isCheckedBox( formId ) ) {
			alert("请先选择记录");
			return ;
		}
		if (confirm(tip)){
			with(document.getElementById(formId)) {
				action = url ;
				if( parTarget == null ) {
					target = "_self" ;
				}
				submit();
			}
		}
	},
	
	checkedAll : function( ids, formId ) {
		if( ids.checked ) {
			Forms.checkedAllBox( formId ) ;
		}
		else{
			Forms.unCheckedAllBox( formId ) ;
		}
	}

}
