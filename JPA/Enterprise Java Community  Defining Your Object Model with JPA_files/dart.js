//initialize at top of page
if (typeof adPTile == "undefined") var adPTile = 1;
if (typeof adDcopt == "undefined") var adDcopt = "ist"; //interstitial
if (typeof adSiteValue == "undefined") var adSiteValue = new String();
if (typeof adZoneValue == "undefined") var adZoneValue = new String();
if (typeof wlpArray == "undefined") var wlpArray = new Array();
if (typeof adKW == "undefined") var adKW = "";
if (typeof adSZ == "undefined") var adSZ = new String();
if (typeof adRandom == "undefined") var adRandom = Math.round(Math.random() * 10000000); //cache buster
wlpArray = window.location.pathname.toLowerCase().split("/");
adZoneValue = (typeof wlpArray[1] == "undefined" || wlpArray[1] == "/tss" || wlpArray[1] == "/index.tss") ? "home" : wlpArray[1];
if (typeof wlpArray[2] != "undefined") adZoneValue += "_" + wlpArray[2];
adSiteValue = "atssc";

function renderDartAd(/* ad count */ textAdNumber, 
                      /* adWidth  */ adWidth, 
                      /* adHeight */ adHeight, 
                      /* iHeight  */ iHeight,
                      /* bgcolor  */ _AdBgColor,
                      /* showSpacer */ showSpacer ,
                      /* count start*/  _countStart ){
                      
  // disable 125x138  on tss.net
  if ( adWidth == "125" && adHeight == "138" ) return true;
  
        if ( _countStart == "" || _countStart  == undefined ) _countStart = 1;
                      
        if ( showSpacer == undefined ) showSpacer = true;
        if ( _AdBgColor == "" || _AdBgColor == undefined ) 
            _AdBgColor = "FFFFFF";
        for ( i = _countStart ; i < textAdNumber+_countStart; i++) {
          baseAdURLStr =  adSiteValue + "/" + adZoneValue + ";bkg=" + _AdBgColor + ";kw=" + adKW + ";dcopt=" + adDcopt + ";pos=" + (i) + ";sz=" + adWidth + "x" + adHeight + ";ptile=" + i + ";ord=" + adRandom + "?'";
          adString = "<iframe src='http://ad.doubleclick.net/adi/" + baseAdURLStr +"' width='" + adWidth + "' height='" + iHeight + "' border='0' frameborder='0' marginheight='0' marginwidth='0' scrolling='no'>\n";
          adString += "<a href='http://ad.doubleclick.net/jump/" + baseAdURLStr+ "'>\n";
          adString += "<img src='http://ad.doubleclick.net/ad/" + baseAdURLStr +"' width='" + adWidth + "' height='" + iHeight + "' border='0'></a>\n";
          adString += "</iframe>";
          if ( showSpacer )
            adString += "<br><img src='/tt/images/spacer.gif' height='5' width='1' border='0'><br>";
          document.write(adString);
          //info
          if (window.location.search.indexOf("adIframe=on") != -1) window.alert(adString);
          if (window.location.search.indexOf("adString=on") != -1) window.alert("site=" + adSiteValue + " zone=" + adZoneValue + "\n " + " bkg=" + _AdBgColor + " kw=" + adKW + " dcopt=" + adDcopt + " pos=" + (i-1) + " sz=" + adWidth + "x" + adHeight + " ptile=" + i + " ord=" + adRandom + "?");
          //continue
          adDcopt = "";
        }
}