var kuandu = 1220; 	//这个数字是每张图片的宽度，记得按需更改
var shijian = 700; //这个数字是动画时间
var jiangeshijian = 7000; //这个数字是间隔时间
var nowimg = 0;
var mytimer = null;

$("#czimg ul:first").clone().appendTo("#czimg");
var mytimer = window.setInterval(function(){youanniu();},jiangeshijian);
$("#czlunbo").mouseenter(function(){
    window.clearInterval(mytimer);
});
$("#czlunbo").mouseleave(function(){
    window.clearInterval(mytimer);
    mytimer = window.setInterval(function(){
        youanniu();
    },jiangeshijian);
});
$("#czrightbut").click(youanniu);

function youanniu(){
    if(!$("#czimg").is(":animated")){
        if(nowimg < $("#czimg ul").length - 2){
            nowimg = nowimg + 1;
            dongzuo();
        }else{
            nowimg = 0;
            $("#czimg").animate(
                {
                    "left":-kuandu*($("#czimg ul").length-1)
                },shijian,function(){
                    $("#czimg").css("top",0);
                }
            );
            $(".hd_rr span").eq(nowimg).addClass("cur").siblings().removeClass("cur");
        }
    };
};
$(".hd_rr span").click(function(){
    nowimg = $(this).index();
    dongzuo();
});
function dongzuo(){
    $("#czimg").stop().animate(
        {
            "left":-kuandu * nowimg
        }
        ,shijian
    );
    $(".hd_rr span").eq(nowimg).addClass("cur").siblings().removeClass("cur");
}
