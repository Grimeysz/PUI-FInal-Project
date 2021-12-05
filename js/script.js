$(document).ready(function () {
  //$("#img2").stop(true, true).delay(400).animate({ marginLeft: "50vw" });

  $("#neverjudge").stop(true, true).delay(400).animate({
    //left: "20vw",

    opacity: "1",
    fontSize: "7rem"
  });

  //$("#img3").stop(true, true).delay(800).animate({ marginLeft: "40vw" });

  $("#abook").stop(true, true).delay(800).animate({
    //left: "5vw",

    opacity: "1",
    fontSize: "7rem"
  });

  $("#byitscover").stop(true, true).delay(1200).animate({
    //left: "35vw",

    opacity: "1",
    fontSize: "7rem"
  });

  var $link = $("#img1");
  var $box = $("#box");

  $link
    .mouseenter(function () {
      clearTimeout($box.data("timeoutId"));
      $box.show(200);
    })
    .mouseleave(function () {
      var timeoutId = setTimeout(function () {
        $box.hide(200);
      }, 650);
      $box.data("timeoutId", timeoutId);
    });

  $box
    .mouseenter(function () {
      clearTimeout($box.data("timeoutId"));
    })
    .mouseleave(function () {
      var timeoutId = setTimeout(function () {
        $box.hide(200);
      }, 650);
      $box.data("timeoutId", timeoutId);
    });
});
