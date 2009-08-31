// IE 5.01 Patch [ 1498764 ]
function utf8(wide) {
  var c, s;
  var enc = "";
  var i = 0;
  while(i<wide.length) {
    c= wide.charCodeAt(i++);
    // handle UTF-16 surrogates
    if (c>=0xDC00 && c<0xE000) continue;
    if (c>=0xD800 && c<0xDC00) {
      if (i>=wide.length) continue;
      s= wide.charCodeAt(i++);
      if (s<0xDC00 || c>=0xDE00) continue;
      c= ((c-0xD800)<<10)+(s-0xDC00)+0x10000;
    }
    // output value
    if (c<0x80) enc += String.fromCharCode(c);
    else if (c<0x800) enc += String.fromCharCode(0xC0+(c>>6),0x80+(c&0x3F));
    else if (c<0x10000) enc += String.fromCharCode(0xE0+(c>>12),0x80+(c>>6&0x3F),0x80+(c&0x3F));
    else enc += String.fromCharCode(0xF0+(c>>18),0x80+(c>>12&0x3F),0x80+(c>>6&0x3F),0x80+(c&0x3F));
  }
  return enc;
}

var hexchars = "0123456789ABCDEF";

function toHex(n) {
  return hexchars.charAt(n>>4)+hexchars.charAt(n & 0xF);
}

var okURIchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";

function encodeURIComponentNew(s) {
  var s = utf8(s);
  var c;
  var enc = "";
  for (var i= 0; i<s.length; i++) {
    if (okURIchars.indexOf(s.charAt(i))==-1)
      enc += "%"+toHex(s.charCodeAt(i));
    else
      enc += s.charAt(i);
  }
  return enc;
}

function Anthem_Encode(s){
	if (typeof encodeURIComponent == "function") {
		// Use JavaScript built-in function
		// IE 5.5+ and Netscape 6+ and Mozilla
		return encodeURIComponent(s);
	} else {
		// Need to mimic the JavaScript version
		// Netscape 4 and IE 4 and IE 5.0
		return encodeURIComponentNew(s);
	}
}

function Anthem_AddEvent(obj, evType, fn, useCapture) {
	if (obj.addEventListener) {
		obj.addEventListener(evType, fn, useCapture);
		return true;
	} else if (obj.attachEvent) {
		var r = obj.attachEvent("on" + evType, fn);
		return r;
	} else {
		alert("Anthem_AddEvent could not add event!");
	}
}

function Anthem_GetXMLHttpRequest() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else {
		if (window.Anthem_XMLHttpRequestProgID) {
			return new ActiveXObject(window.Anthem_XMLHttpRequestProgID);
		} else {
			var progIDs = ["Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
			for (var i = 0; i < progIDs.length; ++i) {
				var progID = progIDs[i];
				try {
					var x = new ActiveXObject(progID);
					window.Anthem_XMLHttpRequestProgID = progID;
					return x;
				} catch (e) {
				}
			}
		}
	}
	return null;
}

