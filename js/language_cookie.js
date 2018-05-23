
$(function () {
    var lan = '';
    var hostname = window.location.hostname;
    if(hostname == 'akulaku.vn')window.localStorage.lan = 'vn';
    lan = window.localStorage.lan;
    var nowTime=new Date();
    var result=(nowTime.getMonth()+1)+'-'+nowTime.getDate();
    $('.navList').append(
        '<div data-v="my"><img src="img/1_Home_new/MY.png" alt="">'+'MY'+'</div>'+
        '<div data-v="id"><img src="img/1_Home_new/ID.png" alt="">'+'ID'+'</div>'+
        '<div data-v="ph"><img src="img/1_Home_new/PH.png" alt="">'+'PH'+'</div>'+
        '<div data-v="vn"><img src="img/1_Home_new/VN.png" alt="">'+'VN'+'</div>'
    )

        if (lan== "id") {
            $('.choose').html(
                '<div  data-v="id">'+'<img src="img/1_Home_new/ID.png" alt="">'+'ID'+'</div>'+
                '<ul>'+
                    '<li data-v="ph"><img src="img/1_Home_new/PH.png" alt="">'+'PH'+'</li>'+
                    '<li data-v="my"><img src="img/1_Home_new/MY.png" alt="">'+'MY'+'</li>'+
                    '<li data-v="vn"><img src="img/1_Home_new/VN.png" alt="">'+'VN'+'</li>'+
                '</ul>'
            )
            $("[data-localize]").localize("application", {
                pathPrefix: "lang",
                language: "id"
            });
            $('.animate-img').attr('src','img/1_Home_new/rp-5.png');
            
//            if(result.substr(0,1)==6) var days=5-result.substring(2,3);

                $('.con-10 .p1').text('Kirimkan kritik dan saran Anda ke email kami dibawah Ini. Kami akan berusaha membantu Anda sebaik mungkin. E-mail Address : support@akulaku.com');
                $('.con-10 .p2').hide();
                $('.con-10 div').hide();

//                $('.con-10 .p1').text('AKULAKU akan hadir ' + days + ' hari lagi, tunggu saatnya!');
//                $('.con-10 .p2').text('Kami masih berada dalam versi percobaan, tunggu hingga 6 Juli 2016, untuk Softlaunch.');
                
        }
        if (lan == "my" || lan == '' || lan == undefined) {
            $('.choose').html(
                '<div  data-v="my">'+'<img src="img/1_Home_new/MY.png" alt="">'+'MY'+'</div>'+
                '<ul>'+
                    '<li data-v="ph"><img src="img/1_Home_new/PH.png" alt="">'+'PH'+'</li>'+
                    '<li data-v="id"><img src="img/1_Home_new/ID.png" alt="">'+'ID'+'</li>'+
                    '<li data-v="vn"><img src="img/1_Home_new/VN.png" alt="">'+'VN'+'</li>'+
                '</ul>'
            )
            $("[data-localize]").localize("application", {
                pathPrefix: "lang",
                language: "my"
            });

                $('.con-6 .p-3').text('Please send your precious comments to our email address below. We would like to try our best to serve you very well. E-mail Address : support@akulaku.com');
//                $('.con-10 .p2').hide();
//                $('.con-10 div').hide();

//                $('.con-10 .p1').text('Coming Soon in ' + days + ' DAYS.');
//                $('.con-10 .p2').text('We are still under test phase. The official version will be released on May 27. Please leave your email address here that we could  inform you at the first minute.');

        }
        if (lan == "ph") {
            $('.choose').html(
                '<div  data-v="ph">'+'<img src="img/1_Home_new/PH.png" alt="">'+'PH'+'</div>'+
                '<ul>'+
                    '<li data-v="my"><img src="img/1_Home_new/MY.png" alt="">'+'MY'+'</li>'+
                    '<li data-v="id"><img src="img/1_Home_new/ID.png" alt="">'+'ID'+'</li>'+
                    '<li data-v="vn"><img src="img/1_Home_new/VN.png" alt="">'+'VN'+'</li>'+
                '</ul>'
            )
            $("[data-localize]").localize("application", {
                pathPrefix: "lang",
                language: "ph"
            });
            $('.con-10 .p1').text('Coming soon');
            $('.con-10 .p2').hide();

        }
        if (lan == "vn") {
            $('.choose').html(
                '<div  data-v="vn">'+'<img src="img/1_Home_new/VN.png" alt="">'+'VN'+'</div>'+
                '<ul>'+
                '<li data-v="my"><img src="img/1_Home_new/MY.png" alt="">'+'MY'+'</li>'+
                '<li data-v="id"><img src="img/1_Home_new/ID.png" alt="">'+'ID'+'</li>'+
                '<li data-v="ph"><img src="img/1_Home_new/PH.png" alt="">'+'PH'+'</li>'+
                '</ul>'
            )
            $("[data-localize]").localize("application", {
                pathPrefix: "lang",
                language: "vn"
            });
            $('#apple').hide();
            $('.con-6,.foot').hide();
            $('.nv-logo,.companyInfo,.aboutAku,#directions').show();
        }

   
    $('.head .menu').click(function(){
        $('.navList').animate({height:'100%'},1000);
    })
    $('.navList .close').click(function(){                
        $('.navList').animate({height:'0'},1000);
    })
     
    $(".goTop").on("click", function () {
        $("html,body").animate({
            "scrollTop": 0
        }, 500);
    })
    $('.head .choose div').click(function () {
        $('.head .choose ul').show();
    })
    $('.head .choose li').click(function () {
        var li_ = $(this).html();
        var div_ = $('.head .choose div').html();
        var li_v = $(this).attr('data-v');
        var div_v = $('.head .choose div').attr('data-v');
        $('.head .choose div').html(li_);
        $('.head .choose div').attr('data-v', li_v);
        $(this).html(div_);
        $(this).attr('data-v', div_v);
        $('.head .choose ul').hide(); 
        window.localStorage.lan=$('.head .choose div').attr('data-v');
        location.reload();

    })
    $('.navList div').click(function(){
        window.localStorage.lan=$(this).attr('data-v');
        location.reload();
    })
    $('.nav .choose div').click(function () {
        $('.nav .choose ul').show();
    })
    $('.nav .choose li').click(function () {
        var li_ = $(this).html();
        var div_ = $('.nav .choose div').html();
        var li_v = $(this).attr('data-v');
        var div_v = $('.nav .choose div').attr('data-v');
        $('.nav .choose div').html(li_);
        $('.nav .choose div').attr('data-v', li_v);
        $(this).html(div_);
        $(this).attr('data-v', div_v);
        $('.nav .choose ul').hide();
         window.localStorage.lan=$('.nav .choose div').attr('data-v');
        location.reload();

    })


   
});
