$(function(){
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

//slider for every contents
$('.owl-carousel').owlCarousel({
    margin:10,
    autoWidth:true,
    items:4
});
});
///////////////////////////////////////////////////////////////////////
 
////////////////////////////////////////////////////////////////////////
//for close cards
function closecard(cardno){
    console.log(cardno);
    switch (cardno) {
        case 1:
            $("#card1").css({
                "display":"none"
              });
          break;
        case 2:
            $("#card2").css({
                "display":"none"
              });
          break;
        case 3:
            $("#card3").css({
                "display":"none"
              });;
          break;
        case 4:
            $("#card4").css({
                "display":"none"
              });
          break;
        case 5:
            $("#card5").css({
                "display":"none"
              });
          break;
      }
}
/////////////////////////////////////////////////////