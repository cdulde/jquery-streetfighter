/*global $*/
$(document).ready(function() {
  $(".ryu").mouseenter(function() {
      $(".ryu-still").hide();
      $(".ryu-ready").show();
  })
  .mouseleave(function() {
     $(".ryu-ready").hide();
     $(".ryu-still").show(); 
  })
  .mousedown(function() {
      playHadouken();
      $(".ryu-ready").hide();
      $(".ryu-throwing").show();
      $(".hadouken").finish().show()
      .animate(
          {"left":"1100px"},
          500,
          function() {
              $(".hadouken").hide();
              $(".hadouken").css("left","600px");
          });
  })
    .mouseup(function() {
      $(".ryu-throwing").hide();
      $(".ryu-ready").show();
      // ryu goes back to his ready position
  })
    $(document).keydown(function(key) {
      if (key.keyCode == 88) {
        //alert('x-key down');
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
      }
  })
      $(document).keyup(function(key) {
      if (key.keyCode == 88) {
        //alert('x-key down');
        $('.ryu-cool').hide();
        $('.ryu-still').show();
      }
  })
});


function playHadouken () {
    $("#hadouken-sound")[0].volume = 0.5;
    $("#hadouken-sound")[0].load();
    $("#hadouken-sound")[0].play();
}