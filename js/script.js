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
});

function hoverdiv(e, divid) {
  var left = e.clientX + "px";
  var top = e.clientY + "px";

  var div = document.getElementById(divid);

  div.style.left = left;
  div.style.top = top;

  $("#" + divid).toggle();
  return false;
}
