var ContentSummary = {
	language : "en",
	
	switchTab : function(tabName) {
		document.getElementById('selectedTab').value = tabName;
		document.getElementById('startIndex').value = '-99999';
		this.updateContent();
	},
	
	setLanguage : function(lang){
		this.language = lang;
	},
	
	setStartIndex : function(index) {
		document.getElementById('startIndex').value = index;
		this.updateContent();
	},

	updateBanner : function() {
		var langParams = {language: this.language};
		try {
			DWRActionUtil.execute({namespace: '/ads', action: 'skyscraper', executeResult: 'true'}, langParams, renderBanner);
		} catch(err) {};
	},

	updateAds : function() {
		var langParams = {language: this.language};
		try {
			if(document.getElementById('textlinksparagraph') != null) {
				DWRActionUtil.execute({namespace: '/ads', action: 'homepageads', executeResult: 'true'}, langParams, renderTextLinks);
			}
			if(document.getElementById('leftbartextlinks') != null) {
				DWRActionUtil.execute({namespace: '/ads', action: 'textlinks', executeResult: 'true'}, langParams, renderLeftbarTextLinks);
			}
		} catch(err) {};
	},

	updateContent : function() {
		DWRErrorHandlerUtil.setNoErrorReporterHandler();
		this.updateBanner();
		this.updateAds();

		try {
			DWRActionUtil.execute({namespace: '/', action: 'rightbar', executeResult: 'true'}, 'tabstateform', doOnResult, "Loading...");
		} catch(err) {};
	},

	setSelectedTab : function(lang) {
		if(lang) {
			this.language = lang;
		}
		var tabs = document.getElementById('tabsmenu').getElementsByTagName('LI');
		for(var i = 0; i < tabs.length; i++) {
			if(tabs[i].className.indexOf("-on") != -1) {
				tabs[i].className = tabs[i].className.replace(/-on/, "-off");
			}
		}
		// set the active one
		var selectedTabName = document.getElementById('selectedTab').value;
		document.getElementById('tab_' + selectedTabName).className = 'm-' + selectedTabName + '-on';
	}
};

/** tab content update */
function doOnResult(text) {
	if(text != "" && document.getElementById('rightbarcontentbox') != null) {
		document.getElementById('rightbarcontentbox').innerHTML = text;
		ContentSummary.setSelectedTab();
	}
	DWRErrorHandlerUtil.resetErrorHandler();
}
/** banner update */
function renderBanner(text) {
	if(text != "" && document.getElementById('bannerparagraph') != null) {
		document.getElementById('bannerparagraph').innerHTML = text;
	}
}
/** textlinks update */
function renderTextLinks(text) {
	if(text != "" && document.getElementById('textlinksparagraph') != null) {
		document.getElementById('textlinksparagraph').innerHTML = text;
	}
}
/** leftbar textlinks update */
function renderLeftbarTextLinks(text) {
	if(text != "" && document.getElementById('leftbartextlinks') != null) {
		document.getElementById('leftbartextlinks').innerHTML = text;
	}
}
function showPresentations() {
	document.getElementById('rightbarcontentbox').innerHTML =
		'<form id="tabstateform" action="">\r\n' +
		'\t<input id="startIndex" name="startIndex" value="0" type="hidden">\r\n' +
		'\t<input id="selectedTab" name="selectedTab" value="PRESENTATION" type="hidden">\r\n' +
		'\t<input id="rightBarLanguage" name="language" value="' + JSResource.LANG + '" type="hidden">\r\n' +
		'</form>\r\n' +
		'<div class="entry"><h1 class="ex-presentations">'+JSResource.contentSummary_showPresentations_1+'</h1>' +
		'<p>'+JSResource.contentSummary_showPresentations_2+'</p>' +
		'<p>'+JSResource.contentSummary_showPresentations_3+'</p>' +
		'</div>';
	ContentSummary.setSelectedTab(JSResource.LANG);
}
function showInterviews() {
	document.getElementById('rightbarcontentbox').innerHTML = 
		'<form id="tabstateform" action="">\r\n' +
		'\t<input id="startIndex" name="startIndex" value="0" type="hidden">\r\n' +
		'\t<input id="selectedTab" name="selectedTab" value="INTERVIEW" type="hidden">\r\n' +
		'\t<input id="rightBarLanguage" name="language" value="' + JSResource.LANG + '" type="hidden">\r\n' +
		'</form>\r\n' +
		'<div class="entry"><h1 class="ex-interviews">'+JSResource.contentSummary_showInterviews_1+'</h1>' +
		'<p>'+JSResource.contentSummary_showInterviews_2+'</p>' +
		'<p>'+JSResource.contentSummary_showInterviews_3+'</p>' +
		'</div>';
	ContentSummary.setSelectedTab(JSResource.LANG);	
}
function showMinibooks() {
	document.getElementById('rightbarcontentbox').innerHTML = 
		'<form id="tabstateform" action="">\r\n' +
		'\t<input id="startIndex" name="startIndex" value="0" type="hidden">\r\n' +
		'\t<input id="selectedTab" name="selectedTab" value="MINIBOOK" type="hidden">\r\n' +
		'\t<input id="rightBarLanguage" name="language" value="' + JSResource.LANG + '" type="hidden">\r\n' +
		'</form>\r\n' +
		'<div class="entry"><h1 class="ex-interviews">'+JSResource.contentSummary_showMinibooks_1+'</h1>' +
		'<p>'+JSResource.contentSummary_showMinibooks_2+'</p>' +
		'<ul>' +
		'<li>Scrum Checklists</li>' +
		'<li>Domain Driven Design Quickly</li>' +
		'<li>Visual Studio .NET Tips and Tricks</li>' +
		'</ul>' +
		'</div>';
	ContentSummary.setSelectedTab(JSResource.LANG);	
}