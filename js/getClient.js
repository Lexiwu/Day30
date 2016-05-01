/// <reference path="jquery-1.12.3.js" />


$(function () {

    $('.click').click(function () {
        var result = $(".enterEmail").eq(0).val();  //1.輸入email按下click取得email的值
        //var ar = [];
        //ar.push({ name: "AAA" });
        //ar.push({ name: "BBB" });
        //ar.push({ name: "CCC" });
        //console.log(ar[1].name);
        $.get("http://localhost/myapi/api/myapi?email="+result)  //設置收尋條件email=輸入的email
        .done(function (myemail) {
            //console.log(myemail);  //可用console去看回傳的東西是什麼：陣列

            if (myemail.length > 0) {   // 判斷陣列的長度若>0：是有相對應的
               // console.log(myemail[0].Name)
                $('.result').eq(0).html("Name:" + myemail[0].Name + "<br/>" +   //jQuery：想要顯示的東西
                                        "ID:" + myemail[0].ID + "<br/>" +
                                        "Subject:" + myemail[0].Subject + "<br/>" +
                                        "Email:" + myemail[0].Email + "<br/>" +
                                        "Message:" + myemail[0].Message);


                //document.write("Name:" + myemail[0].Name + "<br/>" +      
                //               "ID:" + myemail[0].ID + "<br/>" +
                //               "Subject:" + myemail[0].Subject + "<br/>" +
                //               "Email:" + myemail[0].Email + "<br/>" +
                //               "Message:" + myemail[0].Message);
            }
            else {
                      $('.result').eq(0).html("無相關資料");
            }
            //result.innereHTML = myemail;
            //"aaa@abc.asdf".innereHTML = myemail;


        })
    
    
    
    
    
    })







})