
// individual ad placement with content
// uses table dom element to align ad to the right and have content flow
// Depends on page importing dart.js file
/* 
*  To embed ad in article use this code 
  <script type="text/javascript">
   if (  renderDoubleClickAd != null && typeof renderDartAd == "function" ) renderDoubleClickAd();
  </script>
*/
function renderDoubleClickAd()
{
    if ( renderDartAd != null && typeof renderDartAd == "function"  ) {
     document.write("<table border=0 cellspacing=0 cellpadding=0 align='right' height='255' width='300'>");
     document.write("<tr valign='bottom'><td><img src='/tt/images/splash_title_richMedia_300x250.gif' height='9' width='300'/><br>");
         renderDartAd(/* ad count */ 1, 
                      /* adWidth  */ 300, 
                      /* adHeight */ 250, 
                      /* iHeight  */ 250,
                      /* bgcolor  */ "FFFFFF",
                      /* showSpacer */ false ,
                      /* count start*/  1 )
     document.write("</td></tr>");
     document.write("</table>");
   }
}
