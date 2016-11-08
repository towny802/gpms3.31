/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function($){
  /*$('.bxslider').bxSlider({
      auto: true,
      maxSlides: 1,
      infiniteLoop: true,
      nextSelector: '#slider-right',
      prevSelector: '#slider-left',
      nextText: '<img src="slider-right.png" style="width:50px;"/>',
      prevText: '<img src="slider-left.png" style="width:50px;"/>'
  });*/
   
    
    $('#headerModule').load('headerModule.html');
    $('#shifterModule').load('shifterModule.html');
    $('#footerModule').load('footerModule.html');
    
        $('#prev').click(function() {
      unslider.data('unslider').prev();
      
return false;
  });
    
    $('#next').click(function() {
      unslider.data('unslider').next();
      
return false;
  });// fire when any Ajax requests complete
  
  var unslider = $('.banner').unslider({
        animation: 'horizontal', 
        autoplay: true, 
        nav: false, 
        infinite: true,
        dots: true,
        arrows: false


    });
    
  
});

$(document).ajaxComplete(function(){

$('.readMore').hide();




var clicked1 = 0;
var clicked2 = 0;

    $('#floater1').click(function () {
        if (!clicked1) {
            $('#floater1').animate({'width': '90%'}, "linear");
            $('#floater2').animate({'width': '10%'}, "linear");
            $('#industrialCap').fadeOut();
            $('#aviationCap').fadeIn();
            $('.readMore').fadeIn();
            clicked1 = 1;
            clicked2 = 0;
            
return false;
        }
        else {
            $('#floater1').animate({'width': '50%'}, "linear");
            $('#floater2').animate({'width': '50%'}, "linear");
            $('.readMore').fadeOut();
            $('#industrialCap').fadeIn();
            $('#aviationCap').fadeIn();
            clicked1 = 0;
            clicked2 = 0;
            
return false;
        }
        
    });

    $('#floater2').click(function () {
        if (!clicked2) {
            $('#floater2').animate({'width': '90%'}, "linear");
            $('#floater1').animate({'width': '10%'}, "linear");
            $('.readMore').fadeIn();
            $('#aviationCap').fadeOut();
            $('#industrialCap').fadeIn();
            clicked2 = 1;
            clicked1 = 0;
            
return false;
        }
        else {
            $('#floater1').animate({'width': '50%'}, "linear");
            $('#floater2').animate({'width': '50%'}, "linear");
            $('.readMore').fadeOut();
            $('#aviationCap').fadeIn();
            $('#industrialCap').fadeIn();
            clicked1 = 0;
            clicked2 = 0;
            
return false;
        }
        
    });

});