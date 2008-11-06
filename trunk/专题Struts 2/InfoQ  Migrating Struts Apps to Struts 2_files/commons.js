function trim(str) {
  	str = this != window? this : str;
  	str = str.replace(/^\s+/g, '').replace(/\s+$/g, '');
  	return str;
}

function escapeQuotes(str) {
	str = str.replace(/\"/g, '&quot;');
	return str;
}


function findPosX(obj)
{	
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft;
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	return curleft;
}

function findPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop;
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
	return curtop;
}

function fullEscape(text) { 
	var encodedHtml = encodeURIComponent(text);
	return encodedHtml;
}

function createEmailAddress(hrefElem, domain) {
   var email= hrefElem.name;
   if(domain) { email=email+ "@" + domain;}
   else { email=email + "@infoq.com"};
   hrefElem.href= "mailto:" + email;
   return true;
}

var DWRErrorHandlerUtil = {
	imbrication : 0,
	
	setNoErrorReporterHandler : function() {
		DWREngine.setErrorHandler(function(message, ex) {});
		DWRErrorHandlerUtil.imbrication = DWRErrorHandlerUtil.imbrication + 1;
	},
	
	resetErrorHandler : function() {
		if (DWRErrorHandlerUtil.imbrication > 0) {
			DWRErrorHandlerUtil.imbrication = DWRErrorHandlerUtil.imbrication - 1;
		}
		if (DWRErrorHandlerUtil.imbrication == -1) {
			DWREngine.setErrorHandler(DWREngine.defaultMessageHandler);
		}
	}
}


/* WW-DWR */
var DWRActionUtil = {
	execute : function(action, values, callbackObjOrName, displayMessage) {
		var params= new Object();
		if (this.isElement(values)) {
			
			var element = this.getElement(values);
			var elementName= element.nodeName.toLowerCase();
			if (elementName == "input") {
				if(element.name != null && element.name != '') {
					params[element.name] = element.value;
				}
			}
			else if (elementName == 'form') {
	    		for (var i = 0; i < element.elements.length; i=i+1) {
	        		var e = element.elements[i];
            		if (e.name != null && e.name != '') {
                		params[e.name] = e.value;
            		}
        		}
			}
		}
		else {
			for(var prop in values) {
				params[prop]= values[prop];
			}
		}
		
		// prepare action invocation object
		var actionObj= {};
		if(typeof action == 'string') {
			var lastIdx= action.lastIndexOf('/');
			actionObj.executeResult= 'true';
			if(lastIdx != -1) {
				actionObj.namespace= action.substring(0, lastIdx);
				actionObj.action= action.substring(lastIdx + 1);
			}
			else {
				actionObj.namespace= '';
				actionObj.action= action;
			}
		}
		else {
			actionObj= action;
		}
		
		// prepare message if any
		var useMessage= false;
		if(displayMessage) {
			DWRUtil.useLoadingMessage(displayMessage);
			useMessage= true;
		}
		
		// prepare the DWR callback object
		var callbackObj = {};
		var originalCallback = {};
		var mustCall= false;
		if(typeof callbackObjOrName == 'string') {
			originalCallback.method = eval(callbackObjOrName);
			callbackObj.callback = function(dt) {
				try {
					if(dt.data) {
						originalCallback.method(dt.data);
					}
					else if(dt.text) {
						originalCallback.method(dt.text);
					}
					else {
						originalCallback.method(dt);
					}
				}
				finally {
					if(useMessage) {
						DWREngine.setPreHook(null);
						DWREngine.setPostHook(null);
					}
				}
			};
			mustCall= true;
		}
		else if(typeof callbackObjOrName == 'function') {
			originalCallback.method = callbackObjOrName;
			callbackObj.callback = function(dt) {
				try {
					if(dt.data) {
						originalCallback.method(dt.data);
					}
					else if(dt.text) {
						originalCallback.method(dt.text);
					}
					else {
						originalCallback.method(dt);
					}
				}
				finally {
					if(useMessage) {
						DWREngine.setPreHook(null);
						DWREngine.setPostHook(null);
					}
				}					
			};
			mustCall= true;
		} 
		else if(typeof callbackObjOrName == 'object' && typeof callbackObjOrName.callback == 'function') {
			for(var prop in callbackObjOrName) {
				callbackObj[prop]= callbackObjOrName[prop];
			}
			callbackObj.callback = function(dt) {
				try {
					if(dt.data) {
						callbackObjOrName.callback(dt.data);
					}
					else if(dt.text) {
						callbackObjOrName.callback(dt.text);
					}
					else {
						callbackObjOrName.callback(dt);
					}
				}
				finally {
					if(useMessage) {
						DWREngine.setPreHook(null);
						DWREngine.setPostHook(null);
					}
				}
			};
			mustCall= true;
		}
		if(mustCall) {
			DWRRewriteAction.execute(actionObj, params, callbackObj);
		}
	},
	
	isElement : function(elementOrId) {
		if (typeof elementOrId == "string") {
			return true;
		}
		if ( elementOrId.nodeName ) {
			var name= elementOrId.nodeName.toLowerCase();
			if(name == 'input' || name == 'form') {
				return true;
			}
		}
		
		return false;
	},
	
	getElement : function(elementOrId) {
		var elem;
		if (typeof elementOrId == "string") {
			elem = document.getElementById(elementOrId);
		}
		else {
			elem = elementOrId;
		}
		
		return elem;
	}
};

