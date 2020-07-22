var count=0;//图片数组的下标
var picture=document.getElementById("pictures").getElementsByTagName("div");
var button=document.getElementById("button").getElementsByTagName("li");
var time=window.setInterval(autochange,4000);
function autochange()
{
count++;
if(count==picture.length)
count=0;
for(var i=0;i<picture.length;i++)
   {
if(i==count){
picture[i].className="show";
button[i].className="showbut";
}
else{
picture[i].className="notshow";
button[i].className="but";
}
}
}
