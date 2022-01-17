
$(document).ready(function(){

    //원페이지 스크롤레이아웃
    let n = $('.gnb > ul > li');
    console.log(n);

    let gnb = $('.gnb > ul > li');
    gnb.click(function(){

        n = $(this).index()+1;
        console.log(n);

        $('html,body').stop().animate({scrollTop:$('main > section').eq(n).offset().top},400,'easeOutQuart');
        
        return false;
    });

    //toggle
    $('#toggle').click(function(){
        $(this).children().eq(0).toggleClass('t_act01');
        $(this).children().eq(1).toggleClass('t_act02');
        $(this).children().eq(2).toggleClass('t_act03');
    });

    var toggle = $('#toggle');

    toggle.click(function(){
        $(this).next().toggleClass('act02');
    });

    //첫 화면
    

    // about
    $('.con01').show();

    let tab = $('#tab_con > ul > li > a');

    tab.click(function(){
        $('#tab_con > ul > li > div').hide();
        $(this).next().show();
        
        return false;

    });

    // setInterval(function(){
    //     $('#tab_con > ul > li > a').toggle();
    // },250);

    //portfolio
    const list = $('#list > li');
    const lnb = $('.f_gnb > ul > li > a');

    //전체보기
    $('.f_gnb > ul > li:first-child > a').addClass('act03');

    lnb.click(function(){
        $('.f_gnb > ul > li > a').removeClass('act03');
        $(this).addClass('act03');
    });

    //caption
    list.hover(function(){
        $(this).find('.caption').stop().animate({'top':'5px'},400);
    },function(){
        $(this).find('.caption').stop().animate({'top':'-100px'},200);
    });
    
    //모달

    const img = $('#list > li img');

    img.click(function(){
        let imgUrl = $(this).attr('src');
        console.log(imgUrl);

        let modal = "<div class='modal'><img src='"+imgUrl+"'><a href='#' title=''><i class='fas fa-times'></i></a></div>";

        $('body').append(modal); //모달을 띄우기

        $('.modal a').click(function(){
            $('.modal').fadeOut();
            return false;
        });

        return false;
    });

    const total = $('.f_gnb > ul > li:first-child');
    const wed = $('.f_gnb > ul > li:nth-child(2)');
    const design = $('.f_gnb > ul > li:last-child');

    total.click(function(){
        $('#list li').hide();
        $('#list li').stop().fadeIn();

        return false;
    });

    wed.click(function(){
        $('#list li').hide();
        $('.wed').stop().fadeIn();

        return false;
    });

    design.click(function(){
        $('#list li').hide();
        $('.design').stop().fadeIn();

        return false;
    });
    

    //faq
    let faq = $('.qa > ul > li > a');

    faq.click(function(){

        $(this).next('p').slideToggle();
        $(this).find('i').toggleClass('act');
        $(this).toggleClass('act01');

        return false;
    });

    //last con
    const content = "저는 언제든지 준비가 되어있습니다!"
    const text = document.querySelector(".text")
    let index = 0;

    function typing(){
        text.textContent += content[index++];
        if(index > content.length){
            text.textContent = ""
            index = 0;
        }
    }
    setInterval(typing, 300)

    //popup

    // let modal = '<div class="modal"><img src="./img/popup.jpg"><p><input type="checkbox" id="ch"><label for="ch">오늘하루 창 열지 않기</label><input type=button value="닫기" id="c_btn"></p></div>';

    // $('body').append(modal);

    // if($.cookie('popup')=='none'){
    //     $('.modal').hide();
    // }

    // let $ex = $('.modal #ch');
    // function closeModal(){
    //     if($ex.is(':checked')){
    //         $.cookie('popup','none',{expires:1, path:'/'});
    //     }
    //     $('.modal').hide();
    // }
    // $('#c_btn').click(function(){
    //     closeModal();
    // });

});