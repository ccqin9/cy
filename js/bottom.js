/**
 * Created by Administrator on 2016/5/15.
 */
$(function () {
    $("#l_banner").children().mouseenter(function () {
        this.style.backgroundImage="url('images/m2.png')"
    });
    $("#l_banner").children().mouseleave(function () {
        this.style.backgroundImage="url('images/m1.png')"
    });

   $(".shoufengqin_r .qin").mouseenter(function () {
       $(".shoufengqin_r .qin").stop();
      $(this).animate({"width":300},1000).siblings().animate({"width":50},1000);
       // $(".shoufengqin_r .qin").stop()
   });
    $(".shoufengqin_r .qin").mouseleave(function () {
        $(".shoufengqin_r .qin").stop()
    });
    $(".shoufengqin_r").mouseleave(function () {
        $(".shoufengqin_r .qin").animate({"width":100},1000);
        // $(".shoufengqin_r .qin").stop()
    });
    $("#l_banner").mouseenter(function () {
        $("#l_banner").animate({"left":20},800,function () {
            $("#l_banner").children().css("display","block");
            $("#l_banner").children().children("a").css({"display":"block", "width":80,"height":80})
        });
    });
    $("#banner").mouseleave(function () {
        $("#l_banner").animate({"left":-40},600,function () {
           $("#l_banner").stop();
            $("#l_banner").children().css("display","none");
        });

        
        
    });








});