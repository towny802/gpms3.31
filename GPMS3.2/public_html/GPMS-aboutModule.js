/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    
    $(".face").click(function () {
        
        $('.face').css({
                    'filter': 'grayscale(100%)',
                    '-webkit-filter': 'grayscale(100%)',
                    '-moz-filter': 'grayscale(100%)',
                    '-o-filter': 'grayscale(100%)',
                    '-ms-filter': 'grayscale(100%)'
                });
        
        $(this).css({
                    'filter': 'grayscale(0%)',
                    '-webkit-filter': 'grayscale(0%)',
                    '-moz-filter': 'grayscale(0%)',
                    '-o-filter': 'grayscale(0%)',
                    '-ms-filter': 'grayscale(0%)'
                });
                
        return false;
        
    });

    $('#eric').click(function () {
      $('#aboutModule').hide().load('eric.txt').fadeIn('slow');  
      
return false;
    });
    
    $('#jed').click(function () {
      $('#aboutModule').hide().load('jed.txt').fadeIn('slow'); 
      
return false;
    });

});

$(document).ajaxComplete(function() {
    
});