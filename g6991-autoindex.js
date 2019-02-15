
<!--

function a_infographic(id01,id02,ww,hh,ifloat,iww,ihh,fname,fsize,fcolor,bcolor,oth) { 
var lh=fsize+10; 
var data=fname;
var weblink=data.split('[more]'); 
for (i=0;i<=weblink.length-1;i++){
var uu=weblink[i].substring(weblink[i].indexOf("[url]")+5,weblink[i].indexOf("[/url]") ); 
var tt=weblink[i].substring(weblink[i].indexOf("[txt]")+5,weblink[i].indexOf("[/txt]") ); 
var ii=weblink[i].substring(weblink[i].indexOf("[img]")+5,weblink[i].indexOf("[/img]") ); 
switch (i) {
case 0:
 a_button_img(id01,id02,800,200,ii,'left',400,200,uu,tt,fsize,fcolor,bcolor,'margin:30px 0px 0px 60px; padding:10px;');  
　break;
case 1:
 a_button_img(id01,id02,400,100,ii,'left',120,100,uu,tt,fsize,'white','blue','margin:10px 0px 0px 60px; ');  
　break;
case 2:
 a_button_img(id01,id02,405,100,ii,'left',120,100,uu,tt,fsize,'white','red','margin:10px 0px 0px 10px; ');  
a_div('null',id02,'100%',1,'',16,'white','','');
　break;
default:
 a_button_img(id01,id02,ww,hh,ii,ifloat,iww,ihh,uu,tt,fsize,'black','',oth); 
}

 }    }

function a_autoindex(id01,id02,ww,hh,fname,fsize,fcolor,bcolor,oth) { 
 var lh=fsize+10;
 var data=fname;
 var weblink=data.split('[more]'); 
 for (i=0;i<=weblink.length-1;i++){
 var j=i+1;  
 var uu=weblink[i].substring(weblink[i].indexOf("[url]")+5,weblink[i].indexOf("[/url]") ); 
 var tt=weblink[i].substring(weblink[i].indexOf("[txt]")+5,weblink[i].indexOf("[/txt]") ); 
 var b2='<div style="width:30px; height:30px; float:left; padding:5px; border:1px solid black; border-radius:7px ; font-size:30px; text-align:center; line-height:46px; color:white; background:blue; margin:0px 7px 0px 0px; "><b> '+j+' </b></div><div  style=" margin:7px; float:top;"> '+tt+' </div>';
 var oth2=oth + 'cursor:pointer; font-size:'+fsize+'; letter-spacing:2px; line-height:'+lh+'px ; " onclick="javascript:'+uu+'" '; 
 a_div(id01,id02,ww,hh,b2,fsize,fcolor,bcolor,oth2); 
}   }

function more_paper(id01,id02,ww,hh,fname,fsize,fcolor,bcolor) { 
 //var lh=fsize+10;  
 var lh="";
 var data=checkImgtag(fname);
 var webpage=data.split('[more]'); 
 var ii=webpage[0].substring(webpage[0].indexOf("[icon]")+6,webpage[0].indexOf("[/icon]") ); 
 var un=webpage[0].substring(webpage[0].indexOf("[name]")+6,webpage[0].indexOf("[/name]") ); 
 var oth2='font-size:'+fsize+'px; letter-spacing:2px; line-height:'+lh+'px; margin:0px; padding:40px; ' ; 
 for (i=1;i<=webpage.length-1;i++){
 var b2='<img src= ' + ii + ' width=70px margin=10px align=top ><b> ' + un + ' </b> <pre> ' + webpage[i] + ' </pre>'; 
 //alert(b2);
 a_div(id01,id02,ww,hh,b2,fsize,fcolor,bcolor,oth2); 
}  }

function more_infogra(id01,id02,ww,hh,fname,fsize,fcolor,bcolor) { 
 //var lh=fsize+10;  
 var lh="";
 var data=checkImgtag(fname);
 var webpage=data.split('[more]'); 
 var ii=webpage[0].substring(webpage[0].indexOf("[icon]")+6,webpage[0].indexOf("[/icon]") ); 
 var un=webpage[0].substring(webpage[0].indexOf("[name]")+6,webpage[0].indexOf("[/name]") ); 
 var oth2='font-size:'+fsize+'px; letter-spacing:2px; line-height:'+lh+'px; margin:0px; padding:40px; ' ; 
 for (i=1;i<=webpage.length-1;i++){
 var b2='<img src= ' + ii + ' width=70px margin=10px align=top ><b> ' + un + ' </b>  ' + webpage[i] + ' '; 
 //alert(b2);
 a_div(id01,id02,ww,hh,b2,fsize,fcolor,bcolor,oth2); 
}  }


function more_fbl(id01,id02,ww,hh,fname,fsize,fcolor,bcolor) { 
 //var lh=fsize+10; 
 
 var lh="";
 var data=checkImgtag(fname);

 var webpage=data.split('[more]'); 

 var ii=webpage[0].substring(webpage[0].indexOf("[icon]")+6,webpage[0].indexOf("[/icon]") ); 
 var un=webpage[0].substring(webpage[0].indexOf("[name]")+6,webpage[0].indexOf("[/name]") ); 
 var oth2='font-size:'+fsize+'px; letter-spacing:2px; line-height:'+lh+'px; margin:20px; padding:20px; border:3px solid #d9d9d9;  border-radius:10px; ' ; 
 for (i=1;i<=webpage.length-1;i++){
 var b2='<img src= ' + ii + ' width=70px margin=10px align=top ><b> ' + un + ' </b> <pre> ' + webpage[i] + ' </pre>'; 
 //alert(b2);
 a_div(id01,id02,ww,hh,b2,fsize,fcolor,bcolor,oth2); 
}  }




//-->