function Anthem_CallBack(url, target, id, method, args, clientCallBack, clientCallBackArg, includeControlValuesWithCallBack, updatePageAfterCallBack) {
	if (window.Anthem_PreCallBack) {
		var preCallBackResult = Anthem_PreCallBack();
		if (!(typeof preCallBackResult == "undefined" || preCallBackResult)) {
			if (window.Anthem_CallBackCancelled) {
				Anthem_CallBackCancelled();
			}
			return null;
		}
	}
	var x = Anthem_GetXMLHttpRequest();
	var result = null;
	if (!x) {
		result = { "value": null, "error": "NOXMLHTTP" };
		Anthem_DebugError(result.error);
		if (window.Anthem_Error) {
			Anthem_Error(result);
		}
		if (clientCallBack) {
			clientCallBack(result, clientCallBackArg);
		}
		return result;
	}
	x.open("POST", url ? url : Anthem_DefaultURL, clientCallBack ? true : false);
	x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
	x.setRequestHeader("Accept-Encoding", "gzip, deflate");
	if (clientCallBack) {
		x.onreadystatechange = function() {
			if (x.readyState != 4) {
				return;
			}
			Anthem_DebugResponseText(x.responseText);
			result = Anthem_GetResult(x);
			if (result.error) {
				Anthem_DebugError(result.error);
				if (window.Anthem_Error) {
					Anthem_Error(result);
				}
			}
			if (updatePageAfterCallBack) {
				Anthem_UpdatePage(result);
			}
			Anthem_EvalClientSideScript(result);
			clientCallBack(result, clientCallBackArg);
			x = null;
			if (window.Anthem_PostCallBack) {
				Anthem_PostCallBack();
			}
		}
	}
    var encodedData = "";
    if (target == "Page") {
        encodedData += "&Anthem_PageMethod=" + method;
    } else if (target == "MasterPage") {
        encodedData += "&Anthem_MasterPageMethod=" + method;
    } else if (target == "Control") {
        encodedData += "&Anthem_ControlID=" + id.split(":").join("_");
        encodedData += "&Anthem_ControlMethod=" + method;
    }
	if (args) {
		for (var argsIndex = 0; argsIndex < args.length; ++argsIndex) {
			if (args[argsIndex] instanceof Array) {
				for (var i = 0; i < args[argsIndex].length; ++i) {
					encodedData += "&Anthem_CallBackArgument" + argsIndex + "=" + Anthem_Encode(args[argsIndex][i]);
				}
			} else {
				encodedData += "&Anthem_CallBackArgument" + argsIndex + "=" + Anthem_Encode(args[argsIndex]);
			}
		}
	}
	if (updatePageAfterCallBack) {
		encodedData += "&Anthem_UpdatePage=true";
	}
	if (includeControlValuesWithCallBack) {
		var form = document.getElementById(Anthem_FormID);
		if (form != null) {
			for (var elementIndex = 0; elementIndex < form.length; ++elementIndex) {
				var element = form.elements[elementIndex];
				if (element.name) {
					var elementValue = null;
					if (element.nodeName.toUpperCase() == "INPUT") {
						var inputType = element.getAttribute("type").toUpperCase();
						if (inputType == "TEXT" || inputType == "PASSWORD" || inputType == "HIDDEN") {
							elementValue = element.value;
						} else if (inputType == "CHECKBOX" || inputType == "RADIO") {
							if (element.checked) {
								elementValue = element.value;
							}
						}
					} else if (element.nodeName.toUpperCase() == "SELECT") {
						if (element.multiple) {
							elementValue = [];
							for (var i = 0; i < element.length; ++i) {
								if (element.options[i].selected) {
									elementValue.push(element.options[i].value);
								}
							}
						} else if (element.length == 0) {
						    elementValue = null;
						} else {
							elementValue = element.value;
						}
					} else if (element.nodeName.toUpperCase() == "TEXTAREA") {
						elementValue = element.value;
					}
					if (elementValue instanceof Array) {
						for (var i = 0; i < elementValue.length; ++i) {
							encodedData += "&" + element.name + "=" + Anthem_Encode(elementValue[i]);
						}
					} else if (elementValue != null) {
						encodedData += "&" + element.name + "=" + Anthem_Encode(elementValue);
					}
				}
			}
			// ASP.NET 1.1 won't fire any events if neither of the following
			// two parameters are not in the request so make sure they're
			// always in the request.
			if (typeof form.__VIEWSTATE == "undefined") {
				encodedData += "&__VIEWSTATE=";
			}
			if (typeof form.__EVENTTARGET == "undefined") {
				encodedData += "&__EVENTTARGET=";
			}
		}
	}
	Anthem_DebugRequestText(encodedData.split("&").join("\n&"));
	x.send(encodedData);
	if (!clientCallBack) {
		Anthem_DebugResponseText(x.responseText);
		result = Anthem_GetResult(x);
		if (result.error) {
			Anthem_DebugError(result.error);
			if (window.Anthem_Error) {
				Anthem_Error(result);
			}
		}
		if (updatePageAfterCallBack) {
			Anthem_UpdatePage(result);
		}
		Anthem_EvalClientSideScript(result);
		if (window.Anthem_PostCallBack) {
			Anthem_PostCallBack();
		}
	}
	return result;
}

function Anthem_GetResult(x) {
	var result = { "value": null, "error": null };
	var responseText = x.responseText;
	try {
		result = eval("(" + responseText + ")");
	} catch (e) {
		if (responseText.length == 0) {
			result.error = "NORESPONSE";
		} else {
			result.error = "BADRESPONSE";
			result.responseText = responseText;
		}
	}
	return result;
}

