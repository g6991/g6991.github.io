<!--

function add_div(id01,id02,ww,hh,pp,xx,yy,zz,txt,fsize,cc,bb,oth) {
var b='<div id='+id01+' style="width: '+ww+'; height:'+hh+'; font-size:'+fsize+'px; padding:0px; margin:0px; color:'+cc+'; background:'+bb+'; position:'+ pp +'; top:'+yy+';  left:'+xx+';  z-index: '+zz+'; '+oth+'  " >'+txt+'</div>';
 lay2id(b,id02);      }

function a_div(id01,id02,ww,hh,txt,fsize,cc,bb,oth) {
var b='<div id='+id01+' style="width: '+ww+'; height:'+hh+'; float:left;   padding:0px; margin:0px;  color:'+cc+'; font-size:'+fsize+'px; background:'+bb+';  '+oth+'  " >'+txt+'</div>';
 lay2id(b,id02);      }

function add_img(id01,id02,ww,hh,pp,xx,yy,zz,txt,oth) {
var fsize=''; var cc=''; var bb='';
var b2='<img src='+txt+' style="width:100%; height:100%">';
add_div(id01,id02,ww,hh,pp,xx,yy,zz,b2,fsize,cc,bb,oth); 
     }

function a_img(id01,id02,ww,hh,txt,oth) {
var fsize=''; var cc=''; var bb='';
var b2='<img src='+txt+' style="width:100%; height:100%">';
a_div(id01,id02,ww,hh,b2,fsize,cc,bb,oth); 
     }

function add_button_img(id01,id02,ww,hh,pp,xx,yy,zz,ii,iww,ihh,uu,tt,fsize,cc,bb) {
var b='<div id='+id01+'  style="cursor:pointer; width:'+ ww+'; height:'+hh+'; padding:0; border:0px solid ; border-radius:7px ; font-size:'+fsize+';color:'+cc+'; background:'+bb+'; position: '+pp+'; top:'+yy+'; left:'+xx+'; z-index:'+zz+' ;  " onclick="javascript:includejs(\''+uu+'\'); " ><div  style="border-radius:7px;"><img src='+ii+' style="width:'+iww+'px; height:'+ihh+'px; border-radius:7px ; " ></div> <div  style=" margin:7px;"> '+tt+' </div></div>';
 lay2id(b,id02);      }

function a_button_img(id01,id02,ww,hh,ii,ifloat,iww,ihh,uu,tt,fsize,cc,bb,oth)  { 
var lh=fsize+10;
var b2='<div  style="border-radius:7px; float:'+ifloat+'; "><img src='+ii+' style="width:'+iww+'px; height:'+ihh+'px; border-radius:7px;  margin:0px 7px 0px 0px;" ></div> <div  style=" margin:7px; float:top; "> '+tt+' </div>';
oth+='cursor:pointer; border-radius:7px; font-size:'+fsize+'; letter-spacing:2px; line-height:'+lh+'px ; "   onclick="javascript:includejs(\''+uu+'\'); ' ;
a_div(id01,id02,ww,hh,b2,fsize,cc,bb,oth); 
     }

function add_button(id01,id02,ww,hh,pp,xx,yy,zz,uu,tt,fsize,cc,bb) {
var b='<div id='+id01+'  style="cursor:pointer; width:'+ww+'; height:'+hh+'; padding:5px; border:1px solid black; border-radius:7px ; font-size:'+fsize+'; text-align:center; line-height:'+hh+'px; color:'+cc+'; background:'+bb+'; position:'+pp+'; top:'+yy+';  left:'+ xx+'; z-index:'+zz+' ; "  onclick="javascript:includejs(\''+uu+'\'); " >'+tt+'</div>';
 lay2id(b,id02);      }

function a_button(id01,id02,ww,hh,uu,tt,fsize,cc,bb,oth)  
{  var lh=fsize+10; var  ww2=ww-10; var hh2=hh-10; 
var b2='<div style="width:'+ww2+'; height:'+hh2+'; float:left; padding:5px; border:1px solid black; border-radius:7px ; font-size:'+fsize+'px; text-align:center; line-height:'
+hh2+'px; color:'+cc+'; background:'+bb+'; " ><b> '+tt+' </b></div>';
oth+='cursor:pointer; "   onclick="javascript:includejs(\''+uu+'\'); ' ;
a_div(id01,id02,ww,hh,b2,fsize,'','',oth); 
} 

function insertnull(idid) { 
$('#'+idid).html(' ');      }

function lay2id(b,idid) {  
document.body.scrollTop=0;
$('#'+idid).append(b);    
}

function insert2id(b,idid) {  
document.body.scrollTop=0;
$('#'+idid).html(b);    }

function includejs(fname) { 
$.getScript(fname, function()
{        });    }

function zerozero() { 

includejs('main.txt');

 }

//-->









