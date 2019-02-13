<!--

var serid;
serid=['80','80','80','80'];
var bmpid; 
bmpid=['80','80','80','80'];

var spath=location.protocol+'//'+location.hostname; 
var sport=0;
var bmpath=location.protocol+'//'+location.hostname; 
var bmport=0;

function add_div(id01,id02,ww,hh,pp,xx,yy,zz,txt,fsize,fcolor,bcolor,oth) {
 var b='<div id='+id01+' style="width: '+ww+'; height:'+hh+'; font-size:'+fsize+'px; padding:0px; margin:0px; color:'+fcolor+'; background:'+bcolor+'; position:'+ pp +'; top:'+yy+';  left:'+xx+';  z-index: '+zz+'; '+oth+'  " >'+txt+'</div>';
 append2id(b,id02);      
}

function sw_div(id,xx) {
 var p=document.getElementById(id).style.left;
 if (p==xx) { 
   document.getElementById(id).style.left=screen.width-5200 ; 
  } else { http://g6991.com:82/c100/part6-1.jpg
    document.getElementById(id).style.left=xx;
    document.body.scrollTop=0;
  }
}

function move_div(id,xx) {
 for(i=0;i<=divid.length;i++) { 
   if (divid[i]==id) { 
      document.getElementById(divid[i]).style.left=xx;
   } else { 
      document.getElementById(divid[i]).style.left=screen.width-5200;
   }
 }
}

function a_div(id01,id02,ww,hh,txt,fsize,fcolor,bcolor,oth) {
 var b='<div id='+id01+' style="width: '+ww+'; height:'+hh+'; float:left;   padding:0px; margin:0px;  color:'+fcolor+'; font-size:'+fsize+'px; background:'+bcolor+';  '+oth+'  " >'+txt+'</div>';
 append2id(b,id02);      
}

function add_img(id01,id02,ww,hh,pp,xx,yy,zz,fname,oth) {
 var fsize=''; var fcolor=''; var bcolor='';
 fname=bmpath+':'+bmpid[bmport]+'/'+fname;
 bmport=bmport+1;
 if (bmport >= bmpid.length ) { bmport=0; }
 var b2='<img src='+txt+' style="width:100%; height:100%">';
 add_div(id01,id02,ww,hh,pp,xx,yy,zz,b2,fsize,fcolor,bcolor,oth); 
}

function a_img(id01,id02,ww,hh,fname,oth) {
 var fsize=''; var fcolor=''; var bcolor='';
 fname=bmpath+':'+bmpid[bmport]+'/'+fname;
 bmport=bmport+1;
 if (bmport >= bmpid.length ) { bmport=0; }
 var b2='<img src='+txt+' style="width:100%; height:100%">';
 a_div(id01,id02,ww,hh,b2,fsize,fcolor,bcolor,oth); 
}

function add_button_img(id01,id02,ww,hh,pp,xx,yy,zz,ii,iww,ihh,uu,tt,fsize,fcolor,bcolor) {
 ii=bmpath+':'+bmpid[bmport]+'/'+ii;
 bmport=bmport+1;
 if (bmport >= bmpid.length ) { bmport=0; }
 var b='<div id='+id01+'  style="cursor:pointer; width:'+ ww+'; height:'+hh+'; padding:0; border:0px solid ; border-radius:7px ; font-size:'+fsize+';color:'+fcolor+'; background:'+bcolor+'; position: '+pp+'; top:'+yy+'; left:'+xx+'; z-index:'+zz+' ;  " onclick="javascript:includejs(\''+uu+'\'); " ><div  style="border-radius:7px;"><img src='+ii+' style="width:'+iww+'px; height:'+ihh+'px; border-radius:7px ; " ></div> <div  style=" margin:7px;"> '+tt+' </div></div>';
 append2id(b,id02);     
}

