/**
 * Created by A on 2016/5/15.
 */

window.onload=function () {


    //    fottor
    //找人
    var box = document.getElementById("box");
    var ad = box.children[0];
    var ul = document.getElementById("imgs");
    var lis = ul.children;
    var arr = document.getElementById("arr");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    //alert(ad.offsetWidth);
    var imgWidth = ad.offsetWidth;//图片宽度

    //鼠标经过盒子显示箭头
    box.onmouseover = function () {
        arr.style.display = "block";//把装有箭头的盒子显示出了
    }
    box.onmouseout = function () {
        arr.style.display = "none";//把装有箭头的盒子隐藏
    }

    var pic = 0;
    //点击右侧按钮 移动ul到指定位置
    right.onclick = function () {
        if (pic < lis.length - 1) {
            pic++;
            //目标 和 pic 有关 和图片宽度有关 而且是负数
            var target = -pic * imgWidth;
            animate(ul, target);
        }
    }
    left.onclick = function () {
        if (pic > 0) {
            pic--;
            //目标 和 pic 有关 和图片宽度有关 而且是负数
            var target = -pic * imgWidth;
            animate(ul, target);
        }
    }


    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            /*//如果offsetLeft<target 说明 盒子在目标左侧 应该往右走 step是正数
             if (obj.offsetLeft < target) {
             var step = 10;
             }
             //如果offsetLeft>target 说明 盒子在目标右侧 应该往左走 step是负数
             if (obj.offsetLeft > target) {
             var step = -10;
             }*/
            var step = 20;
            step = obj.offsetLeft < target ? step : -step;
            leader = leader + step;
            if (Math.abs(obj.offsetLeft - target) > Math.abs(step)) {
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 15)
    }










































    var footer_div = document.getElementById("footer_div");

    var ulid = document.getElementById("ulid");
    var ullis=ulid.children;
    var iwidth = ulid.offsetWidth;
    var timer = null;
    var pic = 0;


//鼠标经过盒子停止
    footer_div.onmouseover = function () {
        clearInterval(timer);
    }
//鼠标离开盒子移动
    footer_div.onmouseout = function () {
        timer = setInterval(play, 20);
    }

//深度克隆节点
    var firstImg=ullis[0].cloneNode(true);
    ulid.appendChild(firstImg);

//让ul移动  定时器
    timer = setInterval(play, 20);
    
    function play(){
        /*if(pic==ullis.length-1){
            ulid.style.left="-40px";
            pic=0;
        }
        pic++;
        var target = -pic * iwidth;
        animate(ulid, target);*/

        if(ulid.offsetLeft>-3600){
            var leader = ulid.offsetLeft;
            var step = -10;
            leader = leader + step;
            ulid.style.left = leader + "px";
        }else {
            ulid.style.left = "10px";
        }
    }

    /*
    1.leader=leader+step
    2.让ul往左移动距离为leader
    3.移动到最后一个  变回第一个

    */


    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = 10;
            step = obj.offsetLeft > target ? -step : step;
            var leader = obj.offsetLeft;
            leader = leader + step;
            if (Math.abs(obj.offsetLeft - target)>Math.abs(step)) {
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 20);
    }



};


