//��ҳʱ���õĺ���
function moreComment(){
 
   document.getElementById("template").submit();
 			
}
 
function view(success){
  if(success){
  		alert('�ύ�ɹ�!!!');
  		moreComment();
  }
  else
  	alert('�Բ������ݲ��Ϸ����߸�IP����ֹ���ԡ�');
  
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

//������ҳ���ύ���۵��õĺ���
function commentPost(callBack){
	
		post(callBack);
 	
}
function viewLockInput(){
  document.getElementById("content").disabled = "disabled";
  document.getElementById("post").disabled = "disabled";
  document.getElementById("post").value = "��Ϣ�ύ��...";
}

//�ڷ�ҳ��ҳ�����ύ���۵��õĺ���
function moreCommentPost(postForm,callBack){
		
		if(validateForm(postForm)){
			post(callBack);
			viewLockInput();
		}
 	
}

function sucessHandle(result){
	if(result)
     	alert('�ٱ��ɹ�!!!');
    else{
    	alert('�ٱ�ʧ��!!!')
    }
}
function exceptionHandle(errorString, exception){
   alert('�������쳣!!!')
  
}

//�ٱ�(ͨ��dwrʵ��)
function commentAlarm(commentId){
  
    var site = document.getElementById('template_site').value;
    var referId = document.getElementById('template_referId').value;
    var type = document.getElementById('template_type').value;
 	CommentKindSave.save({ site: site, referId:referId, type:type , commentId:commentId , kind: 'alarm' } , {callback:sucessHandle,errorHandler:exceptionHandle});
  
 }