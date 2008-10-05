    function writeBottom() {
	    var str = "&copy; 2007 <a href='http://cwq.jsp-tech.cn' target='_self'>jsp-tech.cn</a> All Rights Reserved.  <a href='http://www.miibeian.gov.cn' target='_blank'>粤ICP备07031152</a>";
		var bottom = document.getElementById('bottom');
		bottom.innerHTML = str;
	}

function initMenu() {
var div = document.getElementById('topmenus');
var imgs = div.getElementsByTagName("DIV");
for(var c=0; c<imgs.length; c=c+1) {
	if(c % 2 == 0) {
		imgs[c].innerHTML = "<img src='spliter.jpg' width='3' height='19'>";
	}
	else {
		imgs[c].className = 'menu menu1';
		imgs[c].onmouseover = function over(event) {
			this.className='menu menu2';
		}
		imgs[c].onmouseout = function over(event) {
			this.className='menu menu1';
		}
	}
}
}