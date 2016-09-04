/**
 * Created by jf on 2016/5/6.
 */
window.onload = function () {
    //alert("文件引用成功了");

    //找人
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var arrRight = document.getElementById("arrRight");
    var arrLeft = document.getElementById("arrLeft");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;


    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

    wrap.onmouseover = function () {
        animate(arrow, {'opacity': 1});
    };
    wrap.onmouseout = function () {
        animate(arrow, {'opacity': 0});
    };
    issign();


   function issign(){
       for(i=0;i<lis.length;i++){
           animate(lis[i], config[i],function(){
               flag=true;
           });
       }
   }
var flag=true;
    arrLeft.onclick=function(){
        if(flag){
            flag=false;
            config.push(config.shift());
            issign();
        }

    }


    arrRight.onclick=function() {
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            issign();
        }
    }
}