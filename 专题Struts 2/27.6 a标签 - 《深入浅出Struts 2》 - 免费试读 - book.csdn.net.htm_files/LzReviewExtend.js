// JScript 文件

var lz_book_id=0;
var lz_dearbookid=0;
var lz_book_name="";
function LzReview_Init()
{
  document.getElementById('lzRContent').value="--填写评论内容--";
  
  if(document.getElementById("LzSubmit")!=null)
  {
   //按钮事件
document.getElementById("LzSubmit").onclick=function()
{
 var szGetValue=document.getElementById('lzRContent').value;
 if(szGetValue.replace(/^\s+|\s+$/,"")=="" || szGetValue.replace(/^\s+|\s+$/,"")=="--填写评论内容--")
   alert("评论内容不能为空");
  else
    {
      var wb=new WebUtil();
     
       wb.InvokeHtml2("ReviewLzBook","c="+document.getElementById('lzRContent').value
                     +"&n="+lz_book_name+"&bookid="+lz_dearbookid+"&lzbookid="+lz_book_id+"&r="+Math.random(),"lzOutBox");
                 
              document.getElementById('lzRContent').value="提交成功,感谢您的支持";   
               document.getElementById('lzRContent').disabled=true;         
             document.getElementById("LzSubmit").disabled=true;         
    }
}
  }
}


document.getElementById('lzRContent').onmouseover=function()
{
   this.style.backgroundColor="#FFFFE6";
}
document.getElementById('lzRContent').onfocus=function()
{
  var szGetValue=document.getElementById('lzRContent').value;
  if(szGetValue=="--填写评论内容--")
     document.getElementById('lzRContent').value="";
}
document.getElementById('lzRContent').onblur=function()
{
  if(document.getElementById('lzRContent').value.replace(/^\s+|\s+$/,"")=="")
    document.getElementById('lzRContent').value="--填写评论内容--";
}
document.getElementById('lzRContent').onmouseout=function()
{
  this.style.backgroundColor="#fff";
}
LzReview_Init();