var Ads = {
	clickTextLink : function(anchor, tlId) {
		var dwrCallbackObj = {callback: function() {}};
		var params= {textLinkId: tlId, referrer: window.location.href};
		try {
			DWRActionUtil.execute({namespace: '/ads', action: 'trackTextLink', executeResult: 'false'}, params, dwrCallbackObj);
		} catch(err) {};
	},
	
	clickSkyscraper : function(anchor, skId) {
		var dwrCallbackObj = {callback: function() {}};
		var params= {skyscraperId: skId, referrer: window.location.href};
		try {
			DWRActionUtil.execute({namespace: '/ads', action: 'trackSkyscraper', executeResult: 'false'}, params, dwrCallbackObj);
		} catch(err) {};
	}
};

//Vendor content page
function showAreas(displayLoginArea, displayRegisterArea){
	var loginArea = document.getElementById('loginarea');
	if(loginArea){
		loginArea.style.display = displayLoginArea;
	}
	var submitLoginArea = document.getElementById('submitLogin');
	if(submitLoginArea){
		submitLoginArea.style.display = displayLoginArea;
	}
	var registerArea = document.getElementById('registerarea');
	if(registerArea){
		registerArea.style.display=displayRegisterArea;
	}
	var registerAreaNote = document.getElementById('registerareanote');
	if(registerAreaNote){
		registerAreaNote.style.display=displayRegisterArea;
	}
	var submitRegisterArea = document.getElementById('submitRegister');
	if(submitRegisterArea){
		submitRegisterArea.style.display=displayRegisterArea;
	}
	
	// set the value for the action type field
	if(displayLoginArea == 'block'){
		var hiddenActionType = document.getElementById('actionType');
		if(hiddenActionType){
			hiddenActionType.value = 'login';
		}
	}

	if(displayRegisterArea == 'block'){
		var hiddenActionType = top.document.getElementById('actionType');
		if(hiddenActionType){
			hiddenActionType.value = 'register';
		}
	}
	
	// display the vendor content questions area
	var questionArea = document.getElementById('questionarea');
	if(questionArea){
		questionArea.style.display='block';
	}
	
	// display the "use my contact info" checkbox
	var contactInfoArea = document.getElementById('contactInfoArea');
	if(contactInfoArea){
		contactInfoArea.style.display=displayLoginArea;
	}
	
	// if user pressed login, hide the login button, if user pressed register, hide the register button
	var loginButton = document.getElementById('buttonLogin');
	if(loginButton){
		loginButton.style.display = displayRegisterArea;
	}
	var registerButton = document.getElementById('buttonRegister');
	if(registerButton){
		registerButton.style.display = displayLoginArea;
	}
}