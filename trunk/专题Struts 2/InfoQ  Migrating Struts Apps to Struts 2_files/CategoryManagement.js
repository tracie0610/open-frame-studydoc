var CategoryPopup = {
	showPopup : function(anchorElement) {
		var verticalPositionValue = findPosY(anchorElement) + anchorElement.offsetHeight-1;
		var verticalPosition = 'top: ' + verticalPositionValue + 'px;';
		var horizontalPosition = 'left: '+ findPosX(anchorElement)+ 'px;';
		var viewallLink = anchorElement.href;
		var popupInnerHtml= '<div id="innerTagPopup" class="popup tag-popup" style="display:none; z-index: 25550; position:absolute; '
				+ verticalPosition + ' ' +  horizontalPosition+' ">';
		popupInnerHtml += '<div class="popup-wrapper">';
		popupInnerHtml += '<p class="tag-popup-close"><a href="javascript:void(0);" onclick="CategoryPopup.hidePopup();return false;"></a></p>';
		popupInnerHtml += '<div id="categoryPopupFeedback" style="display: none">';
		popupInnerHtml += '<img id="categoryPopupImg" src="' + contextPath + 'images/miniglobe.gif" />';
		popupInnerHtml += '<small class="red" id="categoryPopupMsg"> ' + busyMessage + '</small>';
		popupInnerHtml += '</div>';
		popupInnerHtml += '<A id="popupViewAll" HREF="' + viewallLink + '">'+ JSResource.categoryManagement_showpopup_viewAllLink_viewAllPrefix +' '+ anchorElement.innerHTML + JSResource.categoryManagement_showpopup_viewAllLink_viewAllSuffix + '</A>';
		popupInnerHtml += '<BR/><SMALL>' + viewallCategoryMessage + '</SMALL>';
		if(includeExcludeLink) {
			popupInnerHtml += '<BR/>';
			if(anchorElement.excluded!=true){
				popupInnerHtml += '<A id="popupIncludeExclude" HREF="javascript:void(0);" onClick="excludeCategory(\'' + anchorElement.id + '\',\'' + anchorElement.name + '\'); return false;">'+JSResource.categoryManagement_showpopup_includeExcludeLink_Exclude+'</A>';
				popupInnerHtml += '<BR/><SMALL id="popupIncludeExcludeMsg">' + excludeHint + '</SMALL>';
			} else {
				popupInnerHtml += '<A id="popupIncludeExclude" HREF="javascript:void(0);" onClick="includeCategory(\'' + anchorElement.id + '\',\'' + anchorElement.name + '\'); return false;">'+JSResource.categoryManagement_showpopup_includeExcludeLink_Include+'</A>';
				popupInnerHtml += '<BR/><SMALL id="popupIncludeExcludeMsg">' + includeHint + '</SMALL>';
			}
		}
		popupInnerHtml += '</div></div>';

		Element.update('tagPopup', popupInnerHtml);				
		Element.show('tagPopup');
		Element.show('innerTagPopup');
	},
	
	hidePopup : function() {
	   if(document.getElementById('innerTagPopup')){
	       Element.hide('innerTagPopup');
	   }
	   if(document.getElementById('tagPopup')){
	       Element.hide('tagPopup');
	   }
	}
};

function markExcluded(name, id){
	var anchors = document.getElementsByTagName('a');
	for(var i=0;i<anchors.length;i++){
		var text = null;
		if(anchors[i].text) text = anchors[i].text;
		if(anchors[i].innerText) text = anchors[i].innerText;
		if(text == name){
			anchors[i].style.textDecoration='line-through';
			anchors[i].excluded = true;
		}
	}
	//update the top-left widget community
	var element = document.getElementById("community"+id);
	if(element){
		element.disabled = false;
		element.checked=false;
	}
}
		
function markIncluded(name, id){
	var anchors = document.getElementsByTagName('a');
	for(var i=0;i<anchors.length;i++){
		var text = null;
		if(anchors[i].text) text = anchors[i].text;
		if(anchors[i].innerText) text = anchors[i].innerText;
		if(text == name){
			anchors[i].style.textDecoration='none';
			anchors[i].excluded = false;
		}
	}
	//update the top-left widget community
	var element = document.getElementById("community"+id);
	if(element){
		element.disabled = false;
		element.checked=true;
	}
}
		
function excludeCategory(categoryId, categoryName){
	var feedback = document.getElementById('categoryPopupFeedback');
	feedback.style.display = 'block';
	UserCategoryUtil.excludeCategory(categoryId, updateExcludedCategories);
}

function excludeCommunity(categoryId){
	UserCategoryUtil.excludeCategory(categoryId, updateExcludedCategories);
}

var updateExcludedCategories = function(name) {
	CategoryPopup.hidePopup();
	DWRErrorHandlerUtil.resetErrorHandler();
	var catInfo = name.split("-");
	if(catInfo){
		markExcluded(catInfo[0], catInfo[1]);
	}
}

function includeCategory(categoryId, index){
	var feedback = document.getElementById('categoryPopupFeedback');
	feedback.style.display = 'block';
	UserCategoryUtil.includeCategory(categoryId, updateIncludedCategories);
}
		
function includeCommunity(categoryId){
	UserCategoryUtil.includeCategory(categoryId, updateIncludedCategories);
}

var updateIncludedCategories = function(name) {
	CategoryPopup.hidePopup();
	DWRErrorHandlerUtil.resetErrorHandler();
	var catInfo = name.split("-");
	if(catInfo){
		markIncluded(catInfo[0], catInfo[1]);
	}
}
				
function includeExcludeCommunity(checkbox) {
    if(!checkbox.disabled){
		var commId = checkbox.id;
		commId = commId.replace(/community/,"");
		checkbox.disabled = true;
		DWRErrorHandlerUtil.setNoErrorReporterHandler();
		if(checkbox.checked){
			includeCommunity(commId);
		} else {
			excludeCommunity(commId);
		}
		var communitiesMessageArea = document.getElementById("communitiesMessage");
		if(communitiesMessageArea){
			communitiesMessageArea.innerHTML = '<small style="color: grey;">'+communityChangeMessage+'</small>';
		}
	}
}