function Anthem_SetHiddenInputValue(form, name, value) {
    var input = null;
    if (form[name]) {
        input = form[name];
    } else {
        input = document.createElement("input");
        input.setAttribute("name", name);
        input.setAttribute("type", "hidden");
    }
    input.setAttribute("value", value);
    var parentElement = input.parentElement ? input.parentElement : input.parentNode;
    if (parentElement == null) {
        form.appendChild(input);
        form[name] = input;
    }
}

function Anthem_RemoveHiddenInput(form, name) {
    var input = form[name];
    var parentElement = input.parentElement ? input.parentElement : input.parentNode;
    if (input && parentElement == form) {
        form[name] = null;
        form.removeChild(input);
    }
}

function Anthem_FireEvent(eventTarget, eventArgument, clientCallBack, clientCallBackArg, includeControlValuesWithCallBack, updatePageAfterCallBack) {
	var form = document.getElementById(Anthem_FormID);
	Anthem_SetHiddenInputValue(form, "__EVENTTARGET", eventTarget);
	Anthem_SetHiddenInputValue(form, "__EVENTARGUMENT", eventArgument);
	Anthem_CallBack(null, null, null, null, null, clientCallBack, clientCallBackArg, includeControlValuesWithCallBack, updatePageAfterCallBack);
	form.__EVENTTARGET.value = "";
	form.__EVENTARGUMENT.value = "";
}

function Anthem_UpdatePage(result) {
	var form = document.getElementById(Anthem_FormID);
	if (result.viewState) {
		Anthem_SetHiddenInputValue(form, "__VIEWSTATE", result.viewState);
	}
	if (result.viewStateEncrypted) {
		Anthem_SetHiddenInputValue(form, "__VIEWSTATEENCRYPTED", result.viewStateEncrypted);
	}
	if (result.eventValidation) {
		Anthem_SetHiddenInputValue(form, "__EVENTVALIDATION", result.eventValidation);
	}
	if (result.controls) {
		for (var controlID in result.controls) {
			var containerID = "Anthem_" + controlID.split("$").join("_") + "__";
			var control = document.getElementById(containerID);
			if (control) {
				control.innerHTML = result.controls[controlID];
				if (result.controls[controlID] == "") {
					control.style.display = "none";
				} else {
					control.style.display = "";
				}
			}
		}
	}
	if (result.pagescript) {
	    Anthem_LoadPageScript(result, 0);
	}
}

// Load each script in order and wait for each one to load before proceeding
function Anthem_LoadPageScript(result, index) {
    if (index < result.pagescript.length) {
		try {
		    var script = document.createElement('script');
		    script.type = 'text/javascript';
		    if (result.pagescript[index].indexOf('src=') == 0) {
		        script.src = result.pagescript[index].substring(4);
		    } else {
		        if (script.canHaveChildren ) {
		            script.appendChild(document.createTextNode(result.pagescript[index]));
		        } else {
		            script.text = result.pagescript[index];
		        }
		    }
	        document.getElementsByTagName('head')[0].appendChild(script);
	        if (typeof script.readyState != "undefined") {
	            script.onreadystatechange = function() {
	                if (script.readyState != "complete" && script.readyState != "loaded") {
	                    return;
	                } else {
	                    Anthem_LoadPageScript(result, index + 1);
	                }
	            }
	        } else {
                Anthem_LoadPageScript(result, index + 1);
	        }
		} catch (e) {
		    Anthem_DebugError("Error adding page script to head. " + e.name + ": " + e.message);
		}
	}
}

function Anthem_EvalClientSideScript(result) {
	if (result.script) {
		for (var i = 0; i < result.script.length; ++i) {
			try {
				eval(result.script[i]);
			} catch (e) {
				alert("Error evaluating client-side script!\n\nScript: " + result.script[i] + "\n\nException: " + e);
			}
		}
	}
}

function Anthem_DebugRequestText(text) {
}

function Anthem_DebugResponseText(text) {
}

function Anthem_DebugError(text) {
}

//Fix for bug #1429412, "Reponse callback returns previous response after file push".
//see http://sourceforge.net/tracker/index.php?func=detail&aid=1429412&group_id=151897&atid=782464
function Anthem_Clear__EVENTTARGET() {
	var form = document.getElementById(Anthem_FormID);
	Anthem_SetHiddenInputValue(form, "__EVENTTARGET", "");
}

