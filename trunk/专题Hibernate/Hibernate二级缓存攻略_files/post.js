//翻页时调用的函数
function moreComment(){
 
   document.getElementById("template").submit();
 			
}
 
function view(success){
  if(success){
  		alert('提交成功!!!');
  		moreComment();
  }
  else
  	alert('对不起，内容不合法或者该IP被禁止发言。');
  
}


function post(callBack){
	var url = "http://comment.yesky.com/post.htm?";

	var site = document.getElementById("site").value;
	var referId = document.getElementById("referId").value;
	var type = document.getElementById("type").value;
	var channelId = document.getElementById("channelId").value;
	
	var content = document.getElementById("content").value;
	content = content.replace(/\%/g,"%25");
	content = content.replace(/\&/g,"%26");
	content = content.replace(/\?/g,"%3F");
	content = content.replace(/\+/g,"%2B");
	content = content.replace(/\#/g,"%23");
	content = content.replace(/\=/g,"%3D");

	
	
	
	var nickName = document.getElementById("nickName").value;
	nickName = nickName.replace(/\%/g,"%25");
	nickName = nickName.replace(/\&/g,"%26");
	nickName = nickName.replace(/\?/g,"%3F");
	nickName = nickName.replace(/\+/g,"%2B");
	nickName = nickName.replace(/\#/g,"%23");
	nickName = nickName.replace(/\=/g,"%3D");
	
	url = url+"site="+site+"&referId="+referId+"&type="+type+"&channelId="+channelId+"&content="+content+"&nickName="+nickName;
	
	var positiveNegativeObj = document.getElementById("positiveNegative");
	if(positiveNegativeObj != null){
		url = url + "&positiveNegative=" + positiveNegativeObj.value;
	}
	
 	getDataFromServer(url,callBack);
}

//在文章页上提交评论调用的函数
function commentPost(callBack){
	
		post(callBack);
 	
}
function viewLockInput(){
  document.getElementById("content").disabled = "disabled";
  document.getElementById("post").disabled = "disabled";
  document.getElementById("post").value = "信息提交中...";
}

//在翻页的页面上提交评论调用的函数
function moreCommentPost(postForm,callBack){
		
		if(validateForm(postForm)){
			post(callBack);
			viewLockInput();
		}
 	
}

function sucessHandle(result){
	if(result)
     	alert('举报成功!!!');
    else{
    	alert('举报失败!!!')
    }
}
function exceptionHandle(errorString, exception){
   alert('服务器异常!!!')
  
}

//举报(通过dwr实现)
function commentAlarm(commentId){
  
    var site = document.getElementById('template_site').value;
    var referId = document.getElementById('template_referId').value;
    var type = document.getElementById('template_type').value;
 	CommentKindSave.save({ site: site, referId:referId, type:type , commentId:commentId , kind: 'alarm' } , {callback:sucessHandle,errorHandler:exceptionHandle});
  
 }