/**
 * Created by A on 2016/5/16.
 */
$(function () {
    var a =[110,90,130,70,100,120]
    $(document).mouseenter(function () {
        var spans=$("#f span");
        spans.stop();
        for(var i=0;i<spans.length;i++){
//                    var spanHeight=parseInt(Math.random()*150);
            var spanHeight=a[i];
            $(spans[i]).animate({"height":spanHeight},800,function () {
//                        spans.stop();
            })
        }
    });
    $(document).mouseleave(function () {
        var spans =$("#f span");
        spans.stop()
        spans.animate({"height":0},800,function () {
//                    spans.stop();
        });
    });
});