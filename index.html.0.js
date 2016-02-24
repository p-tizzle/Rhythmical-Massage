
       $(document).ready(function () {
        $(".hiddenDiv").click(function(){
          $(this).next().fadeToggle("slow");
          $(this).siblings(".hiddenDiv").next().hide()
        });
    });
    
 /**************************************
          IMAGE SLIDER
 **************************************/
 /*   $('.bxslider').bxSlider({
  mode: 'fade',
  captions: true
});
*/

