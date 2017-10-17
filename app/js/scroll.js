$(window).scroll(function() {

  var scrollPos = $(this).scrollTop(),
      tumblrPos = $('#tumblr').offset().top,
      neatPos   = $('#neat').offset().top,
      addPos    = $('#additional').offset().top;

      console.log(neatPos);

  if ( scrollPos >= tumblrPos && !$('.main-container').hasClass('fixed-tumblr') && !$('.main-container').hasClass('fixed-neat') && !$('.main-container').hasClass('fixed-add') ) {
    $('.main-container').addClass('fixed-tumblr');
  } else if(scrollPos <= tumblrPos - 76 && $('.main-container').hasClass('fixed-tumblr')) {
    $('.main-container').removeClass('fixed-tumblr');
  } else if(scrollPos >= neatPos && !$('.main-container').hasClass('fixed-neat') && !$('.main-container').hasClass('fixed-add')){
    $('.main-container').addClass('fixed-neat');
    $('.main-container').removeClass('fixed-tumblr');
  } else if(scrollPos <= neatPos - 76 && $('.main-container').hasClass('fixed-neat')) {
    $('.main-container').removeClass('fixed-neat');
  } else if(scrollPos >= addPos && !$('.main-container').hasClass('fixed-add')){
    $('.main-container').addClass('fixed-add');
    $('.main-container').removeClass('fixed-neat');
    $('.main-container').removeClass('fixed-tumblr');
  } else if(scrollPos <= addPos - 76 && $('.main-container').hasClass('fixed-add')) {
    $('.main-container').removeClass('fixed-add');
  }
});

/* neat-banner */

// $(window).scroll(function() {
//
//   var targetPos = $('.index-container').offset().top
//   console.log(targetPos);
//
//   var scrollPos = $(this).scrollTop();
//   console.log(scrollPos);
//
//   if ( scrollPos >= targetPos && !$('.index-container').hasClass('fixed-nav') ) {
//     $('.index-container').addClass('fixed-nav');
//   } else if(scrollPos <= targetPos - 74 && $('.index-container').hasClass('fixed-nav') ) {
//     $('.index-container').removeClass('fixed-nav');
//   }
//
// });

$(window).resize(function(){
  targetPos = $('.main-container').offset().top
});