function Anthem_InvokePageMethod(methodName, args, clientCallBack, clientCallBackArg) {
	Anthem_Clear__EVENTTARGET(); // fix for bug #1429412
    return Anthem_CallBack(null, "Page", null, methodName, args, clientCallBack, clientCallBackArg, true, true);
}

function Anthem_InvokeMasterPageMethod(methodName, args, clientCallBack, clientCallBackArg) {
	Anthem_Clear__EVENTTARGET(); // fix for bug #1429412
    return Anthem_CallBack(null, "MasterPage", null, methodName, args, clientCallBack, clientCallBackArg, true, true);
}

function Anthem_InvokeControlMethod(id, methodName, args, clientCallBack, clientCallBackArg) {
	Anthem_Clear__EVENTTARGET(); // fix for bug #1429412
    return Anthem_CallBack(null, "Control", id, methodName, args, clientCallBack, clientCallBackArg, true, true);
}

function Anthem_PreProcessCallBack(
    control,
    e,
    eventTarget,
    causesValidation, 
    validationGroup, 
    imageUrlDuringCallBack, 
    textDuringCallBack, 
    enabledDuringCallBack,
    preCallBackFunction,
    callBackCancelledFunction,
    preProcessOut
) {
	preProcessOut.Enabled = !control.disabled;
	var preCallBackResult = true;
	if (preCallBackFunction) {
		preCallBackResult = preCallBackFunction(control);
	}
	if (typeof preCallBackResult == "undefined" || preCallBackResult) {
		var valid = true;
		if (causesValidation && typeof Page_ClientValidate == "function") {
			valid = Page_ClientValidate(validationGroup);
		}
		if (valid) {
			var inputType = control.getAttribute("type");
			inputType = (inputType == null) ? '' : inputType.toUpperCase();
			if (inputType == "IMAGE" && e != null) {
                var form = document.getElementById(Anthem_FormID);
                if (e.offsetX) {
                    Anthem_SetHiddenInputValue(form, eventTarget + ".x", e.offsetX);
                    Anthem_SetHiddenInputValue(form, eventTarget + ".y", e.offsetY);
                } else {
                    Anthem_SetHiddenInputValue(form, eventTarget + ".x", e.clientX - control.offsetLeft + 1);
                    Anthem_SetHiddenInputValue(form, eventTarget + ".y", e.clientY - control.offsetTop + 1);
                }
			}
			preProcessOut.OriginalText = control.innerHTML;
			if (imageUrlDuringCallBack || textDuringCallBack) {
			    if (control.nodeName.toUpperCase() == "INPUT") {
			        if (inputType == "CHECKBOX" || inputType == "RADIO" || inputType == "TEXT") {
			            preProcessOut.OriginalText = GetLabelText(control.id);
			            SetLabelText(control.id, textDuringCallBack);
			        } else if (inputType == "IMAGE") {
			            if (imageUrlDuringCallBack) {
			                preProcessOut.OriginalText = control.src;
			                control.src = imageUrlDuringCallBack;
			            } else {
			                preProcessOut.ParentElement = control.parentElement ? control.parentElement : control.parentNode;
			                if (preProcessOut.ParentElement) {
			                    preProcessOut.OriginalText = preProcessOut.ParentElement.innerHTML;
			                    preProcessOut.ParentElement.innerHTML = textDuringCallBack;
			                }
			            }
			        } else if (inputType == "SUBMIT") {
			            preProcessOut.OriginalText = control.value;
			            control.value = textDuringCallBack;
			        }
			    } else if (control.nodeName.toUpperCase() == "SELECT") {
			        preProcessOut.OriginalText = GetLabelText(control.id);
			        SetLabelText(control.id, textDuringCallBack);
			    } else {
				    control.innerHTML = textDuringCallBack;
				}
			}
			control.disabled = (typeof enabledDuringCallBack == "undefined") ? false : !enabledDuringCallBack;
			return true;
        } else {
            return false;
        }
	} else {
	    if (callBackCancelledFunction) {
		    callBackCancelledFunction(control);
		}
		return false;
	}
}

function Anthem_PreProcessCallBackOut() {
    // Fields
    this.ParentElement = null;
    this.OriginalText = '';
    this.Enabled = true;
}

