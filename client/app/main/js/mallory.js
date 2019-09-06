$(document).ready(function(){

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 50) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // highlight effect while mouse over portfolio images
  $('.portfolio-img').css('opacity', 0.5);
  $('.portfolio-img').mouseover(function(){
    $(this).fadeTo(300,1);
    $('.portfolio-img').not(this).fadeTo(300,0.5);
  });

  //pop out demo videos
  $( "#dialog" ).dialog({
    autoOpen: false,
    width:600,
    close: function( event, ui ) {
      $('#videoframe').attr('src','');
    }
  });

  $( "#video1" ).on( "click", function() {
      $('#videoframe').attr('src','https://www.youtube.com/embed/hh_dkx6_8N4?rel=0');
      $( "#dialog" ).dialog( "open" );
  });

  $( "#video2" ).on( "click", function() {
      $('#videoframe').attr('src','https://www.youtube.com/embed/97nN3E94KLs?rel=0');
      $( "#dialog" ).dialog( "open" );
  });

});
