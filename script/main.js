
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

    //first
    setInterval(function(){
        $('#m_name').animate({
            'opacity' : '0.2'
        },300);
        $('#m_name').animate({
            'opacity':'1'
        },300)
    },1000)


    // about
    $(window).scroll(function(){

        let sPos = $(this).scrollTop();

        if(sPos>=420){
            $('.profile').fadeTo(3000,1);
            $('.my_pr').fadeTo(3000,1);
        }

    })


    //skill
    $(window).scroll(function(){

        let sPos = $(this).scrollTop();
        // $('.status').text(sPos);

        if(sPos>=1000){
            $('.minibox01').fadeTo(3000,1);
            $('.minibox02').fadeTo(3000,1);
        }

    });



    // // portfoilo slide

    let c_btn = $('.inner_project > .c_btn > li');
    let b = c_btn.index();
    console.log(b);
    
    c_btn.click(function(){
        n = -($(this).index()*$('.inner_project .slide li').width());
        console.log(n);

        $('.slide').animate({'left':n},1200);
        $('.c_btn li').removeClass('act01');
        $(this).addClass('act01');


    });

    // function move(n){
    //     n = -(n*$('.slide > li').width());
    //     $('.slide').animate({'left':n},500);
    // }

    // let num = 0;
    //         let Timer = setInterval(function(){
    //             if(num == 3){ //마지막 이미지라면
    //                 num = 0;
    //                 $('.c_btn li').removeClass('act01');
    //                 $('.c_btn li').eq(num).addClass('act01');
    //             }else{
    //                 num++;
    //                 $('.c_btn li').removeClass('act01');
    //                 $('.c_btn li').eq(num).addClass('act01');
    //             }
    //             move(umn);
    //         },5000);


    // design
    //모달

    const img = $('.gallery > ul > li img');

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
    




    //last con
    const content = "여기까지 봐주셔서 감사합니다 :)"
    const text = document.querySelector(".text")
    let index = 0;

    function typing(){
        text.textContent += content[index++];
        if(index > content.length){
            text.textContent = ""
            index = 0;
        }
    }
    setInterval(typing, 200)

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