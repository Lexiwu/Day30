﻿///<reference path="jquery-1.12.3.js" /> 
/// <reference path="validate/jquery.validate.js" />
/// <reference path="validate/additional-methods.js" />

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

    
        $('.circle-pic').slick({
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3
            });
        
    /////// contact effect：用json.post新增資料

        $('.sub-buttom').click(function () {

            var validator = $("#myform").validate({
                rules: {
                    Name: { required: true, maxlength: 7 },
                    Email: { required: true, email: true },
                    Subject: { required: true },
                    Message: { required: true }
                },
                messages: {
                    Name: { maxlength: "姓名請勿超過七個子" },
                    Email: { required: "請留下email", email: "格式錯誤" },
                    Subject: { required: "給個標題好不" },
                    Message: { required: "留點有意義的話吧" }
                }

            });

            if ($("#myform").valid()) {
               /*驗證成功，post the form data to server*/

                $.ajaxSetup({ contentType: "application/json;charset=utf-8" });
                //利用jQuery 取得目標編號的內容
                //1.利用jQuery取得編號index目標
                //[input01,input02,input03] 能夠依照編號取得01或02或03                 
                //範例：               document.getElementsByClassName('blah')[9].innerHTML = 'blah';
                //如何轉換成jQuery寫法：$(".blah").eq(9).html('blah'); 
                //var result1 = document.getElementsByClassName('information');   //取得框框輸入的值
                //var result2 = document.getElementsByClassName('info-mes');      //取得框框輸入的值
                var clientName = $(".information").eq(0).val();     //class=information有三個
                var clientEmail = $(".information").eq(1).val();    //利用console去看回傳的值是什麼
                var clientSubject = $(".information").eq(2).val();  //回傳的object為陣列[0,1,2]
                var clientMes = $(".info-mes").eq(0).val();         //class=info-mes [0]
                var customerInfo = {                                //新增資料：json格式
                    Name: clientName,
                    Email: clientEmail,
                    Subject: clientSubject,
                    Message: clientMes
                };
                //customerInfo.Name = result1[0].value;
                //customerInfo.Email = result1[1].value;
                //customerInfo.Subject = result1[2].value;
                //customerInfo.Message = result2[0].value;
                var data1 = JSON.stringify(customerInfo);       //2.將資料轉換成json格式
                //console.log(data1); 利用console看有沒有反應
                $.post("http://localhost/myapi/api/myapi", data1)   //3.post新增資料
                 .done(function (client) {
                     alert('新增資料成功!!');
                 })
            } else return false;
        });//.sub-buttom click ending
    


    /////// newsletter add email info

        $('.newsltter-btn').click(function () {

            var validator = $("#newsletter-form").validate({
                rules: {                
                    newsletter_email: { required: true, email: true }                    
                },
                messages: {                    
                    newsletter_email: { required: "請留下email", email: "格式錯誤" }                   
                },
                errorPlacement: function (error, element) {
                    error.appendTo(".error-message");
                }
            });

            if ($("#newsletter-form").valid()) {
                $.ajaxSetup({ contentType: "application/json;charset=utf-8" });
                var news_Email = $(".subscribe-newsletter").eq(0).val();                   
                var newsInfo = {                                                
                    Email: clientEmail                    
                };                
                var data_info = JSON.stringify(newsInfo);                       
                $.post("http://localhost/myapi/api/myapi", data_info)  
                 .done(function (client_info) {
                     alert('新增資料成功!!');
                 })
            } else return false;
        });
       
    
    

});