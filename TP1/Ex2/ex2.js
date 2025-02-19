
document.getElementById("favcolor").addEventListener("input", function(){
    document.getElementById("txt").style.color=this.value;
});
function fontsize(value){
     document.getElementById("txt").style.fontSize=value+"px";
 };
 document.getElementById("fonts").addEventListener("input",function(){
     document.getElementById("txt").style.fontFamily=this.value;
 });
    