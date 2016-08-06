/**
 * Created by Administrator on 2016/6/30.
 */
$(function () {
    //背景
    var imgNum=3;
    var num=1;
    setInterval(function () {
        $('.my-home').css("background-image","url('images/home-bg"+num+".jpg')");
        if(num<imgNum){
            num++;
        } else{
            num=1;
        }
    },4000);
    //导航效果
    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        console.log(1111)
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top >60) $('#nav-container').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('#nav-container').stop().animate({
            "opacity": '0',
            "top": '-75'
        });
    }

    $('#download').click(function () {
        $('.mask').show();
    });
    $('.no').click(function () {
        $('.mask').hide();
    })

})