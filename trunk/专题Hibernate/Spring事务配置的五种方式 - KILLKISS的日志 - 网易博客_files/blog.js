var jst_blog_edit_class=new String('\
    {if classes != null && classes.length != 0}\
    {for cls in classes}\
    <div class="g_h_18 g_c_mvlft c06">\
       <p class="g_t_hide g_htc_item {if selId != null && cls.id == selId} g_htc_item_selected{/if}" id="pBlogCls${cls.id}"><em>&#149;</em><a id="editClass${cls.id}" href="#" onclick="${parentName}.openBlogsByClass(\'${cls.id}\', \'${cls.className|escape|js_string}\', ${cls.blogCount});return false;">${cls.className|escape|substring:0,8}(${cls.blogCount})</a></p>\
    </div>\
    {/for}\
    {else}\
      <div class="g_h_20 g_c_mvdn g_t_left c06 g_t_12">&nbsp;&nbsp;目前没有分类</div>\
    {/if}\
');
var jst_blog_edit_arch=new String('\
    {if yearArchs != null && yearArchs.length != 0}\
    {for yearArch in yearArchs}\
     {if (yearArch_index==0 && sel != "arch") || (selId.toString().length >= 4 && (yearArch.year == selId.toString().substring(0,4)))}\
      <div id="divYearArch${yearArch.year}" class="g_htc_toggle g_h_20 g_t_14 g_c_hand g_t_left c06  g_c_mvlft" onclick="${objectName}.showHideArch(\'${yearArch.year}\');"><em>&#149;</em>${yearArch.year}年<span class="n_ n0 ck0">&nbsp;</span><span class="n_ n1 ck1">&nbsp;</span></div>\
     {else}\
      <div id="divYearArch${yearArch.year}" class="g_htc_toggle g_h_20 g_t_14 g_c_hand g_t_left c06  g_c_mvlft" onclick="${objectName}.showHideArch(\'${yearArch.year}\');"><em>&#149;</em>${yearArch.year}年<span class="n_ n0 ck1">&nbsp;</span><span class="n_ n1 ck0">&nbsp;</span></div>\
     {/if}\
      <div id="uYearArch${yearArch.year}" class="g_menu_07 c06" {if (!((yearArch_index==0 && sel != "arch") || (selId.toString().length >= 4 && (yearArch.year == selId.toString().substring(0,4)))))} style="display:none;"{/if}>\
        {for monthArch in yearArch.archives}\
         {if (pageName == "editBlogAll")}\
           <p class="g_t_hide g_h_18  g_c_mvlft" id="pMonthArch${monthArch.year}_${monthArch.month}">\
           <a href="#" {if selId != null && selId == monthArch.year + "-" + monthArch.month + "-01"} class="g_htc_item g_htc_item_selected" {else} class="g_htc_item"{/if}  onclick="${parentName}.openBlogsByArchive(\'${monthArch.toStandardStr()}\', \'${monthArch.year}-${monthArch.month}\', ${monthArch.count});return false;">${monthArch.month}月(${monthArch.count})</a></p>\
          {else}\
           <p class="g_t_hide g_h_18  g_c_mvlft">\
           <a href="${hostPath}/editBlogAll.do?p1=arch&p2=\'${monthArch.toStandardStr()}\'&p3=${monthArch.count}" \
            {if selId != null && selId == monthArch.year + "-" + monthArch.month + "-01"} class="g_f_init_select"{/if}>${monthArch.month}月(${monthArch.count})</a></p>\
          {/if}\
        {/for}\
      </div>\
    {/for}\
    {else}\
     <div class="g_h_20 g_c_mvdn g_t_left c06 g_t_12">&nbsp;&nbsp;目前没有存档</div>\
    {/if}\
');
var jst_blog_prev_class=new String('\
   {if classes != null && classes.length != 0}\
   {for cls in classes}\
    <div class="g_h_18 g_t_14">\
    <p class="g_t_hide g_htc_item {if selId != null && cls.id == selId} g_htc_item_selected{/if}" id="blogClassId${cls.id}"><span class="g_htc_item"><em>&#149;</em><span class="a_a" onclick="${parentName}.openBlogsByClass(\'${cls.id}\', \'${cls.className|escape|js_string}\', ${classBlogCount[cls_index]});return false;">${cls.className|escape|substring:0,8}(${classBlogCount[cls_index]})</span></span></p>\
    </div>\
   {/for}\
   {else}\
   <div class="g_h_20 g_c_mvdn g_t_left c06 g_t_12">&nbsp;&nbsp;目前没有分类</div>\
   {/if}\
');
var jst_blog_prev_arch=new String('\
    {if yearArchs != null && yearArchs.length != 0}\
    {for yearArch in yearArchs}\
    {if yearArch_index==0}\
      <div class="g_htc_toggle g_h_20 g_c_mvdn g_c_hand g_t_left c06 g_t_14" style="padding-left:0;" id="updown${yearArch.year}" onclick="${objName}.show_hide(\'yearArch${yearArch.year}\', \'updown${yearArch.year}\', true);return false;"><em>&#149;</em>${yearArch.year}年<span class="n_ n0 ck0">&nbsp;</span><span class="n_ n1 ck1">&nbsp;</span></div>\
      {else}\
      <div class="g_htc_toggle g_h_20 g_c_mvdn g_c_hand g_t_left c06 g_t_14" style="padding-left:0;" id="updown${yearArch.year}" onclick="${objName}.show_hide(\'yearArch${yearArch.year}\', \'updown${yearArch.year}\', true);return false;"><em>&#149;</em>${yearArch.year}年<span class="n_ n0 ck1">&nbsp;</span><span class="n_ n1 ck0">&nbsp;</span></div>\
      {/if}\
      <div id="yearArch${yearArch.year}" class="g_menu_07 c06" {if yearArch_index > 0}style="display:none;"{/if}>\
        {for monthArch in yearArch.archives}\
         {if (pageName == "prevBlog")}\
           <p class="g_t_hide g_h_18 g_t_14" id="monthArch${monthArch.year}_${monthArch.month}"><span class="g_htc_item"><span class="a_a" onclick="${parentName}.openBlogsByArchive(\'${monthArch.toStandardStr()}\', \'${monthArch.toString()}\', ${monthArch.count});return false;">${monthArch.month}月(${monthArch.count})</span></span></p>\
          {else}\
           <p class="g_t_hide g_h_18 g_t_14" id="monthArch${monthArch.year}_${monthArch.month}"><a href="${hostPath}/prevBlog.do?archive=${monthArch.toStandardStr()}">${monthArch.month}月(${monthArch.count})</a></p>\
          {/if}\
        {/for}\
      </div>\
    {/for}\
    {else}\
     <div class="g_h_20 g_c_mvdn g_t_left c06 g_t_12">&nbsp;&nbsp;目前没有存档</div>\
    {/if}\
');
var jst_blog_prev_list=new String('\
    {if blogs != null && blogs.length > 0}\
    {for b in blogs}\
    {if b_index < blogRange}\
    <div class={if viewType ==1}"g_c_pdin item ttStyle brd01"{else}"g_c_pdin item  brd01"{/if}id="blog_${b.id}" {if b_index == 0}style="padding-top:8px"{/if}>\
      <div class="titlebar g_htc_toggle c05" >\
     <p class="g_t_hide intitle g_c_smvlft" id="divBlogTitle${b.id}" style="width:80%;display:inline;">{if loadType != "archive" && b.rank > 0}<span class="tt c07">[置顶]</span>{/if}<a class="tt" href="http://${hostName|parentDomain}/${b.permalink}/" target="_blank">${b.title|default:""|escape}</a></p>\
       <br class="g_p_clear" />\
      </div>\
      {if viewType == 2}\
      <span class="g_p_left g_c_smvlft c09">${NetEase.DateTime.formatDate(b.publishTime,"yyyy-MM-dd HH:mm")} </span><br class="g_p_clear"/>\
      <div id="blogContent_${b.id}" class="g_w_100"  >\
        <div class="g_t_left c07 content" id="blogtext_${b.id}">\
        ${b.blogAbstract|default:""}\
             <br/><a class="c05" href="#" style="font-size:12px;" onclick="${objName}.openBlog(\'${b.permalink}\', event);return false;">阅读全文&nbsp;&gt;&gt;</a>\
        </div>\
      </div>\
      {/if}\
   <div class="g_tab_btn00" id="cssTabBar_${b.id}">\
     {if viewType == 1}\
          <div class="left c09" style="margin-left:-5px;">${NetEase.DateTime.formatDate(b.publishTime,"yyyy-MM-dd HH:mm")}&nbsp;&nbsp;&nbsp;&nbsp;阅读${b.blogCount.accessCount}&nbsp;&nbsp;&nbsp;评论${b.blogCount.commentCount}</div>\
     {/if}\
        {if viewType == 2}\
    {if (b.className != null && b.className != "")}<div class="left c09"><a id="aBelongCls${b.id}" class="c05" href="#" onclick="${objName}.openSameClass(\'${b.classId}\', \'${b.className|escape|js_string}\');">分类：${b.className.substring(0, 7)|escape}{if b.className.length >= 7}...{/if}</a></div>{/if}\
             <span class="bd1c" style="float:left;line-height:15px">|</span><div class="left" id="access_${b.id}"><a class="c05" href="http://${hostName|parentDomain}/${b.permalink}/" target="_blank">阅读(${b.blogCount.accessCount})</a></div>\
             <span class="bd1c" style="float:left;line-height:15px">|</span><div class="left" id="ComDiv_${b.id}"><a class="c05" href="http://${hostName|parentDomain}/${b.permalink}/" target="_blank">评论(<nobr id="comCount_${b.id}">${b.blogCount.commentCount}</nobr>)<span class="n_ n32 g_p_none">&nbsp;</span></a></div>\
        {/if}\
      </div>\
    </div>\
    {/if}\
    {/for}\
    {else}\
      <div class="g_c_pdin">\
      {if loadType == "class"}\
         该分类暂无日志！\
      {elseif loadType == "archive"}\
         该归档暂无日志！\
      {else}\
    暂无日志！\
      {/if}\
   </div>\
    {/if}\
');
var jst_blog_edit_list=new String('\
    {if blogs != null && blogs.length > 0}\
    {for b in blogs}\
    <div class={if viewType ==1}"g_c_pdin item ttStyle brd01"{else}"g_c_pdin item  brd01"{/if} id="blog_${b.id}" {if b_index == 0}style="padding-top:8px"{/if}>\
      <div class="g_htc_toggle titlebar c05">\
     <p class="g_t_hide intitle g_c_smvlft" id="divBlogTitle${b.id}" style="width:100%;display:inline;">{if (loadType != "archive" && b.rank > 0)}<span class="tt c07">[置顶]</span>{/if}<a class="tt" href="http://${hostName|parentDomain}/${b.permalink}/edit/" target="_blank">${b.title|default:""|escape}</a>\
           <span class="c07 selitm" style="font-size:12px;">\
                {if (b.isPublished == 0)}草稿\
                   {elseif (b.isPublished == 1 && b.valid < 12 && b.allowView == 100)}博友可见\
                      {elseif (b.isPublished == 1 && b.valid < 12 && b.allowView == 10000)}私人日志\
                   {/if}\
        </span>\
        <br class="g_p_clear" />\
         </p>\
      </div>\
      {if viewType == 2}\
       <div><span class="g_p_left g_c_smvlft c09">${NetEase.DateTime.formatDate(b.publishTime,"yyyy-MM-dd HH:mm")}</span><br class="g_p_clear"/></div>\
        <div id="blogContent_${b.id}" class="g_w_100" >\
       <div class="g_t_left c07 content" id="blogtext_${b.id}">\
       ${b.blogAbstract|default:""}\
            <br><a class="c05" href="#" style="font-size:12px;" onclick="${objName}.openBlog(\'${b.permalink}\', event);return false;">阅读全文&nbsp;&gt;&gt;</a>\
       </div>\
        </div>\
      {/if}\
     <div class="g_tab_btn00" id="cssTabBar_${b.id}">\
     {if viewType == 1}\
          <div class="left c09" style="margin-left:-5px;">${NetEase.DateTime.formatDate(b.publishTime,"yyyy-MM-dd HH:mm")}&nbsp;&nbsp;&nbsp;&nbsp;阅读${b.blogCount.accessCount}&nbsp;&nbsp;&nbsp;评论${b.blogCount.commentCount}</div>\
   {if loadType != "archive"}<div id="blogTop${b.id}">{if b.rank == 0}<a class="c05" href="#" onclick="${objName}.topBlog(\'${b.id}\');return false;">置顶</a>{else}<a class="c05" href="#" onclick="${objName}.untopBlog(\'${b.id}\');return false;">取消置顶</a>{/if}</div>{/if}\
   <span class="bd1c" style="float:right;line-height:15px">|</span><div id="blogDel${b.id}" {if loadType != "archive"}class=""{else}class=""{/if}><a class="c05" href="#" onclick="${objName}.deleteBlog(\'${b.id}\', ${b.isPublished}, ${b.publishTime}, ${b.allowView}, ${b.valid}, \'${b.classId}\');return false;">删除</a></div>\
   <span class="bd1c" style="float:right;line-height:15px">|</span><div id="blogEdit${b.id}" class=""><a class="c05" href="http://${hostName|parentDomain}/blog/getBlog.do?bid=${b.id}" target="_blank">编辑</a></div>\
     {/if}\
     {if viewType == 2}\
            {if (b.className != null && b.className != "")}<div class="left c09" style="margin-left:-3px;"><a id="aBelongCls${b.id}" class="c05" href="#" onclick="${objName}.openSameClass(\'${b.classId}\', \'${b.className|escape|js_string}\');">分类：${b.className.substring(0, 7)|escape}{if b.className.length >= 7}...{/if}</a></div>{/if}\
         <span class="bd1c" style="float:left;line-height:15px">|</span><div class="left" id="access_${b.id}"><a class="c05" href="http://${hostName|parentDomain}/${b.permalink}/edit/" target="_blank">阅读(${b.blogCount.accessCount})</a></div>\
         {if b.valid < 12}<span class="bd1c" style="float:left;line-height:15px">|</span><div class="left" id="ComDiv_${b.id}"><a class="c05" target="_blank" href="http://${hostName|parentDomain}/${b.permalink}/edit/">评论(<nobr id="comCount_${b.id}">${b.blogCount.commentCount}</nobr>)<span class="n_ n32 g_p_none">&nbsp;</span></a></div>{/if}\
   <span class="bd1c" style="float:left;line-height:15px">|</span><div id="blogEdit${b.id}" class="left"><a class="c05" href="http://${hostName|parentDomain}/blog/getBlog.do?bid=${b.id}" target="_blank">编辑</a></div>\
   <span class="bd1c" style="float:left;line-height:15px">|</span><div id="blogDel${b.id}" {if loadType != "archive"}class="left"{else}class="left"{/if}><a class="c05" href="#" onclick="${objName}.deleteBlog(\'${b.id}\', ${b.isPublished}, ${b.publishTime}, ${b.allowView}, ${b.valid}, \'${b.classId}\');return false;">删除</a></div>\
        {if loadType != "archive"}<span class="bd1c" style="float:left;line-height:15px">|</span><div id="blogTop${b.id}" class="left">{if b.rank == 0}<a class="c05" href="#" onclick="${objName}.topBlog(\'${b.id}\');return false;">置顶</a>{else}<a class="c05" href="#" onclick="${objName}.untopBlog(\'${b.id}\');return false;">取消置顶</a>{/if}</div>{/if}\
       {/if}\
      </div>\
    </div>\
    {/for}\
    {else}\
      <div class="g_c_pdin">\
      {if loadType == "class"}\
         该分类暂无日志！\
      {elseif loadType == "archive"}\
         该存档暂无日志！\
      {elseif loadType == "feelings"}\
        暂无心路历程！\
      {else}\
    <a href="http://${hostName|parentDomain}/blog/getBlog.do">请写你的第一篇日志</a>\
      {/if}\
   </div>\
    {/if}\
');
var jst_blog_share=new String('\
 <div class="g_h_20 g_c_mvdn"><span class="g_p_right g_c_hand n_ n7" id="aCloseTb${blogId}" onclick="${objName}.closeShare(\'${blogId}\');return false;">&nbsp;</span></div>\
 <div class="g_blog_share">\
     <div class="link c05"><span>－&nbsp;</span><a href="#" {if visitorName!=null && visitorName != ""}onclick="window.open(\'http://${visitorName|parentDomain}/blog/getBlog.do?bid=${blogId}&r=1&host=${visitorName}&uid=${hostId}\');"{else}onclick="showLoginDlg(\'\');return false;" {/if}>引用此篇日志到我的博客</a></div>\
   {if tbs != null && tbs.length != 0}\
   <div class="case">\
      <span class="t c08">引用记录：</span>\
    <div class="l">\
      {for tb in tbs}\
      <div class="i">\
       <span>&#149;</span>\
       <div class="g_t_hide tt"><a href="${tb.referBlogUrl}" target="_blank">${tb.referBlogTitle|default:""|escape}</a></div>\
       <div class="g_t_hide name"><a href="${tb.referHomePage|default:""|escape}" target="_blank">${tb.referBloggerName|default:""|escape}</a></div>\
       <br class="c"/>\
      </div>\
       {/for}\
      <br class="c"/>\
    </div>\
   </div>\
   {/if}\
  <div class="link c05 g_table">\
   <table><tr>\
    <td class="tt c05"><span>－&nbsp;</span><a href="#" {if isIE ==true} onclick="${objName}.copyUrl(\'linkValue_${blogId}\', \'copyFinished_${blogId}\');return false;" {else}onclick="${objName}.copyUrl(\'link_${blogId}\',null,1);return false;"{/if}>复制此篇日志网址</a></td>\
    <td><input id="link_${blogId}" class="brd01 mdlbg c08" redOnly="true" {if isIE ==true}style="display:none;"{/if} onclick="${objName}.copyUrl(\'link_${blogId}\')" value="http://${hostName|parentDomain}/${link}/"><span id="copyFinished_${blogId}" style="margin-left:10px;display:none;" class="n_ f17">复制引用链接成功</span></td></tr>\
   </table>\
   \
   </div>\
  <div class="link c05 ad"><span>－&nbsp;</span><a id="share${blogId}" href="#" onclick="${objName}.showShareDiv(\'${blogId}\', \'${link}\');return false;">发送给博友</a></div>\
  <div style="visibility:hidden;" id="linkValue_${blogId}">http:\/\/${hostName|parentDomain}/${link}/</div>\
 </div>\
');
var jst_blog_prev_related_circle=new String('\
    {if relateCircles.length != 0}\
     <div class="tt c08">\
      <div class="bdb ln">&nbsp;</div>\
      <div class="txt">相关圈子推荐</div>\
      <div class="bdb ln">&nbsp;</div>\
     </div>\
     <div class="g_c_clear"></div>\
     <div class="b">\
      {for circleRecInfo in relateCircles}\
       <div {if circleRecInfo_index> 2} class="hid"{/if}>\
        <div class="left c06"><div>\
         <div class="g_p_left">[</div><div class="g_p_left name"><a href="${circleBaseUrl}/${circleRecInfo.circleUrlName}" target="_blank">${circleRecInfo.circleName|escape}</a></div><div class="g_p_left">]</div><div class="g_p_clear"></div>\
        </div></div>\
        <div class="center c05">&#149;&nbsp;<a href="${CircleInfo.getCircleBlogLink(circleRecInfo.circleUrlName, circleRecInfo.blogRecInfos[0].userName, circleRecInfo.blogRecInfos[0].blogPermalinkSerial)}" target="_blank">${circleRecInfo.blogRecInfos[0].blogTitle|escape}</a></div>\
        {if circleRecInfo.blogRecInfos.length>=2}\
        <div class="right c05">&#149;&nbsp;<a href="${CircleInfo.getCircleBlogLink(circleRecInfo.circleUrlName, circleRecInfo.blogRecInfos[1].userName, circleRecInfo.blogRecInfos[1].blogPermalinkSerial)}" target="_blank">${circleRecInfo.blogRecInfos[1].blogTitle|escape}</a></div>\
        {else}\
        <div class="right">&nbsp;</div>\
        {/if}\
     <div class="g_p_clear"></div>\
       </div>\
      {/for}\
     </div>\
     {if relateCircles.length > 3}\
   <div class="more c06" onclick="${showAllFunc}">\
    <div class="g_p_right n_ n2">&nbsp;</div>\
    <div class="g_p_right txt">更多推荐</div>\
    <div class="g_p_clear"></div></div>\
  {/if}\
    {/if}\
');
var jst_blog_prev_reader=new String('\
 {if readerNames != null && readerNames.length != 0}\
   <div class="g_recent_read_bar">\
     <div class="brd01 lln">&nbsp;</div>\
  <div class="brd01 rln">&nbsp;</div>\
  <span class="c08">最近读者</span>\
  <br class="g_p_clear">\
   </div>\
   <div class="g_recent_read_case c05">\
    {for readerName in readerNames}\
     <div class="ritem"><a href="http://${readerName|default:""|parentDomain}/" target="_blank">\
      {if ((readerImageUrls[readerName_index]) == "-1000")}\
      <img class="brd01" src="http://b.bst.126.net/style/common/user_default.gif" /></a>\
      {else}\
      <img class="brd01" src="${readerImageUrls[readerName_index]|default:""}" onerror="this.src=\'http://b.bst.126.net/style/common/user_default.gif\'" /></a>\
      {/if}\
      <p class="g_t_hide"><a href="http://${readerName|default:""|parentDomain}/" target="_blank">${readerNicknames[readerName_index]|default:""|escape}</a></p></div>\
     {/for}\
  <br class="g_p_clear">\
   </div>\
 {/if}\
');
var jst_blog_prev_citer=new String('\
 {if blogCiters != null && blogCiters.length != 0}\
  <div class="g_recent_read_bar">\
   <div class="brd01 lln">&nbsp;</div>\
   <div class="brd01 rln">&nbsp;</div>\
   <span class="c08">频道推荐</span>\
   <br class="g_p_clear"/>\
  </div>\
  <div class="items">\
    {for citer in blogCiters}\
    <div class="c07"><span class="dot">&#183;</span>这篇博文被 <a href="${citer.channelUrl|default:""}" target="_blank"><span class="c05 g_c_ul g_t_12">${citer.channelName|default:""}</span></a> \
      推荐到 <a href="${citer.columnUrl|default:""}" target="_blank"><span class="c05 g_c_ul g_t_12">${citer.columnName|default:""}</span></a>&nbsp;&nbsp;\
      <span class="c08">${NetEase.DateTime.formatDate(citer.time,"yyyy-MM-dd HH:mm")}</span></div>\
    {/for}\
    <br class="g_p_clear">\
  </div>\
 {/if}\
');
var jst_blog_prev_related=new String('\
 {if blogRelateds != null && blogRelateds.length != 0}\
     <div class="g_recent_read_bar">\
   <div class="brd01 lln">&nbsp;</div>\
   <div class="brd01 rln">&nbsp;</div>\
   <span class="c08">相关日志</span>\
   <br class="g_p_clear"/>\
  </div>\
  <table class="items">\
    {for related in blogRelateds}\
     {if related_index % 2 == 0}\
     <tr>\
     <td width="310px"><div class="c05 subitem"><span class="dot">&#183;</span><a href="${related.url|default:""}?fromPostsense" target="_blank"><span class="c05 g_t_14">${related.title|default:""|escape}</span></a></div></td>\
   {else}\
     <td width="310px"><div class="c05 subitem"><span class="dot">&#183;</span><a href="${related.url|default:""}?fromPostsense" target="_blank"><span class="c05 g_t_14">${related.title|default:""|escape}</span></a></div></td>\
     </tr>\
   {/if}\
    {/for}\
    {if blogRelateds.length % 2 == 1}\
       </tr>\
    {/if}\
    <br class="g_p_clear">\
  </table>\
 {/if}\
');
var jst_blog_batch_edit=new String('\
 {if (blogs != null)}\
 {for b in blogs}\
 <div class="g_htc_over" id="batch_${b.id}"><input type="checkbox" id="batch_sel_${b.id}" style="cursor:pointer;" onclick="${objName}.toggleSelectedBlog(\'${b.id}\');"/>${b.title|default:""|escape}</div>\
 {forelse}\
 <div class="tip">${tipText}</div>\
 {/for}\
 {else}\
 <div class="tip">暂无日志</div>\
 {/if}\
');
var jst_blog_batch_edit_op=new String('\
 <div class="tools">\
  <div class="moveto1 g_t_left g_w_60"><input type="checkbox" style="cursor:pointer;" id="batch_allcheck" onclick="${objName}.selectBatchOnePage(this);"> 全选</input>\
  </div>\
  <div class="pagestool" id="_$_batch_blog_nav">\
  </div>\
  <div class="moveto2 g_t_left g_w_80">将所选日志移到：<select id="clsSel" class="s_prev g_w_50" nohide="true" onchange="${objName}.changeClass(this);return false;">\
   <option value="-1" style="color:#AAA;">--请选择日志分类--</option>\
   {for cls in classes}\
   {if cls.id != loadId}\
    <option class="g_t_14 g_t_hide" value="${cls.id}" style="color:#000;">${cls.className|default:""|escape}</option>\
   {/if}\
   {/for}\
  </select>&nbsp;&nbsp;&nbsp;&nbsp;<span class="g_t_12 g_c_ul c05 g_c_hand" id="batchDelBtn" style="color:#3366cc;" onclick="${objName}.removeBatch();return false;">删除所选日志</span>\</div>\
  <br class="g_p_clear"/>\
 </div>\
 <div class="btns">\
  <input class="g_t_bold" type="button" id="batchUpdateBtn" value="移出所选日志" onclick="${objName}.updateBatchClass();return false" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class="cancel" type="button" value="取消" onclick="${objName}.cancelBatchOp();return false;"/>\
 </div>\
');
var jst_blog_class_manage=new String('\
 <div id="saveSortBar"></div>\
 <div class="l_head"><div class="col01">分类名称</div><div class="col02">修改名称</div><div class="col03">删除</div><div class="col04">排序</div><br class="g_p_clear"/></div>\
 <div class="list" id="$$_item_list">\
  {for cls in itemList}\
  {if cls.className != "默认分类"}\
  <div class="item s_prev g_htc_over setDragOnlyClass" style="height:30px;" id="$$_item_${cls.id}">\
   <div class="prev" style="float:none;">\
    <div class="col01 col01_blk" id="div_cls_${cls.id}">${cls.className|default:""|escape}</div>\
    <div class="col02" onclick="${objName}.edtClass(\'${cls.id}\');return false;"><span class="n_ e7">&nbsp;</span></div>\
    <div class="col03" onclick="${objName}.delClass(\'${cls.id}\', \'${cls.className|escape|js_string}\');return false;"><span class="n_ n6">&nbsp;</span></div>\
    <div class="col04"><span class="n_ f33 g_c_move handleClass">&nbsp;</span></div>\
    <br class="g_p_clear"/>\
   </div>\
   <div class="edit" style="float:none;">\
    <input class="wz_txt name" type="text" id="input_cls_${cls.id}" maxlength="63" value="${cls.className|default:""|escape|js_string}"/>\
    <input class="ok" type="button" value="确 定" onclick="${objName}.submitEdtClass(\'${cls.id}\', \'${cls.className|escape|js_string}\');return false;" />\
    <input class="cancel" type="button" value="取 消" onclick="${objName}.cancelEdtClass(\'${cls.id}\', \'${cls.className|escape|js_string}\');return false;" />\
   </div>\
  </div>\
  {/if}\
  {/for}\
 </div>\
 <div class="btns"><input class="ok" type="button" value="确 定" onclick="${objName}.submitClassOrder();return false;" /><input type="button" value="取 消" onclick="${objName}.cancelClsEdit();return false;" /></div>\
');
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.gPermaLinkPage=null;
NEBlog.gPermalink_Comments=null;
NEBlog.gPermalink_BlogCiters=null;
NEBlog.bFlashLoadSucc=false;
NEBlog.fnOnFlashLoad=function(succ){
if(succ==true)
NEBlog.bFlashLoadSucc=true;
};
var iIntervalId=null;
function gLoadPermaLink(iStaticPage,sMode,sBlogId,iCommentRange,iGlobalAllowComment,sBlogTitle,sBlogPermalink,sPermaSerial,
sCircleBaseUrl,iBlogValid,iIsPublish,sTestOn,iModifyTime,
iCommentCount,sVisitorAvatar,sVisitorIP,iPubSucc)
{
if(isIE&&document.readyState!="complete"){
if(iIntervalId==null){
var args=[];
for(var i=0;i<arguments.length;i++){
args.push(arguments[i]);
}
iIntervalId=window.setInterval(function(){
gLoadPermaLink.apply(this,args);
},500);
}
}else{
gLoadPermaLink_inner(iStaticPage,sMode,sBlogId,iCommentRange,iGlobalAllowComment,sBlogTitle,sBlogPermalink,sPermaSerial,
sCircleBaseUrl,iBlogValid,iIsPublish,sTestOn,iModifyTime,
iCommentCount,sVisitorAvatar,sVisitorIP,iPubSucc);
}
}
function gLoadPermaLink_inner(iStaticPage,sMode,sBlogId,iCommentRange,iGlobalAllowComment,sBlogTitle,sBlogPermalink,sPermaSerial,
sCircleBaseUrl,iBlogValid,iIsPublish,sTestOn,iModifyTime,
iCommentCount,sVisitorAvatar,sVisitorIP,iPubSucc)
{
if(iIntervalId!=null){
window.clearInterval(iIntervalId);
}
if(iStaticPage==1&&NEVar!=undefined&&NEVar.gVisitorInfo!=undefined){
UD.visitorId=NEVar.gVisitorInfo.iVisitorId;
UD.visitorIP=NEVar.gVisitorInfo.sVisitorIP;
UD.visitorAvatar=NEVar.gVisitorInfo.sVisitorAvatar;
UD.visitorName=NEVar.gVisitorInfo.sVisitorName;
UD.visitorNickname=NEVar.gVisitorInfo.sVisitorNickname;
UD.visitorRank=NEVar.gVisitorInfo.iVisitorRank;
if(pageTopBar)
pageTopBar.options.styleToUserId=UD.visitorId;
}
if(iStaticPage==1&&NEVar!=undefined&&NEVar.gBlogPermaPageInfo!=undefined){
if(document.domain=="blog.163.com")
UD.hostPath=NEVar.gBlogPermaPageInfo.sHostPath;
}
NEBlog.gPermaLinkPage=new NEBlog.PermaLinkPage('NEBlog.gPermaLinkPage',
{iStaticPage:iStaticPage,sMode:sMode,sBlogId:sBlogId,iCommentRange:iCommentRange,iGlobalAllowComment:iGlobalAllowComment,
sBlogTitle:sBlogTitle,sBlogPermalink:sBlogPermalink,sPermaSerial:sPermaSerial,sCircleBaseUrl:sCircleBaseUrl,
iBlogValid:iBlogValid,iIsPublish:iIsPublish,sTestOn:sTestOn,
iCommentCount:iCommentCount,
sVisitorAvatar:(sVisitorAvatar==null?NEVar.gVisitorInfo.sVisitorAvatar:sVisitorAvatar),
sVisitorIP:(sVisitorIP==null?NEVar.gVisitorInfo.sVisitorIP:sVisitorIP),
iPubSucc:iPubSucc,iModifyTime:iModifyTime});
}
NEBlog.PermaLinkPage=Class.create();
NEBlog.PermaLinkPage.prototype={
initialize:function(sObjectName){
this._oOptions=Object.extend({
iStaticPage:0,
sMode:'prev',
sBlogId:null,
iCommentRange:null,
iCommentCount:null,
iGlobalAllowComment:null,
sVisitorIP:null,
sVisitorAvatar:null,
sBlogTitle:null,
sBlogPermalink:null,
sPermaSerial:null,
sCircleBaseUrl:null,
iBlogValid:-1,
iIsPublish:1,
iPubSucc:0,
iModifyTime:0,
sTestOn:'off'
},arguments[1]||{});
this._sObjectName=sObjectName;
this._oTester4PB=null;
this.updownMenu=null;
this._init();
return this;
},
_init:function(){
if(this._oOptions.iPubSucc==1){
NEBlog.fnOnFlashLoad=this._onFlashLoad.bind(this);
if(NEBlog.bFlashLoadSucc==true)
NEBlog.fnOnFlashLoad(true);
}
if(this._oOptions.sTestOn=='on')
this._oTester4PB=new NECtrl.SeleniumTester();
else
this._oTester4PB=null;
if(this._oOptions.iStaticPage==1){
var loc=window.location.href;
var commentAnchor=loc.indexOf('#comment');
var trLinkBar=$("_$$_TopBarRight");
trLinkBar&&(trLinkBar.innerHTML=NEVar.gTrLinkBarInnerHTML);
TopSearch.init();
var _arr=["rmdtpxt","rmdtplgn"];
for(var i=_arr.length-1;i>=0;i--){
_o=$(_arr[i]);
if(i==0)_o&&(_o.onclick=function(){exitAfterLogged();return false;});
else if(i==1)_o&&(_o.onclick=function(){showLoginDlg(UD.serverName);return false;});
}
if($('rmdtpcpstl')){$('rmdtpcpstl').onclick=function(){pageTopBar.shareThisTheme(-1,-1,-1,-1,true);return false;}}
var trTopTitle=$("_$$_Top_Title");
trTopTitle&&(trTopTitle.innerHTML=NEVar.gTopTitleInnerHTML);
var tbCount=$("tbCount_"+this._oOptions.sBlogId);
tbCount&&(tbCount.innerHTML=NEVar.gBlogCountInfo.iTrackbackCount);
var accessCount=$("accessCount_"+this._oOptions.sBlogId);
accessCount&&(accessCount.innerHTML=NEVar.gBlogCountInfo.iAccessCount);
if(NEVar.gBlogOrderInfo.sPrevTitle!=''){
var olderBlogTitle=$("olderBlogTitle");
olderBlogTitle&&(olderBlogTitle.innerHTML=NEVar.gBlogOrderInfo.sPrevTitle);
var olderBlogLink=$("olderBlogLink");
olderBlogLink&&(olderBlogLink.href="http://"+DomainMap.getParentDomain(UD.hostName)+"/blog/static/"+NEVar.gBlogOrderInfo.sPrevPermaSerial+"/")&&(olderBlogLink.style.display='');
}
if(NEVar.gBlogOrderInfo.sNextTitle!=''){
var newerBlogTitle=$("newerBlogTitle");
newerBlogTitle&&(newerBlogTitle.innerHTML=NEVar.gBlogOrderInfo.sNextTitle);
var newerBlogLink=$("newerBlogLink");
newerBlogLink&&(newerBlogLink.href="http://"+DomainMap.getParentDomain(UD.hostName)+"/blog/static/"+NEVar.gBlogOrderInfo.sNextPermaSerial+"/")&&(newerBlogLink.style.display='');
}
if(commentAnchor<=0){
var gPermaComs=null;
var gPermaCommentCount=0;
dwr.engine.setRpcType(dwr.engine.ScriptTag);
BlogBean.getCommentsByBlog(UD.hostName,this._oOptions.sBlogId,this._oOptions.sPermaSerial,{
callback:function(data){
eval(data);
var comCount=$("comCount_"+this._oOptions.sBlogId);
comCount&&(comCount.innerHTML=gPermaCommentCount);
NEBlog.gPermalink_Comments=gPermaComs;
this._oOptions.iCommentCount=gPermaCommentCount;
var comParams={blogId:this._oOptions.sBlogId,commentCount:this._oOptions.iCommentCount,
blogTitle:this._oOptions.sBlogTitle,blogPermalink:this._oOptions.sBlogPermalink};
var alreadyHasComment=true;
if(this._oOptions.iIsPublish==0||(this._oOptions.iIsPublish==1&&(this._oOptions.iBlogValid>12||this._oOptions.iBlogValid==4))){
alreadyHasComment=false;
}
this.updownMenu=new NEBlog.UpdownMenu(this._sObjectName+'.updownMenu',{bPrev:(this._oOptions.sMode=='prev'?true:false),
commentRange:this._oOptions.iCommentRange,visitorAvatar:this._oOptions.sVisitorAvatar,
allowComment:this._oOptions.iGlobalAllowComment,visitorIP:this._oOptions.sVisitorIP,
alreadyHasComment:alreadyHasComment,bShowCommentDefault:true,oComments:gPermaComs,
openCommentFirstParams:comParams});
}.bind(this),
httpMethod:"GET"
});
dwr.engine.setRpcType(dwr.engine.XMLHttpRequest);
}else{
BlogBean.getCommentCountByBlog(this._oOptions.sBlogId,{
callback:function(dataFromServer){
var comCount=$("comCount_"+this._oOptions.sBlogId);
comCount&&(comCount.innerHTML=dataFromServer);
this._oOptions.iCommentCount=dataFromServer;
var comParams={blogId:this._oOptions.sBlogId,commentCount:this._oOptions.iCommentCount,
blogTitle:this._oOptions.sBlogTitle,blogPermalink:this._oOptions.sBlogPermalink};
var alreadyHasComment=false;
this.updownMenu=new NEBlog.UpdownMenu(this._sObjectName+'.updownMenu',{bPrev:(this._oOptions.sMode=='prev'?true:false),
commentRange:this._oOptions.iCommentRange,visitorAvatar:this._oOptions.sVisitorAvatar,
allowComment:this._oOptions.iGlobalAllowComment,visitorIP:this._oOptions.sVisitorIP,
alreadyHasComment:alreadyHasComment,bShowCommentDefault:true,oComments:gPermaComs,
openCommentFirstParams:comParams});
}.bind(this)
});
}
}else{
var comParams={blogId:this._oOptions.sBlogId,commentCount:this._oOptions.iCommentCount,
blogTitle:this._oOptions.sBlogTitle,blogPermalink:this._oOptions.sBlogPermalink};
var alreadyHasComment=true;
if(this._oOptions.iIsPublish==0||(this._oOptions.iIsPublish==1&&(this._oOptions.iBlogValid>12||this._oOptions.iBlogValid==4))){
alreadyHasComment=false;
}
this.updownMenu=new NEBlog.UpdownMenu(this._sObjectName+'.updownMenu',{bPrev:(this._oOptions.sMode=='prev'?true:false),
commentRange:this._oOptions.iCommentRange,visitorAvatar:this._oOptions.sVisitorAvatar,
allowComment:this._oOptions.iGlobalAllowComment,visitorIP:this._oOptions.sVisitorIP,
alreadyHasComment:alreadyHasComment,bShowCommentDefault:alreadyHasComment,oComments:NEBlog.gPermalink_Comments,
openCommentFirstParams:comParams});
}
if(this._oOptions.sMode=='prev'){
this._showRelateBlogCircle();
}
this._showBlogReaders();
this._showBlogCiters();
if(UD.visitorRank<10000&&UD.hostName!='blog_admin'&&UD.hostName!='music_admin')
this._showYoudaoPostSense();
},
_onFlashLoad:function(succ){
if(succ&&this._oOptions.iPubSucc==1){
NEUtil.FlashCookie.initCookie('BlogDraft');
NEUtil.FlashCookie.deleteValue('Blog_Title_'+UD.hostName);
NEUtil.FlashCookie.deleteValue('Blog_Content_'+UD.hostName);
NEUtil.FlashCookie.deleteValue('Blog_PhotoIds_'+UD.hostName);
}
},
deleteBlog:function(id,isPublished,publishTime,allowView,valid,classId){
if($("blogDel"+id).disabled==true)
return false;
this._oDlgConfirmBlog=new NetEase.ConfirmDlg(this._sObjectName+"._oDlgConfirmBlog",{
sDlgId:"dlg_confirm_blog_del",sAlert:"彻底删除此篇日志？",jsWindowManager:this._oOptions.jsWindowManager,
fnOK:this.doDeleteBlog.bind(this),oFnOKParam:{id:id,isPublished:isPublished,publishTime:publishTime,
allowView:allowView,valid:valid,classId:classId}
});
this._oDlgConfirmBlog.show();
},
doDeleteBlog:function(blog){
$("blogDel"+blog.id).disabled=true;
var p=false;
if(blog.isPublished==1&&blog.valid<12)
p=true;
var archiveDate=new Date(blog.publishTime);
archiveDate.setDate(1);
archiveDate.setHours(0);
archiveDate.setMinutes(0);
archiveDate.setSeconds(0);
archiveDate.setMilliseconds(0);
BlogBean.deleteBlog(blog.id,p,blog.publishTime,blog.allowView,{
callback:function(dataFromServer){
this._postDeleteBlog(dataFromServer,blog.id,blog.classId,archiveDate.getTime(),p);
}.bind(this),
errorHandler:function(errorString,ex){
$("blogDel"+blog.id).disabled=false;
if(ex==undefined||ex==null||
ex.type!="DelSysRecomException"){
return false;
}
alert("该日志已经被系统推荐, 不能删除!");
}.bind(this)
});
},
_postDeleteBlog:function(succ,blogId,classId,archiveDate,isPublished){
if(succ==true){
document.location.href=UD.hostPath+"/blog/edit/";
}else{
dwrlog('日志删除失败','error');
}
},
_showRelateBlogCircle:function(){
var sBlogId=this._oOptions.sBlogId;
if(sBlogId==null)
return;
dwr.engine.setRpcType(dwr.engine.ScriptTag);
BlogBean.getRelateBlogsCircles(UD.hostName,sBlogId,UD.hostId,{
callback:function(oDataFromServer){
var _oList=oDataFromServer.findAll(function(e){
return e.blogRecInfos.length>0
});
var _oData={relateCircles:_oList,circleBaseUrl:this._oOptions.sCircleBaseUrl,showAllFunc:this._sObjectName+".showAllCircleBlogs('"+sBlogId+"')"};
var _sResult=jst_blog_prev_related_circle.processUseCache(_oData);
if(_sResult==""){
$("relateBlogCircle_"+sBlogId).style.display="none";
}else{
$("relateBlogCircle_"+sBlogId).innerHTML=_sResult;
}
}.bind(this),
httpMethod:"GET"
});
dwr.engine.setRpcType(dwr.engine.XMLHttpRequest);
},
_showBlogReaders:function(){
var sBlogId=this._oOptions.sBlogId;
var SEPARATOR="_,!&,_";
VisitBean.getBlogReaders(sBlogId,UD.hostId,{
callback:function(oDataFromServer){
if(oDataFromServer!=null){
var readerNames=oDataFromServer.visitorNames;
var readerNicknames=oDataFromServer.visitorNicknames;
var readerImageUrls=oDataFromServer.visitorImageUrls;
var names;
var nicknames;
var imageUrls;
if(readerNames!=null)
names=readerNames.split(SEPARATOR);
if(readerNicknames!=null)
nicknames=readerNicknames.split(SEPARATOR);
if(readerImageUrls!=null)
imageUrls=readerImageUrls.split(SEPARATOR);
if(names.length>0){
var _oData={readerNames:names,readerNicknames:nicknames,readerImageUrls:imageUrls};
var _sResult=jst_blog_prev_reader.processUseCache(_oData);
var blogReaderDiv=$("blogReader_"+sBlogId);
blogReaderDiv&&(blogReaderDiv.innerHTML=_sResult);
blogReaderDiv&&(blogReaderDiv.style.display="");
}
}
}.bind(this)
});
},
_showBlogCiters:function(){
var citersDiv=$('blogCiter_'+this._oOptions.sBlogId);
if(citersDiv==null)
return;
var _oData={blogCiters:NEBlog.gPermalink_BlogCiters};
var _sResult=jst_blog_prev_citer.processUseCache(_oData);
citersDiv&&(citersDiv.innerHTML=_sResult);
citersDiv&&(citersDiv.style.display="");
},
_showYoudaoPostSense:function(){
var postSenseDiv=$('postsense');
if(postSenseDiv==null)
return;
var titleText=$('blogtitle_'+this._oOptions.sBlogId).innerHTML;
var contentText=$('blogtext_'+this._oOptions.sBlogId).innerHTML;
dwr.engine.setRpcType(dwr.engine.ScriptTag);
var modifyTime=this._oOptions.iModifyTime;
if(modifyTime=='undefined'||modifyTime==undefined||modifyTime==null)
modifyTime=0;
else
modifyTime=parseInt(modifyTime);
YoudaoBean.getPostSense(UD.hostName,this._oOptions.sBlogId,this._oOptions.sBlogPermalink,modifyTime,{
callback:function(data){
eval(data);
if(typeof(response)!='undefined'&&response!=undefined&&response!=null){
var hits=response.hits;
var _oData={blogRelateds:hits};
var _sResult=jst_blog_prev_related.processUseCache(_oData);
postSenseDiv&&(postSenseDiv.innerHTML=_sResult);
postSenseDiv&&(postSenseDiv.style.display="");
}
}.bind(this),
httpMethod:"GET"
});
dwr.engine.setRpcType(dwr.engine.XMLHttpRequest);
},
showAllCircleBlogs:function(_blogId){
Element.addClassName($("relateBlogCircle_"+_blogId),"show");
},
topBlog:function(blogId){
BlogBean.topBlog(blogId,{
callback:function(dataFromServer){
dwrlog('置顶成功','ok');
}.bind(this),
errorHandler:function(errorString,ex){
dwrlog('置顶失败','error');
}
});
},
untopBlog:function(blogId){
BlogBean.untopBlog(blogId,{
callback:function(dataFromServer){
dwrlog('取消置顶成功','ok');
}.bind(this),
errorHandler:function(errorString,ex){
dwrlog('取消置顶失败','error');
}
});
},
_test4PB:function(sKey,vValues,sRelValue){
if(this._oTester4PB==null)
return;
switch(sKey){
case"Blog":
this._oTester4PB.setSingle("Blog",vValues);
break;
case"Com":
this._oTester4PB.setArray("Com",vValues);
break;
case"Tb":
this._oTester4PB.setArray("Tb",vValues);
break;
}
}
}
var CircleConst={
CIRCLE_PRIV_ADMIN:1,
CIRCLE_PRIV_NORMAL:2,
CIRCLE_PRIV_NEW:3,
IS_IN_NEW_PERIOD:1000*60*60*24*7,
CIRCLE_STATUS_APPLIED:1,
CIRCLE_STATUS_REJECTED:2,
CIRCLE_STATUS_SUCCESS:3,
CIRCLEUSER_STATUS_APPLIED:1,
CIRCLEUSER_STATUS_REJECTED:2,
CIRCLEUSER_STATUS_SUCCESS:3,
CIRCLEUSER_STATUS_SECONDAPPLIED:4,
CIRCLEUSER_STATUS_SECONDREJECT:5,
CIRCLEBLOG_STATUS_APPLIED:1,
CIRCLEBLOG_STATUS_REJECTED:2,
CIRCLEBLOG_STATUS_SUCCESS:3,
CIRCLE_MODULE_CIRCLEINFO:1,
CIRCLE_MODULE_NEW_ARTICLES:2,
CIRCLE_MODULE_HOT_ARTICLES:3,
CIRCLE_MODULE_RECOMMEND_ARTICLES:4,
CIRCLE_MODULE_HOT_MEMBERS:5,
CIRCLE_MODULE_ACTIVE_MEMBERS:6,
CIRCLE_MODULE_RED_MEMBERS:7,
CIRCLE_MODULE_NEW_MEMBERS:8,
CIRCLE_MODULE_VISITSTAT:9,
CIRCLE_MODULE_BULLETIN:10,
CIRCLE_MODULE_CUSTOMHTML_ADD:11,
CIRCLE_MODULE_CREATOR:13,
CIRCLE_MODULE_BLOG_COLUMN:1000,
CIRCLE_MODULE_CUSTOM:10000,
CIRCLE_MODULE_CUSTOMLIST:10001,
CIRCLE_MODULE_CUSTOMHTML:10002,
CIRCLEBLOG_DEFAULT_BLOGNUM:10,
CIRCLE_MEMBER_PAGE_RANGE:20,
CIRCLE_BLOG_PAGE_RANGE:20,
CIRCLE_BLOG_PREV_PAGE_RANGE:20,
CIRCLE_MEMBER_PREV_PAGE_RANGE:20,
CIRCLE_MAP_PAGE_RANGE:50,
BLOGS_SHOW_SIZE:300,
MEMBERS_SHOW_SIZE:300,
CIRCLE_JOIN_SUCCESS:1,
CIRCLE_JOIN_ALREADY_MEMBER:2,
CIRCLE_KIND_PUBLIC:1,
CIRCLE_KIND_PRIVATE:2,
BLOG_RSS:1,
RESOURCELIST_RSS:2,
RANK_OWNER:10000,
RANK_ADMIN:100,
RANK_GUEST:0,
RANK_ANONYMOUS:-100,
RANK_NESUSER:-90,
RANK_UNKNOWN:999999,
DEFAULT_COLOR:"-1",
DEFAULT_FONT:"宋体",
DEFAULT_ALLOW_COMMENT:false,
DEFAULT_BORDER_STYLE:0,
DEFAULT_BORDER_WIDTH:1,
DEFAULT_PIC_REPEAT:0,
DEFAULT_PIC_POS:0,
NO_LOGO_PIC:"/photo/-4000.jpg",
NO_BIG_PIC:"/photo/-3000.jpg",
NO_BACK_PIC:"/photo/-2000.jpg",
NO_LINK_PIC:"/photo/-5000.jpg"
}
var BlogsUtil={
getBlogRankHtml:function(rank){
var rankHtml="";
for(var i=0;i<rank;i++){
rankHtml+="<img src='/style/common/icn_star.gif'/>";
}
for(var i=rank;i<5;i++){
rankHtml+="<img src='/style/common/icn_star_grey.gif'/>";
}
return rankHtml;
},
getBlogRankUpdateHtml:function(circleId,blogId,rank){
var rankHtml="";
for(var i=0;i<rank;i++){
var curRank=i+1;
rankHtml+="<img id='rank"+curRank+"' onclick='RankAdaptor.changeRank("+circleId+","+blogId+","+curRank+")' style='cursor:pointer' src='/style/common/icn_star.gif'/>";
}
for(var i=rank;i<5;i++){
var curRank=i+1;
rankHtml+="<img id='rank"+curRank+"' onclick='RankAdaptor.changeRank("+circleId+","+blogId+","+curRank+")' style='cursor:pointer' src='/style/common/icn_star_grey.gif'/>";
}
return rankHtml;
}
}
var CircleUtil={
circlePrivs:[
{id:CircleConst.CIRCLE_PRIV_ADMIN,name:"管理员"},
{id:CircleConst.CIRCLE_PRIV_NORMAL,name:"普通圈友"}
],
circleKinds:[
{id:CircleConst.CIRCLE_KIND_PUBLIC,name:"公开"},
{id:CircleConst.CIRCLE_KIND_PRIVATE,name:"私密"}
],
circlePrivImgs:[
{id:CircleConst.CIRCLE_PRIV_ADMIN,name:"<img src='/style/common/icn_boss.gif' title='管理员'/>"},
{id:CircleConst.CIRCLE_PRIV_NORMAL,name:"<img src='/style/common/icn_member.gif' title='普通圈友'/>"}
],
circlePrivImgsInOne:[
{id:CircleConst.CIRCLE_PRIV_ADMIN,name:"<img src='/style/common/icn_boss.gif' title='管理员' />"},
{id:CircleConst.CIRCLE_PRIV_ADMIN+10,name:"<img src='/style/common/icn_bosspop.gif' title='管理员 推荐' />"},
{id:CircleConst.CIRCLE_PRIV_NORMAL,name:"<img src='/style/common/icn_member.gif' title='普通圈友'/>"},
{id:CircleConst.CIRCLE_PRIV_NORMAL+10,name:"<img src='/style/common/icn_memberpop.gif' title='普通圈友 推荐'/>"},
{id:CircleConst.CIRCLE_PRIV_NEW,name:"<img src='/style/common/icn_newman.gif' title='新圈友' />"}
],
circlePrivImgsInBG:[
{id:CircleConst.CIRCLE_PRIV_ADMIN,name:"m8",hint:"管理员"},
{id:CircleConst.CIRCLE_PRIV_ADMIN+10,name:"m8",hint:"管理员 推荐"},
{id:CircleConst.CIRCLE_PRIV_NORMAL,name:"m7b",hint:"普通圈友"},
{id:CircleConst.CIRCLE_PRIV_NORMAL+10,name:"m7b",hint:"普通圈友 推荐"},
{id:CircleConst.CIRCLE_PRIV_NEW,name:"m7b",hint:"新圈友"}
],
circlePrivHint:[
{id:CircleConst.CIRCLE_PRIV_ADMIN,name:"管理员"},
{id:CircleConst.CIRCLE_PRIV_ADMIN+10,name:"管理员 推荐"},
{id:CircleConst.CIRCLE_PRIV_NORMAL,name:"普通圈友"},
{id:CircleConst.CIRCLE_PRIV_NORMAL+10,name:"普通圈友 推荐"},
{id:CircleConst.CIRCLE_PRIV_NEW,name:"新圈友"}
],
circleUserStatus:[
{id:CircleConst.CIRCLEUSER_STATUS_APPLIED,name:"正在申请"},
{id:CircleConst.CIRCLEUSER_STATUS_REJECTED,name:"被拒绝"},
{id:CircleConst.CIRCLEUSER_STATUS_SUCCESS,name:"申请成功"},
{id:CircleConst.CIRCLEUSER_STATUS_SECONDAPPLIED,name:"再次申请"},
{id:CircleConst.CIRCLEUSER_STATUS_SECONDREJECT,name:"再次被拒"}
],
blogStatus:[
{id:CircleConst.CIRCLEBLOG_STATUS_APPLIED,name:"未审核"},
{id:CircleConst.CIRCLEBLOG_STATUS_REJECTED,name:"被拒绝"},
{id:CircleConst.CIRCLEBLOG_STATUS_SUCCESS,name:"推送成功"}
],
blogRanks:[
{id:0,name:BlogsUtil.getBlogRankHtml(0)},
{id:1,name:BlogsUtil.getBlogRankHtml(1)},
{id:2,name:BlogsUtil.getBlogRankHtml(2)},
{id:3,name:BlogsUtil.getBlogRankHtml(3)},
{id:4,name:BlogsUtil.getBlogRankHtml(4)},
{id:5,name:BlogsUtil.getBlogRankHtml(5)}
],
getCircleKindStr:function(circleKindId){
return IdToName.convert(circleKindId,CircleUtil.circleKinds);
},
getUserPrivName:function(privilege){
return IdToName.convert(privilege,CircleUtil.circlePrivs);
},
getUserPrivImg:function(privilege){
return IdToName.convert(privilege,CircleUtil.circlePrivImgs);
},
getUserPrivImgInOne:function(privilege,inRedList,joinDate){
var red;
if(inRedList)
red=new Number(10);
else
red=new Number(0);
var newPriv=new Number(privilege)+red;
return IdToName.convert(newPriv,CircleUtil.circlePrivImgsInBG);
},
getUserPrivHint:function(privilege,inRedList,joinDate){
var red;
if(inRedList)red=new Number(10);
else red=new Number(0);
var newPriv=new Number(privilege)+red;
return IdToName.convert(newPriv,CircleUtil.circlePrivHint);
},
getBlogStatus:function(status){
return IdToName.convert(status,CircleUtil.blogStatus);
},
getBlogRankHtml:function(rank){
return IdToName.convert(rank,CircleUtil.blogRanks);
},
getBlogRankUpdateHtml:function(circleId,blogId,rankId){
return BlogsUtil.getBlogRankUpdateHtml(circleId,blogId,rankId);
},
getUserStatus:function(status){
return IdToName.convert(status,CircleUtil.circleUserStatus);
},
getColumn:function(columnId){
return IdToName.convert(columnId,CircleUtil.circleColumns);
}
}
var SpaceInfo={
init:function(spaceBaseUrl){
SpaceInfo.baseUrl=spaceBaseUrl;
}
}
var CirclePageTitle={
set:function(title){
$("titletext").innerHTML=title;
}
}
var CircleInfo={
baseUrl:"http://q.163.com",
init:function(circleId,style,callback){
CircleInfo.circleId=circleId;
CircleInfo.style=style;
CircleBean.getCircleColumns(circleId,function(circleColumns){
CircleInfo.circleColumns=circleColumns;
if(callback!=null){
callback();
}
});
},
getColumn:function(columnId){
var circleColumn=CircleInfo.circleColumns.find(function(curColumn){
return curColumn.id==columnId;
});
if(null==circleColumn){
alert("error columnId: "+columnId);
return"";
}
return circleColumn;
},
getColumnByName:function(columnName){
var circleColumn=CircleInfo.circleColumns.find(function(curColumn){
return curColumn.name==columnName;
});
return circleColumn;
},
getCircleBlogLink:function(circleUrlName,userName,permalink){
var permaPrefix="blog/static/";
if(permalink.indexOf(userName+"/"+permaPrefix)==0){
permaPrefix=userName+"/"+permaPrefix;
}
var permaPrefixLength=permaPrefix.length;
var permaSerial=permalink;
if(permalink.indexOf(permaPrefix)==0)
permaSerial=permalink.substring(permaPrefixLength);
return CircleInfo.baseUrl+"/"+circleUrlName+"/blog/"+userName+"/"+permaSerial;
}
}
var CirclePushInfo={
pushedCircles:[],
notPushedCircles:[],
circleType1s:[],
circleBaseUrl:null,
init:function(profileId,circleBaseUrl,getUnpushedCirclesFunc,getPushedCirclesFunc,getCircleType1sFunc){
CirclePushInfo.profileId=profileId;
CirclePushInfo.circleBaseUrl=circleBaseUrl;
getUnpushedCirclesFunc();
getPushedCirclesFunc();
getCircleType1sFunc();
},
addPushedCircle:function(id,urlName,name,circleType1Id){
CirclePushInfo.pushedCircles.push({id:id,urlName:urlName,name:name,circleType1Id:circleType1Id});
},
addCircle:function(id,urlName,name,circleType1Id){
CirclePushInfo.notPushedCircles.push({id:id,urlName:urlName,name:name,circleType1Id:circleType1Id});
},
addCircleType1:function(id,name){
CirclePushInfo.circleType1s.push({id:id,name:name});
},
getCircleType1ById:function(id){
var circleType1=CirclePushInfo.circleType1s.find(function(circleType1){
return circleType1.id==id;
});
return circleType1;
},
getCirclesByType1:function(type1Id){
var circles=CirclePushInfo.notPushedCircles.findAll(function(curCircle){
return curCircle.circleType1Id==type1Id;
});
return circles;
},
clear:function(){
CirclePushInfo.pushedCircles=[];
CirclePushInfo.notPushedCircles=[];
CirclePushInfo.circleType1s=[];
},
getUserCircleType1s:function(){
var userCircleType1s=[];
CirclePushInfo.notPushedCircles.each(function(circle){
var findCircleType1=userCircleType1s.find(function(circleType1){
return circleType1.id==circle.circleType1Id;
});
if(findCircleType1==null){
userCircleType1s.push(CirclePushInfo.getCircleType1ById(circle.circleType1Id));
}
});
return userCircleType1s;
},
getPushedCircles:function(){
return CirclePushInfo.pushedCircles;
},
getUnpushedCircles:function(){
return CirclePushInfo.notPushedCircles;
}
}
var PP_PREFIX="p^";
var EX_PREFIX="e^";
var MAX_TAG_LEN=12;
var MAX_TAG_COUNT=5;
var recomTagArr=["美女","Web2.0","汽车","生活","LOVA","朋友","Java","记事",
"映像","mood","健身","汽油","上海","娱乐八卦","Diary","广州","北京","LOMO","杂谈","情感","购物","photo",
"随拍","香港","feeling","工作","风景","LOVE","动漫","传媒","车展","歌词","随笔","音乐","自言自语",
"Life","明星","IT","摄影","美食","美容","Linux","旅游","自拍","妈咪","Movie","宝贝","科技","Music","体育",
"世界杯","乱七八糟","乱弹","人物","人生","闲言碎语","学习","小说","心情","感悟","技术","收藏","故事","文摘",
"新闻","日记","宠物","流水帐","涂鸦","消息区","爱情","生活","电影","新闻资讯","网络","美女写真","评论","诗歌",
"读书","资料","足球","转载","图片","阅读"];
var recomPhotoTags=["我","美女","帅哥","自拍","网友","朋友","同学","情侣","老婆","老公","家人","爱情","兄弟","头像",
"宝贝","搞笑","另类","开心","可爱","浪漫","酷","时尚","娃娃","宠物","婚纱","桌面","贴图","素材","动漫","模特","明星",
"超女","电影","韩剧","娱乐","生活","美食","逛街","汽车","体育","足球","篮球","军事","学校","星座","艺术","摄影","写真",
"绘画","旅游","风景","动物","植物","欧美","节日"];
var recomTagTabNames=["新  闻","娱  乐","情  感","文  学","校  园","体  育","生  活","旅  游","财  经","传  媒","科  技"];
var recomTagArrs=[];
var hotTags=["反腐","布什","中东","朝鲜","核武","中日关系","台湾问题","安倍晋三","超女","周杰伦","贺岁片","恶搞","演唱会","潜规则",
"刘德华","梁朝伟","两性","爱情","情感世界","老婆","初恋","性爱","同居","快乐","表白","金庸","古典文学","日记","魔兽","校花","聚会","网络小说","原创作品","央视","公务员","留学","考研","NBA","奥运","火箭","瑜伽",
"中国足球","楼市","自驾游","风景","游记","驴友","攻略","股票","家庭理财","职场","外汇","投资机会","记者","人民币","博客","DIY","WEB2.0",
"笔记本","数码","互联网","病毒安全","找工作","公务员","姚明","球星","回家","汽车","按揭","美食","大自然","股票推荐","主持人","广告","外星人","航天"];
recomTagArrs[0]=["时事","热点","医改","房改","社保","反腐","六方会谈","就业","医保","高校","教改","普京","布什",
"国际关系","伊朗","美军","中东","朝鲜","核武","APEC","公共卫生","伊拉克","公积金","WTO","艾滋病","教育体制","安倍晋三",
"大学扩招","中日关系","食品安全","台湾问题","希望工程"];
recomTagArrs[1]=["影评","乐评","网易娱乐","章子怡","张艺谋","范冰冰","宋祖德","超女",
"何洁","恶搞","李宇春","周杰伦","蔡依林","贺岁片","颁奖","K歌","流行","歌手","假唱","抄袭","演唱会",
"唱片","专辑","CD","吴宇森","西游记","春晚","舞林大会","TVB","越狱","twins","电影","电视剧","韩剧",
"日剧","央视","相声","郭德纲","周迅","陈凯歌","凤凰台","外语片","翻唱","潜规则","导演","编剧","演员",
"原创","贾樟柯","宁浩","刘德华","综艺节目","搞笑","徐静蕾","郭敬明","韩寒","梁朝伟","南都周刊"];
recomTagArrs[2]=["我","老婆","老公","爸爸","妈妈","长辈","朋友","初恋","情人","爱情","婚姻","离婚","生育","吻",
"心","女友","男友","性爱","情色","感动","疯狂","真情","感悟","思念","猪","随笔","恐怖","快乐","人生","幽默","分手",
"失恋","同性恋","另类","伤心","LOVE","我爱你","两性","私人日记","单身","性感","美女","帅哥","对不起","中年","同居","暗恋",
"出轨","珍惜","加油","表白","愿望","岁月"];
recomTagArrs[3]=["茶","校园","古玩","西游记","韩寒","郭敬明","国学","木子美","安妮宝贝","畅销书","红楼梦","金庸","李清照",
"三国演义","读后感","词","悬疑","批评","研究综述","名著","学术","读书","文化","文学","随笔","日记","书评","童话","小说","古典文学","文学研究","文学理论","文学评论",
"古典诗词","现代诗歌","网络小说","武侠小说","言情小说","都市小说","玄幻小说","原创作品","80后"];
recomTagArrs[4]=["考试","高考","兼职","教育","留学","教师","教授","考研","四级",
"六级","高校","校园","学费","自考","雅思","真题","剑桥","课堂","口语","考试技能","魔兽","才女","校花","自习","暑假","实习",
"图书馆","师姐","师兄","聚会","二手","中专","寝室","军训","情书","论文","毕业","教材","找工作","新东方","文科生","教辅",
"十佳","免检寝室","博士","公务员","中学生","大学生","研究生"];
recomTagArrs[5]=["NBA","奥运","篮球","火箭","姚明","足球","世界杯","中国足球","鲁能","国足","女足","欧洲杯","意甲","法国队",
"英超","贝克汉姆","英格兰","罗纳尔多","尤文","曼联","罗马","国际米兰","切尔西","黄健翔","游泳","郭晶晶","田亮","网球","费德勒",
"田径","刘翔","丁俊晖","武术","瑜伽","体育评论","转会","转播","球星","球迷","亚军","冠军","胜利","失败","综合体育","健康"];
recomTagArrs[6]=["工作","学习","互联网","休闲","游戏","购物","逛街","日用","保养","健康","公积金","手机","店铺","工资",
"数码","相机","白领","春节","回家","中医","食疗","乡情","经济学","特产","特色菜","集邮","公司","公交","赚钱","厨房","短信",
"建筑","汽车","买车","学车","保养","赛车","汽油","车模","家居","按揭","炒房","房贷","房价","楼市",
"买房","租房","家具","装修","自驾游","房地产"];
recomTagArrs[7]=["旅游","摄影","风景","名胜","旅行","古迹","个人相片","游记","风光","驴友","美景","贴图","丽江",
"桂林","香港","大自然","帐篷","睡袋","防潮垫","西藏","登山鞋","团长","资讯","摄影","旅行社","自然","结伴","线路","出游",
"天下","攻略","装备","指南","随笔","享受","户外","乐趣","露营","登山","美食","垂钓","公社","协会","穿越","体验","天堂","攀岩",
"行走","雪山","草原","花朵","湖泊","森林","大海","高原","墨脱","探险","自行车","越野","大山","原始","山野","笨重","大背包","古道"];
recomTagArrs[8]=["创业","贵族","东风","日产","财经","经济","贷款","管理","金融","经营","贸易","品牌","期货","股票","股市","证券","炒股",
"商务","商业","销售","银行","营销","职场","资本","理财","外汇","投资","基金","保险","大盘","个股","股改","股评","新股","保险费","企业家","人民币","信用卡","中签率","中小板","重仓股",
"会计","超支","投机","盘点","融资","李嘉诚","股东","提成","国债","按揭","股指期货","家庭理财","操盘日记","大势分析","股票推荐","投资主题","私募基金","投资机会","企业年金"];
recomTagArrs[9]=["传媒","媒体","记者","报业","采访","编辑","央视","杂志","报纸","纸媒体","TV","财经媒体",
"传统媒体","电视台","多媒体","新闻媒体","传媒观察","主持人","CCTV","笑话","福克斯","车模","评论","平台","频道","广告","传播","普利策",
"广电","滚动新闻","电台"];
recomTagArrs[10]=["博客","WEB2.0","创新","互联网","社区","播客","维基","IT动态","IT评论","IT随想","视频","软件",
"Vista","网络","编程","搜索","用户体验","黑客","病毒","安全","硬件","DIY","电脑",
"笔记本","电子商务","通信","3G","3C融合","IPTV","VoIP","手机上网","增值服务","知识产权","虚拟货币","月租","家用电器",
"手机","数码","电子","无线","宽带","职能","机器人","航天","宇宙","地理","人类","探索","生命科学","考古","奇闻轶事","外星人"];
function findUserTagList(tag){
var tagObj=getTagObjByTagname(tag,-1,g_userTagList);
if(tagObj)
return true;
else
return false;
}
function procTagsUtil(tagInfoTemp){
var tags=processTagString(tagInfoTemp.tags);
var tagOldList=tags.split(",");
tagOldList=removeSameEl(tagOldList);
var tagNewList=[];
var tagJoinList=[];
var tagNotJoinList=[];
var data;
for(data=0;data<tagOldList.length;data++){
var tod=tagOldList[data];
if(tod!=""){
if(findUserTagList(tod)||tod.indexOf(PP_PREFIX)==0||tod.indexOf(EX_PREFIX)==0){
tagNotJoinList.push(tod);
}else{
tagJoinList.push(tod);
}
}
}
tagNewList=tagJoinList.concat(tagNotJoinList);
tagNewList=removeSameEl(tagNewList);
tagInfoTemp.numJoin=tagJoinList.length;
tagInfoTemp.tags=tagNewList.toString().toLowerCase();
}
function processTagUtilForCb(tags){
var strTagQuotList=[];
var resultTags="";
var posQuot1=-1;
var posQuot2=-1;
do{
posQuot1=tags.indexOf('\"',0);
if(posQuot1!=-1)
posQuot2=tags.indexOf('\"',posQuot1+1);
if(-1!=posQuot1&&posQuot2>posQuot1){
var strQuot=tags.substring(posQuot1+1,posQuot2);
strQuot=strQuot.replace(/,/g," ");
strQuot=Trim(strQuot);
strQuot=strQuot.replace(/\s+/g," ");
strTagQuotList.push(strQuot);
tags=tags.substring(0,posQuot1)+","+tags.substring(posQuot2+1);
}
}while(-1!=posQuot1&&-1!=posQuot2);
tags=tags.replace(/"/g,"");
tags=tags.replace(/ /g,",").replace(/　/g,",");
var strTagArr=tags.split(",");
strTagQuotList.each(function(str){
if(str!=""){
str=Trim(str);
if(resultTags!=""){
resultTags+=",";
}
resultTags+=str;
}
});
strTagArr.each(function(str){
if(str!=""){
str=Trim(str);
if(resultTags!=""){
resultTags+=",";
}
resultTags+=str;
}
});
return removeSameEl(resultTags.split(",")).toString();
}
function structQuotedTag(tagArr){
var tag="";
tagArr.each(function(str){
if(str.indexOf(' ',1)>0){
str="\""+str+"\"";
}
if(tag!="")
tag+=",";
tag+=str;
});
return tag;
}
function getAddDelTags(tagInfoTemp,oldTags,newTags){
var tagOldList=[];
var tagNewList=[];
if(oldTags)
tagOldList=oldTags.split(",");
if(newTags)
tagNewList=newTags.split(",");
var tagAddList=[];
var tagDelList=[];
var i;
var j;
for(i=0;i<tagNewList.length;i++){
for(j=0;j<tagOldList.length;j++){
if(tagNewList[i]==tagOldList[j]){
break;
}
}
if(j==tagOldList.length){
tagAddList.push(tagNewList[i]);
}
}
for(i=0;i<tagOldList.length;i++){
for(j=0;j<tagNewList.length;j++){
if(tagOldList[i]==tagNewList[j]){
break;
}
}
if(j==tagNewList.length){
tagDelList.push(tagOldList[i]);
}
}
tagInfoTemp.addTags=tagAddList.toString();
tagInfoTemp.delTags=tagDelList.toString();
}
var recomTagCount=0;
var actTagCount=0;
var oldPPTag='';
var idPrefix1="city_";
var idPrefix2="other_";
function getPPTagTabHTML(inputId){
var str="";
str+="<span style='color:#aaa;margin-left:0px;'>点击选择对应的标签，必选</span><br />";
var comCss="display:inline;margin:0px;padding:2px 5px 0px 5px;border-top:#aaa 1px solid;border-right:#aaa 1px solid;";
var comCss2="display:inline;margin:0px;padding:2px 5px 0px 5px;position:relative;border:1px solid #aaa;border-top:none;border-bottom:none;top:2px!important;top:1px;_top:0px;";
str+="<div style='margin-top:3px;padding:0px;overflow:visible;z-index:20;'>";
if(inputId=="editphotoPPTag"){
str+=" <div id='tagTab1_"+inputId+"'  style='"+comCss2+" margin-left:10px;'><span id='tabTitle1' style='color:#aaaaaa;cursor:pointer;font-size:14px;' onclick='return tagTabclick(1,\""+inputId+"\",1);'>推荐标签</span></div>";
str+=" <div id='tagTab2_"+inputId+"' style='"+comCss2+"margin-left:-5px!important;margin-left:-1px;'><span id='tabTitle2' style='color:#aaaaaa;cursor:pointer;font-size:14px;' onclick='return tagTabclick(2,\""+inputId+"\",1);'>活动标签</span></div>";
str+=" <div id='tagTabShowTags_"+inputId+"' style='padding:5px;background-color:#ffffff;border-top:1px solid #aaa;'></div>";
}
else{
str+=" <div id='tagTab1_"+inputId+"'  style='"+comCss+" border-left:#aaa 1px solid;'><span id='tabTitle1' style='color:#aaaaaa;cursor:pointer;' onclick='return tagTabclick(1,\""+inputId+"\",1);'>推荐标签</span></div>";
str+=" <div id='tagTab2_"+inputId+"' style='"+comCss+"margin-left:-4px!important;margin-left:0px;'><span id='tabTitle2' style='color:#aaaaaa;cursor:pointer;' onclick='return tagTabclick(2,\""+inputId+"\",1);'>活动标签</span></div>";
str+=" <div id='tagTabShowTags_"+inputId+"' style='padding:5px;background-color:#ffffe1;border:#aaa 1px solid;'></div>";
}
str+="</div>";
return str;
}
function get1StepPPRecomTagsHTML(inputId){
var a=[];
var comCss="float:right;color:#aaa;";
if(inputId!="editphotoPPTag")
a.push("<div style='"+comCss+"'><a href='#' onclick='hideUserAllTags(\""+inputId+"\",\""+'ppTag'+"\");return false;'><img src='"+Const.STDomain+"/style/common/icn_closetag.gif' style='border:none;' /></a></div>");
a.push("<div style='margin-left:4px;color:#aaa;'>第一步，请选择一个一级标签</div>");
a.push("<div style='clear:both;'></div>");
a.push("<div style='padding:6px; margin-top:6px; border-top:1px solid #aaa;'>");
var i=0;
var idName;
aFirstCityTags.each(function(e){
idName=idPrefix1+i;
a.push("<div id="+idName+" style='display:inline;margin-right:6px;line-height:22px;'><a href='#' style='color:#333333;' onclick='set1StepPPElementValue(\""+inputId+"\", 0, this); return false;'>"+e+"</a></div>");
i++;
});
a.push("</div>");
a.push("<div style='padding:6px; border-top:1px solid #aaa;'>");
aFirstOtherTags.each(function(e){
idName=idPrefix2+i;
a.push("<div id="+idName+" style='display:inline;margin-right:6px;line-height:22px;'><a href='#' style='color:#333333;' onclick='set1StepPPElementValue(\""+inputId+"\", 0, this); return false;'>"+e+"</a></div>");
i++;
});
a.push("</div>");
return a.join("");
}
function set1StepPPElementValue(inputId,tagIndex,el){
var div=el.parentNode;
var sId=div.id;
if(tagIndex==0){
if(sId.indexOf(idPrefix1)==0){
sId=sId.substr(5);
$('tagTabShowTags_'+inputId).innerHTML=get2StepPPRecomTagsHTML(inputId,sId,false);
}
else if(sId.indexOf(idPrefix2)==0){
sId=sId.substr(6);
$('tagTabShowTags_'+inputId).innerHTML=get2StepPPRecomTagsHTML(inputId,sId,true);
}
}
else if(tagIndex==1){
sId=sId.substr(4);
$('tagTabShowTags_'+inputId).innerHTML=get2StepPPActiveTagsHTML(inputId,sId);
}
}
function get2StepPPRecomTagsHTML(inputId,index,isOther){
var a=[];
var oldIndex=index;
var comCss="float:right;color:#aaa;";
if(inputId!="editphotoPPTag")
a.push("<div style='"+comCss+"'><a href='#' onclick='hideUserAllTags(\""+inputId+"\",\""+'ppTag'+"\");return false;'><img src='"+Const.STDomain+"/style/common/icn_closetag.gif' style='border:none;'/></a></div>");
a.push("<div style='margin-left:4px;color:#aaa;'>第二步，请选择1到3个二级标签</div>");
a.push("<div style='clear:both;'></div>");
var aFirstTags=aFirstCityTags;
var aSecondTags1=aSecondCityTags1;
var aSecondTags2=aSecondCityTags2;
var aSecondTags3=aSecondCityTags3;
var secPrefix=idPrefix1;
if(isOther){
aFirstTags=aFirstOtherTags;
aSecondTags1=aSecondOtherTags1;
aSecondTags2=aSecondOtherTags2;
aSecondTags3=aSecondOtherTags3;
secPrefix=idPrefix2;
index=index-aFirstCityTags.length;
}
a.push("<div style='padding:6px 0px 0px 6px; margin-top:6px; border-top:1px solid #aaa;'>");
a.push("<div style='font-weight:bold;color:#333;'>"+aFirstTags[index]+"</div>");
a.push("<div style='padding:0px 6px 6px 6px; margin-top:6px; margin-left:6px; border-bottom:1px solid #aaa;'>");
var i=0;
var aTag1=aSecondTags1[index];
aTag1.each(function(e){
idName=secPrefix+i;
a.push("<div id="+idName+" style='display:inline;margin-right:6px;line-height:22px;'><a href='#' style='color:#333333;' onclick='set2StepPPElementValue(\""+inputId+"\", \""+oldIndex+"\", 0, this); return false;'>"+e+"</a></div>");
i++;
});
a.push("<div class='g_p_none'><label class='c09'>自定义：</label><div class='g_p_inline'><input class='bd01 g_c_input' id='selfDefinedTag' name='selfDefinedTag' size=8 onkeyup='checkUserInput();' />&nbsp;&nbsp;<input id='selfDefineBtn' type='button' disabled='true' style='border:1px solid #aaaaaa;background-color:#e5e5e5;color:#777;' value='确定' onclick='goOk(\""+inputId+"\", \""+oldIndex+"\", 0);' /></div></div>");
a.push("</div>");
var aTag2=aSecondTags2[index];
a.push("<div style='padding:0px 6px 6px 6px; margin-top:6px; margin-left:6px; border-bottom:1px solid #aaa;'>");
aTag2.each(function(e){
idName=secPrefix+i;
a.push("<div id="+idName+" style='display:inline;margin-right:6px;line-height:22px;'><a href='#' style='color:#333333;' onclick='set2StepPPElementValue(\""+inputId+"\", \""+oldIndex+"\", 0, this); return false;'>"+e+"</a></div>");
i++;
});
a.push("</div>");
var aTag3=aSecondTags3[index];
a.push("<div style='padding:0px 6px 6px 6px; margin-top:6px; margin-left:6px; '>");
aTag3.each(function(e){
idName=secPrefix+i;
a.push("<div id="+idName+" style='margin-bottom:4px;'><a href='#' style='color:#333333;' onclick='set2StepPPElementValue(\""+inputId+"\", \""+oldIndex+"\", 0, this); return false;'>"+e+"</a></div>");
});
a.push("</div>");
a.push("<div style='padding:0px 6px;margin:0px 0px 4px 6px;'><center><input type='button' style='border:1px solid #aaaaaa;background-color:#e5e5e5;color:#777;' value='返 回' onclick='goBack(\""+inputId+"\",\""+oldIndex+"\", 0);' /></center></div>");
a.push("</div>");
return a.join("");
}
function checkUserInput(){
var shouldDisable=false;
if($('selfDefinedTag').value=='')
shouldDisable=true;
$('selfDefineBtn').disabled=shouldDisable;
textareaLimit($('selfDefinedTag'),6);
}
function set2StepPPElementValue(inputId,index,tagIndex,el){
var isFromPhotoEdit=false;
if(inputId=="editphotoPPTag")
isFromPhotoEdit=true;
var aFirstTags=aFirstCityTags;
var tmpIndex=index;
if(index>=aFirstCityTags.length){
aFirstTags=aFirstOtherTags;
tmpIndex=index-aFirstCityTags.length;
}
var selectVal;
if(isIE){
selectVal=el.innerText;
}else{
selectVal=el.text;
}
if(tagIndex==0){
var oldIndex=$('hidden_recom').value;
if(oldIndex==index){
if(!isFromPhotoEdit&&recomTagCount>=3){
alert("标签数不能超过3个！");
return;
}
else{
var sHead=aFirstTags[tmpIndex]+'-';
if(isTheSameTag(inputId,sHead,selectVal)){
el.onclick=null;
el.style.cursor="default";
el.style.color="#666";
return;
}
}
}
var sOldHead;
if(oldIndex>=aFirstCityTags.length)
sOldHead=aFirstOtherTags[oldIndex-aFirstCityTags.length]+'-';
else
sOldHead=aFirstCityTags[oldIndex]+'-';
var sNewHead=aFirstTags[tmpIndex]+'-';
recomTagCount=deal2StepClick(inputId,'hidden_recom',recomTagCount,index,sOldHead,sNewHead,el);
}
else if(tagIndex==1){
var oldIndex=$('hidden_act').value;
if(oldIndex==index){
if(!isFromPhotoEdit&&actTagCount>=3){
alert("标签数不能超过3个！");
return;
}
else{
var sHead=aFirstActiveTags[index]+'-';
if(isTheSameTag(inputId,sHead,selectVal)){
el.onclick=null;
el.style.cursor="default";
el.style.color="#666";
return;
}
}
}
var sOldHead=aFirstActiveTags[oldIndex]+'-';
var sNewHead=aFirstActiveTags[index]+'-';
actTagCount=deal2StepClick(inputId,'hidden_act',actTagCount,index,sOldHead,sNewHead,el);
}
}
function goBack(inputId,index,tagIndex){
var sHead;
if(tagIndex==0){
var aFirstTags=aFirstCityTags;
if(index>=aFirstCityTags.length){
aFirstTags=aFirstOtherTags;
index=index-aFirstCityTags.length;
}
$('tagTabShowTags_'+inputId).innerHTML=get1StepPPRecomTagsHTML(inputId);
recomTagCount=0;
sHead=aFirstTags[index]+'-';
}
else if(tagIndex==1){
$('tagTabShowTags_'+inputId).innerHTML=get1StepPPActiveTagsHTML(inputId);
actTagCount=0;
sHead=aFirstActiveTags[index]+'-';
}
var str=$(inputId).value;
if(str){
$(inputId).value=removePart(str,sHead);
}
if($(inputId).value=="")
enablePpAddButt(false);
}
function goOk(inputId,index,tagIndex){
var selfTag=$('selfDefinedTag').value;
selfTag=selfTag.replace(/，/gi,"").replace(/,/g,"").replace(/ /g,"").replace(/ /g,"").replace(/</g,"").replace(/>/g,"").replace(/"/g,"").replace(/“/g,"").replace(/'/g,"");
if(tagIndex==0){
if(selfTag!=''){
var aFirstTags=aFirstCityTags;
var tmpIndex=index;
if(index>=aFirstCityTags.length){
aFirstTags=aFirstOtherTags;
tmpIndex=index-aFirstCityTags.length;
}
var oldIndex=$('hidden_recom').value;
var sOldHead;
if(oldIndex>=aFirstCityTags.length)
sOldHead=aFirstOtherTags[oldIndex-aFirstCityTags.length]+'-';
else
sOldHead=aFirstCityTags[oldIndex]+'-';
var sNewHead=aFirstTags[tmpIndex]+'-';
recomTagCount=deal2StepOk(inputId,'hidden_recom',recomTagCount,index,sOldHead,sNewHead,selfTag);
enablePpAddButt(true);
}
else if(recomTagCount==0){
return;
}
}
else if(tagIndex==1){
if(selfTag!=''){
var oldIndex=$('hidden_act').value;
var sOldHead=aFirstActiveTags[oldIndex]+'-';
var sNewHead=aFirstActiveTags[index]+'-';
actTagCount=deal2StepOk(inputId,'hidden_act',actTagCount,index,sOldHead,sNewHead,selfTag);
enablePpAddButt(true);
}
else if(actTagCount==0){
return;
}
}
}
function deal2StepOk(inputId,hiddenId,count,index,sOldHead,sNewHead,selfTag){
var isFromPhotoEdit=false;
if(inputId=="editphotoPPTag")
isFromPhotoEdit=true;
var oDocOb=$(inputId);
var oldIndex=$(hiddenId).value;
if(oldIndex==-1||oldIndex==index){
if(!isFromPhotoEdit&&count==3){
alert("由于您已经选择了3个二级标签，不能再加入您输入的标签！\n\n请先返回，重新选择。");
return;
}
if(oldIndex==index&&isTheSameTag(inputId,sNewHead,selfTag)){
hideUserAllTags(inputId,'ppTag');
return count;
}
$(hiddenId).value=index;
if(oDocOb.value.indexOf('-',1)==-1){
oDocOb.value=sNewHead+selfTag;
}
else{
oDocOb.value=oDocOb.value+','+sNewHead+selfTag;
}
count++;
hideUserAllTags(inputId,'ppTag');
}
else{
oDocOb.value=removePart(oDocOb.value,sOldHead);
if(oDocOb.value==''){
oDocOb.value=sNewHead+selfTag;
}
else{
oDocOb.value=oDocOb.value+','+sNewHead+selfTag;
}
$(hiddenId).value=index;
count=1;
hideUserAllTags(inputId,'ppTag');
}
return count;
}
function get1StepPPActiveTagsHTML(inputId){
var a=[];
var comCss="float:right;color:#aaa;";
if(inputId!="editphotoPPTag")
a.push("<div style='"+comCss+"'><a href='#' onclick='hideUserAllTags(\""+inputId+"\",\""+'ppTag'+"\");return false;'><img src='"+Const.STDomain+"/style/common/icn_closetag.gif' style='border:none;' /></a></div>");
a.push("<div style='margin-left:4px;color:#aaa;'>第一步，请选择一个一级标签</div>");
a.push("<div style='clear:both;'></div>");
a.push("<div style='padding:6px; margin-top:6px; border-top:1px solid #aaa;'>");
var i=0;
var idName;
aFirstActiveTags.each(function(e){
idName='act_'+i;
a.push("<div id="+idName+" style='margin-bottom:4px;'><a href='#' style='color:#333333;' onclick='set1StepPPElementValue(\""+inputId+"\", 1, this); return false;'>"+e+"</a></div>");
i++;
});
a.push("</div>");
return a.join("");
}
function get2StepPPActiveTagsHTML(inputId,index){
var a=[];
var comCss="float:right;color:#aaa;";
if(inputId!="editphotoPPTag")
a.push("<div style='"+comCss+"'><a href='#' onclick='hideUserAllTags(\""+inputId+"\",\""+'ppTag'+"\");return false;'><img src='"+Const.STDomain+"/style/common/icn_closetag.gif' style='border:none;' /></a></div>");
a.push("<div style='margin-left:4px;color:#aaa;'>第二步，请选择1到3个二级标签</div>");
a.push("<div style='clear:both;'></div>");
a.push("<div style='padding:6px 0px 0px 6px; margin-top:6px; border-top:1px solid #aaa;'>");
a.push("<div style='font-weight:bold;color:#333;'>"+aFirstActiveTags[index]+"</div>");
a.push("<div style='padding:0px 6px 6px 6px; margin:6px 0px;border-top:1px solid #aaa;'>");
var aTag1=aSecondActTags1[index];
aTag1.each(function(e){
idName="act_"+i;
a.push("<div id="+idName+" style='display:inline;margin-right:6px;line-height:22px;'><a href='#' style='color:#333333;' onclick='set2StepPPElementValue(\""+inputId+"\", \""+index+"\", 1, this); return false;'>"+e+"</a></div>");
i++;
});
a.push("<div class='g_p_none'><label class='c09'>自定义：</label><div class='g_p_inline'><input class='bd01 g_c_input' id='selfDefinedTag' name='selfDefinedTag' size=8  onkeyup='checkUserInput();' />&nbsp;&nbsp;<input id='selfDefineBtn' type='button' disabled='true' style='border:1px solid #aaaaaa;background-color:#e5e5e5;color:#777;' class='btncm btncc' value='确定' onclick='goOk(\""+inputId+"\", \""+index+"\", 1);' /></div>");
a.push("</div>");
a.push("</div>");
a.push("<div style='padding:6px 0px; border-top:#aaa 1px solid;'><center><input type='button' style='border:1px solid #aaaaaa;background-color:#e5e5e5;color:#777;' value='返 回' onclick='goBack(\""+inputId+"\",\""+index+"\", 1);' /></center></div>");
return a.join("");
}
function isTheSameTag(inputId,sHead,selectVal){
var snewTag=sHead+selectVal;
var aTags=$(inputId).value.split(',');
var ret=false;
for(var i=0;i<aTags.length;i++){
if(aTags[i]==snewTag){
ret=true;
break;
}
}
return ret;
}
function deal2StepClick(inputId,hiddenId,count,index,sOldHead,sNewHead,el){
var oDocOb=$(inputId);
var selectVal;
if(isIE){
selectVal=el.innerText;
}else{
selectVal=el.text;
}
var oldIndex=$(hiddenId).value;
if(oldIndex==-1||oldIndex==index){
$(hiddenId).value=index;
count++;
}
else{
$(hiddenId).value=index;
oDocOb.value=removePart(oDocOb.value,sOldHead);
count=1;
}
if(oDocOb.value==''){
oDocOb.value=sNewHead+selectVal;
}
else{
oDocOb.value=oDocOb.value+','+sNewHead+selectVal;
}
el.onclick=null;
el.style.cursor="default";
el.style.color="#666";
enablePpAddButt(true);
return count;
}
function enablePpAddButt(bEnable){
try{
if(bEnable)
enable("addTagButt_"+global_pp_tag_edit.id);
else
disable("addTagButt_"+global_pp_tag_edit.id);
}catch(ex){
}
}
function removePart(strInput,sHead){
var aTags=strInput.split(',');
var a=[];
aTags.each(function(e){
if(e.indexOf(sHead)==-1){
a.push(e);
}
});
return a.join(',');
}
function getTagTabHTML(inputId){
var str="";
var comCss="display:inline;margin:0px;padding:2px 5px 0px 5px;border-top:#aaa 1px solid;border-right:#aaa 1px solid;";
var comCss2="display:inline;margin:0px;padding:2px 5px 0px 5px;position:relative;border:1px solid #aaa;border-top:none;border-bottom:none;top:2px!important;top:1px;_top:0px;";
str+="<div style='margin-top:3px;padding:0px;overflow:visible;z-index:20;'>";
if(inputId=="albumTag"||inputId=="editphotoTag"){
str+=" <div id='tagTab1_"+inputId+"' style='"+comCss2+"margin-left:10px;'><span style='color:#aaaaaa;cursor:pointer;font-size:14px;' onclick='return tagTabclick(1,\""+inputId+"\",0);'>已有标签</span></div>";
str+=" <div id='tagTab2_"+inputId+"' style='"+comCss2+"margin-left:-5px!important;margin-left:-1px;'><span style='color:#aaaaaa;cursor:pointer;font-size:14px;' onclick='return tagTabclick(2,\""+inputId+"\",0);'>推荐标签</span></div>";
str+=" <div id='tagTabShowTags_"+inputId+"' style='padding:5px;background-color:#ffffff;border-top:1px solid #aaa; table-layout:auto; width:98%;'></div>";
}
else{
str+=" <div id='tagTab1_"+inputId+"'  style='"+comCss+" border-left:#aaa 1px solid;'><span style='color:#aaaaaa;cursor:pointer;' onclick='return tagTabclick(1,\""+inputId+"\",0);'>已有标签</span></div>";
str+=" <div id='tagTab2_"+inputId+"' style='"+comCss+"margin-left:-4px!important;margin-left:0px;'><span style='color:#aaaaaa;cursor:pointer;' onclick='return tagTabclick(2,\""+inputId+"\",0);'>推荐标签</span></div>";
str+=" <div id='tagTabShowTags_"+inputId+"' style='padding:5px;background-color:#ffffff;border:#aaa 1px solid; table-layout:auto;'></div>";
}
str+="</div>";
return str;
}
function isNoUserTags(){
return(g_userTagList.length==0)
}
function getUserTagsHTML(inputId){
var a=[];
var comCss2="float:right;padding-bottom:3px; color:#aaa;";
if(inputId!="albumTag"&&inputId!="editphotoTag")
a.push("<div style='"+comCss2+"'><a href='#' onclick='hideUserAllTags(\""+inputId+"\");return false;'><img src='"+Const.STDomain+"/style/common/icn_closetag.gif' style='border:none;' /></a></div>");
if(isNoUserTags()){
a.push("<div style='text-align:center;color:#333333;margin-top:25px;'>您目前还没有标签，请输入标签或从推荐标签栏选择！</div>");
}
else{
if(inputId!="albumTag"&&inputId!="editphotoTag")
a.push('<div class="g_w_100 g_t_wrap" style="_height:1%;margin-top:25px;">');
else
a.push('<div class="g_w_100 g_t_wrap" style="_height:1%;margin-top:0px;">');
g_userTagList.each(function(e){
if(e.tagName!=""){
a.push("&nbsp;<a style='color:#333333;' href='#' style='margin-right:2px;' onclick='setElementValue(\""+inputId+"\", this); return false;'>"+e.tagName+"</a>&nbsp;");
}
});
a.push('</div>');
}
a.push("<div style='margin-top:20px;text-align:right;color:#aaaaaa;'>多个标签请用逗号或者空格隔开</div>");
a.push("<div style='margin-top:6px;text-align:right;color:#aaaaaa;'>标签便于你管理博客内容</div>");
return a.join("");
}
function getRecomTagsHTML(inputId,index){
if(inputId=="editBlogTag")
return getBlogRecomTagsHTML(inputId,index);
if(inputId.indexOf("photo")!=-1||inputId.indexOf("album")!=-1)
return getPhotoRecomTagsHTML(inputId);
var a=[];
a.push("<div style='float:right;padding-bottom:5px; color:#aaa;'><a href='#' onclick='hideUserAllTags(\""+inputId+"\");return false;'><img src='"+Const.STDomain+"/style/common/icn_closetag.gif' style='border:none;' /></a></div>");
a.push("<div class='g_w_100 g_t_wrap' style='_height:1%;margin-top:25px;'>");
recomTagArr.each(function(e){
a.push("<a style='color:#333333;' href='#' style='padding:3px 0px;' onclick='setElementValue(\""+inputId+"\", this); return false;'>"+e+"</a>&nbsp;&nbsp;");
});
a.push("</div>");
a.push("<div style='margin-top:20px;text-align:right;color:#aaaaaa;'>多个标签请用逗号或者空格隔开</div>");
a.push("<div style='margin-top:6px;text-align:right;color:#aaaaaa;'>标签便于你管理博客内容</div>");
return a.join("");
}
function getPhotoRecomTagsHTML(inputId){
var showUserTagsDiv=$("showUserTagsDiv_"+inputId);
var width=showUserTagsDiv.style.width;
var iWidth=parseInt(width);
var a=[];
var count=0;
var i=0;
var col_num=7;
if(iWidth<=200){
col_num=5;
}
var tagCss;
if(inputId=="albumTag"||inputId=="editphotoTag")
tagCss="width:64px;padding:0px 4px 4px 4px;";
else
tagCss="width:36px;padding:0px 4px 4px 4px;";
if(inputId!="albumTag"&&inputId!="editphotoTag"){
a.push("<div style='float:right;padding-bottom:5px; color:#aaa;'><a href='#' onclick='hideUserAllTags(\""+inputId+"\");return false;'><img src='"+Const.STDomain+"/style/common/icn_closetag.gif' style='border:none;' /></a></div>");
a.push("<div style='padding-bottom:25px;'></div>");
}
a.push("<div><center><table style='text-align:left;table-layout:auto;'><tbody>");
for(;i<recomPhotoTags.length;i++){
if(count==0){
a.push("<tr>");
}
else if(count%col_num==0){
a.push("</tr><tr>");
}
a.push("<td style='"+tagCss+"'><a style='color:#333333;' href='#' onclick='setElementValue(\""+inputId+"\", this); return false;'>"+recomPhotoTags[i]+"</a></td>");
count++;
}
a.push("</tr></tbody></table></center></div>");
a.push("<div style='margin-top:20px;text-align:right;color:#aaaaaa;'>多个标签请用逗号或者空格隔开</div>");
a.push("<div style='margin-top:6px;text-align:right;color:#aaaaaa;'>标签便于你管理博客内容</div>");
return a.join("");
}
var TABS_LEN=11;
function getBlogRecomTagsHTML(inputId,curTabIndex){
var a=[];
a.push("<div style='float:right;padding-bottom:5px; color:#aaa;'><a href='#' id='close_btn' onclick='hideUserAllTags(\""+inputId+"\");return false;'><img src='"+Const.STDomain+"/style/common/icn_closetag.gif' style='border:none;' /></a></div>");
a.push("<div style='margin-left:8px;padding-bottom:3px;margin-top:25px;'>");
var comCss="display:inline;padding:0px 7px 0px 8px;border-right:1px solid #aaaaaa;text-align:center;";
var i=curTabIndex;
var count=0;
for(;i<=recomTagArrs.length;i++){
if(count==TABS_LEN)
break;
var tagId="tagTabRecom"+i;
if(i==recomTagArrs.length)
a.push("<div id='"+tagId+"' style='"+comCss+" border-right:0px;'><span style='color:#333333;cursor:pointer;' onclick='return recomTagTabClick(\""+i+"\",\""+inputId+"\",\""+curTabIndex+"\");'>"+recomTagTabNames[i-1]+"</span></div>");
else
a.push("<div id='"+tagId+"' style='"+comCss+"'><span style='color:#333333;cursor:pointer;' onclick='return recomTagTabClick(\""+i+"\",\""+inputId+"\",\""+curTabIndex+"\");'>"+recomTagTabNames[i-1]+"</span></div>");
count++;
}
a.push("</div>");
a.push("<div id='tagTabShowRecomTags' style='padding:10px 4px 5px 4px;background-color:#ffffff;'></div>");
return a.join("");
}
function recomTabDoPage(isPrev,curTabIndex,inputId){
var index=parseInt(curTabIndex);
if(isPrev==0)
index=parseInt(curTabIndex)-1;
else
index=parseInt(curTabIndex)+1;
$('tagTabShowTags_'+inputId).innerHTML=getRecomTagsHTML(inputId,index);
recomTagTabClick(index+"",inputId,index);
}
var g_showUserAllTagsDiv=[];
var listTagWin=null;
function showUserAllTags(tagInputEl){
tagInputEl.readOnly=false;
var inputId=tagInputEl.id;
var showTagId="showUserTagsDiv_"+inputId;
var showUserTagsDiv=$(showTagId);
if(!showUserTagsDiv&&inputId=="editBlogTag"){
var _oDiv=document.createElement("div");
_oDiv.innerHTML='<div class="g_c_noul" style="text-align:left;position:absolute;overflow:hidden;width:584px;word-break:break-all;display:none;z-index:1000000;" id="showUserTagsDiv_editBlogTag"></div>';
UD.body.appendChild(_oDiv);
showUserTagsDiv=$(showTagId);
showUserTagsDiv.innerHTML=getTagTabHTML(inputId);
var pos=Position.cumulativeOffset($(inputId));
var divStyle=showUserTagsDiv.style;
divStyle.display="block";
divStyle.left=pos[0]+"px";
divStyle.top=pos[1]+25+"px";
if(isNoUserTags()){
tagTabclick(2,inputId,0);
}else{
tagTabclick(1,inputId,0);
}
return false;
}
if(showUserTagsDiv.style.borderBottomStyle=="dotted")
return false;
for(var i=0;i<g_showUserAllTagsDiv.length;i++){
var eT=$(g_showUserAllTagsDiv[i]);
if(eT){
eT.innerHTML="";
eT.style.border="none";
}
}
g_showUserAllTagsDiv.push(showTagId);
showUserTagsDiv.innerHTML=getTagTabHTML(inputId);
showUserTagsDiv.style.display="block";
if(inputId=="list_tag"){
var pos=Position.cumulativeOffset($(inputId));
showUserTagsDiv.style.left=pos[0]+'px';
showUserTagsDiv.style.top=pos[1]+20+'px';
if(listTagWin==null){
listTagWin=new NetEase.PageLayer();
}
listTagWin.addLayer({layerID:'showUserTagsDiv_'+inputId,
oneLayer:true,
closeFunc:hideUserAllTags,
closeParam:inputId,
zIndex:1});
}
if(isNoUserTags()){
tagTabclick(2,inputId,0);
}else{
tagTabclick(1,inputId,0);
}
return false;
}
var g_showPPTagsDiv=[];
function showPPTags(tagInputEl){
tagInputEl.readOnly=true;
var inputId=tagInputEl.id;
var showTagId="showUserTagsDiv_"+inputId;
var showUserTagsDiv=$(showTagId);
if(showUserTagsDiv.style.display!="none"&&showUserTagsDiv.innerHTML!="")
return false;
for(var i=0;i<g_showPPTagsDiv.length;i++){
var eT=$(g_showPPTagsDiv[i]);
if(eT){
eT.innerHTML="";
eT.style.border="none";
}
}
g_showPPTagsDiv.push(showTagId);
showUserTagsDiv.innerHTML=getPPTagTabHTML(inputId);
showUserTagsDiv.style.display="block";
tagTabclick(1,inputId,1);
return false;
}
function hideUserAllTags(inputId){
var showUserTagsDiv=$("showUserTagsDiv_"+inputId);
if(showUserTagsDiv)
showUserTagsDiv.style.display="none";
return false;
}
function tagTabclick(type,inputId,index){
var tab1Style=$('tagTab1_'+inputId).style;
var tab2Style=$('tagTab2_'+inputId).style;
var tab1ChildStyle=$('tagTab1_'+inputId).firstChild.style;
var tab2ChildStyle=$('tagTab2_'+inputId).firstChild.style;
if(type==1&&tab1ChildStyle.color!='#333333'){
$('tagTabShowTags_'+inputId).style.backgroundColor="#ffffff";
$('tagTabShowTags_'+inputId).innerHTML=getTab1HTML(inputId,index);
tab1Style.backgroundColor="#ffffff";
tab1Style.borderBottom="#ffffff 1px solid";
tab1ChildStyle.color="#333333";
tab2Style.backgroundColor="#ffffff";
tab2Style.borderBottom="#aaa 1px none";
tab2ChildStyle.color="#aaaaaa";
if(inputId!="albumTag"&&inputId!="editphotoTag"&&inputId!="editphotoPPTag"){
$('tagTabShowTags_'+inputId).style.borderLeft="#aaa 1px solid";
}
tab1ChildStyle.cursor='default';
tab2ChildStyle.cursor='pointer';
}
else if(type==2&&tab2ChildStyle.color!='#333333'){
$('tagTabShowTags_'+inputId).innerHTML=getTab2HTML(inputId,index);
tab2ChildStyle.color="#333333";
if(inputId=="editBlogTag"){
recomTagTabClick("1",inputId,1);
}
tab2Style.backgroundColor="#ffffff";
tab2Style.borderBottom="#ffffff 1px solid";
if(inputId!="albumTag"&&inputId!="editphotoTag");
else
tab1Style.backgroundColor="#ffffff";
tab1Style.borderBottom="#aaa 1px none";
tab1ChildStyle.color="#aaaaaa";
tab1ChildStyle.cursor='pointer';
tab2ChildStyle.cursor='default';
}
return false;
}
function getTab1HTML(inputId,index){
if(index==0){
return getUserTagsHTML(inputId);
}
else if(index==1){
return get1StepPPRecomTagsHTML(inputId);
}
}
function getTab2HTML(inputId,index){
if(index==0){
return getRecomTagsHTML(inputId,1);
}
else if(index==1){
return get1StepPPActiveTagsHTML(inputId);
}
}
function recomTagTabClick(type,inputId,curTabIndex){
$('tagTabShowRecomTags').innerHTML=getSpecificRecomTagsHtml(type,0,1,inputId);
var count=0;
var index=parseInt(curTabIndex);
var i;
for(;count<TABS_LEN;count++){
i=index+count;
$('tagTabRecom'+i).style.fontWeight="normal";
$('tagTabRecom'+i).firstChild.style.color="#777777";
}
$('tagTabRecom'+type).style.fontWeight="bold";
$('tagTabRecom'+type).firstChild.style.color="#333333";
return false;
}
var LINE_NUM=8;
var ELE_NUM_PER_LINE=7;
var PAGE_NUM=LINE_NUM*ELE_NUM_PER_LINE;
function getSpecificRecomTagsHtml(type,startIndex,iPage,inputId){
var showUserTagsDiv=$("showUserTagsDiv_"+inputId);
var width=showUserTagsDiv.style.width;
var iWidth=parseInt(width);
var mlOfPage=iWidth-122;
mlOfPage+="px";
var recomTagArr=getRecomTagArrByType(type+"");
var a=[];
var count=0;
var tagCss="width:65px;padding:0px 8px 8px 8px;";
a.push("<table style='table-layout:auto;'><tbody>");
for(;startIndex<PAGE_NUM*iPage;startIndex++){
if(count==0){
a.push("<tr>");
}
else if(count%ELE_NUM_PER_LINE==0){
a.push("</tr><tr>");
}
if(startIndex<recomTagArr.length){
if(isHotTag(recomTagArr[startIndex]))
a.push("<td style='"+tagCss+"'><a style='color:#ff7500;' href='#' onclick='setElementValue(\""+inputId+"\", this); return false;'>"+recomTagArr[startIndex]+"</a></td>");
else
a.push("<td style='"+tagCss+"'><a style='color:#333333;' href='#' onclick='setElementValue(\""+inputId+"\", this); return false;'>"+recomTagArr[startIndex]+"</a></td>");
}
else
a.push("<td style='"+tagCss+"'>&nbsp;&nbsp;</td>");
if(count==(PAGE_NUM-1)){
a.push("</tr>");
break;
}
count++;
}
a.push("</tbody></table>");
var comCss="margin-left:"+mlOfPage+";padding-top:6px;color:#aaaaaa;";
if(recomTagArr.length<=PAGE_NUM){
a.push("<div style='"+comCss+"'>上页&nbsp;&nbsp;<span style='font-weight:bold;'>1</span>/1&nbsp;&nbsp;下页</div>");
}
else{
var totalPage=Math.floor(recomTagArr.length/PAGE_NUM)+1;
var pageContent="<span style='font-weight:bold;'>"+iPage+"</span>/"+totalPage;
if(iPage==1)
a.push("<div style='"+comCss+"'>上页&nbsp;&nbsp;"+pageContent+"&nbsp;&nbsp;<a style='color:#333333;' id='aPrevPage' href='#' onclick='recomTagDoPage(1,\""+type+"\",\""+1+"\",\""+inputId+"\"); return false;'>下页</a></div>");
else if(iPage==totalPage)
a.push("<div style='"+comCss+"'><a style='color:#333333;' id='aPrevPage' href='#' onclick='recomTagDoPage(0,\""+type+"\",\""+iPage+"\",\""+inputId+"\"); return false;'>上页</a>&nbsp;&nbsp;"+pageContent+"&nbsp;&nbsp;下页</div>");
else
a.push("<div style='"+comCss+"'><a style='color:#333333;' id='aPrevPage' href='#' onclick='recomTagDoPage(0,\""+type+"\",\""+iPage+"\",\""+inputId+"\"); return false;'>上页</a>&nbsp;&nbsp;"+pageContent+"&nbsp;&nbsp;<a style='color:#333333;' id='aPrevPage' href='#' onclick='recomTagDoPage(1,\""+type+"\",\""+iPage+"\",\""+inputId+"\"); return false;'>下页</a></div>");
}
a.push("<div style='margin-top:20px;text-align:right;color:#aaaaaa;'>多个标签请用逗号或者空格隔开</div>");
a.push("<div style='margin-top:6px;text-align:right;color:#aaaaaa;'>标签便于你管理博客内容</div>");
return a.join("");
}
function isHotTag(sTag){
var bHot=false;
var e=hotTags.length;
for(var i=0;i<e;i++){
if(sTag==hotTags[i]){
bHot=true;
break;
}
}
return bHot;
}
function recomTagDoPage(isPrev,type,curPage,inputId){
var j,iPage;
if(isPrev==0){
j=(curPage-2)*PAGE_NUM;
iPage=parseInt(curPage)-1;
}
else{
j=curPage*PAGE_NUM;
iPage=parseInt(curPage)+1;
}
$('tagTabShowRecomTags').innerHTML=getSpecificRecomTagsHtml(type,j,iPage,inputId);
}
function getRecomTagArrByType(type){
var index=type-1;
if(index<recomTagArrs.length)
return recomTagArrs[index];
else
return recomTagArrs[0];
}
var beforeAddTag;
var global_tag_edit;
var curAblumTagDiv;
var checkUploadPhotoTagInput;
function setElementValue(element,el){
var value;
if(isIE)
value=el.innerText;
else
value=el.text;
if(value.indexOf(' ',1)>0)
value="\""+value+"\"";
var oDocOb=$(element);
var tmp="";
if(oDocOb.value=="")
tmp=value;
else
tmp=oDocOb.value+","+value;
if(oDocOb.maxLength==-1)
oDocOb.value=tmp;
else{
if(tmp.length>oDocOb.maxLength){
alert("标签已超过了最大长度！");
return;
}
else
oDocOb.value=tmp;
}
if(beforeAddTag)
beforeAddTag();
if(global_tag_edit)
global_tag_edit.checkAllInput();
if(curAblumTagDiv)
curAblumTagDiv.checkAllInput();
if(checkUploadPhotoTagInput)
checkUploadPhotoTagInput();
el.onclick=null;
el.style.cursor="default";
el.style.color="#aaa";
}
function getStrLength(str){
if(str==null)
return 0;
var i=0;
var j=0;
for(i=0;i<str.length;i++){
if(str.charCodeAt(i)>127||str.charCodeAt(i)==94)
j=j+2;
else
j=j+1
}
return j;
}
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.gBlogData={
aClassList:null,
aArchiveList:null,
aBlogTopIds:null,
aClassOrderIds:null,
viewType:2
};
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.gEditBlogLeft=null;
NEBlog.EditBlogLeft=Class.create();
NEBlog.EditBlogLeft.recentComNumber=5;
NEBlog.EditBlogLeft.archiveNumber=8;
NEBlog.EditBlogLeft.aInfoId=["_$_blog_class","_$_blog_arch","_$_blog_comm"];
NEBlog.EditBlogLeft.aInfoArrowId=["divArrowCls","divArrowArch","divArrowCom"];
NEBlog.EditBlogLeft.sArchTitleId="divYearArch";
NEBlog.EditBlogLeft.sArchContentId="uYearArch";
NEBlog.EditBlogLeft.prototype={
initialize:function(sObjectName,sParentName){
this._oOptions=Object.extend({
sTestOn:'off',
sStyle:null,
sSel:'-1',
sSelId:'-1'
},arguments[2]||{});
this._sObjectName=sObjectName;
this._sParentName=sParentName;
this._bShowHiding=false;
this._bHasClass=false;
this._bHasArchive=false;
this._oDlgAddClass=null;
this._oWindowManager=null;
this._oTester4EBL=null;
this._init();
return this;
},
_init:function(){
if(this._oOptions.sTestOn=='on'&&this._oTester4EBL==null)
this._oTester4EBL=new NECtrl.SeleniumTester();
BlogBean.getBlogClasses(UD.hostId,{
callback:function(oClasses){
var oNewClasses=this.orderClass(oClasses);
this._showBlogClasses(oNewClasses);
this._bHasClass=true;
}.bind(this)
});
this.showHideInfo(1);
},
reset:function(){
BlogBean.getBlogClasses(UD.hostId,{
callback:function(oClasses){
var oNewClasses=this.orderClass(oClasses);
this._showBlogClasses(oNewClasses);
this._bHasClass=true;
}.bind(this)
});
if(this._bHasArchive==true){
BlogBean.getRecentArchives(UD.hostId,this._showArchives.bind(this));
}
},
orderClass:function(oClasses){
var oNewClasses=null;
if(oClasses!=null&&oClasses.length>0){
var _aClassOrderIds=NEBlog.gBlogData.aClassOrderIds;
if(_aClassOrderIds!=null&&_aClassOrderIds.length>0){
oNewClasses=[];
for(var i=0;i<_aClassOrderIds.length;i++){
var _cid=_aClassOrderIds[i];
for(var j=0;j<oClasses.length;j++){
var _cls=oClasses[j];
if(_cls.id==_cid){
oNewClasses.push(_cls);
oClasses.splice(j,1);
break;
}
}
}
if(oClasses.length>0){
for(var i=0;i<oClasses.length;i++){
oNewClasses.push(oClasses[i]);
}
}
}else{
oNewClasses=oClasses;
}
}
return oNewClasses;
},
showHideInfo:function(iInfoId){
if(this._bShowHiding==true)
return;
var _divCont=$(NEBlog.EditBlogLeft.aInfoId[iInfoId]);
if(_divCont.style.display=="none"){
if(iInfoId==1&&!this._bHasArchive){
this._bHasArchive=true;
if(NEBlog.gBlogData.aArchiveList==null)
BlogBean.getRecentArchives(UD.hostId,this._showArchives.bind(this));
else
this._showArchives(NEBlog.gBlogData.aArchiveList);
}else if(iInfoId==0&&!this._bHasClass){
this._bHasClass=true;
if(NEBlog.gBlogData.aClassList==null)
BlogBean.getBlogClasses(UD.hostId,this._showBlogClasses.bind(this));
else
this._showBlogClasses(NEBlog.gBlogData.aClassList);
}
this._bShowHiding=true;
Effect.BlindDown(_divCont,{duration:0.1,userCallBack:function(){this._bShowHiding=false;}.bind(this)});
}
else{
this._bShowHiding=true;
Effect.BlindUp(_divCont,{duration:0.1,userCallBack:function(){this._bShowHiding=false;}.bind(this)});
}
},
showHideArch:function(sIdSuffix){
if(this._bShowHiding==true)
return;
var _divArchTitle=$(NEBlog.EditBlogLeft.sArchTitleId+sIdSuffix);
var _divArchContent=$(NEBlog.EditBlogLeft.sArchContentId+sIdSuffix);
if(_divArchContent.style.display=="none"){
_divArchTitle.className=_divArchTitle.className.replace("i29","i46");
Effect.BlindDown(_divArchContent,{duration:0.1,userCallBack:function(){this._bShowHiding=false;}});
}else{
_divArchTitle.className=_divArchTitle.className.replace("i46","i29");
Effect.BlindUp(_divArchContent,{duration:0.1,userCallBack:function(){this._bShowHiding=false;}});
}
},
_showBlogClasses:function(classes){
NEBlog.gBlogData.aClassList=classes;
var data={classes:classes,pageName:UD.pageName,hostPath:UD.hostPath,
objectName:this._sObjectName,parentName:this._sParentName,selId:this._oOptions.sSelId};
$("_$_blog_class").innerHTML=jst_blog_edit_class.processUseCache(data);
if(this._oTester4EBL){
if(classes==null||classes.length==0){
this._sTest4EBL("LClass","null");
}else{
var _aClsId=classes.pluck("id");
this._sTest4EBL("LClass",_aClsId);
}
}
},
showClsAddDiv:function(op,refObj,offsetX,offsetY,oldClsId){
if(this._oDlgAddClass==null){
this._oDlgAddClass=new NEBlog.DlgAddClass(this._sObjectName+'._oDlgAddClass',{
fnPostClassAddSucc:this.refreshBlogClass.bind(this)
});
}
this._oDlgAddClass.showClsAddDiv(op,refObj,false,offsetX,offsetY,oldClsId);
},
_showArchives:function(archives){
if(null==archives)
return;
if(archives!=null)
NEBlog.gBlogData.aArchiveList=archives;
var yearArchs=[];
var yearIndex=-1;
var archiveCount=archives.length;
for(var i=0;i<archiveCount;i++){
var date=new Date(archives[i].archiveDate);
var year=date.getFullYear();
var month=parseInt(date.getMonth())+1;
var count=0;
count=archives[i].blogCount;
if(count==0){
continue;
}
if(yearIndex>=0&&yearArchs[yearIndex].year==year){
var monthArch=new MonthArchive(year,month,count);
yearArchs[yearIndex].archives.push(monthArch);
}else{
var yearArch=new YearArchive(year);
var monthArch=new MonthArchive(year,month,count);
yearArch.archives.push(monthArch);
yearArchs.push(yearArch);
yearIndex++;
}
}
var data={yearArchs:yearArchs,pageName:UD.pageName,hostPath:UD.hostPath,
objectName:this._sObjectName,parentName:this._sParentName,sel:this._oOptions.sSel,selId:this._oOptions.sSelId};
$(NEBlog.EditBlogLeft.aInfoId[1]).innerHTML=jst_blog_edit_arch.processUseCache(data);
if(this._oTester4EBL){
if(archives==null||archives.length==0){
this._sTest4EBL("LArch","null");
}else{
var _aArchId=archives.pluck("id");
this._sTest4EBL("LArch",_aArchId);
}
}
},
refreshBlogClass:function(){
this._showBlogClasses(NEBlog.gBlogData.aClassList);
},
refreshBlogArchive:function(){
this._showArchives(NEBlog.gBlogData.aArchiveList);
},
_sTest4EBL:function(sKey,vValues,sRelValue){
if(!this._oTester4EBL)
return;
switch(sKey){
case"LClass":
this._oTester4EBL.setArray("LClass",vValues);
break;
case"LArch":
this._oTester4EBL.setArray("LArch",vValues);
break;
case"LRcntCom":
this._oTester4EBL.setArray("LRcntCom",vValues);
break;
}
}
}
function YearArchive(year){
this.year=year;
this.archives=[];
}
function MonthArchive(year,month,count){
this.year=year;
this.month=month;
this.count=count;
this.toStandardStr=function(){
return this.year+'-'+this.month+'-'+'01';
}
this.toString=function(){
return this.year+'年'+this.month+'月';
}
}
if(NEBlog==undefined){
var NEBlog={};
}
function addPhoto(){};
NEBlog.gEditBlog=null;
function gLoadEditBlog(sBlogId,sStyle,iCommentRange,iCommentCount,iTrackbackCount,bFromRef,bNewBlog,bPublished,iUserId,sTagOld,sClsId,
bAbstractSysGen,sPhotoIds,iAllowView,sBlogTitle,sTestOn){
NEBlog.gEditBlog=new NEBlog.EditBlog('NEBlog.gEditBlog',{
sBlogId:sBlogId,sStyle:sStyle,iCommentRange:iCommentRange,iCommentCount:iCommentCount,iTrackbackCount:iTrackbackCount,
bFromRef:bFromRef,bNewBlog:bNewBlog,bPublished:bPublished,iUserId:iUserId,sTagOld:processTagUtilForCb(sTagOld.unescape_freemark()),sClsId:sClsId,
bAbstractSysGen:bAbstractSysGen,sPhotoIds:sPhotoIds,iAllowView:iAllowView,sBlogTitle:sBlogTitle,sTestOn:sTestOn});
addPhoto=NEBlog.gEditBlog.addPhoto.bind(NEBlog.gEditBlog);
}
NEBlog.EditBlog=Class.create();
NEBlog.EditBlog.sComDivHookId="_$_blog_edit_com";
NEBlog.EditBlog.sTbDivHookId="_$_blog_edit_trackback";
NEBlog.EditBlog.sComDivId="divComs";
NEBlog.EditBlog.sTbDivId="divTbs";
NEBlog.EditBlog.iAutoSaveInterval=1000*60*1;
NEBlog.oHtmlEditor=null;
NEBlog.bFlashLoadSucc=false;
NEBlog.fnOnFlashLoad=function(succ){
if(succ==true)
NEBlog.bFlashLoadSucc=true;
};
NEBlog.EditBlog.prototype={
initialize:function(sObjectName){
this._oOptions=Object.extend({
sBlogId:0,
sStyle:null,
iCommentRange:10,
iCommentCount:0,
iTrackbackCount:0,
bFromRef:false,
bNewBlog:true,
bPublished:true,
iUserId:0,
iContentMaxLen:65500,
sTagOld:'',
sClsId:null,
bAbstractSysGen:true,
sPhotoIds:'',
sBlogContent:'',
iAllowView:-100,
sBlogTitle:'',
sTestOn:'off'
},arguments[1]||{});
this._sObjectName=sObjectName;
this._oTester4EB=null;
this.oHtmlEditor=null;
this._bAutoSaved=false;
this._sAutoSaveBlogId='-1';
this._aEmbedPhotos=[];
this._oPhotoWin=null;
this._DlgAddClass=null;
this._bFlashLoaded=false;
this._bFlashLoadSucc=false;
this._init();
return this;
},
_init:function(){
NEBlog.fnOnFlashLoad=this._onFlashLoad.bind(this);
if(NEBlog.bFlashLoadSucc==true)
NEBlog.fnOnFlashLoad(true);
else
window.setTimeout(NEBlog.fnOnFlashLoad,5000,false);
if(this._oOptions.sTestOn=='on')
this._oTester4EB=new NECtrl.SeleniumTester();
var focusArray=['abstract','trackbackurl'];
attachFocusEvent(focusArray,"input_textbox_bright");
},
setEditorPref:function(value){
NEUtil.FlashCookie.initCookie('BlogDraft');
NEUtil.FlashCookie.setValue('Editor_Pref_'+UD.hostName,value);
},
getPortraitPref:function(){
if(UD.hostName==UD.visitorName){
NEUtil.FlashCookie.initCookie('BlogDraft');
return NEUtil.FlashCookie.getValue('Portrait_Pref_'+UD.hostName);
}
return null;
},
setPortraitPref:function(value){
if(UD.hostName==UD.visitorName){
NEUtil.FlashCookie.initCookie('BlogDraft');
NEUtil.FlashCookie.setValue('Portrait_Pref_'+UD.hostName,value);
}
},
_onFlashLoad:function(succ){
if(this._bFlashLoaded)
return;
this._bFlashLoaded=true;
if(succ==true){
this._bFlashLoadSucc=true;
NEUtil.FlashCookie.initCookie('BlogDraft');
if(this._oOptions.sBlogId==''&&NEBlog.gBlogContent==''){
var origContent=NEUtil.FlashCookie.getValue('Blog_Content_'+UD.hostName);
if(origContent!=null&&origContent!=''&&origContent!='null'){
var origTitle=NEUtil.FlashCookie.getValue('Blog_Title_'+UD.hostName);
if(origTitle!=null&&origTitle!=''){
if(origTitle=='null')
origTitle='';
this._oOptions.sBlogTitle='[自动保存草稿]'+origTitle;
}
NEBlog.gBlogContent=origContent;
var origPhotoIds=NEUtil.FlashCookie.getValue('Blog_PhotoIds_'+UD.hostName);
if(origPhotoIds!=null&&origPhotoIds!=''&&origPhotoIds!='null'){
$("embedPhotoIds").value=origPhotoIds;
this._aEmbedPhotos=origPhotoIds.split(";");
}
}
}
var _bBigEditor=NEUtil.FlashCookie.getValue('Editor_Pref_'+UD.hostName);
if(!_bBigEditor)
_bBigEditor=false;
this.oHtmlEditor=new NECtrl.AdvancedEditor(this._oOptions.sBlogId,"edt",{sObjName:"NEBlog.gEditBlog.oHtmlEditor",iMaxLen:this._oOptions.iContentMaxLen,fnPreview:this.toPreview.bind(this),
fnHideDiv:hideUserAllTags,oHideDivParmas:"editBlogTag",sInitContent:NEBlog.gBlogContent,sTitle:this._oOptions.sBlogTitle.unescape_freemark(),bBig:_bBigEditor,fnSetPref:this.setEditorPref,fnGetPortraitPref:this.getPortraitPref,fnSetPortraitPref:this.setPortraitPref});
window.setInterval(this._autoSave.bind(this),NEBlog.EditBlog.iAutoSaveInterval);
}else{
this.oHtmlEditor=new NECtrl.AdvancedEditor(this._oOptions.sBlogId,"edt",{sObjName:"NEBlog.gEditBlog.oHtmlEditor",iMaxLen:this._oOptions.iContentMaxLen,fnPreview:this.toPreview.bind(this),
fnHideDiv:hideUserAllTags,oHideDivParmas:"editBlogTag",sInitContent:NEBlog.gBlogContent,sTitle:this._oOptions.sBlogTitle});
}
NEBlog.oHtmlEditor=this.oHtmlEditor;
if(window.attachEvent){
document.attachEvent("onclick",function(e){
var el=event.srcElement;
if(el.id=="editBlogTag"){
return;
}else{
var isClose=true;
var tmp=el;
while(tmp){
if(tmp.id=="showUserTagsDiv_editBlogTag"){
isClose=false;
break;
}
tmp=tmp.parentNode;
}
if(isClose)
hideUserAllTags("editBlogTag");
}
});
}
if(window.addEventListener){
document.addEventListener("click",function(e){
var el=e.target;
if(el.id=="editBlogTag"){
return;
}else{
var isClose=true;
var tmp=el;
while(tmp){
if(tmp.id=="showUserTagsDiv_editBlogTag"){
isClose=false;
break;
}
tmp=tmp.parentNode;
}
if(isClose)
hideUserAllTags("editBlogTag");
}
},true);
}
if(window.attachEvent){
var abs=$('abstract');
abs.attachEvent("onpropertychange",function(e){
textareaLimit(abs,800);
});
}
if(isIE){
window.onunload=function(){
var range=this.oHtmlEditor.designEditorDoc.body.createTextRange();
range.execCommand("Copy");
}.bind(this);
}
},
_autoSave:function(){
var content=this.oHtmlEditor.getPrevContent();
if(Trim(content)==""||content==NEBlog.gBlogContent){
return false;
}
var title=this.oHtmlEditor.getTitle();
if(title.indexOf('[自动保存草稿]')==0){
title=title.substr(8);
}
var photoIds='';
var embedPIds=$("embedPhotoIds").value;
if(this._oOptions.sPhotoIds!=''&&embedPIds!=''){
photoIds=this._oOptions.sPhotoIds+";"+embedPIds;
}else if(this._oOptions.sPhotoIds!=''){
photoIds=this._oOptions.sPhotoIds;
}else if(embedPIds!=''){
photoIds=embedPIds;
}
NEUtil.FlashCookie.setValue('Blog_Title_'+UD.hostName,title);
NEUtil.FlashCookie.setValue('Blog_Content_'+UD.hostName,content);
NEUtil.FlashCookie.setValue('Blog_PhotoIds_'+UD.hostName,photoIds);
},
toPreview:function(content){
$("previewsubtitle").style.display="block";
$("edt").style.display="none";
$("opt").style.display="none";
$("hint").style.display="none";
var _sTitle=this.oHtmlEditor.getTitle();
if(_sTitle==""){
var d=new Date();
_sTitle=d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日";
}
$("previewtitle").innerHTML=_sTitle;
var prePad=$("previewpad");
try{
prePad.innerHTML=content;
}catch(e){}
},
toEdit:function(){
$("previewsubtitle").style.display="none";
$("edt").style.display="";
$("opt").style.display="";
$("hint").style.display="";
},
changeClass:function(select){
if(select.selectedIndex==select.options.length-1)
$("clsName").value="";
else
$("clsName").value=select.options[select.selectedIndex].text;
if(select.options[select.selectedIndex].value==""){
if(this._DlgAddClass==null){
this._DlgAddClass=new NEBlog.DlgAddClass(this._sObjectName+'._DlgAddClass',{
fnPostClassAddSucc:this._postClassAddSucc});
}
this._DlgAddClass.showClsAddDiv("add","cls",true,0,20);
select.selectedIndex=0;
}
},
_postClassAddSucc:function(clsId,clsName){
if(NEBlog!=null&&NEBlog.gEditBlog!=null){
NEBlog.gEditBlog.addToClassList(clsId,clsName);
}
},
addToClassList:function(clsId,clsName){
var oSelect=$("cls");
if(oSelect!=null){
var oOption=document.createElement("OPTION");
oSelect.options.add(oOption,1);
oOption.text=clsName;
oOption.value=clsId;
oSelect.options[1].selected=true;
$("clsName").value=clsName;
}
},
onPublish:function(){
if(this.oHtmlEditor==null)
return false;
var pubbtn=$("pubbtns");
pubbtn.className="g_disable";
var draftbtn=$("draftbtns");
var draftOrigClass;
if(draftbtn!=null){
draftOrigClass=draftbtn.className;
draftbtn.className="g_disable";
}
if(this._checkField(this._oOptions.bAbstractSysGen)==false){
pubbtn.className="";
if(draftbtn!=null){
draftbtn.className=draftOrigClass;
}
return false;
}
if(this._processTag()==false){
pubbtn.className="";
if(draftbtn!=null){
draftbtn.className=draftOrigClass;
}
return false;
}
if(this._processTrackback()==false){
pubbtn.className="";
if(draftbtn!=null){
draftbtn.className=draftOrigClass;
}
return false;
}
var action;
if(this._oOptions.bNewBlog==1){
if(this._oOptions.sClsId==-1){
action=UD.hostPath+"/editBlog.do?p=1&n=1&c=0";
}else{
action=UD.hostPath+"/editBlog.do?p=1&n=1&c=1";
}
}else{
if(this._oOptions.sClsId==-1){
action=UD.hostPath+"/editBlog.do?p=1&n=0&c=0";
}else{
action=UD.hostPath+"/editBlog.do?p=1&n=0&c=1";
}
}
var sTitle=this.oHtmlEditor.getTitle();
if(sTitle=="")
this.oHtmlEditor.setTitle("");
action+="&autoid="+this._sAutoSaveBlogId;
document.forms['editorForm'].action=action;
document.forms['editorForm'].submit();
},
onSaveDraft:function(){
if(this.oHtmlEditor==null)
return false;
var draftbtn=$("draftbtns");
draftbtn.className="g_disable";
var pubbtn=$("pubbtns");
var pubOrigClass=pubbtn.className;
pubbtn.className="g_disable";
if(this._checkField(this._oOptions.bAbstractSysGen)==false){
draftbtn.className="";
pubbtn.className=pubOrigClass;
return false;
}
if(this._processTag()==false){
draftbtn.className="";
pubbtn.className=pubOrigClass;
return false;
}
if(this._processTrackback()==false){
draftbtn.className="";
pubbtn.className=pubOrigClass;
return false;
}
var action;
if(this._oOptions.bNewBlog==1){
if(this._oOptions.sClsId==-1){
action=UD.hostPath+"/editBlog.do?p=0&n=1&c=0";
}else{
action=UD.hostPath+"/editBlog.do?p=0&n=1&c=1";
}
}else{
if(this._oOptions.sClsId==-1){
action=UD.hostPath+"/editBlog.do?p=0&n=0&c=0";
}else{
action=UD.hostPath+"/editBlog.do?p=0&n=0&c=1";
}
}
var sTitle=this.oHtmlEditor.getTitle();
if(sTitle=="")
this.oHtmlEditor.setTitle("");
action+="&autoid="+this._sAutoSaveBlogId;
document.forms['editorForm'].action=action;
document.forms['editorForm'].submit();
},
onCancel:function(hostName){
document.forms['editorForm'].action="editBlogAll.do?host="+hostName;
document.forms['editorForm'].submit();
},
_checkField:function(abstractSysGen){
var content=this.oHtmlEditor.getContent();
if(isEmptyContent(content)){
alert("日志正文内容不能为空，请重新编辑发表！");
return false;
}
if(this.oHtmlEditor.IsExceedMaxLen()){
alert("日志内容超过最大字数"+this._oOptions.iContentMaxLen+"，请重新编辑后提交");
return false;
}
this._genAbstract(content,abstractSysGen);
var submitAbstract=$("absGen").value;
var stripedAbstract=stripData(submitAbstract,"");
if(stripedAbstract.isHarm){
$("absGen").value=stripedAbstract.content;
$("abstract").value=stripedAbstract.content;
alert("日志摘要包含有害代码，已经被过滤，请编辑后重新提交！");
return false;
}
},
_genAbstract:function(content,abstractSysGen){
var abs=$("abstract");
if(abs!=null){
var absvalue=Trim(abs.value);
if(abstractSysGen==1){
if(absvalue==""){
$("absGen").value="";
}else{
$("absGen").value=absvalue;
$("absSysGen").value=0;
}
}else if(abstractSysGen==0){
if(absvalue==""){
$("absGen").value="";
$("absSysGen").value=1;
}else{
$("absGen").value=absvalue;
}
}
}
},
_processTag:function(){
var tags=$("editBlogTag").value;
tags=processTagString(tags);
tags=processTagUtilForCb(tags);
var tagInfoTemp=new Object();
tagInfoTemp.numJoin=0;
tagInfoTemp.tags=tags;
procTagsUtil(tagInfoTemp);
$("processedTag").value=structQuotedTag(tagInfoTemp.tags.split(","));
var tagInfoTemp1=new Object();
tagInfoTemp1.addTags="";
tagInfoTemp1.delTags="";
getAddDelTags(tagInfoTemp1,this._oOptions.sTagOld,tagInfoTemp.tags);
return true;
},
_processTrackback:function(){
var tb=$("trackbackurl");
var newtb="";
if(tb!=null){
var tbv=Trim(tb.value);
if(tbv!=""){
var regexp=/[;；]/;
var tbs=tbv.split(regexp);
tbs=removeSameEl(tbs);
for(var i=0;i<tbs.length;i++){
newtb+=tbs[i];
if(i<tbs.length-1)
newtb+=";";
}
}
}
if(newtb!=""){
$("refurl").value=newtb;
}
return true;
},
switchMore:function(){
if($('openMore').value==0){
var Obj={success:false};
new Effect.BlindDown('moreset',{stateId:"moreset"+"_$$S$$",succObj:Obj,duration:0.1});
if(Obj.success){
$('openMore').value=1;
$('moreHead').className=$('moreHead').className.replace("i128","i127");
$('moreArrow').className=$('moreArrow').className.replace("n0","n1");
}
else
$('openMore').value=0;
}else{
var Obj={success:false};
new Effect.BlindUp('moreset',{stateId:"moreset"+"_$$S$$",succObj:Obj,duration:0.1});
if(Obj.success){
$('openMore').value=0;
$('moreHead').className=$('moreHead').className.replace("i127","i128");
$('moreArrow').className=$('moreArrow').className.replace("n1","n0");
}
else
$('openMore').value=1;
}
},
switchGlobDistr:function(){
if($('openGlobDistr').value==0){
var Obj={success:false};
new Effect.BlindDown('globDistr',{stateId:"globDistr"+"_$$S$$",succObj:Obj,duration:0.1});
if(Obj.success){
$('openGlobDistr').value=1;
$('globDistrHead').className=$('globDistrHead').className.replace("i128","i127");
$('globDistrArrow').className=$('globDistrArrow').className.replace("n0","n1");
}
else
$('openGlobDistr').value=0;
}else{
var Obj={success:false};
new Effect.BlindUp('globDistr',{stateId:"globDistr"+"_$$S$$",succObj:Obj,duration:0.1});
if(Obj.success){
$('openGlobDistr').value=0;
$('globDistrHead').className=$('globDistrHead').className.replace("i127","i128");
$('globDistrArrow').className=$('globDistrArrow').className.replace("n1","n0");
}
else
$('openGlobDistr').value=1;
}
},
addPhoto:function(photolist){
photolist.each(function(e){
var photoId=e.mediumUrl.substring(e.mediumUrl.lastIndexOf("/")+1,e.mediumUrl.lastIndexOf(".jpg"));
if(this._aEmbedPhotos.detect(function(e){return e==photoId;})==null){
this._aEmbedPhotos.push(photoId);
}
var sHTML='<a href="'+e.mediumUrl+'" target="_blank"><img src="'+e.mediumUrl+'" /></a>';
this.oHtmlEditor.insertHTML(sHTML);
}.bind(this));
$("embedPhotoIds").value=this._aEmbedPhotos.toArray().join(";");
},
addRemotePhoto:function(photolist){
if(photolist==null)
return false;
photolist.each(function(e){
var sHTML='<img src="'+e+'" />';
this.oHtmlEditor.insertHTML(sHTML);
}.bind(this));
},
_sTest4EB:function(sKey,vValues,sRelValue){
if(!this._oTester4EB)
return;
switch(sKey){
case"Com":
this._oTester4EB.setArray("Com",vValues);
break;
case"Tb":
this._oTester4EB.setArray("Tb",vValues);
break;
}
}
}
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.gEditBlogAll=null;
function gLoadEditBlogAll(sBlogListModuleId,sStyle,iTotalBlogCount,iBlogRange,iCommentRange,sBy,sById,iByCnt,sByName,
sCircleBaseUrl,sVisitorAvatar,iGlobalAllowComment,sTestOn){
NEBlog.gEditBlogAll=new NEBlog.EditBlogAll('NEBlog.gEditBlogAll',{
sStyle:sStyle,sTestOn:sTestOn,iTotalBlogCount:iTotalBlogCount,iBlogRange:iBlogRange,iCommentRange:iCommentRange,
sBy:sBy,sById:sById,iByCnt:iByCnt,sByName:sByName,sBlogListModuleId:sBlogListModuleId,sVisitorAvatar:sVisitorAvatar,
sCircleBaseUrl:sCircleBaseUrl,iGlobalAllowComment:iGlobalAllowComment});
}
NEBlog.EditBlogAll=Class.create();
NEBlog.EditBlogAll.sBlogDivId="_$_blog_edit_list";
NEBlog.EditBlogAll.sComDivId="_$_com_editall_";
NEBlog.EditBlogAll.sTbDivId="_$_tb_editall_";
NEBlog.EditBlogAll.prototype={
initialize:function(sObjectName){
this._oOptions=Object.extend({
sTestOn:'off',
sStyle:null,
iTotalBlogCount:0,
iFeelingsCount:0,
iGlobalAllowComment:-100,
iBlogRange:10,
iCommentRange:10,
sBy:-1,
sById:null,
iByCnt:0,
sByName:'',
sBlogListModuleId:'',
sVisitorAvatar:'',
sCircleBaseUrl:''
},arguments[1]||{});
this._sObjectName=sObjectName;
this.oEditBlogLeft=null;
this.oBlogList=null;
this.oBlogTop=null;
this._oTester4EBA=null;
this._oBlogPager=null;
this._aCommentPager=new Array(this._oOptions.iBlogRange);
this._aTrackbacks=new Array(this._oOptions.iTotalBlogCount);
this._jsWindowManager;
this.oBlogBatchEditDlg=null;
this.oClassEditDlg=null;
this.oClassList=null;
this.oBatchBlogPager=null;
this.gCheckList=null;
this._oDlgConfirmBlogBatch=null;
this._hasBatchChanged=false;
this._init();
return this;
},
_init:function(){
if(this._oOptions.sTestOn=='on'&&this._oTester4EBA==null)
this._oTester4EBA=new NECtrl.SeleniumTester();
this.oEditBlogLeft=new NEBlog.EditBlogLeft(this._sObjectName+".oEditBlogLeft",this._sObjectName,
{sTestOn:this._oOptions.sTestOn,sStyle:this._oOptions.sStyle,sSel:this._oOptions.sBy,sSelId:this._oOptions.sById});
NEBlog.gEditBlogLeft=this.oEditBlogLeft;
this.oBlogList=new NEBlog.BlogList(this._sObjectName+".oBlogList",{bPrev:false,
jstBlogList:jst_blog_edit_list,jstRelCircle:jst_blog_prev_related_circle,hookBlogList:"_$_blog_edit_list",
sBlogListModuleId:this._oOptions.sBlogListModuleId,sPagerId:"blogPageNav2",
sScrollPageId:"blogPageNav2",sScrollToId:"_$$_blog_edit_all",sVisitorAvatar:this._oOptions.sVisitorAvatar,iVisitorRank:UD.visitorRank,
sCircleBaseUrl:this._oOptions.sCircleBaseUrl,
fnPostBlogDelSucc:function(){this.oEditBlogLeft.refreshBlogClass();this.oEditBlogLeft.refreshBlogArchive();}.bind(this),
oTester:this._oTester4EBA,fnTest:this._sTest4EBA.bind(this),
bHasTop:true,aBlogTopIds:NEBlog.gBlogData.aBlogTopIds});
if(this._oOptions.sBy==-1){
this._changeToBlogList();
this.oBlogList.openBlogsAll(this._oOptions.iTotalBlogCount);
}
else{
if(this._oOptions.sBy=="cls"){
this._changeToBlogList();
this.oBlogList.openBlogsByClass(this._oOptions.sById,this._oOptions.sByName,this._oOptions.iByCnt);
}　else if(this._oOptions.sBy=="arch"){
this._changeToBlogList();
this.oBlogList.openBlogsByArchive(this._oOptions.sById,null,this._oOptions.iByCnt);
}
}
},
setBlogViewType:function(){
if(NEBlog.gBlogData.viewType==1){
NEBlog.gBlogData.viewType=2;
$('$_blog_view_type').innerHTML="只看标题";
}
else{
NEBlog.gBlogData.viewType=1;
$('$_blog_view_type').innerHTML="显示摘要";
}
this.oBlogList._oBlogPager.show();
},
reset:function(){
if(this._hasBatchChanged==false)
return false;
this.oEditBlogLeft.reset();
var _oPageInfo=this.oBlogList.getPageInfo();
if(_oPageInfo!=null){
if(_oPageInfo.loadType=='all'){
this.oBlogList.openBlogsAll(_oPageInfo.loadCount);
}else if(_oPageInfo.loadType=='class'){
this.oBlogList.openBlogsByClass(_oPageInfo.loadId,_oPageInfo.loadName,_oPageInfo.loadCount);
}
}
this._hasBatchChanged=false;
},
openBlogsAll:function(blogCount){
this._changeToBlogList();
this.oBlogList.openBlogsAll(blogCount);
},
openBlogsByClass:function(classId,className,blogCount){
this._changeToBlogList();
this.oBlogList.openBlogsByClass(classId,className,blogCount);
},
openBlogsByArchive:function(archDate,archStr,blogCount){
this._changeToBlogList();
this.oBlogList.openBlogsByArchive(archDate,archStr,blogCount);
},
_changeToBlogList:function(){
$('batchMngLink').style.display="";
$('feelings_top').style.display="none";
$('_$_feelings_edit_list').style.display="none";
$('_$_blog_edit_list').style.display="";
$('feelingsNav').style.display="none";
$('feelingsNav2').style.display="none";
$('blogPageNav2').style.display="";
},
_sTest4EBA:function(sKey,vValues,sRelValue){
if(!this._oTester4EBA)
return;
switch(sKey){
case"Blog":
this._oTester4EBA.setArray("Blog",vValues);
break;
case"Com":
this._oTester4EBA.set2DArray("Com",vValues,"Blog",sRelValue);
break;
case"Tb":
this._oTester4EBA.set2DArray("Tb",vValues,"Blog",sRelValue);
break;
case"Class":
this._oTester4EBA.setArray("Class",vValues);
break;
}
},
batchEdit:function(){
var loadType=$('loadType').value;
var blogCount=$('loadCount').value;
var loadName=$('loadName').value.escape();
var loadId=$('loadId').value;
if(!this._jsWindowManager){
this._jsWindowManager=new NetEase.JSWindowManager();
}
if(!this.oBlogBatchEditDlg){
this.oBlogBatchEditDlg=this._jsWindowManager.createWindow(this._sObjectName+'.oBlogBatchEditDlg',{
width:680,height:450,title:loadName+'-日志批量管理',onTop:true,notKeepPos:false,allowDrag:true,needCover:true,
afterHiddenFunc:this.reset.bind(this)
});
}else{
this._jsWindowManager.updateTitle(this._sObjectName+'.oBlogBatchEditDlg',loadName+'-日志批量管理');
}
var panelHtml='<div class="food_log" id="_$_batch_edit_blog_list"><div class="body">';
panelHtml+='<div class="list" id="_$_blog_batch_list">';
panelHtml+=jst_blog_batch_edit.processUseCache({blogs:[],tipText:'加载中...',objName:this._sObjectName});
panelHtml+='</div>';
panelHtml+=jst_blog_batch_edit_op.processUseCache({classes:NEBlog.gBlogData.aClassList,objName:this._sObjectName,loadId:loadId});
panelHtml+='</div></div>';
this.oBlogBatchEditDlg.panel.innerHTML=panelHtml;
this.oBlogBatchEditDlg.showWindow();
this.gCheckList=[];
this._disableBatchBtn(true,true);
this.oBatchBlogPager=new NetEase.PageNumber(this._sObjectName+'.oBatchBlogPager',{pageSize:this._oOptions.iBlogRange,markID:'_$_batch_blog_nav',totalSize:blogCount,isDiv:true,
loadFunc:this._loadBatchBlogs.bind(this),loadParam:{loadType:loadType,count:blogCount,classId:loadId},presentFunc:this._showBatchBlog.bind(this),userPresentFuncParam:{loadType:loadType},
delIterator:this._delBlogIt});
this.oBatchBlogPager.show();
},
_delBlogIt:function(a,b){
return(a==b.id);
},
_loadBatchBlogs:function(oParams,fnCallback){
$('batch_allcheck').disabled=true;
if(oParams.loadType=="class"){
BlogBean.getBlogsByClassByRank(oParams.limit,oParams.offset,UD.hostId,false,UD.visitorRank,false,oParams.classId,{
callback:function(oDataFromServer){
fnCallback(oDataFromServer);
}
});
}else{
BlogBean.getBlogsByRank(oParams.limit,oParams.offset,UD.hostId,false,UD.visitorRank,false,true,{
callback:function(oDataFromServer){
fnCallback(oDataFromServer);
}
});
}
},
_showBatchBlog:function(oBlogs,oParams){
var _oData={blogs:oBlogs,objName:this._sObjectName,tipText:'暂无日志'};
var _sResult=jst_blog_batch_edit.processUseCache(_oData);
$('_$_blog_batch_list').innerHTML=_sResult;
if(oBlogs!=null&&this.gCheckList!=null){
for(var i=0;i<oBlogs.length;i++){
var blog=oBlogs[i];
for(var j=0;j<this.gCheckList.length;j++){
if(blog.id==this.gCheckList[j]){
var itemSel=$('batch_sel_'+blog.id);
itemSel&&(itemSel.checked=true);
var item=$('batch_'+blog.id);
item&&(item.className+=" select");
break;
}
}
}
this._setBtnState();
}
$('batch_allcheck').disabled=false;
$('batch_allcheck').checked=false;
},
_closeBatchEditDialog:function(){
if(this.oBlogBatchEditDlg){
this.oBlogBatchEditDlg.hiddenWindow();
}
},
cancelBatchOp:function(){
this._closeBatchEditDialog();
this.reset();
},
toggleSelectedBlog:function(blogId){
var item=$('batch_'+blogId);
if(item){
var _htc_selitm_reg=/\bselect\b/g;
if(_htc_selitm_reg.test(item.className))
item.className=item.className.replace(_htc_selitm_reg,"");
else
item.className+=" select";
}
var itemSel=$('batch_sel_'+blogId);
if(itemSel){
if(itemSel.checked)
this.gCheckList.push(blogId);
else{
this.gCheckList=this.gCheckList.reject(function(bid){
if(bid==blogId)
return true;
});
}
}
this._setBtnState();
},
selectBatchOnePage:function(obj){
var _blogs=this.oBatchBlogPager.getAllCachedData();
if(_blogs==null||_blogs.length==0)
return false;
if(obj.checked){
for(var i=0;i<_blogs.length;i++){
var blogId=_blogs[i].id;
var item=$('batch_'+blogId);
if(item){
var _htc_selitm_reg=/\bselect\b/g;
if(!_htc_selitm_reg.test(item.className))
item.className+=" select";
}
var itemSel=$('batch_sel_'+blogId);
if(itemSel){
if(!itemSel.checked){
itemSel.checked=true;
this.gCheckList.push(blogId);
}
}
}
}else{
for(var i=0;i<_blogs.length;i++){
var blogId=_blogs[i].id;
var item=$('batch_'+blogId);
if(item){
var _htc_selitm_reg=/\bselect\b/g;
if(_htc_selitm_reg.test(item.className))
item.className=item.className.replace(_htc_selitm_reg,"");
}
var itemSel=$('batch_sel_'+blogId);
if(itemSel){
if(itemSel.checked){
itemSel.checked=false;
this.gCheckList=this.gCheckList.reject(function(pid){
if(pid==blogId)
return true;
});
}
}
}
}
this._setBtnState();
},
removeBatch:function(){
var batchDelBtn=$('batchDelBtn');
if(batchDelBtn&&(batchDelBtn.disabled==true))
return false;
this._oDlgConfirmBlogBatch=new NetEase.ConfirmDlg(this._sObjectName+"._oDlgConfirmBlogBatch",{
sDlgId:"dlg_confirm_blog_batch_del",sAlert:"确实要删除所选日志吗？",jsWindowManager:this._oOptions.jsWindowManager,
fnOK:this.doRemoveBatch.bind(this)
});
this._oDlgConfirmBlogBatch.show();
},
doRemoveBatch:function(){
this._hasBatchChanged=true;
this._disableBatchBtn(true,true);
BlogBean.removeBatchBlogs(this.gCheckList,{
callback:function(succ){
if(succ){
this.oBatchBlogPager.removeItems(this.gCheckList);
dwrlog('批量删除成功','ok');
this.gCheckList=[];
}
this._setBtnState();
}.bind(this),
errorHandler:function(errorString,ex){
this._setBtnState();
dwrlog('批量删除失败','error');
}.bind(this)
});
},
updateBatchClass:function(){
var clsSel=$('clsSel');
var newClsId=clsSel.value;
if(newClsId=='-1'){
alert('请选择分类!');
return false;
}
this._hasBatchChanged=true;
this._disableBatchBtn(true,true);
BlogBean.updateClassOfBlogs(this.gCheckList,newClsId,{
callback:function(succ){
if(succ){
dwrlog('移出日志成功','ok');
this.gCheckList=[];
this.oBatchBlogPager.emptyCache();
this.oBatchBlogPager.refreshCurPage();
}
this._setBtnState();
}.bind(this),
errorHandler:function(errorString,ex){
this._setBtnState();
dwrlog('移出日志失败','error');
}.bind(this)
});
},
_disableBatchBtn:function(disableDel,disableUpdate){
var batchDelBtn=$('batchDelBtn');
batchDelBtn&&(batchDelBtn.disabled=disableDel);
var batchUpdateBtn=$('batchUpdateBtn');
batchUpdateBtn&&(batchUpdateBtn.disabled=disableUpdate);
},
_setBtnState:function(){
var disableUpdate=true;
if(this.gCheckList!=null&&this.gCheckList.length>0&&$('clsSel').value!='-1'){
disableUpdate=false;
}
var disableDel=true;
if(this.gCheckList!=null&&this.gCheckList.length>0)
disableDel=false;
this._disableBatchBtn(disableDel,disableUpdate);
},
changeClass:function(){
this._setBtnState();
},
clsEdit:function(){
if(!this._jsWindowManager){
this._jsWindowManager=new NetEase.JSWindowManager();
}
if(!this.oClassEditDlg){
this.oClassEditDlg=this._jsWindowManager.createWindow(this._sObjectName+'.oClassEditDlg',{
className:'log_ctgry',width:530,height:380,title:'管理日志分类',onTop:true,notKeepPos:false,allowDrag:false,needCover:true
});
}
this.oClassEditDlg.hasChanged=false;
var panelHtml='<div class="log_ctgry"><div class="body" id="_&_class_edit">';
panelHtml+='</div></div>';
this.oClassEditDlg.panel.innerHTML=panelHtml;
this.oClassEditDlg.showWindow();
this.oClassList=new NetEase.ListModule({readOnly:false,firstLoad:true,loadParam:{},loadFunc:this._presentClass.bind(this),id:'id',attach:{},props:['name'],
propsFilter:[63],positions:[0,1,2,-1,-1],
propsClass:["g_w_20 g_t_left g_t_wrap","g_w_10 g_t_center","g_w_10 g_t_center","g_w_10 g_t_center","g_w_5 g_t_center"],
presentParam:{},presentTemplate:jst_blog_class_manage,
presentShowId:'_&_class_edit',alertMsg:'分类名不能为空',dwrAlert:dwrlog,
objName:this._sObjectName,allowDrag:true,
saveSortFunc:this._saveSortFunc.bind(this),saveDelFunc:this._saveDelFunc.bind(this)});
},
_closeClsEditDialog:function(){
if(this.oClassEditDlg){
this.oClassEditDlg.hiddenWindow();
}
},
cancelClsEdit:function(){
this._closeClsEditDialog();
},
delClass:function(clsId,clsName){
this.oClassList.deleteItem(clsId);
},
_saveDelFunc:function(element,callbackFunc){
BlogBean.deleteClass(element.id,element.className,{
callback:function(succ){
if(succ){
var defI=0;
var delI=0;
var defFound=false;
var delFound=false;
var _aClassList=NEBlog.gBlogData.aClassList;
for(var i=0;i<_aClassList.length;i++){
if(_aClassList[i].className=='默认分类'){
defI=i;
defFound=true;
}
if(_aClassList[i].id==element.id){
delI=i;
delFound=true;
}
if(defFound&&delFound)
break;
}
var defCls=_aClassList[defI];
var delCls=_aClassList[delI];
defCls.blogCount+=delCls.blogCount;
defCls.publishedBlogCount+=delCls.publishedBlogCount;
defCls.publicBlogCount+=delCls.publicBlogCount;
defCls.friendBlogCount+=delCls.friendBlogCount;
defCls.privateBlogCount+=delCls.privateBlogCount;
NEBlog.gBlogData.aClassList=NEBlog.gBlogData.aClassList.reject(function(cid){
if(cid.id==element.id)
return true;
});
var _sResult=jst_blog_class_manage.processUseCache({itemList:NEBlog.gBlogData.aClassList,objName:this._sObjectName});
$('_&_class_edit').innerHTML=_sResult;
this.oEditBlogLeft.refreshBlogClass();
}else{
}
callbackFunc(element.id,succ);
}.bind(this),
errorHandler:function(errorString,ex){
dwrlog('删除分类失败','error');
}.bind(this)
});
},
edtClass:function(clsId){
var item=$('$$_item_'+clsId);
var _htc_selitm_reg=/\bs_prev\b/g;
if(_htc_selitm_reg.test(item.className))
item.className=item.className.replace(_htc_selitm_reg,"s_edit");
},
cancelEdtClass:function(clsId){
var item=$('$$_item_'+clsId);
var _htc_selitm_reg=/\bs_edit\b/g;
if(_htc_selitm_reg.test(item.className))
item.className=item.className.replace(_htc_selitm_reg,"s_prev");
},
submitEdtClass:function(clsId,oldClsName){
var clsName=$('input_cls_'+clsId).value;
if(clsName==""){
alert("请输入新的分类名称！");
return false;
}
var clsList=NEBlog.gBlogData.aClassList;
if(clsList!=null){
for(var i=0;i<clsList.length;i++){
if(clsName==clsList[i].className&&clsId!=clsList[i].id){
alert("已存在同名分类，请输入其他名称的分类!");
return false;
}
}
}
var blogClass={id:clsId,className:clsName};
BlogBean.updateClassByName(blogClass,oldClsName,{
callback:function(succ){
if(succ){
$('div_cls_'+clsId).innerHTML=clsName.escape();
var aClassList=NEBlog.gBlogData.aClassList;
for(var i=0;i<aClassList.length;i++){
if(aClassList[i].id==clsId){
aClassList[i].className=clsName;
break;
}
}
dwrlog('修改分类成功','ok');
this.cancelEdtClass(clsId);
this.oEditBlogLeft.refreshBlogClass();
}else{
dwrlog('修改分类失败','error');
}
}.bind(this)
});
},
submitClassOrder:function(){
this.oClassList.saveSort();
},
_presentClass:function(param,callback){
callback(NEBlog.gBlogData.aClassList);
},
_saveSortFunc:function(seqString,attach,callbackFunc){
var aOrderClsIds=seqString.split(",");
if((NEBlog.gBlogData.aClassOrderIds==null&&aOrderClsIds!=null)||
(NEBlog.gBlogData.aClassOrderIds!=null&&aOrderClsIds!=null&&
NEBlog.gBlogData.aClassOrderIds.join(',')!=aOrderClsIds.join(','))){
NEBlog.gBlogData.aClassOrderIds=aOrderClsIds;
BlogBean.updateClassOrderIds(aOrderClsIds,{
callback:function(succ){
this.cancelClsEdit();
NEBlog.gBlogData.aClassList=this.oEditBlogLeft.orderClass(NEBlog.gBlogData.aClassList);
this.oEditBlogLeft.refreshBlogClass();
}.bind(this)
});
}else{
this.cancelClsEdit();
}
}
}
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.BlogList=Class.create();
NEBlog.BlogList.prototype={
initialize:function(sObjectName){
this._oOptions=Object.extend({
bPrev:true,
iBlogRange:10,
iCommentRange:10,
sCircleBaseUrl:'',
jstBlogList:'',
jstRelCirle:'',
hookBlogList:'',
sBlogListModuleId:'',
sPagerId:'',
sScrollPageId:'',
sScrollToId:'',
iGlobalAllowComment:null,
sVisitorAvatar:null,
sVisitorIP:null,
iVisitorRank:-100,
jsWindowManager:false,
fnPostBlogDelSucc:null,
oTester:null,
fnTest:null
},arguments[1]||{});
this._sObjectName=sObjectName;
this._bShowHiding=false;
this._oBlogPager=null;
this.commentPublishes={};
this._oRelateBlogCircleMap={};
this._oCssTabBarUpdownStatus={};
this.movieclips={};
this._oBlogList=null;
this._oBlogTop=null;
this._oDlgConfirmBlog=null;
this._init();
return this;
},
_init:function(){
var module=netease.ui.module.Module.getModuleById(this._oOptions.sBlogListModuleId);
if(!this._oOptions.jsWindowManager){
this._oOptions.jsWindowManager=new NetEase.JSWindowManager();
}
},
_setBlogTitle:function(t){
if($('$_blog_class_name_and_num'))
$('$_blog_class_name_and_num').innerHTML=t;
},
_getBlogTitle:function(){
if($('$_blog_class_name_and_num'))
return $('$_blog_class_name_and_num').innerHTML;
},
openBlogsAll:function(iBlogCount){
if(NEBlog.gBlogData.aClassList!=null){
var num=0;
NEBlog.gBlogData.aClassList.each(function(e){
num+=e.blogCount;
});
iBlogCount=num;
}
var _oLoadParam={loadType:"all",count:iBlogCount};
var _oPresentParam={loadType:"all"};
this._newBlogPager(iBlogCount,_oLoadParam,_oPresentParam);
var _sLoadType="所有日志("+iBlogCount+")";
this._setBlogTitle(_sLoadType);
this._setPageInfo("all",iBlogCount,"所有日志",null);
},
openBlogsByClass:function(iClassId,sClassName,iBlogCount){
if(iBlogCount==0){
this._showBlog(null,{loadType:"class"});
var _sLoadType=sClassName.escape()+"("+iBlogCount+")";
this._setBlogTitle(_sLoadType);
this._setPageInfo("class",iBlogCount,sClassName,iClassId);
if(this._oBlogPager==null)
{
var _oLoadParam={loadType:"class",classId:iClassId,count:iBlogCount};
var _oPresentParam={loadType:"class"};
this._newBlogPager(iBlogCount,_oLoadParam,_oPresentParam);
}else{
this._oBlogPager.options.userPresentFuncParam.loadType="class";
}
this._oBlogPager.reset();
return;
}
var _oLoadParam={loadType:"class",classId:iClassId,count:iBlogCount};
var _oPresentParam={loadType:"class"};
this._newBlogPager(iBlogCount,_oLoadParam,_oPresentParam);
var _sLoadType=sClassName.escape()+"("+iBlogCount+")";
this._setBlogTitle(_sLoadType);
this._setPageInfo("class",iBlogCount,sClassName,iClassId);
},
openBlogsByArchive:function(archDate,archDateStr,iBlogCount){
var _oLoadParam={loadType:"archive",archDate:archDate,count:iBlogCount};
var _oPresentParam={loadType:"archive"};
this._newBlogPager(iBlogCount,_oLoadParam,_oPresentParam);
var _sLoadType=archDateStr+"("+iBlogCount+")";
this._setBlogTitle(_sLoadType);
this._setPageInfo("archive",iBlogCount,archDateStr,archDate);
},
_loadBlogs:function(oParams,fnCallback){
if(oParams.loadType=="class"){
BlogBean.getBlogsByClassByRank(oParams.limit,oParams.offset,UD.hostId,this._oOptions.bPrev,UD.visitorRank,this._oOptions.bPrev,oParams.classId,{
callback:function(oDataFromServer){
oDataFromServer.each(function(e){
e.hasRead=0;
});
fnCallback(oDataFromServer);
if(Const.Recovery.Blog==true){
if(oDataFromServer!=null&&oDataFromServer.length!=oParams.count)
RecoveryBean.addRecoveryInfo({userId:UD.hostId,type:'blog'});
}
}
});
}else if(oParams.loadType=="archive"){
BlogBean.getBlogsByArchive(oParams.limit,oParams.offset,UD.hostId,this._oOptions.bPrev,UD.visitorRank,this._oOptions.bPrev,oParams.archDate,{
callback:function(oDataFromServer){
oDataFromServer.each(function(e){
e.hasRead=0;
});
fnCallback(oDataFromServer);
if(Const.Recovery.Blog==true){
if(oDataFromServer!=null&&oDataFromServer.length!=oParams.count)
RecoveryBean.addRecoveryInfo({userId:UD.hostId,type:'blog'});
}
}
});
}else{
BlogBean.getBlogsByRank(oParams.limit,oParams.offset,UD.hostId,this._oOptions.bPrev,UD.visitorRank,this._oOptions.bPrev,true,{
callback:function(oDataFromServer){
oDataFromServer.each(function(e){
e.hasRead=0;
});
fnCallback(oDataFromServer);
if(Const.Recovery.Blog==true){
if(oDataFromServer!=null&&oDataFromServer.length!=oParams.count)
RecoveryBean.addRecoveryInfo({userId:UD.hostId,type:'blog'});
}
}
});
}
},
_showBlog:function(oBlogs,oParams){
this._oBlogList=oBlogs;
var isGlob=false;
if(10000==UD.visitorRank){
if(UD.hostName.indexOf('@game')==UD.hostName.length-5)
isGlob=true;
}
var _oData={blogs:oBlogs,visitorName:UD.visitorName,
hostName:UD.hostName,loadType:oParams.loadType,
objName:this._sObjectName,
blogRange:this._oOptions.iBlogRange,isGlob:isGlob,viewType:NEBlog.gBlogData.viewType};
var _sResult=this._oOptions.jstBlogList.processUseCache(_oData);
$(this._oOptions.hookBlogList).innerHTML=_sResult;
if(this._oOptions.oTester!=null){
if(oBlogs==null||oBlogs.length==0){
this._oOptions.fnTest("Blog","null");
}else{
var _aBId=oBlogs.pluck("id");
this._oOptions.fnTest("Blog",_aBId);
}
}
},
_newBlogPager:function(iBlogCount,oLoadParam,oPresentParam){
this._oBlogPager=new NetEase.PageNumber(this._sObjectName+"._oBlogPager",{pageSize:this._oOptions.iBlogRange,markID:this._oOptions.sPagerId,totalSize:iBlogCount,
loadFunc:this._loadBlogs.bind(this),loadParam:oLoadParam,presentFunc:this._showBlog.bind(this),userPresentFuncParam:oPresentParam,filterFunc:this._fnBlogFilter.bind(this),
delIterator:this._delBlogIt,updateIterator:this._updtBlogIt,needRefreshAfterUpdate:true,beforeID:this._oOptions.sScrollPageId,
beforePrev:this._scrollToBlogTop.bind(this),beforeNext:this._scrollToBlogTop.bind(this),beforeChange:this._scrollToBlogTop.bind(this)});
this._oBlogPager.show();
},
_delBlogIt:function(a,b){
return(a==b.id);
},
_updtBlogIt:function(oFirst,oSecond){
return(oFirst.id==oSecond.id);
},
_scrollToBlogTop:function(){
new Effect.ScrollTo(this._oOptions.sScrollToId,{duration:0.0});
},
_fnBlogFilter:function(oData){
for(var j=0,i=0,len=oData.length;j<len;j++){
var oBlog=oData[j];
if(oBlog.tag!=null&&oBlog.tag!=""){
oBlog.tagArray=oBlog.tag.split(",");
}else{
oBlog.tagArray=null;
}
this.movieclips[oBlog.id]={};
if(oBlog.content!=null){
oBlog.content=oBlog.content.replace(/<embed.*?>/ig,function($1){
this.movieclips[oBlog.id]["movie_"+i]=$1;
var s='<p id="movie_'+i+'_'+oBlog.id+'"><span onclick="'+this._sObjectName+'.showMovie(\''+oBlog.id+'\',\'movie_'+i+'\');" class="g_t_center g_htc_selitm a_a c_c g_c_hand bd01 c09" style="padding:15px 50px;font-size:12px;margin-top:10px;margin-bottom:20px;display:block;width:120px" title="播放影音">请点击查看影音文件...</span></p>';
i++;
return s;
}.bind(this));
oBlog.content=oBlog.content.replace(/<\/embed>/ig,' ');
}
}
},
showMovie:function(sBlogId,sMovieId){
var o=$(sMovieId+"_"+sBlogId);
if(o!=null){
o.className="";
o.innerHTML=this.movieclips[sBlogId][sMovieId];
}
},
incBlogAccessCount:function(oBlog){
if(oBlog.hasRead==0){
var visitor={visitorName:UD.visitorName,visitorNickname:UD.visitorNickname,
visitorImageUrl:UD.visitorAvatar,visitorId:UD.visitorId};
BlogBean.updateBlogVisit(oBlog.id,oBlog.userId,visitor,{
callback:function(oDataFromServer){
if(oDataFromServer==true){
oBlog.hasRead=1;
oBlog.accessCount++;
}
}
});
}
},
showRelateBlogCircle:function(oBlog){
var sBlogId=oBlog.id;
if(sBlogId==null||oBlog.circleIdList==null||oBlog.circleIdList.length==0)
return;
if(this._oRelateBlogCircleMap[sBlogId]==null){
BlogBean.getRelateBlogsCircles(sBlogId,UD.hostId,{
callback:function(oDataFromServer){
var _oList=oDataFromServer.findAll(function(e){
return e.blogRecInfos.length>0
});
var _oData={relateCircles:_oList,circleBaseUrl:this._oOptions.sCircleBaseUrl,showAllFunc:this._sObjectName+".showAllCircleBlogs('"+sBlogId+"')"};
var _sResult=jst_blog_prev_related_circle.processUseCache(_oData);
if(_sResult==""){
$("relateBlogCircle_"+sBlogId).style.display="none";
}else{
$("relateBlogCircle_"+sBlogId).innerHTML=_sResult;
}
this._oRelateBlogCircleMap[sBlogId]=_sResult;
}.bind(this)
});
}else{
var _sResult=this._oRelateBlogCircleMap[sBlogId];
if(_sResult==""){
$("relateBlogCircle_"+sBlogId).style.display="none";
}else{
$("relateBlogCircle_"+sBlogId).innerHTML=_sResult;
}
}
},
showAllCircleBlogs:function(_blogId){
Element.addClassName($("relateBlogCircle_"+_blogId),"show");
},
cancelConfirmDlg:function(dlgId){
this._oOptions.jsWindowManager.closeWindow(dlgId);
},
deleteBlog:function(id,isPublished,publishTime,allowView,valid,classId){
if($("blogDel"+id).disabled==true)
return false;
this._oDlgConfirmBlog=new NetEase.ConfirmDlg(this._sObjectName+"._oDlgConfirmBlog",{
sDlgId:"dlg_confirm_blog_del",sAlert:"确实要删除该日志吗？",jsWindowManager:this._oOptions.jsWindowManager,
fnOK:this.doDeleteBlog.bind(this),oFnOKParam:{id:id,isPublished:isPublished,publishTime:publishTime,
allowView:allowView,valid:valid,classId:classId}
});
this._oDlgConfirmBlog.show();
},
doDeleteBlog:function(blog){
$("blogDel"+blog.id).disabled=true;
var p=false;
if(blog.isPublished==1&&blog.valid<12)
p=true;
var archiveDate=new Date(blog.publishTime);
archiveDate.setDate(1);
archiveDate.setHours(0);
archiveDate.setMinutes(0);
archiveDate.setSeconds(0);
archiveDate.setMilliseconds(0);
BlogBean.deleteBlog(blog.id,p,blog.publishTime,blog.allowView,{
callback:function(dataFromServer){
this._postDeleteBlog(dataFromServer,blog.id,blog.classId,archiveDate.getTime(),p);
}.bind(this),
errorHandler:function(errorString,ex){
$("blogDel"+blog.id).disabled=false;
if(ex==undefined||ex==null||
ex.type!="DelSysRecomException"){
return false;
}
alert("该日志已经被系统推荐, 不能删除!");
}.bind(this)
});
},
_postDeleteBlog:function(succ,blogId,classId,archiveDate,isPublished){
if(succ==true){
this._oBlogPager.removeOne(blogId);
if(NEBlog.gBlogData.aClassList!=null){
NEBlog.gBlogData.aClassList.each(function(e){
if(e.id==classId){
e.blogCount--;
}
});
}
if(NEBlog.gBlogData.aArchiveList!=null){
NEBlog.gBlogData.aArchiveList.each(function(e){
if(e.archiveDate==archiveDate){
e.blogCount--;
}
});
}
if(this._oOptions.fnPostBlogDelSucc!=null)
this._oOptions.fnPostBlogDelSucc();
try{
var title=this._getBlogTitle();
var index1=title.indexOf("(");
var index2=title.indexOf(")");
if(index1>=0&&index2>=0&&index1<index2){
var mc=title.substring(index1+1,index2);
mc=parseInt(mc)-1;
var lt=title.substring(0,index1)+"("+mc+")";
this._setBlogTitle(lt);
this._setPageInfo(null,mc,null,null);
}
}catch(e){
}
dwrlog('日志删除成功','ok');
}else{
dwrlog('日志删除失败','error');
}
},
topBlog:function(blogId){
BlogBean.topBlog(blogId,{
callback:function(dataFromServer){
this._oBlogPager.emptyCache();
this._oBlogPager.refreshCurPage();
dwrlog('置顶成功','ok');
}.bind(this),
errorHandler:function(errorString,ex){
dwrlog('置顶失败','error');
}
});
},
untopBlog:function(blogId){
BlogBean.untopBlog(blogId,{
callback:function(dataFromServer){
this._oBlogPager.emptyCache();
this._oBlogPager.refreshCurPage();
dwrlog('取消置顶成功','ok');
}.bind(this),
errorHandler:function(errorString,ex){
dwrlog('取消置顶失败','error');
}
});
},
_setPageInfo:function(sLoadType,sLoadCount,sLoadName,sLoadId){
var loadType=$('loadType');
loadType&&(loadType!=null)&&(loadType.value=sLoadType);
var loadCount=$('loadCount');
loadCount&&(loadCount!=null)&&(loadCount.value=sLoadCount);
var loadName=$('loadName');
loadName&&(loadName!=null)&&(loadName.value=sLoadName);
var loadId=$('loadId');
loadId&&(loadId!=null)&&(loadId.value=sLoadId);
},
getPageInfo:function(){
return{loadType:$('loadType').value,loadCount:$('loadCount').value,
loadName:$('loadName').value,loadId:$('loadId').value};
},
openBlog:function(permalink,e){
if(isIE)
Event.stop(event);
else
Event.stop(e);
if(this._oOptions.bPrev)
window.open(UD.hostPath+"/"+permalink+"/");
else
window.open(UD.hostPath+"/"+permalink+"/edit/");
},
openSameClass:function(iClassId,sClassName){
if(NEBlog.gBlogData.aClassList==null)
BlogBean.getBlogClasses(UD.hostId,{
callback:function(dataFromServer){
this._showSameClass(dataFromServer,iClassId,sClassName);
}.bind(this)
});
else
this._showSameClass(NEBlog.gBlogData.aClassList,iClassId,sClassName);
},
_showSameClass:function(classes,iClassId,sClassName){
NEBlog.gBlogData.aClassLis=classes;
var _iBlogCount=0;
for(var i=0;i<classes.length;i++){
if(classes[i].id==iClassId){
if(this._oOptions.bPrev){
if(UD.visitorRank>=Const.Rank.Owner)
_iBlogCount=classes[i].publishedBlogCount;
else if(UD.visitorRank>=Const.Rank.Friend)
_iBlogCount=classes[i].friendBlogCount+classes[i].publicBlogCount;
else if(UD.visitorRank>=Const.Rank.Anonymous)
_iBlogCount=classes[i].publicBlogCount;
}else
_iBlogCount=classes[i].blogCount;
break;
}
}
this.openBlogsByClass(iClassId,sClassName,_iBlogCount);
}
};
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.DlgAddClass=Class.create();
NEBlog.DlgAddClass.prototype={
initialize:function(sObjectName){
this._oOptions=Object.extend({
sHookDlgClsAdd:'hookDlgClsAdd',
fnPostClassAddSucc:null,
jsWindowManger:null
},arguments[1]||{});
this._sObjectName=sObjectName;
this._oClsAddDiv=null;
this._init();
return this;
},
_init:function(){
if(!this._oOptions.jsWindowManager){
this._oOptions.jsWindowManager=new NetEase.JSWindowManager();
}
},
showClsAddDiv:function(op,refObj,bCumulative,offsetX,offsetY,oldClsId){
var _oRefObj=$(refObj);
var _oDiv;
if(op=="add"){
if(this._oClsAddDiv==null){
var data={objectName:this._sObjectName};
$(this._oOptions.sHookDlgClsAdd).innerHTML=NEBlog.jst_blog_add_class.processUseCache(data);
this._oClsAddDiv=$('addClsDiv');
}
_oDiv=this._oClsAddDiv;
}
var lfoffset=Position.cumulativeOffset(_oRefObj);
if(offsetX==null||offsetX==-1){
_oDiv.parentNode.style.left=(lfoffset[0])+'px';
}else{
_oDiv.parentNode.style.left=(lfoffset[0]+offsetX)+'px';
}
if(offsetY==null||offsetY==-1){
_oDiv.parentNode.style.top=(lfoffset[1]+16)+'px';
}else{
_oDiv.parentNode.style.top=(lfoffset[1]+offsetY)+'px';
}
_oDiv.parentNode.style.display='';
if(op=="add"){
$("txtNewClass4Add").focus();
}
},
onSubmitClassAdd:function(){
var newClass=Trim($("txtNewClass4Add").value);
if(newClass==""){
alert("请输入要添加的分类名称！");
return false;
}
$('txtNewClass4Add').value='';
this.ocClassAddWin();
var _aClassList=NEBlog.gBlogData.aClassList;
for(var i=0;i<_aClassList.length;i++){
if(newClass==_aClassList[i].className){
alert("你已经定义了同名的分类,请选择不同名称!");
return false;
}
}
BlogBean.addClass(newClass,{
callback:function(dataFromServer){
this._postClassAdd(dataFromServer,newClass);
}.bind(this),
errorHandler:function(errorString,ex){
filterWarning(ex,false);
dwrlog('分类添加失败','error');
}
});
},
ocClassAddWin:function(){
if(this._oClsAddDiv.parentNode.style.display=='none'){
this._oClsAddDiv.parentNode.style.display='';
}else{
this._oClsAddDiv.parentNode.style.display='none';
}
},
onCancelClassAdd:function(){
this._oClsAddDiv.parentNode.style.display='none';
$('txtNewClass4Add').value='';
},
_postClassAdd:function(clsId,clsName){
if(clsId==-1){
alert("你已经定义了同名的分类,请选择不同名称!");
return false;
}
var clsObj={id:clsId,className:clsName,blogCount:0};
this._refreshBlogClasses(clsObj,'a');
if(this._oOptions.fnPostClassAddSucc!=null)
this._oOptions.fnPostClassAddSucc(clsId,clsName);
dwrlog('分类添加成功','ok');
},
_refreshBlogClasses:function(cls,op){
if(NEBlog.gBlogData.aClassList==null)
NEBlog.gBlogData.aClassList=[];
if(NEBlog.gBlogData.aClassOrderIds==null)
NEBlog.gBlogData.aClassOrderIds=[];
if(cls!=undefined&&cls!=null){
if(op=='a'){
NEBlog.gBlogData.aClassList.unshift(cls);
NEBlog.gBlogData.aClassOrderIds.unshift(cls.id);
}
}
},
keyDownInClass:function(op,e){
var keycode;
if(isIE)
keycode=event.keyCode;
else
keycode=e.which;
if(keycode==13){
if(op=='add')
this.onSubmitClassAdd();
}
}
};
NEBlog.jst_blog_add_class=new String('\
 <div id="addClsDiv" class="g_lay_com g_crd_7">\
   <span class="close n_ n7" title="关闭" onclick="${objectName}.onCancelClassAdd();">&nbsp;</span>\
   <div class="titlebar0">新增分类名</div>\
   <div class="g_c_mvdn g_h_25"><input class="g_w_95 g_h_ipt g_htc_focus g_t_14 g_c_input" id="txtNewClass4Add" name="txtNewClass" type="text" size="30" maxlength="63" onkeypress="${objectName}.keyDownInClass(\'add\', event);" /></div>\
   <div class="g_t_center">\
     <input type="button" class="btncm btnok" value="确　定" id="btnBlogClsOK4Add" name="submitClassAdd" onclick="${objectName}.onSubmitClassAdd();" />\
     <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>\
     <input type="button" class="btncm btncc" value="取　消" id="btnBlogClsCancel4Add" name="cancelClassAdd" onclick="${objectName}.onCancelClassAdd();" />\
   </div>\
 </div>');
var ActionMapping={
forward:function(model,view,template){
Logger.debug("ActionMapping  model: "+$H(model).inspect()+" view:"+view+" template:"+template);
var result=TrimPath.processDOMTemplate(template,model);
if(template=="type1Circles_jst"){
Logger.debug(result);
}
$(view).innerHTML=result;
},
redirect:function(url){
window.location=url;
}
}
var PopDialog={
pageLayer:new NetEase.PageLayer(),
_show:function(model,view,template,baseElement,offset,options){
var htmlStr=TrimPath.processDOMTemplate(template,model);
PopDialog.showDialog(htmlStr,view,baseElement,offset,options);
},
showDialog:function(htmlStr,view,baseElement,offset,options){
var viewElement=$(view);
viewElement.innerHTML=htmlStr;
var baseElementPos=Position.cumulativeOffset($(baseElement));
var dialogLeft=baseElementPos[0]+offset.left;
var dialogTop=baseElementPos[1]+offset.top;
if(options!=null&&options.adjustPos==true){
if(dialogLeft+options.width>990){
dialogLeft-=options.width;
}
}
var dialogStyle={left:dialogLeft+"px",top:dialogTop+"px"};
Element.setStyle(view,dialogStyle);
},
setDialogContent:function(model,view,template){
var htmlStr=TrimPath.processDOMTemplate(template,model);
$(view).innerHTML=htmlStr;
},
showEffect:function(model,view,template,baseElement,offset,options){
PopDialog._show(model,view,template,baseElement,offset);
Effect.SlideDown(view,{duration:0.2,userCallBack:function(){}});
},
hideEffect:function(view){
Effect.SlideUp(view,{duration:0.2});
},
showOrHideEffect:function(model,view,template,baseElement,offset,options){
if($(view).style.display=="none"||(baseElement!=PopDialog.baseElement)){
PopDialog.showEffect(model,view,template,baseElement,offset);
}
else if(baseElement==PopDialog.baseElement){
PopDialog.hideEffect(view);
}
PopDialog.baseElement=baseElement;
},
showLayer:function(model,view,template,baseElement,offset,options){
PopDialog._show(model,view,template,baseElement,offset,options);
PopDialog.pageLayer.addLayer({layerID:view,oneLayer:true});
},
hideLayer:function(view){
Element.hide(view);
PopDialog.pageLayer.removeLayer(view);
},
showOrHideLayer:function(model,view,template,baseElement,offset,options){
if($(view).style.display=="none"||(baseElement!=PopDialog.baseElement)){
PopDialog.showLayer(model,view,template,baseElement,offset,options);
}
else if(baseElement==PopDialog.baseElement){
PopDialog.hideLayer(view);
}
PopDialog.baseElement=baseElement;
},
showContentLayer:function(htmlContent,view,baseElement,offset,options){
PopDialog.showDialog(htmlContent,view,baseElement,offset,options);
PopDialog.pageLayer.addLayer({layerID:view,oneLayer:true});
},
showOrHideContentLayer:function(htmlContent,view,baseElement,offset,options){
if($(view).style.display=="none"||(baseElement!=PopDialog.baseElement)){
PopDialog.showLayer(model,view,template,baseElement,offset,options);
}
else if(baseElement==PopDialog.baseElement){
PopDialog.hideLayer(view);
}
PopDialog.baseElement=baseElement;
},
showContentEffect:function(htmlContent,view,baseElement,offset,options){
PopDialog.showDialog(htmlContent,view,baseElement,offset,options);
Effect.SlideDown(view,{duration:0.2,userCallBack:function(){}});
},
showOrHideContentEffect:function(htmlContent,view,baseElement,offset,options){
if($(view).style.display=="none"||(baseElement!=PopDialog.baseElement)){
PopDialog.showEffect(model,view,template,baseElement,offset,options);
}
else if(baseElement==PopDialog.baseElement){
PopDialog.hideEffect(view);
}
PopDialog.baseElement=baseElement;
}
}
function $FR(element,time){
var value=null;
for(var i=0;i<time;i++){
var elementValue=$F(element+i);
if(elementValue!=null&&elementValue!="undefined"){
value=elementValue;
if(value=="true")value=true;
if(value=="false")value=false;
break;
}
};
return value;
}
function $FC(element,time){
var values=[];
for(var i=0;i<time;i++){
var elementValue=$F(element+i);
if(elementValue!=null&&elementValue!="undefined"){
values.push(elementValue);
}
}
return values;
}
function showHideContent(contentId,arrowId,style,upImg,downImg){
var arrowImg=$(arrowId);
var realUpImg,realDownImg;
realUpImg=(null==upImg)?"/ico_up.gif":upImg;
realDownImg=(null==downImg)?"/ico_down.gif":downImg;
if($(contentId).style.display=="none"){
new Effect.BlindDown(contentId,{duration:0.2,userCallBack:function(){}});
arrowImg.src=style+realUpImg;
}else{
new Effect.BlindUp(contentId,{duration:0.2,userCallBack:function(){}});
arrowImg.src=style+realDownImg;
}
}
var CommonSearchPanel={
onClickTextInput:function(ele,value){
if($(ele).value==value){
$(ele).value='';
$(ele).style.color='#41586c';
}
},
onBlurTextInput:function(ele,value){
$(ele).value=value;
$(ele).style.color='#adadad';
}
}
var IdToName={
convert:function(id,nameArray){
var data=nameArray.find(function(curData){
return curData.id==id;
});
if(null==data){
return"";
}
return data.name;
}
}
var DateFormat={
format:function(date){
return NetEase.DateTime.formatDate(date.getTime(),"yyyy-MM-dd");
},
formatTime:function(time){
return NetEase.DateTime.formatDate(time,"yyyy-MM-dd");
}
}
function trimStr(str,length){
if(str==null){
return"null string";
}
var needTrim=(str.length>length);
if(needTrim){
return str.substr(0,length)+"...";
}
else{
return str;
}
}
function trimChStr(str,length){
if(str==null){
return"null string";
}
var i=0;
var j=0;
var trimStr="";
for(i=0;i<str.length;i++){
if(str.charCodeAt(i)>127||str.charCodeAt(i)==94){
j=j+2;
}
else{
j=j+1
}
if(length<j){
break;
}
}
var counter=i;
var needTrim=(str.length>counter);
if(needTrim){
return str.substr(0,counter)+"...";
}
else{
return str;
}
}
function getStrLength(str){
if(str==null){
return 0;
}
var i=0;
var j=0;
for(i=0;i<str.length;i++){
if(str.charCodeAt(i)>127||str.charCodeAt(i)==94){
j=j+2;
}
else{
j=j+1
}
}
return j;
}
function changeButtonDisable(e,flag){
cls=e.className;
if(flag==true){
cls=cls.replace(/ enableButton/gi,"");
cls=cls.replace(/ disableButton/gi,"");
cls+=" disableButton";
e.className=cls;
}
else{
cls=cls.replace(/ disableButton/gi,"");
cls=cls.replace(/ enableButton/gi,"");
cls+=" enableButton";
e.className=cls;
}
}
function addSelect(obj){
if(null==obj)
return;
else
obj.className+=" selectItem";
}
function removeSelect(obj){
if(null==obj)
return;
else
obj.className=obj.className.replace(/selectItem/gi,'');
}
function addUnderline(obj){
if(null==obj)
return;
else
obj.style.textDecoration="underline";
}
function removeUnderline(obj){
if(null==obj)
return;
else
obj.style.textDecoration='none';
}
function fStopEvent(ev){
if(!ev)ev=this.getEvent();
this.fStopPropagation(ev);
this.fPreventDefault(ev);
}
function fGetEvent(e){
var ev=e||window.event;
if(!ev){
var c=this.getEvent.caller;
while(c){
ev=c.arguments[0];
if(ev&&Event==ev.constructor){
break;
}
c=c.caller;
}
}
return ev;
}
function fStopPropagation(ev){
if(!ev)ev=this.getEvent();
if(ev.stopPropagation){
ev.stopPropagation();
}else{
ev.cancelBubble=true;
}
}
function fPreventDefault(ev){
if(!ev)ev=this.getEvent();
if(ev.preventDefault){
ev.preventDefault();
}else{
ev.returnValue=false;
}
}
function dateConverter(dateStr){
var times=dateStr.split("-");
var curDate=new Date(times[0],times[1]-1,times[2]);
return curDate;
}
function formatCircleImageUrl(url){
if(url!=null&&url!="-5000")
return url;
return"/style/common/group_default140.gif";
}
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.PrevBlogLeft=Class.create();
NEBlog.PrevBlogLeft.RECENT_NUMBER=5;
NEBlog.PrevBlogLeft.YearArchive=function(iYear){
this.year=iYear;
this.archives=[];
}
NEBlog.PrevBlogLeft.MonthArchive=function(iYear,iMonth,iCount){
this.year=iYear;
this.month=iMonth;
this.count=iCount;
this.toStandardStr=function(){
return this.year+'-'+this.month+'-'+'01';
}
this.toString=function(){
return this.year+'年'+this.month+'月';
}
}
NEBlog.PrevBlogLeft.prototype={
initialize:function(sObjectName,sParentName,sPageName){
this._oOptions=Object.extend({
sTestOn:'off',
sListType:'',
sYearPara:'',
sMonthPara:''
},arguments[3]||{});
this._sObjectName=sObjectName;
this._sParentName=sParentName
this._sPageName=sPageName;
this._bShowHiding=false;
this._oTester4EBL=null;
this._bHasRecentComments=false;
this.recentComments;
this._init();
return this;
},
_init:function(){
if(this._oOptions.sTestOn=='on')
this._oTester4EBL=new NECtrl.SeleniumTester();
BlogBean.getBlogClasses(UD.hostId,{
callback:function(oClasses){
var oNewClasses=this._orderClass(oClasses);
this.showBlogClasses(oNewClasses,"_$_blog_prev_class",
this._oOptions.iTotalBlogCount,UD.visitorRank,
this._oOptions.sListType,this._oOptions.sEncodeClassId);
}.bind(this)
});
this.show_hide('_$_blog_prev_arch');
},
_orderClass:function(oClasses){
var oNewClasses=null;
if(oClasses!=null&&oClasses.length>0){
var _aClassOrderIds=NEBlog.gBlogData.aClassOrderIds;
if(_aClassOrderIds!=null&&_aClassOrderIds.length>0){
oNewClasses=[];
for(var i=0;i<_aClassOrderIds.length;i++){
var _cid=_aClassOrderIds[i];
for(var j=0;j<oClasses.length;j++){
var _cls=oClasses[j];
if(_cls.id==_cid){
oNewClasses.push(_cls);
oClasses.splice(j,1);
break;
}
}
}
if(oClasses.length>0){
for(var i=0;i<oClasses.length;i++){
oNewClasses.push(oClasses[i]);
}
}
}else{
oNewClasses=oClasses;
}
}
return oNewClasses;
},
showBlogClasses:function(oClasses,sElemId,iTotalBlogCount,iVisitorRank,sListType,iEncodeClassId){
var _oBlogCount=new Array();
for(var i=0;i<oClasses.length;i++){
if(iVisitorRank>=10000)
_oBlogCount[i]=oClasses[i].publishedBlogCount;
else if(iVisitorRank>=100)
_oBlogCount[i]=oClasses[i].publicBlogCount+oClasses[i].friendBlogCount;
else if(iVisitorRank>=-100)
_oBlogCount[i]=oClasses[i].publicBlogCount;
}
var _oData={classes:oClasses,totalBlogCount:iTotalBlogCount,classBlogCount:_oBlogCount,
hostName:UD.hostName,pageName:this._sPageName,
hostPath:UD.hostPath,parentName:this._sParentName,
selId:iEncodeClassId};
var _sResult=jst_blog_prev_class.processUseCache(_oData);
$(sElemId).innerHTML=_sResult;
if(this._oTester4EBL){
if(oClasses==null||oClasses.length==0){
this._test4PBL("LClass","null");
}else{
var _aClsId=oClasses.pluck("id");
this._test4PBL("LClass",_aClsId);
}
}
},
showArchives:function(oArchives,sElemId,iVisitorRank,sListType,sYearPara,sMonthPara){
var _oYearArchs=[];
var _iYearIndex=-1;
var _iArchiveCount=oArchives.length;
for(var i=0;i<_iArchiveCount;i++){
var _oDate=new Date(oArchives[i].archiveDate);
var _iYear=_oDate.getFullYear();
var _iMonth=parseInt(_oDate.getMonth())+1;
var _iCount=0;
if(iVisitorRank>=10000){
_iCount=oArchives[i].publishedBlogCount;
}
else if(iVisitorRank>=100)
_iCount=oArchives[i].publicBlogCount+oArchives[i].friendBlogCount;
else if(iVisitorRank>=-100)
_iCount=oArchives[i].publicBlogCount;
if(_iCount==0)
continue;
if(_iYearIndex>=0&&_oYearArchs[_iYearIndex].year==_iYear){
var _oMonthArch=new NEBlog.PrevBlogLeft.MonthArchive(_iYear,_iMonth,_iCount);
_oYearArchs[_iYearIndex].archives.push(_oMonthArch);
}else{
var _oYearArch=new NEBlog.PrevBlogLeft.YearArchive(_iYear);
var _oMonthArch=new NEBlog.PrevBlogLeft.MonthArchive(_iYear,_iMonth,_iCount);
_oYearArch.archives.push(_oMonthArch);
_oYearArchs.push(_oYearArch);
_iYearIndex++;
}
}
var _oData={yearArchs:_oYearArchs,pageName:this._sPageName,hostPath:UD.hostPath,
objName:this._sObjectName,parentName:this._sParentName};
var _sRresult=jst_blog_prev_arch.processUseCache(_oData);
$(sElemId).innerHTML=_sRresult;
if(sListType=='class'){
}else if(sListType=='archive'){
this.show_hide("yearArch"+sYearPara,"updown"+sYearPara,"icn_up.gif","icn_down.gif");
}else{
}
if(this._oTester4EBL){
if(oArchives==null||oArchives.length==0){
this._test4PBL("LArch","null");
}else{
var _aArchId=oArchives.pluck("id");
this._test4PBL("LArch",_aArchId);
}
}
},
show_hide:function(sShowId,sArrowId,vIsyear){
if(this._bShowHiding==true)
return;
var _oShowDiv=$(sShowId);
if(_oShowDiv.style.display=="none"){
if(sShowId=="_$_blog_prev_arch"&&!this._bHasArchive){
BlogBean.getRecentArchives(UD.hostId,{
callback:function(oDataFromServer){
this._bHasArchive=true;
this.showArchives(oDataFromServer,"_$_blog_prev_arch",UD.visitorRank,
this._oOptions.sListType,this._oOptions.sYearPara,this._oOptions.sMonthPara);
}.bind(this)
});
}
if(sArrowId!=null&&true==vIsyear){
}
this._bShowHiding=true;
Effect.BlindDown(sShowId,{duration:0.1,
userCallBack:function(){
this._bShowHiding=false;
}.bind(this)
});
}else{
if(sArrowId!=null&&true==vIsyear){
}
this._bShowHiding=true;
Effect.BlindUp(sShowId,{duration:0.1,
userCallBack:function(){
this._bShowHiding=false;
}.bind(this)
});
}
},
_test4PBL:function(sKey,vValues,sRelValue){
if(!this._oTester4EBL)
return;
switch(sKey){
case"LClass":
this._oTester4EBL.setArray("LClass",vValues);
break;
case"LArch":
this._oTester4EBL.setArray("LArch",vValues);
break;
case"LRcntCom":
this._oTester4EBL.setArray("LRcntCom",vValues);
break;
}
}
}
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.gPrevBlog=null;
function gLoadPrevBlog(sPageName,sServerName,sListType,iBlogRange,iCommentRange,iTotalBlogCount,
sCircleBaseUrl,sVisitorAvatar,sVisitorIP,
iGlobalAllowComment,iVisibleBlogCount,sParamClsId,sEncodeClassId,sParamClsName,
sParamArchDate,sClsElemId,sTestOn)
{
NEBlog.gPrevBlog=new NEBlog.PrevBlog('NEBlog.gPrevBlog',sPageName,{
sTestOn:sTestOn,sServerName:sServerName,sListType:sListType,
iBlogRange:iBlogRange,iCommentRange:iCommentRange,iTotalBlogCount:iTotalBlogCount,
sCircleBaseUrl:sCircleBaseUrl,sVisitorAvatar:sVisitorAvatar,
sVisitorIP:sVisitorIP,iGlobalAllowComment:iGlobalAllowComment,
iVisibleBlogCount:iVisibleBlogCount,sParamClsId:sParamClsId,sEncodeClassId:sEncodeClassId,
sParamClsName:sParamClsName,sParamArchDate:sParamArchDate,
sClsElemId:sClsElemId});
}
NEBlog.PrevBlog=Class.create();
NEBlog.PrevBlog.prototype={
initialize:function(sObjectName,sPageName){
this._oOptions=Object.extend({
sTestOn:'off',
sServerName:null,
sListType:null,
iBlogRange:10,
iCommentRange:10,
iTotalBlogCount:0,
sCircleBaseUrl:'',
sVisitorAvatar:null,
sVisitorIP:null,
iGlobalAllowComment:null,
iVisibleBlogCount:null,
sParamClsId:null,
sEncodeClassId:null,
sParamClsName:null,
sParamArchDate:null,
sClsElemId:null
},arguments[2]||{});
this._sObjectName=sObjectName;
this._sPageName=sPageName;
this._bShowHiding=false;
this._oTester4PB=null;
this._iGid;
this.commentPublishes={};
this._oBlogPager=null;
this._sYearPara=null;
this._sMonthPara=null;
this._oBlogClasses=null;
this._oRelateBlogCircleMap={};
this.prevBlogLeft=null;
this.movieclips={};
this.oBlogList=null;
this._init();
return this;
},
_init:function(){
if(this._oOptions.sTestOn=='on')
this._oTester4PB=new NECtrl.SeleniumTester();
this.oBlogList=new NEBlog.BlogList(this._sObjectName+".oBlogList",{
jstBlogList:jst_blog_prev_list,jstRelCircle:jst_blog_prev_related_circle,hookBlogList:"_$_blog_prev_list",
sBlogListModuleId:"_$$_module_blog_right",sPagerId:"_$$_blog_prev_bottom_menu",
sScrollPageId:"_$$_blog_prev_bottom_menu",sScrollToId:"_$$_blog_prev",sVisitorAvatar:this._oOptions.sVisitorAvatar,iVisitorRank:UD.visitorRank,
sCircleBaseUrl:this._oOptions.sCircleBaseUrl,
iGlobalAllowComment:this._oOptions.iGlobalAllowComment,
oTester:this._oTester4PB,fnTest:this._test4PB.bind(this),
bHasTop:true,aBlogTopIds:NEBlog.gBlogData.aBlogTopIds});
if(this._oOptions.sListType=='class'){
this._changeToBlogList();
this.openBlogsByClass(this._oOptions.sParamClsId,this._oOptions.sParamClsName,this._oOptions.iVisibleBlogCount);
}else if(this._oOptions.sListType=='archive'){
this._changeToBlogList();
var _sParamArchDateStr=this._oOptions.sParamArchDate;
if(this._oOptions.sParamArchDate=='')
_sParamArchDateStr="1900-01";
var _s=_sParamArchDateStr.split("-");
$("blogArchives").style.display="block";
$("_$_blog_prev_class").style.display="none";
this._sYearPara=_s[0];
this._sMonthPara=_s[1];
this.openBlogsByArchive(_sParamArchDateStr+'-01',s[0]+'年'+s[1]+'月',this._oOptions.iVisibleBlogCount);
}else if(this._oOptions.sListType!='feelings'){
this._changeToBlogList();
this.openBlogsAll(this._oOptions.iVisibleBlogCount);
}
this.prevBlogLeft=new NEBlog.PrevBlogLeft(this._sObjectName+".prevBlogLeft",this._sObjectName,this._sPageName,
{sListType:this._oOptions.sListType,
iTotalBlogCount:this._oOptions.iTotalBlogCount,
sEncodeClassId:this._oOptions.sEncodeClassId,
sYearPara:this._sYearPara,
sMonthPara:this._sMonthPara,
sTestOn:this._oOptions.sTestOn});
},
openBlogsAll:function(iBlogCount){
this._changeToBlogList();
this.oBlogList.openBlogsAll(iBlogCount);
},
setBlogViewType:function(){
if(NEBlog.gBlogData.viewType==1){
NEBlog.gBlogData.viewType=2;
$('$_blog_view_type').innerHTML="只看标题";
}
else{
NEBlog.gBlogData.viewType=1;
$('$_blog_view_type').innerHTML="显示摘要";
}
this.oBlogList._oBlogPager.show();
},
openBlogsByClass:function(iClassId,sClassName,iBlogCount){
this._changeToBlogList();
this.oBlogList.openBlogsByClass(iClassId,sClassName,iBlogCount);
},
openBlogsByArchive:function(archDate,archDateStr,iBlogCount){
this._changeToBlogList();
this.oBlogList.openBlogsByArchive(archDate,archDateStr,iBlogCount);
},
_changeToBlogList:function(){
$('batchMngLink').style.display="";
$('feelings_top').style.display="none";
$('_$_feelings_prev_list').style.display="none";
$('_$_blog_prev_list').style.display="";
$('_$$_feelings_prev_bottom_menu').style.display="none";
$('_$$_blog_prev_bottom_menu').style.display="";
},
_test4PB:function(sKey,vValues,sRelValue){
if(!this._oTester4PB)
return;
switch(sKey){
case"Blog":
this._oTester4PB.setArray("Blog",vValues);
break;
case"Com":
this._oTester4PB.set2DArray("Com",vValues,"Blog",sRelValue);
break;
case"Tb":
this._oTester4PB.set2DArray("Tb",vValues,"Blog",sRelValue);
break;
case"Class":
this._oTester4PB.setArray("Class",vValues);
break;
}
}
}
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.UpdownMenu=Class.create();
NEBlog.UpdownMenu.prototype={
initialize:function(sObjectName){
this._oOptions=Object.extend({
bPrev:true,
blogPager:null,
commentRange:10,
visitorAvatar:'',
editorMaxLen:1000,
jsWindowManager:false,
allowComment:-100,
visitorIP:'',
alreadyHasComment:false,
bShowCommentDefault:false,
oComments:null,
openCommentFirstParams:null,
fnOpenBlogsByClass:null,
isHomeModule:false,
oTester:null,
fnTest:null
},arguments[1]||{});
this.objName=sObjectName;
this.showHidding=false;
this.currOpen={};
this.commentPublishes={};
if(this._oOptions.bShowCommentDefault){
this._openComments(this._oOptions.openCommentFirstParams.blogId,this._oOptions.openCommentFirstParams.commentCount,
this._oOptions.openCommentFirstParams.blogTitle,this._oOptions.openCommentFirstParams.blogPermalink);
}
},
getObjectName:function(){
return this.objName;
},
upDownComments:function(sBlogId,commentCount,blogTitle,blogPermalink){
if(this.showHidding==true)
return false;
var oComInput=$('openCom_'+sBlogId);
if(oComInput.value<=0)
this._openComments(sBlogId,commentCount,blogTitle,blogPermalink);
else
this._closeComments(sBlogId);
},
_openComments:function(sBlogId,commentCount,blogTitle,blogPermalink){
this.showHidding=true;
var opened=this.currOpen[sBlogId];
if(opened!=undefined&&opened!=null&&opened!='Com'){
$('open'+opened+'_'+sBlogId).value=0;
this.upDownCssTabBar(sBlogId,opened,0);
this.currOpen[sBlogId]=null;
var id=opened.toLowerCase()+'_'+sBlogId;
$(id).style.display="none";
}
var oComInput=$('openCom_'+sBlogId);
if(oComInput.value==0){
this.upDownCssTabBar(sBlogId,'Com',1);
$('com_'+sBlogId).style.display="";
this.showHidding=false;
$('openCom_'+sBlogId).value=1;
this.currOpen[sBlogId]='Com';
}else{
if(this._oOptions.alreadyHasComment){
oComInput.value=0;
this._initCommentPublish(this._oOptions.oComments,sBlogId,commentCount,blogTitle,blogPermalink);
}else{
BlogBean.getComments(sBlogId,this._oOptions.commentRange,0,{
callback:function(dataFromServer){
oComInput.value=0;
this._initCommentPublish(dataFromServer,sBlogId,commentCount,blogTitle,blogPermalink);
if(this._oOptions.oTester!=null){
if(dataFromServer==null||dataFromServer.length==0){
this._oOptions.fnTest("Com","null");
}else{
var _aCId=dataFromServer.pluck("id");
this._oOptions.fnTest("Com",_aCId,sBlogId);
}
}
}.bind(this)
});
}
}
},
_initCommentPublish:function(oComments,sBlogId,commentCount,blogTitle,blogPermalink){
try{
this.commentPublishes[sBlogId]=new NetEase.CommentPublish(oComments,sBlogId,commentCount,"comShow_"+sBlogId,"comPub_"+sBlogId,
{bCanClose:true,bHasCancelBtn:true,bNeedCheckLogin:false,bNeedCheckRight:true,
iPageSize:this._oOptions.commentRange,iAllowComment:this._oOptions.allowComment,
iHostId:UD.hostId,sHostName:UD.hostName,iVisitorId:UD.visitorId,sVisitorName:UD.visitorName,sVisitorNickname:UD.visitorNickname,
sVisitorAvatar:this._oOptions.visitorAvatar,iVisitorRank:Const.Rank.Owner,iEditorMaxLen:this._oOptions.editorMaxLen,
sVisitorIP:this._oOptions.visitorIP,
iEditorHeight:230,fnOpenCommentEffect:this.openCommentEffect.bind(this),
fnAddComment:this.addNewComment.bind(this),oAddCommentParams:{blogUserId:UD.hostId,blogTitle:blogTitle,blogPermalink:blogPermalink},
fnMoreData:this.getCommentsByPage.bind(this),bSupportDeleteComment:true,
fnAfterAddComment:this.afterAddComment.bind(this),oAfterAddCommentParams:{hostId:UD.hostId,blogId:sBlogId},
fnCloseComments:this._closeComments.bind(this),
sObjName:this.objName+'.commentPublishes[\''+sBlogId+'\']',
fnDelComment:this.delComment,oDelCommentParams:{blogId:sBlogId},isHomeModule:this._oOptions.isHomeModule,
fnAfterDelComment:this.afterDelComment.bind(this),oAfterDelCommentParams:{blogId:sBlogId},
bHasCancelBtn:!this._oOptions.bShowCommentDefault
});
}catch(e){
alert(e);
}
},
_closeComments:function(sBlogId){
this.upDownCssTabBar(sBlogId,'Com',0);
$('com_'+sBlogId).style.display="none";
this.showHidding=false;
$('openCom_'+sBlogId).value=0;
this.currOpen[sBlogId]=null;
if(this._oOptions.alreadyHasComment){
Element.scrollTo('_$$_blog_perma_menu');
}else{
Element.scrollTo('blog_'+sBlogId);
}
},
openCommentEffect:function(sBlogId,initFunc){
this.showHidding=true;
this.upDownCssTabBar(sBlogId,'Com',1);
$('com_'+sBlogId).style.display="block";
if(initFunc!=null)
initFunc();
this.showHidding=false;
$('openCom_'+sBlogId).value=1;
this.currOpen[sBlogId]='Com';
},
upDownShare:function(sBlogId,sTrackbackUrl,sPermalink){
if(this.showHidding==true)
return false;
if($('openShare_'+sBlogId).value<=0){
this._openShare(sBlogId,sTrackbackUrl,sPermalink);
}else{
this.closeShare(sBlogId);
}
},
_openShare:function(sBlogId,sTrackbackUrl,sPermalink){
this.showHidding=true;
var opened=this.currOpen[sBlogId];
if(opened!=undefined&&opened!=null&&opened!='Share'){
$('open'+opened+'_'+sBlogId).value=0;
this.upDownCssTabBar(sBlogId,opened,0);
this.currOpen[sBlogId]=null;
var id=opened.toLowerCase()+'_'+sBlogId;
$(id).style.display="none";
}
var oShareInput=$('openShare_'+sBlogId);
if(oShareInput.value==-1){
BlogBean.getTrackbacks(sBlogId,{
callback:function(dataFromServer){
var data={tbs:dataFromServer,tbUrl:sTrackbackUrl,link:sPermalink,blogId:sBlogId,
hostName:UD.hostName,objName:this.objName,visitorName:UD.visitorName,
hostId:UD.hostId,isIE:isIE};
$('share_'+sBlogId).innerHTML=jst_blog_share.processUseCache(data);
oShareInput.value=0;
if(this._oOptions.oTester!=null){
if(dataFromServer==null||dataFromServer.length==0){
this._oOptions.fnTest("Tb","null");
}else{
var _aTId=dataFromServer.pluck("id");
this._oOptions.fnTest("Tb",_aTId,sBlogId);
}
}
}.bind(this)
});
}
this.upDownCssTabBar(sBlogId,'Share',1);
$('share_'+sBlogId).style.display="block";
this.showHidding=false;
oShareInput.value=1;
this.currOpen[sBlogId]='Share';
},
closeShare:function(sBlogId){
this.showHidding=true;
this.upDownCssTabBar(sBlogId,'Share',0);
$('share_'+sBlogId).style.display="none";
this.showHidding=false;
$('openShare_'+sBlogId).value=0;
this.currOpen[sBlogId]=null;
},
upDownCssTabBar:function(sBlogId,sName,bOpen){
var opened=this.currOpen[sBlogId];
if(!opened){
var sDivId=sName+"Div_"+sBlogId;
Element.addClassName(sDivId,"s");
Element.addClassName('cssTabBar_'+sBlogId,"bdb");
}else{
if(bOpen==1){
if(sName!=opened){
Element.removeClassName(opened+"Div_"+sBlogId,"s");
Element.addClassName(sName+"Div_"+sBlogId,"s");
}
}else{
var sDivId=sName+"Div_"+sBlogId;
Element.removeClassName(sDivId,"s");
Element.removeClassName('cssTabBar_'+sBlogId,"bdb");
}
}
},
getCommentsByPage:function(sBlogId,limit,offset,postPageCommentFunc){
BlogBean.getComments(sBlogId,limit,offset,{
callback:function(dataFromServer){
postPageCommentFunc(dataFromServer);
if(this._oOptions.oTester!=null){
if(dataFromServer==null||dataFromServer.length==0){
this._oOptions.fnTest("Com","null");
}else{
var _aCId=dataFromServer.pluck("id");
this._oOptions.fnTest("Com",_aCId,sBlogId);
}
}
}.bind(this)
});
},
addNewComment:function(oNewComment,oParams,fnPostAddComment){
oNewComment.blogId=oNewComment.parentId;
oNewComment.blogUserId=oParams.blogUserId;
oNewComment.blogTitle=oParams.blogTitle;
var _iFilterType=0;
var _oValcodeDiv=$("valcode"+oNewComment.parentId);
var _sValcode;
if(_oValcodeDiv!=null)
_sValcode=_oValcodeDiv.value;
else
_sValcode=-1;
if(UD.visitorRank<Const.Rank.Friend){
var _bMatch=checkOtherSiteUrl(oNewComment.content);
if(_bMatch){
alert(Local.Message.Blog[0]);
fnPostAddComment(null);
return false;
}
}
BlogBean.addComment(oNewComment,_iFilterType,_sValcode,{
callback:function(oDataFromServer){
fnPostAddComment(oDataFromServer);
},
errorHandler:function(errorString,ex){
if(captchaWarning(ex,"$$_comsubmithint"+oNewComment.blogId)){
fnPostAddComment(null);
return false;
}
var _iFilter=filterWarning(ex,false,"你发表的评论或日志本身包含敏感关键字，不允许发布！");
if(_iFilter==-1){
fnPostAddComment(null);
return false;
}
fnPostAddComment(null);
}
});
},
afterAddComment:function(oNewComment,oParams){
var _oComCount=$("comCount_"+oParams.blogId);
var _iCount=0;
if(_oComCount!=null){
_iCount=_oComCount.innerHTML;
_iCount=parseInt(_iCount)+1;
_oComCount.innerHTML=_iCount;
}
if(this._oOptions.blogPager!=null){
var _oItem=new Object();
_oItem.id=oParams.blogId;
_oItem.commentCount=_iCount;
this._oOptions.blogPager.updateOne(_oItem,true);
}
Element.scrollTo("ComDiv_"+oParams.blogId);
var loc=window.location.href;
if(loc.indexOf('/blog/static/')>0){
var commentAnchor=loc.indexOf('#comment');
if(commentAnchor>0){
loc=loc.substring(0,commentAnchor);
}
var comId="";
if(oNewComment!=null)
comId=oNewComment.id;
window.location.href=loc+"#comment="+comId;
}
},
delComment:function(sCommentId,oParams,fnPostDelComment){
$('delcomm_'+sCommentId).onclick="";
$('delcomm_'+sCommentId).disabled=true;
BlogBean.deleteComment(sCommentId,oParams.blogId,{
callback:function(oDataFromServer){
fnPostDelComment(oDataFromServer,sCommentId);
}
});
},
afterDelComment:function(oParams){
var _iCount=parseInt($("comCount_"+oParams.blogId).innerHTML)-1;
$("comCount_"+oParams.blogId).innerHTML=_iCount;
if(this._oOptions.blogPager!=null){
var _oItem=new Object();
_oItem.id=oParams.blogId;
_oItem.commentCount=_iCount;
this._oOptions.blogPager.updateOne(_oItem,true);
}
},
openBlog:function(permalink,e){
if(isIE)
Event.stop(event);
else
Event.stop(e);
if(this._oOptions.bPrev)
window.open(UD.hostPath+"/"+permalink+"/");
else
window.open(UD.hostPath+"/"+permalink+"/edit/");
},
searchTagObj:function(oTag){
BlogBean.getHostAllTags({
callback:function(oTags){
var _oUserTagList=oTags;
this._searchTagObjCb(oTag,_oUserTagList);
}.bind(this)
});
return false;
},
_searchTagObjCb:function(oTag,oUserTagList){
var _oTag=getTagObjByTagname(oTag,-1,oUserTagList);
if(_oTag!=null)
window.open("http://blog.163.com/search/?t=tag&q="+encodeURIComponent(_oTag.tagName)+"&o=blog");
return false;
},
openSameClass:function(iClassId,sClassName){
if(this._oOptions.fnOpenBlogsByClass!=null){
if(NEBlog.gBlogData.aClassList==null)
BlogBean.getBlogClasses(UD.hostId,{
callback:function(dataFromServer){
this._showSameClass(dataFromServer,iClassId,sClassName);
}.bind(this)
});
else
this._showSameClass(NEBlog.gBlogData.aClassList,iClassId,sClassName);
}else{
if(this._oOptions.bPrev)
window.open(UD.hostPath+"/blog/?clsId="+iClassId+"&class=");
else
window.open(UD.hostPath+"/blog/edit/?p1=cls&p2="+iClassId);
}
},
_showSameClass:function(classes,iClassId,sClassName){
NEBlog.gBlogData.aClassLis=classes;
var _iBlogCount=0;
for(var i=0;i<classes.length;i++){
if(classes[i].id==iClassId){
if(this._oOptions.bPrev){
if(UD.visitorRank>=Const.Rank.Owner)
_iBlogCount=classes[i].publishedBlogCount;
else if(UD.visitorRank>=Const.Rank.Friend)
_iBlogCount=classes[i].friendBlogCount+classes[i].publicBlogCount;
else if(UD.visitorRank>=Const.Rank.Anonymous)
_iBlogCount=classes[i].publicBlogCount;
}else
_iBlogCount=classes[i].blogCount;
break;
}
}
if(this._oOptions.fnOpenBlogsByClass!=null){
this._oOptions.fnOpenBlogsByClass(iClassId,sClassName,_iBlogCount);
}
},
showShareDiv:function(id,permalink){
var url='http://'+UD.hostName+'.blog.163.com/'+permalink;
if(jsWindowManager==null)
jsWindowManager=new NetEase.JSWindowManager();
if(g_shareDiv==null){
g_shareDiv=new NetEase.ShareByEmail({aId:'share'+id,jsWindowManager:jsWindowManager,visitorName:UD.visitorName,type:'blog',url:url});
}else{
g_shareDiv.refreshNew({aId:'share'+id,type:'blog',url:url});
}
},
changeFont:function(sElemId,size){
if(size==1){
if(Element.hasClassName(sElemId,"g_t_midle"))
Element.removeClassName(sElemId,"g_t_midle");
Element.addClassName(sElemId,"g_t_large");
$("bigfont").style.display="none";
$("bigfont_off").style.display="inline";
$("middlefont").style.display="inline";
$("middlefont_off").style.display="none";
$("smallfont").style.display="inline";
$("smallfont_off").style.display="none";
}else if(size==2){
if(Element.hasClassName(sElemId,"g_t_large"))
Element.removeClassName(sElemId,"g_t_large");
Element.addClassName(sElemId,"g_t_midle");
$("bigfont").style.display="inline";
$("bigfont_off").style.display="none";
$("middlefont").style.display="none";
$("middlefont_off").style.display="inline";
$("smallfont").style.display="inline";
$("smallfont_off").style.display="none";
}else if(size==3){
if(Element.hasClassName(sElemId,"g_t_midle"))
Element.removeClassName(sElemId,"g_t_midle");
if(Element.hasClassName(sElemId,"g_t_large"))
Element.removeClassName(sElemId,"g_t_large");
$("bigfont").style.display="inline";
$("bigfont_off").style.display="none";
$("middlefont").style.display="inline";
$("middlefont_off").style.display="none";
$("smallfont").style.display="none";
$("smallfont_off").style.display="inline";
}
},
copyUrl:function(urlElemId,statusElemId,vAlert){
if(isIE){
if(copyText(urlElemId)){
$(statusElemId).style.display='block';
this.gStatusElemId=statusElemId;
window.setTimeout(this.fadeStatus.bind(this),5000);
}
}else{
if(vAlert==1){
alert("你的浏览器安全设置不允许自动执行复制操作，请选中文本使用键盘(Ctrl+C)复制！");
}
var obj=$(urlElemId);
obj.focus();
obj.select();
}
},
fadeStatus:function(){
$(this.gStatusElemId).style.display='none';
}
}
if(NetEase==undefined){
var NetEase={};
}
var g_shareDiv=null;
NetEase.ShareByEmail=Class.create();
NetEase.ShareByEmail.prototype={
initialize:function(){
this.options=Object.extend({
aId:"",
jsWindowManager:null,
visitorName:"",
type:"blog",
content:"",
url:"",
title:""
},arguments[0]||{});
email_index=0;
subZone=null;
this._loadInfo();
},
_loadInfo:function(){
SubscriptionBean.getEmailLimit(this._load.bind(this));
},
_load:function(emailLimit){
this.email_index=0;
if(this.options.jsWindowManager==null)
this.options.jsWindowManager=new NetEase.JSWindowManager();
if(this.options.jsWindowManager.existWindow('shareByEmailDiv')){
this.subZone=this.options.jsWindowManager.getWindow('shareByEmailDiv');
}
else
this.subZone=this.options.jsWindowManager.createWindow('shareByEmailDiv',
{height:'200',
className:'g_win_8',
title:'分享给博友',
onTop:true,
notKeepPos:true,
systemBarClassName:'titlebar'
});
this.subZone.panel.innerHTML=this._share_jst.processUseCache({visitorName:this.options.visitorName,type:this.options.type,emailLimit:emailLimit});
this.options.jsWindowManager.showWindow('shareByEmailDiv');
if(this.options.visitorName!=null&&this.options.visitorName!=""){
$('email_0_wrap').innerHTML=this._email_jst.processUseCache({index:this.email_index});
this.email_index++;
if(document.all){
if($('moreEamil'))
$('moreEamil').attachEvent("onclick",this._moreEmail.bind(this));
if($('deleteEmailBut_0'))
$('deleteEmailBut_0').attachEvent("onclick",this._deleteEmail.bind(this,0));
if($('cancleShareButn'))
$('cancleShareButn').attachEvent("onclick",this._close.bind(this));
if($('shareButn'))
$('shareButn').attachEvent("onclick",this._share.bind(this));
}else{
if($('moreEamil'))
$('moreEamil').onclick=this._moreEmail.bind(this);
if($('deleteEmailBut_0'))
$('deleteEmailBut_0').onclick=this._deleteEmail.bind(this,0);
if($('cancleShareButn'))
$('cancleShareButn').onclick=this._close.bind(this);
if($('shareButn'))
$('shareButn').onclick=this._share.bind(this);
}
if($('emailAddr_0')){
$('emailAddr_0').focus();
}
}
},
refreshNew:function(params){
this.options=Object.extend(
{
aId:this.options.aId,
jsWindowManager:this.options.jsWindowManager,
visitorName:this.options.visitorName,
type:this.options.type,
content:this.options.content,
url:this.options.url,
title:this.options.title
},params||{}
);
email_index=0;
this._loadInfo();
},
_close:function(){
this.options.jsWindowManager.hiddenWindow('shareByEmailDiv');
},
_moreEmail:function(){
var emailDivWrap=document.createElement('div');
emailDivWrap.id='email_'+this.email_index+'_wrap'
emailDivWrap.innerHTML=this._email_jst.processUseCache({index:this.email_index});
$('shareInfo').insertBefore(emailDivWrap,$('fakeDiv'));
if($('emailAddr_'+this.email_index)){
$('emailAddr_'+this.email_index).focus();
}
if(document.all){
$('deleteEmailBut_'+this.email_index).attachEvent("onclick",this._deleteEmail.bind(this,this.email_index));
}else{
$('deleteEmailBut_'+this.email_index).onclick=this._deleteEmail.bind(this,this.email_index);
}
this.email_index++;
return false;
},
_deleteEmail:function(index){
Element.removeChild($('email_'+index+'_wrap'));
return false;
},
_share:function(){
var emailDivs=document.getElementsByName("emailClass");
var emailAddrs="";
for(var i=0;i<emailDivs.length;i++){
var index=emailDivs[i].id.substr(6,7);
var emailPre=$F('emailAddr_'+index);
emailPre=Trim(emailPre);
if(emailPre==null||emailPre=='')
continue;
var emailPostDiv=$('emailPostfix_'+index);
var emailPost=emailPostDiv[emailPostDiv.selectedIndex].value;
var email=Trim(emailPre)+Trim(emailPost);
if(!checkMail(email)){
new NetEase.StatusBar("邮件格式"+email+"不正确",{
barId:'shareErrorHint',imgsrc:Const.STDomain+'/style/common/ico_alert.gif'});
return;
}
if(i==0)
emailAddrs=email;
else
emailAddrs+=","+email;
}
if(emailAddrs==""){
new NetEase.StatusBar("请输入博友邮件",{
barId:'shareErrorHint',imgsrc:Const.STDomain+'/style/common/ico_alert.gif'});
return;
}
var msg={};
msg.type=this.options.type;
if(this.options.type=='blog'){
var blogId=this.options.aId.substr("share".length,this.options.aId.length);
this.options.content=$('blogtext_'+blogId).innerHTML;
if($('blogtitle_'+blogId))
this.options.title=$('blogtitle_'+blogId).innerHTML;
if(UD.status=='prev')
var blogTmp=NEBlog.gPrevBlog;
else
var blogTmp=NEBlog.gEditBlogAll;
if(blogTmp!=null){
var _oCachedBlogs=blogTmp.oBlogList._oBlogPager.getAllCachedData();
var _oBlog=null;
if(_oCachedBlogs!=null){
for(var i=0;i<_oCachedBlogs.length;i++){
if(_oCachedBlogs[i].id==blogId){
_oBlog=_oCachedBlogs[i];
break;
}
}
}
this.options.content=_oBlog.content;
this.options.title=_oBlog.title;
}
}
msg.content=this.options.content;
msg.url=this.options.url;
msg.title=this.options.title;
msg.emailTitle=$F('title');
msg.contentHead=$F('content');
SubscriptionBean.ShareByEmail(emailAddrs,msg,{
callback:(function(returndata){
this._shareCB(returndata,emailAddrs);
}).bind(this),
errorHandler:(function(errorString,ex){
if(ex.type=='NoEmailException'){
new NetEase.StatusBar("超过每天发送邮件限制",{
barId:'shareErrorHint',
imgsrc:Const.STDomain+'/style/common/ico_alert.gif'});
}else{
filterWarning(ex,false);
}
}).bind(this)
});
},
_shareCB:function(returndata,emailAddrs){
if(returndata>=0){
this.subZone.panel.innerHTML=this._share_succ_jst.processUseCache({title:this.options.title,emailAddrs:emailAddrs,emailLimit:returndata,type:this.options.type});
if(document.all){
if($('cancleShareButn'))
$('cancleShareButn').attachEvent("onclick",this._close.bind(this));
if($('newShareButn'))
$('newShareButn').attachEvent("onclick",this._load.bind(this,returndata));
}else{
if($('cancleShareButn'))
$('cancleShareButn').onclick=this._close.bind(this);
if($('newShareButn'))
$('newShareButn').onclick=this._load.bind(this,returndata);
}
}else{
new NetEase.StatusBar("发信出错",{
barId:'shareErrorHint',imgsrc:Const.STDomain+'/style/common/ico_alert.gif'});
}
},
divTemplate:null,
_emailTemplate:null,
_shareSuccTemplate:null,
_share_jst:new String(' \
  {if visitorName == null || visitorName == ""} \
  <div style="padding:20px 0px 0px 41px">请您先<a href="#" onclick="showLoginDlg(\'blog.163.com\');return false;">&nbsp;登陆&nbsp;</a>博客再发送给博友</div> \
  {else} \
       <div class="content"> \
        <div class="case" id="shareInfo" > \
    <div id="email_0_wrap"> \
    </div> \
    <div style="display:none" id="fakeDiv"></div> \
   </div> \
   <div id="moreEamilWrap" class="addbtn"><span class="clr02">你今天还可以发${emailLimit}封邮件</span><span id="moreEamil" class="a_a d_d"  >继续添加</span></div> \
   <div class="send"> \
          <div class="g_t_left g_h_20"><label>邮件标题:</label>&nbsp;&nbsp; \
               <input id="title" class="g_w_80" size=52 maxLength=60 value="你的博友${visitorName}推荐精彩{if type=="blog"}日志{elseif type=="video"}视频{elseif type=="album"}相册{else}相片{/if}给你"/> \
    </div> \
          <div class="g_t_left g_c_vmgin"><label class="g_t_top">正　　文:</label>&nbsp;&nbsp; \
               <textarea id="content" class="g_h_105 g_w_80"  rows="5" cols="50" onpropertychange="textareaLimit(this, 1000)" \
               >我最近看到的一{if type=="blog"}篇日志{elseif type=="video"}个视频{elseif type=="album"}本相册{else}张相片{/if}，蛮精彩的，你也看看吧。</textarea> \
          </div> \
          <div class="g_t_center"> \
           <div style="padding-left:41px;" id="shareErrorHint"></div> \
           <div> \
            <input type="button" class="btncm btnok" value="提　交" id="shareButn" />\
            <span>&nbsp;&nbsp;</span> \
            <input type="button" class="btncm btncc" value="取　消" id="cancleShareButn" /> \
           </div> \
          </div> \
         </div> \
  </div> \
  {/if} \
 '),
_email_jst:new String(' \
   <div class="item"> \
   <input type="hidden" name="emailClass" id="email_${index}"> \
           <label>博友邮箱:</label>&nbsp;&nbsp; \
          <input id="emailAddr_${index}" class="g_w_25 bd01"/> \
          &nbsp;&nbsp; \
     <select id="emailPostfix_${index}" class="g_w_25"> \
     <option value="@163.com">@163.com</option> \
     <option value="@126.com">@126.com</option> \
     <option value="@188.com">@188.com</option> \
     <option value="@vip.163.com">@vip.163.com</option> \
     </select> \
          &nbsp;&nbsp; \
            <span class="a_a d_d"  id="deleteEmailBut_${index}">删除</span> \
         </div>'),
_share_succ_jst:new String(' \
       <div id="shareInfo" class="succ"> \
   <p>{if type=="blog"}日志{elseif type=="video"}视频{elseif type=="album"}相册{else}相片{/if}"${title}"已成功发送给:</p> \
   <p class="g_w_100 g_t_wrap">${emailAddrs}</p> \
         <div class="g_h_30 g_t_center g_c_mvdn"> \
          <input type="button" class="btncm btnok" value="分享给更多博友" id="newShareButn" />\
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>\
          <input type="button" class="btncm btncc" value="关　闭"id="cancleShareButn" /> \
         </div> \
       </div>')
}
if(NetEase==undefined){
var NetEase={};
}
NetEase.ListModule=Class.create();
NetEase.ListModule.prototype={
initialize:function(){
this.options=Object.extend(
{
readOnly:false,
firstLoad:true,
loadParam:{},
loadFunc:Prototype.emptyFunction,
id:'id',
props:[],
propsFilter:[],
positions:[],
propsClass:[],
attach:{},
keepLast:false,
presentParam:{},
presentTemplate:false,
presentShowId:null,
alertMsg:'关键词不能为空!',
disableFunc:Prototype.emptyFunction,
enableFunc:Prototype.emptyFunction,
beforeAjaxFunc:Prototype.emptyFunction,
afterAjaxFunc:Prototype.emptyFunction,
afterCancelFunc:Prototype.emptyFunction,
saveAddFunc:Prototype.emptyFunction,
saveEditFunc:Prototype.emptyFunction,
saveDelFunc:Prototype.emptyFunction,
dwrAlert:false,
allowDrag:false,
setDragOnlyClass:'setDragOnlyClass',
handleClass:'handleClass',
saveSortBar:'saveSortBar',
saveSortFunc:Prototype.emptyFunction,
objName:null
},arguments[0]||{});
this.ajaxType=0;
this.stat='normal';
this.listData=[];
this._load();
},
_load:function(){
this._disableAll();
if(this.options.firstLoad){
this.options.beforeAjaxFunc();
this.options.loadFunc(this.options.loadParam,this._afterLoad.bind(this));
}
else{
this._present(this.listData);
}
},
_afterLoad:function(dataList){
this.listData=[];
if(dataList!=null){
dataList.each(this._iterator.bind(this));
}
this._present(this.listData);
if(!this.options.readOnly)
this._enableAll();
this.ajaxType=1;
this.options.afterAjaxFunc();
},
_iterator:function(element){
var key=this.options.id;
element.attach=this.options.attach;
element.id=element[key];
this.listData.push(element);
},
_present:function(dataList){
var data={param:this.options.presentParam,itemList:dataList,objName:this.options.objName};
if(this.options.presentTemplate){
var result=this.options.presentTemplate.process(data);
if(this.options.presentShowId){
$(this.options.presentShowId).innerHTML=result;
if(this.options.allowDrag){
var updateCallback=this._sortUpdate.bind(this);
Sortable.create('$$_item_list',{dropOnEmpty:true,tag:'div',containment:['$$_item_list'],zindex:50,handle:this.options.handleClass,
only:this.options.setDragOnlyClass,constraint:false,clone:false,overlap:'vertical',format:null,allowVerticalScroll:true,
onUpdate:updateCallback
});
this.orginSeqString=decodeURIComponent(Sortable.serialize('$$_item_list')).replace(/\$\$_item_/ig,'');
}
}
}
},
_sortUpdate:function(){
var seqString=decodeURIComponent(Sortable.serialize('$$_item_list')).replace(/\$\$_item_/ig,'');
this._sortListData(seqString);
$(this.options.saveSortBar).style.display=(seqString!=this.orginSeqString)?'block':'none';
if(seqString!=this.orginSeqString){
this._disableAll();
}else{
this._enableAll();
}
},
_sortListData:function(seqString){
if(seqString==null)
return;
var seqs=seqString.split(',');
if(seqs.length==0)
return;
var tempData=[];
for(var i=0;i<seqs.length;i++){
var element=this.listData.detect(this._detectItr.bind(this,seqs[i]));
tempData.push(element);
}
this.listData=tempData;
},
cancelSort:function(){
if(this.options.allowDrag){
this._sortListData(this.orginSeqString);
this._present(this.listData);
$(this.options.saveSortBar).style.display='none';
this._enableAll();
}
},
saveSort:function(){
if(this.options.allowDrag){
var seqString=decodeURIComponent(Sortable.serialize('$$_item_list')).replace(/\$\$_item_/ig,'');
this.options.saveSortFunc(seqString,this.options.attach,this._afterSaveSort.bind(this,seqString));
}
},
_afterSaveSort:function(seqString,stat){
if(stat){
this.orginSeqString=seqString;
if(this.options.dwrAlert)
this.options.dwrAlert("保存顺序成功!","ok");
$(this.options.saveSortBar).style.display='none';
this._enableAll();
}else{
if(this.options.dwrAlert)
this.options.dwrAlert("保存顺序失败!","error");
}
},
_disableAll:function(){
this.options.disableFunc();
},
_enableAll:function(){
this.options.enableFunc();
},
_vaildPropFunc:function(targetId,objDstId){
if($(targetId).value.length>0){
$(objDstId).disabled=false;
}else{
$(objDstId).disabled=true;
}
},
addItem:function(){
this._disableAll();
var _parentDiv=$('$$_item_base').parentNode;
var _toAddDiv=$('$$_item_to_add');
if(_toAddDiv)
Element.removeChild(_toAddDiv);
var cls="list_box_content1";
var _newDiv=document.createElement("div");
_newDiv.id="$$_item_in_add";
_newDiv.className=cls;
var _table=document.createElement("table");
var _tbody=document.createElement("tbody");
var _tr=document.createElement("tr");
var _td;
var posCode=-1;
var propCode=-1;
var key,filter,size;
for(var i=0;i<this.options.positions.length;i++){
_td=document.createElement("td");
_td.className=this.options.propsClass[i];
posCode=this.options.positions[i];
if(posCode==-1){
_td.innerHTML='&nbsp;';
}else if(posCode==0){
propCode++;
key=this.options.props[propCode];
filter=this.options.propsFilter[propCode];
_td.innerHTML='<input type="text" class="bd01 g_w_90 g_c_input g_htc_focus" id="$$_prop_'
+key+'" maxlength="'+filter
+'" onkeyup="'+
this.options.objName+'._vaildPropFunc(\'$$_prop_'+this.options.props[0]+'\',\'$$_prop_submit\');" />';
}else if(posCode==1){
_td.innerHTML='<input type="button" class="g_c_button bd01 butn c05" id="$$_prop_submit" value="确 定" onclick="'+this.options.objName+'._updateAddItem();" />';
}else if(posCode==2){
_td.innerHTML='<input type="button" class="g_c_button bd01 butn c05" id="$$_prop_cancel" value="取 消" onclick="'+this.options.objName+'._cancelEditFunc();" />';
}
_tr.appendChild(_td);
}
_tbody.appendChild(_tr);
_table.appendChild(_tbody);
_newDiv.appendChild(_table);
_parentDiv.insertBefore(_newDiv,$('$$_item_base').nextSibling);
if(this.options.props[0])
$('$$_prop_'+this.options.props[0]).focus();
$('$$_prop_submit').disabled=true;
this.stat='add';
},
_updateAddItem:function(){
if(Trim($F('$$_prop_'+this.options.props[0]))==""){
if(this.options.dwrAlert)
this.options.dwrAlert(this.options.alertMsg,"info");
else
alert(this.options.alertMsg);
return;
}
element={};
element.attach=this.options.attach;
for(var i=0;i<this.options.props.length;i++){
var key=this.options.props[i];
var value=Trim($F('$$_prop_'+this.options.props[i]));
element[key]=value;
}
this.options.beforeAjaxFunc();
this.options.saveAddFunc(element,this._afterSaveAddFunc.bind(this,element));
},
_afterSaveAddFunc:function(element,id){
var saveState=0;
if(id>'0'){
element.id=id;
this.listData.unshift(element);
this._present(this.listData);
this._enableAll();
saveState=1;
this.stat='normal';
if(this.options.dwrAlert)
this.options.dwrAlert("增加成功!","ok");
}else{
if(this.options.dwrAlert)
this.options.dwrAlert("增加失败!","info");
else
alert("增加失败!");
}
this.ajaxType=2;
this.options.afterAjaxFunc(element,saveState);
},
editItem:function(id,obj){
if(obj&&obj.disabled)
return false;;
var _div=$('$$_item_'+id);
if(!_div)
return false;
this._disableAll();
_div.innerHTML="";
var element=this.listData.detect(this._detectItr.bind(this,id));
var _td;
var posCode=-1;
var propCode=-1;
var key,value,filter,size;
var _table=document.createElement("table");
var _tbody=document.createElement("tbody");
var _tr=document.createElement("tr");
for(var i=0;i<this.options.positions.length;i++){
_td=document.createElement("td");
_td.className=this.options.propsClass[i];
posCode=this.options.positions[i];
if(posCode==-1){
_td.innerHTML='&nbsp;';
}else
if(posCode==0){
propCode++;
key=this.options.props[propCode];
value=element[key];
if(value==null)
value='';
value=value.escape();
filter=this.options.propsFilter[propCode];
_td.innerHTML='<input type="text" class="bd01 g_w_90 g_c_input g_htc_focus" id="$$_prop_'
+key+'" maxlength="'+filter
+'" value="'+value+'" onkeyup="'+
this.options.objName+'._vaildPropFunc(\'$$_prop_'+this.options.props[0]+'\',\'$$_prop_submit\');" />';
}else
if(posCode==1){
_td.innerHTML='<input type="button" class="g_c_button bd01 butn c05" id="$$_prop_submit" value="确 定" onclick="'+this.options.objName+'._updateEditFunc(\''+id+'\');" />';
}else
if(posCode==2){
_td.innerHTML='<input type="button" class="g_c_button bd01 butn c05" id="$$_prop_cancel" value="取 消" onclick="'+this.options.objName+'._cancelEditFunc();" />';
}
_tr.appendChild(_td);
}
_tbody.appendChild(_tr);
_table.appendChild(_tbody);
_div.appendChild(_table);
if(this.options.props[0]){
$('$$_prop_'+this.options.props[0]).focus();
$('$$_prop_'+this.options.props[0]).select();
}
$('$$_prop_submit').disabled=true;
this.stat='edit';
return false;
},
_detectItr:function(id,element){
if(element.id==id)
return true;
return false;
},
_updateEditFunc:function(id){
if(Trim($F('$$_prop_'+this.options.props[0]))==""){
if(this.options.dwrAlert)
this.options.dwrAlert(this.options.alertMsg,"info");
else
alert(this.options.alertMsg);
return;
}
var element={};
var oldElement;
element.id=id;
element.attach=this.options.attach;
for(var i=0;i<this.options.props.length;i++){
var key=this.options.props[i];
var value=Trim($F('$$_prop_'+this.options.props[i]));
element[key]=value;
if(this.options.keepLast){
if(!element.oldElement||!oldElement){
element.oldElement={};
oldElement=this.listData.detect(this._detectItr.bind(this,id));
}
element.oldElement[key]=oldElement[key];
}
}
this.options.beforeAjaxFunc();
this.options.saveEditFunc(element,this._afterSaveEditFunc.bind(this,element));
},
_afterSaveEditFunc:function(element,stat){
var saveState=0;
if(stat){
this.listData.each(this._updateIter.bind(this,element));
this._present(this.listData);
this._enableAll();
saveState=1;
this.stat='normal';
if(this.options.dwrAlert)
this.options.dwrAlert("更新成功!","ok");
}else{
if(this.options.dwrAlert)
this.options.dwrAlert("更新失败!","error");
else
alert("更新失败!");
}
this.ajaxType=3;
this.options.afterAjaxFunc(element,saveState);
},
_updateIter:function(element,e,index){
if(element.id==e.id){
Object.extend(this.listData[index],element);
}
},
_cancelEditFunc:function(){
this._present(this.listData);
this._enableAll();
this.stat='normal';
this.options.afterCancelFunc();
},
deleteItem:function(id,obj){
if(obj&&obj.disabled)
return false;
var promt=window.confirm("是否确定删除？");
if(promt==true){
this._disableAll();
var element=this.listData.detect(this._detectItr.bind(this,id));
this.options.beforeAjaxFunc();
this.options.saveDelFunc(element,this._afterSaveDelFunc.bind(this,id));
}
return false;
},
_afterSaveDelFunc:function(id,stat){
var saveState=0;
if(stat){
this.listData=this.listData.reject(this._rejectIter.bind(this,id));
this._present(this.listData);
saveState=1;
if(this.options.dwrAlert)
this.options.dwrAlert("删除成功!","ok");
}else{
if(this.options.dwrAlert)
this.options.dwrAlert("删除失败!","error");
else
alert("删除失败!");
}
this._enableAll();
this.ajaxType=4;
this.options.afterAjaxFunc(id,saveState);
},
sortBy:function(type){
this._disableAll();
if(!this.innerSort)
this.innerSort={};
if(this.innerSort[type]&&this.innerSort[type]=="+"){
this.listData=this.listData.sort(this._sortByIter.bind(this,type));
this.listData=this._reverse(this.listData);
this.innerSort[type]="-";
}else{
this.listData=this.listData.sort(this._sortByIter.bind(this,type));
this.innerSort[type]="+";
}
this._present(this.listData);
this._enableAll();
},
_sortByIter:function(type,s1,s2){
if(s1[type]instanceof String||s2[type]instanceof String)
return(s1[type]+'').localeCompare((s2[type]+''));
return s1[type]<s2[type]?-1:s1[type]>s2[type]?1:0;
},
_reverse:function(listData){
var tempData=[];
for(var i=0;i<listData.length;i++)
tempData.unshift(listData[i]);
return tempData;
},
_rejectIter:function(id,element){
if(id==element.id)
return true;
return false;
},
getAjaxType:function(){
return this.ajaxType;
}
}
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.gEditFeelings=null;
function gLoadEditFeelings(sFeelingsListModuleId,iFeelingsCount,
sType,sCid,iComCnt){
NEBlog.gEditFeelings=new NEBlog.EditFeelings('NEBlog.gEditFeelings',{
iFeelingsCount:iFeelingsCount,sFeelingsListModuleId:sFeelingsListModuleId});
if(sType=='feelings'){
NEBlog.gEditFeelings.openFeelingsCards(sCid,iComCnt);
$('aFeelingsCard').className+=" selitm c07 g_t_bold";
window.$$_last_select=$('aFeelingsCard');
}
}
NEBlog.EditFeelings=Class.create();
NEBlog.EditFeelings.prototype={
initialize:function(sObjectName){
this._oOptions=Object.extend({
iFeelingsCount:0,
sFeelingsListModuleId:''
},arguments[1]||{});
this._sObjectName=sObjectName;
this.oFeelingsList=null;
this.___length=0;
this.__showMood=[1,3,6,9,23,48];
this.__lastMood=0;
this._init();
return this;
},
_init:function(){
this.oFeelingsList=new NEBlog.FeelingsList(this._sObjectName+".oFeelingsList",{bPrev:false,iFeelingsCount:this._oOptions.iFeelingsCount,
jstFeelingsList:jst_feelings_edit,hookFeelingsList:this._oOptions.sFeelingsListModuleId,
sFeelingsListModuleId:this._oOptions.sFeelingsListModuleId,sPagerId:"feelingsNav2",
sScrollPageId:"feelingsNav2",sScrollToId:"_$$_blog_edit_all",iVisitorRank:UD.visitorRank,
sUpdownMenuName:this._sObjectName+'.oFeelingsList.updownMenu'
});
},
openFeelingsCards:function(sCid,iComCnt){
this._changeToFeelingsList();
this.oFeelingsList.openFeelingsCards(sCid,iComCnt,this._oOptions.iFeelingsCount);
},
_changeToFeelingsList:function(){
$('batchMngLink').style.display="none";
$('feelings_top').style.display="";
$('_$_feelings_edit_list').style.display="";
$('_$_blog_edit_list').style.display="none";
$('feelingsNav2').style.display="";
$('blogPageNav2').style.display="none";
}
}
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.FeelingsList=Class.create();
NEBlog.FeelingsList.prototype={
initialize:function(sObjectName){
this._oOptions=Object.extend({
bPrev:true,
iFeelingsCount:0,
iFeelingsRange:10,
iCommentRange:10,
jstFeelingsList:'',
hookFeelingsList:'',
sFeelingsListModuleId:'',
sPagerId:'',
sScrollPageId:'',
sScrollToId:'',
iAllowComment:100,
sVisitorIP:null,
iVisitorRank:-100,
sUpdownMenuName:null,
jsWindowManager:false
},arguments[1]||{});
this._sObjectName=sObjectName;
this._oFeelingsPager=null;
this.commentPublishes={};
this._oModuleTitleBar=null;
this._oFeelingsUpdownMenu=null;
this._oFeelingsList=null;
this._oDlgConfirmFeelings=null;
this.__lastOnclick=null;
this.__openComment=false;
this._init();
return this;
},
_init:function(){
var module=netease.ui.module.Module.getModuleById(this._oOptions.sFeelingsListModuleId);
if(module!=null)
this._oModuleTitleBar=module.getTitleBar();
if(!this._oOptions.jsWindowManager){
this._oOptions.jsWindowManager=new NetEase.JSWindowManager();
}
},
openFeelingsCards:function(sCid,iComCnt){
var _oLoadParam={loadType:"feelings",count:this._oOptions.iFeelingsCount};
var _oPresentParam={loadType:"feelings",sCid:sCid,iComCnt:parseInt(iComCnt)};
this._newFeelingsPager(this._oOptions.iFeelingsCount,_oLoadParam,_oPresentParam);
if(this._oOptions.iFeelingsCount==0){
this._oFeelingsPager.reset();
this._resetPageTitleBar();
return;
}
this._resetPageTitleBar();
},
upDownComments:function(cardId,userId,userName,commentCount){
var oComInput=$('openFeelingsCom_'+cardId);
if(oComInput==null){
return false;
}
if(oComInput.value<=0){
Element.addClassName('toolbar_'+cardId,'friend_diary_o_current');
Element.removeClassName('feelings_div_'+cardId,'brd01');
}else{
Element.removeClassName('toolbar_'+cardId,'friend_diary_o_current');
Element.addClassName('feelings_div_'+cardId,'brd01');
}
this._oFeelingsUpdownMenu.upDownComments(cardId,userId,userName,commentCount);
return true;
},
_loadFeelings:function(oParams,fnCallback){
FeelingsBean.getRecentFeelingsCards(UD.hostId,oParams.limit,oParams.offset,{
callback:function(oDataFromServer){
fnCallback(oDataFromServer);
},
errorHandler:function(errorString,ex){
var i=0;
i++;
}.bind(this)
});
},
_showFeelings:function(oFeelings,oParams){
this._oFeelingsList=oFeelings;
var _oData={feelings:oFeelings,objectName:this._sObjectName,updownMenu:this._sObjectName+'._oFeelingsUpdownMenu',moodMap:NEBlog.gMoodTypeMap};
var _sResult=this._oOptions.jstFeelingsList.processUseCache(_oData);
$(this._oOptions.hookFeelingsList).innerHTML=_sResult;
if(this.__openComment==false)
if(oParams.sCid!='-1'){
if(this.upDownComments(oParams.sCid,UD.hostId,UD.hostName,oParams.iComCnt)==false)
return;
new Effect.ScrollTo("feelingsComDiv_"+oParams.sCid,{duration:0.0});
this.__openComment=true;
}
},
_newFeelingsPager:function(iFeelingsCount,oLoadParam,oPresentParam){
this._oFeelingsPager=new NetEase.PageNumber(this._sObjectName+"._oFeelingsPager",{pageSize:this._oOptions.iFeelingsRange,markID:this._oOptions.sPagerId,totalSize:iFeelingsCount,
loadFunc:this._loadFeelings.bind(this),loadParam:oLoadParam,presentFunc:this._showFeelings.bind(this),userPresentFuncParam:oPresentParam,filterFunc:this._fnFeelingsFilter.bind(this),
delIterator:this._delFeelingsIt,updateIterator:this._updtFeelingsIt,needRefreshAfterUpdate:true,beforeID:this._oOptions.sScrollPageId,
beforePrev:this._scrollToFeelingsTop.bind(this),beforeNext:this._scrollToFeelingsTop.bind(this),beforeChange:this._scrollToFeelingsTop.bind(this)});
this._oFeelingsUpdownMenu=new NEBlog.FeelingsCommentMenu(this._sObjectName+'._oFeelingsUpdownMenu',{bPrev:this._oOptions.bPrev,feelingsPager:this._oFeelingsPager,
commentRange:this._oOptions.iCommentRange,visitorAvatar:UD.visitorAvatar,
allowComment:this._oOptions.iAllowComment});
this._oFeelingsPager.show();
},
_delFeelingsIt:function(a,b){
return(a==b.id);
},
_updtFeelingsIt:function(oFirst,oSecond){
return(oFirst.id==oSecond.id);
},
_scrollToFeelingsTop:function(){
new Effect.ScrollTo(this._oOptions.sScrollToId,{duration:0.0});
},
cancelConfirmDlg:function(dlgId){
this._oOptions.jsWindowManager.closeWindow(dlgId);
},
deleteFeelings:function(cardId){
this._oDlgConfirmFeelings=new NetEase.ConfirmDlg(this._sObjectName+"._oDlgConfirmFeelings",{
sDlgId:"dlg_confirm_feelings_del",sAlert:"确实要删除心情卡片吗？",jsWindowManager:this._oOptions.jsWindowManager,
fnOK:this._doDeleteFeelings.bind(this),oFnOKParam:{cardId:cardId}
});
this._oDlgConfirmFeelings.show();
},
_doDeleteFeelings:function(feeling){
this.__lastOnclick=$("delfeelings_"+feeling.cardId).onclick;
$("delfeelings_"+feeling.cardId).onclick='';
FeelingsBean.removeFeelingsCard(UD.hostId,feeling.cardId,{
callback:function(dataFromServer){
this._postDeleteFeeling(dataFromServer,feeling.cardId);
}.bind(this),
errorHandler:function(errorString,ex){
$("delfeelings_"+feeling.cardId).onclick=this.__lastOnclick;
if(ex==undefined||ex==null){
return false;
}
}.bind(this)
});
},
_postDeleteFeeling:function(succ,cardId){
if(succ==true){
this._oFeelingsPager.removeOne(cardId);
this._oOptions.iFeelingsCount--;
this._resetPageTitleBar();
dwrlog('心情卡片删除成功','ok');
}else{
dwrlog('心情卡片删除失败','error');
$("delfeelings_"+cardId).onclick=this.__lastOnclick;
}
},
_fnFeelingsFilter:function(oData){
},
addFeelingsCard:function(){
var button=$("add_feelings_button");
button.disabled=true;
var content=Trim($("add_feelings_content").value);
content=content.replace(/<!--.*?>/ig,"");
if(content.length==0||content=="\n"||content=="<br>"||content=="<DIV></DIV>"){
showInfo('feelings_notebar',"内容不能为空 ，请重新编辑后提交","info");
button.disabled=false;
return false;
}
var content2=content.replace("\n","");
content2=content.replace("<br>","");
if(content2.length==0||content2=="\n"||content2=="<br>"||content2=="<DIV></DIV>"){
showInfo('feelings_notebar',"内容不能为空 ，请重新编辑后提交","info");
button.disabled=false;
return false;
}
if(content.length>150){
showInfo('feelings_notebar',"内容超过最大字数150 ，请重新编辑后提交","info");
button.disabled=false;
return false;
}
var type=$('cur_mood_type').value;
var _oResult=stripData(content,"");
if(_oResult.isHarm){
showInfo('feelings_notebar',"内容包含有害代码，请编辑后重新提交","info");
button.disabled=false;
return false;
}
content=_oResult.content;
var _oNewFeelingsCard=new Object();
_oNewFeelingsCard.content=content;
_oNewFeelingsCard.moodType=type;
_oNewFeelingsCard.userNickname=UD.hostNickname.unescape_freemark();
_oNewFeelingsCard.userAvatarUrl=UD.hostImgUrl;
FeelingsBean.addFeelingsCard(_oNewFeelingsCard,{
callback:function(card){
if(card!=null){
this._oFeelingsPager.addOne(card,true,false);
dwrlog('发表心情卡片成功','ok');
this._oOptions.iFeelingsCount++;
this._resetPageTitleBar();
new Effect.ScrollTo("feelingsNav",{duration:0.0});
}
else{
dwrlog('发表心情卡片失败','error');
}
button.disabled=false;
}.bind(this),
errorHandler:function(errorString,ex){
button.disabled=false;
filterWarning(ex,false);
}
});
$('add_feelings_status').innerHTML='(150字以内)';
$("add_feelings_content").value='';
},
showMessage:function(content,id,type){
showInfo('noteStatusBar'+id,content,type);
},
_setPageInfo:function(sLoadType,sLoadCount,sLoadName,sLoadId){
var loadType=$('loadType');
loadType&&(loadType!=null)&&(loadType.value=sLoadType);
var loadCount=$('loadCount');
loadCount&&(loadCount!=null)&&(loadCount.value=sLoadCount);
var loadName=$('loadName');
loadName&&(loadName!=null)&&(loadName.value=sLoadName);
var loadId=$('loadId');
loadId&&(loadId!=null)&&(loadId.value=sLoadId);
},
getPageInfo:function(){
return{loadType:$('loadType').value,loadCount:$('loadCount').value,
loadName:$('loadName').value,loadId:$('loadId').value};
},
_resetPageTitleBar:function(){
if($('feelings_top_num')){
$('feelings_top_num').innerHTML="心情记录("+this._oOptions.iFeelingsCount+")";
}
}
};
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.FeelingsCommentMenu=Class.create();
NEBlog.FeelingsCommentMenu.prototype={
initialize:function(sObjectName){
this._oOptions=Object.extend({
bPrev:true,
feelingsPager:null,
commentRange:10,
visitorAvatar:'',
editorMaxLen:1000,
jsWindowManager:false,
allowComment:100,
visitorIP:'',
bShowCommentDefault:false
},arguments[1]||{});
this.objName=sObjectName;
this.showHidding=false;
this.currOpen={};
this.commentPublishes={};
},
getObjectName:function(){
return this.objName;
},
upDownComments:function(cardId,userId,userName,commentCount){
if(this.showHidding==true)
return false;
var oComInput=$('openFeelingsCom_'+cardId);
if(oComInput.value<=0)
this._openComments(cardId,userId,userName,commentCount);
else
this._closeComments(cardId);
},
_openComments:function(cardId,userId,userName,commentCount){
this.showHidding=true;
var opened=this.currOpen[cardId];
if(opened!=undefined&&opened!=null&&opened!='FeelingsCom'){
$('open'+opened+'_'+cardId).value=0;
this.currOpen[sCcardIdardId]=null;
var id='feelingsCom_'+cardId;
$(id).style.display="none";
}
var oComInput=$('openFeelingsCom_'+cardId);
if(oComInput.value==0){
new Effect.BlindDown('feelingsCom_'+cardId,{
stateId:cardId+"_$$S$$",
duration:0.2,
userCallBack:function(){
this.showHidding=false;
$('openFeelingsCom_'+cardId).value=1;
this.currOpen[cardId]='FeelingsCom';
}.bind(this)
});
}else{
FeelingsBean.getRecentFeelingsComment(cardId,this._oOptions.commentRange,0,{
callback:function(dataFromServer){
oComInput.value=0;
this._initCommentPublish(dataFromServer,cardId,userId,userName,commentCount);
}.bind(this)
});
}
},
_initCommentPublish:function(oComments,cardId,userId,userName,commentCount){
try{
this.commentPublishes[cardId]=new NetEase.CommentPublish(oComments,cardId,commentCount,"feelingsComShow_"+cardId,"feelingsComPub_"+cardId,
{bCanClose:true,bHasCancelBtn:true,bNeedCheckLogin:false,bNeedCheckRight:true,
iPageSize:this._oOptions.commentRange,iAllowComment:this._oOptions.allowComment,
iHostId:userId,sHostName:userName,iVisitorId:UD.visitorId,sVisitorName:UD.visitorName,sVisitorNickname:UD.visitorNickname,
sVisitorAvatar:this._oOptions.visitorAvatar,iVisitorRank:Const.Rank.Owner,iEditorMaxLen:this._oOptions.editorMaxLen,
sVisitorIP:this._oOptions.visitorIP,
iEditorHeight:230,fnOpenCommentEffect:this.openCommentEffect.bind(this),
fnAddComment:this.addNewComment.bind(this),oAddCommentParams:{cardId:cardId,cardUserId:userId},
fnMoreData:this.getCommentsByPage,bSupportDeleteComment:true,
fnAfterAddComment:this.afterAddComment.bind(this),oAfterAddCommentParams:{cardId:cardId},
fnCloseComments:this._closeComments.bind(this),
sObjName:this.objName+'.commentPublishes[\''+cardId+'\']',
fnDelComment:this.delComment,oDelCommentParams:{cardId:cardId},isHomeModule:false,
fnAfterDelComment:this.afterDelComment.bind(this),oAfterDelCommentParams:{cardId:cardId},
bHasCancelBtn:!this._oOptions.bShowCommentDefault
});
}catch(e){
alert(e);
}
},
_closeComments:function(sCardId){
if($('toolbar_'+sCardId))
Element.removeClassName('toolbar_'+sCardId,'friend_diary_o_current');
if($('feelings_div_'+sCardId))
Element.addClassName('feelings_div_'+sCardId,'brd01');
$('feelingsCom_'+sCardId).style.display="none";
this.showHidding=false;
$('openFeelingsCom_'+sCardId).value=0;
this.currOpen[sCardId]=null;
},
openCommentEffect:function(sCardId,initFunc){
this.showHidding=true;
$('feelingsCom_'+sCardId).style.display="block";
if(initFunc!=null)
initFunc();
this.showHidding=false;
$('openFeelingsCom_'+sCardId).value=1;
this.currOpen[sCardId]='FeelingsCom';
},
getCommentsByPage:function(sCardId,limit,offset,postPageCommentFunc){
FeelingsBean.getRecentFeelingsComment(sCardId,limit,offset,{
callback:function(dataFromServer){
postPageCommentFunc(dataFromServer);
}
});
},
addNewComment:function(oNewComment,oParams,fnPostAddComment){
oNewComment.cardId=oParams.cardId;
oNewComment.userId=oParams.cardUserId;
if(UD.visitorRank<Const.Rank.Friend){
return false;
}
FeelingsBean.addFeelingsCardComment(oNewComment,{
callback:function(oNewComment){
if(oNewComment!=null){
if(oNewComment.id>0){
fnPostAddComment(oNewComment);
}else if(oNewComment.id==-9){
alert("你发表的内容包含敏感关键字，不允许发布！");
fnPostAddComment(null);
}
}else{
alert("服务器出错，发布失败！");
fnPostAddComment(null);
}
},
errorHandler:function(errorString,ex){
var _iFilter=filterWarning(ex,false,"你发表的评论或日志本身包含敏感关键字，不允许发布！");
if(_iFilter==-1){
fnPostAddComment(null);
return false;
}
fnPostAddComment(null);
}
});
},
afterAddComment:function(oNewComment,oParams){
var _oComCount=$("feelingsComCount_"+oParams.cardId);
var _iCount=0;
if(_oComCount!=null){
_iCount=_oComCount.innerHTML;
_iCount=parseInt(_iCount)+1;
_oComCount.innerHTML=_iCount;
}
if(this._oOptions.feelingsPager!=null){
var _oItem=new Object();
_oItem.id=oParams.cardId;
_oItem.commentCount=_iCount;
this._oOptions.feelingsPager.updateOne(_oItem,true);
}
new Effect.ScrollTo("feelingsComDiv_"+oParams.cardId,{duration:0.0});
},
delComment:function(sCommentId,oParams,fnPostDelComment){
FeelingsBean.removeFeelingsComment(UD.hostId,sCommentId,oParams.cardId,{
callback:function(oDataFromServer){
fnPostDelComment(oDataFromServer,sCommentId);
}
});
},
afterDelComment:function(oParams){
var _iCount=parseInt($("feelingsComCount_"+oParams.cardId).innerHTML)-1;
$("feelingsComCount_"+oParams.cardId).innerHTML=_iCount;
if(this._oOptions.feelingsPager!=null){
var _oItem=new Object();
_oItem.id=oParams.cardId;
_oItem.commentCount=_iCount;
this._oOptions.feelingsPager.updateOne(_oItem,true);
}
}
}
var jst_feelings_mood=new String('\
 {var i=0}\
 {for item in moodMap}\
  <a class="mdfc fc${i+1}" title="${item}" href="javascript:;" onclick="${objectName}.showCurrentMood(${i+1});">&nbsp;</a>\
  {var i=i+1}\
 {/for}\
');
var jst_feelings_prev=new String('\
  {if feelings != null && feelings.length > 0}\
  {for feeling in feelings}\
           <div style="padding-top:8px;padding-bottom:8px" id="feelings_div_${feeling.id}" class="g_c_pdin item brd01 friend_diary">\
      <div class="g_htc_toggle titlebar c07">\
     <p style="width: 100%; display: inline;" class="g_t_hide intitle g_c_smvlft">${feeling.content|escape|default:""}</p>\
      </div>\
      <div class="friend_diary_o clear_fix" id="toolbar_${feeling.id}">\
           <span class="g_p_left g_c_smvlft c09">${NetEase.DateTime.formatRecentDate(feeling.publishTime,"M月d日 HH:mm")}</span>\
     <div  class="g_tab_btn00">\
         <div style="margin-left: -3px;" class="left c09"></div>\
         <div class="left current">\
              <a id="feelingsComDiv_${feeling.id}" href="#" class="c05" onclick="${objectName}.upDownComments(\'${feeling.id}\',\'${feeling.userId}\',\'${feeling.userName}\',${feeling.commentCount});return false;">评论(<nobr id="feelingsComCount_${feeling.id}">${feeling.commentCount}</nobr>)</a>\
         </div>\
     </div>\
     <div class="g_p_clear"></div>\
    </div>\
   </div>\
   <input id="openFeelingsCom_${feeling.id}" type="hidden" value="-1"/><!--0表示关闭，1表示打开，-1表示数据未生成-->\
   <div id="feelingsCom_${feeling.id}" class="g_p_relative g_h_1" style="display:none;">\
                 <div id="feelingsComShow_${feeling.id}"></div>\
                <div id="feelingsComPub_${feeling.id}" class="g_h_1">正在加载评论...</div>\
      </div>\
 {/for}\
 {else}\
     <div class="g_c_pdin">\
        暂无心路历程！\
   </div>\
    {/if}\
');
var jst_feelings_edit=new String('\
  {if feelings != null && feelings.length > 0}\
  {for feeling in feelings}\
           <div style="padding-top:8px;padding-bottom:8px" id="feelings_div_${feeling.id}" class="g_c_pdin item brd01 friend_diary">\
      <div class="g_htc_toggle titlebar c07">\
     <p style="width: 100%; display: inline;" class="g_t_hide intitle g_c_smvlft">${feeling.content|escape|default:""}</p>\
      </div>\
      <div class="friend_diary_o clear_fix" id="toolbar_${feeling.id}">\
           <span class="g_p_left g_c_smvlft c09">${NetEase.DateTime.formatRecentDate(feeling.publishTime,"M月d日 HH:mm")}</span>\
     <div  class="g_tab_btn00">\
         <div style="margin-left: -3px;" class="left c09"></div>\
         <div class="left current">\
              <a id="feelingsComDiv_${feeling.id}" href="#" class="c05" onclick="${objectName}.upDownComments(\'${feeling.id}\',\'${feeling.userId}\',\'${feeling.userName}\',${feeling.commentCount});return false;">评论(<nobr id="feelingsComCount_${feeling.id}">${feeling.commentCount}</nobr>)</a>\
         </div>\
          <span style="float: left; line-height: 15px;" class="bd1c">|</span>\
          <div class="left">\
              <a  id="delfeelings_${feeling.id}" onclick="${objectName}.deleteFeelings(\'${feeling.id}\');return false;" href="#" class="c05">删除</a>\
          </div>\
     </div>\
     <div class="g_p_clear"></div>\
    </div>\
   </div>\
   <input id="openFeelingsCom_${feeling.id}" type="hidden" value="-1"/><!--0表示关闭，1表示打开，-1表示数据未生成-->\
   <div id="feelingsCom_${feeling.id}" class="g_p_relative g_h_1" style="display:none;">\
                 <div id="feelingsComShow_${feeling.id}"></div>\
                <div id="feelingsComPub_${feeling.id}" class="g_h_1">正在加载评论...</div>\
      </div>\
 {/for}\
 {else}\
     <div class="g_c_pdin">\
        暂无心路历程！\
   </div>\
    {/if}\
');
var old_jst_feelings_edit=new String('\
 <div class="g_blog_mood">\
 <div class="md">\
 {if feelings != null && feelings.length > 0}\
 {for feeling in feelings}\
 <div class="item">\
  <span class="fc_ fc${feeling.moodType} lft" title="${moodMap[feeling.moodType-1]}">&nbsp;</span>\
  <div class="cnt c07 g_t_14">${feeling.content|showBr|escape|default:""}\
   <span class="c08 g_t_12 g_c_hpdin">${NetEase.DateTime.formatRecentDate(feeling.publishTime,"M月d日 HH:mm")}</span>\
  </div>\
  <div class="rit">\
   <span id="feelingsComDiv_${feeling.id}" class="c05" onclick="${updownMenu}.upDownComments(\'${feeling.id}\',\'${feeling.userId}\',\'${feeling.userName}\',${feeling.commentCount});return false;">评论(<nobr id="feelingsComCount_${feeling.id}">${feeling.commentCount}</nobr>)</span><span class="bd1c">|</span><span class="c05" id="delfeelings_${feeling.id}" onclick="${objectName}.deleteFeelings(\'${feeling.id}\');return false;" >删除</span>\
  </div>\
  <div class="btm">\
  </div>\
  <input id="openFeelingsCom_${feeling.id}" type="hidden" value="-1"/><!--0表示关闭，1表示打开，-1表示数据未生成-->\
 </div>\
 <div id="feelingsCom_${feeling.id}" class="g_p_relative g_h_1" style="display:none;">\
      <div id="feelingsComShow_${feeling.id}"></div>\
     <div id="feelingsComPub_${feeling.id}" class="g_h_1">正在加载评论...</div>\
 </div>\
 {/for}\
 {else}\
     <div class="g_c_pdin">\
        暂无心路历程！\
   </div>\
    {/if}\
     </div>\
     </div>\
');
var jst_chummy_feelings_edit=new String('\
 <div class="g_blog_mood">\
 <div class="g_blog_mood_chummy">\
 <div class="md">\
 {if feelings != null && feelings.length > 0}\
 {for feeling in feelings}\
 <div class="item">\
  <a onclick="window.open(\'http://${feeling.userName|parentDomain}\');return false;" href="#">\
  <img src="${formatImageUrl(feeling.userAvatarUrl)}" onerror="this.src=\'http://b.bst.126.net/style/common/stranger.gif\';" width="40" height="40" class="bd01"/>\
  </a>\
  <span class="fc_ fc${feeling.moodType} lft">&nbsp;</span>\
  <div class="cnt c07 g_t_14">${feeling.content|escape|showBr|default:""}\
  <p class="btp c08 g_t_12 g_t_right">\
   <a class="c06" href="http://${feeling.userName|parentDomain}/" target="_blank">\
    ${feeling.userNickname|default:""|escape}\
   </a>\
   <span class="c08">${NetEase.DateTime.formatRecentDate(feeling.publishTime,"M月d日 HH:mm")}</span>&nbsp;&nbsp;<span class="bd1c">|</span>\
   {if feeling.userId!=UD.visitorId}\
   <span id="feelingsComDiv_${feeling.id}" class="c05 g_c_ul" onclick="window.open(\'http://${feeling.userName|parentDomain}/prevBlog.do?cardId=${feeling.id}&comCount=${feeling.commentCount}\');return false;">评论(<nobr id="feelingsComCount_${feeling.id}">${feeling.commentCount}</nobr>)</span>\
   {else}\
   <span id="feelingsComDiv_${feeling.id}" class="c05 g_c_ul" onclick="window.open(\'http://${feeling.userName|parentDomain}/editBlogAll.do?p1=feelings&p2=${feeling.id}&p3=${feeling.commentCount}\');return false;">评论(<nobr id="feelingsComCount_${feeling.id}">${feeling.commentCount}</nobr>)</span>\
   {/if}\
  </p>\
  <input id="openFeelingsCom_${feeling.id}" type="hidden" value="-1"/><!--0表示关闭，1表示打开，-1表示数据未生成-->\
 </div>\
 <div id="feelingsCom_${feeling.id}" class="g_p_relative g_h_1" style="display:none;">\
      <div id="feelingsComShow_${feeling.id}"></div>\
     <div id="feelingsComPub_${feeling.id}" class="g_h_1">正在加载评论...</div>\
 </div>\
 {/for}\
 {else}\
     <div class="g_c_pdin">\
        暂无关注的博友心情！\
   </div>\
    {/if}\
     </div>\
      </div>\
     </div>\
');
var old_jst_feelings_prev=new String('\
 <div class="g_blog_mood">\
 <div class="md">\
 {if feelings != null && feelings.length > 0}\
 {for feeling in feelings}\
 <div class="item">\
  <span class="fc_ fc${feeling.moodType} lft" title="${moodMap[feeling.moodType-1]}">&nbsp;</span>\
  <div class="cnt c07 g_t_14">${feeling.content|escape|showBr|default:""}\
   <span class="c08 g_t_12 g_c_hpdin">${NetEase.DateTime.formatRecentDate(feeling.publishTime,"M月d日 HH:mm")}</span>\
  </div>\
  <div class="rit">\
   <span id="feelingsComDiv_${feeling.id}" class="c05" onclick="${updownMenu}.upDownComments(\'${feeling.id}\',\'${feeling.userId}\',\'${feeling.userNickname}\',${feeling.commentCount});return false;">评论(<nobr id="feelingsComCount_${feeling.id}">${feeling.commentCount}</nobr>)</span>\
  </div>\
  <div class="btm">\
  </div>\
  <input id="openFeelingsCom_${feeling.id}" type="hidden" value="-1"/><!--0表示关闭，1表示打开，-1表示数据未生成-->\
 </div>\
 <div id="feelingsCom_${feeling.id}" class="g_p_relative g_h_1" style="display:none;">\
      <div id="feelingsComShow_${feeling.id}"></div>\
     <div id="feelingsComPub_${feeling.id}" class="g_h_1">正在加载评论...</div>\
 </div>\
 {/for}\
 {else}\
     <div class="g_c_pdin">\
        暂无心路历程！\
   </div>\
    {/if}\
     </div>\
     </div>\
');
var jst_feelings_about_edit=new String('\
 {if feelings != null&&feelings.id!=-1}\
 <span class="lft c08 n_ fc_ fc${feelings.moodType}"  title="${moodMap[feelings.moodType-1]}">${moodMap[feelings.moodType-1]}</span>\
 <div style="padding-left:100px" class="cnt c07 g_t_14">${feelings.content|escape|default:""}</div>\
 <div style="padding-left:100px" class="ops c08">\
  ${NetEase.DateTime.formatRecentDate(feelings.publishTime,"M月d日 HH:mm")}&nbsp;&nbsp;<span class="bd1c">|</span>\
  <a target="_blank" href="http://blog.163.com/${hostName}/blog/edit/?p1=feelings&p2=${feelings.id}" class="c05 g_c_ul">评论(${feelings.commentCount})</a><span class="bd1c">|</span>\
  <a target="_blank" href="http://blog.163.com/${hostName}/blog/edit/?p1=feelings" class="c05 g_c_ul">心路历程</a><span class="bd1c">|</span>\
  <a target="_blank" href="http://blog.163.com/${visitorName}/home/#tid=9984&action=my&add=true" class="c05 g_c_ul">写心情</a><span class="bd1c">|</span>\
  <a href="#" class="c05 g_c_ul" onclick="ProfileManager.removeFirstFeelingsCard(\'${feelings.userId}\', \'${feelings.userName}\', \'${feelings.id}\');return false;">删除</a>\
 </div>\
 {else}\
 <div class="cnt c07 g_t_14" style="padding-left:10px">你还没有添加任何心情文字</div>\
 <div class="ops c08" style="padding-left:6px">\
  <a target="_blank" href="http://blog.163.com/${hostName}/blog/edit/?p1=feelings" class="c05 g_c_ul">心路历程</a><span class="bd1c">|</span>\
  <a target="_blank" href="http://blog.163.com/${visitorName}/home/#tid=9984&action=my&add=true" class="c05 g_c_ul">写心情</a><span class="bd1c"></span>\
 </div>\
    {/if}\
');
var jst_feelings_about_prev=new String('\
 {if feelings != null&&feelings.id!=-1}\
 <span class="lft c08 n_ fc_ fc${feelings.moodType}"  title="${moodMap[feelings.moodType-1]}">${moodMap[feelings.moodType-1]}</span>\
 <div style="padding-left:100px" class="cnt c07 g_t_14">${feelings.content|escape|default:""}</div>\
 <div style="padding-left:100px" class="ops c08">\
  ${NetEase.DateTime.formatRecentDate(feelings.publishTime,"M月d日 HH:mm")}&nbsp;&nbsp;<span class="bd1c">|</span>\
  <a target="_blank" href="http://blog.163.com/${hostName}/blog/?cardId=${feelings.id}" class="c05 g_c_ul">评论(${feelings.commentCount})</a><span class="bd1c">|</span>\
  <a target="_blank" href="http://blog.163.com/${hostName}/blog/?cardId=-1" class="c05 g_c_ul">心路历程</a>\
 </div>\
    {/if}\
');
if(dwr==null)var dwr={};
if(dwr.engine==null)dwr.engine={};
if(DWREngine==null)var DWREngine=dwr.engine;
if(FeelingsBean==null)var FeelingsBean={};
FeelingsBean._path='/apps/dwr';
FeelingsBean._udDomain='http://ud.blog.163.com/';
FeelingsBean.addFeelingsCard=function(p0,callback){
dwr.engine._execute(FeelingsBean._path,'FeelingsBean','addFeelingsCard',p0,false,callback);
}
FeelingsBean.getFirstFeelingsCard=function(p0,callback){
dwr.engine._execute(FeelingsBean._path,'FeelingsBean','getFirstFeelingsCard',p0,false,callback);
}
FeelingsBean.removeFirstFeelingsCard=function(p0,p1,callback){
dwr.engine._execute(FeelingsBean._path,'FeelingsBean','removeFirstFeelingsCard',p0,p1,false,callback);
}
FeelingsBean.getRecentFeelingsCards=function(p0,p1,p2,callback){
dwr.engine._execute(FeelingsBean._path,'FeelingsBean','getRecentFeelingsCards',p0,p1,p2,false,callback);
}
FeelingsBean.removeFeelingsCard=function(p0,p1,callback){
dwr.engine._execute(FeelingsBean._path,'FeelingsBean','removeFeelingsCard',p0,p1,false,callback);
}
FeelingsBean.addFeelingsCardComment=function(p0,callback){
dwr.engine._execute(FeelingsBean._path,'FeelingsBean','addFeelingsCardComment',p0,false,callback);
}
FeelingsBean.removeFeelingsComment=function(p0,p1,p2,callback){
dwr.engine._execute(FeelingsBean._path,'FeelingsBean','removeFeelingsComment',p0,p1,p2,false,callback);
}
FeelingsBean.getRecentFeelingsComment=function(p0,p1,p2,callback){
dwr.engine._execute(FeelingsBean._path,'FeelingsBean','getRecentFeelingsComment',p0,p1,p2,false,callback);
}
FeelingsBean.getRecentFriendsFeelingCards=function(p0,p1,p2,callback){
dwr.engine._execute(FeelingsBean._path,'FeelingsBean','getRecentFriendsFeelingCards',p0,p1,p2,false,callback);
}
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.gMoodTypeMap=null;
NEBlog.gMoodTypeMap=
['微笑','开怀笑','哭泣','失望','困了',
'好好笑','啵','电到了','汗','流口水了',
'真困啊','我吐','眨眼','？？？','嘘',
'砸死你','不说','坏','色迷迷','教训',
'可爱','YEAH','崩溃','惊讶','鄙视',
'开心','仰慕你','晕','挖鼻孔','撒娇',
'鼓掌','害羞','老大','欠揍','吐舌笑脸',
'飞吻','工作忙','大哭','偷偷笑','送花给你',
'来，亲一个','拍桌子','拜拜','得意的笑','生气',
'怕怕','尴尬','郁闷','叹气'];
if(NEBlog==undefined){
var NEBlog={};
}
NEBlog.gPrevFeelings=null;
function gLoadPrevFeelings(sFeelingsListModuleId,iFeelingsCount,
sVisitorAvatar,sType,sCid,iComCnt){
NEBlog.gPrevFeelings=new NEBlog.PrevFeelings('NEBlog.gPrevFeelings',{
iFeelingsCount:iFeelingsCount,sFeelingsListModuleId:sFeelingsListModuleId,
sVisitorAvatar:sVisitorAvatar});
if(sType=="feelings"){
NEBlog.gPrevFeelings.openFeelingsCards(sCid,iComCnt);
$('aFeelingsCard').className+=" selitm c07 g_t_bold";
window.$$_last_select=$('aFeelingsCard');
}
}
NEBlog.PrevFeelings=Class.create();
NEBlog.PrevFeelings.prototype={
initialize:function(sObjectName){
this._oOptions=Object.extend({
iFeelingsCount:0,
sFeelingsListModuleId:'',
sVisitorAvatar:''
},arguments[1]||{});
this._sObjectName=sObjectName;
this.oFeelingsList=null;
this._init();
return this;
},
_init:function(){
this.oFeelingsList=new NEBlog.FeelingsList(this._sObjectName+".oFeelingsList",{bPrev:true,iFeelingsCount:this._oOptions.iFeelingsCount,
jstFeelingsList:jst_feelings_prev,hookFeelingsList:"_$_feelings_prev_list",
sFeelingsListModuleId:"_$$_module_blog_right",sPagerId:"_$$_feelings_prev_bottom_menu",
sScrollPageId:"_$$_feelings_prev_bottom_menu",sScrollToId:"_$$_blog_prev",sVisitorAvatar:this._oOptions.sVisitorAvatar,iVisitorRank:UD.visitorRank,
sUpdownMenuName:this._sObjectName+'.oFeelingsList.updownMenu'
});
},
openFeelingsCards:function(sCid,iComCnt){
this._changeToFeelingsList();
this.oFeelingsList.openFeelingsCards(sCid,iComCnt);
},
_changeToFeelingsList:function(){
$('batchMngLink').style.display="none";
$('feelings_top').style.display="";
$('_$_feelings_prev_list').style.display="";
$('_$_blog_prev_list').style.display="none";
$('_$$_feelings_prev_bottom_menu').style.display="";
$('_$$_blog_prev_bottom_menu').style.display="none";
}
}
