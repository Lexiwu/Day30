/// <reference path="jquery-1.12.3.js" /> 

$(function () {  


    /////////navbar effect
    $("#gotop").click(function () {
        jQuery("html,body").animate({ scrollTop: 0 }, 800); //1.點下按鈕之後會以 animate動態效果讓捲軸捲到網頁最頂端
    });
    //2.$(this).scrollTop()就是用來取得目前的位置距離網頁頂端有多遠，若大於 300px 就會將按鈕顯示出來，小於就會隱藏。
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#gotop').fadeIn();
        } else {
            $('#gotop').stop().fadeOut();
        }
    });

    //1.先讓按鈕有按下然後執行內容的效果
    $('#menu-about').click(function () {
        //2.利用animate移到到指定的區塊
        $('html,body').animate({ scrollTop: $('.vedioplay').offset().top }, 800);
    });

    $('#menu-teams').click(function () {
        $('html,body').animate({ scrollTop: $('.team').offset().top }, 800);
    })

    $('#menu-works').click(function () {
        $('html,body').animate({ scrollTop: $('.work').offset().top }, 800);
    })

    $('#menu-peoplesay').click(function () {
        $('html,body').animate({ scrollTop: $('.testimonials').offset().top }, 800);
    })

    $('#menu-contact').click(function () {
        $('html,body').animate({ scrollTop: $('.contact').offset().top }, 800);
    })

    //start use my carousel
    $('.my-carousel').slick({
        autoplay: true,
        arrows: false,
        dots:true
    });
   

    ///////// story effect

    $(".learnmore2").click(function () {
        $(".morestory").slideToggle(1000);
    });




    ///////// Videi effect
    $('.playicon').click(function () {   //1.按下按鈕-影片播放
        $('.my-video').get(0).play();
        $('.v-top').hide();              //2.1隱藏紫色布幕
        $('.vedio-zone').hide();        //2.2隱藏播放按鈕
        $('.my-video').on('ended', function () {       //3.當影片播放完畢,回到原始狀態
            $('.v-top').show();
            $('.vedio-zone').show();
        })
    })
    
    ///////////testimonials effect

    $(document).ready(function(){
        $('.circle-pic').slick({
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3
            });
        });
    
});