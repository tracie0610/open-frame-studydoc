// JScript 文件
 
 var adDiv=document.body.getElementsByTagName("DIV");
   var szLoc=document.location.toString();
   var i;
   var isIndex=false;
   //book.csdn.net/bookfiles
   if(szLoc.indexOf("book.csdn.net/book")>=0)
   {
      var adObj;
      for(i=0;i<=adDiv.length-1;i++)
      {
         if(adDiv.item(i).className=="bookShow")
         {
           adObj=adDiv.item(i);
           isIndex=true;
           break;
         }
         if(adDiv.item(i).className=="arcTitle")
         {
             adObj=adDiv.item(i);
           isIndex=false;
           break;
         }
      }
      if(adObj!=null)
      {
      if(isIndex) //index页上的广告
         adObj.innerHTML="<h1 style='margin-top:0;'><a href='http://book.csdn.net/subject/0707cbi/' target='_blank'><img width='100%' src='http://book.csdn.net/smallimg/080902cb.gif' /></a></h1>"+adObj.innerHTML;
         else
         adObj.innerHTML="<h1 style='text-align:left;width:100%;'>" //详细页上的广告 
              +"<a href ='http://blog.csdn.net/hicsdn/archive/2009/05/27/4220023.aspx' target='_blank'><img src='http://book.csdn.net/smallimg/hicsdn657.jpg'  /></a>"
            +"</h1><br/>"+adObj.innerHTML;;
      }
      
     
      adObj=null;
      
   }