function a_button_img(id01,id02,ww,hh,ii,ifloat,iww,ihh,uu,tt,fsize,fcolor,bcolor,oth)  { 
 var lh=fsize+10;
 ii=bmpath+':'+bmpid[bmport]+'/'+ii;
 bmport=bmport+1;
 if (bmport >= bmpid.length ) { bmport=0; }
 var b2='<div  style="border-radius:7px; float:'+ifloat+'; "><img src='+ii+' style="width:'+iww+'px; height:'+ihh+'px; border-radius:7px;  margin:0px 7px 0px 0px;" ></div> <div  style=" margin:7px; float:top; "> '+tt+' </div>';
 oth+='cursor:pointer; border-radius:7px; font-size:'+fsize+'; letter-spacing:2px; line-height:'+lh+'px ; "   onclick="javascript:'+uu+'" ';
 a_div(id01,id02,ww,hh,b2,fsize,fcolor,bcolor,oth); 
}

function add_button(id01,id02,ww,hh,pp,xx,yy,zz,uu,tt,fsize,fcolor,bcolor) {
 var b='<div id='+id01+'  style="cursor:pointer; width:'+ww+'; height:'+hh+'; padding:5px; border:1px solid black; border-radius:7px ; font-size:'+fsize+'; text-align:center; line-height:'+hh+'px; color:'+fcolor+'; background:'+bcolor+'; position:'+pp+'; top:'+yy+';  left:'+ xx+'; z-index:'+zz+' ; "  onclick="javascript:includejs(\''+uu+'\'); " >'+tt+'</div>';
 append2id(b,id02);     
}

function a_button(id01,id02,ww,hh,uu,tt,fsize,fcolor,bcolor,oth) { 
 var lh=fsize+10; var  ww2=ww-10; var hh2=hh-10; 
 var b2='<div style="width:'+ww2+'; height:'+hh2+'; float:left; padding:5px; border:1px solid black; border-radius:7px ; font-size:'+fsize+'px; text-align:center; line-height:'
+hh2+'px; color:'+fcolor+'; background:'+bcolor+'; " ><b> '+tt+' </b></div>';
oth+='cursor:pointer; border-radius:7px; font-size:'+fsize+'; letter-spacing:2px; line-height:'+lh+'px ; "   onclick="javascript:'+uu+' "; ' ;
a_div(id01,id02,ww,hh,b2,fsize,'','',oth); 
} 

function appendTag(tags,idid) {  
 var b0=document.getElementById(idid).innerHTML; 
//alert(b0);
 document.getElementById(idid).innerHTML = b0+ tags ;  
}

function insertnull(idid) { 
 var b0=' ';
 document.getElementById(idid).innerHTML = b0;  
}

function append2id(b,idid) {  
 document.body.scrollTop=0;
 var b0=document.getElementById(idid).innerHTML; 
 document.getElementById(idid).innerHTML = b0+b;  
}

function insert2id(b,idid) {  
 document.body.scrollTop=0;
 document.getElementById(idid).innerHTML = b;  
}

function includejs(fname) { 
 var data=httpGet(fname);
 eval(data);
}

function httpGet(fname) { 
 var xmlHttp = new XMLHttpRequest(); 
 xmlHttp.open( "GET", fname, false ); 
 xmlHttp.send( null );
 //alert( xmlHttp.responseText) ;
 return xmlHttp.responseText;
}

function QQhttpGet(fname) { 
 fname=spath+':'+sport+'/'+fname;
 sport=sport+1;
 if (sport > esport ) { sport=dsport; }

 insertObjtag('obje','main','server.html');

 document.getElementById('obje').onload = function() {  

  var frameObj = document.getElementById("obje");
  var frameContent = frameObj.contentWindow.document.body.innerHTML;
alert( frameContent);
 };

}

function insertObjtag(id01,id02,fname) { 
 //insertnull(id02);
 fname=spath+':'+serid[sport]+'/'+fname;
 sport=sport+1;
 if (sport >= serid.length ) { sport=0; }
 var b1="<div><object  id=" + id01 + " width=" + (screen.width+20) + " height=" + (screen.height-87) + " data="+fname+"></object></div>";
//alert(fname); 
 document.body.scrollTop=0;
 document.getElementById(id02).innerHTML = b1;  
 //document.write(b1); 
}

//-->

