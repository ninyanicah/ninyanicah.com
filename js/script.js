$(document).ready(function () {
   $(window).scroll(function () {
      if (this.scrollY > 20) {
         $(".navbar").addclass("sticky");
      } else {
         $(".navbar").removeclass("sticky");
      }
   });
   // toggle menu/navbar script
   $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".navbar i").toggleClass("active");
   });
});
