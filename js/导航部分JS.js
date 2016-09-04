$(function () {
    // $("#navmenu>a").click(function () {
    //    
    //    
    // })
    
    
    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                //json 属性名:属性值 k:json[k]
                if (k == "opacity") {
                    var leader = parseInt(getStyle(obj, k) * 100);
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k == "zIndex") {
                    obj.style[k] = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }

                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15)
    }

    function getStyle(obj, attr) {
        if (obj && obj.currentStyle) {
            return obj.currentStyle[attr];//IE678
        } else {
            return window.getComputedStyle(obj, null)[attr];
        }
    }
    var clound=document.getElementById("clound");
    var fristpo= $("#navmenu a").get(0).offsetLeft+10;
    // console.log(fristpo);

    // var fristpo=410;

    $("#navmenu a").mouseenter(function (e) {
       
       // var target= this.offsetLeft+210;
        // console.log(this.offsetLeft);
       // alert($(this).offset().left) ;
        var target= this.offsetLeft+10;
        

        animate(clound,{"left":target})

    })
    // $("#navmenu>li:eq(3)").mouseenter(function () {
    //     var target= $(this).offset().left;
    //
    //     animate(clound,{"left":target})
    //     $(".ulhide").addClass("show")
    //    
    // })
    $("#navmenu a").mouseleave(function () {
        // alert(fristpo)
        animate(clound,{"left":fristpo})


    })

    // $("#navmenu>li:eq(3)").mouseleave(function () {
    //     animate(clound,{"left":fristpo})
    //     $(".ulhide").removeClass("show")
    // })
       

       
        // $(".ulhide").addClass("show")
    $("#navmenu a").click(function () {
        
       
        fristpo = this.offsetLeft+10;
        return false
       


    })
    
   document.body.onscroll=function () {
       // alert(13)
       var st=$(this).scrollTop();
       var tartop=$(".navt").offset().top;
       // console.log(tartop);

       if(st>=97){
           $(".navt").css("position","fixed")
          
       }
       else{
           $(".navt").css("position","relative")
           
       }
       
     
   }
        
   
        // alert(123);
       
        
    
    
});