function Anthem_PostProcessCallBack(
    result, 
    control,
    eventTarget, 
    clientCallBack, 
    clientCallBackArg, 
    imageUrlDuringCallBack, 
    textDuringCallBack, 
    postCallBackFunction, 
    preProcessOut
) {
    if (postCallBackFunction) {
        postCallBackFunction(control);
    }
	control.disabled = !preProcessOut.Enabled;
    var inputType = control.getAttribute("type");
    inputType = (inputType == null) ? '' : inputType.toUpperCase();
	if (inputType == "IMAGE") {
	    var form = document.getElementById(Anthem_FormID);
        Anthem_RemoveHiddenInput(form, eventTarget + ".x");
        Anthem_RemoveHiddenInput(form, eventTarget + ".y");
	}
	if (imageUrlDuringCallBack || textDuringCallBack) {
	    if (control.nodeName.toUpperCase() == "INPUT") {
	        if (inputType == "CHECKBOX" || inputType == "RADIO" || inputType == "TEXT") {
	            SetLabelText(control.id, preProcessOut.OriginalText);
	        } else if (inputType == "IMAGE") {
	            if (imageUrlDuringCallBack) {
	                control.src = preProcessOut.OriginalText;
	            } else {
	                preProcessOut.ParentElement.innerHTML = preProcessOut.OriginalText;
	            }
	        } else if (inputType == "SUBMIT") {
	            control.value = preProcessOut.OriginalText;
	        }
	    } else if (control.nodeName.toUpperCase() == "SELECT") {
	        SetLabelText(control.id, preProcessOut.OriginalText);
	    } else {
	        control.innerHTML = preProcessOut.OriginalText;
	    }
	}
	if (clientCallBack) {
	    clientCallBack(result, clientCallBackArg);
	}
}

function Anthem_FireCallBackEvent(
	control,
	e,
	eventTarget,
	eventArgument,
	causesValidation,
	validationGroup,
	imageUrlDuringCallBack,
	textDuringCallBack,
	enabledDuringCallBack,
	preCallBackFunction,
	postCallBackFunction,
	callBackCancelledFunction,
	includeControlValuesWithCallBack,
	updatePageAfterCallBack
) {
	var preProcessOut = new Anthem_PreProcessCallBackOut();
	var preProcessResult = Anthem_PreProcessCallBack(
	    control, 
	    e, 
	    eventTarget,
	    causesValidation, 
	    validationGroup, 
	    imageUrlDuringCallBack, 
	    textDuringCallBack, 
	    enabledDuringCallBack, 
	    preCallBackFunction, 
	    callBackCancelledFunction, 
	    preProcessOut
	);
    if (preProcessResult) {
	    Anthem_FireEvent(
		    eventTarget,
		    eventArgument,
		    function(result) {
                Anthem_PostProcessCallBack(
                    result, 
                    control, 
                    eventTarget,
                    null, 
                    null, 
                    imageUrlDuringCallBack, 
                    textDuringCallBack, 
                    postCallBackFunction, 
                    preProcessOut
                );
		    },
		    null,
		    includeControlValuesWithCallBack,
		    updatePageAfterCallBack
	    );
    }
}

function AnthemListControl_OnClick(
    e,
	causesValidation,
	validationGroup,
	textDuringCallBack,
	enabledDuringCallBack,
	preCallBackFunction,
	postCallBackFunction,
	callBackCancelledFunction,
	includeControlValuesWithCallBack,
	updatePageAfterCallBack
) {
	var target = e.target || e.srcElement;
	if (target.nodeName.toUpperCase() == "LABEL" && target.htmlFor != '')
	    return;
	var eventTarget = target.id.split("_").join("$");
	Anthem_FireCallBackEvent(
	    target, 
	    e,
	    eventTarget, 
	    '', 
	    causesValidation, 
	    validationGroup, 
	    '',
	    textDuringCallBack, 
	    enabledDuringCallBack, 
	    preCallBackFunction, 
	    postCallBackFunction, 
	    callBackCancelledFunction, 
	    true, 
	    true
	);
}

function GetLabelText(id) {
    var labels = document.getElementsByTagName('label');
    for (var i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor == id) {
            return labels[i].innerHTML;
        }
    }
    return null;
}

function SetLabelText(id, text) {
    var labels = document.getElementsByTagName('label');
    for (var i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor == id) {
            labels[i].innerHTML = text;
            return;
        }
    }
}
