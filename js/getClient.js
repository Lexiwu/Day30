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

            if (myemail.length > 0) {   // 判斷陣列的長度若>0：有查尋到內容
                // console.log(myemail[0].Name)
                var mycontent = "";
                $.each(myemail, function (index, value) {
                   console.log(value);
                   mycontent = mycontent +"ID:"+ value.ID+"ID:"+value.Name+"ID:"+value.Email+"ID:"+value.Subject+"ID:"+value.Message+"<br/>";
                })
                //for (var i = 0; i < myemail.length; i++) {
                //    mycontent = mycontent + "Name:" + myemail[i].Name + "<br/>" +   //使用jQuery顯示回傳的內容
                //                        "ID:" + myemail[i].ID + "<br/>" +
                //                        "Subject:" + myemail[i].Subject + "<br/>" +
                //                        "Email:" + myemail[i].Email + "<br/>" +
                //                        "Message:" + myemail[i].Message;
                //}
                $('.result').eq(0).html(mycontent);
                                        
                
                //document.write("Name:" + myemail[0].Name + "<br/>" +      //使用document.write時，會將內容顯示在整個網頁，並取代原本的內容
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



    //////////////////////  DOG
    $('.dog').click(function () {
        $.get("https://data.cityofchicago.org/api/views/qjr3-bm53/rows.json?accessType=DOWNLOAD")
        .done(function (dogdata) {
           console.log(dogdata);
           var alldata = "";
           $.each(dogdata.data, function (index, value) {
                console.log(value[1],value[9],value[10]);
                alldata = alldata + index + ":" + "     No.1:  " + value[1] + "    No.2:" + value[9] + "   No.3:" + value[10] + "<br/>";
            //   // console.log(alldata)

            //})
            $('.dog-result').eq(0).html(alldata);
        })
        });

        

    })

})