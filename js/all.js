$(function(){
    //for searis button
    $(".cat-s").click(function(){
        $(".movie").hide();
        $(".searis").show();
        $(".card").css({"display":"none"});
        //for showcase too
        $(".showcase").css({
            "background" : "url('../../img/tamplets/dark.jpg') no-repeat center center/cover"
        });
    });
    
    //for searis button
    $(".cat-f").click(function(){
        $(".searis").hide();
        $(".movie").show();
        $(".card").css({"display":"none"});
        //for showcase too
        $(".showcase").css({
            "background" : "url('../../img/tamplets/joker.jpg') no-repeat center center/cover"
        });
    });

    //show card
    $(".carousel-cell").click(function(){
        $(".card-drama").css({
            "display":"flex"
        });
        
    });
    $(".close").click(function(){
        $(".card-drama").css({
            "display":"none"
        });
    });

    //play video
    $(".play").click(function(){
        $(".video-bg").css({
            "display":"block"
        });

    });
    $(".video-bg").click(function(){
        $(".video-bg").css({
            "display":"none"
        });
        $('video').trigger('pause');

    });
    //card video play
    $(".small-play").click(function(){
        $(".video-bg").css({
            "display":"block"
        });

    });
    $(".video-bg").click(function(){
        $(".video-bg").css({
            "display":"none"
        });
        $('video').trigger('pause');

    });

});

function card(x){

}
//var cal=document.querySelectorAll('.drama .carousel-cell');
//console.log(cal[1]);
//for (let i = 0; i < 4; i++) {
//    cal[i] += cal[i] + "<br>";
//    console.log(cal[i]);
//  }

