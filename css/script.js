$(document).ready(function () {
  $(".icon2").click(function () {
    $(".navbar,.icon").slideToggle("slow");
  });
  $(".bodytop").animate({ fontSize: '3vw' }, "slow");
  $(".redlettor").animate({ fontSize: '6vw' }, 2000);
});