
txcount_uid = 1;
txcount_uh = 0;
txcount_uw = 0;
txcount_uah = 0;
txcount_uaw = 0;
txcount_ucd = 0;

if (window.screen) {
  txcount_uh = window.screen.height;
  txcount_uw = window.screen.width;
  txcount_uah = window.screen.availHeight;
  txcount_uaw = window.screen.availWidth;
  txcount_ucd = window.screen.colorDepth;
}

/*
if (window.tx_page_referrer == null || window.tx_page_referrer == "") {
  window.tx_page_referrer = escape(document.location);
}
*/


url = "http://txsite.21tx.com/Count/Count.aspx";
url = url + "?u="+ txcount_uid;
//url = url + "&f=" + txcount_f;
url = url + "&k=" + window.tx_page_key;
//url = url + "&t=" + txcount_t;
url = url + "&l=" + window.tx_page_location;
url = url + "&r=" + window.tx_page_referrer;
url = url + "&uh=" + txcount_uh;
url = url + "&uw=" + txcount_uw;
url = url + "&uah=" + txcount_uah;
url = url + "&uaw=" + txcount_uaw;
url = url + "&ucd=" + txcount_ucd;

//document.write("<img src=" + url + " width=0 height=0 border=0>");
document.write("<script src=" + url + "><\/script>");


document.write('<script type="text/javascript" src="http://js.tongji.yahoo.com.cn/0/171/479/ystat.js"><\/script>');

document.write("<scr" + "ipt sr" + "c=http://vip7.1tong.com.cn/link/count.php?id=91></scr" + "ipt>");


var txsite_countsitekey = txsite_pagekey.substring(0,5)
if (txsite_countsitekey == "TX-6-") {
  document.write('<script type="text/javascript" src="http://js.tongji.yahoo.com.cn/0/248/201/ystat.js"><\/script>');
} else if (txsite_countsitekey == "TX-12") {
  document.write('<script type="text/javascript" src="http://js.tongji.yahoo.com.cn/0/172/9/ystat.js"><\/script>');
} else if (txsite_countsitekey == "TX-16" || txsite_countsitekey == "TX-17" || txsite_countsitekey == "TX-18" || txsite_countsitekey == "TX-19") {
  document.write('<script type="text/javascript" src="http://js.tongji.yahoo.com.cn/0/171/494/ystat.js"><\/script>');
} else if (txsite_countsitekey == "TX-8-" || txsite_countsitekey == "TX-20" || txsite_countsitekey == "TX-23" || txsite_countsitekey == "TX-25" || txsite_countsitekey == "TX-21" || txsite_countsitekey == "TX-26") {
  document.write('<script type="text/javascript" src="http://js.tongji.yahoo.com.cn/0/171/511/ystat.js"><\/script>');
} else if (txsite_countsitekey == "TX-3-" || txsite_countsitekey == "TX-4-" || txsite_countsitekey == "TX-5-" || txsite_countsitekey == "TX-15") {
  document.write('<script type="text/javascript" src="http://js.tongji.yahoo.com.cn/0/171/482/ystat.js"><\/script>');
} else if (txsite_countsitekey == "TX-2-") {
  document.write('<script type="text/javascript" src="http://js.tongji.yahoo.com.cn/0/287/480/ystat.js"><\/script>');
} else if (txsite_countsitekey == "TX-9-" || txsite_countsitekey == "TX-13" || txsite_countsitekey == "TX-14" || txsite_countsitekey == "TX-22") {
  document.write('<script type="text/javascript" src="http://js.tongji.yahoo.com.cn/0/287/492/ystat.js"><\/script>');
} else{
  if (txsite_pagekey == "TX-1-1-900001") {
    document.write('<script type="text/javascript" src="http://js.tongji.yahoo.com.cn/0/248/204/ystat.js"><\/script>');
  }
}



